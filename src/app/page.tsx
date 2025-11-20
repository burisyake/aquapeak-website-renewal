const products = [
  {
    name: "SeedPocket",
    type: "Web Service",
    description:
      "AquaPeakが提供する Web プロジェクト。SeedPocket の公式サイトで最新アップデートをご覧いただけます。",
    highlights: ["公式サイト: seed-pocket.aquapeak.link"],
    linkLabel: "SeedPocket を開く",
    href: "https://seed-pocket.aquapeak.link/",
  },
  {
    name: "Asset Forecast",
    type: "Mobile App",
    description:
      "資産や家計の状況を天気マークで直感的に把握できるスマート資産管理アプリ。実績入力から将来シミュレーションまでスマホひとつで完結します。",
    highlights: [
      "晴れ・曇り・雨の気象メタファーで毎日の資産コンディションを可視化",
      "50種類以上の指標・グラフを自由に配置できるカスタマイズ可能な分析画面",
      "データは端末内にのみ保存し、外部送信なしのオフライン動作でプライバシーを確保",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/asset-forecast/id6753914294",
  },
];

const services = [
  {
    name: "Everyday Finance",
    badge: "Squad",
    description:
      "Asset Forecast など日々の意思決定を軽くする金融文脈の体験を継続改善。行動データとUIを細かく検証しています。",
    benefits: ["マネーフローの可視化", "個別チューニングされたアラート", "ローカル重視のオフライン基盤"],
  },
  {
    name: "Seed Lab",
    badge: "Squad",
    description:
      "SeedPocket を起点に、余白時間の学びや記録体験を検証。マルチデバイスで同じトーンを保つデザイン言語を開発しています。",
    benefits: ["モバイル / Web 同期", "AI 補助ライティング", "リッチメディア最適化"],
  },
  {
    name: "Experience Ops",
    badge: "Core Stack",
    description:
      "全プロダクト共通のデザインシステムや分析パイプラインを整備し、日次で改善サイクルを回すための社内プラットフォームを構築。",
    benefits: ["統合データレイク", "デザインシステムLumen", "自動テレメトリとA/Bテスト"],
  },
];

const stats = [
  { value: "25+", label: "ローンチしたプロダクト" },
  { value: "4.9/5", label: "平均アプリ評価" },
  { value: "12 週間", label: "平均リリースリードタイム" },
  { value: "3 拠点", label: "Tokyo / Fukuoka / Remote" },
];

const sectors = [
  { name: "Fintech", detail: "資産管理・決済・投資アプリ" },
  { name: "Wellness", detail: "ヘルスケア / メンタルケアサービス" },
  { name: "Smart Work", detail: "現場/フィールド向け業務アプリ" },
  { name: "Lifestyle", detail: "コミュニティ / サブスク / EC" },
];

const timeline = [
  {
    phase: "01 / Discovery Sprint",
    title: "課題と仮説を言語化",
    text: "社内リサーチャーとPdMが仮説キャンバスを更新。週次で生活者インタビューを行い、次の実験テーマを確定します。",
  },
  {
    phase: "02 / Pilot Build",
    title: "MVPを実装し検証",
    text: "デザインシステムと共通APIを活用し、モバイル / Web を並行開発。テレメトリを即日で反映し、改善案へ接続します。",
  },
  {
    phase: "03 / Scale & Train",
    title: "グロースと内省",
    text: "プロダクトごとにLTV/KPIを見直し、社内Wikiへ知見を蓄積。採用・R&Dテーマへ展開して次の探索に繋げます。",
  },
];

export default function Home() {
  return (
    <div className="relative isolate">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-cyan-500/20 via-slate-900/0 to-transparent blur-3xl" />
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 bg-cyan-400/20 blur-[120px]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-20 pt-12 lg:px-10">
        <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
              AquaPeak / Digital Product Studio
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-white">
              アイデアを、使われ続けるサービスへ。
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
            <span className="rounded-full border border-white/20 px-4 py-1">
              Everyday Finance
            </span>
            <span className="rounded-full border border-white/20 px-4 py-1">
              Knowledge Tools
            </span>
            <span className="rounded-full border border-white/20 px-4 py-1">
              Multi-Device UX
            </span>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-sm text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              since 2025 / Tokyo & Fukuoka
            </p>
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                モバイルと Web を横断した、体験ドリブンなプロダクト開発。
              </h2>
              <p className="text-lg text-slate-300">
                AquaPeak はモバイルアプリと Web サービスを自社で企画・開発・運営するチームです。
                SeedPocket や Asset Forecast で培ったUXとテクノロジーを核に、生活者の行動をなめらかにする
                プロダクトを継続的にローンチしています。
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-full bg-cyan-400 px-8 py-3 text-base font-medium text-slate-900 transition hover:bg-cyan-300"
              >
                プロダクト一覧を見る
              </a>
              <a
                href="#journal"
                className="rounded-full border border-white/30 px-8 py-3 text-base font-medium text-white transition hover:border-cyan-200"
              >
                ビルドログを読む
              </a>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-slate-300">プロダクトフォーカス</p>
            <div className="grid grid-cols-2 gap-4 text-xl font-semibold text-white">
              <span>Personal Finance</span>
              <span>Creative Routines</span>
              <span>Ambient Productivity</span>
              <span>City Remote Life</span>
            </div>
            <p className="text-sm text-slate-400">
              少人数のクロスファンクショナルチームで、生活者の習慣に寄り添う機能を素早く検証しています。
            </p>
          </div>
        </section>

        <section id="products" className="space-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              Products
            </p>
            <h3 className="text-3xl font-semibold text-white">
              AquaPeak のプロダクトライン
            </h3>
            <p className="text-base text-slate-300">
              モバイルアプリと Web サービスの両輪で、暮らしの意思決定をアップデートする自社プロダクトを研究・展開しています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  {product.type}
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-white">{product.name}</h4>
                  <p className="mt-2 text-sm text-slate-300">{product.description}</p>
                </div>
                {product.highlights?.length ? (
                  <ul className="space-y-2 text-sm text-slate-200">
                    {product.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <a
                  href={product.href}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  {product.linkLabel}
                  <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2 border-white/10 md:border-l md:pl-6 first:md:border-l-0 first:md:pl-0">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="text-sm uppercase tracking-wide text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        <section id="services" className="space-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              Product Stacks
            </p>
            <h3 className="text-3xl font-semibold text-white">
              AquaPeak の 3 つのケイパビリティ
            </h3>
            <p className="text-base text-slate-300">
              戦略・UI/UX・実装・運用を分断せず、同じチームで高速に検証しながら自社プロダクトを磨き込みます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.name}
                className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-6"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  {service.badge}
                </div>
                <h4 className="text-2xl font-semibold text-white">{service.name}</h4>
                <p className="text-sm text-slate-300">{service.description}</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-200">
                  {service.benefits.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              Focus Fields
            </p>
            <h3 className="text-3xl font-semibold text-white">
              どんな領域の課題に向き合っているか
            </h3>
            <p className="text-base text-slate-300">
              Fintech、ヘルスケア、スマートワークなど、データドリブンな体験を求められる領域で自社プロダクトを展開し検証しています。
            </p>
          </div>
          <div className="grid gap-4">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-200"
              >
                <div>
                  <p className="font-medium text-white">{sector.name}</p>
                  <p className="text-xs text-slate-400">{sector.detail}</p>
                </div>
                <span className="text-cyan-200">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section id="journal" className="space-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              Approach
            </p>
            <h3 className="text-3xl font-semibold text-white">
              3 フェーズで成果を素早く積み上げる
            </h3>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {timeline.map((item) => (
              <article
                key={item.phase}
                className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  {item.phase}
                </p>
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                <p className="text-sm text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">
              Studio
            </p>
            <h3 className="text-3xl font-semibold text-white">渋谷オフィス</h3>
            <p className="text-base text-slate-300">
              少人数のクロスファンクショナルチームが常駐するクリエイティブスタジオです。オンラインと現地のハイブリッドでプロダクトを磨き込んでいます。
            </p>
          </div>
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-100">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">Address</p>
              <p className="mt-1 font-medium">
                150-0002<br />
                東京都渋谷区渋谷2-19-15<br />
                宮益坂ビルディング 609
              </p>
            </div>
            <div className="text-xs text-slate-400">
              渋谷駅徒歩3分。来訪の際は事前にご連絡ください。
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="space-y-6 rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 via-transparent to-indigo-500/10 p-8 text-center"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-100">
            Contact
          </p>
          <h3 className="text-3xl font-semibold text-white">
            AquaPeak のプロダクトに関するコラボレーション・取材はこちらから。
          </h3>
          <p className="text-base text-slate-100">
            ユーザーヒアリングへの参加、メディア取材、共創リサーチなどのご相談を受け付けています。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:assetforecast@gmail.com"
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              assetforecast@gmail.com
            </a>
            <a
              href="https://calendly.com/"
              className="rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white transition hover:border-white"
              target="_blank"
              rel="noreferrer"
            >
              ユーザーヒアリングに参加
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-white/10 py-10 text-center text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:text-left">
          <span>© {new Date().getFullYear()} AquaPeak Inc.</span>
          <span>プロダクトで、毎日の体験をアップデートする。</span>
        </footer>
      </div>
    </div>
  );
}
