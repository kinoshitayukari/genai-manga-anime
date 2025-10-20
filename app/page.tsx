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
  { href: "#apply", label: "申込" },
] as const;

const features = [
  {
    icon: <Brush className="h-6 w-6 text-indigo-600" />,
    title: "漫画×AIに完全特化",
    desc: "国内初*の漫画制作特化AIカリキュラム。技術×作画×演出を統合。",
  },
  {
    icon: <Zap className="h-6 w-6 text-indigo-600" />,
    title: "制作時間 80%削減",
    desc: "ワークフロー最適化でネーム→仕上げまで高速化。",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-indigo-600" />,
    title: "著作権・コンプラ対応",
    desc: "専門家監修の最新ガイドラインを提供。安心して商用へ。",
  },
  {
    icon: <LineChart className="h-6 w-6 text-indigo-600" />,
    title: "収益化に直結",
    desc: "案件獲得・連載提案・同人/Booth/海外展開まで戦略設計。",
  },
] as const;

const programHighlights = [
  {
    icon: <GraduationCap className="h-5 w-5 text-indigo-600" />,
    title: "成果保証型",
    description:
      "商業レベルの作品集制作をコミット。修了基準を明確化し、未達時の再受講サポートを用意。",
  },
  {
    icon: <Users className="h-5 w-5 text-indigo-600" />,
    title: "現役プロの直接指導",
    description:
      "少人数ライブ添削とSlack/Discordでの常時フィードバック。作品の魅せ方まで徹底伴走。",
  },
  {
    icon: <TimerReset className="h-5 w-5 text-indigo-600" />,
    title: "8〜12週間で実務化",
    description:
      "ネーム・演出・仕上げ・法務・営業を短期集中的に統合。即戦力スキルを獲得します。",
  },
] as const;

const plans = [
  {
    name: "プロフェッショナル・ブートキャンプ",
    price: "¥498,000",
    badge: "最短で商業レベルへ",
    duration: "8週間／少人数・現役プロ指導",
    points: [
      "商業クオリティの作品集を完成",
      "演出・構図・コマ割りの徹底添削",
      "AI×作画の最適ハイブリッド",
      "エージェント・編集向け提案資料作成",
    ],
    cta: "優先枠を予約",
  },
  {
    name: "スタンダード・ワークフローコース",
    price: "¥298,000",
    badge: "基礎〜実務の土台",
    duration: "12週間／動画＋ライブQA",
    points: [
      "AI基本操作と作画フロー確立",
      "ネーム→清書→仕上げテンプレート",
      "法務・リスクとベストプラクティス",
      "収益化の初手（同人/受託/短編）",
    ],
    cta: "申込する",
  },
  {
    name: "企業向けカスタマイズ研修",
    price: "¥500,000〜",
    badge: "制作現場の生産性を加速",
    duration: "1〜2日集中／現場課題に最適化",
    points: [
      "制作時間短縮の標準ワークフロー設計",
      "著作権・社内ガイドライン策定",
      "プロンプト資産・スタイル資産の設計",
      "ナレッジ管理と内製化の仕組み",
    ],
    cta: "相談する",
  },
] as const;

const curriculum = [
  {
    title: "基礎：AI作画エンジン理解",
    bullets: [
      "拡散/視覚言語モデルの基礎と限界",
      "プロンプト設計・否定プロンプト",
      "画風スタイルの再現と著作権配慮",
    ],
  },
  {
    title: "実践：ワークフロー構築",
    bullets: [
      "ネーム→ラフ→線画→仕上げの最短動線",
      "背景/小物/トーンの自動化",
      "ページ組版・縦スク/横読みの最適化",
    ],
  },
  {
    title: "演出：読ませる技術",
    bullets: [
      "カメラワーク・コマ割り・間の設計",
      "キャラ感情の視線誘導",
      "セリフ最適化×吹き出し配置",
    ],
  },
  {
    title: "事業化：収益と拡張",
    bullets: [
      "作品集とポートフォリオの勝ちパターン",
      "編集/クライアント向け提案書テンプレ",
      "同人/連載/受託/海外販路の戦略",
    ],
  },
] as const;

const useCases = [
  {
    title: "① クリエイティブを楽しむ（非商用）",
    bullets: [
      "オリジナル世界観の構築と連作づくり",
      "縦読み/横読みの最適化テンプレ",
      "SNS公開のコツと継続の仕組み化",
    ],
  },
  {
    title: "② 商業利用で利益を得る（収益化）",
    bullets: [
      "受託制作/案件獲得のフロー設計",
      "同人・デジタル販売/Booth展開",
      "連載提案・編集向け資料の作成",
      "原価圧縮と利益率向上のワークフロー",
    ],
  },
] as const;

const heroBadges = [
  "制作時間 最大80%削減",
  "著作権ガイド付",
  "商業レベル作品集を完成",
  "商業利用・副業の収益化支援",
] as const;

const heroMetrics = [
  {
    icon: <Star className="h-4 w-4 text-white" />,
    label: "受講満足度",
    value: "97%",
    description: "ライブ添削とレビューで納得",
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
  },
  {
    icon: <TimerReset className="h-4 w-4 text-white" />,
    label: "制作時間削減",
    value: "-80%",
    description: "AIワークフローの標準化",
    gradient: "from-cyan-500 via-sky-500 to-blue-500",
  },
  {
    icon: <MessageSquare className="h-4 w-4 text-white" />,
    label: "伴走サポート",
    value: "24/7",
    description: "Slack/Discordコミュニティ",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
] as const;

const webinarHighlights = [
  "市場機会とポジショニング",
  "AI×作画ワークフロー実演",
  "著作権リスクの回避策",
  "受講後の収益化シナリオ",
] as const;

const faqs = [
  {
    q: "どのAIツールに対応していますか？",
    a: "主要な画像/動画生成、補正、レイアウト系（例：Midjourney, Stable系, Adobe系, Animate系, 吹き出し自動化など）に加え、学習の進捗に応じて推奨スタックを提示します。環境差分を吸収するためのワークフローテンプレも付属。",
  },
  {
    q: "著作権は大丈夫？",
    a: "既存作品や固有キャラクターの模倣・混同を避ける運用設計、学習素材の権利確認、出力のオリジナリティ担保など、専門家監修のガイドラインを提供。実務シーン別のチェックリストも配布します。",
  },
  {
    q: "受講に必要なPCスペックは？",
    a: "クラウド中心の構成でミドルレンジでも可。ローカル高負荷を避ける設計例と代替手段（レンダリング/アップスケールの外部委託）を併記します。",
  },
  {
    q: "未経験でも参加できますか？",
    a: "はい。基礎デッサンの補助教材、作画テンプレ、参考ネーム集を提供。スタンダードコースからの開始を推奨します。",
  },
] as const;

const roadmap = [
  "D1-10：講師契約・LMS/決済構築（MVP）",
  "D11-20：教材制作・ウェビナー準備",
  "D21-30：広告テスト→販売開始（M1：5件）",
] as const;

const kpis = [
  "CPA：¥5,000 / CVR：4.0%",
  "M3：月20件、M6：月30件",
  "粗利率：80% / 年間利益率：75%+",
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
            <span>漫画特化AIスクール</span>
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
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-soft opacity-60 mask-radial-fade" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 right-0 h-64 w-64 translate-x-1/3 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600 shadow-sm ring-1 ring-indigo-500/10">
              <Sparkles className="h-3.5 w-3.5" /> Manga × Generative AI
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              あなたの「描きたい」に寄り添う：
              <span className="rounded bg-yellow-200 px-2">漫画×生成AI</span>
              で
              <br className="hidden md:block" />
              楽しむ人も、仕事にする人も、
              <span className="underline decoration-wavy decoration-indigo-400">最短</span>
              で前へ。
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              国内初*の「漫画制作に完全特化」した生成AIスクール。現役プロの監修で、ネームから仕上げ、収益化戦略までを一気通貫で習得します。
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
            className="relative flex flex-col gap-6 md:min-h-[28rem]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-8 shadow-2xl backdrop-blur-lg">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white/80 to-indigo-50/60" />
              <div className="pointer-events-none absolute -top-24 right-10 h-48 w-48 rounded-full bg-indigo-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 left-4 h-40 w-40 rounded-full bg-cyan-200/50 blur-3xl" />
              <div className="absolute -top-6 left-6 z-20 flex items-center gap-2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-lg">
                <Sparkles className="h-3.5 w-3.5" /> Demo Workflow
              </div>
              <div className="relative z-10 flex flex-col gap-5 text-sm text-slate-600">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">AI×作画ワークフロー可視化</h3>
                  <p className="mt-1 leading-relaxed">
                    ネーム→ラフ→線画→仕上げの自動化ポイントを、プロジェクトボード形式で学習。
                  </p>
                </div>
                <div className="grid gap-3 rounded-2xl bg-slate-50/90 p-4 shadow-inner">
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
                  AI補助の推奨モデル、否定プロンプト例、著作権チェックリストなどをテンプレ化。受講者は自分のワークフローに転用可能です。
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:absolute md:bottom-4 md:right-0 md:w-64">
              {heroMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                  className="relative overflow-hidden rounded-2xl border border-white/30 bg-slate-900/95 text-white shadow-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-90`} />
                  <div className="relative flex items-center justify-between gap-3 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-white/40 bg-white/10 backdrop-blur">
                        {metric.icon}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-white/80">{metric.label}</p>
                        <p className="text-lg font-semibold text-white">{metric.value}</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative border-t border-white/30 px-4 py-2 text-xs text-white/90">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="relative border-b border-border/60 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-40 mask-radial-fade" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Why now</span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">なぜ今、漫画×生成AIなのか</h2>
            <p className="text-base leading-relaxed text-slate-600">
              市場拡大と制作現場の効率化ニーズが交差。先発優位を確立するための知識と仕組みを体系化しました。
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

      <section id="program" className="relative border-b border-border/60 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
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

      <section id="usecases" className="relative border-b border-border/60 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-cyan-50/60" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Use cases</span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">楽しむ人も、仕事にする人も</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                目的別に最適なゴールを設定し、趣味の表現拡張から商業的な収益化まで伴走します。
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

      <section id="pricing" className="relative border-b border-border/60 bg-gradient-to-b from-slate-50 via-white to-slate-100">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_65%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col gap-3 text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Pricing</span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">料金プラン</h2>
            <p className="text-base leading-relaxed text-slate-600">目的とレベルに応じて3つのプランをご用意。</p>
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

      <section id="curriculum" className="relative border-b border-border/60 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
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

      <section className="relative border-b border-border/60 bg-gradient-to-br from-slate-50 via-white to-indigo-50/60">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
        <div className="relative mx-auto max-w-6xl gap-6 px-4 py-16 md:grid md:grid-cols-3 md:items-start">
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

      <section id="apply" className="relative border-b border-border/60 bg-gradient-to-br from-indigo-50 via-white to-sky-50">
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-40" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Webinar</span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              無料ウェビナー：漫画×生成AIのはじめ方と活かし方
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

      <section className="relative border-b border-border/60 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.14),_transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-none bg-slate-50 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">30日ローンチ計画</CardTitle>
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

      <section className="relative border-b border-border/60 bg-slate-50">
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-35" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
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
