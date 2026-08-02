import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/quiz-biblico",
    "/quiz-biblico/antigo-testamento",
    "/quiz-biblico/jesus-e-evangelhos",
    "/quiz-biblico/personagens-biblicos",
    "/modo-grupo",
    "/ligue-os-pares",
    "/complete-a-frase",
    "/jogo-da-memoria-biblico",
    "/dinamicas-para-celulas",
    "/guias",
    "/guias/como-usar-quiz-biblico-em-celulas",
    "/guias/dinamicas-biblicas-para-jovens",
    "/guias/jogos-biblicos-para-grupos",
    "/guias/quiz-biblico-para-casais",
    "/guias/como-conduzir-uma-celula-participativa",
    "/guias/ideias-para-estudo-biblico-em-grupo",
    "/sobre",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ];

  return routes.map((route) => ({
    url: `https://www.bibliaclube.com.br${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route.startsWith("/quiz-biblico")
        ? "weekly"
        : "monthly",
    priority: route === "" ? 1 : route.startsWith("/quiz-biblico") ? 0.8 : 0.6,
  }));
}
