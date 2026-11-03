'use client';

import Link from 'next/link';
import { Cpu, Monitor, Battery, Wind, Flame, CheckCircle, ArrowRight, Globe, Shield, Building2 } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Solutions() {
  const solutions = [
    {
      id: 'semiconductor',
      icon: <Cpu size={40} />,
      title: '반도체 장비 소화 시스템',
      desc: '반도체 핵심 생산 장비 내부의 화재를 초기에 감지하고 진압하는 맞춤형 자동소화 시스템입니다.',
      features: [
        '화재 감지 시 이산화탄소(CO2) 소화약제 방사',
        '장비별 독립적 개별 방호 시스템 구축',
        '장비 단위 국소 방출 방식',
        '장비 Interlock(인터록) 연동을 통한 장비 정지'
      ],
    },
    {
      id: 'display',
      icon: <Monitor size={40} />,
      title: '디스플레이 라인 방호',
      desc: 'LCD, OLED 등 디스플레이 패널 공정 라인 장비의 화재 방호를 위한 시스템입니다.',
      features: [
        '유기용제·화학물질 취급 환경을 고려한 CO2 소화약제 적용',
        '비전도성 CO2 소화약제를 사용하는 소화 방식'
      ],
    },
    {
      id: 'ess',
      icon: <Battery size={40} />,
      title: 'ESS 화재 방호',
      desc: '리튬이온 배터리 에너지저장장치(ESS)의 열폭주를 감지하고 화재 확산을 억제하는 스마트 방호 시스템입니다.',
      features: [
        '화재 감지 시 이산화탄소(CO2) 소화약제 방사',
        '자동 소화 연동 (CO2 적용)'
      ],
    },
    {
      id: 'cleanroom',
      icon: <Wind size={40} />,
      title: '클린룸 특화 방재',
      desc: '이산화탄소(CO2) 소화약제를 사용하여 클린룸 내 정밀 공정 장비 환경에 맞춘 방재 시스템입니다.',
      features: [
        'CO2는 방출 후 클린룸 환경에 미치는 영향이 적은 소화약제입니다',
        '공기 흐름을 고려한 3파장 적외선 감지기 배치 설계',
        '화학물질 증기 환경을 고려한 감지기 선정·배치'
      ],
    },
    {
      id: 'exhaust',
      icon: <Flame size={40} />,
      title: '배기덕트 소화 시스템',
      desc: '서미스터 열 감지기를 연동하여 가연성 부산물이 축적되기 쉬운 배기덕트의 화재 감지를 지원합니다.',
      features: [
        '서미스터형 열 감지기 적용',
        '화재 감지 시 덕트 댐퍼 연동 및 CO2 방사 (현장 조건에 따라 구성)'
      ],
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient relative pt-32 pb-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-70"></div>
        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <AnimateOnScroll className="flex flex-col items-center w-full">
            <span className="badge-section mb-6 text-center">SOLUTIONS</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-snug text-center">
              산업별 맞춤 <span className="text-gradient pb-2 inline-block">방재 솔루션</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-center" style={{ color: 'var(--nk-text-muted)' }}>
              반도체·디스플레이·클린룸 공정 장비부터 ESS 및 미국 진출 공장 설비까지, 각 현장의 위험 요소를 검토하여 적합한 화재 방호 시스템을 제안합니다.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* US Market Entry Highlight Banner Section */}
      <section className="section-padding bg-section-highlight">
        <div className="container-custom">
          <AnimateOnScroll>
            <SectionHeader
              badge="US MARKET ENTRY SUPPORT"
              title="미국 진출 기업 소방 설비 상담 지원"
              subtitle="미국에서는 FM 인증 등 승인 제품이 요구되는 경우가 많습니다. NK UCT는 FM 인증 설비 공급과 미국 현지 협력 소방회사 연계를 통해 귀사의 미국 진출 준비를 지원합니다."
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto" style={{ borderTop: '4px solid var(--nk-primary)' }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-panel p-6 text-center" style={{ background: '#F8FAFF' }}>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ background: 'rgba(220, 38, 38, 0.12)', color: '#B91C1C' }}>
                    <Shield size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">FM 인증 자동소화설비</h3>
                  <p className="text-sm" style={{ color: 'var(--nk-text-muted)' }}>
                    FM 인증을 획득한 <strong>CABINEX-EWT2 자동소화설비</strong>를 장비 조건에 맞춰 설계·공급합니다. 현지 승인·보험 조건은 사전 확인이 필요합니다.
                  </p>
                </div>

                <div className="glass-panel p-6 text-center" style={{ background: '#F8FAFF' }}>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0, 27, 94, 0.1)', color: 'var(--nk-primary)' }}>
                    <Building2 size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">미국 현지 소방 협력사 연계</h3>
                  <p className="text-sm" style={{ color: 'var(--nk-text-muted)' }}>
                    미국 현지 협력 소방회사와 협의하여 설치, 소방 검사 대응, 유지보수 등을 지원합니다. 지원 범위는 프로젝트별로 협의합니다.
                  </p>
                </div>

                <div className="glass-panel p-6 text-center" style={{ background: '#F8FAFF' }}>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ background: 'rgba(46, 109, 184, 0.14)', color: 'var(--nk-accent)' }}>
                    <Globe size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">다양한 산업군 진출 상담</h3>
                  <p className="text-sm" style={{ color: 'var(--nk-text-muted)' }}>
                    반도체 장비사뿐만 아니라 <strong>광학 장비, 디스플레이, 클린룸 내 각종 공장 장비, 일반 제조 공장</strong>의 미국 진출을 준비 중이시면 문의해 주십시오. 적용 가능 여부는 검토 후 안내드립니다.
                  </p>
                </div>
              </div>

              <div className="text-center pt-4 border-t" style={{ borderColor: 'var(--nk-border-light)' }}>
                <Link href="/support#contact-form" className="btn-primary">
                  미국 진출 · 장비 수출 소방 상담 문의하기 <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Solutions List */}
      <section className="section-padding bg-section-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <SectionHeader badge="CORE SOLUTIONS" title="5대 핵심 산업 방호 솔루션" subtitle="CO2 자동소화 시스템(CABINEX-EWT2)을 중심으로 각 공정 설비의 화재 방호를 제안합니다." />
          </AnimateOnScroll>

          <div className="space-y-10 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <AnimateOnScroll key={solution.id} animation="fade-in-up" delay={index * 100}>
                <div id={solution.id} className="glass-card overflow-hidden">
                  <div className="flex flex-col">
                    {/* Full content */}
                    <div className="p-8 md:p-10 w-full flex flex-col items-center text-center">
                      <div className="flex flex-col items-center gap-4 mb-6">
                        <div className="p-4 rounded-2xl border" style={{ background: 'linear-gradient(135deg, rgba(0, 27, 94, 0.08), rgba(74, 144, 217, 0.18))', borderColor: 'rgba(46, 109, 184, 0.25)', color: 'var(--nk-primary)' }}>
                          {solution.icon}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold">{solution.title}</h2>
                      </div>
                      
                      <p className="text-lg mb-8 max-w-3xl" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.7 }}>
                        {solution.desc}
                      </p>
                      
                      <div className="mb-8 w-full p-6 rounded-xl border" style={{ background: '#FFFFFF', borderColor: 'var(--nk-border-light)' }}>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left w-full">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center justify-center gap-3 bg-white p-3 rounded-lg border" style={{ borderColor: 'var(--nk-border-light)' }}>
                              <CheckCircle size={18} className="flex-shrink-0" style={{ color: 'var(--nk-accent)' }} />
                              <span className="text-center font-medium text-sm md:text-base" style={{ color: 'var(--nk-text-muted)' }}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <Link href="/support#contact-form" className="inline-flex items-center justify-center text-sm font-bold transition-colors" style={{ color: 'var(--nk-accent)' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--nk-primary)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--nk-accent)'}
                        >
                          맞춤 견적 문의하기 <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-section-gradient">
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <AnimateOnScroll className="glass-card p-10 md:p-12">
            <h2 className="text-3xl font-bold mb-6">최적의 방재 솔루션을 찾고 계신가요?</h2>
            <p className="text-lg mb-8" style={{ color: 'var(--nk-text-muted)' }}>
              NK UCT의 전문 엔지니어링 팀이 귀사의 생산 시설 및 수출 장비 도면을 분석하여 적합한 시스템 설계를 제안합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/support#contact-form" className="btn-primary">
                설계 · 미국 진출 상담 신청
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

