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
    "/quem-sou-eu",
    "/ligue-os-pares",
    "/biblioteca/como-transformar-respostas-erradas-em-aprendizado",
  ],
  "mulheres-da-biblia": [
    "/quem-sou-eu",
    "/jogo-da-memoria-biblico",
    "/ligue-os-pares",
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
  topicId: QuizTopicId,
): QuizFaq[] {
  if (topicId === "geral") {
    return [
      {
        question: "Quantas perguntas há no quiz geral?",
        answer: `O tema reúne ${questionCount} perguntas em ${journeyCount} jornadas. Escolha uma jornada por vez; as perguntas de exemplo desta página não são uma jornada adicional.`,
      },
      {
        question: "Por que algumas respostas devem ser conferidas no índice da Bíblia?",
        answer: "Perguntas sobre primeiro livro, último livro ou posição de uma carta tratam da organização da edição. Confira essas respostas no índice. A passagem indicada permite conhecer o conteúdo do livro, mas não prova sua posição nem a ordem em que os livros foram escritos.",
      },
      {
        question: "Qual é a diferença entre um livro, um conjunto de livros e uma divisão da Bíblia?",
        answer: "Atos é um livro; Evangelhos é o conjunto de Mateus, Marcos, Lucas e João; Novo Testamento é a divisão em que esses livros aparecem. Nas alternativas, observe qual dessas informações o enunciado pede. Dizer que Atos está no Novo Testamento não o transforma em um dos quatro Evangelhos.",
      },
    ];
  }
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
