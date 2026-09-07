export type EditorialSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; text: string }[];
  schedule?: { time: string; title: string; text: string }[];
  questions?: string[];
  note?: string;
  reference?: string;
  sources?: { title: string; href: string }[];
};

export type EditorialArticle = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  audience: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageSource: string;
  updatedAt: string;
  updatedAtISO?: string;
  introduction: string[];
  sections: EditorialSection[];
  relatedPaths: string[];
};

const discussionImage = {
  image: "/images/editorial/jovens-em-conversa.jpg",
  imageAlt: "Grupo de jovens sentado em roda durante uma conversa",
  imageCredit: "Foto: Caleb Oquendo / Pexels",
  imageSource:
    "https://www.pexels.com/photo/young-adults-engaged-in-group-discussion-34516196/",
};

const gamesImage = {
  image: "/images/editorial/amigos-jogando.jpg",
  imageAlt: "Amigos reunidos ao redor de uma mesa durante um jogo",
  imageCredit: "Foto: Pavel Danilyuk / Pexels",
  imageSource:
    "https://www.pexels.com/photo/friends-playing-a-board-game-together-8111352/",
};

const digitalGamesImage = {
  image: "/images/editorial/jogos-digitais-dispositivos-grupo-v3.webp",
  imageAlt: "Celular, tablet e laptop exibindo jogos bíblicos digitais ao lado de uma Bíblia",
  imageCredit: "Imagem criada para o Bíblia Clube",
  imageSource: "/como-produzimos-conteudos",
};

const familyImage = {
  image: "/images/editorial/familia-lendo.jpg",
  imageAlt: "Família reunida no sofá para uma leitura compartilhada",
  imageCredit: "Foto: Antoni Shkraba / Pexels",
  imageSource:
    "https://www.pexels.com/photo/family-reading-a-book-together-5571736/",
};

const coupleImage = {
  image: "/images/editorial/casal-conversando.jpg",
  imageAlt: "Casal conversando com atenção à mesa",
  imageCredit: "Foto: Andres Ayrton / Pexels",
  imageSource:
    "https://www.pexels.com/photo/black-couple-sitting-at-table-in-apartment-and-talking-6578997/",
};

const editorialArticleDrafts: EditorialArticle[] = [
  {
    slug: "como-montar-uma-noite-de-jogos-biblicos",
    title: "Como montar uma noite de jogos bíblicos",
    eyebrow: "Planejamento prático",
    summary:
      "Um roteiro completo para escolher jogos, organizar equipes e transformar a diversão em aprendizado, sem deixar o encontro cansativo.",
    audience: "Grupos e famílias",
    category: "Jogos bíblicos",
    readTime: "8 min de leitura",
    ...gamesImage,
    updatedAt: "29 de agosto de 2026",
    introduction: [
      "Uma noite de jogos bíblicos funciona melhor quando tem ritmo, variedade e um objetivo claro. Não é necessário preparar uma competição complexa: duas ou três atividades bem escolhidas criam participação e deixam espaço para conversar sobre o que foi aprendido.",
      "O ponto de partida é conhecer o grupo. Crianças, visitantes, pessoas tímidas e participantes experientes podem estar na mesma sala. O roteiro abaixo combina acolhimento, jogo e leitura de um modo que ninguém precise provar quanto sabe.",
    ],
    sections: [
      {
        heading: "Defina o propósito antes dos jogos",
        paragraphs: [
          "Escolha uma intenção principal: integrar pessoas, revisar um estudo, apresentar histórias bíblicas ou simplesmente oferecer um momento saudável de comunhão. Essa decisão ajuda a limitar o número de atividades e a escolher perguntas adequadas.",
          "Para um grupo novo, prefira temas gerais e equipes misturadas. Para quem está estudando um livro específico, selecione uma rodada temática e reserve tempo para reler as referências depois de cada bloco.",
        ],
        bullets: [
          "Integração: jogos curtos, respostas coletivas e pouca ênfase no placar.",
          "Revisão: perguntas ligadas ao conteúdo estudado e explicações após cada resposta.",
          "Celebração: equipes, rodadas variadas e uma lembrança simbólica para todos.",
        ],
      },
      {
        heading: "Roteiro sugerido para 75 minutos",
        schedule: [
          { time: "0–10 min", title: "Chegada", text: "Receba as pessoas, apresente a proposta e forme equipes equilibradas." },
          { time: "10–25 min", title: "Aquecimento", text: "Use Ligue os Pares ou cinco perguntas simples do quiz geral." },
          { time: "25–45 min", title: "Rodada principal", text: "Jogue em equipes e pare brevemente para explicar respostas importantes." },
          { time: "45–60 min", title: "Segundo formato", text: "Troque a velocidade do quiz pelo Jogo da Memória ou Complete a Frase." },
          { time: "60–75 min", title: "Conversa e encerramento", text: "Retome uma referência, ouça descobertas e finalize com oração." },
        ],
      },
      {
        heading: "Como formar equipes sem constranger",
        steps: [
          { title: "Misture experiências", text: "Distribua participantes que conhecem mais a Bíblia entre as equipes, em vez de colocá-los todos juntos." },
          { title: "Permita consulta", text: "Em uma rodada, deixe cada equipe usar uma Bíblia. Encontrar a passagem também é parte do aprendizado." },
          { title: "Alterne quem responde", text: "Peça que a pessoa porta-voz mude a cada pergunta para que a participação não fique concentrada." },
          { title: "Pontue colaboração", text: "Além dos acertos, reconheça respeito, escuta e uma boa explicação dada pelo grupo." },
        ],
      },
      {
        heading: "O que preparar e o que evitar",
        bullets: [
          "Teste a internet e abra os jogos antes da chegada do grupo.",
          "Tenha uma Bíblia disponível e anote duas referências para conversar com calma.",
          "Evite rodadas longas demais, perguntas usadas para expor alguém e punições por erro.",
          "Não tente usar todos os jogos na mesma noite. Termine enquanto o grupo ainda está envolvido.",
          "Use prêmios simples ou simbólicos; o placar não deve se tornar o centro do encontro.",
        ],
        note: "Uma boa noite de jogos deixa o grupo querendo continuar a conversa, não apenas descobrir quem venceu.",
      },
      {
        heading: "Perguntas para o fechamento",
        questions: [
          "Qual resposta ou história você quer reler com mais calma?",
          "O que aprendemos hoje que pode mudar uma atitude nesta semana?",
          "Em qual momento a equipe colaborou melhor?",
        ],
        reference: "Colossenses 3:16",
      },
    ],
    relatedPaths: ["/modo-grupo", "/ligue-os-pares", "/materiais/folha-de-pontuacao"],
  },
  {
    slug: "roteiro-completo-de-celula-em-60-minutos",
    title: "Roteiro completo de célula em 60 minutos",
    eyebrow: "Encontro pronto",
    summary:
      "Uma estrutura equilibrada para acolher, ler a Bíblia, conversar e orar em uma hora, com alternativas para grupos pequenos ou numerosos.",
    audience: "Líderes de célula",
    category: "Condução de grupos",
    readTime: "9 min de leitura",
    ...discussionImage,
    updatedAt: "29 de agosto de 2026",
    introduction: [
      "Uma hora pode ser suficiente para um encontro significativo quando cada parte tem uma função clara. O roteiro não deve engessar a conversa, mas proteger o tempo da leitura bíblica e impedir que avisos ou uma única fala ocupem toda a reunião.",
      "A proposta a seguir pode ser adaptada. Se uma conversa importante surgir, reduza o número de perguntas; se o grupo estiver retraído, use uma dinâmica curta antes da leitura.",
    ],
    sections: [
      {
        heading: "A estrutura de uma hora",
        schedule: [
          { time: "0–8 min", title: "Acolhimento", text: "Cumprimente cada pessoa, apresente visitantes e faça uma pergunta leve." },
          { time: "8–15 min", title: "Conexão", text: "Use uma dinâmica breve que prepare o tema, sem exigir exposição pessoal." },
          { time: "15–27 min", title: "Leitura", text: "Leia uma passagem curta duas vezes e esclareça o contexto necessário." },
          { time: "27–45 min", title: "Conversa", text: "Faça de duas a quatro perguntas, indo da observação para a aplicação." },
          { time: "45–55 min", title: "Resposta", text: "Convide o grupo a escolher uma atitude possível para a semana." },
          { time: "55–60 min", title: "Oração", text: "Ore pelo tema e por pedidos que possam ser compartilhados com segurança." },
        ],
      },
      {
        heading: "Três tipos de pergunta que mantêm o foco",
        steps: [
          { title: "O que o texto mostra?", text: "Comece com algo observável: uma ação, repetição, contraste ou decisão presente na passagem." },
          { title: "O que isso revela?", text: "Ajude o grupo a pensar sobre Deus, pessoas, escolhas e consequências sem correr para respostas prontas." },
          { title: "Como responderemos?", text: "Feche com uma aplicação específica, possível e relacionada ao sentido do texto." },
        ],
      },
      {
        heading: "Quando o grupo fala pouco",
        paragraphs: [
          "O silêncio não significa desinteresse. Algumas pessoas precisam de tempo para organizar o pensamento ou temem dar uma resposta errada. Faça a pergunta, espere alguns segundos e permita conversas em duplas antes de abrir para todos.",
          "Também é útil oferecer duas possibilidades: 'O texto destaca mais coragem ou paciência neste momento? Por quê?'. A escolha reduz a pressão, mas ainda convida a explicar o raciocínio.",
        ],
        note: "Não responda sua própria pergunta imediatamente. Uma pausa tranquila comunica que o grupo realmente pode participar.",
      },
      {
        heading: "Quando o grupo fala demais",
        bullets: [
          "Combine respostas de até um minuto quando muitas pessoas quiserem falar.",
          "Agradeça a contribuição e recoloque a pergunta central antes de chamar a próxima pessoa.",
          "Interrompa com gentileza quando a fala expuser terceiros ou levar a um aconselhamento inadequado em público.",
          "Anote assuntos importantes que pedem uma conversa particular após o encontro.",
        ],
      },
      {
        heading: "Checklist do líder",
        bullets: [
          "Li a passagem no contexto e consigo explicar por que ela foi escolhida.",
          "Preparei no máximo quatro perguntas realmente úteis.",
          "Há espaço para visitantes participarem sem conhecer termos internos.",
          "Sei qual parte pode ser encurtada caso a conversa precise de mais tempo.",
          "Tenho um encerramento simples e coerente com o tema.",
        ],
        reference: "1 Coríntios 14:26; 14:40",
      },
    ],
    relatedPaths: ["/monte-seu-encontro", "/dinamicas-para-celulas/pontes-de-gratidao", "/materiais/checklist-do-lider"],
  },
  {
    slug: "como-incluir-pessoas-timidas-e-visitantes",
    title: "Como incluir pessoas tímidas e visitantes",
    eyebrow: "Acolhimento e participação",
    summary:
      "Práticas simples para criar participação sem pressão, acolher quem chegou agora e evitar que poucas vozes dominem o encontro.",
    audience: "Líderes e anfitriões",
    category: "Cuidado no grupo",
    readTime: "7 min de leitura",
    ...discussionImage,
    updatedAt: "29 de agosto de 2026",
    introduction: [
      "Participar não significa falar o tempo todo. Uma pessoa pode estar atenta, aprender e se sentir acolhida mesmo dizendo pouco. O papel de quem conduz é oferecer portas de entrada, não transformar cada pergunta em uma cobrança pública.",
      "Visitantes também precisam entender o que está acontecendo. Termos internos, brincadeiras com histórias antigas do grupo e perguntas muito pessoais podem criar distância sem que ninguém perceba.",
    ],
    sections: [
      {
        heading: "Antes do encontro começar",
        steps: [
          { title: "Receba pelo nome", text: "Apresente-se, pergunte como a pessoa prefere ser chamada e mostre onde ela pode se sentar." },
          { title: "Explique o formato", text: "Diga em uma frase que haverá conversa, leitura e oração, e que ninguém é obrigado a falar." },
          { title: "Crie uma conexão", text: "Apresente o visitante a alguém atencioso, evitando deixá-lo sozinho enquanto o grupo se organiza." },
        ],
      },
      {
        heading: "Formatos que reduzem a pressão",
        bullets: [
          "Responder primeiro em duplas e depois compartilhar apenas o que o par autorizar.",
          "Usar cartões anônimos para perguntas ou exemplos.",
          "Fazer uma rodada em que seja permitido dizer 'passo'.",
          "Alternar perguntas factuais com perguntas de opinião, sem começar por temas íntimos.",
          "Usar um jogo cooperativo em que a equipe constrói a resposta em conjunto.",
        ],
      },
      {
        heading: "Frases úteis para quem conduz",
        bullets: [
          "'Você pode só ouvir nesta rodada, se preferir.'",
          "'Vamos pensar por alguns segundos antes de responder.'",
          "'Conversem em duplas; depois ouviremos quem desejar compartilhar.'",
          "'Obrigado. Alguém percebeu outro detalhe no texto?'",
          "'Não precisamos resolver isso agora; podemos conversar com mais cuidado depois.'",
        ],
      },
      {
        heading: "Sinais de que a inclusão precisa melhorar",
        paragraphs: [
          "Observe quem é interrompido, quem nunca recebe contexto e quem só é chamado quando o tema combina com um rótulo que o grupo lhe atribuiu. Inclusão não é apenas abrir espaço; é impedir que esse espaço seja ocupado sempre pelas mesmas pessoas.",
          "Depois do encontro, pergunte de modo simples a uma pessoa nova se o formato ficou claro e se houve algum momento desconfortável. Essa conversa oferece informação melhor do que presumir que o silêncio significou satisfação.",
        ],
      },
      {
        heading: "Uma regra de cuidado",
        note: "Convide sem insistir, escute sem completar a frase do outro e nunca use uma história pessoal compartilhada no grupo como exemplo fora dali.",
        reference: "Romanos 15:7; Tiago 1:19",
      },
    ],
    relatedPaths: ["/guias/como-conduzir-uma-celula-participativa", "/dinamicas-para-celulas/pontes-de-gratidao", "/materiais/roteiro-de-encontro"],
  },
  {
    slug: "culto-domestico-com-criancas",
    title: "No lar: um roteiro com crianças",
    eyebrow: "Fé em família",
    summary:
      "Ideias para uma rotina familiar curta, participativa e adequada à idade, com leitura, conversa, jogo e oração sem transformar o momento em aula.",
    audience: "Famílias com crianças",
    category: "Família",
    readTime: "8 min de leitura",
    ...familyImage,
    updatedAt: "29 de agosto de 2026",
    introduction: [
      "O culto doméstico não precisa reproduzir uma reunião longa em tamanho reduzido. Para crianças, constância, linguagem concreta e participação valem mais do que quantidade de conteúdo. Dez a vinte minutos podem formar uma rotina significativa.",
      "A proposta é ler a Bíblia em família e ajudar cada criança a perceber que pode perguntar, lembrar, desenhar e orar. Nem todo encontro será silencioso ou perfeito; a continuidade nasce de um formato que cabe na vida real da casa.",
    ],
    sections: [
      {
        heading: "Roteiro de quinze minutos",
        schedule: [
          { time: "2 min", title: "Chegada", text: "Guardem os celulares e cada pessoa conta uma coisa boa do dia." },
          { time: "4 min", title: "Leitura", text: "Leiam uma narrativa curta em voz alta, dividindo personagens quando fizer sentido." },
          { time: "4 min", title: "Conversa", text: "Façam duas perguntas: o que aconteceu e o que isso mostra sobre Deus ou as pessoas?" },
          { time: "3 min", title: "Atividade", text: "Use uma pergunta do quiz, um desenho, mímica ou uma frase para completar." },
          { time: "2 min", title: "Oração", text: "Cada pessoa diz um motivo de gratidão ou um pedido em uma frase." },
        ],
      },
      {
        heading: "Como adaptar por idade",
        steps: [
          { title: "Até 6 anos", text: "Conte uma cena curta, mostre objetos, repita uma frase principal e aceite respostas por gestos ou desenhos." },
          { title: "De 7 a 10 anos", text: "Peça que recontem a história, encontrem personagens e escolham uma atitude para praticar." },
          { title: "Pré-adolescentes", text: "Inclua contexto, perguntas abertas e espaço para discordar ou dizer que não entenderam." },
          { title: "Idades misturadas", text: "Dê funções diferentes: ler, resumir, fazer uma pergunta, marcar o tempo ou escolher a oração final." },
        ],
      },
      {
        heading: "Temas para quatro semanas",
        bullets: [
          "Jesus acolhe as crianças — Marcos 10:13-16.",
          "Gratidão no cotidiano — Lucas 17:11-19.",
          "Coragem para fazer o certo — Daniel 1.",
          "Perdão e recomeço — Lucas 15:11-24.",
        ],
      },
      {
        heading: "Quando algo não funciona",
        paragraphs: [
          "Se as crianças estiverem cansadas, leia menos e encerre bem. Se uma pergunta gerar outra conversa importante, deixe o plano de lado por alguns minutos. O objetivo não é completar uma programação, mas cultivar atenção à Palavra e uns aos outros.",
          "Evite usar o momento para corrigir todo comportamento ruim da semana. Quando a Bíblia aparece apenas ligada a broncas, a criança pode associar a leitura a um julgamento do qual precisa se defender.",
        ],
        note: "Escolha um dia e horário sustentáveis. Uma rotina curta que acontece vale mais do que um plano elaborado que a família abandona.",
      },
      {
        heading: "Perguntas que crianças conseguem responder",
        questions: [
          "Qual parte da história você desenharia?",
          "Quem precisou fazer uma escolha?",
          "O que você perguntaria a essa personagem?",
          "Como podemos praticar algo parecido amanhã?",
        ],
        reference: "Deuteronômio 6:6-7",
      },
    ],
    relatedPaths: ["/jogo-da-memoria-biblico", "/quiz-biblico/personagens-biblicos", "/materiais/plano-familiar-semanal"],
  },
  {
    slug: "quiz-para-escola-biblica-dominical",
    title: "Como usar quiz na Escola Bíblica Dominical",
    eyebrow: "Revisão que ensina",
    summary:
      "Estratégias para revisar uma aula, avaliar compreensão sem constranger e usar respostas erradas como ponto de partida para o ensino.",
    audience: "Professores e turmas",
    category: "Educação bíblica",
    readTime: "8 min de leitura",
    ...gamesImage,
    updatedAt: "29 de agosto de 2026",
    introduction: [
      "Um quiz pode mostrar o que a turma entendeu, mas seu valor maior aparece quando a correção ensina. A atividade não precisa funcionar como prova nem premiar apenas quem memoriza detalhes. Ela pode retomar ideias centrais, localizar passagens e abrir perguntas que não surgiram durante a aula.",
      "Planeje poucas perguntas e decida o que fará depois de cada uma. Se a resposta não muda a conversa ou reforça um objetivo da aula, talvez ela não precise estar na rodada.",
    ],
    sections: [
      {
        heading: "Antes, durante ou depois da aula?",
        steps: [
          { title: "Antes", text: "Use três perguntas simples para descobrir conhecimentos prévios, sem divulgar placar individual." },
          { title: "Durante", text: "Faça uma pausa depois de um bloco de conteúdo e peça que duplas justifiquem uma resposta." },
          { title: "Depois", text: "Retome conceitos centrais, leia referências e registre dúvidas para a próxima aula." },
        ],
      },
      {
        heading: "Como selecionar boas perguntas",
        bullets: [
          "Relacione cada questão a um objetivo explícito da aula.",
          "Evite detalhes curiosos que não ajudam a compreender o texto.",
          "Garanta que apenas uma alternativa seja defensável pela passagem indicada.",
          "Misture identificação, sequência de acontecimentos e aplicação cuidadosa.",
          "Leia a pergunta em um celular antes da aula para verificar tamanho e clareza.",
        ],
      },
      {
        heading: "Roteiro de revisão em vinte minutos",
        schedule: [
          { time: "3 min", title: "Combinado", text: "Explique que o objetivo é revisar e que consultar a Bíblia será permitido em parte da rodada." },
          { time: "10 min", title: "Perguntas", text: "Faça de seis a oito questões, alternando respostas individuais e em equipe." },
          { time: "5 min", title: "Referências", text: "Reabra duas passagens que geraram mais dúvida e leia o contexto." },
          { time: "2 min", title: "Síntese", text: "Peça que cada equipe escreva uma frase resumindo o principal aprendizado." },
        ],
      },
      {
        heading: "O que fazer quando muitos erram",
        paragraphs: [
          "Não diga apenas a alternativa correta. Pergunte qual palavra tornou a opção errada convincente, volte à passagem e mostre como localizar a informação. Se a maioria errou, revise também a forma como o conteúdo foi apresentado e como a pergunta foi escrita.",
          "Um erro coletivo é informação para o professor, não motivo para repreender a turma. Ele pode revelar um conceito difícil, uma explicação insuficiente ou uma ambiguidade que precisa ser corrigida.",
        ],
      },
      {
        heading: "Critérios de uma boa revisão",
        bullets: [
          "A turma termina sabendo mais do que no início da rodada.",
          "As pessoas conseguem explicar por que a resposta está correta.",
          "As referências são abertas e não aparecem apenas como rodapé.",
          "O professor identifica uma dúvida real para retomar depois.",
        ],
        reference: "Neemias 8:8",
      },
    ],
    relatedPaths: ["/quiz-biblico", "/modo-grupo", "/biblioteca/como-transformar-respostas-erradas-em-aprendizado"],
  },
  {
    slug: "jogos-biblicos-sem-impressao",
    title: "Jogos digitais: 7 formatos simples",
    eyebrow: "Pouco preparo",
    summary:
      "Sete atividades que funcionam com celular, Bíblia e conversa, úteis para encontros improvisados ou grupos sem materiais impressos.",
    audience: "Todos os grupos",
    category: "Ideias de jogos",
    readTime: "7 min de leitura",
    ...digitalGamesImage,
    updatedAt: "29 de agosto de 2026",
    introduction: [
      "Nem todo encontro precisa de cartões, tabuleiro ou uma preparação longa. Com um celular, uma Bíblia e regras bem explicadas, é possível criar atividades variadas sem perder o foco no conteúdo.",
      "Os formatos abaixo podem ocupar de cinco a vinte minutos. Escolha um ou dois conforme o tamanho do grupo e evite emendar jogos apenas para preencher o tempo.",
    ],
    sections: [
      {
        heading: "1. Quiz cooperativo",
        paragraphs: ["Abra uma rodada e dê ao grupo trinta segundos para construir uma única resposta. Antes de avançar, alguém deve explicar o raciocínio da equipe. A pontuação registra acertos, mas o desafio principal é chegar a um consenso respeitoso."],
      },
      {
        heading: "2. Referência em ordem",
        paragraphs: ["Escolha quatro acontecimentos conhecidos e fale os títulos em voz alta. As equipes precisam colocá-los em ordem narrativa e depois localizar uma referência para cada um. Use poucos eventos para que a busca não fique cansativa."],
      },
      {
        heading: "3. Personagem em três pistas",
        paragraphs: ["Uma pessoa escolhe uma personagem e dá três pistas, começando pela mais difícil. O grupo pode fazer uma tentativa após cada pista. No final, todos localizam uma passagem que confirme ao menos uma informação apresentada."],
      },
      {
        heading: "4. Complete a frase em equipe",
        paragraphs: ["Abra o jogo Complete a Frase e permita que a equipe discuta as alternativas. Depois da resposta, leia o trecho completo e pergunte o que muda quando a frase é vista em seu contexto."],
      },
      {
        heading: "5. Ligue os pares narrado",
        paragraphs: ["Sem mostrar a tela, leia os itens de uma coluna e depois as combinações possíveis. O grupo registra mentalmente ou aponta os pares. Revele a interface ao final para conferir e comentar cada relação."],
      },
      {
        heading: "6. Uma palavra, uma história",
        paragraphs: ["Diga palavras como barco, deserto, coroa ou caminho. Cada equipe cita uma narrativa relacionada e explica a ligação. Aceite histórias diferentes quando a relação puder ser confirmada pelo texto bíblico."],
      },
      {
        heading: "7. Pergunta que fica",
        paragraphs: ["Ao final de qualquer rodada, cada pessoa escolhe uma pergunta cuja referência deseja reler. Em duplas, contem por que aquela resposta chamou atenção. O fechamento transforma uma brincadeira rápida em continuidade de aprendizado."],
        note: "Para grupos com visitantes, comece pelos formatos cooperativos. Eles permitem aprender com outras pessoas sem exposição individual.",
        reference: "Salmo 119:18",
      },
    ],
    relatedPaths: ["/quiz-biblico", "/complete-a-frase", "/ligue-os-pares"],
  },
  {
    slug: "como-adaptar-uma-dinamica-por-idade",
    title: "Como adaptar uma dinâmica bíblica por idade",
    eyebrow: "Condução inclusiva",
    summary:
      "Um método para ajustar linguagem, tempo, exposição e aplicação sem perder o objetivo bíblico da atividade.",
    audience: "Líderes e professores",
    category: "Adaptação",
    readTime: "9 min de leitura",
    ...discussionImage,
    updatedAt: "29 de agosto de 2026",
    introduction: [
      "Adaptar uma dinâmica não é apenas trocar palavras difíceis. Crianças, adolescentes, adultos e idosos podem compreender o mesmo tema, mas participam de maneiras diferentes e precisam de tempos, exemplos e níveis de exposição adequados.",
      "Comece preservando o objetivo. Se a dinâmica pretende trabalhar gratidão, todas as versões devem levar a reconhecer cuidados recebidos e expressar gratidão, ainda que uma use desenhos e outra use conversa em duplas.",
    ],
    sections: [
      {
        heading: "Use quatro perguntas de adaptação",
        questions: [
          "O que cada pessoa precisa compreender ao final?",
          "Que tipo de resposta essa faixa etária consegue oferecer com segurança?",
          "Quanto tempo de atenção o formato realmente exige?",
          "Há algo que expõe uma história pessoal sem necessidade?",
        ],
      },
      {
        heading: "Crianças",
        bullets: [
          "Dê uma instrução por vez e demonstre antes de começar.",
          "Use movimento, objetos e escolhas visuais, sem depender apenas de leitura.",
          "Mantenha rodadas curtas e repita a ideia central com palavras simples.",
          "Evite pedir relatos íntimos ou transformar a atividade em eliminação.",
        ],
      },
      {
        heading: "Adolescentes e jovens",
        bullets: [
          "Explique por que a atividade será feita; eles percebem rapidamente quando algo parece artificial.",
          "Inclua escolhas reais, perguntas abertas e espaço para discordância respeitosa.",
          "Não obrigue ninguém a contar experiências pessoais para tornar a conversa 'profunda'.",
          "Use exemplos atuais sem tentar imitar gírias ou reduzir o tema a tendências passageiras.",
        ],
      },
      {
        heading: "Adultos e grupos mistos",
        paragraphs: [
          "Adultos também podem se sentir constrangidos por jogos que infantilizam ou expõem conhecimento. Apresente o propósito, use regras simples e conecte a atividade a situações reconhecíveis no cotidiano.",
          "Em grupos mistos, forme pares ou equipes intergeracionais e distribua funções. Uma pessoa pode ler, outra registrar, outra responder e outra localizar a passagem. Assim, habilidade de leitura ou rapidez não decide quem participa.",
        ],
      },
      {
        heading: "Teste rápido antes de aplicar",
        steps: [
          { title: "Leia a instrução em voz alta", text: "Se ela exigir muitas explicações, simplifique o fluxo." },
          { title: "Cronometre uma rodada", text: "Considere o tempo de pensar e conversar, não apenas de executar." },
          { title: "Procure riscos", text: "Retire perguntas que possam expor conflitos, traumas ou informações privadas." },
          { title: "Planeje uma saída", text: "Permita observar, passar a vez ou participar por outra função." },
        ],
        reference: "1 Coríntios 9:22-23",
      },
    ],
    relatedPaths: ["/dinamicas-para-celulas/uma-mesa-muitas-historias", "/biblioteca/como-incluir-pessoas-timidas-e-visitantes", "/materiais/checklist-do-lider"],
  },
  {
    slug: "plano-de-quatro-encontros-em-marcos",
    title: "Plano de quatro encontros no Evangelho de Marcos",
    eyebrow: "Série bíblica",
    summary:
      "Quatro encontros para observar quem Jesus é, como ele acolhe, ensina e chama pessoas a segui-lo, com leituras e perguntas prontas.",
    audience: "Células e famílias",
    category: "Plano de estudo",
    readTime: "10 min de leitura",
    ...discussionImage,
    updatedAt: "29 de agosto de 2026",
    introduction: [
      "O Evangelho de Marcos apresenta Jesus em movimento: ensinando, curando, acolhendo e confrontando expectativas. Esta série não pretende resumir o livro inteiro. Ela seleciona quatro cenas que podem ser lidas por grupos com diferentes níveis de familiaridade com a Bíblia.",
      "Em cada semana, leia a passagem completa, observe o que o texto diz antes de aplicar e termine com uma resposta simples. O jogo aparece como apoio para revisar, não como substituto da leitura.",
    ],
    sections: [
      {
        heading: "Encontro 1 — Autoridade que serve",
        paragraphs: ["Leia Marcos 1:21-39. Observe o que Jesus faz, como as pessoas reagem e por que ele se retira para orar mesmo diante de muitas demandas."],
        questions: ["Que tipos de autoridade aparecem na passagem?", "O que a oração de Jesus ensina sobre atividade e direção?", "Que demanda precisa ser colocada diante de Deus nesta semana?"],
        reference: "Marcos 1:21-39",
      },
      {
        heading: "Encontro 2 — Acolhimento que restaura",
        paragraphs: ["Leia Marcos 2:1-17. Compare a ação dos amigos, a necessidade do paralítico e a reação das pessoas que questionam Jesus."],
        questions: ["Quem ajuda alguém a chegar perto de Jesus?", "Que barreiras aparecem na casa e na mesa?", "Como nosso grupo pode facilitar a chegada de alguém?"],
        reference: "Marcos 2:1-17",
      },
      {
        heading: "Encontro 3 — Ouvir em meio ao medo",
        paragraphs: ["Leia Marcos 4:35-41. Perceba as palavras dos discípulos, a resposta de Jesus e a pergunta que encerra a cena."],
        questions: ["O que o medo faz os discípulos concluírem?", "Que diferença há entre perigo real e abandono presumido?", "Como podemos pedir ajuda sem esconder o medo?"],
        reference: "Marcos 4:35-41",
      },
      {
        heading: "Encontro 4 — O caminho do serviço",
        paragraphs: ["Leia Marcos 10:32-45. Observe o pedido de Tiago e João, a reação dos demais e como Jesus redefine grandeza."],
        questions: ["Que ideia de grandeza é confrontada?", "Onde buscamos posição em vez de serviço?", "Qual serviço concreto pode ser assumido pelo grupo?"],
        reference: "Marcos 10:32-45",
      },
      {
        heading: "Como usar os jogos na série",
        bullets: [
          "Na primeira semana, faça cinco perguntas do tema Jesus e Evangelhos para perceber o repertório do grupo.",
          "Na segunda, use Ligue os Pares com personagens e acontecimentos antes da leitura.",
          "Na terceira, deixe a atividade para o final e revise palavras-chave da narrativa.",
          "Na quarta, peça que cada equipe escreva uma pergunta baseada no texto e explique a resposta.",
        ],
        note: "Registre as aplicações escolhidas em cada semana. No último encontro, reserve alguns minutos para perceber continuidades e mudanças.",
      },
    ],
    relatedPaths: ["/quiz-biblico/jesus-e-evangelhos", "/ligue-os-pares", "/materiais/roteiro-de-encontro"],
  },
  {
    slug: "plano-de-leitura-de-atos-com-jogos",
    title: "Plano de leitura de Atos com jogos e conversa",
    eyebrow: "Jornada em comunidade",
    summary:
      "Um percurso de seis etapas por Atos, combinando leitura antes do encontro, revisão em grupo e perguntas sobre missão, coragem e comunidade.",
    audience: "Jovens e adultos",
    category: "Plano de leitura",
    readTime: "10 min de leitura",
    ...discussionImage,
    updatedAt: "29 de agosto de 2026",
    introduction: [
      "Atos acompanha o testemunho dos primeiros cristãos de Jerusalém até Roma. Em vez de tentar comentar todos os detalhes, este plano organiza o livro em seis movimentos e propõe uma leitura distribuída ao longo da semana.",
      "Cada encontro começa com uma revisão curta, abre uma passagem central e termina com uma pergunta de continuidade. Quem não conseguiu ler todos os capítulos ainda pode participar a partir do texto lido em grupo.",
    ],
    sections: [
      {
        heading: "As seis etapas",
        steps: [
          { title: "Atos 1–4: testemunho e comunidade", text: "Foco em Atos 2:42-47. Observe práticas, partilha e crescimento." },
          { title: "Atos 5–8: coragem em meio à oposição", text: "Foco em Atos 6:1-7. Converse sobre serviço, prioridades e cuidado." },
          { title: "Atos 9–12: encontros que mudam caminhos", text: "Foco em Atos 9:1-19. Perceba iniciativa de Deus, medo e acolhimento." },
          { title: "Atos 13–16: boas notícias atravessam fronteiras", text: "Foco em Atos 16:6-15. Observe direção, viagem e hospitalidade." },
          { title: "Atos 17–21: comunicar em contextos diferentes", text: "Foco em Atos 17:16-34. Compare pontos de contato e convite à mudança." },
          { title: "Atos 22–28: fidelidade no caminho", text: "Foco em Atos 27:13-26. Converse sobre esperança em uma crise coletiva." },
        ],
      },
      {
        heading: "Ritmo semanal",
        schedule: [
          { time: "Antes", title: "Leitura distribuída", text: "Divida os capítulos em pequenas porções e envie uma pergunta de observação." },
          { time: "10 min", title: "Revisão jogada", text: "Use quiz em equipes ou peça que cada dupla ordene três acontecimentos." },
          { time: "20 min", title: "Texto central", text: "Leia a passagem principal e trabalhe três perguntas." },
          { time: "10 min", title: "Aplicação", text: "Escolha uma prática comunitária relacionada ao trecho." },
        ],
      },
      {
        heading: "Perguntas que acompanham todo o plano",
        questions: [
          "O que o Espírito Santo conduz ou transforma nesta etapa?",
          "Que barreira entre pessoas é atravessada?",
          "Como a comunidade reage a uma necessidade ou oposição?",
          "Que palavra ou atitude podemos levar para a próxima semana?",
        ],
      },
      {
        heading: "Como incluir quem leu menos",
        paragraphs: [
          "Evite abrir o encontro perguntando quem completou a leitura. Comece com um resumo de dois minutos e leia a passagem central. Durante a revisão, forme equipes para que o conhecimento seja compartilhado e não usado como medida de espiritualidade.",
          "Ofereça versões em áudio como alternativa de acompanhamento, mas mantenha o texto central acessível no encontro. A série deve criar desejo de continuar, não culpa por um cronograma interrompido.",
        ],
      },
      {
        heading: "Registro final",
        bullets: [
          "Uma descoberta sobre Deus em Atos.",
          "Uma prática de comunidade que o grupo deseja fortalecer.",
          "Uma pessoa ou contexto pelo qual o grupo continuará orando.",
          "Uma pergunta que permaneceu aberta para estudo posterior.",
        ],
        reference: "Atos 1:8",
      },
    ],
    relatedPaths: ["/quiz-biblico/igreja-primitiva", "/modo-grupo", "/materiais/roteiro-de-encontro"],
  },
  {
    slug: "encontro-de-casais-sobre-financas",
    title: "Encontro de casais sobre finanças sem exposição",
    eyebrow: "Casais e vida prática",
    summary:
      "Um roteiro para conversar sobre prioridades, transparência e decisões financeiras sem pedir valores pessoais nem comparar histórias.",
    audience: "Casais",
    category: "Relacionamentos",
    readTime: "9 min de leitura",
    ...coupleImage,
    updatedAt: "29 de agosto de 2026",
    introduction: [
      "Finanças afetam rotina, planos, segurança e confiança. Por isso, um encontro de casais sobre o tema precisa ser útil sem se tornar uma auditoria pública. Ninguém deve informar renda, dívidas ou conflitos diante do grupo.",
      "O objetivo deste roteiro é criar linguagem para conversas privadas mais honestas. A Bíblia será lida como referência para prioridades, contentamento, planejamento e cuidado, não como fórmula de enriquecimento.",
    ],
    sections: [
      {
        heading: "Combinados de segurança",
        bullets: [
          "Não pedir valores, percentuais de renda ou detalhes de dívidas.",
          "Não comparar modelos de organização como se apenas um fosse fiel.",
          "Não transformar dificuldades financeiras em julgamento moral.",
          "Não pressionar um cônjuge a relatar um conflito diante do outro e do grupo.",
          "Indicar ajuda pastoral e profissional quando a situação exigir acompanhamento específico.",
        ],
      },
      {
        heading: "Roteiro de cinquenta minutos",
        schedule: [
          { time: "8 min", title: "Abertura leve", text: "Cada casal escolhe entre viagem, casa ou tempo livre e explica qual sonho compartilhado a opção representa." },
          { time: "12 min", title: "Leitura", text: "Leia Lucas 14:28-30 e 1 Timóteo 6:6-10, observando planejamento e contentamento." },
          { time: "15 min", title: "Conversa em casal", text: "Cada casal recebe perguntas e conversa em particular, sem compartilhar respostas." },
          { time: "10 min", title: "Síntese coletiva", text: "O grupo fala sobre princípios gerais, sem narrar acordos ou conflitos privados." },
          { time: "5 min", title: "Oração", text: "Ore por sabedoria, provisão, generosidade e unidade nas decisões." },
        ],
      },
      {
        heading: "Perguntas para conversar em particular",
        questions: [
          "Que prioridade queremos proteger mesmo quando o orçamento aperta?",
          "Qual decisão financeira precisa de uma conversa mais clara entre nós?",
          "O que nos ajuda a distinguir desejo, necessidade e compromisso?",
          "Como podemos praticar generosidade de forma responsável?",
        ],
      },
      {
        heading: "Uma prática para sete dias",
        steps: [
          { title: "Escolham um horário", text: "Marquem uma conversa de trinta minutos em um momento sem pressa." },
          { title: "Tragam a mesma informação", text: "Cada pessoa reúne compromissos e decisões que precisam ser conhecidos pelo casal." },
          { title: "Definam uma prioridade", text: "Escolham apenas uma ação possível para o próximo mês." },
          { title: "Revisem sem acusar", text: "Marquem uma data para observar o plano e ajustar o que não funcionou." },
        ],
      },
      {
        heading: "Quando buscar ajuda",
        paragraphs: [
          "Endividamento grave, controle financeiro usado como forma de abuso, apostas, omissões repetidas ou conflitos que colocam a segurança da família em risco não devem ser tratados apenas com uma dinâmica. O casal pode precisar de apoio pastoral responsável e orientação profissional qualificada.",
        ],
        note: "O encontro oferece uma porta para o diálogo; ele não substitui aconselhamento financeiro, jurídico ou psicológico.",
        reference: "Provérbios 15:22; Lucas 14:28",
      },
    ],
    relatedPaths: ["/dinamicas-para-celulas/planejar-juntos", "/guias/quiz-biblico-para-casais", "/materiais/cartoes-para-casais"],
  },
  {
    slug: "como-conduzir-conversas-sensiveis",
    title: "Como conduzir conversas sensíveis em pequenos grupos",
    eyebrow: "Cuidado e limites",
    summary:
      "Orientações para acolher relatos difíceis, proteger a privacidade e reconhecer quando o grupo precisa encaminhar uma situação para ajuda adequada.",
    audience: "Líderes e anfitriões",
    category: "Cuidado no grupo",
    readTime: "10 min de leitura",
    ...discussionImage,
    updatedAt: "6 de setembro de 2026",
    updatedAtISO: "2026-09-06",
    introduction: [
      "Uma pergunta bíblica pode tocar luto, violência, saúde mental, conflitos familiares ou culpa. Quem conduz não precisa ter resposta para tudo, mas precisa saber ouvir, proteger e evitar que uma pessoa vulnerável seja exposta diante do grupo.",
      "Este conteúdo não substitui formação pastoral, psicológica, médica ou jurídica. Ele oferece critérios básicos para reduzir danos e encaminhar situações que ultrapassam a finalidade de uma reunião comunitária.",
    ],
    sections: [
      {
        heading: "Quando alguém compartilha algo difícil",
        steps: [
          { title: "Pare e escute", text: "Não apresse a pessoa nem transforme o relato em uma lição para todos." },
          { title: "Agradeça a confiança", text: "Reconheça a coragem de falar sem elogiar o sofrimento ou pedir detalhes." },
          { title: "Pergunte o que ela precisa agora", text: "Ouvir, orar, conversar em particular ou receber ajuda prática são necessidades diferentes." },
          { title: "Proteja a privacidade", text: "Interrompa perguntas invasivas e combine quem poderá acompanhar a situação." },
          { title: "Encaminhe quando necessário", text: "Risco, abuso, crise de saúde ou questões legais exigem ajuda apropriada, não apenas aconselhamento informal." },
        ],
      },
      {
        heading: "Diferencie cuidado, encaminhamento e emergência",
        steps: [
          { title: "Sofrimento sem perigo relatado", text: "Acolha sem diagnosticar, pergunte se a pessoa deseja conversar em particular e combine um contato posterior. Luto, culpa ou conflito não precisam virar exposição coletiva nem receber uma solução instantânea." },
          { title: "Necessidade de apoio especializado", text: "Quando o relato envolve sofrimento persistente, prejuízo importante na rotina, violência ou uma questão médica ou jurídica, ajude a localizar a rede adequada. Ofereça companhia para buscar atendimento, sem tomar decisões no lugar da pessoa." },
          { title: "Perigo imediato", text: "Interrompa a programação. Não deixe sozinha uma pessoa sob risco imediato de suicídio e procure um serviço de urgência. Se houver violência acontecendo ou necessidade de intervenção policial, acione a emergência. Siga as orientações do atendente." },
        ],
        note: "O líder não precisa classificar clinicamente o caso. Se houver dúvida razoável sobre perigo imediato, priorize proteção e orientação de um serviço de emergência.",
      },
      {
        heading: "Frases que ajudam",
        bullets: [
          "'Obrigado por confiar isso ao grupo.'",
          "'Você não precisa contar mais detalhes agora.'",
          "'Como podemos cuidar de você neste momento?'",
          "'Podemos conversar em particular e pensar em ajuda adequada.'",
          "'Não tenho uma resposta pronta, mas não quero tratar isso com pressa.'",
        ],
      },
      {
        heading: "Respostas que podem ferir",
        bullets: [
          "Procurar uma causa espiritual simples para todo sofrimento.",
          "Prometer sigilo absoluto antes de conhecer uma situação de risco.",
          "Contar uma história parecida para deslocar o foco para si mesmo.",
          "Pressionar por perdão, reconciliação ou exposição imediata.",
          "Oferecer diagnóstico, medicação ou orientação jurídica sem qualificação.",
        ],
      },
      {
        heading: "Limites do encontro coletivo",
        paragraphs: [
          "O grupo pode oferecer presença, oração, refeições, transporte e acompanhamento. Ele não deve investigar denúncias, mediar toda crise conjugal em público ou pedir que uma vítima confronte alguém diante da reunião.",
          "Quando houver risco imediato à integridade de alguém, procure os serviços de emergência e a rede de proteção competente. A segurança vem antes da continuidade da programação ou da preservação da imagem do grupo.",
        ],
        note: "Confidencialidade significa tratar informações com responsabilidade, não esconder situações de perigo que exigem proteção.",
      },
      {
        heading: "Três situações e uma resposta possível",
        steps: [
          { title: "Luto durante a conversa", text: "A pessoa começa a chorar ao lembrar uma perda. O condutor pode pausar e dizer: 'Sinto muito. Você prefere alguns minutos, quer que alguém fique ao seu lado ou deseja continuar?'. Não peça que ela transforme a dor em testemunho nem explique por que a perda aconteceu." },
          { title: "Relato de violência", text: "A pessoa diz que não se sente segura em casa. Responda: 'Obrigado por contar. Não vamos pedir detalhes aqui nem confrontar ninguém. Você está em perigo agora? Vamos procurar, em particular, um serviço que possa orientar e proteger você'. Em emergência, acione o 190. Para orientação e denúncia de violência contra a mulher, o Ligue 180 funciona 24 horas; violações de direitos humanos podem ser comunicadas ao Disque 100." },
          { title: "Fala sobre autoagressão", text: "Leve a fala a sério e converse em local calmo. Pergunte com clareza se existe perigo imediato. Se houver, não deixe a pessoa sozinha: acione o SAMU 192 ou outro serviço de urgência e contate alguém de confiança indicado por ela. O CVV 188 oferece apoio emocional, mas não substitui atendimento de emergência." },
        ],
        note: "Diante de suspeita ou confirmação de violência contra criança ou adolescente, não conduza uma investigação informal. Procure imediatamente a rede de proteção; o Disque 100 recebe e encaminha denúncias.",
      },
      {
        heading: "Canais públicos no Brasil",
        bullets: [
          "SAMU 192: urgências e emergências de saúde, inclusive tentativas de suicídio e crises psiquiátricas com risco.",
          "Polícia Militar 190: violência em andamento ou situação que exija intervenção policial imediata.",
          "CVV 188: apoio emocional gratuito; não é substituto do atendimento de urgência.",
          "Ligue 180: orientação, direitos, serviços próximos e denúncias de violência contra a mulher.",
          "Disque 100: denúncias de violações de direitos humanos, inclusive contra crianças, adolescentes e outros grupos vulneráveis.",
        ],
        sources: [
          { title: "Ministério da Saúde: prevenção do suicídio", href: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/suicidio-prevencao" },
          { title: "Ministério da Saúde: SAMU 192", href: "https://www.gov.br/saude/pt-br/composicao/saes/samu-192" },
          { title: "Ministério das Mulheres: Ligue 180", href: "https://www.gov.br/mulheres/pt-br/ligue180" },
          { title: "Governo Federal: Disque 100", href: "https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos" },
        ],
      },
      {
        heading: "Depois da conversa",
        bullets: [
          "Combine um próximo contato com data e responsável definidos.",
          "Registre apenas o necessário e proteja qualquer informação pessoal.",
          "Não transforme o pedido em assunto de conversa com quem não participará do cuidado.",
          "Cuide também de quem conduziu; situações intensas podem exigir supervisão e apoio.",
        ],
        reference: "Gálatas 6:2; Provérbios 11:13",
      },
    ],
    relatedPaths: ["/biblioteca/como-incluir-pessoas-timidas-e-visitantes", "/guias/como-conduzir-uma-celula-participativa", "/materiais/checklist-do-lider"],
  },
  {
    slug: "como-transformar-respostas-erradas-em-aprendizado",
    title: "Como transformar respostas erradas em aprendizado",
    eyebrow: "Aprender durante o jogo",
    summary:
      "Um método simples para corrigir sem constranger, explicar o raciocínio e usar a referência bíblica para construir compreensão duradoura.",
    audience: "Professores, líderes e famílias",
    category: "Aprendizado",
    readTime: "8 min de leitura",
    ...gamesImage,
    updatedAt: "6 de setembro de 2026",
    updatedAtISO: "2026-09-06",
    introduction: [
      "Em um jogo educativo, errar não é uma interrupção do aprendizado; é uma oportunidade de descobrir como a pessoa interpretou a pergunta. Uma correção apressada informa a letra certa. Uma boa conversa mostra onde procurar, como comparar alternativas e por que a resposta faz sentido no texto.",
      "O cuidado é especialmente importante quando o grupo reúne pessoas com histórias diferentes de acesso à Bíblia. Conhecimento prévio não deve virar medida de valor, maturidade ou fé.",
    ],
    sections: [
      {
        heading: "O método em quatro movimentos",
        steps: [
          { title: "Acolha a tentativa", text: "Agradeça a resposta e evite reações que façam o erro parecer absurdo." },
          { title: "Descubra a pista", text: "Pergunte o que levou a pessoa ou equipe a escolher aquela alternativa." },
          { title: "Volte à referência", text: "Leia o trecho necessário e identifique a palavra, ação ou sequência que esclarece a questão." },
          { title: "Reformule", text: "Peça que alguém explique a resposta correta com as próprias palavras." },
        ],
      },
      {
        heading: "Exemplo completo: Pedro ou André?",
        paragraphs: [
          "Pergunta: 'Qual discípulo saiu do barco e caminhou sobre as águas em direção a Jesus?' Alternativas: Pedro, André, João ou Tomé. Uma equipe escolhe André e explica: 'Lembramos que ele era irmão de Pedro e estava entre os primeiros discípulos'. A associação não é absurda; ela reuniu informações verdadeiras, mas não identificou a ação narrada.",
          "Em vez de responder apenas 'errado, era Pedro', o condutor pode dizer: 'Vocês lembraram corretamente que André era irmão de Pedro. Vamos descobrir qual dos dois aparece nesta ação'. Leia Mateus 14:28-31 e peça ao grupo que encontre o nome, o pedido feito a Jesus e o que acontece depois que o discípulo sai do barco.",
          "Depois da leitura, convide a equipe a reformular: 'Em Mateus 14, Pedro pede para ir até Jesus e sai do barco. André aparece em João 1:40-42 como o irmão que encontra Simão e o leva a Jesus'. A correção preserva a pista válida, separa duas narrativas e ancora a resposta em ações verificáveis.",
        ],
        reference: "Mateus 14:22-33; João 1:40-42",
      },
      {
        heading: "Como adaptar a mesma correção ao grupo",
        steps: [
          { title: "Com crianças", text: "Leia Mateus 14:28-31 em frases curtas e use duas perguntas: 'Quem pediu para ir?' e 'Quem saiu do barco?'. Mostre que consultar a Bíblia faz parte do jogo e evite pedir uma explicação longa diante da turma." },
          { title: "Com adolescentes", text: "Peça que a equipe explique a pista usada, consulte os dois textos e crie uma frase que diferencie Pedro de André. Valorize o raciocínio corrigido, não apenas a velocidade da resposta." },
          { title: "Com adultos", text: "Além de localizar os personagens, pergunte que detalhe do enunciado resolve a questão e se as alternativas são justas. Isso transforma a correção em leitura atenta e também testa a qualidade da pergunta." },
          { title: "Com um grupo misto", text: "Forme duplas de consulta sem colocar sempre a pessoa mais experiente como porta-voz. Uma pessoa encontra a referência; a outra resume a evidência em uma frase." },
        ],
        note: "A adaptação muda a linguagem e a forma de participação, mas conserva o mesmo percurso: ouvir a pista, abrir o texto, localizar a evidência e reformular.",
      },
      {
        heading: "Quando a pergunta é o problema",
        bullets: [
          "Duas alternativas podem ser defendidas por traduções ou contextos diferentes.",
          "O enunciado depende de um detalhe que não aparece na referência indicada.",
          "A pergunta usa uma tradição conhecida como se fosse afirmação direta do texto.",
          "A linguagem é mais difícil do que o conceito que se pretende avaliar.",
          "A explicação não demonstra por que as demais alternativas estão erradas.",
        ],
        note: "Se muitas pessoas interpretam a questão da mesma maneira, revise a pergunta antes de concluir que todas desconhecem o conteúdo.",
      },
      {
        heading: "Como manter o ritmo do jogo",
        paragraphs: [
          "Nem toda resposta precisa virar uma exposição longa. Escolha duas ou três perguntas por rodada para aprofundar. Nas demais, apresente a explicação breve e diga que a referência continuará disponível para leitura.",
          "Em equipes, permita uma tentativa de rebote depois que o primeiro grupo explicar o raciocínio. Isso mantém a atenção e valoriza a escuta, desde que o erro não seja tratado como chance de humilhar o adversário.",
        ],
      },
      {
        heading: "Perguntas para quem conduz",
        questions: [
          "A pessoa entendeu mais depois da correção ou apenas perdeu o ponto?",
          "A referência foi realmente lida?",
          "A explicação cabe na linguagem e no tempo do grupo?",
          "Existe alguma pergunta que precisa ser reescrita antes de outra rodada?",
        ],
        reference: "Provérbios 18:13; Atos 17:11",
      },
    ],
    relatedPaths: ["/quiz-biblico", "/biblioteca/quiz-para-escola-biblica-dominical", "/guias/como-usar-quiz-biblico-em-celulas"],
  },
  {
    slug: "como-preparar-um-encontro-para-jovens",
    title: "Como preparar um encontro bíblico para jovens",
    eyebrow: "Participação com propósito",
    summary:
      "Um caminho para ligar perguntas reais, leitura bíblica e atividades participativas sem depender de uma programação longa ou artificial.",
    audience: "Líderes de jovens",
    category: "Juventude",
    readTime: "9 min de leitura",
    ...discussionImage,
    updatedAt: "29 de agosto de 2026",
    introduction: [
      "Um encontro para jovens não se torna relevante apenas por usar tecnologia, música ou competição. Relevância aparece quando as perguntas tratadas são reconhecíveis, o texto bíblico é lido com honestidade e os participantes têm espaço real para pensar e contribuir.",
      "A atividade deve servir ao tema. Escolher primeiro um jogo e depois procurar uma mensagem que combine costuma produzir encontros fragmentados. Comece pela necessidade e pela passagem; só então decida qual formato ajuda o grupo a entrar na conversa.",
    ],
    sections: [
      {
        heading: "Prepare a partir de uma pergunta real",
        steps: [
          { title: "Observe", text: "Que conversas, escolhas ou pressões aparecem no cotidiano do grupo?" },
          { title: "Formule", text: "Transforme o tema em uma pergunta aberta, sem presumir a resposta de todos." },
          { title: "Estude", text: "Escolha uma passagem que trate o assunto em seu contexto, não apenas um versículo isolado." },
          { title: "Desenhe", text: "Selecione uma dinâmica que ajude a observar, conversar ou praticar o aprendizado." },
        ],
      },
      {
        heading: "Roteiro de setenta minutos",
        schedule: [
          { time: "10 min", title: "Chegada", text: "Conversa livre e uma pergunta simples relacionada ao tema." },
          { time: "15 min", title: "Atividade", text: "Jogo em equipes ou dinâmica curta, com regras explicadas de uma vez." },
          { time: "15 min", title: "Texto", text: "Leitura em vozes alternadas, contexto e observações dos próprios jovens." },
          { time: "20 min", title: "Conversa", text: "Perguntas em trios e depois uma síntese no grupo maior." },
          { time: "10 min", title: "Resposta", text: "Ação prática, oração e indicação de uma leitura para continuar." },
        ],
      },
      {
        heading: "O que favorece participação",
        bullets: [
          "Dar tempo para pensar antes de chamar alguém pelo nome.",
          "Permitir perguntas anônimas e respostas em grupos pequenos.",
          "Tratar dúvidas como parte do encontro, não como ameaça ao plano.",
          "Variar funções para que rapidez e extroversão não definam o protagonismo.",
          "Explicar o propósito de atividades que poderiam parecer infantis ou invasivas.",
        ],
      },
      {
        heading: "Evite atalhos de linguagem",
        paragraphs: [
          "Uma conversa séria não precisa usar palavras difíceis, mas também não deve reduzir questões complexas a frases prontas. Quando o texto bíblico exige contexto, ofereça esse contexto. Quando o grupo traz uma dúvida sem resposta imediata, registre e retome depois.",
          "Não use medo, vergonha ou comparação para produzir uma decisão rápida. Mudanças sustentáveis precisam de compreensão, comunidade e tempo.",
        ],
      },
      {
        heading: "Depois do encontro",
        questions: [
          "Quem participou e quem ficou à margem?",
          "Qual pergunta gerou pensamento, não apenas respostas rápidas?",
          "O texto bíblico permaneceu central?",
          "Que acompanhamento foi prometido e precisa acontecer?",
        ],
        reference: "1 Timóteo 4:12; Eclesiastes 12:1",
      },
    ],
    relatedPaths: ["/guias/dinamicas-biblicas-para-jovens", "/dinamicas-para-celulas/verdade-ou-pressao", "/monte-seu-encontro"],
  },
];

const pausedEditorialSlugs = [
  "encontro-de-casais-sobre-financas",
  "como-conduzir-conversas-sensiveis",
];

export const editorialArticles = editorialArticleDrafts.filter(
  (article) => !pausedEditorialSlugs.includes(article.slug),
);

export function getEditorialArticle(slug: string) {
  return editorialArticles.find((article) => article.slug === slug);
}
