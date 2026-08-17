# Implementation Plan — "Notebook" Portfolio

Modeled on the design of **yashtyagi.xyz** (Yash Tyagi's portfolio). This plan recreates the *look, structure, and feel* — an editorial, "flip through a notebook" personal site — as your own build, with a few suggested improvements noted along the way.

> Nothing here copies Yash's content. Treat every heading, metric, and caption as a placeholder you'll swap for your own. What we're rebuilding is the **design system and interaction language**, not the words.

---

## 1. The design in one paragraph

It's a warm, paper-textured single page that reads like a physical notebook or "logbook." A serif display face carries huge editorial headlines; a typewriter monospace labels sections in small caps; a handwriting script adds marginalia and captions. Content is grouped into "spreads" (Today, The Workbench, Experience, a sketchbook detour, Say Hello). Project cards look like they're taped to the page, photos are rendered as tilted polaroids with washi-tape corners, highlighter marker sweeps sit behind key words, and hand-drawn wavy underlines and arrows connect thoughts. A dusty-rose diagonal band and soft paper shadows give depth. The whole thing is calm, tactile, and personal rather than slick and corporate.

---

## 2. Design system (exact tokens pulled from the site)

Drop these into `:root`. These are the real values the site uses — a great starting palette you can nudge to your own taste.

```css
:root {
  /* Surfaces */
  --background:    #f7f3eb;  /* page — warm off-white */
  --paper:         #f9f7ef;  /* card / "sheet" */
  --paper-deep:    #ede7dd;  /* recessed panel */
  --paper-shadow:  #ded6cb;  /* soft drop shadow tone */

  /* Ink */
  --foreground:    #1d1713;
  --ink:           #19120e;  /* near-black display text */
  --ink-soft:      #524c47;  /* body */
  --ink-faint:     #68625c;  /* captions / meta */
  --rule:          #cac3ba;  /* hairlines, borders */

  /* Accents */
  --highlight:     #ffe478;  /* highlighter marker */
  --sage:          #94b594;
  --dusty:         #6e99b2;
  --faded-red:     #a45a4e;  /* primary accent — links, script */
  --coffee:        #634632;  /* handwriting brown */
}
```

### Typography — three voices

| Role | Font | Usage |
|---|---|---|
| **Display / body serif** | **Fraunces** (fallback Cormorant Garamond → Georgia) | Headlines, paragraphs, project titles |
| **Label / meta monospace** | **Special Elite** (fallback Courier Prime) | Small-caps section labels: `SPREAD 01 · TODAY`, `STACK`, dates |
| **Handwriting script** | **Caveat** (fallback Kalam) | Marginalia, captions, "still being written." |

All three are free on Google Fonts. Load Fraunces with its optical-size + weight axes for the big/small contrast:

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=Special+Elite&family=Caveat:wght@400..700&display=swap" rel="stylesheet">
```

**Improvement suggestion:** enable Fraunces' `SOFT` and `WONK` axes on headlines for a touch more character, and set section labels in `letter-spacing: 0.15em; text-transform: uppercase; font-size: 0.7rem`.

---

## 3. Signature visual details (the things that make it feel special)

These are the details worth getting right — they're 80% of the charm.

1. **Highlighter marker** behind words — a skewed pseudo-element:
   ```css
   .mark { background: linear-gradient(120deg,#ffe478 0%,#ffe478 100%);
           box-decoration-break: clone; padding: 0 .1em; }
   /* or an SVG rough-highlight for the hand-drawn edge */
   ```
2. **Hand-drawn wavy underlines & arrows** — inline SVG paths (or the `rough-notation` library) under links and headings, in `--ink` or `--faded-red`.
3. **Taped-paper cards** — `--paper` background, subtle rotation (`transform: rotate(-.4deg)`), layered box-shadows for a lifted sheet, plus a small washi-tape rectangle (semi-transparent `--highlight`) absolutely positioned over a corner.
4. **Polaroid photos** — white frame, `padding: 10px 10px 40px`, slight tilt, script caption in the bottom margin, washi-tape corner. The footer gallery fans several of these across the page.
5. **Diagonal dusty-rose band** — a large rotated `--faded-red` shape at low opacity slicing behind sections for depth.
6. **Paper texture** — a faint SVG/`feTurbulence` noise or a subtle grain PNG at ~3% opacity over `--background`.
7. **Small-caps meta labels** with a leading index (`SPREAD 01 ·`) above every section.
8. **Tabbed nav** styled like notebook dividers/index tabs: `INDEX · BUILDING · READING · SKETCHES & COLLECTIONS · NOW · HELLO`.

---

## 4. Page structure (sections, top to bottom)

The homepage is one long scroll of "spreads." Rebuild these as components:

1. **Masthead** — name in serif, script tagline ("a notebook, mostly."), `VOL. 01` meta, and the **index-tab nav**.
2. **Spread 01 · Today (hero)** — one giant editorial sentence with highlighter marks and a script clause; a wavy underline + "scroll like you'd flip a page" hint.
3. **The Short Version (skim card)** — role line, a **STACK** chip cloud, a **WHAT SHIPPED** bullet list of metrics, and quick links (résumé, email, → the workbench).
4. **Spread · The Workbench** — section intro headline, then **project cards** (title, `/ SHIPPED` status tag, date label, a paragraph, an "open the page →" link, and a tilted polaroid with script caption). 3 featured projects + a "the full workbench →" link.
5. **Spread · Experience** — a **vertical timeline**: dotted spine, dated nodes (mono labels), serif descriptions, script margin notes ("my first job", "currently working here"), ending on "still being written."
6. **A Detour (sketchbook)** — headline with script highlights, a polaroid of a sketchbook, and an "open the sketchbook" button with wavy underline.
7. **Say Hello (contact)** — mono label, "say hello." headline, script line, email + linkedin + github links.
8. **Footer / wander further** — script intro, a row of underlined nav links, "N fragments and counting · kept by [You] · [City]", and a **fanned polaroid gallery** with the closing line "if you're reading this, you wandered far enough."

**Sub-pages** (from the nav) each have their own distinct layout — they are NOT just copies of the homepage. Full breakdown in §4b.

---

## 4b. Per-page breakdown (all 7 pages explored)

The nav routes are: `/` (Index), `/building`, `/reading`, `/sketches-collections`, `/now`, `/contact` (Hello). There's also a designed **404** page. A **global footer** (fanned polaroid gallery + "if you're reading this, you wandered far enough.") appears on every page — build it once.

### `/` — Index (home)
The long "notebook" scroll described in §4: masthead → Today hero → Short Version skim card → Workbench (3 featured project cards) → Experience timeline → Sketchbook detour → Say Hello → footer gallery. This is the showcase page; everything else is a deeper "spread."

### `/building` — "Building."
**Two-column layout.** Left column: a vertical stack of **project cards** (title with wavy underline, `/ SHIPPED`-style status tag, mono date label, paragraph, "open the page →" link, tilted polaroid with script caption). Right column: a **sticky "A PARTIAL TIMELINE"** — dated nodes that stay pinned while the cards scroll. Ends with a script note ("← this is the thing.") and a closing line. ~7 project cards here vs. 3 on the home page.

### `/reading` — "What I'm reading."
Two stacked sections. First, **ON THE SHELF** — a two-column list of books, each with a little **bookmark-ribbon icon**, title (wavy underline), and author + status in mono/script ("annotated", "re-reading"). Second, **PASSAGES I KEPT** — a two-column masonry of **quote cards**: a mono source label, the quote in serif with a **highlighter marker** sweep, an em-dash attribution, and a script margin note reacting to it.

### `/sketches-collections` — "Sketches & Collections."
The most visually rich page — a **corkboard / scrapbook** collage. Mixed pinned artifacts scattered on a dotted-grid "paper": green **sticky notes** with handwriting, **dashed-outline wireframe** cards (`cart · addr · pay`), **polaroids**, browser-**screenshot mockups** held by **paperclips**, a big **stat card** ("17× ORDERS/DAY"), and chart screenshots. Culminates in an **interactive "research canvas"** — "hover the pile… Open the canvas and drag around" — a pannable/draggable board of idea clusters. This is the one genuinely interactive, build-heavy feature.

### `/now` — "Now."
Deliberately simple. Mono "LAST UPDATED" date, "Now." headline, script tagline ("a page that goes out of date on purpose."), then a **2×2 grid of category cards** (BUILDING / READING / THINKING ABOUT / LEARNING), each a paper card with a dotted-bullet list. Closes with a script line + arrow.

### `/contact` — "Say hello."
Two-column. Left: **WAYS TO FIND ME** — a definition-style list (EMAIL / LINKEDIN / GITHUB / CITY) with underlined values, plus a paragraph on "good reasons to write." Right: a skeuomorphic **manila-folder résumé card** — a file-folder tab labeled "CLICK HERE TO PREVIEW" with torn paper peeking out, "The résumé." heading, and a "download (PDF)" link with a hand-drawn arrow. Footer "wander" links below.

### `404`
Not an afterthought — a huge serif **"404"**, "Page not found", a muted line, and a dark "Go home" button, all inside the same masthead + footer chrome. Build a styled 404.

---

## 5. Recommended tech stack

| Concern | Recommendation | Why |
|---|---|---|
| Framework | **Next.js (App Router)** or **Astro** | Astro is ideal if it's mostly static content — ships almost no JS. Next if you want React everywhere. |
| Styling | **Tailwind CSS** + the CSS variables above | Fast, and the tokens map cleanly to Tailwind theme extensions. |
| Fonts | `next/font` (or Astro font) with Google Fonts | Self-host for performance + no layout shift. |
| Hand-drawn effects | **rough-notation** / **roughjs**, or hand-authored SVG | For underlines, highlights, circles, arrows. |
| Scroll animations | **Framer Motion** (React) or **GSAP + ScrollTrigger** | Reveal-on-scroll, the "flip a page" feel, parallax band. |
| Content | **MDX** or a headless source (Content Collections in Astro) | Keeps projects/timeline as data, not hardcoded markup. |
| Deploy | **Vercel** or **Netlify** | Zero-config for both frameworks. |

**My pick for this design:** Astro + Tailwind + a sprinkle of vanilla JS/GSAP for the marker and reveal effects. It's content-forward and the design is largely static, so Astro keeps it fast and simple. Choose Next.js instead if you already live in React or want richer interactivity later.

---

## 6. Component inventory (build these once, reuse everywhere)

- `SpreadLabel` — mono small-caps label with optional index number.
- `Highlight` — wraps text in the marker effect.
- `WavyUnderline` / `Arrow` — SVG doodle wrappers.
- `TapedCard` — paper sheet with rotation + washi-tape corner.
- `Polaroid` — framed, tilted photo with script caption.
- `Chip` — stack/tech pill.
- `MetricList` — "what shipped" em-dash bullets.
- `TimelineItem` — dotted-spine node with date, body, margin note.
- `IndexTabsNav` — the notebook-divider navigation (active tab pulled forward).
- `ScriptNote` — inline handwriting marginalia.
- `SectionSpread` — layout wrapper providing the paper background + max-width + vertical rhythm.
- `GlobalFooter` — the fanned polaroid gallery + closing line (on every page).

**Page-specific pieces (from §4b):**

- `QuoteCard` — reading-page passage card (source label, highlighted quote, attribution, margin note).
- `ShelfItem` — book row with bookmark-ribbon icon.
- `StickyNote` — rotated post-it with handwriting (sketches page).
- `WireframeCard` — dashed-outline mock (`cart · addr · pay`).
- `PaperclipScreenshot` — pinned browser/app screenshot with a paperclip.
- `StatCard` — oversized metric block ("17× ORDERS/DAY").
- `ResearchCanvas` — the interactive draggable/pannable idea board (heaviest component).
- `CategoryCard` — Now-page card with dotted-bullet list.
- `ManilaFolder` — skeuomorphic résumé folder with preview tab + torn paper.
- `NotFound404` — styled 404 page.

---

## 7. Interactions & motion

- **Scroll reveals:** sections and cards fade/translate up as they enter view (respect `prefers-reduced-motion`).
- **Marker draw-in:** highlighter sweeps left-to-right when its line scrolls into view.
- **Underline/arrow draw:** rough-notation `show()` triggered on view.
- **Polaroid hover:** slight straighten + lift (`rotate(0) translateY(-4px)`).
- **Diagonal band parallax:** the rose band drifts slightly slower than scroll.
- **Tab nav:** active tab looks "pulled forward" like a real index tab; smooth-scroll or route to the section/page.

---

## 8. Suggested improvements over the original

- **Dark "night notebook" mode** — a muted paper-at-night palette (deep warm charcoal, dimmer highlighter) toggled from the masthead.
- **Accessibility pass** — the low-contrast script and faint captions need checking against WCAG AA; keep script text large and never load-bearing for meaning.
- **Real content model** — drive projects, timeline, and gallery from MDX/JSON so updates don't touch markup.
- **Performance** — self-host fonts, lazy-load the polaroid galleries, compress the grain texture.
- **SEO/OG** — per-page metadata + a paper-styled Open Graph image.
- **A subtle page-turn transition** between sub-pages to lean into the notebook metaphor (optional, keep it fast).

---

## 9. Build order (phased)

**Phase 1 — Foundation.** Scaffold the project, add fonts + CSS tokens, build `SectionSpread` layout, paper background + grain, and the masthead with `IndexTabsNav`.

**Phase 2 — Signature primitives.** `Highlight`, `WavyUnderline`/`Arrow`, `TapedCard`, `Polaroid`, `Chip`, `ScriptNote`. Get these pixel-right on a scratch page first.

**Phase 3 — Homepage spreads.** Hero → Short Version → Workbench cards → Experience timeline → Sketchbook detour → Say Hello → Footer gallery, using placeholder content.

**Phase 4 — Motion.** Scroll reveals, marker draw-in, underline draw, polaroid hover, band parallax. Add `prefers-reduced-motion` fallbacks.

**Phase 5 — Sub-pages (each is distinct — see §4b).** `/building` (two-col + sticky timeline), `/reading` (shelf + quote-card grid), `/now` (2×2 category grid), `/contact` (contact list + manila-folder résumé), then the styled `404` and global footer. Wire the tab nav (active-tab state per route).

**Phase 5b — The research canvas.** `/sketches-collections` is the heaviest page: the corkboard collage plus the interactive draggable/pannable "research canvas." Budget separate time for it; consider a pan/zoom lib (e.g. a canvas/flow library) rather than hand-rolling drag math.

**Phase 6 — Content + polish.** Move content into MDX/JSON, real copy and images, accessibility + contrast audit, dark mode, SEO/OG, Lighthouse pass, deploy.

---

## 10. Quick-start checklist

- [ ] Pick framework (Astro recommended) and scaffold
- [ ] Add Google Fonts: Fraunces, Special Elite, Caveat
- [ ] Paste the `:root` token block
- [ ] Build the 11 core components (§6)
- [ ] Assemble homepage spreads (§4)
- [ ] Layer in motion (§7)
- [ ] Swap placeholders for your real content
- [ ] Accessibility + performance + deploy
