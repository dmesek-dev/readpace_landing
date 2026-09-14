# ReadPace website

A Next.js 15 / React 19 marketing site for the ReadPace physical-book reading tracker. The homepage introduces the app through real screenshots, a reading-speed/recall example, pricing and FAQs. Three linked resources give visitors useful entry points from search:

- `/reading-speed-test` — original 338-word fiction passage, accurate elapsed-time measurement, pause/resume, three recall questions and an app CTA. State stays in browser memory; no result collection or account required.
- `/wpm-calculator` — live words-per-minute calculation with validated word/time inputs and worked examples.
- `/average-reading-speed` — guide with primary research citations, group-average context and the limits of WPM.

The homepage and editorial content are server-rendered and statically generated. Only the timer/quiz, calculator and small mobile-menu interaction add application client JavaScript. Mobile navigation and FAQs use native disclosure elements; the menu also dismisses on navigation, Escape and outside taps.

## Development and validation

```sh
npm install
npm run dev
npm run typecheck
npm test
npm run build
npm run check:seo
npm start
```

`npm test` checks reading arithmetic, input edge cases, word counting and duration formatting. `check:seo` runs against the production build and verifies unique titles/descriptions, canonical URLs, one H1 per page, parseable page-specific JSON-LD, internal links/anchors, sitemap coverage and crawler access.

## Product facts and launch configuration

`content/site.ts` contains the app facts, screenshots, pricing, FAQs and store URLs. Product limits originated in the `readpace_v2` app source; verify this file when the app changes. Do not add invented ratings, download counts, efficacy claims or unsupported competitor comparisons.

Both store URLs are currently `null`. The website labels those platforms as coming soon and offers the working online reading test. Add verified App Store and Google Play URLs in `stores` when live. The app CTA copy and install structured data then update automatically. No waitlist or email collection backend is configured.

The canonical production origin is `https://readpace.org`. Confirm it before launch. The existing contact address is `hello@readpace.org`. Privacy/support copy is retained from the original site, with its original September 7, 2026 content date.

## Search and AI discovery

- Search-focused resource titles, descriptions, self-canonicals and social metadata.
- Statically rendered explanations, accessible headings, visible citations and crawlable internal links.
- Homepage Organization, WebSite, MobileApplication and matching FAQ entities. Resource-specific WebPage/BreadcrumbList entities, with Article markup on the research guide.
- No fabricated ratings, software versions, install URLs or stock availability. FAQ markup does not promise a Google rich result.
- `robots.txt` allows public crawling; `sitemap.xml` lists all six content pages with actual content dates.
- `/llms.txt` is a supplemental reference, generated from shared product facts. Google does not use it for ranking; it is not an AI search shortcut.

See [SEO launch notes](docs/seo-launch.md) for the remaining production steps and measurement plan. Technical eligibility does not guarantee indexing, rankings or AI citations.

## Images and design

Existing real screenshots are in `public/screens/` as WebP with intrinsic dimensions. Only two phone screenshots load on the homepage; the hero gets high fetch priority. All other illustrations and the example chart use HTML/CSS. The design uses warm paper surfaces, terracotta accents, olive panels and serif emphasis, with reduced-motion and keyboard-focus support.

Regenerate screenshots with `python3 tools/build-screens.py [path/to/readpace_v2/screenshots]` and update the dimensions/alt text in `content/site.ts` if needed. The current images show the founder's actual account and reading data.

## Deployment

Use the existing Next.js hosting workflow (for example Vercel). This repository has not been deployed by the redesign work. Run the production checks above before deployment, then verify the production HTTP responses and search properties.
