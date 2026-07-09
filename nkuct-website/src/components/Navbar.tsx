'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, FileText, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/company', label: '회사소개' },
  { href: '/solutions', label: '솔루션' },
  { href: '/products', label: '제품' },
  { href: '/references', label: '납품실적' },
  { href: '/support', label: '고객지원' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(255, 255, 255, 0.95)'
          : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled
          ? '1px solid rgba(0, 27, 94, 0.1)'
          : '1px solid transparent',
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img src="/logo.svg" alt="NK UCT Logo" style={{ height: '75px', width: 'auto' }} />
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: '0.5rem 1rem',
                color: 'var(--nk-text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                borderRadius: '0.5rem',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--nk-text)';
                e.currentTarget.style.background = 'rgba(74, 144, 217, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--nk-text-muted)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="desktop-cta">
          <a
            href="tel:031-000-0000"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--nk-text-muted)',
              fontSize: '0.85rem',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--nk-accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--nk-text-muted)'}
          >
            <Phone size={16} />
            031-000-0000
          </a>
          <Link href="/support" className="btn-primary" style={{ padding: '0.625rem 1.25rem', fontSize: '0.85rem' }}>
            <FileText size={16} />
            견적 요청
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--nk-border)',
            padding: '1rem 0',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.875rem 1.5rem',
                color: 'var(--nk-text-muted)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
                transition: 'all 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ padding: '0.875rem 1.5rem', borderTop: '1px solid var(--nk-border)', marginTop: '0.5rem', paddingTop: '1rem' }}>
            <Link href="/support" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}>
              <FileText size={16} />
              견적 요청
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
