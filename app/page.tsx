import { ArrowUpRight, Mail, MessageSquare, Clock, Shield, FileText, Bell, Phone, BarChart3, Mic, Globe } from "lucide-react";
import PricingSection from "./components/PricingSection";

const CONTACT_EMAIL = "y.k199xtbma@gmail.com";
const DEMO_URL = "https://rag-chatbot-blush-seven.vercel.app";

const painPoints = [
  "診療・営業時間外の問い合わせに答えられない",
  '「料金は？」「営業時間は？」の電話が毎日来る',
  "ホームページに書いてあることを何度も説明している",
  "受付・事務スタッフが電話対応で手が止まる",
];

const verticals = [
  { title: "医療機関", items: "内科・整形外科・歯科・整体院など", icon: "🏥" },
  { title: "士業", items: "税理士・会計士・弁護士・社労士など", icon: "⚖️" },
  { title: "EC・メーカー", items: "オンラインストア・製造業など", icon: "🛒" },
  { title: "社内ドキュメント", items: "規程・マニュアル・FAQの自動対応", icon: "📋" },
];

const features = [
  {
    icon: FileText,
    title: "文書学習（RAG）",
    desc: "診療案内・料金表・FAQをアップロードするだけ。その内容をもとに正確に回答します。",
  },
  {
    icon: Clock,
    title: "24時間365日対応",
    desc: "深夜・休日問わず自動応答。スタッフが不在の時間帯の問い合わせをカバーします。",
  },
  {
    icon: Shield,
    title: "誤情報リスクなし",
    desc: "文書に書かれていない内容は答えません。ハルシネーションを防ぐ設計です。",
  },
  {
    icon: Bell,
    title: "有人エスカレーション",
    desc: "「スタッフに繋いでほしい」と言われたらSlackに即通知。緊急対応も逃しません。",
  },
  {
    icon: Phone,
    title: "予約URL連携",
    desc: "「予約したい」という質問に、予約システムのURLをそのまま案内できます。",
  },
  {
    icon: Mic,
    title: "音声入力対応",
    desc: "スマートフォンからの音声入力にも対応。文字を打つのが苦手な方にも使いやすい。",
  },
  {
    icon: BarChart3,
    title: "会話ログ・分析",
    desc: "どんな質問が多いかを管理画面で確認。FAQの改善やサービス向上に活用できます。",
  },
  {
    icon: Globe,
    title: "多言語対応（オプション）",
    desc: "英語・中国語・韓国語など多言語対応を追加できます（別途オプション）。",
  },
];

const faqs = [
  {
    q: "既存のホームページに設置できますか？",
    a: "はい。iframeコードを1行貼り付けるだけで設置できます。WordPressやWixなど、どのCMSでも対応可能です。",
  },
  {
    q: "どんな形式の文書に対応していますか？",
    a: "PDF・Word・テキストファイルに対応しています。既存の診療案内や料金表をそのままお送りください。",
  },
  {
    q: "解約はいつでもできますか？",
    a: "最低利用期間（3ヶ月）経過後は、1ヶ月前にご連絡いただければ解約できます。",
  },
  {
    q: "導入までどれくらいかかりますか？",
    a: "文書をご準備いただければ、ご契約から3〜5営業日でご利用開始できます。",
  },
  {
    q: "患者さん・顧客の個人情報は安全ですか？",
    a: "会話ログは国内（東京リージョン）のサーバーに保存されます。個人情報の取り扱いについては契約時に詳しくご説明します。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-medium border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
            医療機関・士業・EC向け AIチャットボット
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            よくある質問への対応を
            <br />
            <span className="text-gradient">AIが24時間</span>自動化します
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed">
            御院・御事務所の文書を学習したAIが、
            <br className="hidden sm:block" />
            診療案内・料金・予約などの問い合わせに自動で回答。
            <br className="hidden sm:block" />
            スタッフの負担を減らし、患者・顧客の「知りたい」にすぐ答えます。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg"
            >
              <MessageSquare size={20} />
              デモを試す（無料）
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg border border-white/10 hover:bg-white/5 transition-colors"
            >
              <Mail size={20} />
              無料相談
            </a>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="px-6 py-24 bg-[#111111]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            こんなお悩みはありませんか？
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            医療機関・士業事務所によく見られる課題です
          </p>
          <ul className="space-y-4">
            {painPoints.map((p) => (
              <li
                key={p}
                className="flex items-center gap-4 bg-[#1a1a1a] rounded-2xl px-6 py-5 border border-white/5"
              >
                <span className="text-2xl shrink-0">😔</span>
                <span className="text-gray-300 text-lg leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          <span className="text-gradient">RAGチャットボット</span>が解決します
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          御院・御事務所のホームページや案内文書をAIに学習させるだけ。
          <br />
          患者・顧客からの問い合わせに、
          <strong className="text-white">24時間・自動・正確</strong>に回答します。
          <br />
          <br />
          文書に書かれていない内容は答えないため、
          <br />
          <strong className="text-white">誤った情報を伝えるリスクがありません。</strong>
        </p>
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg"
        >
          実際に試してみる
          <ArrowUpRight size={20} />
        </a>
      </section>

      {/* Verticals */}
      <section className="px-6 py-24 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">対応業種</h2>
          <p className="text-gray-400 text-center mb-14 text-lg">
            業種ごとに最適化されたAIが対応します
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {verticals.map((v) => (
              <div
                key={v.title}
                className="card-hover flex flex-col items-center text-center bg-[#1a1a1a] rounded-2xl p-8 border border-white/5"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm">{v.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">機能一覧</h2>
        <p className="text-gray-400 text-center mb-14 text-lg">
          導入に必要な機能がすべて揃っています
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl btn-gradient flex items-center justify-center mb-4">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* FAQ */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">よくある質問</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5"
            >
              <p className="font-bold mb-3 text-indigo-300">Q. {faq.q}</p>
              <p className="text-gray-400 text-sm leading-relaxed">A. {faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-24 bg-[#111111]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">まずは無料相談から</h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            「自院に向いているか」「どんな文書を用意すればいいか」など、
            <br />
            導入前のご質問をお気軽にどうぞ。
            <br />
            30分のオンライン相談を無料で承っています。
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="btn-gradient inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-lg"
          >
            <Mail size={20} />
            無料相談する
          </a>
          <p className="text-gray-600 text-sm mt-6">{CONTACT_EMAIL}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} RAG Chatbot. All rights reserved.
      </footer>
    </main>
  );
}
