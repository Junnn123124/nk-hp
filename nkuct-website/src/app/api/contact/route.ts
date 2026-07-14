import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, company, phone, email, inquiryType, message } = data;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials are not set in environment variables');
      return NextResponse.json({ error: '서버 환경 변수 설정 오류' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name} (${company})" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL || 'info@nkuct.com',
      subject: `[홈페이지 문의] ${inquiryType} - ${company} ${name}`,
      text: `
NK UCT 홈페이지에서 새로운 문의가 접수되었습니다.

■ 문의 유형: ${inquiryType}
■ 회사명: ${company}
■ 담당자 성함: ${name}
■ 연락처: ${phone}
■ 이메일: ${email}

■ 문의 내용:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #001B5E; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">새로운 고객 문의가 접수되었습니다</h2>
          </div>
          <div style="padding: 24px; background-color: #f8fafc;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; width: 120px; font-weight: bold; color: #475569;">문의 유형</td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${inquiryType}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">회사명</td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${company}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">담당자 성함</td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${name}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">연락처</td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">이메일</td><td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td></tr>
            </table>
            <div style="margin-top: 24px;">
              <h3 style="margin-top: 0; color: #475569; font-size: 16px;">문의 내용</h3>
              <div style="background-color: white; padding: 16px; border: 1px solid #e2e8f0; border-radius: 4px; white-space: pre-wrap; color: #0f172a; line-height: 1.6;">${message}</div>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 16px; text-align: center; color: #64748b; font-size: 12px;">
            이 메일은 NK UCT 홈페이지의 자동 발송 시스템을 통해 전송되었습니다.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: '이메일이 성공적으로 전송되었습니다.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: '이메일 전송에 실패했습니다.' }, { status: 500 });
  }
}
