export type RecreationalQuestion = {
  question: string;
  options: [string, string, string, string];
  answer: string;
  explanation: string;
  reference: string;
  observation: string;
};

export const couplesRecreationalQuiz: RecreationalQuestion[] = [
  {
    question: "A qual cidade Noemi e Rute chegaram juntas em Rute 1:19?",
    options: ["Jericó", "Nazaré", "Belém", "Caná"],
    answer: "Belém",
    explanation: "O versículo registra a chegada das duas a Belém. A pergunta pede o destino desta caminhada, não o lugar de origem de cada personagem.",
    reference: "Rute 1:19",
    observation: "Localizem a expressão que indica a chegada. Quem são as duas pessoas mencionadas? Confiram Noemi e Rute em Rute 1:18-19.",
  },
  {
    question: "Qual irmão de Simão aparece com ele lançando uma rede em Marcos 1:16?",
    options: ["Tiago", "André", "João", "Filipe"],
    answer: "André",
    explanation: "Marcos identifica André como irmão de Simão e informa que eram pescadores. Tiago e João aparecem na cena seguinte, nos versículos 19-20; não são os nomes pedidos aqui.",
    reference: "Marcos 1:16-20",
    observation: "Que trabalho com as redes aparece no versículo 16 e qual aparece no 19? O primeiro fala de lançar a rede; o segundo, de consertar ou preparar as redes, conforme a tradução.",
  },
  {
    question: "Quantos recipientes de pedra são mencionados em João 2:6, no casamento em Caná?",
    options: ["Dois", "Quatro", "Doze", "Seis"],
    answer: "Seis",
    explanation: "O relato menciona seis recipientes de pedra para a purificação. Algumas traduções usam talhas, outras vasos. O número identifica os recipientes, não convidados ou garrafas.",
    reference: "João 2:6-7",
    observation: "Depois de mencionar os recipientes, o que Jesus pede aos serventes? No versículo 7, pede que os encham de água.",
  },
  {
    question: "Qual ofício Atos 18:3 menciona ao explicar por que Paulo ficou e trabalhou com Áquila e Priscila?",
    options: ["Fazer tendas", "Pescar", "Cultivar vinhas", "Construir barcos"],
    answer: "Fazer tendas",
    explanation: "Atos informa que Paulo era do mesmo ofício e menciona a fabricação de tendas. A pergunta se limita ao trabalho registrado nesse encontro, sem descrever como cada tarefa era dividida.",
    reference: "Atos 18:2-3",
    observation: "Quais nomes aparecem no versículo 2? Localizem Áquila e Priscila antes de conferir o ofício no versículo 3.",
  },
  {
    question: "A quem os pescadores acenaram para pedir ajuda em Lucas 5:7?",
    options: ["A soldados na margem", "A mercadores na cidade", "A companheiros no outro barco", "A viajantes na estrada"],
    answer: "A companheiros no outro barco",
    explanation: "Após a grande quantidade de peixes e a dificuldade com a rede, eles fazem sinal aos companheiros do outro barco. O versículo 7 registra que os companheiros vêm e os dois barcos são cheios.",
    reference: "Lucas 5:6-7",
    observation: "Ordenem três ações do recorte: recolher peixes, acenar por ajuda e encher os dois barcos. Não acrescentem personagens que esses versículos não nomeiam.",
  },
  {
    question: "Quem falou ao povo as palavras que o Senhor havia dito a Moisés em Êxodo 4:30?",
    options: ["Josué", "Arão", "Calebe", "Jetro"],
    answer: "Arão",
    explanation: "Moisés e Arão reúnem os anciãos no versículo 29; o versículo 30 identifica Arão como quem fala essas palavras. Observar quem reúne e quem fala evita confundir as funções na cena.",
    reference: "Êxodo 4:29-30",
    observation: "Quais duas pessoas se apresentam juntas no versículo 29? A presença de Moisés não muda a identificação de quem fala no versículo 30.",
  },
];

export const youthReadingWorkshop = {
  reference: "Lucas 19:1-6",
  facts: [
    { question: "Por qual cidade Jesus estava passando?", answer: "Jericó, no versículo 1." },
    { question: "Quem procurava ver Jesus?", answer: "Zaqueu, identificado nos versículos 2-3." },
    { question: "O que Zaqueu fez para conseguir vê-lo?", answer: "Correu adiante e subiu numa árvore, no versículo 4. Algumas traduções a chamam sicômoro." },
  ],
  sequence: [
    { id: "A", text: "Zaqueu desce e recebe Jesus com alegria.", verse: 6 },
    { id: "B", text: "Zaqueu corre adiante e sobe numa árvore.", verse: 4 },
    { id: "C", text: "Jesus entra e passa por Jericó.", verse: 1 },
    { id: "D", text: "Zaqueu procura ver Jesus, mas não consegue por causa da multidão e de sua altura.", verse: 3 },
    { id: "E", text: "Jesus olha para cima e pede a Zaqueu que desça.", verse: 5 },
    { id: "F", text: "O narrador apresenta Zaqueu como chefe dos publicanos.", verse: 2 },
  ],
  sequenceAnswer: ["C", "F", "D", "B", "E", "A"],
  comparisons: [
    { statement: "Jesus passava por Jericó.", answer: "O texto afirma: Lucas 19:1." },
    { statement: "Zaqueu recebeu Jesus com alegria.", answer: "O texto afirma: Lucas 19:6." },
    { statement: "A árvore tinha exatamente cinco metros de altura.", answer: "O recorte não informa a altura da árvore. Não é possível confirmar esse número pela passagem." },
    { statement: "Zaqueu subiu na árvore antes de Jesus lhe pedir que descesse.", answer: "A ordem aparece no texto: subida no versículo 4, pedido no 5. É uma comparação entre dois versículos." },
  ],
  schedule: [
    { minutes: 3, title: "Combinado", text: "Explique consulta livre e direito de passar. Formem duplas ou trios; é possível acompanhar sem responder." },
    { minutes: 5, title: "Leitura", text: "Leia Lucas 19:1-6. Explique publicano como cobrador de impostos; a atividade observa a cena, sem discutir finanças ou experiências pessoais." },
    { minutes: 10, title: "Encontre no texto", text: "Leia as três perguntas, dê tempo de consulta e confira os versículos. Alternem quem localiza e quem lê, se desejarem." },
    { minutes: 7, title: "Coloque em ordem", text: "Apresente as seis frases misturadas. As equipes propõem a ordem das letras e conferem a sequência dos versículos 1 a 6." },
    { minutes: 7, title: "Compare as afirmações", text: "Leiam as quatro afirmações. Para cada uma, indiquem o versículo de apoio ou reconheçam que o recorte não informa o detalhe." },
    { minutes: 3, title: "Fechamento", text: "Ouça até duas descobertas sobre a leitura e agradeça a participação. Se desejarem, encerrem com oração breve, sem relatos pessoais ou compromissos públicos." },
  ],
};
