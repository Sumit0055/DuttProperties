# Local SEO Plan — Ghaziabad · Noida · Greater Noida · Delhi NCR

This file documents what is already implemented in code and what still has to be done outside the website (off-page).

---

## 1. On-page (already implemented)

| Item | Where |
| --- | --- |
| Unique title + meta description per route | `src/app/*/page.jsx` via `src/lib/seo.js` |
| Canonical URL per route | `buildMetadata()` → `alternates.canonical` |
| Open Graph + Twitter cards with image | `src/lib/seo.js` |
| Keyword targeting per route | `keywords` in each page's metadata |
| `RealEstateAgent` + `WebSite` structured data with `areaServed` | `src/app/layout.js` |
| `ApartmentComplex` + `BreadcrumbList` per project | `src/app/<project>/page.jsx` |
| `Service` + `FAQPage` structured data | `src/app/service/page.jsx` |
| `sitemap.xml` (12 URLs) | `src/app/sitemap.js` |
| `robots.txt` with sitemap reference | `src/app/robots.js` |
| Single H1 per page, descriptive H2/H3 | every screen component |
| Descriptive alt text on property imagery | `AboutPage`, `ServicePage`, project pages |
| Local area lists on the Services page | "Service areas" block |
| Semantic `lang="en-IN"` | `src/app/layout.js` |

### Keyword clusters in use

- **Ghaziabad** — property consultant Ghaziabad, luxury apartments Ghaziabad, flats in Raj Nagar Extension, GDA approved plots Ghaziabad.
- **Indirapuram / Vaishali / Vasundhara** — covered through the service-area block and About copy.
- **Noida / Noida Extension** — property advisory Noida, property in Noida Extension.
- **Greater Noida** — property in Greater Noida, new projects Greater Noida.
- **Delhi NCR** — real estate channel partner Delhi NCR.
- **Project intent** — Apex Sky Heights Ghaziabad, AR Domain Morta, Saya Duhai NH-58, VVIP Madhuban, Gulshan Bapudham, Kingdom Homes Raj Nagar Extension, GDA plots Govindpuram.

---

## 2. Before going live (must do)

1. Set the real values in `.env.local` (copy `.env.example`):
   - `NEXT_PUBLIC_SITE_URL` — canonical domain, no trailing slash.
   - `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_WHATSAPP` — 10-digit number with `91` prefix for WhatsApp.
   - `NEXT_PUBLIC_EMAIL` — enquiry inbox.
2. Replace the sample property photography URLs with the client's own site photos (`public/images/...`).
3. Replace `public/video/vvipVideo.mp4` with the project-specific films once supplied.
4. Submit `https://<domain>/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
5. Verify the domain in Search Console (DNS or HTML tag) and request indexing for all 12 URLs.

---

## 3. Off-page (outside the codebase)

### Google Business Profile (highest impact)

- Create a GBP for "Dutt Properties" under **Real Estate Agency / Real Estate Consultant**.
- Primary category: Real Estate Agency. Secondary: Real Estate Consultant, Property Management.
- Service areas: Ghaziabad, Indirapuram, Raj Nagar Extension, Vaishali, Vasundhara, Noida, Greater Noida, Delhi NCR, Meerut.
- Add 10+ real photos (office, site visits, project exteriors) and post weekly updates.
- Collect 15–25 reviews in the first quarter, each mentioning the locality ("bought a 3 BHK in Raj Nagar Extension").

### Citations (NAP consistency)

Keep the name, address and phone **identical** everywhere:

- Justdial, Sulekha, 99acres, MagicBricks, Housing.com, NoBroker (agent profile)
- IndiaMART, TradeIndia (channel partner listings)
- Bing Places, Apple Maps, Yelp India
- Local Facebook business page, Instagram business profile with the same address

### Backlinks worth pursuing

- Ghaziabad / Noida real-estate bloggers and YouTube channels (project walkthrough features)
- Local news portals covering Ghaziabad infrastructure (RRTS Duhai, NH-58, Delhi–Meerut Expressway)
- Developer channel-partner directories (Apex, AR, Gulshan, Saya, VVIP Madhuban sites) — ask for a listing on their "authorised channel partner" page
- RERA agent registration listing, if applicable

### Content cadence

- One locality guide per month: "Raj Nagar Extension property price guide", "Duhai RRTS impact on property", "GDA-approved plots in Govindpuram — checklist".
- Each guide should link to `/projects` and the relevant project page.
- Publish the same content as a GBP post and an Instagram carousel.

---

## 4. Measurement

- Google Search Console → queries with impressions but low CTR → rewrite those titles first.
- Track WhatsApp clicks as events once `NEXT_PUBLIC_GA_ID` is set.
- Review GBP insights monthly (calls, direction requests, searches).
