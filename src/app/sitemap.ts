import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sobre",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ];

  return routes.map((route) => ({
    url: `https://bibliaclube.com.br${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
