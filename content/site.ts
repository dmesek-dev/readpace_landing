/**
 * Single source of truth for the landing page.
 *
 * Everything the page renders, the JSON-LD structured data, the sitemap and
 * `/llms.txt` all read from here — so a fact can never drift between what a
 * human sees and what a crawler (or an AI answer engine) is told.
 *
 * Every claim below is traceable to the app source in `readpace_v2`:
 *   - free-tier limits ....... features/subscription/domain/free_tier_limits.dart
 *   - stats rules ............ features/stats/domain/stats_thresholds.dart
 *   - WPM target range ....... features/wpm_target/domain/wpm_target_bounds.dart
 *   - quiz length ............ features/comprehension/domain/quiz_length.dart
 *   - on-device OCR .......... features/reading_session/data/mlkit_page_scanner.dart
 * Keep it that way: no invented metrics, no fake download counts.
 */

/* ------------------------------------------------------------------ site */

export const site = {
  name: "ReadPace",
  domain: "readpace.org",
  url: "https://readpace.org",
  tagline: "Find the reading speed where you actually remember",
  /** Used for <title>, OG title and the H1's plain-text equivalent. */
  title: "ReadPace — Reading Speed & Comprehension App",
  description:
    "Track your reading speed in WPM and see what you remember. ReadPace helps you find your pace with physical books. Try the free online reading speed test.",
  shortDescription:
    "Time your reading, scan the page to count words on-device, and find the pace where your recall peaks.",
  locale: "en_US",
  lastUpdated: "2026-09-14",
  email: "hello@readpace.org",
  bundleId: "com.readpace",
} as const;

/* ------------------------------------------------------------------ legal */

/**
 * The operator behind the app, used by /terms and /privacy.
 *
 * ReadPace is run by an individual trader in the EU, so the terms are written
 * for that shape: EU consumer law applies in full, Apple and Google are the
 * merchants of record for subscriptions, and the reader's own country's
 * consumer rules are never displaced by the governing-law clause.
 *
 * TODO before launch: confirm `operator` matches the name you trade under and
 * fill in `address` — an identifiable trader address is required of anyone
 * selling to EU consumers, and both stores ask for it on the listing.
 */
export const legal = {
  /** Trading name shown as the contracting party. */
  operator: "Dominik Mesek",
  /** Registered/business address. Shown verbatim on /terms. */
  address: "TODO: street, postcode, city, Croatia",
  country: "Croatia",
  governingLaw: "Croatian law",
  /** Where the terms and the privacy notice were last substantively changed. */
  updated: "2026-09-17",
} as const;

/* ------------------------------------------------------- store / CTA URLs */

/**
 * Paste the real store URLs here once the listings are live — every CTA,
 * the JSON-LD `installUrl`, and the App Store / Play badges read from this
 * object. `null` renders the badge as a non-clickable "coming soon" chip.
 */
export const stores = {
  appStore: null as string | null, // e.g. "https://apps.apple.com/app/readpace/id0000000000"
  googlePlay: null as string | null, // e.g. "https://play.google.com/store/apps/details?id=com.readpace"
} as const;

export const hasStoreLinks = Boolean(stores.appStore ?? stores.googlePlay);

/* --------------------------------------------------------- product facts */

export const facts = {
  freeBooks: 1,
  freeTests: 5,
  sweetSpotMinTestedSessions: 5,
  sweetSpotBinWidth: 25,
  sweetSpotDropoffMargin: 10,
  statsUnlockSessions: 3,
  minReliableSeconds: 30,
  trendWindowDays: 30,
  recentSessionsShown: 10,
  quizMin: 3,
  quizMax: 10,
  questionsPerPage: 2,
  wpmTargetMin: 50,
  wpmTargetMax: 1000,
  wpmTargetDefault: 260,
  platforms: ["iOS", "Android"],
} as const;

/** Short, extractable claims. Rendered as a table and mirrored in llms.txt. */
export const quickFacts: { label: string; value: string }[] = [
  {
    label: "What it is",
    value: "A reading-speed and comprehension tracker for physical books",
  },
  { label: "Platforms", value: "iOS and Android" },
  {
    label: "Core loop",
    value: "Time a session → scan the pages you read → get WPM + recall",
  },
  {
    label: "Word counting",
    value: "On-device OCR (Latin script) — page photos never leave the phone",
  },
  {
    label: "Signature feature",
    value: "Reading sweet spot: the WPM band where your recall peaks",
  },
  {
    label: "Free plan",
    value: `${facts.freeBooks} book and ${facts.freeTests} comprehension tests — enough to unlock your sweet spot once`,
  },
  {
    label: "Premium",
    value: "Unlimited books and comprehension tests (monthly or yearly)",
  },
  {
    label: "Account",
    value: "Email, Apple or Google — required to save and sync sessions",
  },
  {
    label: "Offline",
    value:
      "Timing and word counting work offline; quizzes and sync need a connection",
  },
  { label: "Category", value: "Education / Productivity" },
];

/* ---------------------------------------------------------------- screens */

export type Screen = {
  src: string;
  alt: string;
  /** Short caption used in the gallery. */
  caption: string;
  w: number;
  h: number;
};

const S = (src: string, caption: string, alt: string, h = 1651): Screen => ({
  src: `/screens/${src}.webp`,
  caption,
  alt,
  w: 760,
  h,
});

export const screens = {
  home: S(
    "home",
    "Home",
    "ReadPace home screen showing a 246 WPM all-time average against a 285 WPM goal, a rising reading-speed chart, weekly goal progress at 2 of 5, the active book “Atomic Habits” at 247 WPM average over 21 sessions and a sweet-spot insight card reading “You remember most at 250–275 WPM (93% recall)”.",
  ),
  sweetSpot: S(
    "sweet-spot",
    "Reading sweet spot",
    "ReadPace reading sweet spot screen: recall grouped into 25-WPM bands, with the 250–275 WPM band highlighted at 93% recall and a note that recall drops to 78% above 275 WPM.",
  ),
  timer: S(
    "timer",
    "Session timer",
    "ReadPace reading session timer running at 34:00 with the active book “Atomic Habits” and Pause and “Finish & scan” buttons.",
  ),
  scan: S(
    "scan",
    "Page scan",
    "ReadPace camera prompt: “Scan the page to count the words”, noting the camera is used only to count words and that photos are processed on the device and never leave the phone.",
    1648,
  ),
  quiz: S(
    "quiz",
    "Comprehension quiz",
    "ReadPace comprehension quiz, question 1 of 6, asking what the author says is the real difference between goals and systems, with three answer options and a “No idea” escape.",
  ),
  score: S(
    "score",
    "Recall score",
    "ReadPace comprehension result: 83% recall marked “strong recall”, alongside 271 WPM and 5 of 6 correct, with a note that this session landed right in the reader's sweet spot.",
  ),
  review: S(
    "review",
    "Answer review",
    "ReadPace quiz review listing all six questions with the correct answers marked in green and the one missed answer struck through in red beside the correct one.",
  ),
  book: S(
    "book",
    "Book detail",
    "ReadPace book detail for “Atomic Habits” showing 228 low, 247 average and 271 high WPM, 89% average recall across 16 tested sessions, a speed-across-sessions chart and recent sessions with WPM and recall rings.",
  ),
  stats: S(
    "stats",
    "Stats",
    "ReadPace stats screen with a 30-day WPM chart against a 285 goal, 296 personal best, 67 sessions, 237 average WPM, a most-productive-time chart favouring the evening and the reading sweet-spot card.",
  ),
  category: S(
    "category",
    "By category",
    "ReadPace “Reading by category” screen: Self-Help read fastest at 247 WPM average with 89% recall, compared down the list to History at 194 WPM.",
  ),
  library: S(
    "library",
    "Library",
    "ReadPace library screen with “Atomic Habits” as the active book at 247 WPM average over 21 sessions, above Deep Work, Educated, Project Hail Mary and Sapiens with their own averages and sparklines.",
  ),
  sessions: S(
    "sessions",
    "Session history",
    "ReadPace session history showing each session's date, word count, duration, WPM and recall ring — with untested sessions left blank rather than scored.",
  ),
  you: S(
    "you",
    "Settings",
    "ReadPace “You” tab with plan status, the 285 WPM goal, the comprehension-test toggle, theme selection and an opt-in for anonymous usage data.",
  ),
} satisfies Record<string, Screen>;

/** Order of the horizontal gallery strip. */
export const gallery: Screen[] = [
  screens.home,
  screens.sweetSpot,
  screens.stats,
  screens.book,
  screens.quiz,
  screens.score,
  screens.review,
  screens.category,
  screens.library,
  screens.sessions,
  screens.timer,
  screens.you,
];

/* ------------------------------------------------------------------ steps */

export const steps = [
  {
    n: "01",
    title: "Time the session",
    body: "Pick up your book and start the timer. Read at your own pace, and pause whenever life interrupts.",
    screen: screens.timer,
    detail: `Sessions shorter than ${facts.minReliableSeconds} seconds are ignored as unreliable.`,
  },
  {
    n: "02",
    title: "Scan what you read",
    body: "Point your camera at the pages you finished. ReadPace counts the words on your phone and calculates your WPM.",
    screen: screens.scan,
    detail:
      "On-device OCR. The photo is used to count words and never leaves your phone.",
  },
  {
    n: "03",
    title: "See what stayed with you",
    body: "Take an optional quiz about those pages. See your recall alongside your speed, and get to know your reading rhythm.",
    screen: screens.score,
    detail: `${facts.quizMin}–${facts.quizMax} questions, scaled to how much you scanned.`,
  },
] as const;

/* --------------------------------------------------------------- features */

export const features = [
  {
    icon: "target",
    title: "Your reading sweet spot",
    body: `Recall plotted against speed in ${facts.sweetSpotBinWidth}-WPM bands, so you can see the pace where you remember most — and the pace where you stop.`,
  },
  {
    icon: "lock",
    title: "Counting happens on-device",
    body: "Page recognition runs locally through the phone's own text recognizer. No page photo is ever uploaded.",
  },
  {
    icon: "trend",
    title: "Trends you can trust",
    body: `A ${facts.trendWindowDays}-day WPM curve, personal bests, weekly change and a goal line you set yourself — with short sessions filtered out.`,
  },
  {
    icon: "book",
    title: "Per-book analytics",
    body: "Low, average and high WPM for every title, plus average recall and the full session history for each book.",
  },
  {
    icon: "brain",
    title: "Comprehension scoring",
    body: `Multiple-choice questions drawn from the pages you scanned — ${facts.questionsPerPage} per page, capped at ${facts.quizMax} — scored as a recall percentage.`,
  },
  {
    icon: "clock",
    title: "Insights, not noise",
    body: "Which time of day you read fastest. Which categories you fly through. Which ones you remember. No feed, no badges for nothing.",
  },
  {
    icon: "bolt",
    title: "Goals that adapt to you",
    body: `Set a WPM target anywhere from ${facts.wpmTargetMin} to ${facts.wpmTargetMax}, and a weekly reading-days goal to keep the habit alive.`,
  },
  {
    icon: "flame",
    title: "Built for paper",
    body: "Made for the physical books on your shelf — not another screen-reading app with a progress bar.",
  },
] as const;

/* --------------------------------------------------------------- pricing */

export const pricing = {
  free: {
    name: "Free",
    price: "€0",
    note: "No card, no trial timer",
    items: [
      "Unlimited timed reading sessions",
      "On-device word counting and WPM",
      `Full stats after ${facts.statsUnlockSessions} qualifying sessions`,
      `${facts.freeBooks} book in your library`,
      `${facts.freeTests} comprehension tests — enough to unlock your first sweet spot`,
    ],
  },
  premium: {
    name: "Premium",
    price: "Monthly or yearly",
    note: "Prices shown in the app, in your currency",
    items: [
      "Everything in Free",
      "Unlimited books in your library",
      "Unlimited comprehension tests",
      "A sweet spot that keeps sharpening as you read",
      "Per-book and per-category recall over your whole shelf",
    ],
  },
} as const;

/* ------------------------------------------------------------------- FAQ */

export const faqs: { q: string; a: string }[] = [
  {
    q: "What is ReadPace?",
    a: "ReadPace is a mobile app for iOS and Android that measures how fast you read physical books and how much of it you remember. You time a reading session, scan the pages you read so the app can count the words, and get a words-per-minute figure alongside an optional comprehension score.",
  },
  {
    q: "How does ReadPace measure reading speed?",
    a: `WPM is simply words read divided by minutes read. The timer gives the minutes; scanning the pages with your camera gives the word count. Sessions shorter than ${facts.minReliableSeconds} seconds are excluded from every statistic because they aren't reliable.`,
  },
  {
    q: "What is the reading sweet spot?",
    a: `Your sweet spot is the reading-speed band where your comprehension peaks. ReadPace groups your tested sessions into ${facts.sweetSpotBinWidth}-WPM bands, averages the recall in each, and highlights the band where you remembered the most — plus the drop-off point past which recall clearly falls. It needs ${facts.sweetSpotMinTestedSessions} tested sessions before it shows a band, so the insight reflects your recorded sessions. It is not a validated assessment of reading ability.`,
  },
  {
    q: "Do photos of my book pages leave my phone?",
    a: "No. Word counting uses the phone's on-device text recognizer, so the photo is processed locally and never uploaded. If you switch on the optional comprehension test, the recognised text from the pages you scanned is sent to an AI service to write the quiz questions — you can leave that feature off, and the reading loop works fully without it.",
  },
  {
    q: "Do I need an account?",
    a: "You can run a complete session — timer, scan, WPM and a recall score — during onboarding before signing up. To save and sync your reading history you create a free account with email, Apple or Google.",
  },
  {
    q: "Is ReadPace free?",
    a: `Yes, with limits. The free plan includes unlimited timed sessions, on-device word counting, full statistics, ${facts.freeBooks} book in your library and ${facts.freeTests} comprehension tests — deliberately exactly the number needed to unlock your reading sweet spot once. Premium removes both limits with a monthly or yearly subscription.`,
  },
  {
    q: "Which books and languages work?",
    a: "Any printed book with Latin-script text — the on-device recognizer reads Latin characters, so English and most European languages work. Clear, well-lit pages scan best.",
  },
  {
    q: "Does it work for ebooks or Kindle?",
    a: "ReadPace is built for print. You scan a physical page with the camera, so an e-reader screen is not the intended use — for paper books it's exactly the point.",
  },
  {
    q: "How long is a comprehension test?",
    a: `${facts.questionsPerPage} questions per scanned page, clamped between ${facts.quizMin} and ${facts.quizMax}. Each is multiple choice with one correct answer, drawn only from the pages you actually scanned, and your score becomes that session's recall percentage.`,
  },
  {
    q: "Will ReadPace make me read faster?",
    a: "It won't sell you a speed-reading trick. It measures what you actually do, shows the trend over 30 days, and tells you the pace at which you still remember what you read — which is usually more useful than a bigger number.",
  },
  {
    q: "Does it work offline?",
    a: "Timing a session and counting words work without a connection because both run on the device. Saving to your account, syncing across devices and generating comprehension quizzes need internet.",
  },
  {
    q: "What statistics does ReadPace show?",
    a: `A ${facts.trendWindowDays}-day WPM trend, average and personal-best WPM, week-over-week change, your most productive time of day, speed and recall by book category, your last ${facts.recentSessionsShown} sessions, and per-book low/average/high WPM with average recall. Statistics unlock after ${facts.statsUnlockSessions} qualifying sessions.`,
  },
];

/* ------------------------------------------------------------ navigation */

export const nav = [
  { href: "#how", label: "How it works" },
  { href: "#sweet-spot", label: "Sweet spot" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
] as const;
