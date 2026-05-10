# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Uses **pnpm** as the package manager (pnpm@10.26.1).

```bash
pnpm dev          # Start development server
pnpm build        # Production build (static SSG)
pnpm preview      # Preview production build locally
pnpm lint         # Run ESLint
pnpm lint:fix     # Auto-fix lint issues
pnpm typecheck    # Run vue-tsc type checking
```

No test suite is configured.

## Architecture

### Framework & Rendering

Nuxt 4 (SSG — static pre-rendering with `crawlLinks: true`). All pages are pre-rendered at build time and deployed to Vercel. The `NUXT_PUBLIC_SITE_URL` env var must be set (see `.env.example`).

### Directory Layout

The project uses Nuxt 4's `app/` subdirectory convention — all Vue source lives under `app/`, not the root:

```
app/
  app.vue          # Root: UApp wrapper, search setup, global SEO meta
  app.config.ts    # Profile picture, meeting link, email, availability, nav/footer config
  layouts/
    default.vue    # Bordered UContainer + AppHeader + slot + AppFooter
  pages/           # File-based routing
  components/
    landing/       # Section components used only in pages/index.vue
  utils/
    links.ts       # Navigation menu items array
    clipboard.ts   # copyToClipboard() helper with toast notification
  assets/css/
    main.css       # Tailwind + Nuxt UI import; custom fonts (Public Sans, Instrument Serif); container size 6xl
content/           # All site data (YAML + Markdown)
content.config.ts  # Zod schemas for all content collections
```

### Content System

Site data lives in `content/` as YAML or Markdown and is validated by Zod schemas defined in `content.config.ts`. Collections:

| Collection | Source | Usage |
|---|---|---|
| `index` | `content/index.yml` | Hero, about, experience, testimonials, FAQ data |
| `projects` | `content/projects/*.yml` | Individual project entries |
| `blog` | `content/blog/*.md` | Blog articles |
| `pages` | `content/projects.yml`, `content/blog.yml` | Page-level metadata |
| `speaking` | `content/speaking.yml` | Events grouped by category |
| `about` | `content/about.yml` | About page content and images |

To add new content, add the data file and (if a new type) extend the schema in `content.config.ts`.

### Key Modules & Their Roles

- **@nuxt/ui v4** — Primary component library; `UApp`, `UContainer`, `UButton`, `UContentSearch`, etc.
- **@nuxt/content v3** — YAML/Markdown content querying via `queryCollection()`
- **nuxt-og-image** — Auto-generates Open Graph images for every page
- **motion-v** — Scroll-triggered animations (used in `WorkExperience`, `Projects`, `Hero`)
- **@nuxt/image** — Responsive image optimization via `<NuxtImg>`
- **@vueuse/nuxt** — Composition utilities (no custom composables directory)

### Global App Config (`app/app.config.ts`)

Contains personalisation values consumed across components: profile `picture` (light/dark variants), `meetingLink`, `email`, `available` status, footer social links. Change these rather than hardcoding values in components.

### Styling

Tailwind CSS via Nuxt UI. Primary color: `blue`, neutral: `neutral`. Custom fonts loaded in `main.css`. Container max-width set to `6xl`. Dark/light mode uses the View Transition API (wired in `ColorModeButton.vue`).

### Icons

Two Iconify sets are available: `lucide` (UI icons) and `simple-icons` (brand/social logos). Use via Nuxt UI's `<UIcon name="i-lucide-..." />` or `<UIcon name="i-simple-icons-..." />`.
