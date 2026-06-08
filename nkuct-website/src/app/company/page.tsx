'use client';

import Link from 'next/link';
import { User, Shield, Award, CheckCircle } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Company() {
  const timelineEvents = [
    { year: '1998.03', title: '엔케이 코퍼레이션(NK CORPORATION) 설립', desc: '' },
    { year: '1998.03', title: 'HATSUTA SEISAKUSHO CO.,LTD.와 업무제휴', desc: '' },
    { year: '1998.05', title: '팩케이지형 소화설비 부분품 수출시작', desc: '' },
    { year: '1999.02', title: '유망중소기업체 해외인증획득 지원업체로 선정', desc: '중소기업청 주관' },
    { year: '1999.12', title: '선박용 소화설비 수출시작', desc: '' },
    { year: '2000.01', title: '(주)엔케이UCT(NK UCT CORPORATION) 법인전환', desc: '2000년 1월 27일' },
    { year: '2001.11', title: '‘100만불 수출의 탑’ 대통령상 수상', desc: '' },
    { year: '2001.12', title: '경기도 이천시 제 1공장 준공', desc: '' },
    { year: '2002.06', title: 'HATSUTA SEISAKUSHO CO.,LTD.와 해외공동개발 합의', desc: '소화설비 부문' },
    { year: '2002.06', title: '중국 상해시 현지 사무소 개설', desc: '' },
    { year: '2002.07', title: '휴대용 화재감지시험기 특허취득', desc: 'FEE-FDT-119' },
    { year: '2002.08', title: 'KSA A 9001 : 2001 / ISO 9001 : 2000', desc: '품질시스템 규격 인증' },
    { year: '2002.11', title: '경기도 이천시 제 2공장 준공', desc: '소화기 생산라인 증축' },
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
      <section className="section-padding">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-shrink-0 w-48 h-48 rounded-full flex items-center justify-center border-4" style={{ borderColor: 'var(--nk-primary-light)', background: 'var(--nk-surface-lighter)' }}>
                <User size={80} style={{ color: 'var(--nk-text-dim)' }} />
              </div>
              <div>
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
                <div className="text-right">
                  <p className="text-lg font-bold">NK UCT 대표이사</p>
                  {/* 이름은 나중에 추가 */}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-padding bg-section-gradient relative">
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
      <section className="section-padding">
        <div className="container-custom">
          <AnimateOnScroll>
            <SectionHeader badge="CERTIFICATIONS" title="인증 현황" subtitle="글로벌 표준을 충족하는 최고의 품질과 안전성" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                <h3 className="text-xl font-bold mb-3">KFI 인증</h3>
                <span className="badge badge-kfi mb-4">국가 공인</span>
                <p className="text-sm flex-grow" style={{ color: 'var(--nk-text-muted)' }}>
                  한국소방산업기술원의 철저한 성능 검증을 거친 소방용품 국가 형식 승인 및 제품 검사 합격 인증입니다.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={300}>
              <div className="glass-card p-8 h-full flex flex-col items-center text-center">
                <CheckCircle size={48} className="mb-6" style={{ color: '#6EE7B7' }} />
                <h3 className="text-xl font-bold mb-3">UL Listed</h3>
                <span className="badge badge-ul mb-4">국제 공인</span>
                <p className="text-sm flex-grow" style={{ color: 'var(--nk-text-muted)' }}>
                  미국 Underwriters Laboratories의 안전 규격을 만족하는 제품으로, 북미 및 글로벌 시장에서 안전성을 인정받습니다.
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
