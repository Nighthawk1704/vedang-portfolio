# Handover — pick this up in Claude Code

Everything needed to continue building Vishu's "notebook" portfolio. Nothing is lost.

## What's in this bundle

```
vishu-portfolio/
├── CLAUDE.md                    ← project instructions (Claude Code auto-reads this)
├── HANDOVER.md                  ← you are here
├── index.html                   ← the BUILT homepage (working, self-contained)
└── docs/
    └── implementation-plan.md   ← full design spec: tokens, all 7 page layouts, components, motion
```

## How to start

1. Unzip into a folder, e.g. `vishu-portfolio/`.
2. Open the folder in your terminal and run `claude`.
3. Preview the current homepage anytime by opening `index.html` in a browser (no build needed).
4. Paste the opening prompt below.

## Paste this as your first message to Claude Code

> This is my portfolio project. Read `CLAUDE.md`, then `docs/implementation-plan.md`. The homepage (`index.html`) is already built as a single self-contained file — open it to see the design.
>
> Two tracks of work remain:
> 1. **Real content.** I'll paste my details (role, projects, timeline, links, books) — swap them into the placeholders. Ask me for whatever's missing.
> 2. **Sub-pages.** Build the ones specced in §4b of the plan, reusing the homepage's design tokens and effects: `/building` (two-col + sticky timeline), `/reading` (shelf + quote cards), `/sketches-collections` (corkboard collage + interactive research canvas), `/now` (2×2 grid), `/contact` (contact list + manila-folder résumé), and a styled `404`. Wire them into the tab nav with active-state per route.
>
> Keep it a single-file-per-page static site unless you think it's worth migrating to Astro — if so, ask me first. Match the existing design exactly.

## The content to have ready

Identity (name, tagline, city) · hero sentence + words to highlight · 3+ projects (title, dates, paragraph, outcome, photo) · timeline milestones + margin notes · ~6 books + quotes · Now lists (building/reading/thinking/learning) · links (email, LinkedIn, GitHub, résumé) · real photos.

## Notes

- A fresh Claude Code session has no memory of the chat that produced this — its entire understanding comes from these files, which is why `CLAUDE.md` and the plan are detailed. Keep them in the repo as the source of truth.
- Deploy target: any static host (Netlify / Vercel / GitHub Pages).
