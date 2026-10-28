/** 山（Peak）と波（Aqua）を組み合わせたロゴマーク */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-peak" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#5fd3e0" />
          <stop offset="100%" stopColor="#0b7d8f" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="#0b1d2e" />
      <path
        d="M16 6 L27.5 23 C24 26.5 21 18 16 22.5 C11 27 8 18 4.5 23 Z"
        fill="url(#logo-peak)"
      />
      <circle cx="23" cy="9" r="2.2" fill="#ff7a59" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span
        className={`font-display text-xl font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}
      >
        AquaPeak
      </span>
    </span>
  );
}
