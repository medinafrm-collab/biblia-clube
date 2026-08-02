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
        note: "Moisés recebeu a Lei e conduziu o povo no deserto.",
      },
      {
        id: "noah-ark",
        first: "Noé",
        second: "Arca",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Noé obedeceu a Deus e preparou a arca.",
      },
      {
        id: "david-harp",
        first: "Davi",
        second: "Harpa",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Davi é lembrado como rei, salmista e adorador.",
      },
      {
        id: "esther-crown",
        first: "Ester",
        second: "Coroa",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Ester agiu com coragem para interceder por seu povo.",
      },
      {
        id: "peter-keys",
        first: "Pedro",
        second: "Chaves",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Pedro foi chamado por Jesus e teve papel importante na igreja primitiva.",
      },
      {
        id: "jonah-fish",
        first: "Jonas",
        second: "Grande peixe",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "A história de Jonas fala sobre obediência, misericórdia e arrependimento.",
      },
      {
        id: "ruth-wheat",
        first: "Rute",
        second: "Espigas",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Rute demonstrou lealdade e cuidado em uma história de redenção.",
      },
      {
        id: "paul-letter",
        first: "Paulo",
        second: "Carta",
        firstKind: "Personagem",
        secondKind: "Símbolo",
        note: "Paulo escreveu cartas que instruíram e fortaleceram igrejas.",
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
    ],
  },
];
