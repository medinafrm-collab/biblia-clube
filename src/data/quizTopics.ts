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
    title: "Quiz geral para testar seus conhecimentos",
    description:
      "Jogue uma rodada grátis com perguntas variadas, respostas comentadas e referências para continuar aprendendo.",
    introduction: [
      "O Quiz Bíblico Geral reúne perguntas sobre personagens, acontecimentos, livros e ensinamentos conhecidos das Escrituras. É uma rodada variada para quem deseja revisar o que já sabe e descobrir novos detalhes.",
      "Depois de cada resposta, você recebe uma explicação simples e a referência relacionada. Assim, cada pergunta também se torna um ponto de partida para uma leitura mais atenta.",
    ],
    highlights: [
      "Perguntas variadas do Antigo e do Novo Testamento.",
      "Correção imediata com explicações objetivas.",
      "Referências para continuar o estudo.",
    ],
  },
  {
    id: "antigo-testamento",
    label: "Antigo Testamento",
    path: "/quiz-biblico/antigo-testamento",
    eyebrow: "Desafio por tema",
    title: "Quiz sobre o Antigo Testamento",
    description:
      "Responda perguntas sobre o Antigo Testamento, seus personagens, acontecimentos e livros em uma rodada grátis.",
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
    title: "Quiz sobre Jesus e os Evangelhos",
    description:
      "Teste seus conhecimentos sobre Jesus, seus ensinamentos, discípulos e acontecimentos narrados nos Evangelhos.",
    introduction: [
      "O desafio Jesus e Evangelhos reúne perguntas sobre o nascimento, o ministério, os ensinamentos e a ressurreição de Jesus. Também aparecem discípulos e pessoas que participaram dessas narrativas.",
      "Além de indicar a alternativa correta, cada resposta traz uma explicação e uma referência nos Evangelhos. A proposta é aprender de maneira leve sem separar o jogo do contato com o texto.",
    ],
    highlights: [
      "Ensinamentos e acontecimentos do ministério de Jesus.",
      "Discípulos e pessoas presentes nos Evangelhos.",
      "Explicações acompanhadas de referências.",
    ],
  },
  {
    id: "personagens",
    label: "Personagens bíblicos",
    path: "/quiz-biblico/personagens-biblicos",
    eyebrow: "Desafio por tema",
    title: "Quiz de personagens bíblicos",
    description:
      "Descubra quanto você conhece sobre personagens e suas histórias neste desafio grátis com respostas comentadas.",
    introduction: [
      "Nesta rodada, o foco está nas pessoas que participam das grandes narrativas da Bíblia. As perguntas passam por líderes, profetas, reis, discípulos e mulheres que demonstraram coragem e fé.",
      "Reconhecer cada personagem ajuda a organizar acontecimentos, lugares e períodos da Bíblia. Ao final de cada resposta, você encontra uma explicação curta e a passagem relacionada à história.",
    ],
    highlights: [
      "Personagens do Antigo e do Novo Testamento.",
      "Histórias de coragem, fé, liderança e transformação.",
      "Contexto e referência após cada resposta.",
    ],
  },
  {
    id: "mulheres-da-biblia",
    label: "Mulheres da Bíblia",
    path: "/quiz-biblico/mulheres-da-biblia",
    eyebrow: "Desafio por tema",
    title: "Quiz sobre mulheres da Bíblia",
    description:
      "Conheça histórias de mulheres do Antigo e do Novo Testamento por meio de perguntas comentadas.",
    introduction: [
      "Este desafio reúne perguntas sobre mulheres que aparecem em diferentes momentos da narrativa bíblica. As jornadas passam por famílias, decisões, coragem, serviço, fé e participação na história do povo de Deus.",
      "Cada resposta traz uma explicação breve e uma referência para leitura. A proposta é reconhecer personagens e contextos sem transformar as histórias em respostas decoradas.",
    ],
    highlights: [
      "Mulheres do Antigo e do Novo Testamento.",
      "Perguntas sobre atitudes, relações familiares e acontecimentos.",
      "Referências para continuar a leitura com calma.",
    ],
  },
  {
    id: "parabolas-de-jesus",
    label: "Parábolas de Jesus",
    path: "/quiz-biblico/parabolas-de-jesus",
    eyebrow: "Desafio por tema",
    title: "Quiz sobre as parábolas de Jesus",
    description:
      "Revise parábolas contadas por Jesus e seus ensinamentos centrais em uma rodada com explicações.",
    introduction: [
      "As parábolas de Jesus usam cenas do cotidiano para ensinar sobre atitudes, escolhas, misericórdia e o Reino de Deus. Este tema ajuda a lembrar personagens, imagens e mensagens principais.",
      "As perguntas evitam interpretações controversas e se concentram no que o próprio texto apresenta. Ao final de cada resposta, a referência indica onde reler a parábola.",
    ],
    highlights: [
      "Parábolas sobre escolhas, perdão e misericórdia.",
      "Imagens usadas por Jesus para falar do Reino de Deus.",
      "Explicações curtas com base no texto bíblico.",
    ],
  },
  {
    id: "lugares-da-biblia",
    label: "Lugares da Bíblia",
    path: "/quiz-biblico/lugares-da-biblia",
    eyebrow: "Desafio por tema",
    title: "Quiz sobre lugares da Bíblia",
    description:
      "Relacione cidades, rios, mares, montes e desertos a acontecimentos importantes das Escrituras.",
    introduction: [
      "Muitos acontecimentos bíblicos ficam mais claros quando lembramos onde ocorreram. Este desafio conecta lugares a personagens, viagens, milagres, chamadas e momentos marcantes.",
      "As perguntas usam lugares apresentados de forma clara no texto bíblico, evitando depender de geografia moderna ou identificações discutidas por estudiosos.",
    ],
    highlights: [
      "Cidades e terras ligadas a acontecimentos bíblicos.",
      "Montes, rios, mares e desertos presentes nas narrativas.",
      "Perguntas com contexto e referências diretas.",
    ],
  },
  {
    id: "igreja-primitiva",
    label: "Igreja Primitiva",
    path: "/quiz-biblico/igreja-primitiva",
    eyebrow: "Desafio por tema",
    title: "Quiz sobre a Igreja Primitiva",
    description:
      "Acompanhe o início da igreja, Pentecostes, os primeiros discípulos e as viagens missionárias.",
    introduction: [
      "Este tema percorre principalmente o livro de Atos, desde a ascensão de Jesus e Pentecostes até a expansão da mensagem cristã por diferentes cidades.",
      "As jornadas ajudam a lembrar pessoas, decisões, viagens e acontecimentos que marcaram o nascimento da igreja e a missão de Paulo.",
    ],
    highlights: [
      "Pentecostes, comunidade cristã e primeiros desafios.",
      "Pedro, Estêvão, Barnabé, Paulo, Silas e Timóteo.",
      "Viagens missionárias e referências do livro de Atos.",
    ],
  },
];

export function getQuizTopic(id: QuizTopicId) {
  return quizTopics.find((topic) => topic.id === id);
}

export function getQuizTopicBySlug(slug: string) {
  return quizTopics.find((topic) => topic.path.endsWith(`/${slug}`));
}
