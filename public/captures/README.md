# Captures — photos for the "Captures & Collections" page

Drop your real photos in this folder (`public/captures/`) — jpg / png / webp,
roughly square or 4:3 looks best on the corkboard.

Then open `src/pages/captures-collections.astro` and point a polaroid at your file.

## The two ready photo slots

Near the bottom of the corkboard block you'll find two `<Polaroid>` pins with a
`{/* PHOTO SLOTS */}` comment above them. Add a `src`:

```astro
<!-- before (gradient placeholder) -->
<Polaroid photo="p3" caption="a good day." washi src={undefined} alt="a good day" />

<!-- after (your photo) -->
<Polaroid photo="p3" caption="a good day." washi src="/captures/goa-trip.jpg" alt="a good day" />
```

`/captures/goa-trip.jpg` maps to `public/captures/goa-trip.jpg`.

## Add more pins

Copy a pin and position it with `top` / `left` (or `right`) in the inline style:

```astro
<div class="pin" style="top:300px; left:250px; width:200px;">
  <Polaroid src="/captures/bookshelf.jpg" alt="my shelf" caption="the shelf." washi />
</div>
```

Or pin a browser/app screenshot with a paperclip instead of a polaroid frame:

```astro
<div class="pin" style="top:120px; left:80px;">
  <div class="paperclip-shot" style="position:relative;">
    <img class="shot" src="/captures/dashboard.png" alt="a dashboard" loading="lazy" />
  </div>
</div>
```

The footer polaroid gallery (bottom of every page) is separate — those captions/
photos live in `src/components/GlobalFooter.astro` + `galleryCaptions` in `src/data/site.ts`.
