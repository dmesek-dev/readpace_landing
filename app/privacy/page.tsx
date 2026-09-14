import { pageMetadata } from "@/lib/seo";

import { A, Doc, H, List, P } from "@/components/Doc";
import { site } from "@/content/site";

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
    <Doc title="Privacy" updated="2026-09-07">
      <P>
        ReadPace is a reading tracker. It needs your camera to count words and
        an account to keep your history — nothing else. This page describes
        exactly what that means in practice.
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

      <H>Subscriptions</H>
      <P>
        Premium is billed by Apple or Google, and subscription status is managed
        through a subscription provider. We never see or store your card
        details.
      </P>

      <H>Your data, your call</H>
      <P>
        Want a copy of your data, or want all of it deleted? Email{" "}
        <A href={`mailto:${site.email}`}>{site.email}</A> from the address on
        your account and we will action it. Deleting your account removes your
        sessions, library and profile.
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
