import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div className="space-y-4">
          <Logo light />
          <p className="max-w-xs text-sm leading-7">
            毎日を、少し軽くするアプリをつくる。
            <br />
            東京・渋谷のプロダクトスタジオです。
          </p>
        </div>
        <div>
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-aqua-light uppercase">
            Site
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/#about" className="hover:text-white">私たちについて</Link></li>
            <li><Link href="/#apps" className="hover:text-white">アプリ</Link></li>
            <li><Link href="/#process" className="hover:text-white">つくり方</Link></li>
            <li><Link href="/#company" className="hover:text-white">会社概要</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-aqua-light uppercase">
            Info
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/#contact" className="hover:text-white">お問い合わせ</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">プライバシーポリシー</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 font-display text-xs md:px-8">
          © {new Date().getFullYear()} AquaPeak Inc.
        </p>
      </div>
    </footer>
  );
}
