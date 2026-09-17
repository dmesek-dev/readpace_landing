import { pageMetadata } from "@/lib/seo";

import { A, Doc, H, List, P } from "@/components/Doc";
import { facts, legal, site } from "@/content/site";

export const metadata = pageMetadata(
  "Terms of Service",
  "The agreement covering ReadPace accounts, the free plan and Premium subscriptions billed through the App Store and Google Play.",
  "/terms",
);

/**
 * Terms of service for the app and this website.
 *
 * Written for the shape the product actually has: an EU individual trader,
 * subscriptions sold as in-app purchases (so Apple and Google are the
 * merchants of record), and an optional AI feature whose output is not
 * guaranteed. Plan limits are read from `facts` so they can never drift from
 * the pricing section. Have a lawyer read it before the store listings go
 * live — it is written to be accurate and fair, not to be bulletproof.
 */
export default function TermsPage() {
  return (
    <Doc title="Terms of Service" updated={legal.updated}>
      <P>
        These terms are the agreement between you and {legal.operator}, an
        individual trader established in {legal.country} (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;), covering the ReadPace mobile app, any ReadPace
        account and this website. By creating an account or using the app you
        accept them. If you don&rsquo;t, don&rsquo;t use ReadPace.
      </P>
      <P>
        Contact: <A href={`mailto:${site.email}`}>{site.email}</A>
        <br />
        Address: {legal.address}
      </P>

      <H>What ReadPace is — and what it isn&rsquo;t</H>
      <P>
        ReadPace times your reading of physical books, counts the words on the
        pages you scan, and reports a words-per-minute figure alongside an
        optional comprehension score. Every number it shows describes the
        sessions you recorded.
      </P>
      <P>
        It is not a validated assessment of reading ability, intelligence or
        cognitive health, and it is not educational, medical or psychological
        advice. Your &ldquo;reading sweet spot&rdquo; is a summary of your own
        recorded recall scores, not a diagnosis or a promise about future
        performance. We don&rsquo;t promise ReadPace will make you read faster
        or remember more — please don&rsquo;t rely on it for anything where
        being wrong matters.
      </P>

      <H>Your account</H>
      <List
        items={[
          "You must be at least 13 years old to hold an account. If your country sets a higher age for consenting to online services on your own, you must meet that age instead.",
          "Sign in with email, Apple or Google. Keep your credentials to yourself — anything done through your account is treated as done by you.",
          "The details you give us should be accurate, and the account is yours personally rather than something to share or sell.",
          "Tell us promptly at the address above if you think someone else has got into your account.",
        ]}
      />

      <H>Using it fairly</H>
      <P>
        Use ReadPace for your own reading. Don&rsquo;t break the law with it,
        don&rsquo;t scan material you have no right to photograph, and
        don&rsquo;t try to reverse-engineer, scrape, overload or automate
        against the app or its backend. Don&rsquo;t attempt to get around plan
        limits, and don&rsquo;t use the comprehension feature to generate
        content that infringes someone else&rsquo;s rights. Scanning a page of a
        book you own for your own word count is ordinary personal use;
        reproducing or distributing that text is not something these terms give
        you permission to do.
      </P>

      <H>The free plan</H>
      <P>
        The free plan includes unlimited timed sessions, on-device word
        counting, your full statistics, {facts.freeBooks} book in your library
        and {facts.freeTests} comprehension tests in total — deliberately the
        exact number needed to unlock your reading sweet spot once. No card, no
        trial countdown. We may adjust what the free plan includes for new
        signups, and if we materially reduce it for existing free accounts we
        will say so in the app first.
      </P>

      <H>Premium subscriptions</H>
      <P>
        Premium removes the book and comprehension-test limits and is sold as an
        auto-renewing subscription, monthly or yearly. Prices are shown in the
        app in your own currency before you confirm, including any applicable
        tax.
      </P>
      <List
        items={[
          "Subscriptions are purchased as in-app purchases. Apple (App Store) or Google (Google Play) takes the payment and is the merchant of record — we never see or store your card details.",
          "Your subscription renews automatically for the same period at the then-current price unless you cancel at least 24 hours before the current period ends. The renewal is charged within the 24 hours before the new period starts.",
          "Manage or cancel any time in your App Store or Google Play account settings. Cancelling stops the next renewal; Premium stays active until the end of the period you already paid for.",
          "Deleting the app does not cancel a subscription, and neither does deleting your ReadPace account — cancel through the store as well.",
          "Reinstalled, or moved to a new phone? Sign in with the same account, or use the restore-purchases option, and your plan follows you within the same store account.",
          "A subscription bought on the App Store cannot be transferred to Google Play, or the other way round — that is a limitation of the stores, not a choice of ours.",
        ]}
      />
      <P>
        If we change the price of an ongoing subscription, you will be told in
        advance through the store and the new price only applies from a renewal
        you can decline by cancelling first.
      </P>

      <H>Refunds and your right to withdraw</H>
      <P>
        Because Apple and Google take the payment, refunds are requested from
        them — through the App Store or Google Play support flow — and are
        granted under their policies. We can&rsquo;t issue a refund for a
        purchase we never received the money for, but if something on our side
        broke, write to us and we will back your case up.
      </P>
      <P>
        If you are a consumer in the EU or EEA you normally have 14 days to
        withdraw from a distance contract. Premium gives you immediate access to
        digital content, and by starting the subscription you ask for that
        access to begin at once and acknowledge that you lose the withdrawal
        right once the service has been fully provided. Nothing here removes the
        statutory rights you have if the service turns out to be faulty or not
        as described.
      </P>

      <H>Your reading data and your content</H>
      <P>
        Your books, sessions, scores and preferences are yours. You grant us
        only the permission we need to run the service — to store, back up and
        display that data to you across your devices, and to process it into the
        statistics the app shows you. We do not sell it, and we do not use your
        library or your quiz answers to advertise to you. What we collect and
        why is set out on the <A href="/privacy">privacy page</A>, which forms
        part of this agreement.
      </P>
      <P>
        You can ask for an export or a deletion at any time by emailing us from
        your account address.
      </P>

      <H>The AI comprehension feature</H>
      <P>
        Comprehension tests are off until you switch them on. When one runs, the
        text recognised from the pages you scanned is sent to a third-party AI
        service, which writes multiple-choice questions about it. Generated
        questions and answers can be wrong, odd or unfair — treat a score as a
        rough signal about your own reading, not a fact. If a quiz misfires,
        tell us and we will look at it.
      </P>

      <H>Availability and changes</H>
      <P>
        We aim to keep ReadPace running but can&rsquo;t promise it will be
        uninterrupted or error-free: phones, stores, networks and third-party
        services all fail sometimes. Timing and word counting work offline;
        syncing and comprehension quizzes need a connection. We may add, change
        or remove features, and if a change materially reduces what a paid
        subscription gives you, you can cancel and — where the law requires it —
        get a proportionate refund for the unused part of the period.
      </P>
      <P>
        We may suspend or close an account that is being used to break these
        terms or the law, or that puts the service or other people at risk.
        Unless the situation is serious or urgent we will tell you why first and
        give you a chance to put it right. If we close your account without good
        reason, we will refund the unused part of any period you have paid for.
      </P>

      <H>Ending it</H>
      <P>
        You can stop using ReadPace whenever you like and delete your account
        from the app or by emailing us — remember to cancel the subscription in
        the store too. Deleting the account removes your sessions, library and
        profile as described on the privacy page.
      </P>

      <H>Our intellectual property</H>
      <P>
        The ReadPace app, this website, the name and the design are ours. These
        terms give you a personal, non-exclusive, non-transferable, revocable
        licence to use the app on devices you own or control, for as long as you
        comply with them. Nothing else is transferred. The free reading test,
        calculator and guides on this site are ours too — read them, link to
        them, but don&rsquo;t republish them as your own.
      </P>

      <H>App Store and Google Play</H>
      <P>
        If you installed ReadPace from the App Store, this agreement is between
        you and us, not Apple. Apple has no obligation to provide support for
        the app and is not responsible for it or for any claim about it —
        including product liability, a failure to meet legal requirements, or
        third-party intellectual-property claims. Apple and its subsidiaries are
        third-party beneficiaries of these terms and may enforce them against
        you. You confirm you are not located in a country subject to a US
        embargo or on a prohibited-parties list. Equivalent points apply to
        Google for installs from Google Play, and your use of either store is
        also governed by that store&rsquo;s own terms.
      </P>

      <H>Liability</H>
      <P>
        ReadPace is provided as it is. To the extent the law allows, we exclude
        implied warranties and are not liable for indirect or consequential
        loss, lost data you could have exported, or anything a reasonable person
        would not expect to follow from a reading tracker misbehaving. Where we
        are liable, our total liability is limited to what you paid us for
        ReadPace in the 12 months before the claim.
      </P>
      <P>
        None of that limits liability for death or personal injury caused by our
        negligence, for fraud, or for anything else the law does not permit us
        to limit — and if you are a consumer, your mandatory statutory rights
        stand, whatever this section says.
      </P>

      <H>Law and disputes</H>
      <P>
        These terms are governed by {legal.governingLaw}. If you are a consumer,
        you keep the protection of the mandatory rules of the country you live
        in, and you can bring a claim in the courts there. We would much rather
        sort a problem out by email first — write to{" "}
        <A href={`mailto:${site.email}`}>{site.email}</A> and you will get a
        reply from a person. EU consumers can also take a complaint to the
        consumer-protection authority or the alternative dispute-resolution body
        for their country.
      </P>

      <H>Changes to these terms</H>
      <P>
        We may update these terms — for new features, new payment rules, or a
        change in the law. The date at the top changes with them, and for
        changes that materially affect subscribers we will give notice in the
        app or by email before they take effect. Continuing to use ReadPace
        after that means you accept the new version; if you don&rsquo;t, cancel
        and stop using it. If any part of these terms turns out to be
        unenforceable, the rest stays in force.
      </P>
    </Doc>
  );
}
