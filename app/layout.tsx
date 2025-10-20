import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "漫画特化 生成AIスクール",
  description:
    "漫画制作に特化した生成AIスクール。プロ監修のワークフローで作画と収益化を最短習得。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSans.variable} min-h-screen font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
