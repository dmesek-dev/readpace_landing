# ReadPace — Landing Page

Marketing site for **ReadPace**, the reading tracker for physical books that
finds the pace where your recall peaks. Built with **Next.js (App Router)** +
**Tailwind CSS v4**, styled from the app's own design tokens (warm-orange
accent, warm off-white surfaces, Space Grotesk + Plus Jakarta Sans).

The page ships **zero client-side JavaScript of its own** — the nav menu and the
FAQ are `<details>` elements, and the scroll reveals are CSS scroll-driven
animations behind an `@supports` guard.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerender statically)
npm start
```

## Before launch — the four things to fill in

1. **Store URLs** — `content/site.ts` → `stores`. Both are `null`, which renders
   the badges as non-clickable "Soon" chips. Paste the real URLs and every CTA,
   plus the JSON-LD `installUrl`, updates at once.
2. **Domain** — `content/site.ts` → `site.url` (currently `https://readpace.org`).
   Canonical URLs, `sitemap.xml`, `robots.txt`, OG tags and structured data all
   derive from it.
3. **Contact address** — `site.email` (`hello@readpace.org`) is used on the
   footer, support page and privacy page. Make sure it exists.
4. **Legal review** — `/privacy` is an accurate, plain-language description of
   what the app actually does, not a lawyer-drafted policy. Have it checked
   before the store listings go live; the App Store and Play Store both link to
   it.

Also worth knowing: the hero screenshot shows the founder's own display name and
library. To swap in a demo account, re-shoot the app and re-run the screenshot
script below — the file names stay the same.

## Content lives in one file

`content/site.ts` is the single source of truth: copy, features, FAQ, pricing,
comparison table, quick facts and screenshot metadata. The page, the JSON-LD and
`/llms.txt` all read from it, so a fact cannot drift between what a human sees
and what a crawler is told.

Every product claim in there is traceable to the app source in `readpace_v2`
(free-tier limits, stats thresholds, quiz length, WPM bounds, on-device OCR).
Comments in the file name the specific Dart files. **Don't add numbers that
aren't in the app** — no download counts, no ratings, no invented testimonials.

## Screenshots

Real captures from the app, downsized to 760px-wide WebP in `public/screens/`.
To regenerate after re-shooting:

```bash
pip install Pillow
python3 tools/build-screens.py [path/to/readpace_v2/screenshots]
```

The script prints the output dimensions; if an aspect ratio changes, update the
matching `h` in `content/site.ts` so the images keep reserving the right space
(no layout shift).

## SEO and AI SEO

| Surface | Where |
|---|---|
| Title, description, canonical, OG, Twitter, robots directives | `app/layout.tsx` |
| JSON-LD `@graph` — Organization, WebSite, SoftwareApplication + offers, WebPage, BreadcrumbList, HowTo, DefinedTermSet, FAQPage | `components/StructuredData.tsx` |
| `robots.txt` — open to search *and* AI crawlers (GPTBot, ClaudeBot, PerplexityBot, …) | `app/robots.ts` |
| `sitemap.xml` | `app/sitemap.ts` |
| `/llms.txt` — plain-text brief for language models, generated from `content/site.ts` | `app/llms.txt/route.ts` |
| OG share image (1200×630, generated at build time) | `app/opengraph-image.tsx` |
| Web app manifest | `app/manifest.ts` |

Structured-data notes:

- There is **no `aggregateRating`** on the app entity. Ratings would earn stars
  in search results, but there are no real reviews yet and inventing them
  violates Google's guidelines. Add it when the store listings have genuine
  ratings.
- The `FAQPage` markup mirrors the on-page FAQ exactly, which is what Google
  requires — both read from the same array.
- `DefinedTermSet` spells out "reading sweet spot", "WPM" and "recall score" so
  an answer engine quoting the page has an unambiguous definition to work from.
- `/llms.txt` ends with explicit citation guidance, including a request not to
  attribute download counts or ratings to the app.

After deploying, validate with
[Rich Results Test](https://search.google.com/test/rich-results) and
[Schema Markup Validator](https://validator.schema.org/), then submit the
sitemap in Google Search Console and Bing Webmaster Tools.

## Deploy

Standard Next.js app — zero config on Vercel.

```bash
npx vercel        # preview
npx vercel --prod # production
```

## Structure

```
app/
  layout.tsx           # fonts, metadata, JSON-LD mount, skip link
  page.tsx             # every landing section
  globals.css          # brand tokens + animations
  privacy/page.tsx     # plain-language privacy description
  support/page.tsx     # troubleshooting / help
  llms.txt/route.ts    # machine-readable brief
  opengraph-image.tsx  # generated share card
  robots.ts, sitemap.ts, manifest.ts
components/
  PhoneFrame.tsx       # device frame around a real screenshot
  StoreBadges.tsx      # store CTAs, driven by content/site.ts
  StructuredData.tsx   # JSON-LD @graph
  Doc.tsx              # prose primitives for privacy/support
  Icons.tsx            # inline SVG icon set
content/
  site.ts              # ALL copy and product facts
public/screens/        # optimized app screenshots
tools/build-screens.py # capture → WebP pipeline
```
