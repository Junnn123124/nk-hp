'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Headphones, FileText, Download, HelpCircle, Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const supportOptions = [
    {
      icon: <Headphones size={32} />,
      title: '기술 문의',
      desc: '제품 사양 및 시스템 기술 관련 문의',
      action: '031-000-0000',
      isLink: false
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
      a: '일반적으로 반도체 장비 1대 기준 1~2일, FAB 전체 규모에 따라 1~4주 소요됩니다. 현장 실사 후 정확한 일정을 안내해 드립니다.'
    },
    {
      q: 'FM 인증과 KFI 인증의 차이는 무엇인가요?',
      a: 'FM(Factory Mutual)은 미국 기반의 글로벌 화재 안전 인증으로 세계적으로 통용되며 보험료 할인 혜택이 있습니다. KFI는 한국소방산업기술원의 국가 공인 인증으로 국내 소방법을 충족하기 위한 필수 인증입니다. NK UCT의 주요 제품은 두 인증을 모두 보유하고 있습니다.'
    },
    {
      q: '설치 후 유지보수는 어떻게 이루어지나요?',
      a: '정기 점검(반기 1회 권장)과 예방 정비 서비스를 제공합니다. 24시간 긴급 기술지원 콜센터를 운영하며, 장애 발생 시 4시간 이내 현장 출동 시스템을 갖추고 있습니다.'
    },
    {
      q: '기존에 설치된 다른 소방 설비 및 시스템과 호환이 가능한가요?',
      a: '네, 가능합니다. 기존 소방 수신반 및 고객사의 원격 감시 제어 시스템(BMS/FMS)과 완벽하게 연동할 수 있도록 다양한 통신 프로토콜과 접점을 지원합니다. 현장 조사를 통해 최적의 연동 방안을 제안해 드립니다.'
    },
    {
      q: '견적은 어떻게 받을 수 있나요?',
      a: '전화(031-000-0000) 또는 이메일(info@nkuct.com)로 문의해주시면, 전문 엔지니어가 도면 검토 및 현장 조사를 진행한 후 맞춤형 견적서를 제공해 드립니다. 통상적으로 현장 조사 후 3~5일 이내에 견적서를 받아보실 수 있습니다.'
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
            <SectionHeader badge="CONTACT" title="연락처 정보" />
          </AnimateOnScroll>

          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            <AnimateOnScroll delay={100} className="w-full">
              <div className="glass-card p-10 flex flex-col justify-center items-center text-center space-y-8">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-900/30" style={{ color: 'var(--nk-accent)' }}><Phone size={24} /></div>
                  <div>
                    <div className="text-sm font-semibold mb-1" style={{ color: 'var(--nk-text-dim)' }}>고객센터 전화</div>
                    <div className="text-xl font-bold">031-000-0000</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-900/30" style={{ color: 'var(--nk-accent)' }}><Mail size={24} /></div>
                  <div>
                    <div className="text-sm font-semibold mb-1" style={{ color: 'var(--nk-text-dim)' }}>이메일 문의</div>
                    <div className="text-xl font-bold">info@nkuct.com</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-900/30" style={{ color: 'var(--nk-accent)' }}><Clock size={24} /></div>
                  <div>
                    <div className="text-sm font-semibold mb-1" style={{ color: 'var(--nk-text-dim)' }}>운영 시간</div>
                    <div className="text-lg font-bold">평일 09:00 - 18:00</div>
                    <div className="text-sm mt-1" style={{ color: 'var(--nk-text-muted)' }}>(주말 및 공휴일 휴무)</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-900/30" style={{ color: 'var(--nk-accent)' }}><MapPin size={24} /></div>
                  <div>
                    <div className="text-sm font-semibold mb-1" style={{ color: 'var(--nk-text-dim)' }}>오시는 길</div>
                    <div className="text-lg font-bold">경기도 화성시 동탄첨단산업1로 00</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200} className="w-full">
              <div className="glass-panel p-10 border border-blue-900/30 flex items-center justify-center text-center">
                <div>
                  <FileText size={48} className="mx-auto mb-6 opacity-50" style={{ color: 'var(--nk-text-dim)' }} />
                  <h3 className="text-xl font-bold mb-4">온라인 견적/문의 폼</h3>
                  <p className="mb-8 text-sm" style={{ color: 'var(--nk-text-muted)' }}>시스템 개발 중입니다. 현재는 전화나 이메일을 통해 문의해 주시면 감사하겠습니다.</p>
                  <a href="mailto:info@nkuct.com" className="btn-primary">
                    <Mail size={18} className="mr-2" /> 이메일 보내기
                  </a>
                </div>
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
              {/* 카탈로그 1 */}
              <div className="glass-card p-6 flex items-center justify-between hover:bg-blue-900/10 transition-colors">
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 rounded-full bg-blue-100" style={{ color: 'var(--nk-accent)' }}>
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">CABINEX 시리즈 종합 카탈로그</h3>
                    <p className="text-sm text-slate-500">PDF, 3.2MB</p>
                  </div>
                </div>
                <a href="https://drive.google.com/file/d/1JU90iyK_W1UPF5fAMPD9DjK2GUs6PVnN/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-2 text-sm">
                  다운로드
                </a>
              </div>
              
              {/* 카탈로그 2 */}
              <div className="glass-card p-6 flex items-center justify-between hover:bg-blue-900/10 transition-colors">
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 rounded-full bg-blue-100" style={{ color: 'var(--nk-accent)' }}>
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">CABINEX-EWT2 상세 사양서</h3>
                    <p className="text-sm text-slate-500">PDF, 2.5MB</p>
                  </div>
                </div>
                <a href="https://drive.google.com/file/d/1KtkIBA7CEKErkuwPaW3ArIDaSHVI6e-2/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-2 text-sm">
                  다운로드
                </a>
              </div>

              {/* 카탈로그 3 */}
              <div className="glass-card p-6 flex items-center justify-between hover:bg-blue-900/10 transition-colors">
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 rounded-full bg-blue-100" style={{ color: 'var(--nk-accent)' }}>
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">ing24 제품 매뉴얼</h3>
                    <p className="text-sm text-slate-500">PDF, 1.8MB</p>
                  </div>
                </div>
                <a href="https://drive.google.com/file/d/1-z6NeM-vAmM-pBYcJeq7c5LVbNYTUtQF/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-2 text-sm">
                  다운로드
                </a>
              </div>

              {/* 카탈로그 4 */}
              <div className="glass-card p-6 flex items-center justify-between hover:bg-blue-900/10 transition-colors">
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 rounded-full bg-blue-100" style={{ color: 'var(--nk-accent)' }}>
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">적외선 감지기 기술 자료</h3>
                    <p className="text-sm text-slate-500">PDF, 2.1MB</p>
                  </div>
                </div>
                <a href="https://drive.google.com/file/d/146l-FKGwkK97hqqbTv1faPsKvH-7PJbN/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-2 text-sm">
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
