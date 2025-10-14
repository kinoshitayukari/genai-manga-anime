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

const features = [
  {
    icon: <Brush className="w-6 h-6" />,
    title: "漫画×AIに完全特化",
    desc: "国内初*の漫画制作特化AIカリキュラム。技術×作画×演出を統合。",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "制作時間 80%削減",
    desc: "ワークフロー最適化でネーム→仕上げまで高速化。",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "著作権・コンプラ対応",
    desc: "専門家監修の最新ガイドラインを提供。安心して商用へ。",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "収益化に直結",
    desc: "案件獲得・連載提案・同人/Booth/海外展開まで戦略設計。",
  },
];

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
];

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
];

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
];

const heroBadges = [
  "制作時間 最大80%削減",
  "著作権ガイド付",
  "商業レベル作品集を完成",
  "商業利用・副業の収益化支援",
];

export default function MangaAISchoolLP() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Sparkles className="w-5 h-5" />
            <span>漫画特化AIスクール</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:underline">
              特徴
            </a>
            <a href="#program" className="hover:underline">
              プログラム
            </a>
            <a href="#pricing" className="hover:underline">
              料金
            </a>
            <a href="#curriculum" className="hover:underline">
              カリキュラム
            </a>
            <a href="#apply" className="hover:underline">
              申込
            </a>
          </nav>
          <div className="flex gap-2">
            <Button asChild className="rounded-2xl">
              <a href="#apply">無料ウェビナー予約</a>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              あなたの「描きたい」に寄り添う：
              <span className="bg-yellow-200 px-2 rounded">漫画×生成AI</span>
              で
              <br className="hidden md:block" />
              楽しむ人も、仕事にする人も、
              <span className="underline decoration-wavy">最短</span>
              で前へ。
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              国内初*の「漫画制作に完全特化」した生成AIスクール。現役プロの監修で、
              ネームから仕上げ、収益化戦略までを一気通貫で習得。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="#apply" className="flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  無料ウェビナーを予約
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl"
              >
                <a href="#pricing" className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  料金を見る
                </a>
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              {heroBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border grid place-items-center">
              <div className="text-center p-6">
                <div className="inline-flex items-center gap-2 text-sm text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                  <Sparkles className="w-4 h-4" /> Demo
                </div>
                <h3 className="mt-3 font-semibold">AI×作画ワークフロー可視化</h3>
                <p className="text-sm text-gray-600 mt-1">
                  ネーム→ラフ→線画→仕上げの自動化ポイントをダッシュボードで学習
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">なぜ今、漫画×生成AIなのか</h2>
          <p className="mt-2 text-gray-600">
            市場拡大と制作現場の効率化ニーズが交差。先発優位を確立します。
          </p>
          <div className="mt-8 grid md:grid-cols-4 gap-4">
            {features.map((feature) => (
              <Card key={feature.title} className="rounded-2xl">
                <CardHeader className="flex flex-row items-center gap-3">
                  {feature.icon}
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  {feature.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" /> 成果保証型
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              商業レベルの作品集制作をコミット。修了基準を明確化し、未達時の再受講サポートを用意。
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" /> 現役プロの直接指導
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              少人数ライブ添削とSlack/Discordでの常時フィードバック。作品の魅せ方まで徹底伴走。
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TimerReset className="w-5 h-5" /> 8〜12週間で実務化
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              ネーム・演出・仕上げ・法務・営業を短期集中的に統合。即戦力スキルを獲得します。
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="usecases" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">楽しむ人も、仕事にする人も</h2>
          <p className="mt-2 text-gray-600">
            目的別に最適なゴールを設定し、趣味の表現拡張から商業的な収益化まで伴走します。
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">① クリエイティブを楽しむ（非商用）</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>オリジナル世界観の構築と連作づくり</li>
                  <li>縦読み/横読みの最適化テンプレ</li>
                  <li>SNS公開のコツと継続の仕組み化</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">② 商業利用で利益を得る（収益化）</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>受託制作/案件獲得のフロー設計</li>
                  <li>同人・デジタル販売/Booth展開</li>
                  <li>連載提案・編集向け資料の作成</li>
                  <li>原価圧縮と利益率向上のワークフロー</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">料金プラン</h2>
          <p className="mt-2 text-gray-600">目的とレベルに応じて3つのプランをご用意。</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {plans.map((plan) => (
              <Card key={plan.name} className="rounded-2xl">
                <CardHeader>
                  <div className="text-xs inline-flex bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                    {plan.badge}
                  </div>
                  <CardTitle className="mt-2 text-xl">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-extrabold">
                    {plan.price}
                    <span className="text-base font-normal text-gray-500">（税込）</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{plan.duration}</div>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    {plan.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 rounded-2xl">{plan.cta}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            *国内初：当社調査。漫画制作に“完全特化”した体系的生成AIスクールとして。
          </p>
        </div>
      </section>

      <section id="curriculum" className="border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">カリキュラム（抜粋）</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {curriculum.map((module) => (
              <Card key={module.title} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
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

      <section className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-6 items-start">
          <div className="col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold">講師・監修</h2>
            <p className="mt-2 text-gray-600 text-sm">
              現役プロ漫画家、編集経験者、法務（著作権）の専門家で編成。実践とコンプライアンスを両立。
            </p>
          </div>
          <Card className="rounded-2xl md:col-span-2">
            <CardContent className="p-6 grid md:grid-cols-3 gap-4">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gray-100 border grid place-items-center">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">ゲスト講師 {n}</div>
                    <div className="text-xs text-gray-500">
                      商業連載/受託実績・AI×作画の第一人者
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="apply" className="border-t bg-gradient-to-br from-indigo-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              無料ウェビナー：漫画×生成AIのはじめ方と活かし方
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5" />
                市場機会とポジショニング
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5" />
                AI×作画ワークフロー実演
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5" />
                著作権リスクの回避策
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5" />
                受講後の収益化シナリオ
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Button size="lg" className="rounded-2xl">
                参加枠を確保
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl">
                カリキュラム資料を請求
              </Button>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              ※日程は申込フォーム内で選択できます。
            </p>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="w-5 h-5" /> 申込/資料請求フォーム（ダミー）
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-3">
                <Input placeholder="お名前" />
                <Input type="email" placeholder="メールアドレス" />
                <Input placeholder="ご希望プラン（例：ブートキャンプ）" />
                <Textarea placeholder="ご要望／現在の課題" />
                <Button className="rounded-2xl">送信する</Button>
                <p className="text-xs text-gray-500">
                  ※本フォームはデモです。実運用時はCRM/MAと連携します。
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold">よくある質問</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <Card key={faq.q} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    {faq.q}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700 leading-relaxed">
                  {faq.a}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">30日ローンチ計画</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-1">
                <li>D1-10：講師契約・LMS/決済構築（MVP）</li>
                <li>D11-20：教材制作・ウェビナー準備</li>
                <li>D21-30：広告テスト→販売開始（M1：5件）</li>
              </ol>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">KPI（目標）</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>CPA：¥5,000 / CVR：4.0%</li>
                <li>M3：月20件、M6：月30件</li>
                <li>粗利率：80% / 年間利益率：75%+</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">お問い合わせ</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> contact@example.com
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Building2 className="w-4 h-4" /> 東京都〇〇区（登記予定）
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Laptop className="w-4 h-4" /> オンライン完結／全国対応
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 text-xs text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />© 2025 Manga AI School
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              利用規約
            </a>
            <a href="#" className="hover:underline">
              プライバシー
            </a>
            <a href="#" className="hover:underline">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
