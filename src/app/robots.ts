import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://bibliaclube.com.br",
    sitemap: "https://bibliaclube.com.br/sitemap.xml",
  };
}
