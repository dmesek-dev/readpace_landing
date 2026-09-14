import { pageMetadata } from "@/lib/seo";

import { A, Doc, H, List, P } from "@/components/Doc";
import { facts, site } from "@/content/site";

export const metadata = pageMetadata(
  "Support",
  "Get help with ReadPace page scans, reading statistics, comprehension quizzes, subscriptions and your account.",
  "/support",
);

export default function SupportPage() {
  return (
    <Doc title="Support" updated="2026-09-07">
      <P>
        Something not behaving? Most questions have a short answer below. If
        yours isn&rsquo;t here, email{" "}
        <A href={`mailto:${site.email}`}>{site.email}</A> — a person reads it.
      </P>

      <H>The scan found no words</H>
      <P>
        The recognizer needs a readable page: even light, the whole text block
        in frame, and the phone held roughly parallel to the paper. Very
        stylised type, heavy shadows and non-Latin scripts are the usual
        culprits. Rescan rather than accept a bad count — a wrong word count
        quietly poisons your WPM.
      </P>

      <H>My statistics are still locked</H>
      <P>
        Statistics appear after {facts.statsUnlockSessions} qualifying sessions.
        A session qualifies when it ran for at least {facts.minReliableSeconds}{" "}
        seconds and finished with a scan — anything shorter is too noisy to
        average, so it is left out on purpose.
      </P>

      <H>My sweet spot hasn&rsquo;t appeared</H>
      <P>
        The reading sweet spot needs {facts.sweetSpotMinTestedSessions} sessions
        that ended with a comprehension test, because it is computed from your
        own recall scores rather than an average of other people. Until then the
        card shows how many tests are left to unlock it.
      </P>

      <H>Comprehension tests aren&rsquo;t offered</H>
      <List
        items={[
          <>
            Check the <em>Comprehension test</em> toggle in the <em>You</em> tab
            — it is opt-in.
          </>,
          <>
            Quizzes need a connection: the questions are written from the text
            you scanned, so an offline session saves without a score.
          </>,
          <>
            A very thin scan can&rsquo;t support questions. Scan more of what
            you read and the quiz will have material to work from.
          </>,
          <>
            On the free plan you have {facts.freeTests} tests in total — enough
            to unlock your sweet spot once.
          </>,
        ]}
      />

      <H>Subscriptions, refunds and restoring</H>
      <P>
        Premium is billed by Apple or Google, so cancellations and refunds are
        handled in your App Store or Google Play account. Reinstalled the app?
        Sign in with the same account and your plan comes back with it.
      </P>

      <H>Delete my account or export my data</H>
      <P>
        Email {""}
        <A href={`mailto:${site.email}`}>{site.email}</A> from your account
        address. See the <A href="/privacy">privacy page</A> for what is stored
        in the first place.
      </P>

      <H>Report a bug or ask for a feature</H>
      <P>
        Email is the fastest route. Include your phone model, the app version
        from the <em>You</em> tab, and what you expected to happen — it usually
        turns a week of guessing into an afternoon of fixing.
      </P>
    </Doc>
  );
}
