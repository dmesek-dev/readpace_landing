# Search launch notes — September 14, 2026

## What changed

The original landing page had metadata and crawler endpoints but a long conversion journey, disabled store badges, no functional search-intent tool, broad unsupported competitor claims and homepage structured data repeated on legal/support routes. The redesign creates a clear product story and free tools with distinct purposes, without generating redundant keyword pages.

| Page                     | Purpose and relevant search intent                                            |
| ------------------------ | ----------------------------------------------------------------------------- |
| `/`                      | ReadPace app, reading speed tracker, comprehension tracker for physical books |
| `/reading-speed-test`    | Reading speed test, how fast do I read, WPM test for reading                  |
| `/wpm-calculator`        | WPM calculator, words per minute meaning/formula, calculate reading speed     |
| `/average-reading-speed` | Average reading speed, average reading WPM, speed and comprehension           |

“WPM” also has typing intent. The site explicitly distinguishes reading from typing instead of promising relevance to every WPM search.

## Production actions still required

1. Deploy this code to the existing host and confirm `https://readpace.org` is the actual canonical origin. Redirect alternative hostnames to it and ensure HTTPS is working.
2. Add real store listing URLs in `content/site.ts` when available. Until then, the online test works and app platforms are explicitly marked coming soon.
3. Verify the domain in [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters/). Submit `https://readpace.org/sitemap.xml` and inspect the homepage and each new resource URL.
4. Confirm production returns HTTP 200 for the content routes, `robots.txt`, `sitemap.xml`, `/llms.txt`, the share image and screenshots. Check hosting/CDN rules do not block the search crawlers you intend to allow.
5. Validate public URLs with [Rich Results Test](https://search.google.com/test/rich-results) and [Schema Markup Validator](https://validator.schema.org/). Structured data is descriptive; neither FAQ nor app markup guarantees a special result.
6. Check mobile performance on the live host using [PageSpeed Insights](https://pagespeed.web.dev/). Local build success is not a measured Core Web Vitals score.
7. Confirm the Search Console setting that permits generative AI search features. Monitor indexing and impressions before making ranking claims.

These account/hosting actions have not been performed from this workspace. No waitlist or Search Console ownership token was invented.

8. Create the Firebase project, set the `NEXT_PUBLIC_FIREBASE_*` environment variables in production and register the `store` custom dimension in GA4. See [analytics setup](analytics.md). The code is in place; the console and hosting steps are not.

## What to measure

In Search Console, review impressions, clicks, click-through rate, indexed pages and query-to-page matches for reading speed and WPM topics. Use separate filters for brand, reading-test and calculator searches. Do not assume an immediate ranking change after publishing.

Firebase Analytics records page views and a `store_click` event per storefront. Test started, test finished and result viewed remain useful additions; `track()` in `lib/analytics.ts` takes them. Keep raw quiz answers and scanned book text out of marketing analytics.

Improve the site over time with original, useful material: accurately documented app workflows, clearly described reader case studies with permission, authentic store reviews and relevant links earned through communities or editorial coverage. Avoid fake reviews, mass-generated query pages and purchased mentions.

## Basis for the implementation

Google's [generative AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) ties AI discovery to foundational SEO, useful original content and crawlable pages. It explicitly says Google ignores `llms.txt` for rankings and does not require special AI markup. The file here is only a convenient product reference for clients that choose to use it.

The [AI features technical guide](https://developers.google.com/search/docs/appearance/ai-features) describes search eligibility. Technical compliance does not guarantee crawling, indexing, inclusion or ranking.

The reading guide cites primary research: [Brysbaert (2019)](https://doi.org/10.1016/j.jml.2019.104047) for adult English reading rates, and [Rayner et al. (2016)](https://doi.org/10.1177/1529100615623267) for speed/comprehension trade-offs. The online quiz is explicitly informal and is not represented as a validated comprehension assessment.
