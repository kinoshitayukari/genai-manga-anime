import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "漫画特化 生成AIスクール",
  description:
    "漫画制作に特化した生成AIスクール。プロ監修のワークフローで作画と収益化を最短習得。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
