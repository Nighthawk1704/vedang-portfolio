# CLAUDE.md — Vedang's Portfolio ("a notebook, mostly.")

A warm, editorial **"notebook" portfolio** for **Vedang Sai Rath** — paper texture, serif
display headlines, typewriter labels, handwriting marginalia, highlighter marks, taped cards,
tilted polaroids. Calm and tactile, not corporate.

## Stack (migrated from single-file → Astro)

- **Astro** (static output), no UI framework, vanilla JS for interactivity. Node ≥ 22.
- `npm run dev` (localhost:4321) · `npm run build` → `dist/` · `npm run preview`.
- Deploy `dist/` to any static host (Netlify / Vercel / GitHub Pages).
- The original single-file build is preserved at `docs/reference-homepage.html` as the visual reference.
- Full design spec: `docs/implementation-plan.md`. Original handover: `docs/HANDOVER-original.md`.

## Structure

```
src/
├── data/site.ts          ← ALL content (SOURCE OF TRUTH). Edit here, not in markup.
├── styles/global.css      ← tokens + every shared/page style
├── layouts/Base.astro     ← <head>, fonts, grain, bands, Masthead, footer, scroll-reveal JS
├── components/            ← Masthead, GlobalFooter, Polaroid
└── pages/                 ← index, building, reading, sketches-collections, now, contact, 404
```

## Content model

`src/data/site.ts` drives everything: identity, hero, shortVersion, projects, timeline,
books, quotes, now, gallery. **To update copy, edit that file** — pages just render it.
Content was populated from Vedang's résumé (`public/resume/Vedang_Sai_Rath.pdf`).

Remaining `TODO`/`[bracketed]` fields awaiting Vedang's input:
- `identity.linkedin` / `identity.github` — real URLs (currently `#`)
- project `repo` links — real GitHub URLs (currently `#`)
- `books` / `quotes` — only *The Power of Your Subconscious Mind* is real; rest are placeholders
- `now.categories` Building — one bracketed item
- Real photos for polaroids (currently CSS-gradient placeholders)

## Design tokens (keep in sync with `src/styles/global.css`)

```css
--background:#f7f3eb; --paper:#f9f7ef; --paper-deep:#ede7dd; --paper-shadow:#ded6cb;
--foreground:#1d1713; --ink:#19120e; --ink-soft:#524c47; --ink-faint:#68625c; --rule:#cac3ba;
--highlight:#ffe478; --sage:#94b594; --dusty:#6e99b2; --faded-red:#a45a4e; --coffee:#634632;
```

Type: **Fraunces** (serif), **Special Elite** (mono labels/dates), **Caveat** (script marginalia).

## Conventions

- Section labels: mono, uppercase, `letter-spacing:0.16em`, often indexed (`SPREAD 01 · TODAY`).
- Highlighter: `<mark class="hl">`. Wavy underline helper: `.uline`.
- `.reveal` is visible by default; hidden only under `html.js` so content never disappears if JS fails.
- Nav active state is per-route via `<Base active="…">` (keys: index/building/reading/sketches/now/contact).
- Honor `prefers-reduced-motion`.

## Definition of done

Real content in every slot ✅ (except TODOs above), real images ⬜, all sub-pages built + linked ✅,
styled 404 ✅, accessibility/contrast pass ⬜, Lighthouse pass ⬜, deployed ⬜.
