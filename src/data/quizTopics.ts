import type { QuizTopicId } from "./quizQuestions";

export type QuizTopic = {
  id: QuizTopicId;
  label: string;
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  introduction: string[];
  highlights: string[];
};

export const quizTopics: QuizTopic[] = [
  {
    id: "geral",
    label: "Geral",
    path: "/quiz-biblico",
    eyebrow: "Quiz bíblico grátis",
    title: "Quiz bíblico geral para testar seus conhecimentos",
    description:
      "Jogue um quiz bíblico grátis com perguntas variadas, respostas comentadas e referências para continuar aprendendo.",
    introduction: [
      "O Quiz Bíblico Geral reúne perguntas sobre personagens, acontecimentos, livros e ensinamentos conhecidos das Escrituras. É uma rodada variada para quem deseja revisar o que já sabe e descobrir novos detalhes.",
      "Depois de cada resposta, você recebe uma explicação simples e a referência bíblica relacionada. Assim, cada pergunta também se torna um ponto de partida para uma leitura mais atenta.",
    ],
    highlights: [
      "Perguntas variadas do Antigo e do Novo Testamento.",
      "Correção imediata com explicações objetivas.",
      "Referências bíblicas para continuar o estudo.",
    ],
  },
  {
    id: "antigo-testamento",
    label: "Antigo Testamento",
    path: "/quiz-biblico/antigo-testamento",
    eyebrow: "Desafio por tema",
    title: "Quiz bíblico sobre o Antigo Testamento",
    description:
      "Responda perguntas sobre o Antigo Testamento, seus personagens, acontecimentos e livros em um quiz bíblico grátis.",
    introduction: [
      "Este desafio percorre histórias e acontecimentos do Antigo Testamento, desde os primeiros livros da Bíblia até relatos de reis, profetas e pessoas que marcaram a caminhada do povo de Israel.",
      "A rodada ajuda a relacionar personagens aos seus contextos e a recordar onde cada narrativa aparece. As explicações oferecem uma visão breve, enquanto as referências indicam onde aprofundar a leitura.",
    ],
    highlights: [
      "Narrativas dos livros históricos e da Lei.",
      "Personagens como Noé, Moisés, Davi, Daniel e Ester.",
      "Referências para localizar cada acontecimento na Bíblia.",
    ],
  },
  {
    id: "jesus-evangelhos",
    label: "Jesus e Evangelhos",
    path: "/quiz-biblico/jesus-e-evangelhos",
    eyebrow: "Desafio por tema",
    title: "Quiz bíblico sobre Jesus e os Evangelhos",
    description:
      "Teste seus conhecimentos sobre Jesus, seus ensinamentos, discípulos e acontecimentos narrados nos Evangelhos.",
    introduction: [
      "O desafio Jesus e Evangelhos reúne perguntas sobre o nascimento, o ministério, os ensinamentos e a ressurreição de Jesus. Também aparecem discípulos e pessoas que participaram dessas narrativas.",
      "Além de indicar a alternativa correta, cada resposta traz uma explicação e uma referência nos Evangelhos. A proposta é aprender de maneira leve sem separar o jogo do contato com o texto bíblico.",
    ],
    highlights: [
      "Ensinamentos e acontecimentos do ministério de Jesus.",
      "Discípulos e pessoas presentes nos Evangelhos.",
      "Explicações acompanhadas de referências bíblicas.",
    ],
  },
  {
    id: "personagens",
    label: "Personagens bíblicos",
    path: "/quiz-biblico/personagens-biblicos",
    eyebrow: "Desafio por tema",
    title: "Quiz de personagens bíblicos",
    description:
      "Descubra quanto você conhece sobre personagens bíblicos e suas histórias neste desafio grátis com respostas comentadas.",
    introduction: [
      "Nesta rodada, o foco está nas pessoas que participam das grandes narrativas bíblicas. As perguntas passam por líderes, profetas, reis, discípulos e mulheres que demonstraram coragem e fé.",
      "Reconhecer cada personagem ajuda a organizar acontecimentos, lugares e períodos da Bíblia. Ao final de cada resposta, você encontra uma explicação curta e a passagem relacionada à história.",
    ],
    highlights: [
      "Personagens do Antigo e do Novo Testamento.",
      "Histórias de coragem, fé, liderança e transformação.",
      "Contexto e referência após cada resposta.",
    ],
  },
];

export function getQuizTopic(id: QuizTopicId) {
  return quizTopics.find((topic) => topic.id === id);
}

export function getQuizTopicBySlug(slug: string) {
  return quizTopics.find((topic) => topic.path.endsWith(`/${slug}`));
}
