'use client';

import Link from 'next/link';
import { ArrowRight, Cpu, Monitor, Battery, Wind, Flame, Shield, CheckCircle, Award, Globe, Users, Building2, Eye } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import CountUp from '@/components/ui/CountUp';
import SectionHeader from '@/components/ui/SectionHeader';
import GlobeNetwork from '@/components/ui/GlobeNetwork';

export default function Home() {
  return (
    <div className="space-to-earth-journey">
      {/* Hero Section — 별이 빛나는 우주(Space) + 상단 타이틀 + 중앙 대형 3D 지구본 */}
      <section
        className="hero-space-section relative"
        style={{
          minHeight: 'calc(100vh - var(--nav-height))',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          padding: '3.5rem 0 4rem',
        }}
      >
        {/* 별이 빛나는 우주 배경 레이어 */}
        <div className="space-stars-layer" aria-hidden="true"></div>
        <div className="space-twinkle-layer" aria-hidden="true"></div>

        <div className="container-custom relative z-10" style={{ width: '100%' }}>
          <div className="flex flex-col items-center text-center">
            {/* 1. 최상단: 초기 화재 감지·소화 타이틀 및 소개 */}
            <AnimateOnScroll animation="fade-in-up" className="max-w-4xl mx-auto">
              <h1
                className="text-4xl md:text-6xl font-black leading-tight"
                style={{ marginBottom: '1.15rem', color: '#FFFFFF', textShadow: '0 4px 24px rgba(59, 130, 246, 0.35)' }}
              >
                <span
                  style={{
                    background: 'linear-gradient(135deg, #60A5FA, #93C5FD, #E0F2FE)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  초기 화재
                </span>{' '}
                감지·소화
              </h1>
              <p
                className="text-xl md:text-2xl font-bold"
                style={{
                  color: '#F1F5F9',
                  marginBottom: '1rem',
                  lineHeight: 1.5,
                  wordBreak: 'keep-all',
                  textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
                }}
              >
                반도체·디스플레이·배터리·ESS·클린룸 설비 및 미국 진출 공장을 위한 자동소화설비 시스템
              </p>
              <p
                className="text-base md:text-lg max-w-2xl mx-auto"
                style={{
                  color: '#CBD5E1',
                  lineHeight: 1.8,
                  marginBottom: '1.75rem',
                  wordBreak: 'keep-all',
                }}
              >
                <strong style={{ color: '#FFFFFF' }}>FM 인증(FM Approved)</strong>과 CE 인증을 보유한 자동소화설비를 공급합니다. 일본 본사 Hatsuta의 기술력과 <strong style={{ color: '#FFFFFF' }}>미국 현지 협력 소방회사</strong> 연계를 바탕으로 국내외 장비·설비의 화재 안전을 지원합니다.
              </p>
              <div className="flex flex-wrap justify-center gap-4" style={{ marginBottom: '2rem' }}>
                <Link
                  href="/solutions"
                  className="btn-primary"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                    borderColor: 'rgba(147, 197, 253, 0.5)',
                    boxShadow: '0 8px 28px rgba(37, 99, 235, 0.45)',
                  }}
                >
                  솔루션 살펴보기 <ArrowRight size={18} />
                </Link>
                <Link
                  href="/support#contact-form"
                  className="btn-secondary"
                  style={{
                    background: 'rgba(255, 255, 255, 0.12)',
                    color: '#FFFFFF',
                    borderColor: 'rgba(147, 197, 253, 0.55)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  미국 진출·견적 문의
                </Link>
              </div>
            </AnimateOnScroll>

            {/* 2. 그 아래: 부각된 3D 지구본 및 글로벌 거점 네트워크 */}
            <AnimateOnScroll animation="fade-in-up" delay={150} className="w-full flex flex-col items-center">
              <div className="globe-spotlight-wrap w-full flex flex-col items-center">
                <GlobeNetwork />
              </div>
              <div className="flex justify-center gap-2" style={{ marginTop: '1rem' }}>
                <span
                  className="badge badge-fm"
                  style={{ background: 'rgba(255, 255, 255, 0.92)', borderColor: 'rgba(220, 38, 38, 0.45)' }}
                >
                  FM Approved
                </span>
                <span
                  className="badge badge-ce"
                  style={{ background: 'rgba(255, 255, 255, 0.92)', borderColor: 'rgba(37, 99, 235, 0.45)' }}
                >
                  CE 인증
                </span>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Section - Framed Boundary Bar */}
      <section
        className="py-12 relative z-20"
        style={{ background: 'transparent' }}
      >
        <div className="container-custom">
          <div className="stats-grid">
            <div className="stat-card">
              <CountUp end={25} suffix="+" className="stat-value" />
              <div className="stat-label">업력 (년)</div>
            </div>
            <div className="stat-card">
              <CountUp end={5} suffix="개사" className="stat-value" />
              <div className="stat-label">주요 납품 고객사</div>
            </div>
            <div className="stat-card">
              <CountUp end={2} suffix="종" className="stat-value" />
              <div className="stat-label">보유 인증 (FM · CE)</div>
            </div>
            <div className="stat-card">
              <CountUp end={6} suffix="개국+" className="stat-value" />
              <div className="stat-label">납품 국가</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-section-white">
        <div className="container-custom">
          <AnimateOnScroll>
            <SectionHeader badge="SOLUTIONS" title="산업별 맞춤 방재 솔루션" subtitle="반도체·디스플레이·클린룸 설비부터 ESS 및 일반 제조 공장까지 각 현장에 맞는 자동소화 시스템을 설계·구축합니다." />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Cpu />, title: '반도체 장비 자동소화설비', desc: '초고속 감지로 고가의 반도체 핵심 생산 장비를 방호하는 맞춤형 자동소화설비입니다.' },
              { icon: <Monitor />, title: '디스플레이 라인 자동소화장치', desc: '디스플레이 패널 공정 라인 장비의 화재 방호를 위한 자동소화장치입니다.' },
              { icon: <Battery />, title: 'ESS·배터리 자동소화장치', desc: '리튬이온 배터리 에너지저장장치(ESS)의 열폭주를 감지하고 화재 확산을 억제하는 스마트 방호 시스템입니다.' },
              { icon: <Wind />, title: '클린룸 특화 자동소화설비', desc: '이산화탄소(CO2) 소화약제를 적용하여 클린룸 내 정밀 공정 장비 환경에 맞춘 자동소화설비입니다.' },
              { icon: <Flame />, title: '배기덕트 자동소화설비', desc: '서미스터형 열 감지기로 배기덕트 구간의 화재 감지를 지원하는 자동소화설비입니다.' },
              { icon: <Building2 />, title: '미국 진출 공장·산업설비 방재', desc: '미국 공장·설비 진출 시 FM 인증 자동소화설비 적용 상담과 미국 현지 협력 소방회사 연계를 지원합니다.' },
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
            <SectionHeader badge="PRODUCTS" title="CABINEX Series" subtitle="CABINEX 시리즈 자동소화설비 라인업 (보유 인증은 제품별로 다릅니다)" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto" style={{ margin: '0 auto' }}>
            {[
              { name: 'CABINEX-EWT2', type: '반도체, 디스플레이, ESS 맞춤형 자동소화설비', badges: ['FM', 'CE'], img: '/products/cabinex-ewt.jpg' },
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
              title="미국 공장·장비 진출을 위한 소방 설비 상담"
              subtitle="반도체 장비사뿐만 아니라 광학 장비, 디스플레이, 클린룸 공정 설비 및 일반 제조 공장의 미국 진출을 준비하는 기업의 상담을 받고 있습니다."
            />
          </AnimateOnScroll>

          {/* Target Industry Pills */}
          <AnimateOnScroll delay={100}>
            <div
              className="flex flex-wrap justify-center"
              style={{ gap: '0.85rem', marginTop: '1.5rem', marginBottom: '2.5rem' }}
            >
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
                  className="rounded-full text-sm font-bold shadow-sm inline-flex items-center justify-center"
                  style={{
                    padding: '0.65rem 1.4rem',
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
                    FM 인증 설비 · 미국 현지 협력 소방회사 연계
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient-warm" style={{ marginBottom: '1.25rem' }}>
                    미국에 공장이나 장비 진출을 준비 중이신가요?<br />NK UCT에 문의해 주십시오
                  </h3>
                  <p className="text-base md:text-lg mb-5" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.8 }}>
                    미국에서는 공장 설립이나 설비 반입 시 현지 소방당국과 보험사 기준에 따라 <strong>FM 인증(FM Approved) 등 승인을 받은 자동소화설비</strong>가 요구되는 경우가 많습니다. 구체적인 요건은 지역·시설·보험사마다 달라 사전 확인이 필요합니다.
                  </p>
                  <p className="text-base md:text-lg mb-5" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.8 }}>
                    반도체 장비사뿐만 아니라 <strong>광학 장비, 디스플레이 장비, 클린룸 환경의 공장 장비, 미국에 공장을 진출하려는 일반 제조 기업</strong>의 문의도 받고 있습니다.
                  </p>
                  <p className="text-base md:text-lg" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.8 }}>
                    NK UCT는 미국 자회사(<strong>NKuct America, Inc.</strong>) 및 <strong>미국 현지 협력 소방회사</strong>와 협력하고 있으며, 삼성전자 미국 텍사스 오스틴 공장 납품 경험을 바탕으로 <strong>진출 준비 단계부터 현지 설치·검사 대응까지 상담과 연계</strong>를 지원합니다. 지원 범위는 프로젝트별로 협의합니다.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-4" style={{ borderColor: 'var(--nk-border-light)' }}>
                  <div className="text-sm font-semibold" style={{ color: 'var(--nk-primary)' }}>
                    미국 진출 소방 기준·FM 인증 설비 적용이 궁금하시면 편하게 문의해 주세요.
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
                      1. FM 인증(FM Approved) 자동소화설비
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.7 }}>
                      FM 인증을 획득한 <strong>CABINEX-EWT2(CO2 자동소화설비)</strong>를 공급합니다. 인허가·보험 조건은 현장과 보험사 기준에 따라 달라지므로 사전에 함께 검토합니다.
                    </p>
                  </div>
                </div>

                <div className="glass-panel items-start border-l-4 hover:-translate-y-1 transition-transform export-card-right" style={{ borderLeftColor: 'var(--nk-primary)', background: '#FFFFFF' }}>
                  <div className="rounded-xl flex-shrink-0" style={{ background: 'rgba(0, 27, 94, 0.1)', color: 'var(--nk-primary)', padding: '0.85rem' }}>
                    <Users size={26} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ marginBottom: '0.4rem', color: 'var(--nk-primary-dark)' }}>
                      2. 미국 현지 협력 소방회사 연계
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.7 }}>
                      미국 현지 협력 소방회사와 협의하여 국내 출고 전 설계·장착은 물론, 미국 반입 후 설치·소방 연동·유지보수 등을 지원합니다. 지원 범위와 조건은 프로젝트별로 협의합니다.
                    </p>
                  </div>
                </div>

                <div className="glass-panel items-start border-l-4 hover:-translate-y-1 transition-transform export-card-right" style={{ borderLeftColor: 'var(--nk-accent)', background: '#FFFFFF' }}>
                  <div className="rounded-xl flex-shrink-0" style={{ background: 'rgba(46, 109, 184, 0.14)', color: 'var(--nk-accent)', padding: '0.85rem' }}>
                    <Eye size={26} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ marginBottom: '0.4rem', color: 'var(--nk-primary-dark)' }}>
                      3. 다양한 장비·공장의 진출 상담
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.7 }}>
                      반도체 장비뿐만 아니라 <strong>광학(Optical) 장비, 디스플레이, 2차전지/ESS, 클린룸용 정밀 설비, 일반 제조 공장</strong> 등 미국 진출을 준비하는 기업의 상담을 받습니다. 적용 가능 여부는 장비 사양을 검토한 후 안내드립니다.
                    </p>
                  </div>
                </div>

                <div className="glass-panel items-start border-l-4 hover:-translate-y-1 transition-transform export-card-right" style={{ borderLeftColor: 'var(--nk-success)', background: '#FFFFFF' }}>
                  <div className="rounded-xl flex-shrink-0" style={{ background: 'rgba(16, 185, 129, 0.14)', color: '#047857', padding: '0.85rem' }}>
                    <Globe size={26} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ marginBottom: '0.4rem', color: 'var(--nk-primary-dark)' }}>
                      4. 해외 납품 실적
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.7 }}>
                      삼성전자 미국 텍사스 오스틴 공장, 마이크론 싱가포르 등에 방호설비를 수출·납품한 실적이 있습니다.
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
            <SectionHeader badge="PARTNERSHIP" title="글로벌 기술 및 미국 현지 파트너십" subtitle="한·미·일 협력 네트워크를 바탕으로 국내 설계부터 미국 현지 설치 지원까지 상담해 드립니다." />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <AnimateOnScroll delay={100}>
              <div className="glass-card text-center h-full flex flex-col items-center justify-center" style={{ padding: '2rem 1.35rem' }}>
                <div className="text-3xl font-black tracking-wider" style={{ color: '#E53E3E', marginBottom: '0.6rem' }}>HATSUTA</div>
                <h4 className="font-bold" style={{ fontSize: 'clamp(0.95rem, 3.8vw, 1.15rem)', marginBottom: '0.75rem', wordBreak: 'keep-all', lineHeight: 1.4 }}>Hatsuta Seisakusho (Japan) · 본사</h4>
                <p style={{ color: 'var(--nk-text-muted)', fontSize: 'clamp(0.86rem, 3.4vw, 0.96rem)', lineHeight: 1.68, wordBreak: 'keep-all', maxWidth: '21rem' }}>NK UCT의 본사인 일본의 산업용 자동소화 시스템 제조사입니다.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="glass-card text-center h-full flex flex-col items-center justify-center" style={{ padding: '2rem 1.35rem' }}>
                <div className="text-3xl font-black tracking-wider text-gradient" style={{ marginBottom: '0.6rem' }}>NKT</div>
                <h4 className="font-bold" style={{ fontSize: 'clamp(0.95rem, 3.8vw, 1.15rem)', marginBottom: '0.75rem', wordBreak: 'keep-all', lineHeight: 1.4 }}>NKT Engineering (Korea)</h4>
                <p style={{ color: 'var(--nk-text-muted)', fontSize: 'clamp(0.86rem, 3.4vw, 0.96rem)', lineHeight: 1.68, wordBreak: 'keep-all', maxWidth: '21rem' }}>반도체·디스플레이 라인 등을 대상으로 한 엔지니어링 및 현장 맞춤형 설계·시공 기업입니다.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <div className="glass-card text-center h-full flex flex-col items-center justify-center" style={{ padding: '2rem 1.35rem' }}>
                <div className="text-3xl font-black tracking-wider" style={{ color: 'var(--nk-primary-light)', marginBottom: '0.6rem' }}>NKuct USA</div>
                <h4 className="font-bold" style={{ fontSize: 'clamp(0.92rem, 3.6vw, 1.15rem)', marginBottom: '0.75rem', wordBreak: 'keep-all', lineHeight: 1.4 }}>NKuct America, Inc. (USA) · 미국 자회사</h4>
                <p style={{ color: 'var(--nk-text-muted)', fontSize: 'clamp(0.85rem, 3.3vw, 0.95rem)', lineHeight: 1.68, wordBreak: 'keep-all', maxWidth: '20.5rem' }}>NK UCT의 미국 자회사로서 현지 협력 소방회사와 함께 공장·장비의 미국 진출 상담 및 연계를 지원합니다.</p>
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
              FM 인증 소화설비 적용 상담과 미국 현지 협력 소방회사 연계를 통해 귀사의 진출 준비를 지원하겠습니다.
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
    </div>
  );
}

