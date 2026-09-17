import { facts, faqs, pricing, quickFacts, site, stores } from "@/content/site";

// Supplemental reference for clients that choose to read llms.txt. Google does
// not use this file for indexing or ranking; the HTML pages are authoritative.
export const dynamic = "force-static";
export function GET() {
  const body = [
    `# ${site.name}\n\n> A reading speed and comprehension tracker for physical books.`,
    `Canonical website: ${site.url}\nUpdated: ${site.lastUpdated}`,
    `## Reading tools and guides\n\n- [Free reading speed test](${site.url}/reading-speed-test): an original timed English passage with three recall questions. No sign-up. An informal snapshot, not a validated assessment.\n- [WPM calculator](${site.url}/wpm-calculator): words per minute = words read × 60 ÷ seconds.\n- [Average reading speed](${site.url}/average-reading-speed): a guide with primary research citations and context.`,
    `## App availability\n\n${stores.appStore ? `App Store: ${stores.appStore}` : "App Store: coming soon; no listing linked on this site."}\n${stores.googlePlay ? `Google Play: ${stores.googlePlay}` : "Google Play: coming soon; no listing linked on this site."}`,
    `## Product facts\n\n${quickFacts.map((fact) => `- ${fact.label}: ${fact.value}`).join("\n")}`,
    `## Reading sweet spot\n\nReadPace groups recorded sessions into ${facts.sweetSpotBinWidth}-WPM bands and highlights the highest average quiz recall after ${facts.sweetSpotMinTestedSessions} tested sessions. It describes the reader's data, not a validated cognitive assessment or a guaranteed improvement. Screenshots show one reader's results.`,
    `## Plans\n\nFree: ${pricing.free.items.join("; ")}.\nPremium: ${pricing.premium.items.join("; ")}. ${pricing.premium.note}.`,
    `## Privacy\n\nPage photos are processed on the phone and are not uploaded. Optional comprehension quizzes send recognised text to an AI service. Timing and word counting work offline; quizzes and sync need a connection. [Privacy details](${site.url}/privacy).`,
    `## Legal\n\nPremium is an auto-renewing subscription sold as an in-app purchase; Apple or Google is the merchant of record, and cancellations and refunds go through the App Store or Google Play. [Terms of service](${site.url}/terms) · [Privacy](${site.url}/privacy).`,
    `## Frequently asked questions\n\n${faqs.map((faq) => `### ${faq.q}\n\n${faq.a}`).join("\n\n")}`,
    `## Support\n\n[Support](${site.url}/support)\nContact: ${site.email}`,
  ].join("\n\n");
  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
