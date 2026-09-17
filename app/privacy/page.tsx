import { pageMetadata } from "@/lib/seo";

import { A, Doc, H, List, P } from "@/components/Doc";
import { legal, site } from "@/content/site";

export const metadata = pageMetadata(
  "Privacy",
  "How ReadPace handles page photos, reading history and optional AI comprehension quizzes.",
  "/privacy",
);

/**
 * Plain-language privacy page.
 *
 * Every statement here is traceable to the app's implementation — on-device
 * ML Kit recognition, Supabase-backed account storage, the opt-out analytics
 * toggle, and the optional OpenAI call behind comprehension quizzes. It is a
 * factual description, not a legal document: have a lawyer review it before
 * the store listing goes live.
 */
export default function PrivacyPage() {
  return (
    <Doc title="Privacy" updated={legal.updated}>
      <P>
        ReadPace is a reading tracker. It needs your camera to count words and
        an account to keep your history — nothing else. This page describes
        exactly what that means in practice.
      </P>
      <P>
        The controller of that data is {legal.operator}, an individual trader in{" "}
        {legal.country}, reachable at{" "}
        <A href={`mailto:${site.email}`}>{site.email}</A>. It applies to the
        ReadPace app, your ReadPace account and this website, and sits alongside
        the <A href="/terms">terms of service</A>.
      </P>

      <H>Page photos never leave your phone</H>
      <P>
        When you scan a page, the image is passed to the phone&rsquo;s own
        on-device text recognizer to count the words. The photo is not uploaded,
        not stored in your library, and not used for anything other than
        producing a word count. This works with no internet connection, which is
        the simplest proof that nothing is being sent anywhere.
      </P>

      <H>What is stored against your account</H>
      <List
        items={[
          "Your account identity — the email address or the Apple/Google account you signed in with, plus the display name that provider returns.",
          "Your reading sessions — the book, the duration, the word count, the resulting WPM and, if you took a test, the recall percentage.",
          "Your library — the book titles, authors, categories and covers you add.",
          "Your preferences — WPM target, theme and whether comprehension tests are switched on.",
        ]}
      />
      <P>
        This data is stored in our hosted database with row-level security, so
        one account can only ever read its own rows. It exists so your history
        survives a lost phone and follows you to a new one.
      </P>

      <H>The optional comprehension test</H>
      <P>
        Comprehension tests are off unless you turn them on, and can be turned
        off again at any time in the <em>You</em> tab. When a test runs, the
        text recognised from the pages you just scanned is sent to an AI service
        so it can write multiple-choice questions about those pages. The
        questions and your score come back and are saved with the session; the
        page images are never part of that request. Everything else — timing,
        word counting, WPM and every statistic except recall — works with the
        feature switched off.
      </P>

      <H>Usage measurement</H>
      <P>
        The app records which screens are opened and anonymous reading stats
        such as session length and pace, so we can see which parts of ReadPace
        get used. It never records your book titles, your scanned pages or your
        quiz answers. You can switch this off with the <em>Share usage data</em>{" "}
        toggle in the <em>You</em> tab&rsquo;s Privacy section.
      </P>

      <H>This website</H>
      <P>
        readpace.org counts page views and clicks on the App Store and Google
        Play buttons, through Google Analytics, so we know whether anyone is
        finding the site. It runs without analytics or advertising cookies: no
        identifier is stored in your browser, you are not recognised on a
        return visit, and nothing is used for advertising. The free online
        reading test runs entirely in your browser — the passage you read, your
        time and your answers are never sent to us.
      </P>

      <H>Subscriptions and payments</H>
      <P>
        Premium is billed by Apple or Google as an in-app purchase, so they take
        the payment and hold your payment details — we never see or store a card
        number. What comes back to us is the subscription status attached to
        your account: which plan you are on, whether it is active, and when the
        current period ends. That is processed through a subscription-management
        provider so the app knows what to unlock, and it is the only thing we
        need in order to bill you correctly. Apple and Google handle your
        purchase under their own privacy policies, which we don&rsquo;t control.
      </P>

      <H>Why we are allowed to hold it</H>
      <P>
        Under the GDPR every piece of processing needs a legal basis. Ours are
        deliberately boring:
      </P>
      <List
        items={[
          "To perform our contract with you — your account, your library, your sessions and your subscription status. Without these there is no app to provide.",
          "With your consent — the optional comprehension test and the optional usage measurement, each behind a toggle you control and can switch off again at any time.",
          "Our legitimate interest in a working, secure service — keeping the backend up, preventing abuse, and answering your support emails.",
        ]}
      />

      <H>How long we keep it</H>
      <List
        items={[
          "Page photos: not kept at all. They are recognised on the device and discarded — nothing is uploaded, so there is nothing to retain.",
          "Your account, library and reading sessions: for as long as your account exists. Delete the account and they go with it, within 30 days across our backups.",
          "Support emails: up to 24 months, so a returning problem has some history behind it.",
          "Subscription and billing records held by us: as long as tax and accounting law requires them to be kept, which is measured in years rather than months.",
          "Usage measurement: retained by Google Analytics under its own retention window, and never joined to your account.",
        ]}
      />

      <H>Who else processes it</H>
      <P>
        We keep the list short, and everyone on it works under a data-processing
        agreement that only allows them to act on our instructions:
      </P>
      <List
        items={[
          "Supabase — the hosted database and authentication behind your account, library and sessions.",
          "An AI provider (OpenAI) — receives the recognised page text only when you have switched comprehension tests on, in order to write that quiz.",
          "Apple and Google — payments, subscription status, and app distribution.",
          "Google Analytics — anonymous, cookieless usage counts for the app and this website.",
        ]}
      />
      <P>
        We do not sell your personal data, we do not share it for advertising,
        and nothing about your library or your quiz answers is used to target
        you. If a sub-processor changes in a way that matters, this page changes
        with it.
      </P>

      <H>Where it is processed</H>
      <P>
        Some of these providers process data outside the EU/EEA, chiefly in the
        United States. Where that happens the transfer relies on the European
        Commission&rsquo;s Standard Contractual Clauses or an adequacy decision
        such as the EU–US Data Privacy Framework. You can ask us for details of
        the safeguards used for any particular provider.
      </P>

      <H>Keeping it safe</H>
      <P>
        Data is encrypted in transit, and account data sits behind row-level
        security so one account can only ever read its own rows. Access to the
        production database is limited to the people who maintain it. No system
        is perfect; if a breach ever affects your data we will notify you and
        the supervisory authority as the law requires.
      </P>

      <H>Your rights</H>
      <P>
        If you are in the EU/EEA or the UK, you have the right to access your
        data, correct it, delete it, restrict or object to processing, withdraw
        a consent you gave (which doesn&rsquo;t undo what was lawful before you
        withdrew it), and receive a portable copy. If you are in California or
        another US state with a similar law, you have equivalent rights to know,
        delete, correct and opt out — and, as above, we don&rsquo;t sell or
        share personal information for cross-context advertising, so there is
        nothing there to opt out of.
      </P>
      <P>
        Email <A href={`mailto:${site.email}`}>{site.email}</A> from the address
        on your account and we will action it, normally within 30 days and free
        of charge. Deleting your account removes your sessions, library and
        profile. Exercising any of these rights never means worse service.
      </P>

      <H>Complaints</H>
      <P>
        Tell us first — it is usually the fastest fix. If you are not satisfied,
        you can complain to the data-protection authority where you live or
        work. In {legal.country} that is the national personal data protection
        agency.
      </P>

      <H>Children</H>
      <P>
        ReadPace is not directed at children under 13 and we do not knowingly
        collect their data.
      </P>

      <H>Changes</H>
      <P>
        If this page changes in a way that affects what we collect, the date at
        the top changes with it.
      </P>
    </Doc>
  );
}
