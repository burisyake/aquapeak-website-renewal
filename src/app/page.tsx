import Image from "next/image";

const products = [
  {
    name: "Asset Forecast",
    type: "Mobile App",
    description:
      "資産や家計の状況を天気マークで直感的に把握できるスマート資産管理アプリ。実績入力から将来シミュレーションまでスマホひとつで完結します。",
    highlights: [
      "晴れ・曇り・雨の天気マークで毎月の資産コンディションを可視化",
      "50種類以上の指標・グラフを自由に配置できる分析画面",
      "通信層での漏洩防止のため、データは端末内にのみ保存",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/jp/app/asset-forecast/id6753914294",
    appIconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/02/fa/30/02fa307d-c2a1-72c7-2358-7ad6340ad3d6/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/512x512bb.jpg",
  },
  {
    name: "Focus Pet - Habbit",
    type: "Mobile App",
    description:
      "タスク完了とフォーカス時間でXPを稼ぎ、ペットを育てるタスク管理アプリ。生産性向上をゲーム感覦で楽しめます。",
    highlights: [
      "タスク完了とフォーカスセッションでペットが進化",
      "XP・報酬システムで習慣化をサポート",
      "ゲーム感覦でTODO管理を楽しめる",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/us/app/focus-pet-habbit/id6759491280",
    appIconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b0/cd/c7/b0cdc758-0732-9009-160b-4ec004827650/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg",
  },
  {
    name: "Book Echo - Action Tip",
    type: "Mobile App",
    description:
      "読んだ本の知識をアクションに変える読書管理アプリ。「読んで終わり」ではなく、実生活での変化につながる学びをサポートします。",
    highlights: [
      "未読・読書中・読了でスマートにライブラリ管理",
      "気づきをアクションプランとして記録",
      "読書と実践のギャップを埋める構造化ノート機能",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/us/app/book-echo-action-tip/id6759045118",
    appIconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/bd/93/1f/bd931fa0-1b49-8052-6cee-8997f9ceffad/AppIcon-1x_U007emarketing-0-6-0-85-220-0.png/512x512bb.jpg",
  },
  {
    name: "麻雀クイズ！〜役・翻符・点数〜",
    type: "Mobile App",
    description:
      "役の翻数・役判定・翻符読み取り・点数計算を5段階で反復練習できる、麻雀点数計算トレーニングアプリ。",
    highlights: [
      "Lv.0〜Lv.4の段階式クイズで基礎から実戦力までカバー",
      "手牌を見ながら役・翻符・点数を総合的に判断する出題",
      "履歴画面で正答率やスコア推移を振り返り可能",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/us/app/%E9%BA%BB%E9%9B%80%E3%82%AF%E3%82%A4%E3%82%BA-%E5%BD%B9-%E7%BF%BB%E7%AC%A6-%E7%82%B9%E6%95%B0/id6759558674",
    appIconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/26/32/4c/26324cbe-403d-6954-a05c-06d3dcd57b26/AppIcon-0-0-1x_U007emarketing-0-5-85-220.png/512x512bb.jpg",
  },
  {
    name: "ふたり家計",
    type: "Mobile App",
    description:
      "夫婦・カップル向けに毎月の家計精算を自動化。立て替えや共通口座の入金額をシンプルに算出できる家計管理アプリ。",
    highlights: [
      "負担比率を柔軟に設定し、精算額を自動計算",
      "個人払い・共通支出・口座ごとの必要入金額を可視化",
      "月別履歴とグラフ表示で支出傾向を確認",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/us/app/%E3%81%B5%E3%81%9F%E3%82%8A%E5%AE%B6%E8%A8%88/id6760020562",
    appIconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/20/3e/94/203e9431-5d34-7967-3dc5-ebe265de17b2/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
  },
  {
    name: "SeedPocket",
    type: "Web & Mobile",
    description:
      "家庭菜園で育てるハーブや野菜と、その素材を使ったレシピを一つのタイムラインで管理できる“暮らしのノート”。キッチンと畑をまたいで記録できます。",
    highlights: [
      "栽培スケジュールと収穫ログをレシピ候補と連動させて可視化",
      "畑の状況は屋外でアプリから記録、栽培計画は自宅のPCから管理",
      "Webとモバイルアプリを同時リリース",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/us/app/seed-pocket/id6756086853",
    appIconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a6/f2/e2/a6f2e2e1-2919-f011-c4c1-152c35cf2d82/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/512x512bb.jpg",
  },
  {
    name: "九九九！ 〜 3桁掛け算九九〜",
    type: "Mobile App",
    description:
      "1桁から3桁まで自由な組み合わせで暗算力を鍛える計算トレーニングアプリ。速度と正確性を両立した反復学習に対応。",
    highlights: [
      "桁数設定を細かくカスタマイズできる出題",
      "10問モードと無限モードで学習スタイルを選択可能",
      "カレンダーと成績グラフで継続状況と弱点を可視化",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/us/app/%E4%B9%9D%E4%B9%9D%E4%B9%9D-3%E6%A1%81%E6%8E%9B%E3%81%91%E7%AE%97%E4%B9%9D%E4%B9%9D/id6759827804",
    appIconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ad/09/7e/ad097e4f-38a2-9334-deb9-c87016cf3e7a/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
  },
  {
    name: "Word Pocket - Pet",
    type: "Mobile App",
    description:
      "ペットを育てながら語彙力を錢えるゲーミファイかれた単語学習アプリ。科学的な間隔反復法で効率よく単語を定着させます。",
    highlights: [
      "科学的な間隔反復法（SRS）で記憶を最大化",
      "学習の進捗でコンパニオンペットが成長",
      "ゲーム感覦で毎日の学習を継続できる仕組み",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/us/app/word-pocket-pet/id6759867409",
    appIconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2a/c5/2d/2ac52de2-f865-d459-cfa4-a2b304945ec9/AppIcon-1x_U007epad-0-1-85-220-0.png/512x512bb.jpg",
  },
  {
    name: "Stock Nest - Management",
    type: "Mobile App",
    description:
      "食材・日用品・医薬品・ペット用品まで、家庭の在庫をまとめて管理するスマートな在庫管理アプリ。賞味期限もロット単位で追跡できます。",
    highlights: [
      "ロット単位で賞味期限・消費期限を管理",
      "食料品から日用品・医薬品まで幅広い品目に対応",
      "美しいUIで家の在庫を一元管理",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/us/app/stock-nest-management/id6760417366",
    appIconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/76/fd/bb/76fdbb5f-c352-7ed5-97f7-92f5b6c51bc7/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg",
  },
  {
    name: "ドキドキスイッチ",
    type: "Mobile App",
    description:
      "スイッチを1つずつ押して、爆弾を避けて全クリアを目指せ。シンプルなルールなのに銃薇気MAXなミニゲーム。飲み会やパーティーの罰ゲームにも。",
    highlights: [
      "爆弾の数やスイッチ数を自由にカスタマイズ",
      "ひとりでじっく、みんなでワイワイ遅べるミニゲーム",
      "飲み会・パーティーの罰ゲームに最適",
    ],
    linkLabel: "App Store で見る",
    href: "https://apps.apple.com/us/app/%E3%83%89%E3%82%AD%E3%83%89%E3%82%AD%E3%82%B9%E3%82%A4%E3%83%83%E3%83%81/id6744993926",
    appIconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e2/e8/cb/e2e8cb46-f90c-b0d5-b9ae-fbd87c093c2e/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
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
  { value: "5+", label: "ローンチしたプロダクト" },
  { value: "4.9/5", label: "平均アプリ評価" },
  { value: "2 週間", label: "平均リリースリードタイム" },
  { value: "3 拠点", label: "Tokyo / Chiba / Fukuoka" },
];

const sectors = [
  { name: "Fintech", detail: "資産管理・分析・投資" },
  { name: "Talent & Tech", detail: "アサイン管理 / 人材開発 / toBサービス" },
  { name: "Lifestyle", detail: "家庭菜園 / レシピ / 記録" },
  { name: "Travl", detail: "旅行計画 / 地図 / ナビゲーション" },
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
            より長く、より多くの人に使われるサービスへ。
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
                <span className="block">モバイルと Web を</span>
                <span className="block">縦横無尽に駆ける</span>
                <span className="block">プロダクト開発集団。</span>
              </h2>
              <p className="text-lg text-slate-300">
                AquaPeak はモバイルアプリと Web サービスを自社で企画・開発・運営するチームです。
                家庭菜園とレシピをつなぐ SeedPocket、資産の“天気”を可視化する Asset Forecast などで培った
                UX とテクノロジーを核に、生活者の行動をなめらかにするプロダクトを継続的にローンチしています。
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center gap-4">
                  {product.appIconUrl && (
                    <Image
                      src={product.appIconUrl}
                      alt={`${product.name} icon`}
                      width={56}
                      height={56}
                      className="rounded-xl"
                    />
                  )}
                  <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                    {product.type}
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-white">{product.name}</h4>
                  <p className="mt-2 text-sm text-slate-300">{product.description}</p>
                </div>
                {product.highlights?.length ? (
                  <ul className="space-y-1 text-sm text-slate-200">
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
              Fintech、ライフスタイルなどのtoC向けプロダクトはもちろん、人材開発領域でのtoB向けプロダクトも展開し検証しています。
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
              事業拡大に伴い、東京都渋谷区に新たなオフィスを開設いたしました。
              アクセス性の高い渋谷の中心地に拠点を設けることで、迅速なサービス提供を推進してまいります。
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
