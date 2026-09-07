export type WhoAmIJourneyId = "known" | "intermediate";

export type WhoAmICharacter = {
  id: string;
  journey: WhoAmIJourneyId;
  name: string;
  clues: string[];
  options: [string, string, string, string];
  explanation: string;
  reference: string;
};

export type WhoAmIJourney = {
  id: WhoAmIJourneyId;
  title: string;
  description: string;
  level: string;
};

export const whoAmIJourneys: WhoAmIJourney[] = [
  {
    id: "known",
    title: "Personagens conhecidos",
    description: "Reconheça pessoas de narrativas conhecidas por detalhes que nem sempre recebem destaque.",
    level: "Fácil a intermediário",
  },
  {
    id: "intermediate",
    title: "Quem é este personagem?",
    description: "Descubra pessoas menos lembradas e observe como elas participaram da narrativa bíblica.",
    level: "Intermediário",
  },
];

export const whoAmICharacters: WhoAmICharacter[] = [
  {
    id: "abigail",
    journey: "known",
    name: "Abigail",
    clues: [
      "Preparei alimentos às pressas para evitar um confronto.",
      "Encontrei Davi no caminho sem contar a meu marido.",
      "Minha prudência impediu que a casa de Nabal sofresse vingança.",
    ],
    options: ["Abigail", "Mical", "Bate-Seba", "Rispa"],
    explanation: "Abigail agiu com iniciativa e palavras prudentes quando soube que a atitude de Nabal havia provocado Davi.",
    reference: "1 Samuel 25:18-35",
  },
  {
    id: "bezalel",
    journey: "known",
    name: "Bezalel",
    clues: [
      "Meu pai se chamava Uri e meu avô, Hur.",
      "Eu pertencia à tribo de Judá.",
      "Aoliabe, da tribo de Dã, foi designado para trabalhar ao meu lado.",
    ],
    options: ["Bezalel", "Hur", "Eleazar", "Calebe"],
    explanation: "Além de sua habilidade artesanal, Bezalel é identificado por sua família e tribo, enquanto Aoliabe foi nomeado como seu colaborador.",
    reference: "Êxodo 31:1-6",
  },
  {
    id: "raabe",
    journey: "known",
    name: "Raabe",
    clues: [
      "Meu nome volta a aparecer muito depois da narrativa de Jericó.",
      "Sou citada entre pessoas cuja fé foi lembrada na carta aos Hebreus.",
      "Na genealogia de Mateus, apareço como mãe de Boaz.",
    ],
    options: ["Raabe", "Débora", "Jael", "Rute"],
    explanation: "O Novo Testamento recorda Raabe por sua fé e também a inclui na genealogia que conduz a Jesus.",
    reference: "Mateus 1:5; Hebreus 11:31",
  },
  {
    id: "neemias",
    journey: "known",
    name: "Neemias",
    clues: [
      "Durante meu governo, alguns líderes cobravam juros de seus irmãos.",
      "Convoquei uma grande reunião para confrontar essa prática.",
      "Abri mão da porção de alimento destinada ao governador para não pesar sobre o povo.",
    ],
    options: ["Neemias", "Esdras", "Zorobabel", "Mordecai"],
    explanation: "Como governador, Neemias enfrentou a exploração econômica interna e renunciou a privilégios para aliviar a carga do povo.",
    reference: "Neemias 5:1-19",
  },
  {
    id: "priscila",
    journey: "known",
    name: "Priscila",
    clues: [
      "Paulo me chamou de cooperadora em Cristo.",
      "Arrisquei a própria vida ao lado de meu marido por causa dele.",
      "Uma comunidade cristã se reunia em nossa casa.",
    ],
    options: ["Priscila", "Lídia", "Dorcas", "Febe"],
    explanation: "Paulo agradeceu a Priscila e Áquila pelo risco que assumiram e saudou a igreja que se reunia na casa do casal.",
    reference: "Romanos 16:3-5",
  },
  {
    id: "timoteo",
    journey: "known",
    name: "Timóteo",
    clues: [
      "Um conselho pessoal que recebi mencionava problemas frequentes de saúde.",
      "Fui orientado a não continuar bebendo somente água.",
      "Paulo recomendou que eu usasse um pouco de vinho por causa do estômago.",
    ],
    options: ["Timóteo", "Tito", "Silas", "Marcos"],
    explanation: "Entre orientações práticas, Paulo aconselhou Timóteo a cuidar de sua saúde por causa de enfermidades frequentes.",
    reference: "1 Timóteo 5:23",
  },
  {
    id: "miriã",
    journey: "known",
    name: "Miriã",
    clues: [
      "Sou apresentada como profetisa.",
      "Conduzi mulheres em uma celebração com instrumentos e danças.",
      "Meu cântico respondeu à travessia do mar pelos israelitas.",
    ],
    options: ["Miriã", "Ana", "Hulda", "Isabel"],
    explanation: "Depois da travessia do mar, Miriã tomou um tamborim e liderou as mulheres em uma celebração.",
    reference: "Êxodo 15:20-21",
  },
  {
    id: "nicodemos",
    journey: "known",
    name: "Nicodemos",
    clues: [
      "Eu era fariseu e autoridade entre os judeus.",
      "Questionei se a lei permitia condenar alguém sem antes ouvi-lo.",
      "Levei uma grande quantidade de aromas para o sepultamento de Jesus.",
    ],
    options: ["Nicodemos", "José de Arimateia", "Gamaliel", "Jairo"],
    explanation: "Nicodemos aparece em três momentos do Evangelho de João: conversando com Jesus, defendendo um julgamento justo e ajudando no sepultamento.",
    reference: "João 3:1-2; 7:50-52; 19:39",
  },
  {
    id: "marta",
    journey: "known",
    name: "Marta",
    clues: [
      "Saí ao encontro de Jesus antes que ele chegasse à aldeia.",
      "Meu irmão estava sepultado havia quatro dias.",
      "Declarei crer que Jesus é o Cristo antes de Lázaro sair do túmulo.",
    ],
    options: ["Marta", "Maria Madalena", "Salomé", "Joana"],
    explanation: "Marta conversou com Jesus sobre ressurreição e esperança antes que ele fosse ao túmulo de Lázaro.",
    reference: "João 11:17-27",
  },
  {
    id: "bartimeu",
    journey: "known",
    name: "Bartimeu",
    clues: [
      "Eu estava sentado à beira do caminho perto de Jericó.",
      "A multidão tentou fazer com que eu me calasse.",
      "Larguei minha capa e fui até Jesus quando ele me chamou.",
    ],
    options: ["Bartimeu", "Jairo", "Zaqueu", "Malco"],
    explanation: "Bartimeu insistiu em chamar por Jesus, deixou sua capa e recuperou a visão.",
    reference: "Marcos 10:46-52",
  },
  {
    id: "simeao",
    journey: "known",
    name: "Simeão",
    clues: [
      "Abençoei uma jovem família que havia levado seu filho ao templo.",
      "Disse que o menino seria sinal de contradição.",
      "Avisei Maria de que uma espada atravessaria sua própria alma.",
    ],
    options: ["Simeão", "Zacarias", "José", "Ananias"],
    explanation: "Simeão abençoou a família e dirigiu a Maria palavras sobre oposição, revelação e a dor que ela enfrentaria.",
    reference: "Lucas 2:25-35",
  },
  {
    id: "tome",
    journey: "known",
    name: "Tomé",
    clues: [
      "Também era chamado Dídimo.",
      "Jesus decidiu voltar à Judeia apesar do perigo que havia ali.",
      "Incentivei os demais discípulos a acompanhá-lo, mesmo que isso significasse morrer com ele.",
    ],
    options: ["Tomé", "Filipe", "André", "Natanael"],
    explanation: "Antes da ida a Betânia, Tomé reagiu ao perigo com disposição de seguir Jesus junto com os outros discípulos.",
    reference: "João 11:7-16",
  },
  {
    id: "eude",
    journey: "intermediate",
    name: "Eúde",
    clues: [
      "Eu pertencia à tribo de Benjamim.",
      "Era canhoto e escondi uma espada curta sob a roupa.",
      "Fui levantado como libertador durante o domínio de Eglom, rei de Moabe.",
    ],
    options: ["Eúde", "Otniel", "Sangar", "Baraque"],
    explanation: "Eúde foi um dos juízes de Israel e liderou a libertação do povo do domínio moabita.",
    reference: "Juízes 3:12-30",
  },
  {
    id: "hulda",
    journey: "intermediate",
    name: "Hulda",
    clues: [
      "Eu vivia em Jerusalém, no bairro novo.",
      "Uma comitiva do rei veio me consultar depois que um livro foi encontrado no templo.",
      "Confirmei a mensagem do livro durante o reinado de Josias.",
    ],
    options: ["Hulda", "Débora", "Noadia", "Miriã"],
    explanation: "A profetisa Hulda foi consultada por representantes de Josias após a descoberta do Livro da Lei.",
    reference: "2 Reis 22:14-20",
  },
  {
    id: "ebede-meleque",
    journey: "intermediate",
    name: "Ebede-Meleque",
    clues: [
      "Eu era um oficial etíope na casa do rei.",
      "Intercedi por um profeta lançado em uma cisterna.",
      "Usei cordas e panos velhos para retirar Jeremias sem feri-lo.",
    ],
    options: ["Ebede-Meleque", "Baruque", "Gedalias", "Pasur"],
    explanation: "Ebede-Meleque pediu autorização ao rei Zedequias e organizou o resgate cuidadoso de Jeremias.",
    reference: "Jeremias 38:7-13",
  },
  {
    id: "tiquico",
    journey: "intermediate",
    name: "Tíquico",
    clues: [
      "Fui descrito como irmão amado e fiel ministro.",
      "Recebi a tarefa de levar notícias e encorajar comunidades.",
      "Meu nome aparece no encerramento das cartas aos Efésios e aos Colossenses.",
    ],
    options: ["Tíquico", "Trófimo", "Aristarco", "Tércio"],
    explanation: "Tíquico foi um colaborador encarregado de comunicar notícias de Paulo e fortalecer os destinatários de suas cartas.",
    reference: "Efésios 6:21-22; Colossenses 4:7-8",
  },
  {
    id: "tabita",
    journey: "intermediate",
    name: "Tabita",
    clues: [
      "Meu nome também foi apresentado em grego como Dorcas.",
      "Eu vivia em Jope e era conhecida por boas obras.",
      "Viúvas mostraram a Pedro as roupas que eu havia feito.",
    ],
    options: ["Tabita", "Dâmaris", "Febe", "Eunice"],
    explanation: "Tabita servia sua comunidade de modo concreto; após sua morte, Pedro foi chamado e ela voltou à vida.",
    reference: "Atos 9:36-42",
  },
  {
    id: "onesimo",
    journey: "intermediate",
    name: "Onésimo",
    clues: [
      "Meu nome aparece em uma carta dirigida a uma pessoa específica.",
      "Paulo me chamou de filho, gerado enquanto ele estava preso.",
      "Fui enviado de volta a Filemom, não apenas como servo, mas como irmão amado.",
    ],
    options: ["Onésimo", "Epafras", "Demas", "Lucas"],
    explanation: "Paulo pediu que Filemom recebesse Onésimo com uma nova disposição, destacando a relação fraterna entre eles.",
    reference: "Filemom 1:8-16",
  },
  {
    id: "epafrodito",
    journey: "intermediate",
    name: "Epafrodito",
    clues: [
      "Fui enviado por uma igreja para atender às necessidades de Paulo.",
      "Adoeci gravemente durante essa missão.",
      "Paulo pediu aos filipenses que me recebessem com alegria e honra.",
    ],
    options: ["Epafrodito", "Epafras", "Tito", "Silvano"],
    explanation: "Epafrodito representou a comunidade de Filipos no cuidado de Paulo e arriscou a vida nesse serviço.",
    reference: "Filipenses 2:25-30",
  },
  {
    id: "micaías",
    journey: "intermediate",
    name: "Micaías",
    clues: [
      "Um rei dizia que eu nunca profetizava algo favorável a seu respeito.",
      "Fui chamado enquanto muitos profetas prometiam sucesso em uma batalha.",
      "Relatei ter visto Israel disperso como ovelhas sem pastor.",
    ],
    options: ["Micaías", "Eliseu", "Amós", "Natã"],
    explanation: "Micaías, filho de Inlá, contrariou a mensagem dos demais profetas e advertiu Acabe sobre a batalha.",
    reference: "1 Reis 22:7-28",
  },
  {
    id: "jeoseba",
    journey: "intermediate",
    name: "Jeoseba",
    clues: [
      "Retirei uma criança real do meio dos filhos do rei que seriam mortos.",
      "Escondi o menino e sua ama em um quarto do templo.",
      "Protegi Joás durante seis anos enquanto Atalia governava.",
    ],
    options: ["Jeoseba", "Atalia", "Jezabel", "Maaca"],
    explanation: "Jeoseba preservou a vida de Joás ao escondê-lo durante o governo de Atalia.",
    reference: "2 Reis 11:1-3",
  },
  {
    id: "barzilai",
    journey: "intermediate",
    name: "Barzilai",
    clues: [
      "Levei provisões a Davi quando ele estava em Maanaim.",
      "Eu já tinha oitenta anos quando o rei retornou a Jerusalém.",
      "Recusei viver na corte e pedi que Quimã recebesse esse favor.",
    ],
    options: ["Barzilai", "Husai", "Ziba", "Itai"],
    explanation: "Barzilai apoiou Davi durante a crise causada por Absalão e recusou a recompensa de acompanhar o rei à corte.",
    reference: "2 Samuel 17:27-29; 19:31-39",
  },
  {
    id: "agabo",
    journey: "intermediate",
    name: "Ágabo",
    clues: [
      "Eu era profeta e viajei da Judeia para encontrar outros discípulos.",
      "Anunciei uma fome, levando a igreja a organizar ajuda.",
      "Em outra ocasião, usei o cinto de Paulo para representar o que aconteceria com ele.",
    ],
    options: ["Ágabo", "Barnabé", "Judas Barsabás", "Ananias"],
    explanation: "Ágabo comunicou duas mensagens registradas em Atos: uma sobre a fome e outra sobre a prisão que aguardava Paulo.",
    reference: "Atos 11:27-30; 21:10-11",
  },
  {
    id: "aquila",
    journey: "intermediate",
    name: "Áquila",
    clues: [
      "Eu era natural do Ponto.",
      "Cheguei a Corinto depois que os judeus foram obrigados a deixar Roma.",
      "Eu, minha esposa e Paulo trabalhávamos fabricando tendas.",
    ],
    options: ["Áquila", "Apolo", "Crispo", "Sóstenes"],
    explanation: "Áquila e Priscila acolheram Paulo em Corinto e trabalharam com ele antes de seguirem para Éfeso.",
    reference: "Atos 18:1-3, 18-19",
  },
];
