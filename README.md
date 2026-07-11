# Chef's Table — Bhavnagar

A premium restaurant website built with React, TypeScript, Vite, Tailwind CSS v4, Framer Motion and Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Imagery

- **Full Menu** (`src/assets/menu/menu-1.jpg` … `menu-7.jpg`) and the **logo**
  (`src/assets/brand/`) are Chef's Table's real, supplied photos.
- **Most Popular Dishes** uses real food photography for the Tandoori
  Platter, Paneer Butter Masala, Veg Manchurian, Veg Hakka Noodles and Dal
  Fry Butter (`src/assets/dishes/real-*.jpg`), plus one placeholder
  (`dish-3.svg`) for the Kathiyawadi Fix Thali — replace that one with a real
  photo whenever you have one.
- **Hero background** (`src/assets/hero/hero-bg.svg`) and the **About**
  section image (`src/assets/about/about-story.svg`) are still generated
  placeholders — swap in a wide dining-room/tandoor shot and a chef/kitchen
  portrait respectively.
- **Gallery**: one real photo (fresh tandoor bread) plus 7 placeholder tiles
  (`src/assets/gallery/gallery-2.svg` … `gallery-8.svg`) — replace these with
  your own ambience and kitchen shots.

To swap any image, replace the file and keep the same filename, or update the
`import` path in `src/data/menuImages.ts`, `src/data/dishes.ts` or
`src/data/gallery.ts`. The lightbox, next/prev navigation, hover zoom and
masonry layout all work automatically with whatever you drop in.

Chef's Table's menu is entirely vegetarian — there is no non-veg content
anywhere on the site.

## Editing restaurant details

All contact info, hours, cuisines and nav links live in one place:
`src/data/restaurant.ts`. Reviews are in `src/data/reviews.ts`.

## Structure

```
src/
  components/   shared UI: Navbar, Footer, Button, SectionHeading, EmberDivider, Reveal
  sections/     one file per homepage section
  data/         restaurant info, dishes, menu images, gallery, reviews
  hooks/        useLightbox, useScrolled
  assets/       images (placeholders — see table above)
```
