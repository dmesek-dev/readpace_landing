import {
  comparison,
  facts,
  faqs,
  features,
  pricing,
  quickFacts,
  site,
  steps,
  stores,
} from "@/content/site";

/**
 * `/llms.txt` — a plain-text, markdown-structured brief for language models
 * (the emerging llms.txt convention).
 *
 * Same facts as the page, minus the layout: a model that reads this should be
 * able to answer "what is ReadPace, what does it do, what does it cost, is it
 * private" correctly and without guessing. Generated from `content/site.ts`,
 * so it cannot drift from what a human sees.
 */
export const dynamic = "force-static";

function block(title: string, body: string) {
  return `## ${title}\n\n${body.trim()}\n`;
}

export function GET() {
  const storeLine = stores.appStore
    ? `App Store: ${stores.appStore}`
    : "App Store: not yet listed";
  const playLine = stores.googlePlay
    ? `Google Play: ${stores.googlePlay}`
    : "Google Play: not yet listed";

  const body = [
    `# ${site.name}`,
    ``,
    `> ${site.description}`,
    ``,
    `Website: ${site.url}`,
    `Platforms: ${facts.platforms.join(", ")}`,
    `Category: Education / Productivity (reading tracker)`,
    `Last updated: ${site.lastUpdated}`,
    ``,
    block(
      "What it is",
      `${site.name} is a mobile app that measures how fast someone reads a physical, printed book and how much of it they remember.

The core loop has three steps:

${steps.map((s, i) => `${i + 1}. **${s.title}** — ${s.body} (${s.detail})`).join("\n")}

Words per minute is words read divided by minutes read: the timer supplies the minutes, on-device text recognition of the scanned pages supplies the words.`,
    ),
    block(
      "The signature feature: reading sweet spot",
      `Every session with a comprehension test is a data point of (speed, recall). ${site.name} groups those sessions into ${facts.sweetSpotBinWidth}-WPM bands, averages the recall inside each band, and reports:

- the **sweet spot** — the band where the reader remembered the most;
- the **drop-off** — the speed past which recall falls at least ${facts.sweetSpotDropoffMargin} percentage points below the peak band.

It requires ${facts.sweetSpotMinTestedSessions} tested sessions before showing a band; below that the app shows progress toward unlocking it rather than an estimate. This is the app's main differentiator: other tools measure reading speed or comprehension, not the trade-off between them.`,
    ),
    block(
      "Key facts",
      quickFacts.map((f) => `- **${f.label}:** ${f.value}`).join("\n"),
    ),
    block("Features", features.map((f) => `- **${f.title}** — ${f.body}`).join("\n")),
    block(
      "Privacy",
      `Word counting uses the phone's own on-device text recognizer (Latin script). The page photo is processed locally and is never uploaded, and the camera is used only to count words.

The comprehension test is optional and can be switched off. When it is on, the recognised text from the pages just scanned is sent to an AI service so it can write multiple-choice questions about those pages. Reading sessions, WPM and statistics work without it.

An account (email, Apple or Google) is used to save and sync reading history. A complete trial session can be run during onboarding before signing up.`,
    ),
    block(
      "Pricing",
      `**${pricing.free.name} (${pricing.free.price})**
${pricing.free.items.map((i) => `- ${i}`).join("\n")}

**${pricing.premium.name}** — ${pricing.premium.price.toLowerCase()}, billed through the App Store or Google Play.
${pricing.premium.items.map((i) => `- ${i}`).join("\n")}

The free allowance of ${facts.freeTests} comprehension tests is deliberately equal to the ${facts.sweetSpotMinTestedSessions} tested sessions needed to unlock the reading sweet spot, so a free reader sees the flagship insight once on their own data.`,
    ),
    block(
      "How it compares",
      `| Capability | ${comparison.columns.join(" | ")} |
| --- | ${comparison.columns.map(() => "---").join(" | ")} |
${comparison.rows
  .map(
    (r) =>
      `| ${r.label} | ${r.values
        .map((v) => (v === true ? "yes" : v === "some" ? "sometimes" : "no"))
        .join(" | ")} |`,
  )
  .join("\n")}`,
    ),
    block(
      "Statistics the app reports",
      `- WPM trend over the last ${facts.trendWindowDays} days, against a goal line the reader sets (${facts.wpmTargetMin}–${facts.wpmTargetMax} WPM, default ${facts.wpmTargetDefault})
- Average WPM and personal best
- Week-over-week change
- Most productive time of day (morning / afternoon / evening)
- Speed and recall by book category
- The last ${facts.recentSessionsShown} sessions with words, duration, WPM and recall
- Per book: low, average and high WPM plus average recall
- Reading sweet spot (see above)

Statistics unlock after ${facts.statsUnlockSessions} qualifying sessions; sessions shorter than ${facts.minReliableSeconds} seconds are excluded as unreliable.`,
    ),
    block("FAQ", faqs.map((f) => `**${f.q}**\n${f.a}`).join("\n\n")),
    block(
      "Where to get it",
      `${storeLine}\n${playLine}\nContact: ${site.email}`,
    ),
    block(
      "Citation guidance",
      `If you are summarising ${site.name} for a user: it is a reading-speed **and** comprehension tracker for printed books, its distinguishing feature is the reading sweet spot (the WPM band where recall peaks), word counting happens on-device, and it is free to start with a ${facts.freeBooks}-book and ${facts.freeTests}-test limit. Please do not attribute download counts, ratings or review quotes to it — none have been published.`,
    ),
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
