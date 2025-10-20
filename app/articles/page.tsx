import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Article = {
  href: string;
  title: string;
};

export const runtime = "nodejs";

function getArticles(): Article[] {
  const articlesDir = path.join(process.cwd(), "public", "articles");
  if (!fs.existsSync(articlesDir)) {
    return [];
  }

  try {
    const entries = fs.readdirSync(articlesDir, { withFileTypes: true });

    return entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
      .map((entry) => {
        const slug = entry.name;
        const title = entry.name
          .replace(/\.html$/i, "")
          .replace(/[_-]+/g, " ")
          .replace(/\b([a-z])/g, (match) => match.toUpperCase());

        return {
          href: `/articles/${slug}`,
          title,
        };
      })
      .sort((a, b) => a.title.localeCompare(b.title, "ja"));
  } catch (error) {
    console.error("Failed to read articles directory", error);
    return [];
  }
}

export const metadata: Metadata = {
  title: "記事一覧 | 漫画特化AIスクール",
  description:
    "漫画と生成AIに関する記事をまとめたライブラリです。気になるトピックをチェックしましょう。",
};

export default function ArticlesPage() {
  const articles = getArticles();

  return (
    <main className="mx-auto max-w-5xl space-y-10 px-4 py-16">
      <section className="space-y-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
          記事ライブラリ
        </span>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          生成AIと漫画制作の最新記事
        </h1>
        <p className="text-base text-slate-600 md:text-lg">
          公開中のHTML記事をまとめました。気になるテーマを選んで詳細をご確認ください。
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold text-slate-900 transition group-hover:text-indigo-600">
              {article.title}
            </h2>
            <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-indigo-600">
              記事を開く
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
        {articles.length === 0 && (
          <p className="text-center text-sm text-slate-500">
            現在公開中の記事はありません。今後の更新をお待ちください。
          </p>
        )}
      </section>
    </main>
  );
}
