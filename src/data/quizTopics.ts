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
      "O Quiz Bíblico Geral mistura perguntas sobre livros, personagens, acontecimentos e ensinamentos. Diferentemente de uma rodada dedicada a um único período, aqui você alterna entre o Antigo e o Novo Testamento. O objetivo é reconhecer o assunto de cada pergunta e localizar a informação, não avaliar a fé de quem joga.",
      "Há perguntas de organização, como identificar o primeiro livro da Bíblia, e perguntas de leitura, como reconhecer a resposta de Jesus sobre o maior mandamento. No primeiro caso, consulte o índice da sua edição; no segundo, leia a passagem indicada. Um versículo que apresenta um livro não demonstra, por si só, a posição desse livro no índice.",
      "Os três exemplos abaixo já mostram respostas, explicações e fontes. Durante o jogo, a correção aparece após escolher uma alternativa. Você pode jogar de memória ou consultar a Bíblia; em grupo, combine isso antes de começar para que todos usem a mesma regra. Se houver dúvida, reserve tempo para ler o contexto em vez de apressar a próxima resposta.",
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
      "Relacione personagens e acontecimentos do Antigo Testamento, com perguntas sobre patriarcas, êxodo, reis e profetas, respostas comentadas e referências.",
    introduction: [
      "Quem recebe as tábuas da Lei, quem acompanha a saída de Harã e quem reconstrói o muro de Jerusalém? Este tema relaciona pessoas, lugares e ações em relatos do Antigo Testamento. As jornadas passam por Noé e os patriarcas, Moisés e o êxodo, juízes, reis e profetas. O desafio é reconhecer o episódio, não tratar histórias de épocas diferentes como se fossem uma só.",
      "Algumas pistas ajudam mais que um nome isolado. Moisés e Josué participam de travessias, mas o mar de Êxodo 14 não é o Jordão de Josué 3. Salomão e Neemias aparecem ligados a obras, mas construir o templo não é reconstruir o muro. Os exemplos de leitura abaixo mostram como ligar a pessoa à ação e ao trecho que confirma a resposta.",
      "Uma resposta correta pode identificar um personagem sem explicar toda a história. Ao reler a passagem, observe quem faz o pedido, quem responde e o que realmente acontece. Se o texto registra uma orientação ou promessa, não acrescente automaticamente um resultado que ele não narra. Esse cuidado também evita transformar um acontecimento particular em garantia para qualquer situação atual.",
    ],
    highlights: [
      "Patriarcas, êxodo, juízes, reis e profetas em episódios identificáveis.",
      "Pistas de pessoas, lugares e ações para distinguir histórias parecidas.",
      "Respostas comentadas e referências para conferir a narrativa.",
    ],
  },
  {
    id: "jesus-evangelhos",
    label: "Jesus e Evangelhos",
    path: "/quiz-biblico/jesus-e-evangelhos",
    eyebrow: "Desafio por tema",
    title: "Quiz sobre Jesus e os Evangelhos",
    description:
      "Explore o nascimento, os encontros, os ensinamentos e a ressurreição de Jesus em perguntas comentadas, com referências de Mateus, Marcos, Lucas e João.",
    introduction: [
      "Onde Jesus foi encontrado aos doze anos, quem pediu ajuda para a filha e qual discípulo deveria procurar uma moeda num peixe? As perguntas deste tema percorrem o nascimento, os encontros, os ensinamentos, a crucificação e a ressurreição. Pessoas, lugares e falas ajudam a reconhecer cada cena, sem exigir que você complete o relato com detalhes que ele não apresenta.",
      "Mateus, Marcos, Lucas e João não são quatro cópias com os mesmos episódios e palavras. Quando a pergunta identifica um Evangelho, essa referência delimita a resposta. Em Marcos 5:22-24, por exemplo, Jairo pede ajuda para a filha que está a ponto de morrer; a notícia de sua morte chega depois, em Marcos 5:35-43. O momento da cena muda o que se pode afirmar.",
      "Reconhecer um nome é um começo, mas acompanhar a sequência evita confusões. Uma orientação de Jesus pode aparecer sem que sua execução seja narrada; uma pessoa pode primeiro não entender o que aconteceu e só depois anunciar uma descoberta. Os exemplos abaixo mostram essas diferenças em trechos específicos, sem tentar resolver todas as questões de interpretação dos Evangelhos.",
    ],
    highlights: [
      "Nascimento, encontros, ensinamentos, cruz e ressurreição.",
      "Pessoas, lugares e sequência das cenas nos quatro Evangelhos.",
      "Respostas comentadas com referências do relato indicado.",
    ],
  },
  {
    id: "personagens",
    label: "Personagens bíblicos",
    path: "/quiz-biblico/personagens-biblicos",
    eyebrow: "Desafio por tema",
    title: "Quiz de personagens bíblicos",
    description:
      "Reconheça personagens do Antigo e do Novo Testamento por seus nomes, relações familiares e ações, com respostas comentadas e referências bíblicas.",
    introduction: [
      "Quem é o bisavô de Davi, qual artesão trabalha no tabernáculo e quem apresenta Saulo aos apóstolos? As jornadas deste tema passam por famílias, reis, profetas, artesãos e discípulos do Antigo e do Novo Testamento. O nome é uma pista, mas a ação e as pessoas ao redor ajudam a reconhecer de qual personagem a pergunta trata.",
      "Um nome igual não significa uma pessoa igual: o José colocado sobre o Egito não é o José chamado Barnabé em Atos. O contrário também acontece: Tabita e Dorcas são dois nomes da mesma discípula. Antes de juntar duas histórias, compare o livro, o lugar e a relação que o trecho informa.",
      "Parentesco e função também mudam a resposta. Na família de Davi, pai, avô e bisavô são pessoas diferentes; numa leitura pública da Lei, o escriba, o governador e os que explicam ao povo têm papéis distintos. Os exemplos abaixo mostram como conferir essas relações. Uma atitude narrada não resume toda a vida de alguém nem torna um personagem um modelo perfeito.",
    ],
    highlights: [
      "Famílias, líderes, artesãos e discípulos em episódios dos dois Testamentos.",
      "Nomes, parentescos e ações para distinguir personagens.",
      "Respostas comentadas e passagens para conferir cada identificação.",
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
      "Quem acompanha Noemi, quem exerce a função de juíza e quem anuncia que viu Jesus? Este tema reúne mulheres de famílias, cidades e períodos diferentes. As perguntas pedem nomes, relações e ações identificáveis nos relatos, sem reunir todas as personagens em um único modelo de comportamento.",
      "Rute e Noemi participam da mesma história, mas têm relações diferentes com Obede. Débora e Ester atuam em situações decisivas, mas não desempenham a mesma função. Já Maria Madalena deve ser distinguida de outras mulheres chamadas Maria. Os exemplos abaixo mostram como usar parentesco, identificação e contexto para conferir uma resposta.",
      "As referências permitem comparar a alternativa com o que a passagem realmente informa. Não é necessário preencher silêncios do narrador com suposições sobre idade, aparência ou sentimentos. Em grupo, consulte o texto antes de resolver uma dúvida; uma resposta errada no jogo não é uma avaliação da pessoa nem de sua fé.",
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
      "Quem se aproxima do homem ferido, qual filho atende ao pedido do pai e o que acontece com o plano do homem rico? As jornadas exploram personagens, objetos, falas e desfechos de parábolas de Jesus. O desafio se concentra nesses elementos narrados; acertar uma alternativa não encerra a interpretação da história.",
      "Observe primeiro a pergunta ou situação que levou Jesus a contar o relato. O bom samaritano aparece em uma conversa sobre o próximo; as histórias de Lucas 15 vêm depois de uma reclamação sobre receber pecadores. Esse contexto ajuda a perceber a relação entre a narrativa e seus ouvintes, em vez de procurar significados secretos para cada objeto.",
      "Intenção e ação podem divergir: na parábola dos dois filhos, uma recusa inicial não é a última atitude do personagem. Leia o desfecho antes de concluir. As explicações do jogo indicam a resposta pedida e uma referência; os exemplos comentados desta página permanecem disponíveis sem precisar completar uma rodada.",
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
      "Harã é ponto de partida ou destino? Jerusalém é onde ocorre a cena ou o lugar para onde alguém está indo? Este tema relaciona cidades, rios, montes e regiões a acontecimentos, sem exigir coordenadas ou identificações arqueológicas modernas.",
      "O mesmo lugar pode aparecer em viagens diferentes. Abrão sai de Harã em Gênesis 12, enquanto Jacó segue para lá em Gênesis 28. Identificar o viajante, a direção e a etapa da história ajuda mais que decorar nomes de cidades isolados. Os exemplos abaixo também distinguem a travessia pelo mar da chegada ao Sinai.",
      "Nem toda lista de regiões é um itinerário: Atos 1:8 descreve o alcance do testemunho; Atos 13 narra uma partida concreta. As referências do jogo delimitam qual informação está sendo perguntada. Quando uma edição usa grafia diferente para um lugar, compare o episódio e o livro antes de concluir que se trata de outro local.",
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
      "O que os ouvintes percebem no Pentecostes, por que sete pessoas são escolhidas em Atos 6 e de onde Barnabé e Saulo partem? O tema acompanha principalmente Atos, com perguntas sobre pessoas, viagens, sinais e decisões das primeiras comunidades.",
      "Os episódios não são todos etapas da mesma viagem. O Pentecostes acontece em Jerusalém; a separação de Barnabé e Saulo para a missão ocorre em Antioquia. Mais tarde, uma discussão sobre os gentios leva uma delegação a Jerusalém. Compare motivo, participantes e cidade para reconhecer cada cena.",
      "Também é importante distinguir ações individuais de decisões coletivas. Atos 6 distribui responsabilidades diante de um problema concreto; Atos 15 relata uma discussão e uma carta às comunidades. As respostas comentadas se limitam à informação pedida, sem apresentar esses episódios como uma regra completa para todas as comunidades atuais.",
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
