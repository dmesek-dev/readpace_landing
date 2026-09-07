import type { ReactNode } from "react";

import { PhoneFrame } from "@/components/PhoneFrame";
import { StoreBadges } from "@/components/StoreBadges";
import {
  BoltIcon,
  BookIcon,
  BrainIcon,
  CheckIcon,
  ClockIcon,
  LockIcon,
  QuoteIcon,
  ScanIcon,
  TargetIcon,
  TimerIcon,
  iconMap,
  type IconName,
} from "@/components/Icons";
import {
  comparison,
  facts,
  faqs,
  features,
  gallery,
  nav,
  pricing,
  quickFacts,
  screens,
  site,
  steps,
} from "@/content/site";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-hidden">
        <Hero />
        <ProofStrip />
        <Problem />
        <HowItWorks />
        <SweetSpot />
        <Insights />
        <Features />
        <Gallery />
        <Comparison />
        <QuickFacts />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

/* ------------------------------------------------------------------- nav */

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#main" className="shrink-0" aria-label={`${site.name} home`}>
          <Wordmark />
        </a>

        <nav
          aria-label="Sections"
          className="hidden items-center gap-7 text-sm font-semibold text-ink-soft lg:flex"
        >
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#get"
            className="rounded-full bg-brand px-4 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 sm:px-5"
          >
            Get the app
          </a>
          {/* CSS-only mobile menu: no client JS on the whole page. */}
          <details className="relative lg:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-hairline-strong bg-card"
              aria-label="Open menu"
            >
              <span className="flex flex-col gap-[3px]" aria-hidden>
                <i className="block h-[2px] w-4 rounded bg-ink" />
                <i className="block h-[2px] w-4 rounded bg-ink" />
                <i className="block h-[2px] w-4 rounded bg-ink" />
              </span>
            </summary>
            <nav
              aria-label="Sections"
              className="absolute right-0 top-12 w-48 rounded-2xl border border-hairline bg-card p-2 shadow-xl"
            >
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-ink-soft hover:bg-paper hover:text-ink"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-[0.6rem] bg-brand text-white">
        <BookIcon className="h-4 w-4" />
      </span>
      <span
        className={`font-display text-xl font-bold tracking-tight ${
          tone === "dark" ? "text-night-ink" : "text-ink"
        }`}
      >
        {site.name}
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ hero */

function Hero() {
  return (
    <section className="bg-warm-wash">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-10 pt-12 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:pb-24 md:pt-20">
        <div>
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-container/60 px-3.5 py-1.5 text-xs font-bold text-on-brand-container">
            <BoltIcon className="h-3.5 w-3.5" />
            A reading coach for real, printed books
          </p>

          <h1
            id="hero-heading"
            className="animate-rise delay-1 mt-5 font-display text-[2.55rem] font-bold leading-[1.04] tracking-tight text-ink sm:text-[3.4rem] lg:text-[4rem]"
          >
            Find the reading speed where you actually{" "}
            <span className="text-gradient-brand">remember</span>.
          </h1>

          <p className="animate-rise delay-2 speakable mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
            ReadPace times your session, scans the pages you read to count the
            words <strong className="font-semibold text-ink">on your device</strong>,
            and quizzes what stuck. After a handful of sessions it shows the pace
            band where your recall peaks — and the speed where it falls apart.
          </p>

          <div className="animate-rise delay-3">
            <StoreBadges className="mt-7" />
            <p className="mt-3 text-xs font-medium text-taupe">
              Free to start · No card · {facts.platforms.join(" and ")}
            </p>
          </div>

          <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-taupe">
            {[
              "Page photos never leave your phone",
              "Any printed book",
              "Set your own WPM goal",
            ].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <CheckIcon className="h-4 w-4 shrink-0 text-brand" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          {/* Anchor: the callouts are positioned against the phone itself. */}
          <div className="relative w-[262px] sm:w-[292px]">
            <div
              className="absolute -inset-10 -z-10 rounded-full bg-brand/10 blur-3xl"
              aria-hidden
            />

            <PhoneFrame
              screen={screens.home}
              className="w-full animate-float"
              priority
            />

            {/* Callouts repeat what the screenshot itself says. */}
            <FloatCard className="-left-12 top-14">
              <p className="text-[10px] font-bold uppercase tracking-wide text-brand">
                Sweet spot
              </p>
              <p className="font-display text-base font-bold text-ink">300–325 WPM</p>
              <p className="text-[11px] text-taupe">100% recall</p>
            </FloatCard>

            <FloatCard className="-right-12 bottom-24">
              <p className="text-[10px] font-bold uppercase tracking-wide text-taupe">
                Personal best
              </p>
              <p className="font-display text-base font-bold text-ink">383 WPM</p>
              <p className="text-[11px] text-taupe">over 9 sessions</p>
            </FloatCard>
          </div>
        </div>
      </div>

      <p className="mx-auto max-w-6xl px-5 pb-8 text-center text-[11px] text-taupe md:text-right">
        Screens are real captures from the app. The numbers are one reader&rsquo;s data.
      </p>
    </section>
  );
}

function FloatCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute hidden rounded-2xl border border-hairline bg-card/95 px-4 py-3 shadow-[0_18px_40px_-18px_rgba(26,20,16,0.35)] backdrop-blur sm:block ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------ proof strip */

function ProofStrip() {
  const items = [
    { n: "On-device", l: "Words counted by your phone, not a server" },
    { n: "Speed + recall", l: "Both measured, then plotted against each other" },
    { n: "Any printed book", l: "Scan a page, get an honest WPM" },
    { n: "30-day trend", l: "Personal bests, weekly change, best time of day" },
  ];
  return (
    <section className="border-y border-hairline bg-card" aria-label="Highlights">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-hairline px-5 md:grid-cols-4">
        {items.map((s, i) => (
          <div
            key={s.n}
            className={`px-4 py-6 ${i >= 2 ? "border-t border-hairline md:border-t-0" : ""}`}
          >
            <p className="font-display text-base font-bold text-brand sm:text-lg">{s.n}</p>
            <p className="mt-1 text-xs leading-snug text-taupe">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- problem */

function Problem() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 md:py-28">
      <div className="reveal mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-brand">
          The problem
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-[2.6rem]">
          Reading faster is easy. Remembering it is the hard part.
        </h2>
        <p className="speakable mt-4 text-lg leading-relaxed text-ink-soft">
          Push your eyes a little harder and your words-per-minute goes up. That
          feels like progress — right up until someone asks what the chapter was
          about. Speed is only half of the equation, and it&rsquo;s the half every
          other app measures.
        </p>
      </div>

      <div className="reveal mt-12 grid gap-4 md:grid-cols-2">
        <div className="rounded-card border border-hairline bg-card p-7">
          <p className="text-xs font-bold uppercase tracking-wide text-taupe">
            What a stopwatch tells you
          </p>
          <p className="mt-4 font-display text-5xl font-bold text-taupe">383 WPM</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            A number to feel good about. It says nothing about whether any of it
            landed.
          </p>
        </div>
        <div className="rounded-card border border-brand/30 bg-brand-container/40 p-7">
          <p className="text-xs font-bold uppercase tracking-wide text-on-brand-container">
            What ReadPace tells you
          </p>
          <p className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-[2.1rem]">
            383 WPM — but you remember most at 300–325.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-on-brand-container/90">
            Same session, a completely different instruction: slow down by a
            fifth and keep almost twice as much.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- how it works */

function HowItWorks() {
  const stepIcons = [TimerIcon, ScanIcon, BrainIcon];
  return (
    <section id="how" className="border-y border-hairline bg-paper-dim/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          eyebrow="How it works"
          title="One honest loop, about 20 seconds of overhead"
          sub="No manual page counting, no guessing how long you read for. Start the timer, scan what you finished, answer a few questions."
        />

        <ol className="mt-16 space-y-20 md:space-y-24">
          {steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <li
                key={s.n}
                className={`reveal grid items-center gap-10 md:grid-cols-2 md:gap-14 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-container text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-sm font-bold text-taupe">
                      Step {s.n}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink md:text-[2rem]">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                  <p className="mt-4 inline-flex max-w-md items-start gap-2 rounded-xl border border-hairline bg-card px-3.5 py-2.5 text-[13px] leading-snug text-taupe">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {s.detail}
                  </p>
                </div>
                <div className="flex justify-center">
                  <PhoneFrame screen={s.screen} className="w-[232px] sm:w-[258px]" />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ sweet spot */

function SweetSpot() {
  const bullets = [
    {
      icon: TargetIcon,
      title: `Grouped into ${facts.sweetSpotBinWidth}-WPM bands`,
      body: "Every session you test becomes a data point of speed and recall. Bands keep a handful of sessions meaningful instead of scattering them.",
    },
    {
      icon: BrainIcon,
      title: "Peak band and drop-off",
      body: `The band where you remembered most becomes your sweet spot. The speed past which recall falls at least ${facts.sweetSpotDropoffMargin} points below that peak becomes your drop-off.`,
    },
    {
      icon: LockIcon,
      title: "Never a fabricated number",
      body: `It stays locked until you have ${facts.sweetSpotMinTestedSessions} tested sessions. Below that you see progress toward it, not an estimate dressed up as a fact.`,
    },
  ];

  return (
    <section id="sweet-spot" className="bg-night-wash text-night-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="relative flex justify-center md:order-2">
            <div
              className="absolute h-72 w-72 rounded-full bg-brand-bright/20 blur-3xl"
              aria-hidden
            />
            <PhoneFrame
              screen={screens.sweetSpot}
              tone="dark"
              className="relative w-[262px] sm:w-[288px]"
            />
          </div>

          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-bright/30 bg-brand-bright/10 px-3.5 py-1.5 text-xs font-bold text-brand-bright">
              <TargetIcon className="h-3.5 w-3.5" />
              The feature nothing else has
            </p>
            <h2
              id="sweet-spot-heading"
              className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              Your reading <span className="text-brand-bright">sweet spot</span>
            </h2>
            <p className="speakable mt-5 max-w-md text-lg leading-relaxed text-night-taupe">
              Speed-reading apps track how fast you go. Study apps test what you
              retain. ReadPace is the one that plots them{" "}
              <span className="font-semibold text-night-ink">against each other</span>
              , then names the pace where your comprehension peaks and the pace
              where reading faster starts costing you.
            </p>

            <figure className="bg-ruled mt-7 rounded-2xl border border-night-hairline bg-night-card p-6">
              <QuoteIcon className="h-5 w-5 text-brand-bright/70" aria-hidden />
              <blockquote className="mt-3 font-display text-lg font-semibold leading-snug text-night-ink">
                You remember most at 300–325 WPM (100% recall). Above 325 WPM
                your recall drops to 50%.
              </blockquote>
              <figcaption className="mt-3 text-xs text-night-taupe">
                An actual sweet-spot readout from the app
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {bullets.map((b) => (
            <div
              key={b.title}
              className="reveal rounded-card border border-night-hairline bg-night-card/70 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-bright/12 text-brand-bright">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-night-ink">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-night-taupe">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- insights */

function Insights() {
  const cards = [
    {
      screen: screens.stats,
      title: "The whole picture",
      body: `A ${facts.trendWindowDays}-day WPM curve, your personal best, your average and how this week compares with last.`,
    },
    {
      screen: screens.category,
      title: "What you read best",
      body: "Speed and recall broken down by category, so you can tell deep reading apart from slow reading.",
    },
    {
      screen: screens.productive,
      title: "When you read best",
      body: "Morning, afternoon or evening — see which one your fastest sessions actually come from.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="Insights"
        title="Statistics that tell you what to change"
        sub="Every stat screen explains how it was calculated and what to do with it. Nothing is a black box, and nothing appears before there's enough data to trust it."
      />
      <div className="mt-14 grid gap-8 sm:grid-cols-3">
        {cards.map((c) => (
          <figure key={c.title} className="reveal flex flex-col items-center text-center">
            <PhoneFrame screen={c.screen} className="w-[190px] sm:w-full sm:max-w-[220px]" />
            <figcaption className="mt-6">
              <h3 className="font-display text-lg font-bold text-ink">{c.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
                {c.body}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- features */

function Features() {
  return (
    <section id="features" className="border-y border-hairline bg-paper-dim/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          eyebrow="Everything in the app"
          title="Built for readers who want to get better"
          sub="No social feed, no streak guilt, no fake gamification. Just the measurements that make your reading measurably better."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = iconMap[f.icon as IconName];
            return (
              <div
                key={f.title}
                className="reveal rounded-card border border-hairline bg-card p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-container text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- gallery */

function Gallery() {
  return (
    <section className="py-20 md:py-24" aria-label="App screenshots">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Every screen"
          title="See the whole app before you install it"
          sub="Swipe through the real thing — no marketing renders."
        />
      </div>
      <div className="gallery-scroll mt-12 flex gap-5 overflow-x-auto px-5 pb-6 md:px-[max(1.25rem,calc((100vw-72rem)/2))]">
        {gallery.map((s) => (
          <figure key={s.src} className="w-[176px] shrink-0 sm:w-[196px]">
            <PhoneFrame screen={s} />
            <figcaption className="mt-3 text-center text-xs font-semibold text-taupe">
              {s.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ comparison */

function Comparison() {
  const Cell = ({ v }: { v: boolean | "some" }) => {
    if (v === true)
      return (
        <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
          <CheckIcon className="h-3.5 w-3.5" />
          <span className="sr-only">Yes</span>
        </span>
      );
    if (v === "some")
      return <span className="text-xs font-semibold text-taupe">Sometimes</span>;
    return (
      <span className="text-lg font-semibold text-taupe/50" aria-label="No">
        —
      </span>
    );
  };

  return (
    <section className="border-y border-hairline bg-card">
      <div className="mx-auto max-w-4xl px-5 py-20 md:py-24">
        <SectionHeading
          eyebrow="Why it's different"
          title="Speed apps, reading logs, and the gap between them"
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-separate border-spacing-0 text-left">
            <caption className="sr-only">
              Capability comparison between speed-reading apps, reading logs and ReadPace
            </caption>
            <thead>
              <tr>
                <th className="rounded-tl-2xl border border-hairline bg-paper px-5 py-4 text-xs font-bold uppercase tracking-wide text-taupe">
                  Capability
                </th>
                {comparison.columns.map((c, i) => (
                  <th
                    key={c}
                    className={`w-28 border border-l-0 border-hairline bg-paper px-3 py-4 text-center text-xs font-bold uppercase tracking-wide ${
                      i === comparison.columns.length - 1
                        ? "rounded-tr-2xl text-brand"
                        : "text-taupe"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((r, ri) => {
                const last = ri === comparison.rows.length - 1;
                return (
                  <tr key={r.label}>
                    <th
                      scope="row"
                      className={`border border-t-0 border-hairline px-5 py-4 text-sm font-semibold text-ink ${
                        last ? "rounded-bl-2xl" : ""
                      }`}
                    >
                      {r.label}
                    </th>
                    {r.values.map((v, i) => (
                      <td
                        key={i}
                        className={`border border-l-0 border-t-0 border-hairline px-3 py-4 text-center ${
                          last && i === r.values.length - 1 ? "rounded-br-2xl" : ""
                        } ${i === r.values.length - 1 ? "bg-brand-container/25" : ""}`}
                      >
                        <Cell v={v} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- quick facts */

function QuickFacts() {
  return (
    <section id="facts" className="mx-auto max-w-4xl px-5 py-20 md:py-24">
      <SectionHeading
        eyebrow="In short"
        title={`${site.name} at a glance`}
        sub="The whole product in twelve lines, for people (and answer engines) who want the facts without the pitch."
      />
      <dl className="mt-12 overflow-hidden rounded-card border border-hairline bg-card">
        {quickFacts.map((f, i) => (
          <div
            key={f.label}
            className={`grid gap-1 px-5 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6 ${
              i !== quickFacts.length - 1 ? "border-b border-hairline" : ""
            }`}
          >
            <dt className="text-xs font-bold uppercase tracking-wide text-taupe sm:pt-0.5">
              {f.label}
            </dt>
            <dd className="text-sm font-medium leading-relaxed text-ink">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* --------------------------------------------------------------- pricing */

function Pricing() {
  const plans = [
    { ...pricing.free, highlight: false },
    { ...pricing.premium, highlight: true },
  ];
  return (
    <section id="pricing" className="border-y border-hairline bg-paper-dim/40">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-24">
        <SectionHeading
          eyebrow="Pricing"
          title="Start free. Upgrade only if it earns it."
          sub={`The free plan includes exactly enough comprehension tests to unlock your sweet spot once — so you see the flagship insight on your own data before anything asks for money.`}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`reveal flex flex-col rounded-card border p-7 ${
                p.highlight
                  ? "border-brand/40 bg-card shadow-[0_24px_60px_-30px_rgba(232,115,15,0.5)]"
                  : "border-hairline bg-card"
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-ink">{p.name}</h3>
                {p.highlight ? (
                  <span className="rounded-full bg-brand-container px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-on-brand-container">
                    Unlimited
                  </span>
                ) : null}
              </div>
              <p className="mt-3 font-display text-3xl font-bold text-ink">{p.price}</p>
              <p className="mt-1 text-xs text-taupe">{p.note}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-taupe">
          Subscriptions are billed through the App Store or Google Play and can be
          cancelled there at any time.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- FAQ */

function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 md:py-24">
      <SectionHeading eyebrow="FAQ" title="Questions, answered plainly" />
      <div className="mt-10 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-hairline bg-card p-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-bold text-ink">
              <h3 className="text-base font-bold">{f.q}</h3>
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-container text-lg leading-none text-brand transition-transform group-open:rotate-45"
                aria-hidden
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- final CTA */

function FinalCTA() {
  return (
    <section id="get" className="mx-auto max-w-6xl px-5 pb-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-brand px-6 py-16 text-center md:px-16 md:py-20">
        <div
          className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10"
          aria-hidden
        />
        <div
          className="absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-black/5"
          aria-hidden
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Read faster. Remember more. Know the difference.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-white/90">
            One session tonight is enough to see your first real WPM. Five tested
            ones unlock your sweet spot.
          </p>
          <div className="mt-8 flex justify-center">
            <StoreBadges variant="onBrand" />
          </div>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/85">
            <ClockIcon className="h-4 w-4" />
            Setup takes about a minute
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- footer */

function Footer() {
  return (
    <footer className="border-t border-hairline bg-card">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Wordmark />
            <p className="mt-3 text-sm leading-relaxed text-taupe">
              {site.shortDescription}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm sm:grid-cols-3">
            <FooterCol title="Product">
              <a href="#how">How it works</a>
              <a href="#sweet-spot">Sweet spot</a>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
            </FooterCol>
            <FooterCol title="Learn">
              <a href="#facts">At a glance</a>
              <a href="#faq">FAQ</a>
              <a href="/llms.txt">llms.txt</a>
            </FooterCol>
            <FooterCol title="Company">
              <a href="/privacy">Privacy</a>
              <a href="/support">Support</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </FooterCol>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-hairline pt-6 text-xs text-taupe sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Made for people who still
            read paper.
          </p>
          <p>{facts.platforms.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-display text-xs font-bold uppercase tracking-wide text-ink">
        {title}
      </p>
      <nav
        aria-label={title}
        className="mt-3 flex flex-col gap-2 font-medium text-taupe [&>a:hover]:text-ink [&>a]:transition-colors"
      >
        {children}
      </nav>
    </div>
  );
}

/* ---------------------------------------------------------------- shared */

function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-wide text-brand">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-[2.4rem]">
        {title}
      </h2>
      {sub ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{sub}</p>
      ) : null}
    </div>
  );
}
