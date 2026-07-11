export type CompletePhraseQuestion = {
  id: string;
  prompt: string;
  answer: string;
  options: string[];
  fullText: string;
  reference: string;
};

export const completePhraseQuestions: CompletePhraseQuestion[] = [
  {
    id: "creation",
    prompt: "No princípio, Deus criou...",
    answer: "os céus e a terra.",
    options: [
      "os céus e a terra.",
      "o sol e as estrelas.",
      "os mares e os montes.",
      "o dia e a noite.",
    ],
    fullText: "No princípio, Deus criou os céus e a terra.",
    reference: "Gênesis 1:1",
  },
  {
    id: "shepherd",
    prompt: "O SENHOR é o meu pastor;...",
    answer: "nada me faltará.",
    options: [
      "nada me faltará.",
      "sempre me guardará.",
      "meu caminho mostrará.",
      "minha força renovará.",
    ],
    fullText: "O SENHOR é o meu pastor; nada me faltará.",
    reference: "Salmos 23:1",
  },
  {
    id: "lamp",
    prompt: "A tua palavra é lâmpada para os meus pés,...",
    answer: "e luz para o meu caminho.",
    options: [
      "e luz para o meu caminho.",
      "e força para o meu coração.",
      "e abrigo para a minha alma.",
      "e paz para os meus dias.",
    ],
    fullText:
      "A tua palavra é lâmpada para os meus pés, e luz para o meu caminho.",
    reference: "Salmos 119:105",
  },
  {
    id: "peacemakers",
    prompt: "Bem-aventurados os pacificadores,...",
    answer: "pois eles serão chamados filhos de Deus.",
    options: [
      "pois eles serão chamados filhos de Deus.",
      "pois deles é o Reino dos céus.",
      "pois eles herdarão a terra.",
      "pois eles receberão misericórdia.",
    ],
    fullText:
      "Bem-aventurados os pacificadores, pois eles serão chamados filhos de Deus.",
    reference: "Mateus 5:9",
  },
  {
    id: "light-world",
    prompt: "Vocês são a luz do mundo. Não se pode esconder...",
    answer: "uma cidade situada sobre um monte.",
    options: [
      "uma cidade situada sobre um monte.",
      "uma lâmpada acesa dentro de casa.",
      "uma estrela que brilha no céu.",
      "uma semente plantada em boa terra.",
    ],
    fullText:
      "Vocês são a luz do mundo. Não se pode esconder uma cidade situada sobre um monte.",
    reference: "Mateus 5:14",
  },
  {
    id: "kingdom-first",
    prompt: "Mas busquem primeiro o Reino de Deus e a sua justiça,...",
    answer: "e todas essas coisas lhes serão acrescentadas.",
    options: [
      "e todas essas coisas lhes serão acrescentadas.",
      "e encontrarão descanso para a alma.",
      "e os seus caminhos serão endireitados.",
      "e nunca mais terão necessidade.",
    ],
    fullText:
      "Mas busquem primeiro o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.",
    reference: "Mateus 6:33",
  },
  {
    id: "god-loved",
    prompt: "Porque Deus amou o mundo de tal maneira que deu...",
    answer: "o seu Filho unigênito.",
    options: [
      "o seu Filho unigênito.",
      "a sua lei aos homens.",
      "uma nova aliança ao povo.",
      "a esperança aos que creem.",
    ],
    fullText:
      "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    reference: "João 3:16",
  },
  {
    id: "all-things-good",
    prompt: "Sabemos que todas as coisas cooperam...",
    answer: "para o bem daqueles que amam a Deus.",
    options: [
      "para o bem daqueles que amam a Deus.",
      "para fortalecer os que perseveram.",
      "para ensinar os que buscam sabedoria.",
      "para a paz daqueles que confiam.",
    ],
    fullText:
      "Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.",
    reference: "Romanos 8:28",
  },
  {
    id: "all-things",
    prompt: "Posso todas as coisas...",
    answer: "por meio de Cristo que me fortalece.",
    options: [
      "por meio de Cristo que me fortalece.",
      "porque a minha fé não se abala.",
      "quando permaneço no bom caminho.",
      "pela esperança que há em mim.",
    ],
    fullText: "Posso todas as coisas por meio de Cristo que me fortalece.",
    reference: "Filipenses 4:13",
  },
  {
    id: "anxieties",
    prompt: "Lançando sobre ele todas as suas ansiedades,...",
    answer: "porque ele tem cuidado de vocês.",
    options: [
      "porque ele tem cuidado de vocês.",
      "porque a fé vence o medo.",
      "porque a sua graça é suficiente.",
      "porque o amanhã pertence a Deus.",
    ],
    fullText:
      "Lançando sobre ele todas as suas ansiedades, porque ele tem cuidado de vocês.",
    reference: "1 Pedro 5:7",
  },
  {
    id: "courage",
    prompt: "Sejam fortes e corajosos. Não tenham medo nem se apavorem,...",
    answer: "pois o SENHOR, o seu Deus, ele mesmo é quem vai com vocês.",
    options: [
      "pois o SENHOR, o seu Deus, ele mesmo é quem vai com vocês.",
      "pois a vitória pertence aos que perseveram.",
      "pois nenhum inimigo poderá resistir.",
      "pois a coragem tornará o caminho seguro.",
    ],
    fullText:
      "Sejam fortes e corajosos. Não tenham medo nem se apavorem diante deles, pois o SENHOR, o seu Deus, ele mesmo é quem vai com vocês. Ele não os deixará nem os abandonará.",
    reference: "Deuteronômio 31:6",
  },
  {
    id: "yes-no",
    prompt: "Mas que o ‘Sim’ de vocês seja ‘Sim’,...",
    answer: "e o ‘Não’ seja ‘Não’.",
    options: [
      "e o ‘Não’ seja ‘Não’.",
      "e a verdade permaneça entre vocês.",
      "e a palavra seja sempre fiel.",
      "e não haja dúvida no coração.",
    ],
    fullText: "Mas que o ‘Sim’ de vocês seja ‘Sim’, e o ‘Não’ seja ‘Não’.",
    reference: "Mateus 5:37",
  },
];
