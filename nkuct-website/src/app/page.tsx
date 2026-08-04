'use client';

import Link from 'next/link';
import { ArrowRight, Cpu, Monitor, Battery, Wind, Flame, Shield, CheckCircle, Award, Globe, Users } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import CountUp from '@/components/ui/CountUp';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient relative" style={{ minHeight: 'calc(100vh - var(--nav-height))', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="bg-grid-pattern absolute inset-0 opacity-40"></div>
        <div className="container-custom relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <span className="badge-section mb-6">NK UCT FIRE PROTECTION</span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                <span className="text-gradient">0.3초</span> 만에 감지합니다
              </h1>
              <p className="text-xl md:text-2xl font-bold mb-4" style={{ color: 'var(--nk-text)' }}>
                반도체·디스플레이 FAB 전용 자동소화장치 및 자동소화설비 시스템
              </p>
              <p className="text-lg mb-8 max-w-lg" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.8 }}>
                FM, CE 인증을 보유한 글로벌 수준의 화재 안전 기술. 70년 전통의 Hatsuta 기술력으로 당신의 소중한 자산과 생명을 보호합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/solutions" className="btn-primary">
                  솔루션 살펴보기 <ArrowRight size={18} />
                </Link>
                <Link href="/support" className="btn-secondary">
                  견적 요청
                </Link>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slide-in-right" delay={200} className="hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-full animate-pulse-glow"></div>
                <div className="glass-card absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 w-full animate-float">
                  <div className="flex items-center justify-between border-b pb-4 mb-6" style={{ borderColor: 'var(--nk-border)' }}>
                    <div>
                      <h3 className="font-bold text-lg">초고속 화재 감지</h3>
                      <p className="text-sm" style={{ color: 'var(--nk-text-muted)' }}>UV/IR Multi-Spectrum</p>
                    </div>
                    <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(74, 144, 217, 0.15)', color: 'var(--nk-accent)' }}>
                      <Flame size={24} />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-black text-gradient mb-2">0.3s</div>
                    <p className="text-sm font-medium" style={{ color: 'var(--nk-text-dim)' }}>감지부터 소화약제 방사까지</p>
                  </div>
                  <div className="mt-6 flex justify-center gap-2">
                    <span className="badge badge-fm">FM Approved</span>
                    <span className="badge badge-ce">CE 인증</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y" style={{ borderColor: 'var(--nk-border)', background: 'var(--nk-surface-light)' }}>
        <div className="container-custom">
          <div className="glass-panel grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0" style={{ borderColor: 'var(--nk-border-light)' }}>
            <div className="stat-card">
              <CountUp end={25} suffix="+" className="stat-value" />
              <div className="stat-label">업력 (년)</div>
            </div>
            <div className="stat-card">
              <CountUp end={300} suffix="+" className="stat-value" />
              <div className="stat-label">납품 FAB</div>
            </div>
            <div className="stat-card">
              <CountUp end={3} className="stat-value" />
              <div className="stat-label">글로벌 인증</div>
            </div>
            <div className="stat-card">
              <CountUp end={99.8} suffix="%" className="stat-value" />
              <div className="stat-label">가동률</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-section-gradient">
        <div className="container-custom">
          <AnimateOnScroll>
            <SectionHeader badge="SOLUTIONS" title="산업별 맞춤 방재 솔루션" subtitle="다양한 산업 현장의 특성을 고려한 최적의 자동소화 시스템을 설계하고 구축합니다." />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Cpu />, title: '반도체 장비 자동소화설비', desc: '초고속 감지로 고가의 반도체 핵심 장비를 방호하는 자동소화설비입니다.' },
              { icon: <Monitor />, title: '디스플레이 라인 자동소화장치', desc: '대면적 패널 공정 라인의 고온 환경 및 유기용제 취급에 특화된 화재 방호 전용 자동소화장치입니다.' },
              { icon: <Battery />, title: 'ESS 자동소화장치', desc: '리튬이온 배터리 에너지저장장치(ESS)의 열폭주를 감지하고 화재 확산을 억제하는 스마트 방호 시스템입니다.' },
              { icon: <Wind />, title: '클린룸 특화 자동소화설비', desc: '이산화탄소(CO2) 소화약제를 적용하여 클린룸 환경에 최적화된 특화 자동소화설비입니다.' },
              { icon: <Flame />, title: '배기덕트 자동소화설비', desc: '특수 서미스터형 열 감지기로 배기덕트 구간의 화재를 조기 감지하고 차단하는 자동소화설비입니다.' },
            ].map((sol, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <Link href="/solutions" className="glass-card p-8 h-full flex flex-col group block text-inherit no-underline">
                  <div className="h-14 w-14 rounded-xl flex items-center justify-center mb-6 transition-colors" style={{ background: 'rgba(74, 144, 217, 0.1)', color: 'var(--nk-accent)' }}>
                    {sol.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{sol.title}</h3>
                  <p className="mb-6 flex-grow" style={{ color: 'var(--nk-text-muted)' }}>{sol.desc}</p>
                  <div className="flex items-center text-sm font-semibold mt-auto" style={{ color: 'var(--nk-accent)' }}>
                    자세히 보기 <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimateOnScroll>
            <SectionHeader badge="PRODUCTS" title="CABINEX Series" subtitle="글로벌 인증(FM, CE)을 획득한 최고 수준의 자동소화설비 라인업" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto" style={{ margin: '0 auto' }}>
            {[
              { name: 'CABINEX-EWT2', type: '반도체, 디스플레이, ESS 맞춤형 자동소화설비', badges: ['FM', 'CE'], img: '/products/cabinex-ewt.jpg' },
              { name: 'CABINEX-EN2', type: '산업기계 전용 자동소화설비', badges: [], img: '/products/cabinex.jpg' },
              { name: 'CABINEX-KZ', type: '국소 방출 전용 자동소화설비', badges: [], img: '/products/cabinex.jpg' },
            ].map((prod, i) => (
              <AnimateOnScroll key={i} delay={i * 150}>
                <div className="glass-card overflow-hidden">
                  <div className="h-48 relative flex items-center justify-center overflow-hidden" style={{ background: 'rgba(0, 27, 94, 0.7)' }}>
                    <img src={prod.img} alt={prod.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, mixBlendMode: 'overlay' }} />
                    <div className="relative z-10 text-center flex flex-col items-center">
                      <div className="text-3xl font-black text-white drop-shadow-md">{prod.name}</div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{prod.name}</h3>
                    <p className="mb-4 text-sm" style={{ color: 'var(--nk-text-muted)' }}>{prod.type}</p>
                    <div className="flex justify-center gap-2 mb-6">
                      { prod.badges.includes('FM') && <span className="badge badge-fm">FM</span> }
                      { prod.badges.includes('CE') && <span className="badge badge-ce">CE</span> }
                    </div>
                    <Link href="/products" className="btn-secondary w-full justify-center">제품 상세정보</Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Global Export Section */}
      <section className="section-padding bg-section-gradient">
        <div className="container-custom">
          <AnimateOnScroll>
            <SectionHeader badge="GLOBAL EXPORT" title="해외 수출에 최적화된 자동방재 기업" subtitle="세계 최고 수준의 FM 인증 설비로 귀사의 성공적인 해외 진출을 완벽하게 지원합니다." />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center mx-auto export-grid-container">
            <AnimateOnScroll animation="slide-in-left">
              <div className="glass-card h-full export-card-left">
                <h3 className="text-2xl font-bold mb-6 text-gradient-warm" style={{ marginBottom: '1.5rem' }}>성공적인 해외 수출의 든든한 파트너</h3>
                <p className="text-lg mb-6" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  반도체 제조 장비, 디스플레이 라인, 그리고 ESS 에너지 저장장치를 해외로 수출할 때 <strong>FM 인증을 획득한 화재 방호 시스템</strong>은 선택이 아닌 필수 요구사항인 경우가 많습니다.
                </p>
                <p className="text-lg" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.8 }}>
                  NK UCT는 까다로운 글로벌 안전 기준을 통과한 FM 인증 자동 소화설비를 바탕으로, <strong>20년 이상 전 세계 각국에 설비를 공급해 온 수출 전문 기업</strong>입니다. 어떠한 조건과 환경에서도 완벽하게 부합하는 시스템으로 귀사의 수출 경쟁력을 한층 더 높여드립니다.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-in-right" delay={200}>
              <div className="grid grid-cols-1" style={{ gap: '1.5rem' }}>
                <div className="glass-panel items-start border-l-4 hover:-translate-y-1 transition-transform export-card-right" style={{ borderLeftColor: 'var(--nk-accent)' }}>
                  <div className="rounded-full bg-blue-100/50 flex-shrink-0" style={{ color: 'var(--nk-accent)', padding: '0.75rem' }}>
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ marginBottom: '0.5rem' }}>20년 이상의 글로벌 실적</h4>
                    <p className="text-sm" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.6 }}>아시아, 미주, 유럽 등 세계 주요 국가의 반도체 및 디스플레이 현장에 소화 설비를 성공적으로 구축해 온 풍부한 경험을 보유하고 있습니다.</p>
                  </div>
                </div>
                
                <div className="glass-panel items-start border-l-4 hover:-translate-y-1 transition-transform export-card-right" style={{ borderLeftColor: '#F59E0B' }}>
                  <div className="rounded-full bg-yellow-100/50 text-yellow-600 flex-shrink-0" style={{ padding: '0.75rem' }}>
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ marginBottom: '0.5rem' }}>FM 인증 수출 전용 라인업</h4>
                    <p className="text-sm" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.6 }}>해외 발주처의 엄격한 규격을 100% 충족하는 FM 인증 획득 제품군으로 수출 시 발생할 수 있는 규제 리스크를 사전에 차단합니다.</p>
                  </div>
                </div>

                <div className="glass-panel items-start border-l-4 hover:-translate-y-1 transition-transform export-card-right" style={{ borderLeftColor: 'var(--nk-success)' }}>
                  <div className="rounded-full bg-green-100/50 text-green-600 flex-shrink-0" style={{ padding: '0.75rem' }}>
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold" style={{ marginBottom: '0.5rem' }}>전 세계 현지 유지보수 네트워크</h4>
                    <p className="text-sm" style={{ color: 'var(--nk-text-muted)', lineHeight: 1.6 }}>세계 각국에 자동 소화설비의 전문적인 설치 및 유지보수가 가능한 탄탄한 현지 협력업체 네트워크를 구축하여 사후 관리까지 보장합니다.</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="section-padding">
        <div className="container-custom">
          <AnimateOnScroll>
            <SectionHeader badge="PARTNERSHIP" title="글로벌 기술 파트너십" subtitle="세계적인 기업들과의 기술 협력을 통해 시너지를 창출합니다." />
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
                <p style={{ color: 'var(--nk-text-muted)' }}>반도체 라인에 특화된 엔지니어링 및 현장 맞춤형 설계 시공 전문 기업</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <div className="glass-card p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="text-3xl font-black mb-4 tracking-wider" style={{ color: 'var(--nk-primary-light)' }}>NKuct USA</div>
                <h4 className="text-xl font-bold mb-4">NKuct America, Inc. (USA)</h4>
                <p style={{ color: 'var(--nk-text-muted)' }}>미국 현지 법인으로 북미 시장 진출 기업에 대한 빠르고 전문적인 비즈니스 대응 및 현지 밀착 지원</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="container-custom relative z-10">
          <AnimateOnScroll className="glass-card p-12 text-center max-w-4xl mx-auto">
            <Shield className="mx-auto mb-6 h-16 w-16" style={{ color: 'var(--nk-accent)' }} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">맞춤형 방재 솔루션이 필요하신가요?</h2>
            <p className="text-lg mb-8" style={{ color: 'var(--nk-text-muted)' }}>
              전문 엔지니어가 귀사의 현장 상황을 분석하고 최적의 시스템을 제안해 드립니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/support" className="btn-primary">
                견적 요청하기
              </Link>
              <Link href="/support" className="btn-secondary">
                기술 문의
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
