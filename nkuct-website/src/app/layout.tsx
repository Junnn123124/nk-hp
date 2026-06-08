import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NK UCT | 반도체 전문 자동소화 시스템",
  description: "반도체·디스플레이 FAB 전문 자동소화 시스템. FM, KFI, UL 글로벌 인증. 0.3초 초고속 감지, 300+ FAB 납품실적. CABINEX 시리즈.",
  keywords: "자동소화설비, 반도체 소화, 디스플레이 소화, FM인증, KFI인증, 클린룸 방재, CABINEX, NK UCT",
  openGraph: {
    title: "NK UCT | 반도체 전문 자동소화 시스템",
    description: "반도체·디스플레이 FAB 전문 자동소화 시스템. 글로벌 인증, 초고속 감지.",
    type: "website",
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
