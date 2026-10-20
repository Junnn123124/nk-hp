'use client';

import Link from 'next/link';
import { ArrowRight, Cpu, Monitor, Battery, Wind, Flame, Shield, CheckCircle, Award, Globe, Users, Building2, Eye } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import CountUp from '@/components/ui/CountUp';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient relative" style={{ minHeight: 'calc(100vh - var(--nav-height))', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="bg-grid-pattern absolute inset-0 opacity-70"></div>
        <div className="container-custom relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <span className="badge-section mb-6">NK UCT FIRE PROTECTION</span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                <span className="text-gradient">0.3초</span> 만에 감지합니다
              </h1>
              <p className="text-xl md:text-2xl font-bold mb-4" style={{ color: 'var(--nk-text)' }}>
                반도체·디스플레이·광학장비·클린룸 및 미국 진출 공장 전용 자동소화설비 시스템
              </p>
              <p className="text-lg mb-8 max-w-lg" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.8 }}>
                미국 진출의 필수 요건인 <strong>FM 인증(FM Approved)</strong>과 CE 인증 보유! 70년 전통의 Hatsuta 기술력과 <strong>미국 현지 협력 소방회사 네트워크</strong>로 귀사의 국내외 공장 및 장비 자산을 완벽하게 보호합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/solutions" className="btn-primary">
                  솔루션 살펴보기 <ArrowRight size={18} />
                </Link>
                <Link href="/support#contact-form" className="btn-secondary" style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
                  미국 진출·견적 문의
                </Link>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slide-in-right" delay={200} className="hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/25 to-blue-400/15 rounded-full animate-pulse-glow"></div>
                <div className="glass-card absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 w-full animate-float">
                  <div className="flex items-center justify-between border-b pb-4 mb-6" style={{ borderColor: 'var(--nk-border)' }}>
                    <div>
                      <h3 className="font-bold text-lg">초고속 화재 감지 · 진압</h3>
                      <p className="text-sm" style={{ color: 'var(--nk-text-muted)' }}>CABINEX-EWT2 (CO2 자동소화설비)</p>
                    </div>
                    <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(46, 109, 184, 0.16)', color: 'var(--nk-accent)' }}>
                      <Flame size={24} />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-black text-gradient mb-2">0.3s</div>
                    <p className="text-sm font-medium" style={{ color: 'var(--nk-text-dim)' }}>감지부터 CO2 소화약제 방사까지</p>
                  </div>
                  <div className="mt-6 flex justify-center gap-2">
                    <span className="badge badge-fm">FM Approved (미국 필수)</span>
                    <span className="badge badge-ce">CE 인증</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Section - Framed Boundary Bar */}
      <section
        className="py-12 relative z-20"
        style={{
          background: 'linear-gradient(90deg, #00154C 0%, #0A2B7A 50%, #00154C 100%)',
          borderTop: '3px solid #4A90D9',
          borderBottom: '3px solid #4A90D9',
          boxShadow: '0 10px 30px rgba(0, 27, 94, 0.18)',
        }}
      >
        <div className="container-custom">
          <div className="glass-panel grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0" style={{ background: 'rgba(255, 255, 255, 0.96)', borderColor: 'var(--nk-border)' }}>
            <div className="stat-card">
              <CountUp end={25} suffix="+" className="stat-value" />
              <div className="stat-label">업력 (년)</div>
            </div>
            <div className="stat-card">
              <CountUp end={300} suffix="+" className="stat-value" />
              <div className="stat-label">납품 FAB 및 공장</div>
            </div>
            <div className="stat-card">
              <CountUp end={2} suffix="대 국제인증" className="stat-value" />
              <div className="stat-label">FM Approved · CE</div>
            </div>
            <div className="stat-card">
              <CountUp end={99.8} suffix="%" className="stat-value" />
              <div className="stat-label">시스템 가동 신뢰도</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-section-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <SectionHeader badge="SOLUTIONS" title="산업별 맞춤 방재 솔루션" subtitle="반도체·디스플레이·광학장비·클린룸부터 ESS 및 일반 제조 공장까지 최적의 자동소화 시스템을 설계·구축합니다." />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Cpu />, title: '반도체 장비 자동소화설비', desc: '초고속 감지로 고가의 반도체 핵심 생산 장비를 방호하는 맞춤형 자동소화설비입니다.' },
              { icon: <Monitor />, title: '디스플레이·광학장비 자동소화장치', desc: '디스플레이 패널 공정 및 고정밀 광학 장비(Optical Equipment)의 고온·유기용제 환경에 특화된 자동소화장치입니다.' },
              { icon: <Battery />, title: 'ESS·배터리 자동소화장치', desc: '리튬이온 배터리 에너지저장장치(ESS)의 열폭주를 감지하고 화재 확산을 억제하는 스마트 방호 시스템입니다.' },
              { icon: <Wind />, title: '클린룸 공정 장비 특화 소화설비', desc: '이산화탄소(CO2) 소화약제를 적용하여 2차 오염 없이 클린룸 내 각종 정밀 공정 장비를 보호하는 특화 설비입니다.' },
              { icon: <Flame />, title: '배기덕트 자동소화설비', desc: '특수 서미스터형 열 감지기로 배기덕트 구간의 화재를 조기 감지하고 차단하는 자동소화설비입니다.' },
              { icon: <Building2 />, title: '미국 진출 공장·산업설비 방재', desc: '미국 공장 진출 시 필수적인 FM 인증 소화설비 적용과 미국 현지 협력 소방회사를 통한 현지 정착을 지원합니다.' },
            ].map((sol, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <Link href="/solutions" className="glass-card p-8 h-full flex flex-col group block text-inherit no-underline">
                  <div className="h-14 w-14 rounded-xl flex items-center justify-center mb-6 transition-colors border" style={{ background: 'linear-gradient(135deg, rgba(0, 27, 94, 0.08), rgba(74, 144, 217, 0.18))', borderColor: 'rgba(46, 109, 184, 0.25)', color: 'var(--nk-primary)' }}>
                    {sol.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{sol.title}</h3>
                  <p className="mb-6 flex-grow" style={{ color: 'var(--nk-text-muted)' }}>{sol.desc}</p>
                  <div className="flex items-center text-sm font-semibold mt-auto pt-4 border-t" style={{ color: 'var(--nk-accent)', borderColor: 'var(--nk-border-light)' }}>
                    자세히 보기 <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-section-gradient">
        <div className="container-custom">
          <AnimateOnScroll>
            <SectionHeader badge="PRODUCTS" title="CABINEX Series" subtitle="글로벌 인증(FM, CE)을 획득한 최고 수준의 자동소화설비 라인업" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto" style={{ margin: '0 auto' }}>
            {[
              { name: 'CABINEX-EWT2', type: '반도체, 디스플레이, 광학장비, ESS 맞춤형 자동소화설비', badges: ['FM', 'CE'], img: '/products/cabinex-ewt.jpg' },
              { name: 'CABINEX-EN2', type: '산업기계 전용 자동소화설비', badges: [], img: '/products/cabinex.jpg' },
              { name: 'CABINEX-KZ', type: '국소 방출 전용 자동소화설비', badges: [], img: '/products/cabinex.jpg' },
            ].map((prod, i) => (
              <AnimateOnScroll key={i} delay={i * 150}>
                <div className="glass-card overflow-hidden h-full flex flex-col">
                  <div className="h-48 relative flex items-center justify-center overflow-hidden border-b" style={{ background: 'rgba(0, 27, 94, 0.82)', borderColor: 'var(--nk-border)' }}>
                    <img src={prod.img} alt={prod.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55, mixBlendMode: 'overlay' }} />
                    <div className="relative z-10 text-center flex flex-col items-center">
                      <div className="text-3xl font-black text-white drop-shadow-md">{prod.name}</div>
                    </div>
                  </div>
                  <div className="p-6 text-center flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-1">{prod.name}</h3>
                    <p className="mb-4 text-sm flex-grow" style={{ color: 'var(--nk-text-muted)' }}>{prod.type}</p>
                    <div className="flex justify-center gap-2 mb-6 min-h-[28px]">
                      { prod.badges.includes('FM') && <span className="badge badge-fm">FM Approved</span> }
                      { prod.badges.includes('CE') && <span className="badge badge-ce">CE 인증</span> }
                    </div>
                    <Link href="/products" className="btn-secondary w-full justify-center">제품 상세정보</Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* US Market Entry & Global Export Section */}
      <section id="us-expansion" className="section-padding bg-section-highlight">
        <div className="container-custom">
          <AnimateOnScroll>
            <SectionHeader
              badge="US MARKET & GLOBAL EXPORT"
              title="미국 공장·장비 진출의 든든한 소방 파트너"
              subtitle="반도체 장비사뿐만 아니라 광학 장비, 디스플레이, 클린룸 공정 설비 및 일반 제조 공장의 미국 진출과 현지 정착을 완벽하게 도와드립니다."
            />
          </AnimateOnScroll>

          {/* Target Industry Pills */}
          <AnimateOnScroll delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                '✓ 반도체 제조 장비',
                '✓ 광학 장비 (Optical Equipment)',
                '✓ 디스플레이 공정 장비',
                '✓ 클린룸 내 각종 정밀 공장 장비',
                '✓ 2차전지 · ESS 설비',
                '✓ 미국 현지 진출 일반 제조 공장',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-bold shadow-sm"
                  style={{
                    background: '#FFFFFF',
                    color: 'var(--nk-primary)',
                    border: '1.5px solid rgba(0, 27, 94, 0.25)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch mx-auto export-grid-container">
            <AnimateOnScroll animation="slide-in-left">
              <div className="glass-card h-full export-card-left flex flex-col justify-between" style={{ borderTop: '4px solid var(--nk-primary)' }}>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold mb-4" style={{ background: 'rgba(220, 38, 38, 0.12)', color: '#B91C1C' }}>
                    미국 진출 필수 요건 · FM 인증 & 현지 소방 협력사 보유
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient-warm" style={{ marginBottom: '1.25rem' }}>
                    미국에 공장이나 장비를 진출하시나요?<br />NK UCT가 미국 정착을 도와드립니다
                  </h3>
                  <p className="text-base md:text-lg mb-5" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.8 }}>
                    미국은 현지 소방법규 및 글로벌 보험사 기준이 매우 엄격하여, 공장 설립이나 설비 반입 시 <strong>FM 인증(FM Approved)을 획득한 자동소화설비</strong>가 필수적으로 요구됩니다.
                  </p>
                  <p className="text-base md:text-lg mb-5" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.8 }}>
                    반도체 장비사뿐만 아니라 <strong>광학 장비, 디스플레이 장비, 클린룸 환경의 각종 공장 장비, 그리고 미국에 새롭게 공장을 진출하려는 일반 제조 기업</strong>이라도 걱정하지 마십시오.
                  </p>
                  <p className="text-base md:text-lg" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.8 }}>
                    NK UCT는 <strong>미국 현지 협력 소방 전문 회사</strong> 및 미국 법인(<strong>NKuct America, Inc.</strong>) 네트워크를 보유하고 있으며, 삼성전자 미국 텍사스 오스틴 공장 납품 등으로 검증된 노하우를 바탕으로 <strong>미국 진출 준비부터 현지 설치·승인·정착까지 원스톱으로 지원</strong>합니다.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-4" style={{ borderColor: 'var(--nk-border-light)' }}>
                  <div className="text-sm font-semibold" style={{ color: 'var(--nk-primary)' }}>
                    미국 진출 소방 기준·FM 인증 설비 적용이 막막하시다면 지금 편하게 연락 주세요!
                  </div>
                  <Link href="/support#contact-form" className="btn-primary text-sm py-3 px-6">
                    미국 진출 상담 신청 <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-in-right" delay={200}>
              <div className="grid grid-cols-1 h-full" style={{ gap: '1.25rem' }}>
                <div className="glass-panel items-start border-l-4 hover:-translate-y-1 transition-transform export-card-right" style={{ borderLeftColor: '#DC2626', background: '#FFFFFF' }}>
                  <div className="rounded-xl flex-shrink-0" style={{ background: 'rgba(220, 38, 38, 0.12)', color: '#B91C1C', padding: '0.85rem' }}>
                    <CheckCircle size={26} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ marginBottom: '0.4rem', color: 'var(--nk-primary-dark)' }}>
                      1. 미국 필수 규격 ‘FM 인증(FM Approved)’ 완벽 대응
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.7 }}>
                      FM 인증 소화기가 필수인 미국 시장 규격에 100% 부합하는 <strong>CABINEX-EWT2(CO2 자동소화설비)</strong>를 통해, 클린룸 장비·광학 장비·디스플레이 및 공장 설비 반입 시 발생하는 인허가 및 보험 리스크를 완벽히 해결합니다.
                    </p>
                  </div>
                </div>

                <div className="glass-panel items-start border-l-4 hover:-translate-y-1 transition-transform export-card-right" style={{ borderLeftColor: 'var(--nk-primary)', background: '#FFFFFF' }}>
                  <div className="rounded-xl flex-shrink-0" style={{ background: 'rgba(0, 27, 94, 0.1)', color: 'var(--nk-primary)', padding: '0.85rem' }}>
                    <Users size={26} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ marginBottom: '0.4rem', color: 'var(--nk-primary-dark)' }}>
                      2. 미국 현지 협력 소방회사 & 미국 법인 밀착 지원
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.7 }}>
                      미국 현지의 전문 소방 협력회사 및 <strong>NKuct America, Inc.</strong>와 긴밀히 협력하여, 국내 출고 전 설계·장착은 물론 미국 공장 반입 후 현지 소방 연동, 셋업, 유지보수까지 현지 정착에 실질적인 도움을 드립니다.
                    </p>
                  </div>
                </div>

                <div className="glass-panel items-start border-l-4 hover:-translate-y-1 transition-transform export-card-right" style={{ borderLeftColor: 'var(--nk-accent)', background: '#FFFFFF' }}>
                  <div className="rounded-xl flex-shrink-0" style={{ background: 'rgba(46, 109, 184, 0.14)', color: 'var(--nk-accent)', padding: '0.85rem' }}>
                    <Eye size={26} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ marginBottom: '0.4rem', color: 'var(--nk-primary-dark)' }}>
                      3. 광학·디스플레이·클린룸 장비 및 일반 공장까지 전방위 확대
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.7 }}>
                      반도체 장비뿐만 아니라 <strong>광학(Optical) 장비, 디스플레이, 2차전지/ESS, 클린룸용 정밀 설비, 일반 제조 공장</strong> 등 미국 시장에 진출하려는 모든 기업의 장비 특성에 맞춘 맞춤형 소방 솔루션을 제안합니다.
                    </p>
                  </div>
                </div>

                <div className="glass-panel items-start border-l-4 hover:-translate-y-1 transition-transform export-card-right" style={{ borderLeftColor: 'var(--nk-success)', background: '#FFFFFF' }}>
                  <div className="rounded-xl flex-shrink-0" style={{ background: 'rgba(16, 185, 129, 0.14)', color: '#047857', padding: '0.85rem' }}>
                    <Globe size={26} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ marginBottom: '0.4rem', color: 'var(--nk-primary-dark)' }}>
                      4. 삼성 오스틴·마이크론 등 검증된 글로벌 수출 레퍼런스
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.7 }}>
                      삼성전자 미국 텍사스 오스틴 반도체 공장, 마이크론 싱가포르, 유럽·북미 배터리 프로젝트 등 25년 이상 축적된 해외 수출 실적으로 검증된 신뢰성을 약속합니다.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="section-padding bg-section-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <SectionHeader badge="PARTNERSHIP" title="글로벌 기술 및 미국 현지 파트너십" subtitle="한·미·일 글로벌 소방 네트워크를 통해 국내 설계부터 미국 현지 정착까지 책임집니다." />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimateOnScroll delay={100}>
              <div className="glass-card p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="text-3xl font-black mb-4 tracking-wider" style={{ color: '#E53E3E' }}>HATSUTA</div>
                <h4 className="text-xl font-bold mb-4">Hatsuta Seisakusho (Japan)</h4>
                <p style={{ color: 'var(--nk-text-muted)' }}>70년 이상의 소화 기술 노하우를 보유한 일본의 산업용 소화 시스템 글로벌 리더</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="glass-card p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="text-3xl font-black mb-4 tracking-wider text-gradient">NKT</div>
                <h4 className="text-xl font-bold mb-4">NKT Engineering (Korea)</h4>
                <p style={{ color: 'var(--nk-text-muted)' }}>반도체·디스플레이·광학·클린룸 라인에 특화된 엔지니어링 및 현장 맞춤형 설계 시공 전문 기업</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <div className="glass-card p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="text-3xl font-black mb-4 tracking-wider" style={{ color: 'var(--nk-primary-light)' }}>NKuct USA</div>
                <h4 className="text-xl font-bold mb-4">NKuct America & 미국 현지 협력 소방사</h4>
                <p style={{ color: 'var(--nk-text-muted)' }}>미국 현지 법인 및 미국 내 전문 소방 협력회사와의 파트너십을 통해 공장·장비의 미국 진출 및 현지 안착 밀착 지원</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-section-gradient">
        <div className="bg-grid-pattern absolute inset-0 opacity-60"></div>
        <div className="container-custom relative z-10">
          <AnimateOnScroll className="glass-card p-10 md:p-14 text-center max-w-4xl mx-auto" style={{ borderTop: '4px solid var(--nk-primary)' }}>
            <Shield className="mx-auto mb-6 h-16 w-16" style={{ color: 'var(--nk-primary)' }} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">미국 시장 진출이나 맞춤형 방재 솔루션이 필요하신가요?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--nk-text-muted)' }}>
              반도체 장비는 물론 광학 장비, 디스플레이, 클린룸 공정 장비 및 일반 공장까지 —<br className="hidden md:inline" />
              FM 인증 소화설비 적용과 미국 현지 소방 협력사 연계를 통해 귀사의 성공적인 진출을 돕겠습니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/support#contact-form" className="btn-primary">
                미국 진출 · 견적 문의하기 <ArrowRight size={18} />
              </Link>
              <Link href="/support#downloads" className="btn-secondary" style={{ background: '#FFFFFF' }}>
                카탈로그 다운로드
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

