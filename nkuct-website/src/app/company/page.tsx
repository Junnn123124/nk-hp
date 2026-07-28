'use client';

import Link from 'next/link';
import { User, Shield, Award, CheckCircle } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Company() {
  const timelineEvents = [
    { year: '1998.03', title: 'NK CORPORATION 설립', desc: '' },
    { year: '2000.03', title: 'NKUCT CORPORATION 법인설립', desc: '' },
    { year: '2003.06', title: 'SEAMLESS / WELDED STAINLESS TUBE (BA Grade) 사업 개시', desc: '' },
    { year: '2003.07', title: '휴대용 화재감지시험기 CE 인증 취득', desc: '' },
    { year: '2003.07', title: 'NK-HATSUTA 중국 상하이 합작법인 설립', desc: '' },
    { year: '2003.08', title: '차세대 자동소화설비 「SUPER OWL」 실용신안 등록', desc: '' },
    { year: '2003.10', title: 'ULTRA CLEAN TUBE E/P 생산라인 구축 (시화지점)', desc: '' },
    { year: '2006.03', title: '소화설비 조립·수출 개시 및 금곡동 공장 이전, 생산능력 확대', desc: '' },
    { year: '2007.04', title: '화재안전용 방열패널 생산공장 설립 (김포지점)', desc: '' },
    { year: '2007.06', title: '첨단산업용 화재안전 솔루션 사업 고도화 및 금속화재 대응 제품군 확대', desc: '' },
    { year: '2009.12', title: 'NK & NKT 전략적 파트너십 체결', desc: '' },
    { year: '2013~2015', title: '중국 광저우 디스플레이 산업 프로젝트(CA, CO) 1·2차 수주 및 수행', desc: '' },
    { year: '2021.02', title: '유럽 배터리 산업 시장 진출 및 글로벌 공급망 구축', desc: '' },
    { year: '2022.03', title: '북미 배터리 산업 시장 진출 및 전략적 파트너십 확대', desc: '' },
    { year: '2023.01', title: '반도체 제조설비용 자동소화설비 및 특수가스 솔루션 사업 확장', desc: '' },
    { year: '2025.04', title: '글로벌 반도체·첨단산업 프로젝트 수행 및 전략적 해외 협력 네트워크 강화', desc: '' },
    { year: '2026.06', title: '마이크론(Micron) 싱가포르 방호설비 수출 및 자동소화설비 납품', desc: '' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient relative pt-32 pb-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-40"></div>
        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <AnimateOnScroll className="flex flex-col items-center w-full">
            <span className="badge-section mb-6 text-center">ABOUT US</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-snug text-center">
              안전이 곧 <span className="text-gradient pb-2 inline-block">생산성입니다</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-center" style={{ color: 'var(--nk-text-muted)' }}>
              NK UCT는 반도체·디스플레이 산업 특화 자동소화 시스템 전문기업입니다.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CEO Message Section */}
      <section id="ceo" className="section-padding">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-shrink-0 w-48 h-48 rounded-full flex items-center justify-center border-4" style={{ borderColor: 'var(--nk-primary-light)', background: 'var(--nk-surface-lighter)' }}>
                <User size={80} style={{ color: 'var(--nk-text-dim)' }} />
              </div>
              <div className="text-mobile-center" style={{ width: '100%' }}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">CEO 인사말</h2>
                <div className="space-y-4 mb-8" style={{ color: 'var(--nk-text-muted)' }}>
                  <p>
                    안녕하십니까? 저희 홈페이지를 방문해 주셔서 감사합니다.
                  </p>
                  <p>
                    저희 회사는 육상·해상에 사용되는 자동, 수동 소화설비 전문기업입니다.<br />
                    주력 제품으로는 옥내·옥외용 수동식소화설비, 팩케이지형 자동소화설비, 선박용 소화설비,<br />
                    휴대용 화재 감지시험기, 휴대용 분말 소화기 등이 있습니다.
                  </p>
                  <p>
                    이러한 제품개발을 완료하여 시판중이며, 국내 소방안전 시스템의 초석을 다지기 위해 점차 사업 영역을 확대해 나가고 있습니다. 그의 일환으로 체계적인 품질경영관리시스템 도입의 필요성을 인식하여 2002년 8월 ‘ISO 9001 품질경영시스템’을 인증받아 해외시장 확대를 위한 기반을 구축하였습니다.
                  </p>
                  <p>
                    국내 전문소방업체로 ‘소방안전인식을 확산시키고 인명과 재산, 환경보존의 소중함을 최우선으로 생각한다’는 소명아래 설립이후 부단한 노력과 개발을 해 왔습니다. 이러한 마음가짐을 토대로 국내 최고의 선진소방업체로 거듭나기 위하여 더욱 노력하겠습니다.
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold">NK UCT 대표이사</p>
                  {/* 이름은 나중에 추가 */}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* History Timeline */}
      <section id="history" className="section-padding bg-section-gradient relative">
        <div className="container-custom relative">
          <AnimateOnScroll>
            <SectionHeader badge="HISTORY" title="회사 연혁" subtitle="지속적인 혁신과 도전의 발자취" />
          </AnimateOnScroll>

          <div className="relative max-w-4xl mx-auto mt-16">
            <div className="timeline-line hidden md:block"></div>
            
            <div className="space-y-8 md:space-y-0">
              {timelineEvents.map((event, index) => (
                <AnimateOnScroll 
                  key={event.year} 
                  animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                  className={`relative md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-5/12"></div>
                  <div className="timeline-dot hidden md:block z-10"></div>
                  <div className="md:w-5/12 glass-panel p-6 ml-6 md:ml-0 relative">
                    {/* 모바일 타임라인 점 */}
                    <div className="absolute top-8 -left-8 w-4 h-4 rounded-full border-2 border-surface bg-accent md:hidden" style={{ borderColor: 'var(--nk-surface)', background: 'var(--nk-accent)' }}></div>
                    <div className="text-2xl font-black text-gradient mb-2">{event.year}</div>
                    <h4 className="text-lg font-bold mb-2">{event.title}</h4>
                    <p className="text-sm" style={{ color: 'var(--nk-text-muted)' }}>{event.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding">
        <div className="container-custom">
          <AnimateOnScroll>
            <SectionHeader badge="CERTIFICATIONS" title="인증 현황" subtitle="글로벌 표준을 충족하는 최고의 품질과 안전성" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AnimateOnScroll delay={100}>
              <div className="glass-card p-8 h-full flex flex-col items-center text-center">
                <Shield size={48} className="mb-6" style={{ color: '#FCA5A5' }} />
                <h3 className="text-xl font-bold mb-3">FM Approved</h3>
                <span className="badge badge-fm mb-4">국제 공인</span>
                <p className="text-sm flex-grow" style={{ color: 'var(--nk-text-muted)' }}>
                  미국 Factory Mutual 사의 엄격한 테스트를 통과한 글로벌 최고 수준의 화재 안전 제품 인증. 보험료 할인 혜택이 적용됩니다.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <div className="glass-card p-8 h-full flex flex-col items-center text-center">
                <Award size={48} className="mb-6" style={{ color: '#93C5FD' }} />
                <h3 className="text-xl font-bold mb-3">CE 인증</h3>
                <span className="badge badge-ce mb-4">국제 공인</span>
                <p className="text-sm flex-grow" style={{ color: 'var(--nk-text-muted)' }}>
                  유럽 연합(EU)의 엄격한 안전, 건강, 환경 규격을 충족하는 제품에 부여되는 국제 통합 인증입니다.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t" style={{ borderColor: 'var(--nk-border)', background: 'var(--nk-surface)' }}>
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-6">NK UCT와 함께 안전한 작업 환경을 구축하세요</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/support" className="btn-primary">
              견적 요청
            </Link>
            <Link href="/support" className="btn-secondary">
              기술 문의
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
