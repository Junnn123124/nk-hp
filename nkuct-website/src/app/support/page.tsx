'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Headphones, FileText, Download, HelpCircle, Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '', inquiryType: '견적 요청', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: '문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.' });
        setFormData({ name: '', company: '', phone: '', email: '', inquiryType: '견적 요청', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || '발송에 실패했습니다. 관리자에게 문의해주세요.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const supportOptions = [
    {
      icon: <Headphones size={32} />,
      title: '기술 문의',
      desc: '제품 사양 및 시스템 기술 관련 문의',
      action: '기술 문의 작성',
      isLink: true,
      href: '#contact-form'
    },
    {
      icon: <FileText size={32} />,
      title: '견적 요청',
      desc: '맞춤형 자동소화 시스템 설계 및 견적',
      action: '문의 폼 작성',
      isLink: true,
      href: '#contact-form'
    },
    {
      icon: <Download size={32} />,
      title: '자료 다운로드',
      desc: '제품 카탈로그 및 기술 사양서 다운로드',
      action: '자료실 가기',
      isLink: true,
      href: '#downloads'
    },
    {
      icon: <HelpCircle size={32} />,
      title: 'FAQ',
      desc: '고객들이 자주 묻는 질문 모음',
      action: 'FAQ 보기',
      isLink: true,
      href: '#faq'
    }
  ];

  const faqs = [
    {
      q: '자동소화설비 설치에 얼마나 걸리나요?',
      a: '일반적으로 반도체 장비 1대 기준 3~4일 정도 소요되며, 현장 실사 후 정확한 일정을 안내해 드립니다.'
    },
    {
      q: 'FM 인증이란 무엇인가요?',
      a: 'FM(Factory Mutual) 인증은 세계적으로 가장 권위 있는 미국 화재 예방 및 안전 규격 인증으로, 엄격한 품질 평가와 실제 화재 테스트를 통과한 방호 설비에만 부여됩니다. FM 인증 제품을 도입할 경우 설비의 국제적인 안전성 확보는 물론, 글로벌 재물보험사로부터 보험료 할인 등의 다양한 혜택을 받으실 수 있습니다. NK UCT의 주요 제품은 FM 인증을 보유하여 세계 최고 수준의 화재 안전성을 입증하고 있습니다.'
    },
    {
      q: '견적은 어떻게 받을 수 있나요?',
      a: '견적 및 기술 문의는 웹사이트 내 "온라인 견적·기술 문의" 폼으로 문의해 주시면 감사하겠습니다. 전문 엔지니어가 도면 검토 및 현장 조사를 진행한 후 맞춤형 견적서를 신속하게 제공해 드립니다.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-gradient relative pt-32 pb-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-40"></div>
        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <AnimateOnScroll className="flex flex-col items-center w-full">
            <span className="badge-section mb-6 text-center">SUPPORT</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-snug text-center">
              무엇을 <span className="text-gradient pb-2 inline-block">도와드릴까요?</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-center" style={{ color: 'var(--nk-text-muted)' }}>
              기술 문의부터 맞춤형 견적 요청까지, NK UCT의 전문가가 빠르고 정확하게 답변해 드립니다.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Options Grid */}
      <section className="py-12 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((opt, index) => (
              <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100} className="h-full">
                <div className="glass-card p-8 h-full flex flex-col text-center hover:bg-blue-900/20 transition-colors">
                  <div className="h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(74, 144, 217, 0.1)', color: 'var(--nk-accent)' }}>
                    {opt.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{opt.title}</h3>
                  <p className="text-sm mb-6 flex-grow" style={{ color: 'var(--nk-text-muted)' }}>{opt.desc}</p>
                  
                  {opt.isLink ? (
                    <Link href={opt.href!} className="text-sm font-bold inline-flex justify-center items-center hover:underline" style={{ color: 'var(--nk-accent)' }}>
                      {opt.action}
                    </Link>
                  ) : (
                    <span className="text-sm font-bold" style={{ color: 'var(--nk-accent)' }}>
                      {opt.action}
                    </span>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information & Form Area */}
      <section id="contact-form" className="section-padding bg-section-gradient">
        <div className="container-custom">
          <AnimateOnScroll>
            <SectionHeader badge="CONTACT" title="온라인 견적/기술 문의" />
          </AnimateOnScroll>

          <div className="max-w-4xl mx-auto flex flex-col gap-8">

            <AnimateOnScroll delay={200} className="w-full lg:w-2/3 mx-auto">
              <div className="glass-panel p-8 md:p-10 border border-blue-900/30 text-left">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <FileText size={24} style={{ color: 'var(--nk-accent)' }} /> 
                  온라인 문의 폼
                </h3>
                
                {submitStatus.type === 'success' ? (
                  <div className="p-8 text-center bg-green-50 border border-green-200 rounded-xl">
                    <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                      <Mail size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-green-800 mb-2">접수 완료</h4>
                    <p className="text-green-700">{submitStatus.message}</p>
                    <button onClick={() => setSubmitStatus({ type: null, message: '' })} className="mt-6 btn-primary">새로운 문의 작성하기</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-sm font-bold" style={{ color: 'var(--nk-text-dim)' }}>회사명 *</label>
                        <input type="text" id="company" name="company" required value={formData.company} onChange={handleInputChange} className="p-3 border rounded-lg bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="NK UCT" style={{ borderColor: 'var(--nk-border)' }} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-bold" style={{ color: 'var(--nk-text-dim)' }}>담당자 성함 *</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className="p-3 border rounded-lg bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="홍길동 대리" style={{ borderColor: 'var(--nk-border)' }} />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm font-bold" style={{ color: 'var(--nk-text-dim)' }}>연락처 *</label>
                        <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} className="p-3 border rounded-lg bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="010-0000-0000" style={{ borderColor: 'var(--nk-border)' }} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-bold" style={{ color: 'var(--nk-text-dim)' }}>이메일 주소 *</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="p-3 border rounded-lg bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="example@company.com" style={{ borderColor: 'var(--nk-border)' }} />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="inquiryType" className="text-sm font-bold" style={{ color: 'var(--nk-text-dim)' }}>문의 유형 *</label>
                      <select id="inquiryType" name="inquiryType" required value={formData.inquiryType} onChange={handleInputChange} className="p-3 border rounded-lg bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" style={{ borderColor: 'var(--nk-border)' }}>
                        <option value="견적 요청">견적 요청</option>
                        <option value="기술 문의">기술 문의</option>
                        <option value="기타 문의">기타 문의</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-bold" style={{ color: 'var(--nk-text-dim)' }}>문의 내용 *</label>
                      <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleInputChange} className="p-3 border rounded-lg bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none" placeholder="문의하실 내용을 상세히 적어주시면 더 정확한 답변이 가능합니다." style={{ borderColor: 'var(--nk-border)' }}></textarea>
                    </div>

                    {submitStatus.type === 'error' && (
                      <div className="p-4 text-red-600 bg-red-50 border border-red-200 rounded-lg text-sm">
                        {submitStatus.message}
                      </div>
                    )}

                    <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-bold text-white flex justify-center items-center gap-2 transition-all duration-300 ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-1'}`}>
                      {isSubmitting ? (
                        <>발송 중...</>
                      ) : (
                        <><Mail size={20} /> 문의 보내기</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <AnimateOnScroll>
            <SectionHeader badge="FAQ" title="자주 묻는 질문" subtitle="고객님들이 주로 문의하시는 내용입니다." />
          </AnimateOnScroll>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimateOnScroll key={index} delay={index * 50}>
                <div className="faq-item">
                  <div 
                    className="faq-question" 
                    onClick={() => toggleFaq(index)}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="pr-8">{faq.q}</span>
                    <ChevronDown size={20} className={`faq-chevron flex-shrink-0 ${openFaq === index ? 'open' : ''}`} style={{ color: 'var(--nk-accent)' }} />
                  </div>
                  <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                    <div className="pt-2">
                      <span className="font-bold mr-2 text-xl align-top leading-none" style={{ color: 'var(--nk-accent)' }}>A.</span> 
                      {faq.a}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="py-20 relative overflow-hidden bg-section-gradient border-t" style={{ borderColor: 'var(--nk-border)' }}>
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6">제품 카탈로그 다운로드</h2>
            <p className="text-lg mb-12" style={{ color: 'var(--nk-text-muted)' }}>
              NK UCT의 주요 제품군에 대한 상세 설명서 및 카탈로그를 PDF 형식으로 제공합니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 카탈로그 1: 국문 종합 카탈로그 */}
              <div className="glass-card p-6 flex items-center justify-between hover:bg-blue-900/10 transition-colors">
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 rounded-full bg-blue-100" style={{ color: 'var(--nk-accent)' }}>
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">CABINEX 시리즈 종합 카탈로그</h3>
                    <p className="text-sm text-slate-500">PDF, 11.8MB</p>
                  </div>
                </div>
                <a href="/downloads/cabinex-catalog-kr.pdf" download="CABINEX_시리즈_종합_카탈로그.pdf" className="btn-secondary px-4 py-2 text-sm">
                  다운로드
                </a>
              </div>

              {/* 카탈로그 2: 영문 종합 카탈로그 (NEW) */}
              <div className="glass-card p-6 flex items-center justify-between hover:bg-blue-900/10 transition-colors">
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 rounded-full bg-blue-100" style={{ color: 'var(--nk-accent)' }}>
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">CABINEX 영문 카탈로그 (English)</h3>
                    <p className="text-sm text-slate-500">PDF, 9.7MB</p>
                  </div>
                </div>
                <a href="/downloads/cabinex-catalog-en.pdf" download="CABINEX_English_Catalog.pdf" className="btn-secondary px-4 py-2 text-sm">
                  다운로드
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
