import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIチャットボット | クリニック・士業・EC向けRAG対応",
  description:
    "御院・御事務所の文書を学習したAIが、診療案内・料金・予約などの問い合わせに24時間自動回答。月額9,800円から。医療機関・士業・EC・社内ドキュメント対応。",
  openGraph: {
    title: "AIチャットボット | クリニック・士業・EC向けRAG対応",
    description:
      "御院・御事務所の文書を学習したAIが、診療案内・料金・予約などの問い合わせに24時間自動回答。月額9,800円から。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIチャットボット | クリニック・士業・EC向けRAG対応",
    description:
      "御院・御事務所の文書を学習したAIが、診療案内・料金・予約などの問い合わせに24時間自動回答。月額9,800円から。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
