import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ArticleMeta {
  slug: string;
  title: string;
  image: string | null;
  href: string;
}

async function getArticlesMetadata(): Promise<ArticleMeta[]> {
  const articlesDir = path.join(process.cwd(), "public", "articles");
  const entries = await fs.readdir(articlesDir);
  const htmlFiles = entries.filter((file) => file.endsWith(".html"));

  const articles = await Promise.all(
    htmlFiles.map(async (file) => {
      const filePath = path.join(articlesDir, file);
      const content = await fs.readFile(filePath, "utf8");

      const titleMatch = content.match(/<title>(.*?)<\/title>/s);
      const imageMatch = content.match(/<img[^>]+src=\"([^\"]+)\"/i);

      return {
        slug: file.replace(/\.html$/, ""),
        title: titleMatch ? titleMatch[1].trim() : file.replace(/\.html$/, ""),
        image: imageMatch ? imageMatch[1] : null,
        href: `/articles/${file}`,
      } satisfies ArticleMeta;
    })
  );

  return articles.sort((a, b) => a.slug.localeCompare(b.slug, "ja"));
}

export default async function ArticlesPage() {
  const articles = await getArticlesMetadata();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-indigo-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
            Articles
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            記事一覧
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            生成AIと漫画・アニメ制作にまつわるナレッジや最新動向をまとめた記事をピックアップしました。興味のあるテーマからお読みください。
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={article.href}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {article.image ? (
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-200 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex h-48 w-full items-center justify-center bg-slate-100 text-sm text-slate-500">
                  アイキャッチ画像はありません
                </div>
              )}
              <article className="flex flex-1 flex-col justify-between gap-6 p-6">
                <h2 className="text-lg font-semibold leading-snug text-slate-900">
                  {article.title}
                </h2>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600">
                  記事を読む
                  <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
