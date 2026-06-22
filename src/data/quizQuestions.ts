export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  reference: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Quem construiu a arca para sobreviver ao dilúvio?",
    options: ["Moisés", "Noé", "Abraão", "Davi"],
    correctAnswer: "Noé",
    explanation:
      "Noé construiu a arca conforme as instruções de Deus e preservou sua família e os animais.",
    reference: "Gênesis 6–9",
  },
  {
    id: 2,
    question: "Qual foi o primeiro livro da Bíblia?",
    options: ["Êxodo", "Salmos", "Gênesis", "Mateus"],
    correctAnswer: "Gênesis",
    explanation:
      "Gênesis abre a Bíblia narrando a criação e o início da história do povo de Deus.",
    reference: "Gênesis 1",
  },
  {
    id: 3,
    question: "Quem recebeu os Dez Mandamentos no monte Sinai?",
    options: ["Josué", "Moisés", "Elias", "Samuel"],
    correctAnswer: "Moisés",
    explanation:
      "Moisés recebeu de Deus as tábuas da aliança com os Dez Mandamentos.",
    reference: "Êxodo 20",
  },
  {
    id: 4,
    question: "Quem derrotou o gigante Golias?",
    options: ["Sansão", "Saul", "Davi", "Jônatas"],
    correctAnswer: "Davi",
    explanation:
      "Ainda jovem, Davi confiou em Deus e venceu Golias usando uma funda e uma pedra.",
    reference: "1 Samuel 17",
  },
  {
    id: 5,
    question: "Em qual cidade Jesus nasceu?",
    options: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"],
    correctAnswer: "Belém",
    explanation:
      "Jesus nasceu em Belém da Judeia, cumprindo a profecia anunciada nas Escrituras.",
    reference: "Mateus 2:1",
  },
  {
    id: 6,
    question: "Quantos discípulos Jesus escolheu para acompanhá-lo de perto?",
    options: ["7", "10", "12", "40"],
    correctAnswer: "12",
    explanation:
      "Jesus escolheu doze apóstolos para estarem com ele e anunciarem sua mensagem.",
    reference: "Marcos 3:13–19",
  },
  {
    id: 7,
    question: "Quem foi lançado na cova dos leões?",
    options: ["Daniel", "José", "Jonas", "Paulo"],
    correctAnswer: "Daniel",
    explanation:
      "Daniel foi lançado na cova por continuar orando a Deus, mas foi protegido dos leões.",
    reference: "Daniel 6",
  },
  {
    id: 8,
    question: "Qual profeta foi engolido por um grande peixe?",
    options: ["Isaías", "Jeremias", "Jonas", "Amós"],
    correctAnswer: "Jonas",
    explanation:
      "Jonas passou três dias e três noites dentro de um grande peixe antes de ir a Nínive.",
    reference: "Jonas 1–2",
  },
  {
    id: 9,
    question: "Segundo Jesus, qual é o maior mandamento?",
    options: [
      "Construir um templo",
      "Amar a Deus",
      "Fazer longas viagens",
      "Guardar riquezas",
    ],
    correctAnswer: "Amar a Deus",
    explanation:
      "Jesus ensinou a amar a Deus de todo o coração, alma e entendimento, e ao próximo como a si mesmo.",
    reference: "Mateus 22:37–39",
  },
  {
    id: 10,
    question: "Quem negou conhecer Jesus três vezes?",
    options: ["João", "Tomé", "Pedro", "Filipe"],
    correctAnswer: "Pedro",
    explanation:
      "Pedro negou Jesus três vezes antes do galo cantar, como Jesus havia anunciado.",
    reference: "Lucas 22:54–62",
  },
  {
    id: 11,
    question: "Qual é o último livro do Novo Testamento?",
    options: ["Judas", "Hebreus", "Atos", "Apocalipse"],
    correctAnswer: "Apocalipse",
    explanation:
      "Apocalipse encerra o Novo Testamento com uma mensagem de esperança e vitória de Deus.",
    reference: "Apocalipse 1",
  },
  {
    id: 12,
    question: "Quem escreveu muitas cartas presentes no Novo Testamento?",
    options: ["Paulo", "Nicodemos", "Zaqueu", "Timóteo"],
    correctAnswer: "Paulo",
    explanation:
      "O apóstolo Paulo escreveu várias cartas para orientar as primeiras comunidades cristãs.",
    reference: "Romanos a Filemom",
  },
];
