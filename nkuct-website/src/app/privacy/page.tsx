import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '개인정보처리방침 | NK UCT',
  description: 'NK UCT 홈페이지 개인정보처리방침',
};

const EFFECTIVE_DATE = '2026년 11월 3일';
const PRIVACY_EMAIL = 'info@nkuct.com';

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-hero-gradient relative pt-32 pb-16">
        <div className="bg-grid-pattern absolute inset-0 opacity-70"></div>
        <div className="container-custom relative z-10 text-center">
          <span className="badge-section mb-6">PRIVACY POLICY</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">개인정보처리방침</h1>
          <p className="text-lg" style={{ color: 'var(--nk-text-muted)' }}>시행일자: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section className="section-padding bg-section-white">
        <div className="container-custom max-w-4xl">
          <article className="glass-card p-8 md:p-12 space-y-10" style={{ lineHeight: 1.9, color: 'var(--nk-text-muted)' }}>
            <p>
              NK UCT(이하 &quot;회사&quot;)는 「개인정보 보호법」 등 관련 법령을 준수하며, 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
            </p>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제1조 (수집하는 개인정보 항목)</h2>
              <p>회사는 홈페이지의 온라인 문의(견적·기술·해외 진출 상담) 접수를 위해 아래 항목을 수집합니다.</p>
              <ul className="list-disc pl-6 mt-2">
                <li>필수항목: 회사명, 담당자 성함, 연락처(전화번호), 이메일 주소, 문의 유형, 문의 내용</li>
                <li>자동 수집항목: 접속 IP 주소(스팸 및 부정 이용 방지 목적, 문의 접수 시 일시적으로 처리)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제2조 (개인정보의 수집 및 이용 목적)</h2>
              <ul className="list-disc pl-6">
                <li>문의 내용 확인 및 답변, 견적 제공, 기술 상담</li>
                <li>상담 이력 관리 및 후속 연락</li>
                <li>스팸·부정 이용 방지</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제3조 (개인정보의 보유 및 이용 기간)</h2>
              <p>
                회사는 개인정보 수집·이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다만 문의 처리 이력은 분쟁 대응 및 상담 이력 관리를 위해 <strong>문의 접수일로부터 3년간</strong> 보관한 후 파기합니다. 관계 법령에 따라 보존이 필요한 경우에는 해당 법령에서 정한 기간 동안 보관합니다.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제4조 (개인정보의 제3자 제공)</h2>
              <p>
                회사는 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우를 제외하고는 개인정보를 제3자에게 제공하지 않습니다.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제5조 (개인정보 처리업무의 위탁 및 국외 이전)</h2>
              <p>회사는 원활한 문의 접수·알림을 위해 아래와 같이 개인정보 처리 업무를 위탁하고 있습니다.</p>
              <div className="overflow-x-auto mt-3">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr style={{ background: 'var(--nk-surface-light)' }}>
                      <th className="p-3 border" style={{ borderColor: 'var(--nk-border)' }}>수탁자</th>
                      <th className="p-3 border" style={{ borderColor: 'var(--nk-border)' }}>위탁 업무</th>
                      <th className="p-3 border" style={{ borderColor: 'var(--nk-border)' }}>이전 국가 · 방법</th>
                      <th className="p-3 border" style={{ borderColor: 'var(--nk-border)' }}>보유·이용 기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border" style={{ borderColor: 'var(--nk-border)' }}>Google LLC (Gmail)</td>
                      <td className="p-3 border" style={{ borderColor: 'var(--nk-border)' }}>문의 내용 이메일 전송 및 보관</td>
                      <td className="p-3 border" style={{ borderColor: 'var(--nk-border)' }}>미국 · 정보통신망을 통한 전송</td>
                      <td className="p-3 border" style={{ borderColor: 'var(--nk-border)' }}>제3조의 보유 기간 동안</td>
                    </tr>
                    <tr>
                      <td className="p-3 border" style={{ borderColor: 'var(--nk-border)' }}>Vercel Inc.</td>
                      <td className="p-3 border" style={{ borderColor: 'var(--nk-border)' }}>홈페이지 호스팅 및 문의 접수 서버 운영</td>
                      <td className="p-3 border" style={{ borderColor: 'var(--nk-border)' }}>미국 · 정보통신망을 통한 전송</td>
                      <td className="p-3 border" style={{ borderColor: 'var(--nk-border)' }}>접수 처리 시간 동안(별도 저장하지 않음)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                정보주체는 국외 이전을 원하지 않는 경우 문의 접수를 하지 않거나 아래 개인정보 보호책임자에게 전화·이메일로 문의하실 수 있습니다. 위탁 업무의 내용이나 수탁자가 변경되는 경우 본 방침을 통해 공개합니다.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제6조 (개인정보의 파기 절차 및 방법)</h2>
              <ul className="list-disc pl-6">
                <li>파기 절차: 보유 기간이 경과하였거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다.</li>
                <li>파기 방법: 전자적 파일은 복구할 수 없는 방법으로 영구 삭제하며, 출력물은 분쇄하거나 소각합니다.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제7조 (정보주체의 권리·의무 및 행사 방법)</h2>
              <p>정보주체는 회사에 대해 언제든지 다음의 권리를 행사할 수 있습니다.</p>
              <ul className="list-disc pl-6 mt-2">
                <li>개인정보 열람, 정정·삭제, 처리정지 요구</li>
                <li>동의 철회</li>
              </ul>
              <p className="mt-2">권리 행사는 아래 개인정보 보호책임자에게 이메일 등으로 요청하실 수 있으며, 회사는 지체 없이 조치하겠습니다.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제8조 (개인정보의 안전성 확보 조치)</h2>
              <ul className="list-disc pl-6">
                <li>개인정보 접근 권한의 최소화 및 관리</li>
                <li>통신 구간 암호화(HTTPS) 적용</li>
                <li>스팸 및 부정 접근 방지를 위한 접속 제한 조치</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제9조 (쿠키의 사용)</h2>
              <p>회사의 홈페이지는 이용자의 개인정보를 저장하거나 수시로 불러오는 쿠키(cookie)를 사용하지 않습니다. 다만 호스팅 서비스 제공 과정에서 접속 로그가 일시적으로 기록될 수 있습니다.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제10조 (개인정보 보호책임자)</h2>
              <ul className="list-disc pl-6">
                <li>책임자: NK UCT 대표이사</li>
                <li>이메일: <a href={`mailto:${PRIVACY_EMAIL}`} className="underline" style={{ color: 'var(--nk-accent)' }}>{PRIVACY_EMAIL}</a></li>
              </ul>
              <p className="mt-2">
                기타 개인정보 침해에 대한 신고나 상담이 필요하신 경우 아래 기관에 문의하실 수 있습니다.
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>개인정보침해신고센터: privacy.kisa.or.kr / (국번없이) 118</li>
                <li>개인정보분쟁조정위원회: www.kopico.go.kr / 1833-6972</li>
                <li>대검찰청 사이버수사과: www.spo.go.kr / (국번없이) 1301</li>
                <li>경찰청 사이버수사국: ecrm.police.go.kr / (국번없이) 182</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--nk-text)' }}>제11조 (개인정보처리방침의 변경)</h2>
              <p>본 방침은 {EFFECTIVE_DATE}부터 적용됩니다. 내용 추가·삭제 및 수정이 있을 경우 시행 7일 전부터 홈페이지를 통해 공지합니다.</p>
            </div>

            <div className="pt-4 border-t" style={{ borderColor: 'var(--nk-border-light)' }}>
              <Link href="/support#contact-form" className="btn-primary">문의하러 가기</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
