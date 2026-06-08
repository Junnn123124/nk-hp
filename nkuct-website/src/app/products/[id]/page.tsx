import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { productsData } from '@/data/products';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetail({ params }: ProductPageProps) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient relative pt-32 pb-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-40"></div>
        <div className="container-custom relative z-10">
          <Link href="/products" className="inline-flex items-center text-sm font-bold mb-8 hover:text-blue-400 transition-colors" style={{ color: 'var(--nk-text-muted)' }}>
            <ArrowLeft size={16} className="mr-2" /> 제품 라인업으로 돌아가기
          </Link>
          
          <AnimateOnScroll>
            <div className="flex items-center gap-4 mb-4">
              <span className="badge-section">{product.category}</span>
              <div className="flex gap-2">
                {product.badges.map(badge => (
                  <span key={badge} className={`badge badge-${badge.toLowerCase()}`}>
                    {badge === 'FM' ? 'FM Approved' : badge}
                  </span>
                ))}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              {product.name}
            </h1>
            <p className="text-xl max-w-3xl" style={{ color: 'var(--nk-text-muted)' }}>
              {product.desc}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Image */}
            <AnimateOnScroll animation="fade-in-up">
              <div className="glass-card overflow-hidden bg-white flex items-center justify-center p-8 border" style={{ borderColor: 'var(--nk-border)' }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto max-h-[500px] object-contain transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimateOnScroll>
            
            {/* Right: Info */}
            <div className="space-y-12">
              <AnimateOnScroll animation="fade-in-up" delay={100}>
                <div>
                  <h2 className="text-2xl font-bold mb-4 border-b pb-2" style={{ borderColor: 'var(--nk-border)' }}>제품 개요</h2>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--nk-text-muted)' }}>
                    {product.overview}
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-in-up" delay={200}>
                <div>
                  <h2 className="text-2xl font-bold mb-6 border-b pb-2" style={{ borderColor: 'var(--nk-border)' }}>주요 특징</h2>
                  <div className="space-y-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <CheckCircle className="text-blue-500 shrink-0 mt-1" size={24} />
                        <div>
                          <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                          <p style={{ color: 'var(--nk-text-muted)' }}>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-in-up" delay={300}>
                <div>
                  <h2 className="text-2xl font-bold mb-6 border-b pb-2" style={{ borderColor: 'var(--nk-border)' }}>성능 스펙</h2>
                  <div className="glass-panel overflow-hidden rounded-xl border" style={{ borderColor: 'var(--nk-border)' }}>
                    <table className="w-full text-left border-collapse">
                      <tbody>
                        {product.specs.map((spec, idx) => (
                          <tr key={idx} className="border-b last:border-0" style={{ borderColor: 'var(--nk-border-light)' }}>
                            <th className="py-4 px-6 font-bold w-1/3 bg-black/5 text-sm md:text-base">
                              {spec.label}
                            </th>
                            <td className="py-4 px-6 text-sm md:text-base" style={{ color: 'var(--nk-text-muted)' }}>
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-section-gradient border-t" style={{ borderColor: 'var(--nk-border)' }}>
        <div className="container-custom text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6">{product.name} 도입을 검토 중이신가요?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--nk-text-muted)' }}>
              전문 엔지니어가 귀사의 현장 환경에 가장 적합한 설계 방안을 제안해 드립니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/support" className="btn-primary">
                견적 및 기술 문의
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
