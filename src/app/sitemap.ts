import type { MetadataRoute } from "next";
import { cellDynamics } from "@/data/cellDynamics";
import { editorialArticles } from "@/data/editorialContent";
import { printableResources } from "@/data/printableResources";
import { quizTopics } from "@/data/quizTopics";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/modo-grupo",
    "/desafios-por-tema",
    "/ligue-os-pares",
    "/complete-a-frase",
    "/quem-sou-eu",
    "/jogo-da-memoria-biblico",
    "/dinamicas-para-celulas",
    "/biblioteca",
    "/materiais",
    "/monte-seu-encontro",
    "/guias",
    "/guias/como-usar-quiz-biblico-em-celulas",
    "/guias/dinamicas-biblicas-para-jovens",
    "/guias/jogos-biblicos-para-grupos",
    "/guias/quiz-biblico-para-casais",
    "/guias/como-conduzir-uma-celula-participativa",
    "/guias/ideias-para-estudo-biblico-em-grupo",
    "/sobre",
    "/como-produzimos-conteudos",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ];
  const routes = [
    ...staticRoutes,
    ...quizTopics.map((topic) => topic.path),
    ...cellDynamics.map(
      (dynamic) => `/dinamicas-para-celulas/${dynamic.id}`,
    ),
    ...editorialArticles.map((article) => `/biblioteca/${article.slug}`),
    ...printableResources.map((resource) => `/materiais/${resource.slug}`),
  ];

  return routes.map((route) => ({
    url: `https://www.bibliaclube.com.br${route}`,
    changeFrequency:
      route === "" ||
      route.startsWith("/quiz-biblico") ||
      route.startsWith("/dinamicas-para-celulas") ||
      route.startsWith("/biblioteca")
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1
        : route.startsWith("/quiz-biblico")
          ? 0.8
          : route.startsWith("/dinamicas-para-celulas")
            ? 0.7
            : route.startsWith("/biblioteca")
              ? 0.75
            : 0.6,
  }));
}
