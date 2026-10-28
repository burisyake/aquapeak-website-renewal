"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const nav = [
  { href: "/#about", label: "私たちについて" },
  { href: "/#apps", label: "アプリ" },
  { href: "/#process", label: "つくり方" },
  { href: "/#profile", label: "運営者情報" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-line/80 bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link href="/" aria-label="AquaPeak ホーム" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="メイン">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-aqua-deep"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-aqua-deep"
          >
            お問い合わせ
          </Link>
        </nav>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute h-0.5 w-5 bg-ink transition ${open ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-ink transition ${open ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </div>

      {open && (
        <nav
          className="h-[calc(100dvh-4rem)] border-t border-line bg-paper px-5 pt-6 md:hidden"
          aria-label="モバイル"
        >
          <ul className="space-y-1">
            {[...nav, { href: "/#contact", label: "お問い合わせ" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 text-lg font-bold text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
