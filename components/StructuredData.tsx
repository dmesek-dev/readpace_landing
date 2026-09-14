import { facts, faqs, features, site, stores, screens } from "@/content/site";

/** Homepage entities only; resource pages publish their own page and breadcrumb data. */
export function StructuredData() {
  const installUrl = stores.appStore ?? stores.googlePlay;
  const graph = [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      email: site.email,
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
      "@type": "MobileApplication",
      "@id": `${site.url}/#app`,
      name: site.name,
      applicationCategory: "EducationalApplication",
      operatingSystem: facts.platforms.join(", "),
      description:
        "A reading speed and comprehension tracker for physical books. Time a session, scan the pages to count words on-device, and compare WPM with optional quiz scores.",
      url: site.url,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#organization` },
      ...(installUrl
        ? {
            installUrl,
            offers: {
              "@type": "Offer",
              name: "Free plan",
              price: "0",
              priceCurrency: "EUR",
              description: `${facts.freeBooks} book and ${facts.freeTests} comprehension tests, plus unlimited timed sessions and word counting.`,
            },
          }
        : {}),
      screenshot: [screens.home, screens.stats].map((screen) => ({
        "@type": "ImageObject",
        url: `${site.url}${screen.src}`,
        caption: screen.alt,
      })),
      featureList: features.map(
        (feature) => `${feature.title}: ${feature.body}`,
      ),
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: site.title,
      description: site.description,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#app` },
      dateModified: site.lastUpdated,
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      isPartOf: { "@id": `${site.url}/#webpage` },
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
