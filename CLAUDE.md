# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

Single-page Next.js 16 app (App Router) with React 19 and Tailwind CSS v4.

```
src/app/
  layout.tsx    # Root layout: metadata, fonts (Geist), global dark theme
  page.tsx      # Entire site — all sections in one file
  globals.css   # Tailwind import + CSS custom properties (brand colors, body bg)
```

All content (products, services, stats, sectors, timeline) is defined as plain TypeScript arrays at the top of `page.tsx` and rendered inline. There are no separate components, API routes, CMS, or routing.

## Design System

- **Color palette**: `slate-950` base, `cyan-*` for brand accents, `indigo-500` secondary — defined as CSS vars in `globals.css`
- **Fonts**: Geist Sans + Geist Mono via `next/font/google`
- **Pattern**: glassmorphism cards (`bg-white/5`, `border border-white/10`, `backdrop-blur`), cyan gradient overlays, rounded-2xl/3xl cards

## Key Notes

- `layout.tsx` has `metadataBase` set to a placeholder URL (`aquapeak.example.com`) — update to the real domain when deploying
- Adding a new product: append to the `products` array in `page.tsx`
- Adding a new page section: all sections are siblings inside the single `<div>` in `page.tsx`
