'use client';

import Link from 'next/link';
import { Building2, Monitor, Globe, MapPin, Award, Cpu } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import CountUp from '@/components/ui/CountUp';
import SectionHeader from '@/components/ui/SectionHeader';

export default function References() {
  const clients = [
    {
      name: '삼성전자',
      nameEn: 'Samsung Electronics',
      icon: <Cpu size={32} />,
      desc: '미국 오스틴 반도체 공장 내 핵심 장비 자동소화 시스템 납품',
      location: '미국 텍사스 오스틴 공장',
      stats: [
        { label: 'FAB 수', value: '150+' },
        { label: '납품 시작', value: '2005년' },
        { label: '장비 수', value: '5,000+' }
      ]
    },
    {
      name: 'SK하이닉스',
      nameEn: 'SK Hynix',
      icon: <Cpu size={32} />,
      desc: '메모리 반도체 생산 라인 내 장비 자동소화 시스템 납품',
      location: '이천, 청주 캠퍼스',
      stats: [
        { label: 'FAB 수', value: '80+' },
        { label: '납품 시작', value: '2008년' },
        { label: '장비 수', value: '3,000+' }
      ]
    },
    {
      name: 'LG디스플레이',
      nameEn: 'LG Display',
      icon: <Monitor size={32} />,
      desc: 'LCD 및 OLED 패널 생산라인 내 장비 자동소화 시스템 납품',
      location: '구미 캠퍼스',
      stats: [
        { label: '라인 수', value: '50+' },
        { label: '납품 시작', value: '2010년' },
        { label: '장비 수', value: '1,500+' }
      ]
    },
    {
      name: 'DB하이텍',
      nameEn: 'DB HiTek',
      icon: <Cpu size={32} />,
      desc: '반도체 FAB 내 장비 자동소화 시스템 납품',
      location: '부천 캠퍼스',
      stats: [
        { label: 'FAB 수', value: '10+' },
        { label: '납품 시작', value: '2012년' },
        { label: '국가', value: '한국' }
      ]
    },
    {
      name: '마이크론',
      nameEn: 'Micron',
      icon: <Cpu size={32} />,
      desc: '싱가포르 반도체 생산 라인 방호 설비 수출 및 납품',
      location: '싱가포르 캠퍼스',
      stats: [
        { label: '라인 수', value: '5+' },
        { label: '납품 시작', value: '2026년' },
        { label: '국가', value: '싱가포르' }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient relative pt-32 pb-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-40"></div>
        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <AnimateOnScroll className="flex flex-col items-center w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-snug text-center">
              주요 <span className="text-gradient pb-2 inline-block">납품실적</span>
            </h1>
            <p className="max-w-3xl mx-auto text-center" style={{ color: 'var(--nk-text-muted)', fontSize: 'clamp(0.95rem, 3.8vw, 1.2rem)', lineHeight: 1.65, wordBreak: 'keep-all' }}>
              국내외 반도체·디스플레이 기업에<br className="md:hidden" /> 자동소화 시스템을 납품하고 있습니다.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-12 relative z-20"
        style={{ background: 'transparent' }}
      >
        <div className="container-custom">
          <div className="stats-grid">
            <div className="stat-card">
              <CountUp end={5} suffix="개사" className="stat-value" />
              <div className="stat-label">주요 고객사</div>
            </div>
            <div className="stat-card">
              <CountUp end={2} suffix="종" className="stat-value" />
              <div className="stat-label">보유 인증 (FM · CE)</div>
            </div>
            <div className="stat-card">
              <CountUp end={6} suffix="개국+" className="stat-value" />
              <div className="stat-label">납품 국가</div>
            </div>
            <div className="stat-card">
              <CountUp end={25} suffix="+" className="stat-value" />
              <div className="stat-label">납품 경력(년)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding min-h-screen bg-section-white">
        <div className="container-custom">
          
          <div className="max-w-5xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {clients.map((client, index) => (
              <AnimateOnScroll key={client.name} animation="fade-in-up" delay={index * 100}>
                <div className="glass-card relative overflow-hidden group" style={{ padding: '2rem 1.5rem' }}>
                  {/* Decorative background element */}
                  <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-400/10 transition-colors duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col gap-6">
                    {/* Client Info */}
                    <div className="w-full flex flex-col items-center text-center">
                      <div className="flex flex-col items-center gap-3" style={{ marginBottom: '1rem' }}>
                        <div className="h-16 w-16 rounded-2xl flex items-center justify-center border shadow-lg" style={{ background: 'rgba(0, 27, 94, 0.5)', borderColor: 'var(--nk-border)', color: 'var(--nk-text)' }}>
                          {client.icon}
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold">{client.name}</h2>
                          <div className="text-sm uppercase tracking-wider" style={{ color: 'var(--nk-text-dim)' }}>{client.nameEn}</div>
                        </div>
                      </div>
                      
                      <p className="max-w-2xl mx-auto" style={{ color: 'var(--nk-text-muted)', fontSize: 'clamp(0.92rem, 3.6vw, 1.1rem)', lineHeight: 1.65, marginBottom: '1rem', wordBreak: 'keep-all' }}>
                        {client.desc}
                      </p>
                      
                      <div className="flex items-center justify-center gap-2 text-sm font-medium" style={{ color: 'var(--nk-accent)' }}>
                        <MapPin size={16} />
                        {client.location}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
            
            <AnimateOnScroll delay={500} className="text-center" style={{ paddingTop: '0.75rem' }}>
              <div
                className="inline-flex items-center justify-center gap-2.5 border"
                style={{
                  padding: '0.9rem 1.25rem',
                  borderRadius: '0.875rem',
                  borderColor: 'var(--nk-border)',
                  background: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                <Award size={20} className="flex-shrink-0" style={{ color: 'var(--nk-accent)' }} />
                <span className="font-medium" style={{ color: 'var(--nk-text-muted)', fontSize: 'clamp(0.84rem, 3.3vw, 0.95rem)', lineHeight: 1.6, wordBreak: 'keep-all', textAlign: 'left' }}>
                  이 외에도 국내외 반도체 장비 제조사(OEM) 등에<br className="md:hidden" /> 납품한 실적이 있습니다.
                </span>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-section-gradient border-t" style={{ borderColor: 'var(--nk-border)' }}>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-bold" style={{ fontSize: 'clamp(1.35rem, 5vw, 1.875rem)', lineHeight: 1.4, marginBottom: '0.85rem', wordBreak: 'keep-all' }}>
              귀사의 설비에 맞는<br className="md:hidden" /> 방재 시스템을 상담해 보세요
            </h2>
            <p style={{ color: 'var(--nk-text-muted)', fontSize: 'clamp(0.9rem, 3.6vw, 1.1rem)', lineHeight: 1.6, marginBottom: '1.75rem', wordBreak: 'keep-all' }}>
              NK UCT의 납품 실적과 솔루션을 확인해 보십시오.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/solutions" className="btn-secondary">
                솔루션 확인하기
              </Link>
              <Link href="/support" className="btn-primary">
                도입 문의하기
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
