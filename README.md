# Awtad Energy

Production-ready Next.js front end for an Oman-based renewable energy company website.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Static SEO routes (`sitemap.xml`, `robots.txt`, metadata images)

## Run
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build
```bash
npm run build
npm run lint
```

## Structure
```text
src/
  app/
    about/
    contact/
    industries/
    projects/
    solutions/
    sustainability/
    globals.css
    layout.tsx
    page.tsx
    manifest.ts
    robots.ts
    sitemap.ts
    opengraph-image.tsx
    twitter-image.tsx
  components/
    brand-mark.tsx
    button-link.tsx
    contact-form.tsx
    content-blocks.tsx
    page-hero.tsx
    reveal.tsx
    section-heading.tsx
    site-footer.tsx
    site-header.tsx
  lib/
    metadata.ts
    site.ts
    utils.ts
public/
  images/
    hero-*.svg
docs/
  strategy.md
  design-system.md
  content-architecture.md
  website-copy.md
```

## Editing Notes
- Page-level SEO metadata is defined per route using `createMetadata()` in `src/lib/metadata.ts`.
- Global brand config and navigation live in `src/lib/site.ts`.
- Hero sections use local placeholder assets in `public/images/`.
- Reusable layout sections live in `src/components/content-blocks.tsx`.
- The contact form is a client component with prototype-only submit behavior and is ready to connect to a CRM or server action later.

## Placeholder Assets
Current hero visuals are lightweight SVG placeholders so the app stays fast and easy to replace later. Swap them with real photography or generated art by keeping the same filenames or updating the page props.
