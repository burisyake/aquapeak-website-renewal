"use client";

import { useMemo, useState } from "react";
import { categories, type CategoryId } from "@/data/apps";
import type { AppWithIcon } from "@/lib/itunes";
import { AppIcon } from "./AppIcon";

const INITIAL = 12;
const labelOf = Object.fromEntries(categories.map((c) => [c.id, c.label]));

export function AppExplorer({ apps }: { apps: AppWithIcon[] }) {
  const [filter, setFilter] = useState<CategoryId | "all">("all");
  const [expanded, setExpanded] = useState(false);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: apps.length };
    for (const a of apps) c[a.category] = (c[a.category] ?? 0) + 1;
    return c;
  }, [apps]);

  const filtered = filter === "all" ? apps : apps.filter((a) => a.category === filter);
  const visible = filter === "all" && !expanded ? filtered.slice(0, INITIAL) : filtered;

  const tabs = [{ id: "all" as const, label: "すべて" }, ...categories];

  return (
    <div>
      <div
        role="tablist"
        aria-label="ジャンルで絞り込む"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0"
      >
        {tabs.map((t) => {
          const active = filter === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(t.id)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition ${
                active
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-ink-soft hover:border-aqua hover:text-aqua-deep"
              }`}
            >
              {t.label}
              <span
                className={`font-display text-xs ${active ? "text-aqua-light" : "text-mute"}`}
              >
                {counts[t.id] ?? 0}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((app) => (
          <li key={app.appId}>
            <a
              href={app.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col gap-4 rounded-3xl border border-line bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-aqua/50 hover:shadow-[0_18px_40px_-20px_rgba(11,125,143,0.45)]"
            >
              <div className="flex items-start gap-4">
                <AppIcon src={app.icon} name={app.name} size={60} />
                <div className="min-w-0">
                  <p className="text-xs font-bold text-aqua-deep">
                    {labelOf[app.category]}
                    <span className="ml-2 font-display font-medium text-mute">
                      {app.platform}
                    </span>
                  </p>
                  <h3 className="mt-1 text-base leading-snug font-bold text-ink">
                    {app.name}
                  </h3>
                </div>
              </div>
              <p className="line-clamp-3 text-sm leading-7 text-ink-soft">
                {app.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-ink transition-colors group-hover:text-aqua-deep">
                App Store で見る
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      {filter === "all" && filtered.length > INITIAL && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full border-2 border-ink px-8 py-3 text-sm font-bold text-ink transition hover:bg-ink hover:text-white"
          >
            {expanded ? "閉じる" : `すべてのアプリを見る（${filtered.length}本）`}
          </button>
        </div>
      )}
    </div>
  );
}
