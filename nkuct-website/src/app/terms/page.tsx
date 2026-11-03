import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '이용약관 | NK UCT',
  description: 'NK UCT 홈페이지 이용약관',
};

const EFFECTIVE_DATE = '2026년 11월 3일';

export default function Terms() {
  return (
    <>
      <section className="bg-hero-gradient relative pt-32 pb-16">
        <div className="bg-grid-pattern absolute inset-0 opacity-70"></div>
        <div className="container-custom relative z-10 text-center">
          <span className="badge-section mb-6">TERMS OF USE</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">이용약관</h1>
          <p className="text-lg" style={{ color: 'var(--nk-text-muted)' }}>시행일자: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section className="section-padding bg-section-white">
        <div className="container-custom max-w-4xl">
          <article className="glass-card p-8 md:p-12 space-y-10" style={{ lineHeight: 1.9, color: 'var(--nk-text-muted)' }}>
            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제1조 (목적)</h2>
              <p>이 약관은 NK UCT(이하 &quot;회사&quot;)가 운영하는 홈페이지(이하 &quot;사이트&quot;)에서 제공하는 정보 및 온라인 문의 서비스의 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제2조 (서비스의 내용)</h2>
              <ul className="list-disc pl-6">
                <li>회사 및 제품·솔루션·납품실적에 관한 정보 제공</li>
                <li>카탈로그 등 자료 제공</li>
                <li>견적·기술·해외 진출 상담 등 온라인 문의 접수</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제3조 (정보의 성격 및 면책)</h2>
              <ol className="list-decimal pl-6">
                <li>사이트에 게시된 제품 정보, 사양, 인증 현황, 적용 범위 등은 일반적인 안내를 위한 요약 정보이며, 사전 고지 없이 변경될 수 있습니다.</li>
                <li>제품의 정확한 사양, 설계 조건, 인증 범위 및 적용 가능 여부는 별도의 기술 검토와 계약 또는 견적서를 통해 확정됩니다.</li>
                <li>미국을 비롯한 해외 시장의 소방 법규, 인허가, 보험 조건은 국가·지역·시설·보험사에 따라 다르며, 사이트의 안내는 법률·인허가에 대한 보증이나 자문이 아닙니다.</li>
                <li>회사는 이용자가 사이트 정보를 신뢰하여 취한 조치로 발생한 손해에 대해, 회사의 고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제4조 (온라인 문의 서비스)</h2>
              <ol className="list-decimal pl-6">
                <li>이용자는 정확한 정보를 입력하여야 하며, 타인의 정보를 도용하거나 허위 내용을 입력해서는 안 됩니다.</li>
                <li>회사는 문의 접수 후 합리적인 기간 내에 답변하도록 노력하나, 문의 내용이나 사정에 따라 답변이 지연되거나 이루어지지 않을 수 있습니다.</li>
                <li>문의 접수만으로 회사와 이용자 간에 계약이 성립하지 않습니다.</li>
                <li>개인정보의 처리는 <Link href="/privacy" className="underline" style={{ color: 'var(--nk-accent)' }}>개인정보처리방침</Link>에 따릅니다.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제5조 (이용자의 금지행위)</h2>
              <ul className="list-disc pl-6">
                <li>사이트 운영을 방해하거나 서버에 과도한 부하를 주는 행위</li>
                <li>자동화된 수단(봇 등)을 이용한 대량 문의 전송 및 스팸 행위</li>
                <li>사이트의 보안 기능을 우회하거나 무단 접근을 시도하는 행위</li>
                <li>법령 또는 공서양속에 반하는 내용의 전송</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제6조 (지식재산권)</h2>
              <p>사이트에 게시된 텍스트, 이미지, 로고, 카탈로그 등 모든 콘텐츠에 대한 권리는 회사 또는 정당한 권리자에게 있으며, 회사의 사전 동의 없이 복제, 배포, 수정, 상업적 이용을 할 수 없습니다. 사이트에 표시된 제3자의 상호 및 상표는 해당 권리자에게 귀속됩니다.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제7조 (서비스의 변경 및 중단)</h2>
              <p>회사는 운영상·기술상 필요에 따라 사이트의 전부 또는 일부를 변경하거나 일시 중단할 수 있으며, 가능한 경우 사전에 공지합니다.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제8조 (준거법 및 관할)</h2>
              <p>이 약관은 대한민국 법령에 따라 해석되며, 사이트 이용과 관련하여 분쟁이 발생한 경우 민사소송법상의 관할 법원을 제1심 관할 법원으로 합니다.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>부칙</h2>
              <p>이 약관은 {EFFECTIVE_DATE}부터 시행합니다.</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
