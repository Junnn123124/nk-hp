'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';import { productsData as products } from '@/data/products';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('전체');

  const categories = ['전체', '자동소화설비', '신에너지용', '감지기 및 센서'];

  const filteredProducts = activeCategory === '전체' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient relative pt-32 pb-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-40"></div>
        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <AnimateOnScroll className="flex flex-col items-center w-full">
            <span className="badge-section mb-6 text-center">PRODUCTS</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-snug text-center">
              제품 <span className="text-gradient pb-2 inline-block">라인업</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-center" style={{ color: 'var(--nk-text-muted)' }}>
              FM, KFI, UL 글로벌 인증을 보유한 최고의 품질. 감지부터 소화까지 완벽한 방호 시스템을 구성하는 제품들입니다.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding min-h-screen">
        <div className="container-custom">
          
          {/* Category Filter */}
          <AnimateOnScroll>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                    activeCategory === category 
                      ? 'text-white shadow-[0_0_15px_rgba(74,144,217,0.4)]' 
                      : 'text-slate-400 hover:border-blue-400 hover:text-white'
                  }`}
                  style={{
                    backgroundColor: activeCategory === category ? 'var(--nk-accent)' : 'transparent',
                    borderColor: activeCategory === category ? 'var(--nk-accent)' : 'var(--nk-border)',
                    padding: '0.35rem 1rem',
                    whiteSpace: 'nowrap',
                    minWidth: 'max-content',
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <AnimateOnScroll key={product.id} animation="fade-in-up" delay={(index % 3) * 100}>
                <div className="glass-card h-full flex flex-col group overflow-hidden">
                  {/* Product Image Placeholder */}
                  <div className="h-48 md:h-56 relative overflow-hidden flex items-center justify-center border-b bg-white" style={{ borderColor: 'var(--nk-border-light)' }}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow relative items-center text-center">
                    <span className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--nk-accent)' }}>
                      {product.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{product.name}</h3>
                    <p className="mb-6 flex-grow text-sm md:text-base" style={{ color: 'var(--nk-text-muted)' }}>
                      {product.desc}
                    </p>
                    
                    <div className="mt-auto w-full flex flex-col items-center">
                      <div className="flex flex-wrap justify-center gap-2 mb-6 min-h-[2rem]">
                        {product.badges.map(badge => (
                          <span key={badge} className={`badge badge-${badge.toLowerCase()}`}>
                            {badge === 'FM' ? 'FM Approved' : badge}
                          </span>
                        ))}
                      </div>
                      
                      <Link href={`/products/${product.id}`} className="flex items-center justify-center text-sm font-bold w-full transition-colors group-hover:text-blue-400" style={{ color: 'var(--nk-text)' }}>
                        자세히 보기 <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          
          {/* Note */}
          <AnimateOnScroll className="mt-16 text-center">
            <div className="inline-block glass-panel px-6 py-4 rounded-xl border border-blue-900/50">
              <p className="text-sm" style={{ color: 'var(--nk-text-muted)' }}>
                * 본 페이지의 제품 정보는 요약본입니다. 정확한 설계 사양 및 데이터시트는 
                <Link href="/support" className="text-blue-400 font-bold ml-1 hover:underline">카탈로그를 다운로드</Link>거나 기술 문의를 이용해 주세요.
              </p>
            </div>
          </AnimateOnScroll>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-section-gradient border-t" style={{ borderColor: 'var(--nk-border)' }}>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6">제품에 대해 더 알고 싶으신가요?</h2>
            <p className="text-lg mb-8" style={{ color: 'var(--nk-text-muted)' }}>
              상세한 기술 자료와 인증서, 그리고 귀사 환경에 맞는 제품 추천을 받아보세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/support" className="btn-primary">
                <Download size={18} /> 통합 카탈로그 다운로드
              </Link>
              <Link href="/support" className="btn-secondary">
                영업팀 문의하기
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
