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
              <span className="badge badge-ul"><CheckCircle size={12} /> UL</span>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.25rem', color: 'var(--nk-text)' }}>회사소개</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['CEO 인사말', '회사 연혁', '파트너십', '인증 현황'].map((item) => (
                <Link key={item} href="/company" style={{ color: 'var(--nk-text-muted)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--nk-accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--nk-text-muted)'}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Solution Links */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.25rem', color: 'var(--nk-text)' }}>솔루션</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['반도체 장비 소화', '디스플레이 라인', 'ESS 화재 방호', '클린룸 통합 방재', '배기덕트 소화'].map((item) => (
                <Link key={item} href="/solutions" style={{ color: 'var(--nk-text-muted)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--nk-accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--nk-text-muted)'}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.25rem', color: 'var(--nk-text)' }}>연락처</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="tel:031-000-0000" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--nk-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>
                <Phone size={16} style={{ color: 'var(--nk-accent)' }} />
                031-000-0000
              </a>
              <a href="mailto:info@nkuct.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--nk-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>
                <Mail size={16} style={{ color: 'var(--nk-accent)' }} />
                info@nkuct.com
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--nk-text-muted)', fontSize: '0.85rem' }}>
                <MapPin size={16} style={{ color: 'var(--nk-accent)', flexShrink: 0, marginTop: '2px' }} />
                경기도 화성시 동탄첨단산업1로 00
              </div>
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
