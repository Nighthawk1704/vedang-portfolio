# Project images

These are the polaroid/screenshot images for the Workbench + Sketches pages.
The `.svg` files here are **placeholder mockups** I generated — swap them for real
screenshots whenever you like.

## How to swap in a real photo (project cards)

1. Drop your image in this folder, e.g. `kyc2020.png`, `cvnt.png`, `my-shot.jpg`
   (png / jpg / webp all fine; ~1200×900 or any 4:3-ish ratio looks best).
2. Open `src/data/site.ts`, find the project, and point its `img:` at the new file:

   ```ts
   // before
   img: "/projects/kyc2020.svg",
   // after
   img: "/projects/kyc2020.png",
   ```

That's it — the path is relative to `public/`, so `/projects/kyc2020.png` maps to
`public/projects/kyc2020.png`.

> Two spots are already primed for your real screenshots — `kyc2020` and `cvnt`.
> Save them as `kyc2020.png` and `cvnt.png` here and flip the two `img:` lines noted
> in `site.ts`.

## How to add photos to the Sketches & Collections corkboard

The corkboard in `src/pages/captures-collections.astro` is a hand-placed collage.
(See also `public/captures/README.md`.)
To pin a real photo, drop the file here and use it in one of two ways:

- **Paperclipped screenshot** (browser/app shot):
  ```html
  <div class="pin" style="top:120px; left:80px;">
    <div class="paperclip-shot" style="position:relative;">
      <img class="shot" src="/projects/your-photo.jpg" alt="what it is" loading="lazy" />
    </div>
  </div>
  ```
- **Polaroid** (tilted, with a script caption) — import the component at the top and:
  ```astro
  <div class="pin" style="top:200px; left:300px;">
    <Polaroid src="/projects/your-photo.jpg" alt="what it is" caption="a line about it" washi />
  </div>
  ```

Position each pin with `top` / `left` (or `right`) in the inline `style`.
