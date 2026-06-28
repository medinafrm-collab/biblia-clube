export type QuizTopicId =
  | "geral"
  | "antigo-testamento"
  | "jesus-evangelhos"
  | "personagens";

export type QuizQuestion = {
  id: number;
  topics: QuizTopicId[];
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  reference: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    topics: ["antigo-testamento"],
    question: "Quem construiu a arca para sobreviver ao dilúvio?",
    options: ["Moisés", "Noé", "Abraão", "Davi"],
    correctAnswer: "Noé",
    explanation:
      "Noé construiu a arca conforme as instruções de Deus e preservou sua família e os animais.",
    reference: "Gênesis 6–9",
  },
  {
    id: 2,
    topics: ["geral"],
    question: "Qual é o primeiro livro da Bíblia?",
    options: ["Êxodo", "Salmos", "Gênesis", "Mateus"],
    correctAnswer: "Gênesis",
    explanation:
      "Gênesis abre a Bíblia narrando a criação e o início da história do povo de Deus.",
    reference: "Gênesis 1",
  },
  {
    id: 3,
    topics: ["antigo-testamento"],
    question: "Quem recebeu os Dez Mandamentos no monte Sinai?",
    options: ["Josué", "Moisés", "Elias", "Samuel"],
    correctAnswer: "Moisés",
    explanation:
      "Moisés recebeu de Deus as tábuas da aliança com os Dez Mandamentos.",
    reference: "Êxodo 20",
  },
  {
    id: 4,
    topics: ["antigo-testamento"],
    question: "Quem derrotou o gigante Golias?",
    options: ["Sansão", "Saul", "Davi", "Jônatas"],
    correctAnswer: "Davi",
    explanation:
      "Ainda jovem, Davi confiou em Deus e venceu Golias usando uma funda e uma pedra.",
    reference: "1 Samuel 17",
  },
  {
    id: 5,
    topics: ["jesus-evangelhos"],
    question: "Em qual cidade Jesus nasceu?",
    options: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"],
    correctAnswer: "Belém",
    explanation:
      "Jesus nasceu em Belém da Judeia, cumprindo a profecia anunciada nas Escrituras.",
    reference: "Mateus 2:1",
  },
  {
    id: 6,
    topics: ["jesus-evangelhos"],
    question: "Quantos discípulos Jesus escolheu para acompanhá-lo de perto?",
    options: ["7", "10", "12", "40"],
    correctAnswer: "12",
    explanation:
      "Jesus escolheu doze apóstolos para estarem com ele e anunciarem sua mensagem.",
    reference: "Marcos 3:13–19",
  },
  {
    id: 7,
    topics: ["antigo-testamento"],
    question: "Quem foi lançado na cova dos leões?",
    options: ["Daniel", "José", "Jonas", "Paulo"],
    correctAnswer: "Daniel",
    explanation:
      "Daniel foi lançado na cova por continuar orando a Deus, mas foi protegido dos leões.",
    reference: "Daniel 6",
  },
  {
    id: 8,
    topics: ["antigo-testamento"],
    question: "Qual profeta foi engolido por um grande peixe?",
    options: ["Isaías", "Jeremias", "Jonas", "Amós"],
    correctAnswer: "Jonas",
    explanation:
      "Jonas passou três dias e três noites dentro de um grande peixe antes de ir a Nínive.",
    reference: "Jonas 1–2",
  },
  {
    id: 9,
    topics: ["geral"],
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
    topics: ["jesus-evangelhos"],
    question: "Quem negou conhecer Jesus três vezes?",
    options: ["João", "Tomé", "Pedro", "Filipe"],
    correctAnswer: "Pedro",
    explanation:
      "Pedro negou Jesus três vezes antes do galo cantar, como Jesus havia anunciado.",
    reference: "Lucas 22:54–62",
  },
  {
    id: 11,
    topics: ["geral"],
    question: "Qual é o último livro do Novo Testamento?",
    options: ["Judas", "Hebreus", "Atos", "Apocalipse"],
    correctAnswer: "Apocalipse",
    explanation:
      "Apocalipse encerra o Novo Testamento com uma mensagem de esperança e vitória de Deus.",
    reference: "Apocalipse 1",
  },
  {
    id: 12,
    topics: ["geral"],
    question: "Quem escreveu muitas cartas presentes no Novo Testamento?",
    options: ["Paulo", "Nicodemos", "Zaqueu", "Timóteo"],
    correctAnswer: "Paulo",
    explanation:
      "O apóstolo Paulo escreveu várias cartas para orientar as primeiras comunidades cristãs.",
    reference: "Romanos a Filemom",
  },
  {
    id: 13,
    topics: ["antigo-testamento"],
    question: "Qual rainha arriscou a própria vida para defender seu povo?",
    options: ["Ester", "Jezabel", "Bate-Seba", "Mical"],
    correctAnswer: "Ester",
    explanation:
      "Ester apresentou-se ao rei sem ser chamada e intercedeu para livrar seu povo.",
    reference: "Ester 4–7",
  },
  {
    id: 14,
    topics: ["antigo-testamento"],
    question: "Quem foi vendido pelos irmãos e tornou-se governador no Egito?",
    options: ["José", "Benjamim", "Isaque", "Calebe"],
    correctAnswer: "José",
    explanation:
      "José foi vendido como escravo, mas Deus o conduziu até uma posição de autoridade no Egito.",
    reference: "Gênesis 37–41",
  },
  {
    id: 15,
    topics: ["jesus-evangelhos"],
    question: "Qual foi o primeiro milagre de Jesus narrado no Evangelho de João?",
    options: [
      "Multiplicar pães",
      "Curar um cego",
      "Transformar água em vinho",
      "Acalmar a tempestade",
    ],
    correctAnswer: "Transformar água em vinho",
    explanation:
      "Em um casamento em Caná, Jesus transformou água em vinho e manifestou sua glória.",
    reference: "João 2:1–11",
  },
  {
    id: 16,
    topics: ["jesus-evangelhos"],
    question: "Quem batizou Jesus no rio Jordão?",
    options: ["Pedro", "João Batista", "André", "Tiago"],
    correctAnswer: "João Batista",
    explanation:
      "João Batista batizou Jesus, e o Espírito de Deus desceu sobre ele como uma pomba.",
    reference: "Mateus 3:13–17",
  },
  {
    id: 17,
    topics: ["jesus-evangelhos"],
    question: "Em qual sermão Jesus ensinou as bem-aventuranças?",
    options: [
      "Sermão do Monte",
      "Discurso do Cenáculo",
      "Sermão de Nazaré",
      "Discurso do Templo",
    ],
    correctAnswer: "Sermão do Monte",
    explanation:
      "As bem-aventuranças abrem o Sermão do Monte e apresentam valores do Reino de Deus.",
    reference: "Mateus 5:1–12",
  },
  {
    id: 18,
    topics: ["jesus-evangelhos"],
    question: "Quem encontrou o túmulo de Jesus vazio na manhã da ressurreição?",
    options: ["Maria Madalena", "Marta", "Isabel", "Lídia"],
    correctAnswer: "Maria Madalena",
    explanation:
      "Maria Madalena foi ao túmulo de madrugada, encontrou a pedra removida e anunciou o que viu.",
    reference: "João 20:1–18",
  },
  {
    id: 19,
    topics: ["geral"],
    question: "Qual livro vem imediatamente depois dos quatro Evangelhos?",
    options: ["Romanos", "Atos", "Hebreus", "Apocalipse"],
    correctAnswer: "Atos",
    explanation:
      "Atos vem depois do Evangelho de João e apresenta o início da igreja e a expansão da mensagem cristã.",
    reference: "Atos 1:1–8",
  },
  {
    id: 20,
    topics: ["geral"],
    question: "Qual livro da Bíblia possui 150 capítulos?",
    options: ["Provérbios", "Isaías", "Salmos", "Jeremias"],
    correctAnswer: "Salmos",
    explanation:
      "O livro de Salmos reúne 150 cânticos e orações distribuídos em cinco coleções.",
    reference: "Salmos 1–150",
  },
  {
    id: 21,
    topics: ["geral"],
    question: "Como são conhecidos os cinco primeiros livros da Bíblia?",
    options: ["Evangelhos", "Pentateuco", "Profetas Menores", "Cartas Gerais"],
    correctAnswer: "Pentateuco",
    explanation:
      "Gênesis, Êxodo, Levítico, Números e Deuteronômio formam o conjunto chamado Pentateuco.",
    reference: "Gênesis a Deuteronômio",
  },
  {
    id: 22,
    topics: ["geral"],
    question: "Qual carta aparece logo depois do livro de Atos?",
    options: ["Romanos", "Gálatas", "Hebreus", "Tiago"],
    correctAnswer: "Romanos",
    explanation:
      "Romanos é a primeira carta apresentada depois do relato de Atos no Novo Testamento.",
    reference: "Romanos 1:1–7",
  },
  {
    id: 23,
    topics: ["geral"],
    question: "Mateus, Marcos, Lucas e João formam qual conjunto de livros?",
    options: ["Evangelhos", "Livros Poéticos", "Pentateuco", "Cartas Paulinas"],
    correctAnswer: "Evangelhos",
    explanation:
      "Os quatro Evangelhos apresentam a vida, os ensinamentos, a morte e a ressurreição de Jesus.",
    reference: "Mateus a João",
  },
  {
    id: 24,
    topics: ["geral"],
    question: "Qual livro aparece imediatamente antes de Apocalipse?",
    options: ["Hebreus", "Judas", "3 João", "Tiago"],
    correctAnswer: "Judas",
    explanation:
      "A breve carta de Judas aparece antes de Apocalipse na organização do Novo Testamento.",
    reference: "Judas 1; Apocalipse 1",
  },
  {
    id: 25,
    topics: ["geral"],
    question: "Qual livro é conhecido por reunir muitos ensinamentos práticos de sabedoria?",
    options: ["Provérbios", "Levítico", "Atos", "Ezequiel"],
    correctAnswer: "Provérbios",
    explanation:
      "Provérbios reúne orientações sobre sabedoria, escolhas, palavras, trabalho e relacionamentos.",
    reference: "Provérbios 1:1–7",
  },
  {
    id: 26,
    topics: ["geral"],
    question: "Em qual parte da Bíblia encontramos o livro de Atos?",
    options: ["Antigo Testamento", "Novo Testamento", "Livros Poéticos", "Pentateuco"],
    correctAnswer: "Novo Testamento",
    explanation:
      "Atos pertence ao Novo Testamento e narra acontecimentos posteriores à ressurreição de Jesus.",
    reference: "Atos 1–28",
  },
  {
    id: 27,
    topics: ["antigo-testamento"],
    question: "Qual alimento apareceu no deserto para sustentar os israelitas?",
    options: ["Maná", "Uvas", "Lentilhas", "Figos"],
    correctAnswer: "Maná",
    explanation:
      "Durante a caminhada no deserto, o povo recebeu diariamente o alimento chamado maná.",
    reference: "Êxodo 16",
  },
  {
    id: 28,
    topics: ["antigo-testamento"],
    question: "Sob a liderança de quem os israelitas cercaram Jericó?",
    options: ["Josué", "Arão", "Gideão", "Neemias"],
    correctAnswer: "Josué",
    explanation:
      "Josué conduziu o povo ao redor de Jericó, e as muralhas caíram após cumprirem as instruções recebidas.",
    reference: "Josué 6",
  },
  {
    id: 29,
    topics: ["antigo-testamento"],
    question: "Com quantos homens Gideão enfrentou o exército midianita?",
    options: ["100", "300", "1.000", "12.000"],
    correctAnswer: "300",
    explanation:
      "O grupo de Gideão foi reduzido a trezentos homens antes da vitória sobre os midianitas.",
    reference: "Juízes 7",
  },
  {
    id: 30,
    topics: ["jesus-evangelhos"],
    question: "Na parábola de Jesus, quem ajudou o homem ferido na estrada?",
    options: ["Um sacerdote", "Um levita", "Um samaritano", "Um soldado"],
    correctAnswer: "Um samaritano",
    explanation:
      "O samaritano cuidou do homem ferido e providenciou o necessário para sua recuperação.",
    reference: "Lucas 10:25–37",
  },
  {
    id: 31,
    topics: ["jesus-evangelhos"],
    question: "Quantos pães e peixes aparecem na alimentação da grande multidão?",
    options: ["Cinco pães e dois peixes", "Dois pães e cinco peixes", "Sete pães e um peixe", "Doze pães e dois peixes"],
    correctAnswer: "Cinco pães e dois peixes",
    explanation:
      "Jesus utilizou cinco pães e dois peixes, e a multidão comeu até ficar satisfeita.",
    reference: "Mateus 14:13–21",
  },
  {
    id: 32,
    topics: ["jesus-evangelhos"],
    question: "O que Jesus acalmou enquanto estava em um barco com os discípulos?",
    options: ["Uma tempestade", "Uma discussão", "Uma multidão", "Um incêndio"],
    correctAnswer: "Uma tempestade",
    explanation:
      "Jesus repreendeu o vento e o mar, demonstrando autoridade diante dos discípulos assustados.",
    reference: "Marcos 4:35–41",
  },
  {
    id: 33,
    topics: ["personagens"],
    question: "Quem deixou sua terra após receber o chamado para seguir para outro lugar?",
    options: ["Abraão", "Esaú", "Saul", "Neemias"],
    correctAnswer: "Abraão",
    explanation:
      "Abraão deixou sua terra e seus parentes, confiando na direção e na promessa de Deus.",
    reference: "Gênesis 12:1–9",
  },
  {
    id: 34,
    topics: ["personagens"],
    question: "Qual era o nome da sogra de Rute?",
    options: ["Noemi", "Miriã", "Ana", "Raquel"],
    correctAnswer: "Noemi",
    explanation:
      "Rute decidiu permanecer com Noemi e acompanhá-la em seu retorno a Belém.",
    reference: "Rute 1",
  },
  {
    id: 35,
    topics: ["personagens"],
    question: "Quem ouviu seu nome ser chamado durante a noite quando ainda era menino?",
    options: ["Samuel", "Davi", "Josias", "Timóteo"],
    correctAnswer: "Samuel",
    explanation:
      "Samuel ouviu o chamado durante a noite e recebeu orientação do sacerdote Eli sobre como responder.",
    reference: "1 Samuel 3",
  },
  {
    id: 36,
    topics: ["personagens"],
    question: "Qual rei pediu sabedoria para governar o povo?",
    options: ["Salomão", "Saul", "Acabe", "Ezequias"],
    correctAnswer: "Salomão",
    explanation:
      "Salomão pediu entendimento para julgar o povo, e seu pedido foi recebido com agrado.",
    reference: "1 Reis 3:5–15",
  },
  {
    id: 37,
    topics: ["personagens"],
    question: "Qual profeta enfrentou os profetas de Baal no monte Carmelo?",
    options: ["Elias", "Eliseu", "Isaías", "Jeremias"],
    correctAnswer: "Elias",
    explanation:
      "Elias reuniu o povo no monte Carmelo e confrontou os profetas de Baal.",
    reference: "1 Reis 18",
  },
  {
    id: 38,
    topics: ["personagens"],
    question: "Quem sucedeu Elias em seu ministério profético?",
    options: ["Eliseu", "Amós", "Oséias", "Miquéias"],
    correctAnswer: "Eliseu",
    explanation:
      "Eliseu acompanhou Elias e continuou seu ministério depois que seu mestre foi levado.",
    reference: "2 Reis 2",
  },
  {
    id: 39,
    topics: ["personagens"],
    question: "Qual mulher exerceu a função de juíza em Israel?",
    options: ["Débora", "Rute", "Abigail", "Sara"],
    correctAnswer: "Débora",
    explanation:
      "Débora era profetisa e julgava Israel, além de orientar Baraque em um momento de conflito.",
    reference: "Juízes 4",
  },
  {
    id: 40,
    topics: ["personagens"],
    question: "Qual mulher comerciante de púrpura acolheu Paulo em Filipos?",
    options: ["Lídia", "Priscila", "Dorcas", "Febe"],
    correctAnswer: "Lídia",
    explanation:
      "Lídia ouviu a mensagem anunciada por Paulo, foi batizada e abriu sua casa aos missionários.",
    reference: "Atos 16:11–15",
  },
  {
    id: 41,
    topics: ["personagens"],
    question: "Qual discípulo recebeu dos apóstolos um nome que significa filho da consolação?",
    options: ["Barnabé", "Silas", "Estêvão", "Filipe"],
    correctAnswer: "Barnabé",
    explanation:
      "José, um levita de Chipre, recebeu dos apóstolos o nome Barnabé, associado ao encorajamento.",
    reference: "Atos 4:36–37",
  },
  {
    id: 42,
    topics: ["personagens"],
    question: "Quem subiu em uma árvore para conseguir ver Jesus?",
    options: ["Zaqueu", "Nicodemos", "Bartimeu", "Jairo"],
    correctAnswer: "Zaqueu",
    explanation:
      "Por ser de baixa estatura, Zaqueu subiu em uma árvore para ver Jesus quando ele passava por Jericó.",
    reference: "Lucas 19:1–10",
  },
];
