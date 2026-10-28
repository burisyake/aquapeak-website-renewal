import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "AquaPeakのプライバシーポリシーです。取得する情報、利用目的、第三者提供、管理方法について記載しています。",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "1. 事業者情報",
    body: [
      "事業者名: AquaPeak",
      "お問い合わせ: assetforecast@gmail.com",
    ],
  },
  {
    title: "2. 取得する情報",
    body: [
      "当方は、サービス提供にあたり、以下の情報を取得することがあります。",
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
      "当方は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。",
      "なお、業務委託先に個人情報の取り扱いを委託する場合は、適切な監督を行います。",
    ],
  },
  {
    title: "5. 安全管理措置",
    body: [
      "当方は、個人情報の漏えい、滅失、き損を防止するため、合理的かつ適切な安全管理措置を講じます。",
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
      "当方は、サービス向上および利用状況分析のためにCookie等を使用することがあります。",
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
    <main className="px-5 pt-32 pb-24 md:px-8 md:pt-40">
      <div className="mx-auto w-full max-w-3xl">
        <header className="border-b border-line pb-10">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-aqua-deep uppercase">
            Privacy Policy
          </p>
          <h1 className="mt-4 text-3xl font-black text-ink md:text-5xl">プライバシーポリシー</h1>
          <p className="mt-6 leading-8 text-ink-soft">
            AquaPeak（以下「当方」）は、当方が提供するサービスにおける利用者の個人情報を適切に取り扱うため、以下のとおりプライバシーポリシーを定めます。
          </p>
        </header>

        <div className="divide-y divide-line">
          {sections.map((section) => (
            <section key={section.title} className="py-8">
              <h2 className="text-lg font-bold text-ink md:text-xl">{section.title}</h2>
              <div className="mt-4 space-y-2 leading-8 text-ink-soft">
                {section.body.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="border-t border-line pt-6 text-sm text-mute">制定日: 2026年4月21日</p>
      </div>
    </main>
  );
}
