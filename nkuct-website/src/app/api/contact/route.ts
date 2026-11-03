import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// In-memory rate limiter per IP (max 5 requests per 10 minutes, with automatic pruning)
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const MAX_RATE_LIMIT_ENTRIES = 2000;
const MAX_BODY_BYTES = 20 * 1024; // 20KB payload cap
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const ALLOWED_INQUIRY_TYPES = [
  '미국 진출 및 해외 수출 상담',
  '견적 요청',
  '기술 문의',
  '기타 문의',
];

function stripControlChars(str: string): string {
  // Strip ASCII control chars (except \n, \r, \t) and Unicode BiDi override characters
  return str.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F\u202A-\u202E\u2066-\u2069]/g, '');
}

function escapeHtml(str: string): string {
  return stripControlChars(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeHeader(str: string): string {
  return stripControlChars(str).replace(/[\r\n\0"%<>]/g, ' ').trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 200 && !email.includes('..');
}

function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9+\-().\s]{7,30}$/;
  const digitCount = (phone.match(/\d/g) || []).length;
  return phoneRegex.test(phone) && digitCount >= 7 && digitCount <= 20;
}

function extractClientIp(req: Request): string {
  const cfIp = req.headers.get('cf-connecting-ip');
  if (cfIp) return cfIp.trim();
  const realIp = req.headers.get('x-real-ip');
  if (realIp) return realIp.trim();
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const parts = forwardedFor.split(',').map((s) => s.trim()).filter(Boolean);
    return parts[parts.length - 1] || 'unknown';
  }
  return 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  if (rateLimitMap.size > MAX_RATE_LIMIT_ENTRIES) {
    for (const [k, v] of rateLimitMap.entries()) {
      if (now > v.resetAt) rateLimitMap.delete(k);
    }
    if (rateLimitMap.size > MAX_RATE_LIMIT_ENTRIES) {
      const oldestKey = rateLimitMap.keys().next().value;
      if (oldestKey) rateLimitMap.delete(oldestKey);
    }
  }

  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  entry.count += 1;
  return true;
}

export async function POST(req: Request) {
  try {
    // 0. Cross-Origin (CSRF) & Content-Type Protection
    const secFetchSite = req.headers.get('sec-fetch-site');
    if (secFetchSite === 'cross-site') {
      return NextResponse.json(
        { error: '허용되지 않은 외부 출처 요청입니다.' },
        { status: 403 }
      );
    }

    const origin = req.headers.get('origin');
    const host = req.headers.get('host');
    if (origin && host) {
      try {
        const originUrl = new URL(origin);
        if (originUrl.host !== host) {
          return NextResponse.json(
            { error: '허용되지 않은 출처(Origin) 요청입니다.' },
            { status: 403 }
          );
        }
      } catch {
        return NextResponse.json(
          { error: '잘못된 출처(Origin) 헤더입니다.' },
          { status: 403 }
        );
      }
    }

    const contentType = req.headers.get('content-type') || '';
    if (!contentType.toLowerCase().includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type은 application/json 이어야 합니다.' },
        { status: 415 }
      );
    }

    // 1. Rate Limiting Check
    const clientIp = extractClientIp(req);

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: '요청이 너무 많습니다. 잠시 후 다시 시도해 주세요.' },
        { status: 429 }
      );
    }

    // 2. Safe Payload Size Check & JSON Parsing
    const rawBody = await req.text();
    if (Buffer.byteLength(rawBody, 'utf8') > MAX_BODY_BYTES) {
      return NextResponse.json(
        { error: '요청 데이터 크기가 허용 범위를 초과했습니다.' },
        { status: 413 }
      );
    }

    let data: Record<string, unknown>;
    try {
      const parsed = JSON.parse(rawBody);
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        return NextResponse.json(
          { error: '올바른 JSON 객체 형식이 아닙니다.' },
          { status: 400 }
        );
      }
      data = parsed as Record<string, unknown>;
    } catch {
      return NextResponse.json(
        { error: '잘못된 JSON 요청 형식입니다.' },
        { status: 400 }
      );
    }

    // 3. Honeypot Anti-Bot Check (hidden field 'website')
    if (data.website && String(data.website).trim().length > 0) {
      return NextResponse.json(
        { success: true, message: '이메일이 성공적으로 전송되었습니다.' },
        { status: 200 }
      );
    }

    const name = typeof data.name === 'string' ? stripControlChars(data.name).trim() : '';
    const company = typeof data.company === 'string' ? stripControlChars(data.company).trim() : '';
    const phone = typeof data.phone === 'string' ? stripControlChars(data.phone).trim() : '';
    const email = typeof data.email === 'string' ? stripControlChars(data.email).trim() : '';
    const inquiryType = typeof data.inquiryType === 'string' ? stripControlChars(data.inquiryType).trim() : '';
    const message = typeof data.message === 'string' ? stripControlChars(data.message).trim() : '';

    // 개인정보 수집·이용 동의 확인
    if (data.privacyConsent !== true) {
      return NextResponse.json(
        { error: '개인정보 수집·이용에 동의해 주세요.' },
        { status: 400 }
      );
    }

    // 4. Input Validation & Length Limits
    if (!name || !company || !phone || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: '모든 필수 항목을 입력해 주세요.' },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      company.length > 150 ||
      phone.length > 50 ||
      email.length > 200 ||
      inquiryType.length > 100 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: '입력된 글자 수가 허용 범위를 초과했습니다.' },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: '올바른 연락처(전화번호) 형식을 입력해 주세요.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 주소를 입력해 주세요.' },
        { status: 400 }
      );
    }

    const safeInquiryType = ALLOWED_INQUIRY_TYPES.includes(inquiryType)
      ? inquiryType
      : '기타 문의';

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials are not set in environment variables');
      return NextResponse.json(
        { error: '현재 문의 접수가 지연되고 있습니다. 잠시 후 다시 시도해 주세요.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 4. Sanitize Headers & Escape HTML to prevent XSS / Header Injection
    const safeHeaderName = sanitizeHeader(name);
    const safeHeaderCompany = sanitizeHeader(company);
    const safeHtmlName = escapeHtml(name);
    const safeHtmlCompany = escapeHtml(company);
    const safeHtmlPhone = escapeHtml(phone);
    const safeHtmlEmail = escapeHtml(email);
    const safeHtmlInquiryType = escapeHtml(safeInquiryType);
    const safeHtmlMessage = escapeHtml(message);

    const mailOptions = {
      from: `"${safeHeaderName} (${safeHeaderCompany})" <${process.env.EMAIL_USER}>`,
      replyTo: sanitizeHeader(email),
      to: process.env.RECEIVER_EMAIL || 'jun.jeon@nkuct.com',
      subject: `[홈페이지 문의] ${safeInquiryType} - ${safeHeaderCompany} ${safeHeaderName}`,
      text: `
NK UCT 홈페이지에서 새로운 문의가 접수되었습니다.

■ 문의 유형: ${safeInquiryType}
■ 회사명: ${company}
■ 담당자 성함: ${name}
■ 연락처: ${phone}
■ 이메일: ${email}

■ 문의 내용:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #001B5E; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">새로운 고객 문의가 접수되었습니다</h2>
          </div>
          <div style="padding: 24px; background-color: #f8fafc;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; width: 120px; font-weight: bold; color: #475569;">문의 유형</td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${safeHtmlInquiryType}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">회사명</td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${safeHtmlCompany}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">담당자 성함</td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${safeHtmlName}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">연락처</td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${safeHtmlPhone}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">이메일</td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="mailto:${safeHtmlEmail}">${safeHtmlEmail}</a></td></tr>
            </table>
            <div style="margin-top: 24px;">
              <h3 style="margin-top: 0; color: #475569; font-size: 16px;">문의 내용</h3>
              <div style="background-color: white; padding: 16px; border: 1px solid #e2e8f0; border-radius: 4px; white-space: pre-wrap; color: #0f172a; line-height: 1.6;">${safeHtmlMessage}</div>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 16px; text-align: center; color: #64748b; font-size: 12px;">
            이 메일은 NK UCT 홈페이지의 자동 발송 시스템을 통해 전송되었습니다.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: '이메일이 성공적으로 전송되었습니다.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: '이메일 전송에 실패했습니다.' },
      { status: 500 }
    );
  }
}

