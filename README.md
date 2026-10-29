# Dutt Properties — Next.js website

Luxury real estate website for Dutt Properties, Ghaziabad. Built with Next.js 16 (App Router), React 19, Framer Motion, GSAP + Lenis, and the existing gold-on-dark design system.

## Scripts

```bash
npm install        # install dependencies
npm run dev        # development server on http://localhost:3000
npm run build      # production build (must pass before handover)
npm run start      # serve the production build
npm run lint       # eslint
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in the real values. Nothing else in the codebase needs editing to go live:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain used by metadata, sitemap and structured data |
| `NEXT_PUBLIC_SITE_NAME` | Brand name in the navbar, footer and schema |
| `NEXT_PUBLIC_PHONE` | Display phone number |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number, `91` prefix, digits only |
| `NEXT_PUBLIC_EMAIL` | Enquiry inbox used in structured data |
| `NEXT_PUBLIC_GA_ID` | Optional Google Analytics 4 measurement ID |

All brand, contact and service-area values live in `src/lib/site.js`.

## Structure

```
src/
  app/                 routes (App Router) — one folder per URL
    layout.js          metadata, fonts, structured data, global chrome
    sitemap.js         /sitemap.xml
    robots.js          /robots.txt
    <route>/page.jsx    metadata + screen component for each route
  screens/             page-level components (client)
  ProjectPages/        individual project detail components
  Components/          Navbar, Footer, FloatingSocial, SmoothScroll, Seo/JsonLd
  data/                project catalogue + services content
  lib/                 site config, metadata helper, schema builders
  assets/              local images imported by components
public/
  assets/css/main.css  the legacy luxury design system (do not delete)
  assets/js/           unused HTML5UP helper scripts
  images/, video/      photography and project films
```

## Routes

`/` · `/about` · `/projects` · `/service` · `/contact` · `/apex-sky-height` · `/ar-domain` · `/the-kingdom-homes` · `/vvip` · `/gulshan` · `/saya` · `/gda` · `/intro` (noindex)

## SEO

Per-route metadata, canonicals, Open Graph, JSON-LD (`RealEstateAgent`, `WebSite`, `ApartmentComplex`, `BreadcrumbList`, `Service`, `FAQPage`), sitemap and robots are already wired up. The off-page plan for Ghaziabad / Noida / Greater Noida / Delhi NCR is in [SEO-LOCAL-PLAN.md](./SEO-LOCAL-PLAN.md).

## Notes

- `src/screens` was previously `src/Pages`, which collides with the reserved `pages/` directory on Windows — keep the current name.
- The `main.css` stylesheet is linked from `src/app/layout.js` because it `@import`s the Font Awesome webfont from a relative path.
- Missing project videos fall back to `public/video/vvipVideo.mp4` until the client supplies the real films.
