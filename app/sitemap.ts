import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: site.lastUpdated },
    ...["reading-speed-test", "wpm-calculator", "average-reading-speed"].map(
      (path) => ({ url: `${site.url}/${path}`, lastModified: "2026-09-14" }),
    ),
    ...["privacy", "support"].map((path) => ({
      url: `${site.url}/${path}`,
      lastModified: "2026-09-07",
    })),
  ];
}
