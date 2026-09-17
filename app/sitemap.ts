import type { MetadataRoute } from "next";
import { legal, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: site.lastUpdated },
    ...["reading-speed-test", "wpm-calculator", "average-reading-speed"].map(
      (path) => ({ url: `${site.url}/${path}`, lastModified: "2026-09-14" }),
    ),
    { url: `${site.url}/privacy`, lastModified: legal.updated },
    { url: `${site.url}/terms`, lastModified: legal.updated },
    { url: `${site.url}/support`, lastModified: "2026-09-07" },
  ];
}
