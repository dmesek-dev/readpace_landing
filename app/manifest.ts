import type { MetadataRoute } from "next";

import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.shortDescription,
    start_url: "/",
    display: "browser",
    background_color: "#f5f2ed",
    theme_color: "#e8730f",
    categories: ["education", "productivity", "books"],
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any", purpose: "any" },
    ],
  };
}
