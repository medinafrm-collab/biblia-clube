import type { QuizTopicId } from "./quizQuestions";

export type QuizFaq = {
  question: string;
  answer: string;
};

export const quizTopicRelatedPaths: Record<QuizTopicId, string[]> = {
  geral: [
    "/biblioteca/quiz-para-escola-biblica-dominical",
    "/guias/como-usar-quiz-biblico-em-celulas",
    "/modo-grupo",
  ],
  "antigo-testamento": [
    "/biblioteca/quiz-para-escola-biblica-dominical",
    "/jogo-da-memoria-biblico",
    "/modo-grupo",
  ],
  "jesus-evangelhos": [
    "/biblioteca/plano-de-quatro-encontros-em-marcos",
    "/complete-a-frase",
    "/ligue-os-pares",
  ],
  personagens: [
    "/jogo-da-memoria-biblico",
    "/ligue-os-pares",
    "/biblioteca/como-transformar-respostas-erradas-em-aprendizado",
  ],
  "mulheres-da-biblia": [
    "/biblioteca/como-incluir-pessoas-timidas-e-visitantes",
    "/guias/ideias-para-estudo-biblico-em-grupo",
    "/modo-grupo",
  ],
  "parabolas-de-jesus": [
    "/biblioteca/plano-de-quatro-encontros-em-marcos",
    "/complete-a-frase",
    "/guias/ideias-para-estudo-biblico-em-grupo",
  ],
  "lugares-da-biblia": [
    "/ligue-os-pares",
    "/jogo-da-memoria-biblico",
    "/biblioteca/jogos-biblicos-sem-impressao",
  ],
  "igreja-primitiva": [
    "/biblioteca/plano-de-leitura-de-atos-com-jogos",
    "/modo-grupo",
    "/guias/como-usar-quiz-biblico-em-celulas",
  ],
};

export function getQuizTopicFaq(
  topicLabel: string,
  questionCount: number,
  journeyCount: number,
): QuizFaq[] {
  return [
    {
      question: `Quantas perguntas há no quiz de ${topicLabel}?`,
      answer: `O tema reúne ${questionCount} perguntas distribuídas em ${journeyCount} jornadas. Cada jornada usa seu próprio conjunto, sem repetir perguntas dentro da rodada.`,
    },
    {
      question: "As respostas incluem explicação e referência bíblica?",
      answer:
        "Sim. Depois de cada resposta, o jogo apresenta uma explicação curta e a referência usada na elaboração da pergunta. Quando disponível, a passagem pode ser lida sem sair da página.",
    },
    {
      question: "Posso usar este quiz com família, classe ou pequeno grupo?",
      answer:
        "Sim. A rodada pode ser projetada em uma tela ou acompanhada pelo mesmo dispositivo. Para equipes com pontuação, o Modo Grupo oferece uma experiência própria.",
    },
    {
      question: "Como as perguntas são revisadas?",
      answer:
        "As perguntas são confrontadas com as referências indicadas e verificadas quanto a resposta única, alternativas, clareza e duplicidade. Os critérios completos estão publicados na página de transparência editorial.",
    },
  ];
}
