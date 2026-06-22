import { ArrowUpRight, Mail, Code2, Smartphone, Zap } from "lucide-react";

const CONTACT_EMAIL = "y.k199xtbma@gmail.com";

type Work = {
  title: string;
  description: string;
  url?: string;
  tag: string;
  appStore?: boolean;
};

const webWorks: Work[] = [
  {
    title: "RAG型AIチャットボット",
    description:
      "御社の文書だけを参照する「嘘をつかないAI」。ハルシネーションを構造的に抑制し、回答に出典を表示。クリニック・士業・EC向けに導入可能。",
    url: "https://rag-chatbot-blush-seven.vercel.app",
    tag: "Webサービス",
  },
  {
    title: "影響力の法則 — チャルディーニ実践ガイド",
    description:
      "チャルディーニの6つの説得原則をインタラクティブに学べるWebアプリ",
    url: "https://cialdini-app.vercel.app/",
    tag: "Webサービス",
  },
  {
    title: "ポイント最適化ダッシュボード",
    description:
      "ポイントの管理・交換戦略を一元管理できるダッシュボードアプリ",
    url: "https://point-optimizer-one.vercel.app/dashboard",
    tag: "Webサービス",
  },
];

const iosWorks: Work[] = [
  {
    title: "Glowmi — AIスキンケア記録",
    description:
      "朝晩のスキンケアを写真・メモで記録し、Claude AIがアドバイス。7日間・月間グラフで肌状態を分析。4言語対応。",
    url: "https://apps.apple.com/app/glowmi-ai%E8%82%8C%E8%A8%BA%E6%96%AD-%E5%B0%8F%E9%A1%94%E7%BF%92%E6%85%A3/id6763681880",
    tag: "iOSアプリ",
    appStore: true,
  },
  {
    title: "めしろぐ",
    description:
      "AIで食事を認識しカロリーと食費を同時管理。撮るだけで栄養バランスと出費が把握できる食事記録アプリ。",
    url: "https://apps.apple.com/app/%E3%82%81%E3%81%97%E3%82%8D%E3%81%90/id6761912060",
    tag: "iOSアプリ",
    appStore: true,
  },
  {
    title: "Gomidashi",
    description:
      "ゴミ収集日を曜日・週指定（毎週・第1〜4週）で登録。今日出せるゴミを即確認できる生活便利アプリ。",
    url: "https://apps.apple.com/jp/app/gomidashi/id6760887454",
    tag: "iOSアプリ",
    appStore: true,
  },
  {
    title: "禁煙くん",
    description:
      "銘柄ごとの価格を管理し、禁煙で節約できる金額をリアルタイムで計算する禁煙サポートアプリ。",
    url: "https://apps.apple.com/jp/app/%E7%A6%81%E7%85%99%E3%81%8F%E3%82%93/id6760255111",
    tag: "iOSアプリ",
    appStore: true,
  },
  {
    title: "FaceNote",
    description:
      "名刺画像付きで商談・会議メモを管理。カレンダービューで過去の面談を振り返れるビジネスメモアプリ。",
    url: "https://apps.apple.com/jp/app/facenote/id6760473491",
    tag: "iOSアプリ",
    appStore: true,
  },
  {
    title: "Hairmi — 頭皮ケア記録",
    description:
      "頭皮の状態・抜け毛・使用ヘアケア製品を毎日記録。グラフでコンディション変化を追跡できる頭皮ケア管理アプリ。",
    tag: "iOSアプリ",
  },
  {
    title: "SubsManager",
    description:
      "サブスクリプションを一覧管理。月額・年額コストを可視化し、不要なサブスクを見直せる家計管理アプリ。",
    tag: "iOSアプリ",
  },
  {
    title: "PowerSpot",
    description:
      "位置情報で周辺店舗をリスト・地図で表示。フィルター検索とお気に入り登録機能付きの店舗検索アプリ。",
    tag: "iOSアプリ",
  },
  {
    title: "WeightTrack",
    description:
      "体重を毎日記録し、グラフ・履歴で推移を確認。目標体重設定と達成状況の可視化ができる体重管理アプリ。",
    tag: "iOSアプリ",
  },
];

const services = [
  {
    icon: Code2,
    title: "Webアプリ開発",
    description: "Next.js / React",
  },
  {
    icon: Smartphone,
    title: "iOSアプリ開発",
    description: "App Storeリリースまで対応",
  },
  {
    icon: Zap,
    title: "業務自動化ツール開発",
    description: "繰り返し作業を自動化",
  },
];

function WorkCard({ work }: { work: Work }) {
  return (
    <div className="card-hover flex flex-col bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
      <div className="mb-4 flex items-center gap-2 flex-wrap">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
          {work.tag}
        </span>
        {work.appStore && (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
            App Store公開中
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold mb-3 leading-snug">{work.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1">
        {work.description}
      </p>
      {work.url ? (
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          {work.appStore ? "App Storeで見る" : "詳細を見る"}
          <ArrowUpRight size={16} />
        </a>
      ) : (
        <p className="mt-6 text-xs text-gray-600">準備中</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-medium border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
            フリーランスエンジニア
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-gradient">Claude Code</span>で爆速開発。
            <br />
            アイデアを最短でプロダクトに。
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed">
            WebアプリからiOSアプリまで、個人開発で複数のプロダクトをリリースした実績があります。
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg"
          >
            <Mail size={20} />
            無料で相談する
          </a>
        </div>
      </section>

      {/* Works */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          制作実績
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          個人開発でリリースしたプロダクト
        </p>

        {/* Web */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-gray-300 flex items-center gap-3">
            <span className="w-1 h-5 rounded-full bg-indigo-500 inline-block" />
            Webサービス
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webWorks.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        </div>

        {/* iOS */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-gray-300 flex items-center gap-3">
            <span className="w-1 h-5 rounded-full bg-indigo-500 inline-block" />
            iOSアプリ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {iosWorks.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-24 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            できること
          </h2>
          <p className="text-gray-400 text-center mb-14 text-lg">
            アイデアの段階から一緒に考えます
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex flex-col items-center text-center bg-[#1a1a1a] rounded-2xl p-8 border border-white/5"
                >
                  <div className="w-14 h-14 rounded-xl btn-gradient flex items-center justify-center mb-5">
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-24 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">お問い合わせ</h2>
        <p className="text-gray-400 text-lg mb-10">
          まずは無料でご相談ください
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="btn-gradient inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-lg"
        >
          <Mail size={20} />
          {CONTACT_EMAIL}
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </footer>
    </main>
  );
}
