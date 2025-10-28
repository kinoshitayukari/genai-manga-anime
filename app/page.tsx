"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brush,
  Sparkles,
  ShieldCheck,
  Zap,
  PlayCircle,
  GraduationCap,
  Building2,
  Laptop,
  LineChart,
  CheckCircle2,
  Star,
  Users,
  TimerReset,
  MessageSquare,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const navItems = [
  { href: "#features", label: "特徴" },
  { href: "#program", label: "プログラム" },
  { href: "#pricing", label: "料金" },
  { href: "#curriculum", label: "カリキュラム" },
  { href: "/articles", label: "記事一覧" },
  { href: "#apply", label: "申込" },
] as const;

const features = [
  {
    icon: <Sparkles className="h-6 w-6 text-indigo-600" />,
    title: "Gemini NanoBanana特化",
    desc: "最新Geminiモデルに最適化した生成設定・制御ノウハウを体系化。安定したキャラ・背景統一を実現。",
  },
  {
    icon: <Brush className="h-6 w-6 text-indigo-600" />,
    title: "プロンプトだけで世界観統一",
    desc: "LoRA調整に頼らず、プロンプト設計と否定プロンプトでキャラ軸・光・色温度をコントロール。",
  },
  {
    icon: <PlayCircle className="h-6 w-6 text-indigo-600" />,
    title: "Webtoon×YouTube両対応",
    desc: "縦読み連載とショート動画漫画の演出テンプレを提供。作品活用の導線まで設計できます。",
  },
  {
    icon: <LineChart className="h-6 w-6 text-indigo-600" />,
    title: "API自動化で一発生成",
    desc: "Gemini API・Flask UI・自動連結スクリプトで1クリック出力まで構築。業務導入にもそのまま転用。",
  },
] as const;

const programHighlights = [
  {
    icon: <GraduationCap className="h-5 w-5 text-indigo-600" />,
    title: "世界観プロンプトラボ",
    description:
      "キャラ設定・背景・ライティングを一貫させるプロンプト分解ワーク。NanoBanana特有の癖も共有。",
  },
  {
    icon: <Users className="h-5 w-5 text-indigo-600" />,
    title: "ライブ演出添削",
    description:
      "縦スク演出やテンポを講師がリアルタイムでレビュー。YouTube漫画の尺設計も個別指導。",
  },
  {
    icon: <TimerReset className="h-5 w-5 text-indigo-600" />,
    title: "API自動化ハンズオン",
    description:
      "Gemini API×Flask×Pillow×CapCutテンプレを実装。1話自動生成パイプラインを構築します。",
  },
] as const;

const plans = [
  {
    name: "無料講座：Geminiイントロ",
    price: "¥0",
    badge: "まずは理解から",
    duration: "記事＋YouTube全5本",
    points: [
      "Geminiで始めるAI漫画革命",
      "プロンプトだけでキャラを統一する方法",
      "縦読み構成とテンポの黄金比",
      "Gemini×吹き出しUIで仕上げる",
    ],
    cta: "無料で学ぶ",
  },
  {
    name: "AI Webtoon Lab PRO",
    price: "¥49,800",
    badge: "API自動化パイプライン",
    duration: "全8回＋自動化コード",
    points: [
      "Gemini画像・台本自動生成",
      "Flask×Pillow吹き出しUI",
      "縦連結＆動画化スクリプト",
      "YouTube Data API投稿自動化",
    ],
    cta: "PROに参加",
  },
  {
    name: "継続コミュニティ",
    price: "月¥1,980",
    badge: "アップデート共有",
    duration: "Discord／Notion運営",
    points: [
      "Q&A・作品レビュー",
      "プロンプト辞書アップデート",
      "最新テンプレ配布",
      "収益化ケーススタディ",
    ],
    cta: "参加を申し込む",
  },
] as const;

const curriculum = [
  {
    title: "第1回 市場理解と企画設計",
    bullets: [
      "WebtoonとYouTube漫画の最新トレンド分析",
      "視聴維持率を高める縦スク構成テンポ",
      "講座内での作品テーマ企画ワーク",
    ],
  },
  {
    title: "第2回 Gemini生成の基本",
    bullets: [
      "NanoBanana設定と画角・比率のコントロール",
      "キャラ軸固定のためのシード・タグ管理",
      "否定プロンプトとスタイル制御",
    ],
  },
  {
    title: "第3回 キャラクターデザイン",
    bullets: [
      "顔・服・配色の一貫性を保つプロンプト分解",
      "世界観辞書の作成と共有ライブラリ化",
      "表情差分とアングルのテンプレ作成",
    ],
  },
  {
    title: "第4回 背景・トーン設計",
    bullets: [
      "光・色温度を統一するサンプル提示",
      "構図・レイヤー管理と連番生成",
      "背景プロンプトと素材整理術",
    ],
  },
  {
    title: "第5回 縦読み構成と演出",
    bullets: [
      "間・落差・視線誘導の黄金パターン",
      "スクロールリズムを意識したページ設計",
      "YouTube転用のための尺換算",
    ],
  },
  {
    title: "第6回 セリフ・ナレーション",
    bullets: [
      "Gemini／ChatGPTで台本・セリフ生成",
      "吹き出し配置と自動レイアウトの最適化",
      "翻訳・多言語展開のワークフロー",
    ],
  },
  {
    title: "第7回 出力と動画化",
    bullets: [
      "Canva／CapCutでの縦漫画動画化",
      "AI音声ナレーションとSE挿入",
      "SNS・YouTube向けフォーマット出力",
    ],
  },
  {
    title: "第8回 投稿と収益化",
    bullets: [
      "YouTube・LINE漫画の投稿戦略",
      "チャンネル設計と更新オペレーション",
      "作品解析と継続改善の指標管理",
    ],
  },
] as const;

const useCases = [
  {
    title: "① 個人クリエイター・副業",
    bullets: [
      "Geminiテンプレで毎週更新できる仕組み化",
      "SNS縦読み＆YouTubeショートのクロス投稿",
      "ファン化→有料講座・グッズ導線の構築",
    ],
  },
  {
    title: "② チーム・スタジオ導入",
    bullets: [
      "APIパイプラインで制作を自動化",
      "役割分担とNotion進行管理のベストプラクティス",
      "投稿〜収益化のデータ連携テンプレ",
    ],
  },
] as const;

const heroBadges = [
  "Gemini NanoBanana特化",
  "プロンプトだけで統一世界観",
  "APIテンプレート付属",
  "縦読み＆動画化ワークフロー",
] as const;

const webinarHighlights = [
  "Geminiでキャラと背景を揃える手順",
  "縦読みネームのテンポ設計ライブ解説",
  "無料→PROへの導線設計と収益化ケース",
  "API自動化デモと導入ステップ",
] as const;

const faqs = [
  {
    q: "Gemini以外のモデルは扱いますか？",
    a: "本講座はGemini（NanoBanana）に最適化されていますが、Stable Diffusionや他モデルへの転用ポイントも補足資料で解説します。",
  },
  {
    q: "プログラミング未経験でもAPI自動化は可能？",
    a: "はい。Flask UIやPillow処理はテンプレコードを配布し、ハンズオンでステップ解説します。コピー＆調整だけで1話自動生成が完成します。",
  },
  {
    q: "商用利用や著作権面のリスクは？",
    a: "Gemini利用規約や国内外プラットフォームの投稿基準を整理したチェックリストを提供し、安全な運用方法を学びます。",
  },
  {
    q: "無料パートだけでも学べますか？",
    a: "無料講座でプロンプト設計と縦読み構成の基礎を習得できます。さらにAPI自動化まで進めたい方はPRO講座をご活用ください。",
  },
] as const;

const roadmap = [
  "ステップ1：無料講座・記事でファン化",
  "ステップ2：ウェビナー→PRO講座の導線構築",
  "ステップ3：受講者作品をYouTubeで公開",
  "ステップ4：コミュニティ継続でアップセル",
] as const;

const kpis = [
  "無料講座登録：月300件",
  "PRO講座成約率：8%以上",
  "受講者作品公開：月10本",
  "コミュニティ継続率：85%",
] as const;

const contacts = [
  { icon: <Mail className="h-4 w-4" />, text: "contact@example.com" },
  { icon: <Building2 className="h-4 w-4" />, text: "東京都〇〇区（登記予定）" },
  { icon: <Laptop className="h-4 w-4" />, text: "オンライン完結／全国対応" },
] as const;

export default function MangaAISchoolLP() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/65">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-indigo-600">
            <Sparkles className="h-5 w-5" />
            <span>AI Webtoon Lab</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="rounded-2xl px-5">
              <a href="#apply">無料ウェビナー予約</a>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 right-0 h-64 w-64 translate-x-1/3 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600 shadow-sm ring-1 ring-indigo-500/10">
              <Sparkles className="h-3.5 w-3.5" /> AI Webtoon Lab
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              AI Webtoon Lab：
              <span className="rounded bg-yellow-200 px-2">Geminiでつくる縦読みマンガ講座</span>
              <br className="hidden md:block" />
              プロンプト一発でキャラも背景も統一し、
              <span className="underline decoration-wavy decoration-indigo-400">世界観を量産</span>
              する。
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Gemini（NanoBanana）特化のプロンプト設計と世界観構築、API自動化までを8回で習得。LoRA不要で統一感あるWebtoon／YouTube漫画をワンクリック生成できるパイプラインを構築します。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl px-6">
                <a href="#apply" className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5" />
                  無料ウェビナーを予約
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl px-6">
                <a href="#pricing" className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  料金を見る
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-2xl px-6">
                <a href="/articles" className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  記事一覧をみる
                </a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              {heroBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative h-full rounded-3xl border border-white/80 bg-white/80 p-8 shadow-xl backdrop-blur">
              <div className="absolute -top-6 left-6 flex items-center gap-2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-lg">
                <Sparkles className="h-3.5 w-3.5" /> Demo Workflow
              </div>
              <div className="flex flex-col gap-4 text-sm text-slate-600">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Gemini Webtoonパイプライン</h3>
                  <p className="mt-1 leading-relaxed">
                    プロンプト設計→生成→吹き出し→縦連結→動画化までの自動化ポイントを共有。
                  </p>
                </div>
                <div className="grid gap-3 rounded-2xl bg-slate-50/80 p-4 shadow-inner">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <span>Pipeline Snapshot</span>
                    <span>稼働率 82%</span>
                  </div>
                  <div className="grid gap-2 text-sm text-slate-600">
                    <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm">
                      <span className="font-medium text-slate-900">ネーム生成</span>
                      <span className="text-xs text-emerald-500">完了</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm">
                      <span className="font-medium text-slate-900">作画 &amp; トーン</span>
                      <span className="text-xs text-indigo-500">進行中</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm">
                      <span className="font-medium text-slate-900">仕上げ &amp; 品質確認</span>
                      <span className="text-xs text-slate-400">待機</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-indigo-200/70 bg-white/60 p-4 text-xs leading-relaxed text-slate-500">
                  Geminiプロンプト辞書、縦連結スクリプト、YouTube投稿チェックリストを配布。講座後も自走できるテンプレ群です。
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="border-b border-border/60 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Why now</span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Geminiで縦読み漫画を量産する理由</h2>
            <p className="text-base leading-relaxed text-slate-600">
              LoRA調整不要で統一世界を生成できるGeminiが台頭。企画〜自動化までを結ぶ新しいワークフローを学ぶ絶好のタイミングです。
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="h-full border-none bg-slate-50/80 shadow-md">
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-inner">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-base text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-2 text-sm leading-relaxed text-slate-600">
                  {feature.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="border-b border-border/60 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            {programHighlights.map((highlight) => (
              <Card key={highlight.title} className="h-full border-none bg-white/90 shadow-lg">
                <CardHeader className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    {highlight.icon}
                  </div>
                  <CardTitle className="text-lg text-slate-900">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm leading-relaxed text-slate-600">
                  {highlight.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="usecases" className="border-b border-border/60 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Use cases</span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">個人もチームもGeminiで量産</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                創作を楽しむ個人から制作スタジオまで、プロンプト資産と自動化パイプラインで継続的に作品を届けられる体制を作ります。
              </p>
            </div>
            <div className="grid gap-6">
              {useCases.map((useCase) => (
                <Card key={useCase.title} className="border-none bg-slate-50 shadow-md">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-slate-900">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                      {useCase.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-b border-border/60 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col gap-3 text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Pricing</span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">無料からAPI自動化まで</h2>
            <p className="text-base leading-relaxed text-slate-600">導線設計を学ぶ無料講座から、1クリック生成を叶えるPRO講座、継続アップデートのコミュニティまで用意しました。</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name} className="flex h-full flex-col border-none bg-white shadow-xl">
                <CardHeader className="space-y-2">
                  <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {plan.badge}
                  </div>
                  <CardTitle className="text-2xl text-slate-900">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-4xl font-extrabold text-slate-900">
                        {plan.price}
                        <span className="ml-1 text-base font-medium text-slate-500">（税込）</span>
                      </div>
                      <div className="mt-1 text-sm text-slate-500">{plan.duration}</div>
                    </div>
                    <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
                      {plan.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full rounded-2xl">{plan.cta}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">
            *国内初：当社調査。漫画制作に“完全特化”した体系的生成AIスクールとして。
          </p>
        </div>
      </section>

      <section id="curriculum" className="border-b border-border/60 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Curriculum</span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">カリキュラム（抜粋）</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {curriculum.map((module) => (
              <Card key={module.title} className="border-none bg-slate-50 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                    {module.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-slate-50">
        <div className="mx-auto max-w-6xl gap-6 px-4 py-16 md:grid md:grid-cols-3 md:items-start">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">講師・監修</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              現役プロ漫画家、編集経験者、法務（著作権）の専門家で編成。実践とコンプライアンスを両立します。
            </p>
          </div>
          <Card className="md:col-span-2 border-none bg-white shadow-xl">
            <CardContent className="grid gap-5 p-6 md:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex items-center gap-3 rounded-2xl border border-dashed border-indigo-200/80 bg-indigo-50/60 p-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-indigo-500 shadow-inner">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">ゲスト講師 {n}</div>
                    <div className="text-xs text-slate-500">商業連載/受託実績・AI×作画の第一人者</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="apply" className="border-b border-border/60 bg-gradient-to-br from-indigo-50 via-white to-sky-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Webinar</span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              無料ウェビナー：Geminiで縦読み漫画を一発生成
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
              {webinarHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-2xl px-6">
                参加枠を確保
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl px-6">
                カリキュラム資料を請求
              </Button>
            </div>
            <p className="mt-3 text-xs text-slate-500">※日程は申込フォーム内で選択できます。</p>
          </div>
          <Card className="border-none bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-slate-900">
                <MessageSquare className="h-5 w-5 text-indigo-600" /> 申込/資料請求フォーム（ダミー）
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <Input placeholder="お名前" />
                <Input type="email" placeholder="メールアドレス" />
                <Input placeholder="ご希望プラン（例：ブートキャンプ）" />
                <Textarea placeholder="ご要望／現在の課題" />
                <Button className="rounded-2xl">送信する</Button>
                <p className="text-xs text-slate-500">※本フォームはデモです。実運用時はCRM/MAと連携します。</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-b border-border/60 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-none bg-slate-50 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">マーケティング導線</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                  {roadmap.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>
            <Card className="border-none bg-slate-50 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">KPI（目標）</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
                  {kpis.map((kpi) => (
                    <li key={kpi}>{kpi}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-none bg-slate-50 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">お問い合わせ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600">
                {contacts.map((contact) => (
                  <div key={contact.text} className="flex items-center gap-2">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-white text-indigo-500 shadow-inner">
                      {contact.icon}
                    </div>
                    <span>{contact.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">よくある質問</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.q} className="border-none bg-white shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg text-slate-900">
                    <Sparkles className="h-5 w-5 text-indigo-600" />
                    {faq.q}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm leading-relaxed text-slate-600">
                  {faq.a}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-10 text-xs md:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />© 2025 Manga AI School
          </div>
          <div className="flex gap-4 text-slate-300">
            <a href="#" className="transition-colors hover:text-white">
              利用規約
            </a>
            <a href="#" className="transition-colors hover:text-white">
              プライバシー
            </a>
            <a href="#" className="transition-colors hover:text-white">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
