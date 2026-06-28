import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/quiz-biblico",
    "/quiz-biblico/antigo-testamento",
    "/quiz-biblico/jesus-e-evangelhos",
    "/quiz-biblico/personagens-biblicos",
    "/modo-grupo",
    "/sobre",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ];

  return routes.map((route) => ({
    url: `https://bibliaclube.com.br${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route.startsWith("/quiz-biblico")
        ? "weekly"
        : "monthly",
    priority: route === "" ? 1 : route.startsWith("/quiz-biblico") ? 0.8 : 0.6,
  }));
}
