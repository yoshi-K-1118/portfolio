"use client";

import { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";

const verticals = [
  { id: "clinic", label: "医療機関" },
  { id: "shigyo", label: "士業" },
  { id: "ec", label: "EC・メーカー" },
  { id: "naibu", label: "社内ドキュメント" },
] as const;

type VerticalId = (typeof verticals)[number]["id"];

const plans: Record<VerticalId, { name: string; price: number; initial: number; url: string; features: string[]; highlighted: boolean }[]> = {
  clinic: [
    {
      name: "ライト",
      price: 9800,
      initial: 30000,
      url: "https://buy.stripe.com/6oUdRachUcQfduC4VVbsc0g",
      features: ["文書アップロード5件", "月1回更新", "管理画面・会話ログ", "音声入力対応", "メールサポート"],
      highlighted: false,
    },
    {
      name: "スタンダード",
      price: 19800,
      initial: 50000,
      url: "https://buy.stripe.com/28EcN6a9MbMbbmubkjbsc0h",
      features: ["文書アップロード15件", "月3回更新", "有人エスカレーション（Slack通知）", "予約URL連携", "LINE連携・画像添付", "チャットサポート"],
      highlighted: true,
    },
    {
      name: "プレミアム",
      price: 29800,
      initial: 100000,
      url: "https://buy.stripe.com/fZu5kEfu6dUj0HQconbsc0i",
      features: ["文書アップロード無制限", "月5回更新", "スタンダードの全機能", "優先サポート", "月次レポート"],
      highlighted: false,
    },
  ],
  shigyo: [
    {
      name: "ライト",
      price: 9800,
      initial: 30000,
      url: "https://buy.stripe.com/aFa6oI5Tw03t4Y60FFbsc0j",
      features: ["文書アップロード5件", "月1回更新", "管理画面・会話ログ", "音声入力対応", "メールサポート"],
      highlighted: false,
    },
    {
      name: "スタンダード",
      price: 19800,
      initial: 50000,
      url: "https://buy.stripe.com/8x29AU2HkaI7eyG9cbbsc0k",
      features: ["文書アップロード15件", "月3回更新", "有人エスカレーション（Slack通知）", "相談予約URL連携", "LINE連携・画像添付", "チャットサポート"],
      highlighted: true,
    },
    {
      name: "プレミアム",
      price: 29800,
      initial: 100000,
      url: "https://buy.stripe.com/aFa5kEdlY5nNbmu3RRbsc0l",
      features: ["文書アップロード無制限", "月5回更新", "スタンダードの全機能", "優先サポート", "月次レポート"],
      highlighted: false,
    },
  ],
  ec: [
    {
      name: "ライト",
      price: 9800,
      initial: 30000,
      url: "https://buy.stripe.com/14AbJ2a9MdUj9emdsrbsc0m",
      features: ["文書アップロード5件", "月1回更新", "管理画面・会話ログ", "音声入力対応", "メールサポート"],
      highlighted: false,
    },
    {
      name: "スタンダード",
      price: 19800,
      initial: 50000,
      url: "https://buy.stripe.com/bJe3cwa9MdUjeyGconbsc0n",
      features: ["文書アップロード15件", "月3回更新", "有人エスカレーション（Slack通知）", "LINE連携・画像添付", "チャットサポート"],
      highlighted: true,
    },
    {
      name: "プレミアム",
      price: 29800,
      initial: 100000,
      url: "https://buy.stripe.com/aFaaEY5Tw8zZcqyagfbsc0o",
      features: ["文書アップロード無制限", "月5回更新", "スタンダードの全機能", "優先サポート", "月次レポート"],
      highlighted: false,
    },
  ],
  naibu: [
    {
      name: "ライト",
      price: 9800,
      initial: 30000,
      url: "https://buy.stripe.com/aFa7sM3Lo5nN3U29cbbsc0p",
      features: ["文書アップロード5件", "月1回更新", "管理画面・会話ログ", "メールサポート"],
      highlighted: false,
    },
    {
      name: "スタンダード",
      price: 19800,
      initial: 50000,
      url: "https://buy.stripe.com/aFaaEY3LodUj9emgEDbsc0q",
      features: ["文書アップロード15件", "月3回更新", "Slack通知連携", "画像添付対応", "チャットサポート"],
      highlighted: true,
    },
    {
      name: "プレミアム",
      price: 29800,
      initial: 100000,
      url: "https://buy.stripe.com/cNi7sM2HkcQf3U2gEDbsc0r",
      features: ["文書アップロード無制限", "月5回更新", "スタンダードの全機能", "優先サポート", "月次レポート"],
      highlighted: false,
    },
  ],
};

export default function PricingSection() {
  const [active, setActive] = useState<VerticalId>("clinic");

  return (
    <section id="pricing" className="px-6 py-24 bg-[#111111]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">料金プラン</h2>
        <p className="text-gray-400 text-center mb-10 text-lg">
          初期費用 + 月額のシンプルな料金体系
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {verticals.map((v) => (
            <button
              key={v.id}
              onClick={() => setActive(v.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === v.id
                  ? "btn-gradient text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans[active].map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-6 border ${
                plan.highlighted
                  ? "border-indigo-500/50 bg-indigo-500/5"
                  : "border-white/5 bg-[#1a1a1a]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="btn-gradient px-3 py-1 rounded-full text-xs font-semibold text-white whitespace-nowrap">
                    人気No.1
                  </span>
                </div>
              )}
              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-1">{plan.name}プラン</p>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold">¥{plan.price.toLocaleString()}</span>
                  <span className="text-gray-400 text-sm mb-1">/月</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  初期費用 ¥{plan.initial.toLocaleString()}
                </p>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? "btn-gradient text-white"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                このプランで申し込む
                <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          ※ 最低利用期間3ヶ月。解約は1ヶ月前にご連絡ください。
        </p>
      </div>
    </section>
  );
}
