'use client';

import Link from 'next/link';
import { Cpu, Monitor, Battery, Wind, Flame, CheckCircle, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Solutions() {
  const solutions = [
    {
      id: 'semiconductor',
      icon: <Cpu size={40} />,
      title: '반도체 장비 소화 시스템',
      desc: 'CABINEX-EWT 시리즈를 적용하여 CVD, Etcher, Implanter 등 반도체 핵심 생산 장비 내부의 화재를 초기에 감지하고 진압하는 맞춤형 소화 시스템입니다.',
      features: [
        '0.3초 이내 초고속 화재 감지 및 소화약제 방사',
        '장비별 독립적 개별 방호 시스템 구축 (CABINEX-EWT 적용)',
        '생산 중단을 최소화하는 국소 방출 방식 (CABINEX-KZ 활용)',
        '장비 Interlock(인터록) 연동으로 즉각적인 장비 정지'
      ],
      stats: [
        { label: '감지시간', value: '0.3초' },
        { label: '적용 FAB', value: '300+' },
        { label: '가동률', value: '99.8%' }
      ]
    },
    {
      id: 'display',
      icon: <Monitor size={40} />,
      title: '디스플레이 라인 방호',
      desc: 'CABINEX-EN2 등을 활용하여 LCD, OLED 등 대면적 패널 공정 라인의 고온 환경과 유기용제 사용에 특화된 화재 방호 시스템입니다.',
      features: [
        '최대 50m² 대면적 장비 커버리지 확보',
        '200°C 이상 고온 공정 환경 내열성 검증',
        '유기용제 및 화학물질 화재 특화 소화약제 적용',
        '오염을 최소화하는 클린 소화 방식'
      ],
      stats: [
        { label: '커버리지', value: '최대 50m²' },
        { label: '내열성', value: '200°C' },
        { label: '적용 라인', value: '100+' }
      ]
    },
    {
      id: 'ess',
      icon: <Battery size={40} />,
      title: 'ESS 화재 방호',
      desc: 'Smart Grid Cabi 시스템을 적용하여 리튬이온 배터리 에너지저장장치(ESS)의 열폭주를 조기에 감지하고 화재 확산을 원천적으로 억제합니다.',
      features: [
        'Smart Grid Cabi를 통한 배터리 랙 단위 정밀 온도 및 가스 감지',
        '열폭주 이전 단계 조기 감지 알람 전송',
        '자동 소화 연동 및 인접 랙 확산 방지 냉각',
        '24/7 원격 모니터링 시스템 지원'
      ],
      stats: [
        { label: '감지시간', value: '1초' },
        { label: '확산 억제율', value: '99%' },
        { label: '모니터링', value: '24/7' }
      ]
    },
    {
      id: 'cleanroom',
      icon: <Wind size={40} />,
      title: '클린룸 통합 방재',
      desc: '알고나이트 CABINEX 등 친환경 소화약제를 사용하여 Class 1~100 수준의 엄격한 클린룸 환경에 최적화된 고청정 통합 방재 시스템입니다.',
      features: [
        '알고나이트(IG-55) 방사 시 클린룸 청정도 완벽 유지',
        'HEPA 필터 및 FFU 시스템 연동 차단',
        '공기 흐름을 고려한 최적의 3파장 적외선 감지기 배치 설계',
        '화학물질 증기에 의한 오감지 최소화'
      ],
      stats: [
        { label: '클린룸 등급', value: 'Class 1' },
        { label: '오감지율', value: '< 0.01%' },
        { label: '적용 FAB', value: '200+' }
      ]
    },
    {
      id: 'exhaust',
      icon: <Flame size={40} />,
      title: '배기덕트 소화 시스템',
      desc: '반도체 공정 중 가연성 부산물이 축적되기 쉬운 배기덕트 구간의 화재를 서미스터 열 감지기로 감지하고 연기 확산을 차단합니다.',
      features: [
        '덕트 내부 기류 변화에 강인한 서미스터형 특수 감지기 적용',
        '화재 감지 시 덕트 자동 차단 댐퍼 연동',
        '타 공정으로의 연기 및 유독가스 역류 방지',
        '내화학성 특수 코팅 노즐 및 배관 사용'
      ],
      stats: [
        { label: '감지 구간', value: '최대 100m' },
        { label: '차단 시간', value: '0.5초' },
        { label: '적용 라인', value: '200+' }
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
            <span className="badge-section mb-6 text-center">SOLUTIONS</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-snug text-center">
              산업별 맞춤 <span className="text-gradient pb-2 inline-block">방재 솔루션</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-center" style={{ color: 'var(--nk-text-muted)' }}>
              반도체 전공정부터 ESS 배터리 시설까지, 각 산업 환경의 고유한 위험 요소를 분석하여 최적화된 화재 방호 시스템을 제공합니다.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Solutions List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <AnimateOnScroll key={solution.id} animation="fade-in-up" delay={index * 100}>
                <div id={solution.id} className="glass-card overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left content */}
                    <div className="p-8 md:p-10 lg:w-2/3 flex flex-col items-center text-center">
                      <div className="flex flex-col items-center gap-4 mb-6">
                        <div className="p-3 rounded-xl" style={{ background: 'rgba(74, 144, 217, 0.15)', color: 'var(--nk-accent)' }}>
                          {solution.icon}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold">{solution.title}</h2>
                      </div>
                      
                      <p className="text-lg mb-8" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.7 }}>
                        {solution.desc}
                      </p>
                      
                      <div className="mb-8 w-full">
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--nk-text-dim)' }}>주요 특징</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left inline-block w-full">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center justify-center gap-3">
                              <CheckCircle size={18} className="flex-shrink-0" style={{ color: 'var(--nk-accent)' }} />
                              <span className="text-center" style={{ color: 'var(--nk-text-muted)' }}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <Link href="/support" className="inline-flex items-center justify-center text-sm font-bold transition-colors" style={{ color: 'var(--nk-accent)' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#93C5FD'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--nk-accent)'}
                        >
                          맞춤 견적 문의하기 <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Right stats */}
                    <div className="lg:w-1/3 p-8 border-t lg:border-t-0 lg:border-l flex flex-col justify-center" style={{ borderColor: 'var(--nk-border)', background: 'rgba(0, 27, 94, 0.2)' }}>
                      <div className="space-y-8">
                        {solution.stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
                            <div className="text-sm font-medium" style={{ color: 'var(--nk-text-dim)' }}>{stat.label}</div>
                          </div>
                        ))}
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
      <section className="py-20 relative overflow-hidden bg-section-gradient border-t" style={{ borderColor: 'var(--nk-border)' }}>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6">최적의 방재 솔루션을 찾고 계신가요?</h2>
            <p className="text-lg mb-8" style={{ color: 'var(--nk-text-muted)' }}>
              NK UCT의 전문 엔지니어링 팀이 귀사의 생산 시설 도면을 분석하여 가장 효율적이고 안전한 시스템 설계를 제안합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/support" className="btn-primary">
                설계 상담 신청
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
