import { cellDynamics } from "./cellDynamics";
import { editorialArticles } from "./editorialContent";
import { printableResources } from "./printableResources";
import { quizTopics } from "./quizTopics";

export type LibraryItem = {
  title: string;
  description: string;
  href: string;
  type: "Artigo" | "Dinâmica" | "Ferramenta" | "Guia" | "Jogo" | "Material" | "Quiz";
  audience: string;
  topic: string;
  meta: string;
};

const guides: LibraryItem[] = [
  {
    title: "Como usar quiz bíblico em células",
    description: "Transforme perguntas em conversa, participação e aprendizado.",
    href: "/guias/como-usar-quiz-biblico-em-celulas",
    type: "Guia",
    audience: "Grupos",
    topic: "Condução",
    meta: "Guia prático",
  },
  {
    title: "Dinâmicas bíblicas para jovens",
    description: "Conduza encontros participativos sem constranger o grupo.",
    href: "/guias/dinamicas-biblicas-para-jovens",
    type: "Guia",
    audience: "Jovens",
    topic: "Juventude",
    meta: "Guia prático",
  },
  {
    title: "Jogos bíblicos para grupos",
    description: "Escolha o formato certo para cada momento do encontro.",
    href: "/guias/jogos-biblicos-para-grupos",
    type: "Guia",
    audience: "Grupos",
    topic: "Jogos",
    meta: "Guia prático",
  },
  {
    title: "Quiz bíblico para casais",
    description: "Use perguntas para abrir conversas com cuidado e escuta.",
    href: "/guias/quiz-biblico-para-casais",
    type: "Guia",
    audience: "Casais",
    topic: "Relacionamentos",
    meta: "Guia prático",
  },
  {
    title: "Como conduzir uma célula participativa",
    description: "Crie encontros com leitura bíblica, participação e oração aplicada.",
    href: "/guias/como-conduzir-uma-celula-participativa",
    type: "Guia",
    audience: "Líderes",
    topic: "Condução",
    meta: "Guia prático",
  },
  {
    title: "Ideias para estudo bíblico em grupo",
    description: "Organize estudos com perguntas, referências, jogos e conversa guiada.",
    href: "/guias/ideias-para-estudo-biblico-em-grupo",
    type: "Guia",
    audience: "Grupos",
    topic: "Estudo bíblico",
    meta: "Guia prático",
  },
];

const games: LibraryItem[] = [
  {
    title: "Monte seu encontro",
    description: "Combine público, duração e objetivo em um roteiro com dinâmica, jogo, referências e perguntas.",
    href: "/monte-seu-encontro",
    type: "Ferramenta",
    audience: "Líderes e famílias",
    topic: "Planejamento",
    meta: "Planejador interativo",
  },
  {
    title: "Modo Grupo",
    description: "Organize equipes, temas, rodadas e pontuação em uma partida coletiva.",
    href: "/modo-grupo",
    type: "Jogo",
    audience: "Grupos",
    topic: "Quiz",
    meta: "Jogar online",
  },
  {
    title: "Ligue os Pares",
    description: "Conecte personagens, lugares, livros, acontecimentos e significados.",
    href: "/ligue-os-pares",
    type: "Jogo",
    audience: "Todos",
    topic: "Associação",
    meta: "Jogar online",
  },
  {
    title: "Complete a Frase",
    description: "Reconheça a continuação de passagens e confira o texto completo.",
    href: "/complete-a-frase",
    type: "Jogo",
    audience: "Todos",
    topic: "Passagens",
    meta: "Jogar online",
  },
  {
    title: "Jogo da Memória Bíblico",
    description: "Encontre pares de personagens, símbolos, versos e referências.",
    href: "/jogo-da-memoria-biblico",
    type: "Jogo",
    audience: "Famílias",
    topic: "Memória",
    meta: "Jogar online",
  },
];

export const libraryItems: LibraryItem[] = [
  ...editorialArticles.map((article) => ({
    title: article.title,
    description: article.summary,
    href: `/biblioteca/${article.slug}`,
    type: "Artigo" as const,
    audience: article.audience,
    topic: article.category,
    meta: article.readTime,
  })),
  ...guides,
  ...cellDynamics.map((dynamic) => ({
    title: dynamic.title,
    description: dynamic.summary,
    href: `/dinamicas-para-celulas/${dynamic.id}`,
    type: "Dinâmica" as const,
    audience: dynamic.audienceLabel,
    topic: dynamic.category,
    meta: dynamic.duration,
  })),
  ...quizTopics.map((topic) => ({
    title: topic.title,
    description: topic.description,
    href: topic.path,
    type: "Quiz" as const,
    audience: "Todos",
    topic: topic.label,
    meta: "Rodada online",
  })),
  ...games,
  ...printableResources.map((resource) => ({
    title: resource.title,
    description: resource.summary,
    href: `/materiais/${resource.slug}`,
    type: "Material" as const,
    audience: resource.audience,
    topic: "Para imprimir",
    meta: resource.pages,
  })),
];
