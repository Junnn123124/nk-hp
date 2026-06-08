'use client';

import Link from 'next/link';
import { Building2, Monitor, Globe, MapPin, Award } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import CountUp from '@/components/ui/CountUp';
import SectionHeader from '@/components/ui/SectionHeader';

export default function References() {
  const clients = [
    {
      name: '삼성전자',
      nameEn: 'Samsung Electronics',
      icon: <Building2 size={32} />,
      desc: '반도체(DS) 및 디스플레이 사업부 다수 FAB 공정 내 핵심 장비 자동소화 시스템 납품',
      location: '화성, 평택, 기흥 캠퍼스',
      stats: [
        { label: 'FAB 수', value: '150+' },
        { label: '납품 시작', value: '2005년' },
        { label: '장비 수', value: '5,000+' }
      ]
    },
    {
      name: 'SK하이닉스',
      nameEn: 'SK Hynix',
      icon: <Building2 size={32} />,
      desc: '메모리 반도체 생산 라인 전역에 걸친 고신뢰성 화재 방호 시스템 구축',
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
      desc: '초대형 LCD 및 OLED 패널 생산라인 내 유기용제 특화 방호 시스템 납품',
      location: '파주, 구미 캠퍼스',
      stats: [
        { label: '라인 수', value: '50+' },
        { label: '납품 시작', value: '2010년' },
        { label: '장비 수', value: '1,500+' }
      ]
    },
    {
      name: 'BOE Technology',
      nameEn: 'BOE',
      icon: <Globe size={32} />,
      desc: '중국 디스플레이 시장 점유율 1위 기업 생산라인 방호 설비 수출 및 현지 구축',
      location: '중국 내 다수 사업장',
      stats: [
        { label: '라인 수', value: '30+' },
        { label: '납품 시작', value: '2015년' },
        { label: '국가', value: '중국' }
      ]
    },
    {
      name: 'DB하이텍',
      nameEn: 'DB HiTek',
      icon: <Building2 size={32} />,
      desc: '아날로그 및 파운드리 반도체 특화 FAB 내 고정밀 장비 소화 시스템 납품',
      location: '부천 캠퍼스',
      stats: [
        { label: 'FAB 수', value: '10+' },
        { label: '납품 시작', value: '2012년' },
        { label: '국가', value: '한국' }
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
            <span className="badge-section mb-6 text-center">REFERENCES</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-snug text-center">
              주요 <span className="text-gradient pb-2 inline-block">납품실적</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-center" style={{ color: 'var(--nk-text-muted)' }}>
              글로벌 최고 수준의 기술력으로 국내외 주요 반도체·디스플레이 기업에 안전을 제공하고 있습니다.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y relative z-20" style={{ borderColor: 'var(--nk-border)', background: 'var(--nk-surface-light)' }}>
        <div className="container-custom">
          <div className="glass-panel grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0" style={{ borderColor: 'var(--nk-border-light)' }}>
            <div className="stat-card">
              <CountUp end={300} suffix="+" className="stat-value" />
              <div className="stat-label">납품 FAB 수</div>
            </div>
            <div className="stat-card">
              <CountUp end={5} suffix="개사+" className="stat-value" />
              <div className="stat-label">주요 고객사</div>
            </div>
            <div className="stat-card">
              <CountUp end={3} suffix="개국" className="stat-value" />
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
      <section className="section-padding min-h-screen">
        <div className="container-custom">
          
          <div className="space-y-12 max-w-5xl mx-auto">
            {clients.map((client, index) => (
              <AnimateOnScroll key={client.name} animation="fade-in-up" delay={index * 100}>
                <div className="glass-card p-8 md:p-10 relative overflow-hidden group">
                  {/* Decorative background element */}
                  <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-400/10 transition-colors duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col gap-8">
                    {/* Client Info */}
                    <div className="w-full flex flex-col items-center text-center">
                      <div className="flex flex-col items-center gap-4 mb-6">
                        <div className="h-16 w-16 rounded-2xl flex items-center justify-center border shadow-lg" style={{ background: 'rgba(0, 27, 94, 0.5)', borderColor: 'var(--nk-border)', color: 'var(--nk-text)' }}>
                          {client.icon}
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold">{client.name}</h2>
                          <div className="text-sm uppercase tracking-wider" style={{ color: 'var(--nk-text-dim)' }}>{client.nameEn}</div>
                        </div>
                      </div>
                      
                      <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: 'var(--nk-text-muted)' }}>
                        {client.desc}
                      </p>
                      
                      <div className="flex items-center justify-center gap-2 text-sm font-medium" style={{ color: 'var(--nk-accent)' }}>
                        <MapPin size={16} />
                        {client.location}
                      </div>
                    </div>
                    
                    {/* Stats Box */}
                    <div className="w-full flex items-center justify-center">
                      <div className="glass-panel w-full max-w-3xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border border-blue-900/40">
                        {client.stats.map((stat, idx) => (
                          <div key={idx} className="flex flex-col justify-center items-center text-center border-b sm:border-b-0 sm:border-r last:border-0 pb-4 sm:pb-0" style={{ borderColor: 'var(--nk-border-light)' }}>
                            <span className="text-sm font-medium mb-1" style={{ color: 'var(--nk-text-muted)' }}>{stat.label}</span>
                            <span className="text-2xl font-bold text-gradient-warm">{stat.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
            
            <AnimateOnScroll delay={500} className="text-center pt-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border bg-blue-900/10" style={{ borderColor: 'var(--nk-border-light)' }}>
                <Award size={20} style={{ color: 'var(--nk-accent)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--nk-text-muted)' }}>이 외에도 다수의 국내외 반도체 장비 제조사(OEM)에 납품 중입니다.</span>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-section-gradient border-t" style={{ borderColor: 'var(--nk-border)' }}>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6">귀사의 FAB에도 최적의 방재 시스템을 구축하세요</h2>
            <p className="text-lg mb-8" style={{ color: 'var(--nk-text-muted)' }}>
              글로벌 일류 기업들이 선택한 NK UCT의 기술력을 직접 확인해 보십시오.
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
