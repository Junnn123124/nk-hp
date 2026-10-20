import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NK UCT | 첨단산업·미국 진출 특화 자동소화 시스템 전문기업",
  description: "반도체, 디스플레이, 광학장비, ESS, 클린룸 및 미국 진출 공장·설비 맞춤형 FM 인증 자동소화 시스템(CABINEX-EWT2). 미국 현지 소방 협력사 네트워크 보유.",
  keywords: "자동소화설비, 반도체 소화기, 디스플레이 소화설비, 광학장비 소화설비, 미국 공장 진출 소방, FM인증 소화기, ESS 화재 방호, 클린룸 방재, 배기덕트 소화, CABINEX, CABINEX-EWT2, 이산화탄소 소화설비, NK UCT",
  openGraph: {
    title: "NK UCT | 첨단산업 및 미국 시장 진출 특화 자동소화 시스템",
    description: "반도체·디스플레이·광학장비·클린룸 공정 장비 및 미국 진출 공장 전용 FM 인증 자동소화 시스템. 미국 현지 소방 파트너십 지원.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="2095338126f50e1ade425147fc707a78f3a743c3" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
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
