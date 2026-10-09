import { quizQuestionExpansions } from "./quizQuestionExpansions";
import { quizQuestionJourneyThree } from "./quizQuestionJourneyThree";

export type QuizTopicId =
  | "geral"
  | "antigo-testamento"
  | "jesus-evangelhos"
  | "personagens"
  | "mulheres-da-biblia"
  | "parabolas-de-jesus"
  | "lugares-da-biblia"
  | "igreja-primitiva";

export type QuizQuestion = {
  id: number;
  topics: QuizTopicId[];
  journey?: QuizJourney;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  reference: string;
};

export type QuizJourney = 1 | 2 | 3;

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    topics: ["antigo-testamento"],
    question: "Quem construiu a arca para sobreviver ao dilúvio?",
    options: ["Moisés", "Noé", "Abraão", "Davi"],
    correctAnswer: "Noé",
    explanation:
      "Deus dirige a Noé as instruções para construir a arca, com dimensões, compartimentos e provisões. O trecho termina afirmando que Noé fez conforme o que lhe foi ordenado. A arca é destinada a abrigar sua família e os animais; a resposta se apoia no destinatário das instruções e em sua execução.",
    reference: "Gênesis 6:13-22",
  },
  {
    id: 2,
    topics: ["geral"],
    question: "Qual é o primeiro livro da Bíblia?",
    options: ["Êxodo", "Salmos", "Gênesis", "Mateus"],
    correctAnswer: "Gênesis",
    explanation:
      "Gênesis é o primeiro livro na organização usual das Bíblias cristãs; essa posição pode ser conferida no índice da sua edição e não indica necessariamente a ordem de escrita dos livros. A passagem indicada apresenta o início do relato da criação, não a posição do livro no índice.",
    reference: "Gênesis 1:1-5",
  },
  {
    id: 3,
    topics: ["antigo-testamento"],
    question: "Quem recebeu os Dez Mandamentos no monte Sinai?",
    options: ["Josué", "Moisés", "Elias", "Samuel"],
    correctAnswer: "Moisés",
    explanation:
      "Êxodo 31:18 identifica Moisés como quem recebe as duas tábuas no Sinai. Deuteronômio 10 recorda as tábuas substituídas após a quebra das primeiras e menciona expressamente os Dez Mandamentos. Essas passagens distinguem a entrega das tábuas da apresentação dos mandamentos ao povo em Êxodo 20.",
    reference: "Êxodo 31:18; Deuteronômio 10:1-5",
  },
  {
    id: 4,
    topics: ["antigo-testamento"],
    question: "Quem derrotou o gigante Golias?",
    options: ["Sansão", "Saul", "Davi", "Jônatas"],
    correctAnswer: "Davi",
    explanation:
      "Davi declara que vai ao encontro do filisteu em nome do Senhor, enquanto seu adversário traz armas. Em seguida, lança uma pedra com a funda; o versículo 50 resume que venceu sem ter uma espada na mão. O trecho identifica tanto o personagem quanto o instrumento usado naquele confronto.",
    reference: "1 Samuel 17:45-50",
  },
  {
    id: 5,
    topics: ["jesus-evangelhos"],
    question: "Em qual cidade Jesus nasceu?",
    options: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"],
    correctAnswer: "Belém",
    explanation:
      "Mateus identifica Belém da Judeia como o lugar onde Jesus nasceu. Os magos chegam a Jerusalém procurando o rei dos judeus, e a resposta dada a Herodes aponta para Belém com base na profecia citada. Jerusalém é o local da consulta nessa cena, não a cidade do nascimento.",
    reference: "Mateus 2:1-6",
  },
  {
    id: 6,
    topics: ["jesus-evangelhos"],
    question: "Segundo Marcos 3, quantos Jesus constituiu para estarem com ele e serem enviados a pregar?",
    options: ["7", "10", "12", "40"],
    correctAnswer: "12",
    explanation:
      "Marcos relata que Jesus constituiu doze para estarem com ele e serem enviados a pregar, e depois apresenta seus nomes. Esse número se refere ao grupo dos doze, não ao total de pessoas que seguiram Jesus durante seu ministério.",
    reference: "Marcos 3:13-19",
  },
  {
    id: 7,
    topics: ["antigo-testamento"],
    question: "Quem foi lançado na cova dos leões?",
    options: ["Daniel", "José", "Jonas", "Paulo"],
    correctAnswer: "Daniel",
    explanation:
      "Daniel continua sua prática de oração apesar do decreto e é denunciado. Depois de ser lançado na cova, relata ao rei que Deus enviou um anjo para fechar a boca dos leões; ele é retirado sem dano. O relato descreve esse episódio específico, não uma promessa de que toda situação de perigo terá o mesmo desfecho.",
    reference: "Daniel 6:10-13; Daniel 6:16-23",
  },
  {
    id: 8,
    topics: ["antigo-testamento"],
    question: "Qual profeta foi engolido por um grande peixe?",
    options: ["Isaías", "Jeremias", "Jonas", "Amós"],
    correctAnswer: "Jonas",
    explanation:
      "Depois de Jonas ser lançado ao mar, o texto diz que o Senhor preparou um grande peixe para engoli-lo e que ele permaneceu ali três dias e três noites. A passagem não identifica a espécie do animal. Por isso, a pergunta usa grande peixe, sem acrescentar uma classificação que o relato não fornece.",
    reference: "Jonas 1:15-17",
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
      "Ao responder a um especialista da Lei, Jesus apresenta amar a Deus de todo o coração, alma e entendimento como o primeiro e grande mandamento. Em seguida, acrescenta o amor ao próximo como a si mesmo e afirma que desses dois dependem a Lei e os Profetas. A pergunta destaca o primeiro, sem excluir o segundo.",
    reference: "Mateus 22:34-40",
  },
  {
    id: 10,
    topics: ["jesus-evangelhos"],
    question: "Quem negou conhecer Jesus três vezes?",
    options: ["João", "Tomé", "Pedro", "Filipe"],
    correctAnswer: "Pedro",
    explanation:
      "No pátio da casa do sumo sacerdote, Pedro nega conhecer Jesus e fazer parte de seus seguidores. O galo canta enquanto ele ainda fala; Pedro se lembra da previsão de Jesus e sai chorando. Lucas apresenta a sequência das três negações e a reação de Pedro, não apenas seu nome.",
    reference: "Lucas 22:54-62",
  },
  {
    id: 11,
    topics: ["geral"],
    question: "Qual é o último livro do Novo Testamento?",
    options: ["Judas", "Hebreus", "Atos", "Apocalipse"],
    correctAnswer: "Apocalipse",
    explanation:
      "Apocalipse é o último livro do Novo Testamento na organização usual das Bíblias cristãs. Confira essa posição no índice da sua edição. A abertura do livro apresenta a revelação de Jesus Cristo e menciona quem lê, ouve e guarda suas palavras; esses versículos contextualizam o conteúdo, mas não estabelecem a ordem dos livros.",
    reference: "Apocalipse 1:1-3",
  },
  {
    id: 12,
    topics: ["geral"],
    question: "Quem escreveu muitas cartas presentes no Novo Testamento?",
    options: ["Paulo", "Nicodemos", "Zaqueu", "Timóteo"],
    correctAnswer: "Paulo",
    explanation:
      "Paulo se identifica na abertura de cartas como Romanos e 1 Coríntios, dirigidas a comunidades cristãs. Romanos 1:1-7 apresenta seu nome e os destinatários em Roma. Isso não significa que todas as cartas do Novo Testamento sejam de Paulo; há outros autores e destinatários.",
    reference: "Romanos 1:1-7",
  },
  {
    id: 13,
    topics: ["antigo-testamento"],
    question: "Qual rainha arriscou a própria vida para defender seu povo?",
    options: ["Ester", "Jezabel", "Bate-Seba", "Mical"],
    correctAnswer: "Ester",
    explanation:
      "Ester explica que entrar sem ser chamada podia custar a vida, a menos que o rei estendesse o cetro. Decide apresentar-se após pedir um jejum; no capítulo seguinte, o rei a recebe. Os dois trechos mostram o risco e sua decisão em favor dos judeus, antes dos pedidos e acontecimentos posteriores.",
    reference: "Ester 4:10-16; Ester 5:1-3",
  },
  {
    id: 14,
    topics: ["antigo-testamento"],
    question: "Quem foi vendido pelos irmãos e tornou-se governador no Egito?",
    options: ["José", "Benjamim", "Isaque", "Calebe"],
    correctAnswer: "José",
    explanation:
      "Gênesis 37 registra a venda de José e sua ida ao Egito. Anos depois, em Gênesis 41, o faraó o coloca sobre a administração do país, mantendo apenas o trono acima dele. As duas referências mostram etapas diferentes de sua história; a nomeação não acontece imediatamente após a venda.",
    reference: "Gênesis 37:26-28; Gênesis 41:39-43",
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
      "Em um casamento em Caná da Galileia, falta vinho e Jesus manda os serventes encherem os recipientes com água. O mestre de cerimônia prova a água transformada em vinho. João chama esse episódio de princípio dos sinais, ligando-o à manifestação da glória de Jesus e à fé dos discípulos.",
    reference: "João 2:1-11",
  },
  {
    id: 16,
    topics: ["jesus-evangelhos"],
    question: "Quem batizou Jesus no rio Jordão?",
    options: ["Pedro", "João Batista", "André", "Tiago"],
    correctAnswer: "João Batista",
    explanation:
      "Jesus vai ao Jordão para ser batizado por João. Embora João inicialmente questione o pedido, Jesus o orienta a permitir o batismo. Depois, Mateus descreve o Espírito descendo como uma pomba e uma voz dos céus. João Batista é quem batiza, não um dos discípulos chamados João.",
    reference: "Mateus 3:13-17",
  },
  {
    id: 17,
    topics: ["jesus-evangelhos"],
    question: "Em Mateus 5, as bem-aventuranças abrem qual sermão?",
    options: [
      "Sermão do Monte",
      "Discurso do Cenáculo",
      "Sermão de Nazaré",
      "Discurso do Templo",
    ],
    correctAnswer: "Sermão do Monte",
    explanation:
      "Mateus descreve Jesus subindo a um monte, sentando-se e ensinando seus discípulos. As bem-aventuranças aparecem no início do conjunto conhecido como Sermão do Monte. A pergunta se refere ao relato de Mateus, evitando confundi-lo com outras cenas de ensino nos Evangelhos.",
    reference: "Mateus 5:1-12",
  },
  {
    id: 18,
    topics: ["jesus-evangelhos"],
    question: "Segundo João 20:1-2, quem viu a pedra removida do túmulo e foi avisar Pedro e outro discípulo?",
    options: ["Maria Madalena", "Marta", "Isabel", "Lídia"],
    correctAnswer: "Maria Madalena",
    explanation:
      "Maria Madalena chega de madrugada, vê a pedra retirada e corre para avisar Pedro e o outro discípulo. Nesse primeiro aviso, diz que levaram o Senhor e que não sabe onde o colocaram; ainda não anuncia que viu Jesus ressuscitado. O relato distingue essa descoberta inicial dos acontecimentos posteriores.",
    reference: "João 20:1-9",
  },
  {
    id: 19,
    topics: ["geral"],
    question: "Qual livro vem imediatamente depois dos quatro Evangelhos?",
    options: ["Romanos", "Atos", "Hebreus", "Apocalipse"],
    correctAnswer: "Atos",
    explanation:
      "Na organização usual do Novo Testamento, Atos vem depois de João, o quarto Evangelho; confira essa posição no índice da sua edição. Sua abertura retoma o relato sobre Jesus e anuncia o testemunho dos discípulos de Jerusalém até lugares distantes. A passagem explica essa continuidade, não a ordem editorial dos livros.",
    reference: "Atos 1:1-8",
  },
  {
    id: 20,
    topics: ["geral"],
    question: "Na numeração usada neste quiz, qual livro da Bíblia possui 150 capítulos?",
    options: ["Provérbios", "Isaías", "Salmos", "Jeremias"],
    correctAnswer: "Salmos",
    explanation:
      "Salmos reúne 150 salmos na numeração da edição utilizada pelo quiz. Há diferenças de numeração entre tradições; consulte o índice da sua edição para a contagem. O Salmo 150 encerra essa sequência com um convite ao louvor e a menção de instrumentos. A passagem exemplifica o encerramento, não lista os 150 salmos.",
    reference: "Salmos 150:1-6",
  },
  {
    id: 21,
    topics: ["geral"],
    question: "Como são conhecidos os cinco primeiros livros da Bíblia?",
    options: ["Evangelhos", "Pentateuco", "Profetas Menores", "Cartas Gerais"],
    correctAnswer: "Pentateuco",
    explanation:
      "Pentateuco é o nome dado ao conjunto de Gênesis, Êxodo, Levítico, Números e Deuteronômio. Confira os cinco títulos no índice. A leitura indicada é um trecho de Deuteronômio sobre recordar e ensinar as palavras recebidas; exemplifica um desses livros, mas não define o nome do conjunto.",
    reference: "Deuteronômio 6:4-9",
  },
  {
    id: 22,
    topics: ["geral"],
    question: "Qual carta aparece logo depois do livro de Atos?",
    options: ["Romanos", "Gálatas", "Hebreus", "Tiago"],
    correctAnswer: "Romanos",
    explanation:
      "Romanos aparece imediatamente depois de Atos na organização usual do Novo Testamento. Essa é uma informação do índice, não uma afirmação sobre qual carta foi escrita primeiro. A abertura identifica Paulo e os destinatários em Roma, ajudando a reconhecer o livro e seu formato de carta.",
    reference: "Romanos 1:1-7",
  },
  {
    id: 23,
    topics: ["geral"],
    question: "Mateus, Marcos, Lucas e João formam qual conjunto de livros?",
    options: ["Evangelhos", "Livros Poéticos", "Pentateuco", "Cartas Paulinas"],
    correctAnswer: "Evangelhos",
    explanation:
      "Mateus, Marcos, Lucas e João são os quatro Evangelhos do Novo Testamento. Apresentam relatos sobre Jesus, com seleções e ênfases próprias, e não precisam registrar todos os mesmos episódios. João 20:30-31 explica que o livro seleciona sinais com o propósito de levar seus leitores a crer em Jesus.",
    reference: "João 20:30-31",
  },
  {
    id: 24,
    topics: ["geral"],
    question: "Qual livro aparece imediatamente antes de Apocalipse?",
    options: ["Hebreus", "Judas", "3 João", "Tiago"],
    correctAnswer: "Judas",
    explanation:
      "Judas aparece imediatamente antes de Apocalipse na organização usual do Novo Testamento; confira a sequência no índice. Sua abertura identifica Judas como servo de Jesus Cristo e irmão de Tiago. A pergunta trata da posição da carta, não de identificar o autor com outra pessoa de mesmo nome.",
    reference: "Judas 1:1-3",
  },
  {
    id: 25,
    topics: ["geral"],
    question: "Qual livro é conhecido por reunir muitos ensinamentos práticos de sabedoria?",
    options: ["Provérbios", "Levítico", "Atos", "Ezequiel"],
    correctAnswer: "Provérbios",
    explanation:
      "A abertura de Provérbios apresenta o propósito de conhecer a sabedoria, compreender a instrução e desenvolver discernimento. O livro reúne ensinamentos práticos em formas breves. Reconhecer esse propósito não significa transformar cada provérbio em garantia automática de resultado, sem observar a situação e o contexto.",
    reference: "Provérbios 1:1-7",
  },
  {
    id: 26,
    topics: ["geral"],
    question: "Em qual parte da Bíblia encontramos o livro de Atos?",
    options: ["Antigo Testamento", "Novo Testamento", "Livros Poéticos", "Pentateuco"],
    correctAnswer: "Novo Testamento",
    explanation:
      "Atos integra o Novo Testamento, como mostra o índice da edição. Na abertura, Jesus se apresenta vivo aos discípulos depois de seu sofrimento e fala sobre o testemunho que eles darão. Esse ponto de partida situa o relato; não é necessário ler os 28 capítulos para conferir a divisão em que o livro aparece.",
    reference: "Atos 1:1-8",
  },
  {
    id: 27,
    topics: ["antigo-testamento"],
    question: "Qual alimento apareceu no deserto para sustentar os israelitas?",
    options: ["Maná", "Uvas", "Lentilhas", "Figos"],
    correctAnswer: "Maná",
    explanation:
      "Os israelitas chamam de maná o alimento recebido no deserto. O relato orienta recolhê-lo durante seis dias e guardar a porção do sexto para o sétimo, quando não seria encontrado no campo. Por isso, dizer apenas que aparecia diariamente deixaria de fora uma distinção explícita da passagem.",
    reference: "Êxodo 16:23-31",
  },
  {
    id: 28,
    topics: ["antigo-testamento"],
    question: "Sob a liderança de quem os israelitas cercaram Jericó?",
    options: ["Josué", "Arão", "Gideão", "Neemias"],
    correctAnswer: "Josué",
    explanation:
      "O Senhor dá a Josué as instruções para rodear Jericó; Josué as transmite aos sacerdotes e ao povo. O plano distingue uma volta por dia durante seis dias e sete voltas no sétimo. A pergunta identifica quem lidera essa ação, não apenas quem carrega a arca ou toca as trombetas.",
    reference: "Josué 6:1-7",
  },
  {
    id: 29,
    topics: ["antigo-testamento"],
    question: "Com quantos homens Gideão enfrentou o exército midianita?",
    options: ["100", "300", "1.000", "12.000"],
    correctAnswer: "300",
    explanation:
      "O grupo de Gideão é reduzido em etapas até restarem trezentos homens. O próprio texto explica que a redução impede Israel de atribuir a vitória apenas à sua força. Trezentos é o grupo escolhido ao final da seleção, não o número de pessoas que inicialmente se apresentaram.",
    reference: "Juízes 7:2-7",
  },
  {
    id: 30,
    topics: ["jesus-evangelhos"],
    question: "Na parábola de Jesus, quem ajudou o homem ferido na estrada?",
    options: ["Um sacerdote", "Um levita", "Um samaritano", "Um soldado"],
    correctAnswer: "Um samaritano",
    explanation:
      "Na parábola, o sacerdote e o levita passam longe, enquanto o samaritano se compadece, cuida das feridas e leva o homem a uma hospedaria. Ao final, Jesus pergunta quem foi o próximo do ferido; a resposta destaca quem agiu com misericórdia. Trata-se de uma personagem da parábola, não de um ajudante nomeado no relato.",
    reference: "Lucas 10:30-37",
  },
  {
    id: 31,
    topics: ["jesus-evangelhos"],
    question: "Em Mateus 14:13-21, quantos pães e peixes os discípulos tinham para alimentar a multidão?",
    options: ["Cinco pães e dois peixes", "Dois pães e cinco peixes", "Sete pães e um peixe", "Doze pães e dois peixes"],
    correctAnswer: "Cinco pães e dois peixes",
    explanation:
      "Os discípulos dizem que têm cinco pães e dois peixes. Jesus toma esses alimentos, e os discípulos os distribuem à multidão; depois recolhem doze cestos de sobras. Cinco e dois são as quantidades iniciais desta passagem, não o número de cestos recolhidos nem os alimentos de outro episódio.",
    reference: "Mateus 14:13-21",
  },
  {
    id: 32,
    topics: ["jesus-evangelhos"],
    question: "O que Jesus acalmou enquanto estava em um barco com os discípulos?",
    options: ["Uma tempestade", "Uma discussão", "Uma multidão", "Um incêndio"],
    correctAnswer: "Uma tempestade",
    explanation:
      "Durante a travessia, uma tempestade faz as ondas entrarem no barco enquanto Jesus dorme. Os discípulos o despertam; ele repreende o vento e manda o mar se aquietar. A calmaria leva os discípulos a perguntar quem ele é, pois até o vento e o mar lhe obedecem.",
    reference: "Marcos 4:35-41",
  },
  {
    id: 33,
    topics: ["personagens"],
    question: "Em Gênesis 12, quem partiu após receber o chamado para ir à terra que Deus mostraria?",
    options: ["Abraão", "Esaú", "Saul", "Neemias"],
    correctAnswer: "Abraão",
    explanation:
      "Nesta passagem, Abraão ainda aparece com o nome Abrão. O Senhor lhe ordena partir, e o relato registra sua saída de Harã rumo a Canaã com Sarai, Ló e seus bens. Não se trata de uma viagem solitária; o trecho relaciona o chamado à partida e à promessa recebida.",
    reference: "Gênesis 12:1-5",
  },
  {
    id: 34,
    topics: ["personagens"],
    question: "Qual era o nome da sogra de Rute?",
    options: ["Noemi", "Miriã", "Ana", "Raquel"],
    correctAnswer: "Noemi",
    explanation:
      "Rute se casou com um dos filhos de Noemi e ficou viúva, assim como sua cunhada Orfa. Quando Noemi decide retornar, Rute permanece com ela e declara que seguirá seu caminho. Os trechos identificam a relação de sogra e nora e mostram a decisão de Rute de acompanhá-la.",
    reference: "Rute 1:3-5; Rute 1:14-18",
  },
  {
    id: 35,
    topics: ["personagens"],
    question: "Quem ouviu seu nome ser chamado durante a noite quando ainda era menino?",
    options: ["Samuel", "Davi", "Josias", "Timóteo"],
    correctAnswer: "Samuel",
    explanation:
      "Samuel pensa inicialmente que Eli o chamou e vai até ele mais de uma vez. Eli percebe que é o Senhor quem chama o jovem e o orienta a responder que está ouvindo. O episódio distingue quem recebe o chamado de quem ajuda a reconhecê-lo.",
    reference: "1 Samuel 3:1-10",
  },
  {
    id: 36,
    topics: ["personagens"],
    question: "Qual rei pediu sabedoria para governar o povo?",
    options: ["Salomão", "Saul", "Acabe", "Ezequias"],
    correctAnswer: "Salomão",
    explanation:
      "Em um sonho, Salomão recebe a oportunidade de pedir algo a Deus. Pede um coração com entendimento para julgar o povo e discernir entre o bem e o mal. O relato contrasta esse pedido com riquezas, vida longa e morte dos inimigos, destacando a responsabilidade de governar.",
    reference: "1 Reis 3:5-12",
  },
  {
    id: 37,
    topics: ["personagens"],
    question: "Qual profeta enfrentou os profetas de Baal no monte Carmelo?",
    options: ["Elias", "Eliseu", "Isaías", "Jeremias"],
    correctAnswer: "Elias",
    explanation:
      "Elias solicita a reunião no Carmelo e pergunta ao povo a quem seguirá: ao Senhor ou a Baal. Propõe que cada lado prepare uma oferta sem acender fogo e invoque seu Deus. O trecho identifica Elias como quem apresenta o confronto; Eliseu pertence a outros episódios do ministério profético.",
    reference: "1 Reis 18:19-24",
  },
  {
    id: 38,
    topics: ["personagens"],
    question: "Quem sucedeu Elias em seu ministério profético?",
    options: ["Eliseu", "Amós", "Oséias", "Miquéias"],
    correctAnswer: "Eliseu",
    explanation:
      "Eliseu acompanha Elias, recolhe o manto que fica após sua partida e atravessa o Jordão. Os outros profetas reconhecem que o espírito de Elias repousa sobre Eliseu. Esses acontecimentos mostram a continuidade do ministério e ajudam a distinguir os dois nomes parecidos.",
    reference: "2 Reis 2:9-15",
  },
  {
    id: 39,
    topics: ["personagens"],
    question: "Qual mulher exerceu a função de juíza em Israel?",
    options: ["Débora", "Rute", "Abigail", "Sara"],
    correctAnswer: "Débora",
    explanation:
      "Juízes apresenta Débora como profetisa e descreve os israelitas indo até ela para julgamento, debaixo de sua palmeira. Ela também chama Baraque e transmite a orientação sobre reunir homens. A resposta vem da função atribuída a Débora no relato, não apenas de sua participação no conflito.",
    reference: "Juízes 4:4-7",
  },
  {
    id: 40,
    topics: ["personagens"],
    question: "Qual mulher comerciante de púrpura acolheu Paulo em Filipos?",
    options: ["Lídia", "Priscila", "Dorcas", "Febe"],
    correctAnswer: "Lídia",
    explanation:
      "Lídia é apresentada como vendedora de púrpura, natural de Tiatira. O encontro com Paulo e seus companheiros ocorre em Filipos, onde ela ouve a mensagem e os convida a ficar em sua casa após o batismo. Tiatira indica sua origem; Filipos situa este episódio.",
    reference: "Atos 16:11-15",
  },
  {
    id: 41,
    topics: ["personagens"],
    question: "Qual discípulo recebeu dos apóstolos um nome que significa filho da consolação?",
    options: ["Barnabé", "Silas", "Estêvão", "Filipe"],
    correctAnswer: "Barnabé",
    explanation:
      "Atos identifica um José, levita de Chipre, a quem os apóstolos chamam Barnabé, traduzido na edição utilizada como filho da consolação. Em seguida, relata a venda de uma propriedade e a entrega do valor aos apóstolos. Esse José não é o personagem da história do Egito em Gênesis.",
    reference: "Atos 4:36-37",
  },
  {
    id: 42,
    topics: ["personagens"],
    question: "Quem subiu em uma árvore para conseguir ver Jesus?",
    options: ["Zaqueu", "Nicodemos", "Bartimeu", "Jairo"],
    correctAnswer: "Zaqueu",
    explanation:
      "Zaqueu, chefe dos publicanos em Jericó, procura ver Jesus, mas a multidão e sua baixa estatura dificultam a visão. Corre adiante e sobe em uma árvore; Jesus o chama pelo nome e diz que ficará em sua casa. O trecho explica tanto a iniciativa de subir quanto o encontro que se segue.",
    reference: "Lucas 19:1-6",
  },
  ...quizQuestionExpansions,
  ...quizQuestionJourneyThree,
];
