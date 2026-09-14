import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  article = false,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: article ? "article" : "website",
      title: `${title} · ${site.name}`,
      description,
      url: `${site.url}${path}`,
      siteName: site.name,
      locale: site.locale,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "ReadPace reading speed and comprehension tracker",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${site.name}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}
