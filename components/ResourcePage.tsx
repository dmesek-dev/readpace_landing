import type { ReactNode } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { site } from "@/content/site";

export function ResourcePage({
  title,
  description,
  path,
  label,
  children,
  article = false,
}: {
  title: string;
  description: string;
  path: string;
  label: string;
  children: ReactNode;
  article?: boolean;
}) {
  const url = `${site.url}${path}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: title,
        description,
        url,
        inLanguage: "en",
        isPartOf: { "@id": `${site.url}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        ...(article ? { mainEntity: { "@id": `${url}#article` } } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "ReadPace",
            item: site.url,
          },
          { "@type": "ListItem", position: 2, name: label, item: url },
        ],
      },
      ...(article
        ? [
            {
              "@type": "Article",
              "@id": `${url}#article`,
              headline: title,
              description,
              mainEntityOfPage: { "@id": `${url}#webpage` },
              author: {
                "@type": "Organization",
                name: "ReadPace",
                url: site.url,
              },
              publisher: { "@id": `${site.url}/#organization` },
              datePublished: "2026-09-14",
              dateModified: "2026-09-14",
              inLanguage: "en",
              image: `${site.url}/opengraph-image`,
              citation: [
                "https://doi.org/10.1016/j.jml.2019.104047",
                "https://doi.org/10.1177/1529100615623267",
              ],
            },
          ]
        : []),
    ],
  };
  return (
    <>
      <SiteHeader />
      <main id="main" className="shell">
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <a href="/">ReadPace</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{label}</span>
        </nav>
        <div className="tool-intro">
          <p className="eyebrow">THE READER’S NOTEBOOK</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {article && (
          <p className="article-byline">
            By ReadPace · Updated September 14, 2026 · Sources linked below
          </p>
        )}
        {children}
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
