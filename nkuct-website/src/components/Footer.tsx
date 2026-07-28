'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, Award, CheckCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--nk-surface)', borderTop: '1px solid var(--nk-border)' }}>
      <div className="container-custom" style={{ padding: '4rem 1.5rem 2rem' }}>
        {/* Main Footer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <img src="/logo.svg" alt="NK UCT Logo" style={{ height: '100px', width: 'auto' }} />
            </div>
            <p style={{ color: 'var(--nk-text-muted)', fontSize: '0.85rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              반도체·디스플레이 전문<br />
              자동소화 시스템 전문기업
            </p>
            {/* Certifications */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-fm"><Shield size={12} /> FM</span>
              <span className="badge badge-ce"><Award size={12} /> CE</span>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.25rem', color: 'var(--nk-text)' }}>회사소개</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'CEO 인사말', href: '/company#ceo' },
                { label: '회사 연혁', href: '/company#history' },
                { label: '파트너십', href: '/#partnership' },
                { label: '인증 현황', href: '/company#certifications' }
              ].map((item) => (
                <Link key={item.label} href={item.href} style={{ color: 'var(--nk-text-muted)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--nk-accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--nk-text-muted)'}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Solution Links */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.25rem', color: 'var(--nk-text)' }}>솔루션</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: '반도체 장비 소화', href: '/solutions#semiconductor' },
                { label: '디스플레이 라인', href: '/solutions#display' },
                { label: 'ESS 화재 방호', href: '/solutions#ess' },
                { label: '클린룸 특화 자동소화설비', href: '/solutions#cleanroom' },
                { label: '배기덕트 소화', href: '/solutions#exhaust' }
              ].map((item) => (
                <Link key={item.label} href={item.href} style={{ color: 'var(--nk-text-muted)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--nk-accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--nk-text-muted)'}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.25rem', color: 'var(--nk-text)' }}>고객지원</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: '견적/기술 문의', href: '/support#contact-form' },
                { label: '자료 다운로드', href: '/support#downloads' },
                { label: 'FAQ', href: '/support#faq' }
              ].map((item) => (
                <Link key={item.label} href={item.href} style={{ color: 'var(--nk-text-muted)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--nk-accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--nk-text-muted)'}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="section-divider" style={{ marginBottom: '1.5rem' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--nk-text-dim)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} NK UCT. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['개인정보처리방침', '이용약관'].map((item) => (
              <Link key={item} href="#" style={{ color: 'var(--nk-text-dim)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--nk-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--nk-text-dim)'}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
