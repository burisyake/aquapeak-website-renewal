import { AppExplorer } from "@/components/AppExplorer";
import { AppIcon } from "@/components/AppIcon";
import { categories, featuredCopy, featuredIds, heroColumns } from "@/data/apps";
import { getAppsWithIcons, type AppWithIcon } from "@/lib/itunes";

const CONTACT_EMAIL = "assetforecast@gmail.com";

const principles = [
  {
    no: "01",
    title: "ひとつの課題に、ひとつのアプリ",
    text: "あれもこれもと詰め込まず、解きたい「めんどう」をひとつに絞る。だから迷わず使えて、すぐに手放せない道具になります。",
  },
  {
    no: "02",
    title: "データは、あなたの手元に",
    text: "多くのアプリで、データは端末内にだけ保存し、アカウント登録も不要にしています。安心して、今日から気軽に使えるように。",
  },
  {
    no: "03",
    title: "続けたくなる仕掛けを",
    text: "ペットを育てる、全国をめぐって集める、天気マークで眺める。記録や学習が「楽しみ」に変わる工夫を、どのアプリにも。",
  },
];

const steps = [
  {
    no: "01",
    en: "Find",
    title: "見つける",
    text: "自分たちや身近な人の「ちょっと困った」を出発点に、本当に解くべき課題をひとつに絞り込みます。",
  },
  {
    no: "02",
    en: "Build",
    title: "つくる",
    text: "必要な機能だけを素早く形にして、まずはストアに出す。企画からデザイン、開発までを同じチームで行います。",
  },
  {
    no: "03",
    en: "Grow",
    title: "育てる",
    text: "レビューや使われ方から学び、アップデートを重ねる。長く使ってもらえるアプリへ、少しずつ磨き続けます。",
  },
];

const toneClass: Record<string, { panel: string; dot: string }> = {
  aqua: { panel: "from-aqua-light via-mist to-white", dot: "bg-aqua" },
  coral: { panel: "from-[#ffd9cc] via-[#fff1ec] to-white", dot: "bg-coral" },
  leaf: { panel: "from-[#cdebd9] via-[#eef8f2] to-white", dot: "bg-leaf" },
};

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 font-display text-sm font-semibold tracking-[0.2em] uppercase ${
        light ? "text-aqua-light" : "text-aqua-deep"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-aqua-light" : "bg-aqua"}`} />
      {children}
    </p>
  );
}

function Wave({ className = "", fill }: { className?: string; fill: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`block h-16 w-full md:h-24 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 64 C 180 120 360 120 540 72 C 720 24 900 8 1080 48 C 1260 88 1350 92 1440 76 L1440 120 L0 120 Z"
        fill={fill}
      />
    </svg>
  );
}

/* ---------- Hero ---------- */

function Hero({ apps }: { apps: AppWithIcon[] }) {
  const withIcon = apps.filter((a) => a.icon);
  const cols = heroColumns.map((col) =>
    col
      .map((id) => apps.find((a) => a.appId === id))
      .filter((a): a is AppWithIcon => Boolean(a)),
  );

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-aqua-light/60 blur-3xl" />
        <div className="absolute top-60 -left-40 h-[420px] w-[420px] rounded-full bg-[#ffe3d9]/70 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Eyebrow>Product Studio · Shibuya, Tokyo</Eyebrow>
          <h1 className="mt-6 text-[2.75rem] leading-[1.2] font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">
            毎日を、
            <br />
            少しだけ
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">軽く</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-4 rounded-full bg-aqua-light md:h-5" />
            </span>
            する。
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-ink-soft md:text-lg md:leading-9">
            AquaPeak は、学び・お金・暮らし・おでかけ・遊びの領域で、
            日々の小さな「めんどう」をほどくアプリを自分たちで企画・開発・運営しているプロダクトスタジオです。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#apps"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-ink/20 transition hover:bg-aqua-deep"
            >
              アプリを見る
            </a>
            <a
              href="#about"
              className="rounded-full border border-line bg-white px-7 py-3.5 text-sm font-bold text-ink transition hover:border-ink"
            >
              私たちについて
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8">
            {[
              { value: String(apps.length), unit: "本", label: "リリースしたアプリ" },
              { value: String(categories.length), unit: "", label: "ジャンル" },
              { value: "2025", unit: "", label: "開業" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-ink md:text-4xl">
                  {s.value}
                  <span className="ml-0.5 text-base font-bold">{s.unit}</span>
                </dd>
                <dd className="mt-1 text-xs text-mute">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* アイコンが浮かぶビジュアル */}
        <div aria-hidden="true" className="relative mx-auto hidden w-full max-w-lg lg:block">
          <div className="absolute inset-8 rounded-[48px] bg-gradient-to-br from-white to-mist shadow-[0_40px_80px_-40px_rgba(11,29,46,0.35)]" />
          <div className="relative grid grid-cols-3 gap-6 p-14">
            {cols.map((col, ci) => (
              <div
                key={ci}
                className={`flex flex-col gap-6 ${ci === 1 ? "translate-y-10" : ""}`}
              >
                {col.map((app, i) => (
                  <div
                    key={app.appId}
                    className="animate-float"
                    style={{ animationDelay: `${(ci * 3 + i) * -0.8}s` }}
                  >
                    <AppIcon
                      src={app.icon}
                      name={app.name}
                      size={104}
                      priority
                      className="shadow-[0_20px_40px_-16px_rgba(11,29,46,0.4)]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <IconMarquee apps={withIcon} />
    </section>
  );
}

function IconMarquee({ apps }: { apps: AppWithIcon[] }) {
  if (apps.length === 0) return null;
  const half = Math.ceil(apps.length / 2);
  const rows = [apps.slice(0, half), apps.slice(half)];
  const ITEM = 88; // アイコン72px + 間隔16px
  const MIN_WIDTH = 2800; // 大きな画面でも隙間が出ない長さ

  return (
    <div className="mt-20 space-y-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] md:mt-28">
      {rows.map((row, ri) => {
        // 1周分が画面幅より長くなるまで繰り返し、それを2つ並べて -50% 移動でループさせる
        const repeat = Math.max(1, Math.ceil(MIN_WIDTH / (row.length * ITEM)));
        const loop = Array.from({ length: repeat }, () => row).flat();
        const track = [...loop, ...loop];
        const duration = (loop.length * ITEM) / 40; // 約40px/秒

        return (
          <div key={ri} className="group flex overflow-hidden">
            <div
              className={`flex w-max shrink-0 group-hover:[animation-play-state:paused] ${
                ri === 0 ? "animate-marquee" : "animate-marquee-rev"
              }`}
              style={{ animationDuration: `${duration}s` }}
            >
              {track.map((app, i) => {
                // 読み上げ・Tab移動は最初の1周分だけ
                const isCopy = i >= row.length;
                return (
                  <a
                    key={`${app.appId}-${i}`}
                    href={app.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={isCopy ? undefined : `${app.name}（App Store）`}
                    aria-hidden={isCopy || undefined}
                    tabIndex={isCopy ? -1 : undefined}
                    title={app.name}
                    className="shrink-0 pr-4 transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
                  >
                    <AppIcon src={app.icon} name={app.name} size={72} />
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- About ---------- */

function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="reveal lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>About us</Eyebrow>
          <h2 className="mt-6 text-3xl leading-[1.45] font-black text-ink md:text-[2.75rem] md:leading-[1.4]">
            <span className="block whitespace-nowrap">暮らしの中の</span>
            <span className="block whitespace-nowrap">小さな「めんどう」を、</span>
            <span className="block whitespace-nowrap">アプリでほどく。</span>
          </h2>
          <p className="mt-8 leading-8 text-ink-soft">
            家計の見通し、外国語の勉強、家の在庫、旅の記録。どれも大事なのに、つい後回しになってしまうこと。
            AquaPeak はそうした日常のひっかかりに目を向け、ひとつずつアプリという形で解決してきました。
            水のようになめらかに暮らしに溶け込み、山頂からの景色のように先を見通せる体験を目指しています。
          </p>
        </div>

        <ol className="space-y-5">
          {principles.map((p) => (
            <li
              key={p.no}
              className="reveal rounded-[28px] border border-line bg-white p-7 md:p-10"
            >
              <p className="font-display text-sm font-bold text-aqua">{p.no}</p>
              <h3 className="mt-3 text-xl font-bold text-ink md:text-2xl">{p.title}</h3>
              <p className="mt-4 leading-8 text-ink-soft">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Apps ---------- */

function Featured({ apps }: { apps: AppWithIcon[] }) {
  const featured = featuredIds
    .map((id) => apps.find((a) => a.appId === id))
    .filter((a): a is AppWithIcon => Boolean(a));

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {featured.map((app) => {
        const copy = featuredCopy[app.appId];
        const tone = toneClass[copy?.tone ?? "aqua"];
        return (
          <article
            key={app.appId}
            className="reveal group flex flex-col overflow-hidden rounded-[32px] border border-line bg-white"
          >
            <div
              className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${tone.panel}`}
            >
              <div className="absolute h-72 w-72 rounded-full border border-white/80" />
              <div className="absolute h-48 w-48 rounded-full border border-white/80" />
              <AppIcon
                src={app.icon}
                name={app.name}
                size={112}
                className="relative shadow-[0_24px_48px_-16px_rgba(11,29,46,0.45)] transition duration-500 group-hover:scale-105 group-hover:-rotate-3"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="text-sm font-bold text-ink-soft">{copy?.catch}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">{app.name}</h3>
              <ul className="mt-5 space-y-2.5 text-sm leading-6 text-ink-soft">
                {app.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${tone.dot}`} />
                    {h}
                  </li>
                ))}
              </ul>
              <a
                href={app.href}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 self-start rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-aqua-deep"
              >
                App Store で見る <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function Apps({ apps }: { apps: AppWithIcon[] }) {
  return (
    <section id="apps" className="bg-mist/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Our apps</Eyebrow>
            <h2 className="mt-6 text-3xl font-black text-ink md:text-5xl">注目のアプリ</h2>
          </div>
          <p className="max-w-md leading-8 text-ink-soft">
            AquaPeak のアプリは、どれも自分たちで企画し、デザインし、開発しています。まずはこの3本から。
          </p>
        </div>
        <div className="mt-12">
          <Featured apps={apps} />
        </div>

        <div className="mt-24 md:mt-32">
          <div className="reveal mb-10 flex items-baseline gap-4">
            <h2 className="text-2xl font-black text-ink md:text-4xl">すべてのアプリ</h2>
            <span className="font-display text-lg font-bold text-aqua-deep">{apps.length}</span>
          </div>
          <AppExplorer apps={apps} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */

function Process() {
  return (
    <section id="process" className="relative bg-ink text-white">
      <Wave fill="#0b1d2e" className="absolute -top-16 left-0 md:-top-24" />
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="reveal max-w-2xl">
          <Eyebrow light>How we work</Eyebrow>
          <h2 className="mt-6 text-3xl leading-[1.4] font-black md:text-5xl">
            小さくつくって、
            <br />
            長く育てる。
          </h2>
          <p className="mt-6 leading-8 text-white/70">
            少人数のチームで、企画から運営までを一気通貫で。だからこそ、出してからの改善が速いのが私たちの強みです。
          </p>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-[28px] bg-white/10 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.no} className="reveal bg-ink p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-6xl font-bold text-aqua/90">{s.no}</span>
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-white/40 uppercase">
                  {s.en}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-bold">{s.title}</h3>
              <p className="mt-4 leading-8 text-white/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* 山並みのシルエット */}
      <svg viewBox="0 0 1440 160" className="block h-24 w-full md:h-40" aria-hidden="true" preserveAspectRatio="none">
        <path d="M0 160 L0 120 L220 40 L380 110 L560 20 L760 120 L940 60 L1120 130 L1300 50 L1440 100 L1440 160 Z" fill="#12304a" />
        <path d="M0 160 L0 140 L180 90 L340 140 L520 80 L700 150 L900 100 L1080 150 L1260 95 L1440 140 L1440 160 Z" fill="#f7fafb" />
      </svg>
    </section>
  );
}

/* ---------- Profile（運営者情報） ---------- */

function Profile() {
  const address = "東京都渋谷区渋谷2-19-15 宮益坂ビルディング 609";
  const rows = [
    { label: "屋号", value: "AquaPeak" },
    { label: "開業", value: "2025年" },
    {
      label: "所在地",
      value: (
        <>
          〒150-0002
          <br />
          {address}
          <span className="mt-1 block text-sm text-mute">
            渋谷駅より徒歩3分。ご来訪の際は事前にご連絡ください。
          </span>
        </>
      ),
    },
    { label: "事業内容", value: "モバイルアプリ・Webサービスの企画、開発、運営" },
    {
      label: "お問い合わせ",
      value: (
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-aqua-deep underline-offset-4 hover:underline">
          {CONTACT_EMAIL}
        </a>
      ),
    },
  ];

  return (
    <section id="profile" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="reveal">
          <Eyebrow>Profile</Eyebrow>
          <h2 className="mt-6 text-3xl font-black text-ink md:text-5xl">運営者情報</h2>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noreferrer"
            className="mt-10 flex items-center justify-between gap-4 rounded-3xl border border-line bg-white p-6 transition hover:border-aqua"
          >
            <span>
              <span className="block font-display text-xs font-semibold tracking-[0.2em] text-aqua-deep uppercase">
                Office
              </span>
              <span className="mt-2 block font-bold text-ink">渋谷・宮益坂オフィス</span>
            </span>
            <span className="text-sm font-bold whitespace-nowrap text-ink-soft">地図を開く ↗</span>
          </a>
        </div>

        <dl className="reveal divide-y divide-line border-y border-line">
          {rows.map((r) => (
            <div key={r.label} className="grid gap-2 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="text-sm font-bold text-mute">{r.label}</dt>
              <dd className="leading-8 text-ink">{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  return (
    <section id="contact" className="px-5 pb-24 md:px-8 md:pb-32">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-gradient-to-br from-aqua-deep via-aqua to-[#5fd3e0] px-6 py-16 text-center text-white md:px-16 md:py-24">
        <div aria-hidden="true" className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10" />
        <div aria-hidden="true" className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-white/10" />
        <div className="relative">
          <p className="font-display text-sm font-semibold tracking-[0.2em] uppercase text-white/80">
            Contact
          </p>
          <h2 className="mt-6 text-3xl leading-[1.4] font-black md:text-5xl">
            アプリへのご意見・取材・
            <br className="hidden sm:block" />
            協業のご相談はこちらから
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-white/85">
            アプリの不具合や改善のご要望、メディア取材、共同での企画など、お気軽にご連絡ください。
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-ink shadow-xl shadow-ink/20 transition hover:-translate-y-0.5"
          >
            メールで問い合わせる
            <span aria-hidden="true">→</span>
          </a>
          <p className="mt-4 font-display text-sm text-white/80">{CONTACT_EMAIL}</p>
        </div>
      </div>
    </section>
  );
}

export default async function Home() {
  const apps = await getAppsWithIcons();
  return (
    <main>
      <Hero apps={apps} />
      <About />
      <Apps apps={apps} />
      <Process />
      <Profile />
      <Contact />
    </main>
  );
}
