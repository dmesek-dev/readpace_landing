import { facts, faqs, features, site, steps, stores, screens } from "@/content/site";

/**
 * One JSON-LD `@graph` for the whole page.
 *
 * Written for both classic rich results (FAQ, app, breadcrumb) and for answer
 * engines: every entity is `@id`-addressable and cross-linked, and the
 * `DefinedTermSet` spells out the vocabulary ("reading sweet spot", "WPM") so a
 * model summarising the page has an unambiguous definition to quote.
 *
 * Deliberately absent: `aggregateRating`. There are no real ratings yet and
 * inventing them would be both a policy violation and a lie.
 */
export function StructuredData() {
  const installUrl = stores.appStore ?? stores.googlePlay ?? site.url;

  const graph = [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/icon.svg`,
        caption: `${site.name} logo`,
      },
      email: site.email,
      description: site.description,
      sameAs: [] as string[],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.shortDescription,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": ["SoftwareApplication", "MobileApplication"],
      "@id": `${site.url}/#app`,
      name: site.name,
      alternateName: "ReadPace — reading speed & comprehension tracker",
      applicationCategory: "EducationalApplication",
      applicationSubCategory: "Reading tracker",
      operatingSystem: facts.platforms.join(", "),
      description: site.description,
      url: site.url,
      installUrl,
      downloadUrl: installUrl,
      softwareVersion: "1.0.0",
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#organization` },
      screenshot: [screens.home, screens.sweetSpot, screens.stats, screens.book].map(
        (s) => ({
          "@type": "ImageObject",
          url: `${site.url}${s.src}`,
          caption: s.alt,
        }),
      ),
      featureList: features.map((f) => `${f.title}: ${f.body}`),
      permissions: "Camera (to count the words on a scanned page, on-device)",
      offers: [
        {
          "@type": "Offer",
          "@id": `${site.url}/#offer-free`,
          name: "Free plan",
          price: "0",
          priceCurrency: "EUR",
          description: `Unlimited timed sessions, on-device word counting and full statistics, with ${facts.freeBooks} book and ${facts.freeTests} comprehension tests.`,
          category: "free",
        },
        {
          "@type": "Offer",
          "@id": `${site.url}/#offer-premium`,
          name: "Premium subscription",
          description:
            "Unlimited books and unlimited comprehension tests, billed monthly or yearly. Prices are shown in the app in your local currency.",
          category: "subscription",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: site.title,
      description: site.description,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#app` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${site.url}${screens.home.src}`,
        caption: screens.home.alt,
      },
      dateModified: site.lastUpdated,
      inLanguage: "en",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#hero-heading", "#sweet-spot-heading", ".speakable"],
      },
      breadcrumb: { "@id": `${site.url}/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${site.url}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      ],
    },
    {
      "@type": "HowTo",
      "@id": `${site.url}/#howto`,
      name: "How to measure your reading speed and comprehension with ReadPace",
      description:
        "The ReadPace loop: time a reading session, scan the pages you read so the words are counted on-device, then take a short quiz so speed can be compared with recall.",
      totalTime: "PT20M",
      tool: [
        { "@type": "HowToTool", name: "A physical book" },
        { "@type": "HowToTool", name: "An iPhone or Android phone with a camera" },
      ],
      step: steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title,
        text: `${s.body} ${s.detail}`,
        url: `${site.url}/#how`,
        image: `${site.url}${s.screen.src}`,
      })),
    },
    {
      "@type": "DefinedTermSet",
      "@id": `${site.url}/#glossary`,
      name: "ReadPace reading vocabulary",
      hasDefinedTerm: [
        {
          "@type": "DefinedTerm",
          "@id": `${site.url}/#term-sweet-spot`,
          name: "Reading sweet spot",
          description: `The reading-speed band in which a reader's comprehension peaks. ReadPace groups a reader's tested sessions into ${facts.sweetSpotBinWidth}-WPM bands, averages the recall score in each band, and reports the peak band plus the drop-off speed past which recall falls at least ${facts.sweetSpotDropoffMargin} percentage points below that peak. It requires ${facts.sweetSpotMinTestedSessions} tested sessions.`,
          inDefinedTermSet: { "@id": `${site.url}/#glossary` },
        },
        {
          "@type": "DefinedTerm",
          "@id": `${site.url}/#term-wpm`,
          name: "WPM (words per minute)",
          description:
            "Words read divided by minutes read. In ReadPace the minutes come from the session timer and the words from on-device text recognition of the scanned pages.",
          inDefinedTermSet: { "@id": `${site.url}/#glossary` },
        },
        {
          "@type": "DefinedTerm",
          "@id": `${site.url}/#term-recall`,
          name: "Recall score",
          description:
            "The percentage of comprehension-quiz questions answered correctly after a reading session, used as the comprehension half of the speed/recall trade-off.",
          inDefinedTermSet: { "@id": `${site.url}/#glossary` },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const json = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      // Content is fully static and authored in this repo — no user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
