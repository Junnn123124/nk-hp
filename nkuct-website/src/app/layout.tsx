import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nkcorpglobal.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NK UCT (엔케이유씨티) | 반도체·디스플레이·미국 진출 특화 자동소화설비 전문기업",
    template: "%s | NK UCT (엔케이유씨티)",
  },
  description:
    "NK UCT(엔케이유씨티)는 반도체, 디스플레이, 광학장비, ESS, 클린룸 및 미국 진출 공장·설비 맞춤형 FM 인증·CE 인증 자동소화설비(CABINEX-EWT2, EN2, KZ)를 공급합니다. 일본 본사 Hatsuta 기술력과 미국 현지 협력 소방회사 연계 지원.",
  keywords: [
    "NK UCT",
    "NKUCT",
    "엔케이유씨티",
    "NK CORPORATION",
    "NKT",
    "NKUSA",
    "Hatsuta",
    "하츠타",
    "NK-Hatsuta",
    "CABINEX",
    "CABINEX-EWT2",
    "CABINEX-EN2",
    "CABINEX-KZ",
    "캐비넥스",
    "자동소화설비",
    "자동소화장치",
    "반도체 장비 자동소화설비",
    "반도체 소화기",
    "반도체 소화설비",
    "디스플레이 자동소화설비",
    "광학장비 소화설비",
    "클린룸 자동소화설비",
    "클린룸 방재",
    "ESS 자동소화장치",
    "ESS 화재 방호",
    "배기덕트 자동소화설비",
    "이산화탄소 소화설비",
    "CO2 자동소화설비",
    "FM 인증 소화설비",
    "FM Approved 자동소화설비",
    "CE 인증 소화설비",
    "미국 공장 진출 소방설비",
    "미국 진출 장비 소방 인증",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "NK UCT (엔케이유씨티) | 첨단산업 및 미국 시장 진출 특화 자동소화 시스템",
    description:
      "반도체·디스플레이·광학장비·클린룸 공정 장비 및 미국 진출 공장 전용 FM 인증 자동소화 시스템(CABINEX-EWT2). 미국 현지 협력 소방회사 연계 지원.",
    url: SITE_URL,
    siteName: "NK UCT (엔케이유씨티)",
    locale: "ko_KR",
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  verification: {
    google: "d61bb0a3d7f5f8d7",
    other: {
      "naver-site-verification": "2095338126f50e1ade425147fc707a78f3a743c3",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "NK UCT (엔케이유씨티)",
      alternateName: ["NKUCT", "NK UCT Corporation", "엔케이유씨티"],
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      email: "jun.jeon@nkuct.com",
      description:
        "반도체·디스플레이·클린룸 설비 및 미국 진출 공장 특화 FM 인증·CE 인증 자동소화설비(CABINEX 시리즈) 전문기업",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "NK UCT (엔케이유씨티)",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "ko-KR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main style={{ marginTop: 'var(--nav-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
