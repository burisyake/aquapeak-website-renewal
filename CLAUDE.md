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

Next.js 16 app (App Router) with React 19 and Tailwind CSS v4.

```
src/
  app/
    layout.tsx               # Metadata, fonts (Bricolage Grotesque + Zen Kaku Gothic New), Header/Footer
    page.tsx                 # Top page: Hero / About / Apps / Process / Profile / Contact sections
    privacy-policy/page.tsx  # Privacy policy
    globals.css              # Tailwind import + brand tokens (@theme) + animations
  components/                # Header (client), Footer, Logo, AppIcon, AppExplorer (client: genre filter)
  data/apps.ts               # All app data, categories, featured apps
  lib/itunes.ts              # Fetches app icons from the iTunes lookup API (one batched request, cached 1 day)
```

## Design System

- **Light theme**: `paper` background, `ink` (navy) text, `aqua` accent, `coral` / `leaf` as small accents — tokens defined in `@theme` in `globals.css` (use as `bg-ink`, `text-aqua-deep`, etc.)
- **Fonts**: `font-display` for Latin headings/numbers, `font-sans` (Japanese) for body
- **Motifs**: water (wave SVG) + peak (mountain silhouette); rounded white cards with `border-line`
- `.reveal` class = fade-in on scroll (CSS scroll-driven animation, progressive enhancement)

## Key Notes

- `layout.tsx` has `metadataBase` set to a placeholder URL (`aquapeak.example.com`) — update to the real domain when deploying
- Adding a new app: append to `apps` in `src/data/apps.ts` (icon is fetched automatically by `appId`)
- Changing featured apps: edit `featuredIds` / `featuredCopy` in `src/data/apps.ts`
