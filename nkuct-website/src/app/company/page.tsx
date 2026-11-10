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
    { year: '2026.02', title: '마이크론(Micron) 싱가포르 방호설비 수출 및 자동소화설비 납품', desc: '' },
    { year: '2026.07', title: '삼성전자 미국 텍사스 오스틴 방호설비 수출 및 자동소화설비 납품', desc: '' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient relative pt-32 pb-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-40"></div>
        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <AnimateOnScroll className="flex flex-col items-center w-full">
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
      <section id="ceo" className="section-padding bg-section-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="glass-card max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10 items-center" style={{ padding: '2rem 1.5rem' }}>
              <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center border-4" style={{ borderColor: 'var(--nk-primary-light)', background: 'var(--nk-surface-lighter)' }}>
                <User size={72} style={{ color: 'var(--nk-text-dim)' }} />
              </div>
              <div className="text-mobile-center" style={{ width: '100%' }}>
                <h2 className="text-2xl md:text-3xl font-bold" style={{ marginBottom: '1.25rem' }}>CEO 인사말</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem', marginBottom: '1.5rem', color: 'var(--nk-text-muted)', fontSize: 'clamp(0.875rem, 3.4vw, 1rem)', lineHeight: 1.75, wordBreak: 'keep-all' }}>
                  <p>
                    안녕하십니까? 저희 홈페이지를 방문해 주셔서 감사합니다.
                  </p>
                  <p>
                    저희 회사는 육상·해상에 사용되는 자동·수동 소화설비 전문기업입니다. 주력 제품으로는 옥내·옥외용 수동식 소화설비, 패키지형 자동소화설비, 선박용 소화설비, 휴대용 화재 감지시험기, 휴대용 분말 소화기 등이 있습니다.
                  </p>
                  <p>
                    이러한 제품 개발을 완료하여 시판 중이며, 국내 소방안전 시스템의 초석을 다지기 위해 점차 사업 영역을 확대해 나가고 있습니다. 그 일환으로 체계적인 품질경영관리시스템 도입의 필요성을 인식하여 2002년 8월 ‘ISO 9001 품질경영시스템’을 인증받아 해외시장 확대를 위한 기반을 구축하였습니다.
                  </p>
                  <p>
                    국내 전문 소방업체로서 ‘소방안전 인식을 확산시키고 인명과 재산, 환경 보존의 소중함을 최우선으로 생각한다’는 소명 아래 설립 이후 부단한 노력과 기술 개발을 이어왔습니다. 앞으로도 더욱 신뢰받는 소방 전문기업으로 거듭나기 위해 최선을 다하겠습니다.
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

          <div className="relative max-w-4xl mx-auto" style={{ marginTop: '2.5rem' }}>
            <div className="timeline-line hidden md:block"></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {timelineEvents.map((event, index) => (
                <AnimateOnScroll 
                  key={event.year} 
                  animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                  className={`relative md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-5/12"></div>
                  <div className="timeline-dot hidden md:block z-10"></div>
                  <div className="md:w-5/12 glass-panel relative" style={{ padding: '1.25rem 1.35rem', wordBreak: 'keep-all' }}>
                    <div className="text-xl md:text-2xl font-black text-gradient" style={{ marginBottom: '0.35rem' }}>{event.year}</div>
                    <h4 className="font-bold" style={{ fontSize: 'clamp(0.95rem, 3.8vw, 1.1rem)', lineHeight: 1.5, wordBreak: 'keep-all' }}>{event.title}</h4>
                    {event.desc && <p className="text-sm" style={{ color: 'var(--nk-text-muted)', marginTop: '0.35rem' }}>{event.desc}</p>}
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding bg-section-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <SectionHeader badge="CERTIFICATIONS" title="인증 현황" subtitle="보유 인증 현황" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AnimateOnScroll delay={100}>
              <div className="glass-card h-full flex flex-col items-center text-center" style={{ padding: '2rem 1.5rem' }}>
                <Shield size={48} style={{ color: '#FCA5A5', marginBottom: '1rem' }} />
                <h3 className="text-xl font-bold" style={{ marginBottom: '0.5rem' }}>FM Approved</h3>
                <span className="badge badge-fm" style={{ marginBottom: '0.85rem' }}>인증 보유</span>
                <p className="text-sm flex-grow" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.65, wordBreak: 'keep-all' }}>
                  미국 Factory Mutual(FM)의 시험·평가를 통과한 제품에 부여되는 인증입니다. 인증은 일부 제품에 한하며, 보험 조건은 보험사 기준에 따릅니다.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <div className="glass-card h-full flex flex-col items-center text-center" style={{ padding: '2rem 1.5rem' }}>
                <Award size={48} style={{ color: '#93C5FD', marginBottom: '1rem' }} />
                <h3 className="text-xl font-bold" style={{ marginBottom: '0.5rem' }}>CE 인증</h3>
                <span className="badge badge-ce" style={{ marginBottom: '0.85rem' }}>인증 보유</span>
                <p className="text-sm flex-grow" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.65, wordBreak: 'keep-all' }}>
                  유럽 연합(EU) 시장에 유통되는 제품이 해당 안전·보건·환경 규정을 충족함을 나타내는 표시입니다. 적용 제품은 제품 정보를 확인해 주세요.
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
