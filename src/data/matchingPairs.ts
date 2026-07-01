export type MatchingPair = {
  id: string;
  left: string;
  right: string;
  explanation: string;
  reference: string;
};

export type MatchingTheme = {
  id: string;
  title: string;
  description: string;
  pairs: MatchingPair[];
};

export const matchingThemes: MatchingTheme[] = [
  {
    id: "personagens",
    title: "Personagens e acontecimentos",
    description: "Relacione cada pessoa ao episódio que marcou sua história.",
    pairs: [
      { id: "noe", left: "Noé", right: "Construiu a arca", explanation: "Noé obedeceu às orientações de Deus antes do dilúvio.", reference: "Gênesis 6–9" },
      { id: "moises", left: "Moisés", right: "Conduziu o povo para fora do Egito", explanation: "Moisés liderou a saída dos israelitas da escravidão.", reference: "Êxodo 3–14" },
      { id: "rute", left: "Rute", right: "Acompanhou Noemi até Belém", explanation: "Rute permaneceu ao lado de Noemi e iniciou uma nova vida em Belém.", reference: "Rute 1–4" },
      { id: "davi", left: "Davi", right: "Enfrentou Golias", explanation: "Ainda jovem, Davi enfrentou o guerreiro filisteu confiando em Deus.", reference: "1 Samuel 17" },
      { id: "ester", left: "Ester", right: "Intercedeu por seu povo", explanation: "Como rainha, Ester agiu com coragem diante de uma grave ameaça.", reference: "Ester 4–8" },
      { id: "paulo", left: "Paulo", right: "Viajou anunciando o evangelho", explanation: "Paulo participou de viagens missionárias por diferentes cidades.", reference: "Atos 13–28" },
    ],
  },
  {
    id: "livros",
    title: "Livros e temas",
    description: "Associe cada livro bíblico ao assunto que se destaca nele.",
    pairs: [
      { id: "genesis", left: "Gênesis", right: "Origens e patriarcas", explanation: "Gênesis apresenta as origens e as histórias de Abraão, Isaque, Jacó e José.", reference: "Gênesis 1–50" },
      { id: "exodo", left: "Êxodo", right: "Libertação do Egito", explanation: "Êxodo narra a saída do povo, a aliança e a caminhada pelo deserto.", reference: "Êxodo 1–40" },
      { id: "salmos", left: "Salmos", right: "Orações e cânticos", explanation: "Salmos reúne expressões de louvor, confiança, lamento e gratidão.", reference: "Salmos" },
      { id: "proverbios", left: "Provérbios", right: "Sabedoria para a vida", explanation: "Provérbios apresenta orientações práticas sobre escolhas e relacionamentos.", reference: "Provérbios" },
      { id: "atos", left: "Atos", right: "Início da igreja", explanation: "Atos acompanha o testemunho dos discípulos e a expansão da igreja.", reference: "Atos 1–28" },
      { id: "apocalipse", left: "Apocalipse", right: "Visões de esperança e vitória", explanation: "Apocalipse usa visões e símbolos para afirmar a vitória final de Deus.", reference: "Apocalipse 1–22" },
    ],
  },
  {
    id: "lugares",
    title: "Lugares e acontecimentos",
    description: "Conecte cada local ao episódio bíblico que aconteceu ali.",
    pairs: [
      { id: "sinai", left: "Monte Sinai", right: "Entrega dos mandamentos", explanation: "No Sinai, o povo recebeu orientações para viver a aliança.", reference: "Êxodo 19–20" },
      { id: "jerico", left: "Jericó", right: "Queda das muralhas", explanation: "Israel rodeou a cidade antes da queda de suas muralhas.", reference: "Josué 6" },
      { id: "belém", left: "Belém", right: "Nascimento de Jesus", explanation: "Jesus nasceu em Belém durante a viagem de José e Maria.", reference: "Lucas 2:1–20" },
      { id: "jordao", left: "Rio Jordão", right: "Batismo de Jesus", explanation: "Jesus foi batizado por João no Jordão antes de iniciar seu ministério público.", reference: "Marcos 1:9–11" },
      { id: "caná", left: "Caná", right: "Água transformada em vinho", explanation: "Em uma festa de casamento em Caná, Jesus realizou esse sinal.", reference: "João 2:1–11" },
      { id: "damasco", left: "Caminho de Damasco", right: "Encontro que transformou Saulo", explanation: "A caminho de Damasco, Saulo teve sua trajetória profundamente transformada.", reference: "Atos 9:1–19" },
    ],
  },
  {
    id: "simbolos",
    title: "Imagens e significados",
    description: "Relacione imagens conhecidas ao ensino ou à narrativa correspondente.",
    pairs: [
      { id: "semente", left: "Semente em diferentes solos", right: "Respostas diferentes à mensagem", explanation: "Na parábola do semeador, os solos representam maneiras distintas de receber a mensagem.", reference: "Mateus 13:1–23" },
      { id: "ovelha", left: "Ovelha perdida", right: "Alegria por quem é encontrado", explanation: "A busca pela ovelha mostra o valor de recuperar quem estava perdido.", reference: "Lucas 15:1–7" },
      { id: "lampada", left: "Lâmpada acesa", right: "Testemunho que não deve ser escondido", explanation: "A imagem da lâmpada ensina que a luz deve cumprir sua finalidade.", reference: "Mateus 5:14–16" },
      { id: "rocha", left: "Casa sobre a rocha", right: "Praticar o que foi ensinado", explanation: "A casa firme representa quem escuta e coloca os ensinamentos em prática.", reference: "Mateus 7:24–27" },
      { id: "videira", left: "Videira e ramos", right: "Permanecer ligado a Jesus", explanation: "Jesus usa a videira para explicar uma relação de dependência e fruto.", reference: "João 15:1–8" },
      { id: "armadura", left: "Armadura de Deus", right: "Firmeza na vida de fé", explanation: "Paulo usa peças de uma armadura como imagens de preparo e perseverança.", reference: "Efésios 6:10–18" },
    ],
  },
];
