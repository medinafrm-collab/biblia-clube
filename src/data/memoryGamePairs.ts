export type MemoryGameMode = "symbols" | "references";

export type MemoryGamePair = {
  id: string;
  first: string;
  second: string;
  firstKind: string;
  secondKind: string;
  note: string;
};

export type MemoryGameModeConfig = {
  id: MemoryGameMode;
  title: string;
  description: string;
  firstLabel: string;
  secondLabel: string;
  pairs: MemoryGamePair[];
};

export const memoryGameModes: MemoryGameModeConfig[] = [
  {
    id: "symbols",
    title: "Personagem e símbolo",
    description:
      "Encontre pares entre personagens e elementos ligados às suas histórias.",
    firstLabel: "Personagem",
    secondLabel: "Símbolo",
    pairs: [
      {
        id: "moses-tablets",
        first: "Moisés",
        second: "Tábuas",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Em Êxodo 31:18, Deus entrega a Moisés as duas tábuas do testemunho. As tábuas são o elemento associado a ele neste par.",
      },
      {
        id: "noah-ark",
        first: "Noé",
        second: "Arca",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Gênesis 6:14-22 apresenta as instruções para a arca e diz que Noé fez conforme Deus lhe ordenou.",
      },
      {
        id: "david-harp",
        first: "Davi",
        second: "Harpa",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Em 1 Samuel 16:23, Davi toca a harpa diante de Saul. O instrumento está ligado a essa cena, não apenas ao seu reinado.",
      },
      {
        id: "esther-crown",
        first: "Ester",
        second: "Coroa",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Ester 2:17 relata que o rei coloca a coroa real na cabeça de Ester e a faz rainha no lugar de Vasti.",
      },
      {
        id: "peter-keys",
        first: "Pedro",
        second: "Chaves",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Em Mateus 16:19, Jesus fala a Pedro sobre as chaves do Reino dos céus. O par recorda essa imagem, sem decidir interpretações denominacionais sobre sua aplicação.",
      },
      {
        id: "jonah-fish",
        first: "Jonas",
        second: "Grande peixe",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Jonas 1:17 relata que um grande peixe engole Jonas. O texto não identifica uma espécie, por isso o par não usa o nome baleia.",
      },
      {
        id: "ruth-wheat",
        first: "Rute",
        second: "Espigas",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Em Rute 2:2-3, Rute vai ao campo recolher espigas atrás dos ceifeiros e chega à parte que pertence a Boaz.",
      },
      {
        id: "paul-letter",
        first: "Paulo",
        second: "Carta",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Romanos 1:1-7 apresenta Paulo e os destinatários em Roma na abertura da carta. Carta é o objeto associado a ele neste par.",
      },
      {
        id: "joseph-tunic",
        first: "José",
        second: "Túnica",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Gênesis 37:3 relata que Israel faz uma túnica para José. O par se refere a José, filho de Jacó, não a José do relato do nascimento de Jesus.",
      },
      {
        id: "joshua-trumpets",
        first: "Josué",
        second: "Trombetas",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Em Josué 6:6-9, Josué orienta os sacerdotes que levam as trombetas na marcha ao redor de Jericó. O par não indica que ele próprio tocava o instrumento.",
      },
      {
        id: "gideon-fleece",
        first: "Gideão",
        second: "Porção de lã",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Juízes 6:36-40 descreve os pedidos de Gideão envolvendo uma porção de lã e o orvalho. O par identifica o objeto do episódio, não uma regra para tomar decisões hoje.",
      },
      {
        id: "daniel-lions",
        first: "Daniel",
        second: "Leões",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Daniel 6:16-23 narra sua entrada na cova e a declaração de que Deus fechou a boca dos leões. O par identifica os animais dessa narrativa.",
      },
    ],
  },
  {
    id: "references",
    title: "Verso e referência",
    description:
      "Conecte trechos curtos às referências correspondentes.",
    firstLabel: "Trecho",
    secondLabel: "Referência",
    pairs: [
      {
        id: "genesis-1-1",
        first: "No princípio, Deus criou os céus e a terra.",
        second: "Gênesis 1:1",
        firstKind: "Trecho",
        secondKind: "Referência",
        note: "A Bíblia começa apresentando Deus como Criador.",
      },
      {
        id: "psalm-23-1",
        first: "O SENHOR é o meu pastor; nada me faltará.",
        second: "Salmos 23:1",
        firstKind: "Trecho",
        secondKind: "Referência",
        note: "O salmo expressa confiança no cuidado de Deus.",
      },
      {
        id: "psalm-119-105",
        first: "A tua palavra é lâmpada para os meus pés.",
        second: "Salmos 119:105",
        firstKind: "Trecho",
        secondKind: "Referência",
        note: "A Palavra de Deus orienta o caminho do seu povo.",
      },
      {
        id: "matthew-5-9",
        first: "Bem-aventurados os pacificadores.",
        second: "Mateus 5:9",
        firstKind: "Trecho",
        secondKind: "Referência",
        note: "Jesus ensina sobre o caráter daqueles que promovem paz.",
      },
      {
        id: "matthew-5-14",
        first: "Vocês são a luz do mundo.",
        second: "Mateus 5:14",
        firstKind: "Trecho",
        secondKind: "Referência",
        note: "Jesus chama seus discípulos a viverem como testemunho visível.",
      },
      {
        id: "romans-12-2",
        first: "Transformem-se pela renovação da mente.",
        second: "Romanos 12:2",
        firstKind: "Trecho",
        secondKind: "Referência",
        note: "A vida cristã envolve transformação e discernimento.",
      },
      {
        id: "john-14-6",
        first: "Eu sou o caminho, a verdade e a vida.",
        second: "João 14:6",
        firstKind: "Trecho",
        secondKind: "Referência",
        note: "Jesus apresenta a si mesmo como o caminho para o Pai.",
      },
      {
        id: "philippians-4-4",
        first: "Alegrem-se sempre no Senhor.",
        second: "Filipenses 4:4",
        firstKind: "Trecho",
        secondKind: "Referência",
        note: "Paulo chama a igreja a cultivar alegria no Senhor.",
      },
      {
        id: "psalm-37-5",
        first: "Entregue o seu caminho ao SENHOR; confie também nele.",
        second: "Salmos 37:5",
        firstKind: "Trecho",
        secondKind: "Referência",
        note: "O salmo convida a colocar os caminhos diante de Deus com confiança.",
      },
      {
        id: "proverbs-17-22",
        first: "O coração alegre é um bom remédio.",
        second: "Provérbios 17:22",
        firstKind: "Trecho",
        secondKind: "Referência",
        note: "Provérbios relaciona a alegria interior ao bem-estar da pessoa.",
      },
      {
        id: "1-thessalonians-5-17",
        first: "Orem sem cessar.",
        second: "1 Tessalonicenses 5:17",
        firstKind: "Trecho",
        secondKind: "Referência",
        note: "A breve orientação aparece entre práticas simples para a vida da comunidade.",
      },
      {
        id: "1-john-4-19",
        first: "Nós o amamos porque ele nos amou primeiro.",
        second: "1 João 4:19",
        firstKind: "Trecho",
        secondKind: "Referência",
        note: "O amor de Deus é apresentado como a origem da resposta de amor das pessoas.",
      },
    ],
  },
];
