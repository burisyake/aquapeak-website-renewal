import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "AquaPeak Inc.のプライバシーポリシーです。取得する情報、利用目的、第三者提供、管理方法について記載しています。",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "1. 事業者情報",
    body: [
      "事業者名: AquaPeak Inc.",
      "お問い合わせ: assetforecast@gmail.com",
    ],
  },
  {
    title: "2. 取得する情報",
    body: [
      "当社は、サービス提供にあたり、以下の情報を取得することがあります。",
      "・氏名、メールアドレス等のお問い合わせ情報",
      "・端末情報、OS情報、アプリ利用状況などのアクセス情報",
      "・Cookie等の識別子を用いて取得される閲覧履歴情報",
    ],
  },
  {
    title: "3. 利用目的",
    body: [
      "取得した情報は、以下の目的で利用します。",
      "・サービスの提供、運用、改善",
      "・お問い合わせ対応および本人確認",
      "・不正利用の防止、セキュリティ確保",
      "・利用状況の分析および新機能検討",
      "・法令または利用規約に違反する行為への対応",
    ],
  },
  {
    title: "4. 第三者提供",
    body: [
      "当社は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。",
      "なお、業務委託先に個人情報の取り扱いを委託する場合は、適切な監督を行います。",
    ],
  },
  {
    title: "5. 安全管理措置",
    body: [
      "当社は、個人情報の漏えい、滅失、き損を防止するため、合理的かつ適切な安全管理措置を講じます。",
    ],
  },
  {
    title: "6. 開示・訂正・利用停止等",
    body: [
      "本人から自己の個人情報について開示、訂正、利用停止等の請求があった場合は、法令に従い適切に対応します。",
    ],
  },
  {
    title: "7. Cookie等の利用",
    body: [
      "当社は、サービス向上および利用状況分析のためにCookie等を使用することがあります。",
      "利用者はブラウザ設定によりCookieの利用を制限できます。",
    ],
  },
  {
    title: "8. 改定",
    body: [
      "本ポリシーの内容は、法令の変更やサービス内容の変更等に応じて改定することがあります。",
      "改定後の内容は、本ページに掲載した時点から効力を生じます。",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100 md:px-10">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <header className="space-y-3 border-b border-white/10 pb-8">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Privacy Policy</p>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">プライバシーポリシー</h1>
          <p className="text-sm text-slate-300">
            AquaPeak Inc.（以下「当社」）は、当社が提供するサービスにおける利用者の個人情報を適切に取り扱うため、以下のとおりプライバシーポリシーを定めます。
          </p>
        </header>

        <section className="space-y-6">
          {sections.map((section) => (
            <article
              key={section.title}
              className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              <div className="space-y-2 text-sm leading-7 text-slate-200">
                {section.body.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </section>

        <footer className="border-t border-white/10 pt-6 text-sm text-slate-400">
          制定日: 2026年4月21日
        </footer>
      </div>
    </main>
  );
}
