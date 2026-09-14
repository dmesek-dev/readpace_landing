import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// A wildcard permits search and AI crawlers. No special bot list is needed.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
