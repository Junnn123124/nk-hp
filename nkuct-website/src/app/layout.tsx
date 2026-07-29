import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NK UCT | 반도체 전문 자동소화 시스템",
  description: "반도체, 디스플레이, ESS, 클린룸 전문 특화 자동소화 시스템. CABINEX-EWT2 등 글로벌 인증 획득 고성능 방재 솔루션.",
  keywords: "자동소화설비, 반도체 소화기, 디스플레이 소화설비, ESS 화재 방호, 클린룸 방재, 배기덕트 소화, CABINEX, CABINEX-EWT2, 이산화탄소 소화설비, NK UCT",
  openGraph: {
    title: "NK UCT | 첨단산업 특화 자동소화 시스템",
    description: "반도체·디스플레이 FAB 및 ESS 전용 특화 자동소화 시스템. 글로벌 인증, 0.3초 초고속 화재 감지 및 진압.",
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
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
