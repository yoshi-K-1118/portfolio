import { ArrowUpRight, Mail, Code2, Smartphone, Zap } from "lucide-react";

const CONTACT_EMAIL = "y.k199xtbma@gmail.com";

const works = [
  {
    title: "影響力の法則 — チャルディーニ実践ガイド",
    description:
      "チャルディーニの6つの説得原則をインタラクティブに学べるWebアプリ",
    url: "https://cialdini-app.vercel.app/",
    tag: "Webアプリ",
  },
  {
    title: "ポイント最適化ダッシュボード",
    description:
      "ポイントの管理・交換戦略を一元管理できるダッシュボードアプリ",
    url: "https://point-optimizer-one.vercel.app/dashboard",
    tag: "Webアプリ",
  },
  {
    title: "めしろぐ",
    description:
      "AIで食事を認識しカロリーと食費を同時管理できるiOSアプリ。App Storeで公開中。",
    url: "https://apps.apple.com/app/めしろぐ/id6761912060",
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
        <p className="text-gray-400 text-center mb-14 text-lg">
          個人開発でリリースしたプロダクト
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work) => (
            <div
              key={work.title}
              className="card-hover flex flex-col bg-[#1a1a1a] rounded-2xl p-6 border border-white/5"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                  {work.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 leading-snug">
                {work.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {work.description}
              </p>
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                詳細を見る
                <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
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
