import type { QuizTopicId } from "./quizQuestions";

export type QuizTopicContext = {
  heading: string;
  introduction: string;
  sections: {
    title: string;
    description: string;
    references: string[];
  }[];
  closingNote: string;
};

const quizTopicContexts: Record<QuizTopicId, QuizTopicContext> = {
  geral: {
    heading: "Uma visão ampla para conectar histórias e ensinamentos.",
    introduction:
      "Uma rodada geral mistura períodos, gêneros e personagens. Mais do que reconhecer nomes, vale observar em que parte da narrativa cada resposta aparece e qual é o contexto da passagem indicada.",
    sections: [
      {
        title: "Uma história em muitos livros",
        description:
          "A Bíblia reúne textos escritos em períodos e contextos diferentes. Lei, narrativas, poesia, profecia, Evangelhos e cartas contribuem de formas próprias para a leitura do conjunto.",
        references: ["Lucas 24:27", "2 Timóteo 3:16-17"],
      },
      {
        title: "Observe antes de responder",
        description:
          "Nomes parecidos, acontecimentos relacionados e frases conhecidas podem confundir. Localizar livro, personagem e momento da história ajuda a responder com mais segurança.",
        references: ["Atos 17:11"],
      },
      {
        title: "Continue depois da correção",
        description:
          "A explicação resume o fato testado, mas a referência permite ler os versículos próximos e perceber detalhes que não cabem em uma pergunta de múltipla escolha.",
        references: ["Salmos 119:105"],
      },
    ],
    closingNote:
      "Use a rodada como diagnóstico: os temas que gerarem mais dúvida podem orientar a próxima leitura ou conversa em grupo.",
  },
  "antigo-testamento": {
    heading: "Da criação ao retorno do exílio, uma história de alianças.",
    introduction:
      "O Antigo Testamento acompanha a formação do povo de Israel, suas leis, sua vida na terra, a monarquia, o ministério dos profetas, o exílio e a restauração. Identificar esses períodos organiza personagens e acontecimentos.",
    sections: [
      {
        title: "Lei e aliança",
        description:
          "Os primeiros livros apresentam origens, patriarcas, libertação do Egito e orientações dadas a Israel. Moisés ocupa um lugar central nessa parte da narrativa.",
        references: ["Êxodo 19:1-8", "Deuteronômio 6:4-9"],
      },
      {
        title: "Juízes, reis e profetas",
        description:
          "Depois da entrada na terra, o relato passa por juízes e pela monarquia. Os profetas chamam o povo e seus líderes de volta à fidelidade e à justiça.",
        references: ["Juízes 2:16-19", "2 Samuel 7:8-16"],
      },
      {
        title: "Exílio e retorno",
        description:
          "A queda de Jerusalém e o exílio marcam uma ruptura profunda. Livros posteriores narram o retorno e a reconstrução da vida comunitária.",
        references: ["2 Reis 25:8-12", "Esdras 1:1-4"],
      },
    ],
    closingNote:
      "Ao responder, pergunte em qual período o personagem viveu. Essa localização evita misturar episódios separados por muitas gerações.",
  },
  "jesus-evangelhos": {
    heading: "Quatro Evangelhos, um caminho pelo ministério de Jesus.",
    introduction:
      "Mateus, Marcos, Lucas e João narram a vida e o ministério de Jesus com seleções e ênfases próprias. Ler cada episódio em seu Evangelho ajuda a compreender quem estava presente, o que foi dito e como as pessoas responderam.",
    sections: [
      {
        title: "Relatos com propósito",
        description:
          "Os Evangelhos organizam testemunhos e acontecimentos para apresentar Jesus e fortalecer a fé. Nem todos registram os mesmos episódios da mesma maneira.",
        references: ["Lucas 1:1-4", "João 20:30-31"],
      },
      {
        title: "Ensino e Reino de Deus",
        description:
          "Discursos, parábolas, encontros e milagres revelam o ensino de Jesus e convidam seus ouvintes a uma resposta prática.",
        references: ["Mateus 5:1-12", "Marcos 1:14-15"],
      },
      {
        title: "Cruz e ressurreição",
        description:
          "A última semana em Jerusalém, a crucificação e a ressurreição ocupam lugar decisivo nos quatro relatos e dão sentido ao anúncio dos discípulos.",
        references: ["Lucas 23:44-49", "Lucas 24:1-12"],
      },
    ],
    closingNote:
      "Quando uma pergunta citar um milagre ou ensinamento, observe em qual Evangelho a referência aparece antes de comparar detalhes de outros relatos.",
  },
  personagens: {
    heading: "Pessoas reais dentro de histórias maiores.",
    introduction:
      "Personagens bíblicos não aparecem isolados. Cada pessoa pertence a uma família, época, povo e momento da narrativa. Reconhecer essas relações ajuda a não reduzir uma vida inteira a um único episódio.",
    sections: [
      {
        title: "Chamado e resposta",
        description:
          "Abraão, Moisés, Samuel e os discípulos são apresentados em momentos de chamado. Suas respostas incluem fé, dúvidas, aprendizado e transformação.",
        references: ["Gênesis 12:1-4", "Êxodo 3:1-12", "1 Samuel 3:1-10"],
      },
      {
        title: "Decisões e consequências",
        description:
          "As narrativas registram coragem e fidelidade, mas também falhas e consequências. O contexto impede que personagens sejam tratados como figuras perfeitas.",
        references: ["1 Samuel 15:22-23", "2 Samuel 12:7-13"],
      },
      {
        title: "Serviço e transformação",
        description:
          "No Novo Testamento, encontros com Jesus e a ação do Espírito mudam trajetórias e colocam pessoas diferentes a serviço da comunidade.",
        references: ["Lucas 19:1-10", "Atos 9:1-19"],
      },
    ],
    closingNote:
      "Relacione cada nome ao seu tempo, às pessoas ao redor e ao acontecimento completo. Isso torna a memória bíblica mais consistente.",
  },
  "mulheres-da-biblia": {
    heading: "Histórias de fé, coragem, cuidado e participação.",
    introduction:
      "Mulheres aparecem em diferentes períodos e contextos da Bíblia: famílias, liderança, preservação do povo, discipulado e serviço. Cada história precisa ser lida em seus próprios termos, sem reunir experiências muito diferentes em um único modelo.",
    sections: [
      {
        title: "Família e recomeço",
        description:
          "Rute e Noemi atravessam perda, deslocamento e reconstrução. O relato destaca lealdade, cuidado e providência em decisões cotidianas.",
        references: ["Rute 1:16-18", "Rute 4:13-17"],
      },
      {
        title: "Coragem em momentos decisivos",
        description:
          "Débora e Ester participam de momentos críticos para seu povo. Suas histórias envolvem responsabilidade, risco e ação no tempo oportuno.",
        references: ["Juízes 4:4-9", "Ester 4:13-16"],
      },
      {
        title: "Discípulas e testemunhas",
        description:
          "Os Evangelhos registram mulheres que acompanharam Jesus, contribuíram com o ministério e testemunharam acontecimentos centrais.",
        references: ["Lucas 8:1-3", "João 20:11-18"],
      },
    ],
    closingNote:
      "Observe o que o texto diz sobre cada mulher, suas escolhas e seu contexto, evitando completar a narrativa com detalhes que a passagem não oferece.",
  },
  "parabolas-de-jesus": {
    heading: "Histórias breves que convidam a ouvir e responder.",
    introduction:
      "As parábolas usam situações reconhecíveis para confrontar expectativas e ensinar. Para compreendê-las, é importante observar a pergunta, o conflito ou o público que levou Jesus a contar cada história.",
    sections: [
      {
        title: "Por que Jesus contou parábolas",
        description:
          "As parábolas revelam e também exigem atenção de quem ouve. Muitas aparecem em conjuntos que desenvolvem um mesmo tema por imagens diferentes.",
        references: ["Mateus 13:10-17", "Mateus 13:34-35"],
      },
      {
        title: "O contexto orienta a leitura",
        description:
          "A pergunta sobre o próximo conduz a parábola do bom samaritano; críticas por Jesus receber pecadores antecedem as histórias de Lucas 15.",
        references: ["Lucas 10:25-37", "Lucas 15:1-3"],
      },
      {
        title: "A resposta faz parte do ensino",
        description:
          "Algumas parábolas terminam com pergunta, contraste ou decisão aberta. O ouvinte é convidado a reconhecer sua posição diante do ensino.",
        references: ["Mateus 21:28-32", "Lucas 12:16-21"],
      },
    ],
    closingNote:
      "Antes de escolher uma alternativa, lembre quem ouviu a parábola e o que aconteceu imediatamente antes e depois dela.",
  },
  "lugares-da-biblia": {
    heading: "A geografia ajuda a acompanhar o movimento da narrativa.",
    introduction:
      "Cidades, montes, rios, mares e desertos não são apenas cenários. Eles marcam jornadas, fronteiras, encontros e mudanças de fase. Relacionar lugar e acontecimento ajuda a organizar a sequência bíblica.",
    sections: [
      {
        title: "Partidas e promessas",
        description:
          "A jornada de Abraão começa com uma saída e uma promessa. Outros deslocamentos dos patriarcas também conectam família, terra e aliança.",
        references: ["Gênesis 12:1-9", "Gênesis 28:10-19"],
      },
      {
        title: "Deserto, monte e terra",
        description:
          "O êxodo passa pelo mar, pelo deserto e pelo Sinai. Cada lugar está ligado a experiências específicas do povo e à entrega da Lei.",
        references: ["Êxodo 14:21-31", "Êxodo 19:1-6"],
      },
      {
        title: "Caminhos do anúncio",
        description:
          "Nos Evangelhos e em Atos, viagens entre cidades mostram a expansão do ministério de Jesus e, depois, da missão da igreja.",
        references: ["Lucas 9:51", "Atos 1:8", "Atos 13:1-4"],
      },
    ],
    closingNote:
      "Associe o lugar ao deslocamento e ao acontecimento, sem depender de equivalências modernas que não aparecem diretamente no texto.",
  },
  "igreja-primitiva": {
    heading: "Do Pentecostes às comunidades formadas em novas cidades.",
    introduction:
      "Atos acompanha o testemunho cristão saindo de Jerusalém e alcançando outras regiões. Pessoas, viagens, conflitos e decisões mostram como as primeiras comunidades aprenderam a viver e anunciar sua fé.",
    sections: [
      {
        title: "Pentecostes e testemunho",
        description:
          "A vinda do Espírito Santo marca o início do testemunho público dos discípulos em Jerusalém e reúne pessoas de diferentes lugares.",
        references: ["Atos 1:8", "Atos 2:1-12"],
      },
      {
        title: "Vida em comunidade",
        description:
          "Ensino, comunhão, oração, partilha e cuidado aparecem ao lado de tensões que exigiram organização e responsabilidade.",
        references: ["Atos 2:42-47", "Atos 6:1-7"],
      },
      {
        title: "Missão entre cidades",
        description:
          "A igreja de Antioquia envia Barnabé e Paulo. As viagens seguintes formam comunidades e enfrentam perguntas sobre a inclusão dos gentios.",
        references: ["Atos 13:1-4", "Atos 15:1-21"],
      },
    ],
    closingNote:
      "Nas perguntas sobre viagens, identifique a cidade de partida, os companheiros e o momento da missão para não misturar jornadas diferentes.",
  },
};

export function getQuizTopicContext(id: QuizTopicId) {
  return quizTopicContexts[id];
}
