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
        "Uma sessão de 75 minutos com equipes, configuração do Modo Grupo, pares para aquecer, rodada oral com gabarito e alternativa para falta de internet.",
    audience: "Grupos e famílias",
    category: "Jogos bíblicos",
      readTime: "7 min de leitura",
    ...gamesImage,
      updatedAt: "12 de outubro de 2026",
      updatedAtISO: "2026-10-12",
    introduction: [
        "Este roteiro organiza uma noite de 75 minutos para 6 a 16 participantes, divididos em duas equipes. O objetivo é conhecer histórias e conversar durante os jogos, sem eliminar quem errou ou exigir que visitantes demonstrem conhecimento. Um único aparelho pode servir a todos: quem conduz lê e confirma as escolhas.",
        "Você encontra aqui a preparação, a configuração da rodada digital e exemplos que também funcionam oralmente. A sessão não precisa usar todos os jogos do site nem terminar com um vencedor. As perguntas e combinações deste artigo são demonstrações com gabarito visível; as rodadas digitais têm seu próprio conjunto de itens.",
    ],
    sections: [
      {
          heading: "Prepare a sala e o aparelho",
        paragraphs: [
            "Separe uma Bíblia, um relógio e um celular, tablet ou computador para o condutor. Papel e caneta são opcionais para registrar respostas; projetor, impressão, prêmios e aparelhos individuais não são necessários. Antes da chegada, abra Modo Grupo e Complete a Frase, confira se o texto pode ser lido confortavelmente e teste a conexão.",
            "Antes do encontro, guarde em uma anotação local os três pares, as quatro perguntas e as três frases abaixo, incluindo alternativas, respostas e referências. Confira se a anotação abre com a conexão desligada e deixe uma Bíblia impressa disponível para consulta. Manter apenas a página aberta não garante acesso depois de recarregar. O site não promete funcionamento offline. Combine com uma pessoa voluntária quem vai acompanhar o tempo.",
        ],
        bullets: [
            "Organize assentos com passagem livre e ofereça leitura em voz alta. Não mova móveis pesados nem exija que participantes fiquem em pé para responder.",
            "Se houver crianças, um adulto responsável acompanha e decide a adequação dos textos. Não use perguntas sobre doença, medo ou situações pessoais para animar a competição.",
            "Avise que é possível consultar, pedir releitura ou apenas observar. Não há prendas, castigos, obrigação de orar em voz alta ou exposição do placar individual.",
        ],
      },
      {
        heading: "Roteiro sugerido para 75 minutos",
        schedule: [
            { time: "0–10 min", title: "Chegada e combinados", text: "Apresente a proposta, forme duas equipes e explique a consulta e a opção de observar. Escolham nomes simples, sem classificar uma equipe como mais experiente." },
            { time: "10–25 min", title: "Três pares para aquecer", text: "Use os pares prontos abaixo: 3 minutos para explicar, 6 para conversar e 6 para conferir as referências. Essa etapa não precisa valer pontos." },
            { time: "25–45 min", title: "Modo Grupo ou rodada oral", text: "No site, escolha duas equipes, tema geral, cinco perguntas, Sem tempo e rebote desativado. Reserve tempo para as explicações. Sem conexão, use as quatro perguntas orais deste artigo." },
            { time: "45–60 min", title: "Complete a Frase", text: "Faça até três frases no jogo ou use as três frases orais abaixo. Reserve 2 minutos para explicar, até 9 para conversar e conferir as frases e 4 para pausa ou releitura. Se a consulta demorar, faça uma ou duas frases, preservando a conferência." },
            { time: "60–75 min", title: "Conferência e encerramento", text: "Releia uma referência que gerou dúvida, use as perguntas de fechamento e agradeça a colaboração. Uma oração breve é opcional; não é necessário ouvir cada participante em toda pergunta." },
        ],
          note: "Os intervalos somam 75 minutos sugeridos, não medidos em aplicação real. Ao chegar ao minuto 45, conclua a referência da pergunta em andamento e não abra outra. Se houver atraso, omita o bloco de frases e siga ao fechamento; não corte a explicação da resposta. O tempo organiza a sessão; terminar antes é uma possibilidade legítima.",
      },
      {
        heading: "Kit de condução: o que ler em cada etapa",
        steps: [
          { title: "Combinado inicial", text: "Leia: 'Podemos consultar a Bíblia, pedir releitura ou apenas acompanhar. Não há eliminação. Na rodada de perguntas, as equipes alternam; nas frases, todos decidem juntos'. Escolham se a rodada oral terá um ponto por acerto ou nenhum placar." },
          { title: "Pares, depois perguntas", text: "Em Aquecimento pronto, leia as duas listas antes de revelar as ligações. Em Rodada oral, leia só o título e as alternativas de cada item; a resposta e a explicação estão no mesmo item para o condutor. Não projete o gabarito antes da escolha. Alterne as equipes nas quatro perguntas." },
          { title: "Frases e encerramento", text: "Em Troque o ritmo, leia cada início e suas duas opções; depois confira a resposta e a passagem. Use as perguntas de fechamento para retomar uma descoberta. Os exemplos orais são preparados para este roteiro, não uma sequência garantida dos jogos digitais." },
        ],
        note: "Sem impressão: quem conduz lê a anotação local e o grupo consulta a Bíblia. Teste a anotação antes da chegada. Não dependa de abrir links para recuperar os gabaritos durante uma falha de conexão.",
      },
      {
        heading: "Como formar equipes sem constranger",
        steps: [
            { title: "Formação simples", text: "Convide as pessoas a alternar entre duas equipes, permitindo que alguém permaneça com uma pessoa de apoio. Não faça teste prévio nem peça que se declarem iniciantes ou especialistas." },
            { title: "Papéis voluntários", text: "Uma pessoa lê, outra procura a referência e outra comunica a escolha. Troquem funções quando houver interesse, sem obrigar quem prefere ouvir a ser porta-voz." },
            { title: "Turnos previsíveis", text: "A equipe da vez conversa antes de responder; a outra espera a conclusão. Na rodada oral, dê cerca de 1 minuto para consulta e alterne a equipe em cada pergunta. Um pedido de releitura não é uma tentativa extra." },
            { title: "Placar sem julgamento", text: "O Modo Grupo atribui 10 pontos ao acerto inicial e 5 ao rebote, quando ativado. Nesta sessão, desative o rebote para simplificar. Na alternativa oral, use 1 ponto por acerto, sem desconto, ou dispense pontos; não misture esse placar com o digital. Reconheça colaboração verbalmente, sem bônus subjetivos por comportamento." },
        ],
      },
      {
          heading: "Aquecimento pronto: três pares",
          paragraphs: [
            "Leia os itens da primeira coluna: Noé, Rute e Caná. Depois leia a segunda coluna em ordem misturada: acompanhou Noemi até Belém; água transformada em vinho; recebeu instruções para construir a arca. As equipes propõem as três combinações, oralmente ou por escrito. A consulta é permitida e não há corrida para pegar o aparelho.",
            "Gabarito comentado: Noé e a arca, em Gênesis 6:13-22; Rute e a companhia de Noemi até Belém, em Rute 1:16-19; Caná e o sinal no casamento, em João 2:1-11. Peça que confiram um desses pares na passagem e indiquem a palavra ou ação que sustenta a ligação. Este aquecimento mistura categorias; não reproduz uma tela específica de Ligue os Pares.",
          ],
          sources: [{ title: "Conhecer Ligue os Pares", href: "/ligue-os-pares" }],
        },
        {
          heading: "Rodada oral para falta de conexão",
          paragraphs: [
            "Leia uma pergunta por vez, sem mostrar o gabarito antes da escolha. Uma equipe responde e a outra pode acompanhar a leitura da referência. Se ninguém quiser responder, revele e confira juntas. As perguntas abaixo são deste roteiro e não representam a sequência garantida do Modo Grupo.",
          ],
          steps: [
            { title: "1. Em que cidade Zaqueu encontrou Jesus?", text: "Alternativas: A) Jericó; B) Belém; C) Caná. Resposta: A, Jericó. Lucas 19:1-6 situa a entrada de Jesus na cidade e apresenta Zaqueu procurando vê-lo. Localizem o nome da cidade no versículo 1, sem exigir memorização." },
            { title: "2. Qual era a profissão compartilhada por Paulo, Áquila e Priscila?", text: "Alternativas: A) pescadores; B) fabricantes de tendas; C) agricultores. Resposta: B, fabricantes de tendas. Atos 18:2-3 apresenta o casal e explica que Paulo ficou e trabalhou com eles por terem o mesmo ofício. A pergunta trata do trabalho citado, não de todas as atividades dessas pessoas." },
            { title: "3. Em qual rio Jesus foi batizado por João?", text: "Alternativas: A) Nilo; B) Eufrates; C) Jordão. Resposta: C, Jordão. Marcos 1:9 informa o lugar e quem realizou o batismo; os versículos seguintes descrevem o que acontece depois." },
            { title: "4. O que Moisés viu que ardia sem se consumir?", text: "Alternativas: A) uma sarça; B) um barco; C) uma mesa. Resposta: A, uma sarça, um arbusto. Êxodo 3:1-4 situa a cena e registra a atenção de Moisés ao que vê. Explique a palavra antes de cobrar reconhecimento." },
          ],
          note: "As quatro perguntas exploram cenas diferentes do aquecimento. Em 20 minutos, use 2 para explicar, até 4 por pergunta para leitura, consulta e gabarito, e 2 para a transição. Se uma referência exigir mais tempo, retire a última pergunta. Leia o apoio após cada escolha. Nenhuma equipe é eliminada por errar.",
        },
        {
          heading: "Troque o ritmo com Complete a Frase",
          paragraphs: [
            "No jogo, leia o início e as quatro alternativas. As duas equipes conversam juntas, e uma pessoa confirma a escolha na tela. Nesta etapa não é preciso transferir o resultado para o placar das equipes: ela funciona como rodada cooperativa. Após responder, leia a frase completa e confira a referência.",
            "Para a rodada oral, use os três exemplos abaixo, preparados com duas opções para este roteiro. Eles não reproduzem obrigatoriamente as alternativas nem a ordem do jogo. As expressões podem variar entre traduções: confira o sentido na passagem, sem penalizar uma redação equivalente. As opções incorretas são distratores criados para a atividade, não citações bíblicas.",
          ],
          steps: [
            { title: "1. A tua palavra é lâmpada para os meus pés...", text: "A) e luz para o meu caminho; B) e abrigo para a minha alma. Resposta: A. Salmos 119:105 usa as imagens de lâmpada e luz para descrever a palavra como orientação. Localizem as duas imagens na tradução usada; não é uma promessa de iluminação física." },
            { title: "2. O Senhor é o meu pastor...", text: "A) nunca precisarei descansar; B) nada me faltará. Resposta: B. Salmos 23:1-3 apresenta a imagem do pastor e fala de pastos, águas e restauração. A expressão de confiança não deve ser usada como garantia de riqueza nem para cobrar que alguém negue dificuldades." },
            { title: "3. Tudo tem o seu tempo determinado...", text: "A) e há tempo para todo propósito debaixo do céu; B) e todos os dias são iguais. Resposta: A. Eclesiastes 3:1-8 enumera tempos e situações contrastantes. Localizem dois contrastes; a passagem não fornece o cronograma deste encontro nem uma previsão pessoal." },
          ],
          reference: "Salmos 119:105",
          sources: [{ title: "Abrir Complete a Frase", href: "/complete-a-frase" }],
        },
        {
          heading: "Ajustes para o grupo e para o tempo",
        bullets: [
            "Com 4 ou 5 pessoas, joguem em uma equipe cooperativa e dispensem ranking. Com mais de 16, usem equipes pequenas para discutir; o condutor recolhe uma escolha coletiva por turno, sem prometer que todos falarão em toda pergunta.",
            "Para 45 minutos: 5 de chegada, 10 de pares, 15 de perguntas orais, 5 de frase e 10 de fechamento. Use duas perguntas em vez de quatro se a leitura exigir mais tempo.",
            "Se o som estiver ruim ou a tela for pequena, priorize leitura em voz alta e consulta compartilhada. Não exija rapidez para compensar um problema de equipamento.",
            "Não publique respostas, placares com nomes ou fotografias sem autorização. Não use premiações caras ou cobranças para participar; o roteiro funciona sem prêmios.",
        ],
      },
      {
        heading: "Perguntas para o fechamento",
        questions: [
            "Qual referência ajudou a confirmar uma resposta? Um exemplo é Rute 1:19, que informa a chegada a Belém.",
            "Que palavra precisou de explicação? Sarça é uma possibilidade; releiam o trecho para observar como ela aparece na cena.",
            "Qual regra ajudou a participar sem pressa? Consulta e releitura são exemplos, mas cada pessoa pode preferir apenas ouvir.",
        ],
          paragraphs: [
            "Se desejarem, leiam Colossenses 3:16 como apoio ao ensino e à palavra de Cristo na vida comunitária. A passagem não estabelece jogos, placar ou duração: essas são escolhas práticas deste roteiro. Agradeça a participação e encerre sem pedir relatos pessoais ou compromissos públicos.",
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
      "Um encontro pronto sobre bondade e gratidão, com leitura de Colossenses 3:12-17, cinco situações para uma dinâmica, perguntas comentadas e cronograma de uma hora.",
    audience: "Líderes de célula",
    category: "Condução de grupos",
    readTime: "9 min de leitura",
    ...discussionImage,
    updatedAt: "12 de outubro de 2026",
    updatedAtISO: "2026-10-12",
    introduction: [
      "Este encontro tem um tema definido: pequenos gestos que aproximam. O grupo vai ler Colossenses 3:12-17 e criar respostas de bondade e gratidão para situações fictícias de uma reunião. A proposta serve para adultos ou jovens acompanhados pelo responsável do grupo, sem tarefa pessoal para depois. Os 60 minutos são uma duração sugerida, não medida em aplicação real.",
      "Você encontra abaixo a preparação, as situações da dinâmica, as perguntas e o apoio para conduzir a conversa. Organize os participantes em duplas, deixe a passagem aberta e acompanhe os tempos do cronograma. Os exemplos permitem participar mesmo a quem está conhecendo a Bíblia agora.",
    ],
    sections: [
      {
        heading: "Prepare o encontro em dez minutos",
        paragraphs: [
          "O objetivo é reconhecer atitudes presentes no texto e traduzi-las em ações observáveis: receber alguém, escutar uma resposta, ajudar numa tarefa e agradecer um cuidado. O roteiro principal foi pensado para 6 a 16 participantes. As adaptações para outros tamanhos aparecem no final.",
          "A preparação de dez minutos acontece antes da chegada e não integra os 60 minutos do encontro. Leia as situações e seus exemplos de apoio; escolha apenas duas para a abertura. Se depender de internet, guarde as instruções em uma anotação local e tenha a passagem numa Bíblia impressa. Uma página aberta não garante acesso após recarregar sem conexão.",
        ],
        bullets: [
          "Separe uma Bíblia ou um celular com Colossenses 3:12-17. Leia a passagem antes do encontro; a turma pode acompanhar na tradução que já utiliza.",
          "Disponibilize cinco papéis com as situações da próxima seção, canetas e um relógio. Você também pode ler as situações em voz alta e dispensar os papéis.",
          "Organize cadeiras em círculo ou ao redor de uma mesa e forme duplas. Se o número de pessoas for ímpar, faça um trio.",
          "Combine com alguém a leitura da passagem. Peça uma leitura pausada e explique previamente palavras que o grupo talvez não conheça, como mansidão: uma maneira gentil de agir e falar.",
          "Deixe claro no início que é possível passar a vez. A dinâmica usa personagens e situações fictícias; basta comentar o exemplo proposto.",
        ],
      },
      {
        heading: "Cronograma: do início ao minuto 60",
        schedule: [
          { time: "0-8 min", title: "Receber e apresentar", text: "Use 3 minutos para acolher, 2 para explicar a proposta e a opção de ouvir ou passar e 3 para formar duplas ou um trio. Apresentar-se é opcional; não peça relatos sobre o dia. Demonstre como encontrar a passagem." },
          { time: "8-15 min", title: "Dinâmica: um gesto, uma frase", text: "Leia duas das situações prontas abaixo. Em cada uma, as duplas escolhem um gesto de ajuda e uma frase acolhedora. Ouça duas respostas por situação e faça a ligação com a leitura." },
          { time: "15-27 min", title: "Ler e observar", text: "Leia Colossenses 3:12-17, apresente o contexto em duas frases e releia a passagem. Peça que as duplas localizem uma atitude e uma orientação de gratidão." },
          { time: "27-45 min", title: "Conversar com o texto aberto", text: "Use as quatro perguntas comentadas. Reserve cerca de quatro minutos para cada uma e os dois minutos finais para reunir as descobertas do grupo." },
          { time: "45-55 min", title: "Melhorar uma resposta fictícia", text: "Use 2 minutos para reler uma situação, 4 para a dupla propor um gesto e uma frase, 3 para ouvir até três contribuições voluntárias e 1 para resumir. Não é compromisso para a semana nem encenação obrigatória." },
          { time: "55-60 min", title: "Agradecer e encerrar", text: "Use 1 minuto para retomar uma descoberta, até 2 para a oração opcional ou uma releitura e 2 para avisos e despedida. Não cobre motivos pessoais de gratidão nem oração em voz alta." },
        ],
        note: "Os blocos somam 8 + 7 + 12 + 18 + 10 + 5 = 60 minutos sugeridos. Se houver atraso, use apenas as perguntas 1 e 4 e reduza as contribuições coletivas; preserve a leitura e os cinco minutos finais. Não tente compensar o atraso exigindo respostas rápidas.",
      },
      {
        heading: "Dinâmica pronta: um gesto, uma frase",
        paragraphs: [
          "Explique assim: 'Vou ler uma situação. Em dupla, escolham uma coisa que alguém poderia fazer e uma frase que ajudaria nesse momento'. Use duas situações no encontro de hoje; as outras ficam como alternativas para outra reunião. O desafio é propor algo simples que caiba em uma frase e possa ser realizado.",
        ],
        bullets: [
          "Situação 1: uma pessoa chega pela primeira vez e fica perto da porta, sem saber onde sentar.",
          "Situação 2: durante a leitura, alguém se atrapalha com o nome de um livro bíblico e precisa recomeçar.",
          "Situação 3: uma pessoa ajuda a arrumar as cadeiras enquanto o restante do grupo conversa.",
          "Situação 4: alguém começa a responder, mas é interrompido antes de terminar a ideia.",
          "Situação 5: um participante chega com uma Bíblia emprestada e demora a encontrar a passagem.",
        ],
        steps: [
          { title: "Apresente e pense", text: "Reserve um minuto para explicar a atividade. Leia a primeira situação e dê um minuto para a conversa em duplas." },
          { title: "Ouça e repita", text: "Use um minuto para ouvir duas duplas. Repita o mesmo processo com a segunda situação: um minuto de conversa e um para compartilhar." },
          { title: "Conecte com a leitura", text: "Nos dois minutos finais, retome um exemplo: aproximar uma cadeira e dizer 'Pode sentar aqui; meu nome é...' pode expressar bondade. Agradecer a quem arrumou o espaço reconhece um cuidado. Convide o grupo a procurar atitudes semelhantes no texto." },
        ],
      },
      {
        heading: "Apoio para as cinco situações",
        steps: [
          { title: "1. Chegada sem saber onde sentar", text: "Gesto possível: indicar um assento livre, sem mover a pessoa ou tocar nela. Frase: 'Há um lugar aqui; prefere sentar perto da mesa ou ali?'. A escolha continua com quem chegou." },
          { title: "2. Recomeço na leitura", text: "Gesto possível: dar tempo para recomeçar e oferecer ajuda sem assumir a leitura. Frase: 'Podemos esperar; quer tentar de novo ou prefere que eu leia?'. Não imite o erro nem peça que alguém repita uma palavra diante do grupo." },
          { title: "3. Ajuda com as cadeiras", text: "Gesto possível: reconhecer a ajuda e perguntar antes de colaborar. Frase: 'Obrigado por preparar os lugares. Posso ajudar com algo leve?'. Não atribua tarefas a quem não se ofereceu nem proponha mover móveis pesados." },
          { title: "4. Uma resposta interrompida", text: "Gesto possível: devolver a oportunidade de concluir, se a pessoa desejar. Frase: 'Vamos deixar esta ideia terminar; você quer continuar?'. Se ela preferir passar, siga sem insistir nem transformar a interrupção em julgamento de alguém." },
          { title: "5. Procurar a passagem", text: "Gesto possível: mostrar no índice onde fica Colossenses, se a ajuda for aceita. Frase: 'Quer procurar comigo no índice ou prefere acompanhar a leitura?'. Não pegue a Bíblia da pessoa sem autorização nem faça teste de conhecimento." },
        ],
        note: "São exemplos de organização criados para a atividade, não respostas únicas nem acontecimentos narrados na passagem. Aceite outras propostas respeitosas. Use apenas duas situações na abertura; a revisão final retoma uma delas, sem acrescentar cinco rodadas ao cronograma.",
      },
      {
        heading: "Leitura: convivência, palavras e gratidão",
        paragraphs: [
          "Colossenses 3 relaciona a vida em Cristo com atitudes e relações. Nos versículos 12 a 17, o foco inclui a convivência entre pessoas da comunidade cristã: bondade, humildade, mansidão, paciência, perdão, amor, paz e gratidão. O convite a ensinar, orientar e cantar aparece junto dessas atitudes.",
          "Depois da primeira leitura, diga: 'Este trecho nos ajuda a observar como a fé aparece nas palavras e nas ações de um grupo. Vamos procurar no texto o que podemos praticar juntos'. Na segunda leitura, peça que cada dupla encontre uma atitude do versículo 12 e uma orientação dos versículos 15 a 17.",
          "Mantenha a Bíblia aberta durante a conversa. A lista começa com a descrição de pessoas amadas por Deus e segue para sua convivência; o versículo 17 reúne palavras, ações e agradecimento. Essa sequência ajuda a conversar sobre o conjunto da passagem, em vez de escolher uma palavra isolada como regra para outra pessoa.",
          "Leia o trecho integralmente, inclusive a menção ao perdão no versículo 13. Esta atividade se limita à observação do texto e às cenas fictícias: não pede relatos íntimos, reconciliações públicas ou aconselhamento sobre conflitos. Se surgir uma questão pessoal, não a desenvolva diante do grupo; explique o limite do encontro e respeite a privacidade. Não use a passagem para pressionar alguém a aceitar uma situação que lhe faça mal.",
        ],
        reference: "Colossenses 3:12-17",
      },
      {
        heading: "Quatro perguntas com apoio para quem conduz",
        questions: [
          "Quais atitudes aparecem no versículo 12? Que gesto da dinâmica pode representar uma delas?",
          "No versículo 14, o que recebe destaque? Como isso ajuda a relacionar as atitudes mencionadas antes?",
          "Que atividades do grupo aparecem no versículo 16? Como dar espaço para aprender uns com os outros?",
          "Onde o agradecimento aparece nos versículos 15 a 17? Que palavras ou ações cotidianas podem expressá-lo?",
        ],
        steps: [
          { title: "Pergunta 1: localizar antes de aplicar", text: "As atitudes citadas são misericórdia, bondade, humildade, mansidão e paciência. Aceite a forma usada na tradução do participante. Como exemplo de aplicação, oferecer ajuda para localizar a passagem pode expressar bondade e paciência; essa ação é uma proposta do encontro, não um fato narrado no versículo." },
          { title: "Pergunta 2: perceber a ligação", text: "O amor recebe destaque e é apresentado como vínculo. Peça que o grupo observe como ele se relaciona com a convivência descrita nos versículos 12 e 13. Uma pessoa pode explicar sua ideia com um dos exemplos fictícios, sem precisar contar uma situação pessoal." },
          { title: "Pergunta 3: observar o aspecto coletivo", text: "O texto menciona ensinar e orientar uns aos outros e cantar. A conversa em duplas, a leitura acompanhada e a escuta de quem encontrou outro detalhe são maneiras possíveis de favorecer aprendizado compartilhado neste encontro. São adaptações práticas, não um formato de reunião imposto pela passagem." },
          { title: "Pergunta 4: reconhecer a gratidão", text: "O versículo 15 convida à gratidão; os versículos seguintes relacionam cânticos, palavras e ações ao agradecimento. Retome a situação das cadeiras: agradecer de forma específica, dizendo o cuidado que foi percebido, é um exemplo simples para o grupo experimentar." },
        ],
        note: "Leia uma pergunta por vez, permita uma breve conversa em duplas e ouça duas ou três contribuições. Se uma interpretação gerar dúvida, volte ao versículo e registre o ponto para conferir depois.",
        reference: "Colossenses 3:12; 3:14; 3:16; 3:15-17",
      },
      {
        heading: "Uma resposta melhor e um encerramento preparado",
        paragraphs: [
          "Nos 2 minutos iniciais, releia uma das situações usadas na abertura. Em 4 minutos, cada dupla melhora sua resposta: ela oferece ajuda concreta, permite recusar e evita decidir pela outra pessoa? Exemplo para a situação 5: substituir 'Me dê sua Bíblia que eu encontro' por 'Quer procurar comigo no índice?'. É possível apontar um dos exemplos, escrever ou apenas ouvir; ninguém precisa encenar.",
          "Use 3 minutos para até três contribuições voluntárias e 1 para a síntese. A conferência é sobre a instrução fictícia, não sobre o comportamento de quem respondeu. Não há um gabarito único nem lista de compromissos. A atividade termina aqui, sem tarefa para a semana ou verificação na reunião seguinte.",
          "Nos cinco minutos finais, use 1 para retomar uma descoberta sobre a leitura, até 2 para uma oração opcional ou releitura do versículo 12 e 2 para avisos e despedida. O condutor pode dizer: 'Senhor Jesus, obrigado por este encontro. Ajuda-nos a ouvir com paciência e a oferecer ajuda com respeito. Amém'. Cada pessoa pode acompanhar em silêncio; não distribua falas de oração obrigatórias.",
        ],
      },
      {
        heading: "Adapte o tamanho do grupo e o ritmo",
        steps: [
          { title: "Quatro a oito pessoas", text: "Ouça todas as duplas que desejarem falar, mantendo respostas breves. Quem conduz também pode participar da dinâmica. Preserve os minutos de leitura mesmo se houver menos respostas para compartilhar." },
          { title: "Dezessete a vinte e quatro pessoas", text: "Forme trios para consultar as perguntas. Na conversa coletiva, convide até um trio voluntário por pergunta, sem prometer que todos falarão. Escutar, apontar o texto e observar são opções. Para um grupo maior, organize círculos menores com um condutor por círculo." },
          { title: "O grupo está tímido", text: "Leia primeiro o exemplo da cadeira e permita que as duplas escolham entre dois gestos: oferecer um lugar ou mostrar a passagem. Depois, pergunte por que escolheram aquele gesto. Deixe a explicação para quem desejar falar." },
          { title: "Uma conversa tomou mais tempo", text: "Use só uma situação na dinâmica e encurte o compartilhamento final. Se a discussão se alongar depois, escolha as perguntas 1 e 4 para a conversa coletiva, mantendo a leitura integral e o horário de encerramento." },
        ],
      },
      {
        heading: "Confira antes de começar",
        bullets: [
          "Colossenses 3:12-17 está separado para a leitura, e a pessoa que vai ler conhece o trecho.",
          "Escolhi duas das cinco situações e consigo explicar o desafio de um gesto e uma frase.",
          "Tenho o cronograma visível e sei quais compartilhamentos encurtar, se necessário.",
          "As duplas ou trios conseguem conversar, e quem chegou agora entende o formato.",
          "As perguntas, os cinco exemplos de apoio, a revisão fictícia e o encerramento opcional estão disponíveis nesta página; não há tarefa posterior.",
        ],
        paragraphs: [
          "Os textos de 1 Coríntios 14:26 e 14:40 podem apoiar a preparação de quem conduz: tratam de edificação e ordem na reunião da comunidade. Os sessenta minutos e a dinâmica são escolhas práticas deste roteiro. Use o encontro como uma proposta adaptável ao seu grupo.",
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
        "Um exemplo de atividade com consulta livre, frases de acolhimento e opções de participação para receber visitantes sem exigir fala ou exposição pessoal.",
    audience: "Líderes e anfitriões",
    category: "Cuidado no grupo",
      readTime: "6 min de leitura",
    ...discussionImage,
      updatedAt: "8 de outubro de 2026",
      updatedAtISO: "2026-10-08",
    introduction: [
        "Participação pode acontecer pela escuta, pela consulta ao texto ou por uma resposta compartilhada. Quem conduz não precisa fazer todas as pessoas falarem. Também não deve chamar alguém de tímido diante do grupo nem concluir, a partir do silêncio, que a pessoa está desconfortável, desinteressada ou satisfeita.",
        "Este artigo trata da organização de um encontro, não de diagnóstico ou tratamento de timidez. Oferece escolhas práticas para quem chega agora e para quem prefere falar menos: saber o que vai acontecer, receber instruções claras e poder recusar um convite sem explicar o motivo. O exemplo abaixo serve a um grupo de 4 a 12 pessoas, com adaptações para grupos maiores.",
    ],
    sections: [
      {
        heading: "Antes do encontro começar",
        steps: [
            { title: "Apresente-se e ofereça um lugar", text: "Diga: 'Bom dia, sou quem vai conduzir hoje. Como prefere ser chamado? Você pode escolher onde sentar'. Não exija nome completo, apresentação pública, abraço ou relato sobre a igreja que a pessoa frequenta." },
            { title: "Explique o encontro", text: "Diga: 'Vamos ler uma passagem, fazer uma atividade em duplas e conversar. Você pode responder, consultar o texto ou apenas ouvir'. Explique palavras e regras antes de começar, sem perguntar em público quem já conhece a Bíblia." },
            { title: "Ofereça companhia sem impor", text: "Pergunte: 'Quer que eu apresente alguém para acompanhar a leitura com você?'. Aceite uma recusa e não atribua a outra pessoa a tarefa de fazer o visitante falar. Mantenha passagem livre e materiais ao alcance." },
        ],
      },
      {
          heading: "Atividade pronta: encontre os irmãos na passagem",
          paragraphs: [
            "Materiais: Bíblia ou aplicativo com Marcos 1:16-20 e um relógio. Papel e caneta são opcionais. Explique: 'Vamos consultar o texto para encontrar duas duplas de irmãos. Não é preciso saber os nomes de memória'. Leia a passagem em voz alta; uma pessoa pode acompanhar em sua própria tradução, sem necessidade de celular individual.",
            "Perguntas prontas: quem é chamado de irmão de Simão? Quem é chamado de irmão de Tiago? Que trabalho com redes aparece em cada cena? Apoio ao condutor: André é irmão de Simão, no versículo 16; João é irmão de Tiago, no 19. Simão e André lançam uma rede; Tiago e João consertam redes no barco. O texto também diz que eram pescadores. Aceite variantes de nomes da tradução usada, como Simão ou Simon, sem tratar a diferença como erro de compreensão.",
            "Não é necessário transformar essa atividade em disputa. A resposta compartilhada deve conter apenas o que a dupla escolheu dizer sobre o texto, não o que uma pessoa revelou em conversa particular. Se houver uma pergunta sobre a imagem 'pescadores de gente', localize o versículo 17 e registre a dúvida para aprofundar; a atividade não pretende esgotar o significado do chamado.",
          ],
          schedule: [
            { time: "0–2 min", title: "Combinados", text: "Ofereça responder em dupla, acompanhar a leitura ou apenas ouvir. Demonstre onde encontrar capítulo e versículo." },
            { time: "2–5 min", title: "Leitura", text: "Leia Marcos 1:16-20 sem distribuir falas obrigatórias. Explique rede como instrumento de pesca e aceite pedidos de releitura." },
            { time: "5–9 min", title: "Consulta", text: "Em duplas ou trios, localizem os dois pares de irmãos e o trabalho com as redes. Quem preferir pode consultar sozinho ou acompanhar em silêncio." },
            { time: "9–12 min", title: "Conferência", text: "Convide até duas contribuições voluntárias. Se ninguém quiser falar, o condutor mostra os versículos e lê o apoio. Encerre sem identificar quem respondeu ou ficou em silêncio." },
          ],
          note: "Total: 12 minutos. O objetivo é localizar informações com apoio. Nenhuma criança ou adulto precisa encenar pesca, fazer gestos ou explicar publicamente por que prefere observar.",
          reference: "Marcos 1:16-20",
        },
        {
          heading: "Adapte a mesma atividade, sem rotular pessoas",
        bullets: [
            "Para quem está chegando: mostre como localizar Marcos 1 e leia os nomes junto da pessoa, se ela aceitar. Não faça uma versão 'fácil para o visitante' anunciada diante de todos.",
            "Para quem prefere falar menos: ofereça apontar o versículo, escrever os nomes ou deixar que a dupla responda. A pessoa também pode não assumir nenhuma dessas funções.",
            "Se a leitura for difícil: o condutor lê e repete uma pergunta por vez. Não presuma que a pessoa quer ajuda; pergunte em particular quando possível e aceite sua preferência.",
            "Em grupos maiores: forme equipes de 3 a 5 e recolha até três contribuições. O limite é do formato, não uma avaliação de quem merece falar; outras perguntas podem ficar para depois.",
            "Com um jogo digital: leia a pergunta e as alternativas, permita conversa e deixe o condutor clicar. Consulta e cooperação são combinados do encontro; não alteram automaticamente as regras ou a pontuação da interface.",
        ],
      },
      {
        heading: "Frases úteis para quem conduz",
        bullets: [
            "Ao fazer um convite: 'Quem quiser pode mostrar o versículo; também é possível só acompanhar'. Evite dirigir o convite exclusivamente à pessoa que ainda não falou.",
            "Diante de uma recusa: 'Tudo bem, vamos continuar'. Não pergunte 'por quê?' nem transforme a recusa em assunto do grupo.",
            "Quando alguém interrompe: 'Vou deixar esta resposta terminar; depois ouvimos outra contribuição'. Não complete a frase da pessoa para acelerar a rodada.",
            "Quando uma voz domina: 'Obrigado. Vamos conferir no texto e abrir espaço para outra contribuição voluntária'. Não compense chamando alguém de surpresa pelo nome.",
            "Se ninguém responder: 'Podemos olhar juntos. No versículo 16 aparece André'. Não use o silêncio para ameaçar, testar conhecimento ou repetir o convite até alguém ceder.",
        ],
      },
      {
        heading: "Sinais de que a inclusão precisa melhorar",
        paragraphs: [
            "Observe situações do formato: instruções sem explicação, falas interrompidas, piadas internas e convites repetidos após uma recusa. Esses comportamentos podem ser corrigidos sem rotular participantes. O número de respostas dadas por alguém não é uma medida de acolhimento nem um objetivo a aumentar a qualquer custo.",
            "Ao final, ofereça um retorno opcional: 'As instruções ficaram claras? Há algo que você prefere diferente numa próxima vez?'. A conversa pode acontecer em particular; não exija avaliação imediata nem explicação pessoal. Se houver uma sugestão, agradeça e considere um ajuste concreto, como repetir a regra ou diminuir o tamanho das equipes.",
        ],
      },
      {
          heading: "Referências e limites do acolhimento",
          paragraphs: [
            "Romanos 15:7 apresenta o convite a receber uns aos outros à luz do acolhimento de Cristo. Nos versículos anteriores, Paulo trata da edificação do próximo e da vida em comum; não está classificando pessoas por timidez. Tiago 1:19 fala de disposição para ouvir e cuidado ao falar e irar-se. São apoios à postura de quem conduz, não receitas que garantam que todos se sentirão à vontade.",
            "A aplicação proposta é oferecer informação, escolhas e respeito ao ritmo de participação. Nenhuma técnica deste artigo substitui apoio profissional quando alguém o procura. Também não cabe ao condutor investigar motivos de silêncio ou pedir que a pessoa supere uma dificuldade diante do grupo.",
          ],
          note: "Não fotografe ou publique histórias, respostas e dados pessoais sem autorização. O convite para uma próxima atividade pode ser simples: 'Você será bem-vindo para participar como preferir'. Aceite a resposta sem cobrar compromisso.",
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
      "Um encontro de 15 minutos sobre Jesus e as crianças, com Marcos 10:13-16, perguntas comentadas, jogo de sequência e adaptações para diferentes idades.",
    audience: "Famílias com crianças",
    category: "Família",
        readTime: "7 min de leitura",
    ...familyImage,
      updatedAt: "12 de outubro de 2026",
      updatedAtISO: "2026-10-12",
    introduction: [
        "Este roteiro oferece uma leitura e uma brincadeira que podem ser realizadas em casa com um adulto responsável e uma ou mais crianças. Não exige impressão, celular, alimento ou objetos especiais: uma Bíblia ou aplicativo bíblico basta; papel e lápis são opcionais. A passagem escolhida é Marcos 10:13-16, em que Jesus recebe e abençoa crianças.",
        "Os 15 minutos são uma proposta de organização, não uma obrigação. A criança pode ouvir, perguntar, desenhar ou passar uma pergunta. Não há placar nem comparação entre irmãos. Se o momento precisar ser mais curto, preserve a leitura e uma pergunta, deixando a brincadeira para outro dia.",
    ],
    sections: [
        {
          heading: "Prepare antes de chamar as crianças",
          bullets: [
            "Leia Marcos 10:13-16 antes do encontro e deixe a passagem marcada. Se a tradução tiver palavras pouco familiares, explique-as sem mudar o sentido: repreender é dar uma bronca; abençoar é uma ação de cuidado e bênção na narrativa.",
            "Escolha um lugar confortável e um horário em que seja possível interromper outras tarefas. O celular pode ficar disponível apenas para a leitura; não é necessário recolher os aparelhos como regra da atividade.",
            "Combine: podemos perguntar, dizer que não entendemos ou preferir ouvir. O adulto ajuda com a leitura; nenhuma criança precisa ler em voz alta para participar.",
            "Se quiser desenhar, separe uma folha por criança e lápis adequados à idade. Não use alimentos ou objetos pequenos para representar personagens.",
          ],
        },
      {
        heading: "Roteiro de quinze minutos",
        schedule: [
            { time: "0–2 min", title: "Chegada", text: "Diga: 'Vamos conhecer uma cena em que crianças chegam perto de Jesus'. Pergunte o que ajuda alguém a se sentir bem recebido; aceite uma resposta breve, um gesto ou silêncio." },
            { time: "2–5 min", title: "Leitura", text: "Leia Marcos 10:13-16 devagar. Identifique três participantes: Jesus, os discípulos e as pessoas que trazem as crianças. Explique que discípulos são seguidores de Jesus. Releia uma frase se houver dúvida." },
            { time: "5–9 min", title: "Conversa", text: "Use as perguntas 1 e 2 abaixo: quem foi trazido e o que Jesus disse. A pergunta 3, sobre o que ele fez, pode substituir uma delas, sem somar outra rodada. Reserve cerca de 2 minutos por pergunta, incluindo releitura e resposta. Não é necessário ouvir cada criança em toda pergunta." },
            { time: "9–13 min", title: "Jogo de sequência", text: "Leia as quatro cenas na ordem misturada indicada abaixo. Organizem juntas o começo, a reação e o final. Se preferirem, desenhem apenas uma cena e expliquem onde ela aparece na história." },
            { time: "13–15 min", title: "Fechamento", text: "Use 1 minuto para resumir: Jesus mandou não impedir as crianças e as recebeu. No minuto restante, escolha uma oração breve opcional ou releia o versículo 14 e encerre. A criança pode apenas ouvir; não há gesto, fala ou demonstração de fé obrigatória." },
        ],
          note: "Os intervalos são contínuos e somam 15 minutos sugeridos, não medidos em aplicação real. A preparação e a leitura deste artigo acontecem antes. Se a conversa demorar, use só duas cenas no jogo ou deixe-o para outra ocasião; preserve a leitura, a conferência da resposta e o encerramento tranquilo.",
        },
        {
          heading: "O que observar em Marcos 10",
          paragraphs: [
            "A cena começa com pessoas trazendo crianças para que Jesus as tocasse. Os discípulos repreendem quem as traz; Jesus reage e manda que não impeçam as crianças. A narrativa termina com ele tomando-as nos braços e abençoando-as. Não informa o nome, a idade nem o número de crianças; não invente esses detalhes como se estivessem no texto.",
            "No versículo 15, Jesus também fala de receber o Reino de Deus como uma criança. Com crianças maiores, leiam essa frase e reconheçam que ela vai além de uma regra de boa educação. Para este encontro curto, mantenha o foco na sequência observável da cena. O desenho e o gesto de acolhimento são aplicações sugeridas pelo projeto, não uma encenação exigida pela passagem.",
          ],
          reference: "Marcos 10:13-16",
        },
        {
          heading: "Perguntas com apoio para o adulto",
          steps: [
            { title: "1. Quem estava sendo trazido até Jesus?", text: "Resposta: crianças, em Marcos 10:13. Mostre a palavra na passagem ou releia o início. A criança pode apontar, responder com suas palavras ou ouvir o apoio; não precisa adivinhar." },
            { title: "2. O que Jesus disse sobre a chegada das crianças?", text: "Resposta: que as deixassem vir e não as impedissem, em Marcos 10:14. Aceite uma frase equivalente na tradução usada. Não diga que os discípulos tinham medo ou ciúme: a passagem não explica sua motivação." },
            { title: "3. O que Jesus fez no final da cena?", text: "Resposta: tomou as crianças nos braços e as abençoou, em Marcos 10:16. Localizem as ações na leitura. Não é necessário encenar abraço ou toque para conferir a resposta." },
            { title: "4. Como poderíamos receber alguém em uma brincadeira?", text: "Pergunta opcional de aplicação, não um gabarito bíblico nem uma rodada extra obrigatória. Exemplos: mostrar as regras, oferecer um lugar ou respeitar quem prefere observar. Pode substituir uma pergunta no tempo de conversa. Não peça nomes de colegas nem relatos de exclusão." },
          ],
        },
        {
          heading: "Jogo pronto: coloque a cena em ordem",
          paragraphs: [
            "Leia estas quatro frases misturadas: A) Jesus recebe as crianças e as abençoa; B) os discípulos repreendem quem traz as crianças; C) pessoas trazem crianças até Jesus; D) Jesus diz que não as impeçam. Peça que escolham qual vem primeiro e releiam a passagem para conferir. A ordem é C, B, D, A.",
            "Sem papel, o adulto pode repetir as frases conforme a criança escolhe. Com papel, escreva uma frase em cada parte da folha e deixe que apontem a sequência, sem necessidade de recortar. Para quem ainda não lê, conte as cenas e aceite que a criança as descreva com suas próprias palavras. Não é preciso representar contato físico: um desenho ou uma explicação serve.",
            "Se a sequência sair diferente, pergunte 'Onde essa cena aparece na leitura?' e confiram juntas. Termine com a pergunta 'O que mudou entre o começo e o final?'. Uma resposta possível é que, após a tentativa de impedir a aproximação, Jesus recebe as crianças. O objetivo é localizar acontecimentos, não testar velocidade ou desempenho escolar.",
            "Instrução oral pronta: 'Vou contar quatro cenas fora de ordem. Vamos escolher o começo e conferir na Bíblia'. Leia as frases uma vez; se as letras atrapalharem, peça a cena por suas palavras e repita as que faltam. Em até 4 minutos, use 1 para explicar, 2 para escolher e 1 para reler e conferir. Não exija memorizar todas as opções. Na versão de duas cenas, leia primeiro 'Jesus recebe as crianças' e depois 'As pessoas trazem as crianças'; a ordem é trazer, depois receber, apoiada nos versículos 13 e 16.",
          ],
      },
      {
        heading: "Como adaptar por idade",
        steps: [
            { title: "Até 6 anos", text: "Depois da leitura, apresente só duas cenas: as crianças são trazidas; Jesus as recebe. Pergunte qual acontece primeiro e ofereça um desenho livre. Para crianças muito pequenas, ouvir um trecho curto já é uma forma de participação; as idades são sugestões, não uma avaliação de desenvolvimento." },
            { title: "De 7 a 10 anos", text: "Use as quatro cenas e peça que encontrem as palavras crianças e discípulos na leitura, com ajuda se necessário. Uma criança pode organizar a sequência enquanto outra confere o texto; depois troquem as funções." },
            { title: "Pré-adolescentes", text: "Se desejarem, substitua uma pergunta de conversa pela aplicação da pergunta 4 ou releia o versículo 15, sem adicionar um bloco ao cronograma. Distinga o que o texto afirma de uma hipótese: sabemos o que os discípulos fizeram, mas não por que fizeram. Registre dúvidas para estudo, sem improvisar resposta definitiva." },
            { title: "Idades misturadas", text: "A criança maior pode ler uma frase se quiser; a menor escolhe ou desenha uma cena. Não faça da maior uma professora responsável pela participação da menor. Todas podem optar por ouvir." },
        ],
      },
      {
          heading: "Sugestões independentes para outra ocasião",
          paragraphs: [
            "Escolha uma sugestão apenas se quiser repetir a experiência. Não é um programa semanal, tarefa ou compromisso de participação. Cada proposta abaixo é uma continuação possível, não um roteiro adicional de 15 minutos já cronometrado. Leia o trecho antes e ajuste a duração à criança.",
          ],
          steps: [
            { title: "Zaqueu quer ver Jesus", text: "Leia Lucas 19:1-6. Por que Zaqueu não conseguia ver? A multidão e sua altura aparecem no versículo 3. O que fez? Subiu numa árvore, no 4. Para ordenar, leia A descer, B procurar ver Jesus, C receber Jesus com alegria, D subir na árvore. Gabarito: B, D, A, C, nos versículos 3, 4 e 6. Aceite a descrição oral, sem letras. Não incentive subir em móveis. O recorte é o início da história, não o relato completo da mudança de Zaqueu." },
            { title: "Pães e peixes", text: "Leia João 6:1-13, ou apresente o contexto e leia 8-13: uma multidão acompanha Jesus, e a cena trata de sua alimentação. Pergunte quantos pães e peixes o menino tinha. Apoio: cinco pães e dois peixes, no versículo 9. Quantos cestos foram recolhidos com os pedaços dos pães? Apoio: doze, no 13. Desenhem apenas uma dessas quantidades e confiram juntos; não é teste de contagem. A narrativa apresenta um sinal de Jesus, não promete que a criança possa multiplicar objetos ou alimentos." },
            { title: "Recordar sem competir", text: "Escolham uma passagem que já tenham lido, sem exigir completar as outras sugestões. O adulto relê; quem quiser desenha ou resume um acontecimento. Apoio em Marcos 10:13-16: pessoas trazem crianças no 13, Jesus manda não impedir no 14 e as recebe e abençoa no 16. Confiram o acontecimento escolhido no texto, sem gabarito único de desenho. Não pontuem nem exijam recordar sem consulta." },
        ],
      },
      {
        heading: "Quando algo não funciona",
        paragraphs: [
            "Se houver cansaço, ofereça uma versão de 5 minutos sugeridos, não medidos em aplicação real: 2 para ler Marcos 10:13-16, 2 para escolher uma cena e conferir seu versículo, e 1 para resumir ou orar opcionalmente. Se a leitura precisar de mais tempo, dispense o jogo; não acelere para cumprir o relógio. Se surgir uma pergunta difícil, diga 'Não sei responder ainda; podemos pesquisar'. Não transforme a falta de resposta em desobediência ou falta de fé.",
            "Evite aproveitar o encontro para listar comportamentos errados da semana. Não peça revelações íntimas, confissões ou pedidos de oração obrigatórios. Se a criança trouxer uma preocupação pessoal, ouça com cuidado fora da atividade; este roteiro não oferece aconselhamento ou avaliação profissional.",
        ],
          note: "Uma sugestão de oração final: 'Jesus, obrigado por receber as crianças. Ajuda-nos a ouvir e acolher com respeito. Amém.' É possível acompanhar em silêncio. Nenhuma etapa exige abraço, toque, fotografia ou publicação do que a criança desenhou.",
      },
    ],
    relatedPaths: ["/jogo-da-memoria-biblico", "/quiz-biblico/personagens-biblicos", "/materiais/plano-familiar-semanal"],
  },
  {
    slug: "quiz-para-escola-biblica-dominical",
    title: "Como usar quiz na Escola Bíblica Dominical",
    eyebrow: "Revisão que ensina",
    summary:
        "Uma revisão de 20 minutos de Marcos 6:30-44, com quatro perguntas, gabarito comentado, consulta livre e adaptações para diferentes turmas.",
    audience: "Professores e turmas",
    category: "Educação bíblica",
      readTime: "7 min de leitura",
    ...gamesImage,
      updatedAt: "8 de outubro de 2026",
      updatedAtISO: "2026-10-08",
    introduction: [
        "Na Escola Bíblica Dominical, uma rodada pode revisar o texto trabalhado na aula e mostrar quais pontos precisam de explicação. O acerto, porém, não comprova sozinho a compreensão: alguém pode reconhecer uma alternativa sem conseguir localizar a informação. A proposta deste artigo é responder, conferir e explicar com apoio da passagem, sem notas ou ranking individual.",
        "A sessão abaixo usa Marcos 6:30-44, o episódio em que Jesus ensina e alimenta uma multidão. São quatro perguntas próprias deste roteiro, não uma sequência garantida no quiz digital. O objetivo é identificar ações e ordenar acontecimentos no recorte lido. Ela pode concluir uma aula sobre essa passagem ou funcionar como uma revisão curta independente, desde que a leitura seja realizada antes das respostas.",
    ],
    sections: [
      {
        heading: "Antes, durante ou depois da aula?",
        steps: [
            { title: "Antes", text: "Uma pergunta pode levantar uma hipótese, mas avise que a turma ainda vai ler e conferir. Não anuncie a tentativa como prova de conhecimento prévio nem exponha quem não conhece o episódio." },
            { title: "Durante", text: "Pause após uma cena e pergunte o que aconteceu nela. Se a turma não souber, releia antes de acrescentar outra questão. Use apenas o trecho já apresentado, sem cobrar detalhes de uma leitura ainda não feita." },
            { title: "Depois", text: "Use o roteiro de vinte minutos abaixo. Ele inclui uma releitura, quatro perguntas e retorno às referências. Se a aula teve outro texto, prepare questões dessa passagem em vez de usar o exemplo só porque está pronto." },
        ],
      },
      {
          heading: "Prepare a revisão e explique o combinado",
        bullets: [
            "Materiais: Bíblia ou aplicativo, este roteiro e relógio. Papel e caneta por dupla são opcionais; uma resposta oral ou um apontamento no texto também servem. Não é necessário projetor ou aparelho individual.",
            "Leia Marcos 6:30-44 previamente e confira os quatro gabaritos na tradução da turma. Explique multidão como um grande conjunto de pessoas e discípulos como seguidores de Jesus; não exija conhecimento desses termos antes de apresentá-los.",
            "Para 4 a 16 participantes, forme duplas ou trios. Em turmas maiores, use equipes de 3 a 5 e recolha uma contribuição por equipe, sem obrigar todos a falar. É possível consultar sozinho ou apenas ouvir.",
            "Diga: 'Vamos conferir quatro informações da leitura. A Bíblia fica aberta e você pode pedir que eu repita'. Não aplique desconto por erro, eliminação ou perguntas dirigidas a quem parece ter mais dificuldade.",
        ],
      },
      {
        heading: "Roteiro de revisão em vinte minutos",
        schedule: [
            { time: "0–2 min", title: "Combinado", text: "Apresente o objetivo, as opções de participação e a consulta livre. Mostre onde encontrar a passagem." },
            { time: "2–7 min", title: "Leitura", text: "Leia Marcos 6:30-44 e identifique o retorno dos apóstolos, o encontro com a multidão e a distribuição dos alimentos. Não peça interpretações pessoais antes de observar a narrativa." },
            { time: "7–15 min", title: "Quatro perguntas", text: "Use até 2 minutos por questão: leia as opções, dê tempo de consulta e mostre o apoio após a escolha. Respostas podem ser coletivas; não ouça cada participante em cada questão." },
            { time: "15–18 min", title: "Conferência", text: "Retome a questão que gerou dúvida e localize seus versículos. Se não houver dúvida, releia a sequência da quarta questão." },
            { time: "18–20 min", title: "Síntese", text: "Convide até duas contribuições com uma ação de Jesus e uma dos discípulos. O condutor pode resumir se ninguém quiser falar." },
        ],
          note: "Os intervalos somam 20 minutos. Com menos tempo, use apenas duas questões, preservando leitura e explicação. Não acelere a turma para terminar o gabarito.",
        },
        {
          heading: "Quatro perguntas com gabarito comentado",
          steps: [
            { title: "1. O que Jesus faz ao ver a multidão no versículo 34?", text: "A) começa a ensinar; B) manda todos voltarem para casa; C) entra imediatamente no barco. Resposta: A. O versículo registra sua compaixão e o início do ensino. A proposta de despedir a multidão aparece depois, na fala dos discípulos (35-36), não como ação de Jesus nesse momento." },
            { title: "2. O que os discípulos informam após verificar os alimentos?", text: "A) dois pães e cinco peixes; B) cinco pães e dois peixes; C) doze pães e nenhum peixe. Resposta: B, em Marcos 6:38. A pergunta retoma o que foi encontrado, não uma interpretação dos números. Não peça que alguém explique um simbolismo que o recorte não apresenta." },
            { title: "3. Como as pessoas são organizadas antes da distribuição?", text: "A) em uma fila junto do barco; B) dentro de casas da aldeia; C) sentadas em grupos sobre a grama. Resposta: C, nos versículos 39-40. O texto menciona grupos de cem e de cinquenta. Nenhuma das outras formas é descrita nesse trecho; não confunda uma solução prática possível com o que a narrativa afirma." },
            { title: "4. Qual sequência corresponde aos versículos 41-43?", text: "A) Jesus abençoa e reparte; os discípulos distribuem; todos comem; sobras são recolhidas. B) todos comem; Jesus reparte; os alimentos são encontrados. C) as sobras são recolhidas; a multidão chega; Jesus ensina. Resposta: A. O versículo 41 descreve Jesus entregando aos discípulos para colocar diante das pessoas, o 42 registra que todos comem e o 43 informa doze cestos cheios. A sequência acompanha esse recorte, não toda a passagem." },
          ],
          reference: "Marcos 6:30-44",
          note: "Os gabaritos estão visíveis para preparação do professor. Leia apenas o enunciado e as alternativas antes da escolha, depois apresente o apoio. Não é necessário esconder a Bíblia ou impedir consulta.",
      },
      {
        heading: "O que fazer quando muitos erram",
        paragraphs: [
            "Na primeira questão, a alternativa de despedir a multidão pode parecer convincente porque essa proposta aparece no episódio. Volte aos versículos 34-36 e observe quem fala e em qual momento. Diga: 'A ideia aparece, mas a pergunta é sobre a ação de Jesus no versículo 34'. Essa explicação ensina a localizar a resposta em vez de apenas anunciar a letra A.",
            "Se aparecer a lembrança de um menino com os alimentos, explique que João 6:9 menciona esse detalhe em outro relato; ele não é mencionado em Marcos 6:30-44. Não trate a lembrança de outra passagem como invenção, mas mantenha clara a fonte usada nesta pergunta. Uma nova informação pode ser conferida depois, sem mudar o gabarito do recorte.",
            "Muitas respostas divergentes podem indicar leitura insuficiente, pergunta pouco clara ou uma alternativa ambígua. Releia, explique e ajuste o enunciado se necessário. Não atribua o resultado a preguiça, falta de fé ou capacidade individual, nem prometa que uma segunda rodada comprovará aprendizagem.",
        ],
      },
      {
          heading: "Adapte sem mudar o objetivo",
        bullets: [
            "Para iniciantes: leia uma questão por vez e informe o versículo de consulta junto das alternativas. Use as questões 1 e 2 numa primeira rodada. Aceite apontar o texto ou ouvir a explicação sem responder.",
            "Para leitores mais familiarizados: peça que localizem quem age em cada etapa da questão 4 antes de mostrar as opções. Não acrescente perguntas difíceis apenas para diferenciar quem sabe mais.",
            "Para crianças: um adulto responsável avalia a linguagem, lê as opções e pode reduzir a atividade a duas perguntas. A sessão não exige alimentos, objetos pequenos ou encenação de multiplicação.",
            "No quiz digital: o tema Jesus e Evangelhos reúne outros episódios; não permite garantir estas quatro questões na mesma ordem. Use o roteiro oral para uma revisão específica e a rodada digital apenas quando suas perguntas corresponderem ao objetivo da aula. Não misture o placar do jogo com notas da turma.",
        ],
          sources: [{ title: "Conhecer o quiz de Jesus e Evangelhos", href: "/quiz-biblico/jesus-e-evangelhos" }],
        },
        {
          heading: "Registre uma dúvida, não um ranking",
          paragraphs: [
            "Uma síntese possível é: Jesus ensina e reparte os alimentos; os discípulos verificam o que há e participam da distribuição. Peça uma referência de apoio a quem desejar contribuir. Para preparar a aula seguinte, registre uma dúvida sobre o texto, sem listas de quem acertou ou errou e sem publicar respostas ou dados pessoais.",
            "Neemias 8:8 descreve leitura e explicação da Lei para que o povo compreenda. É uma referência de apoio ao cuidado com a compreensão, não uma ordem bíblica sobre quizzes, equipes ou cronômetros. Essas escolhas pertencem ao formato pedagógico proposto neste artigo.",
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
        "Compare cinco formatos apoiados em jogos do site e duas adaptações de leitura sem impressão, com exemplos comentados e uma combinação de vinte minutos.",
    audience: "Todos os grupos",
    category: "Ideias de jogos",
    readTime: "7 min de leitura",
    ...digitalGamesImage,
      updatedAt: "12 de outubro de 2026",
      updatedAtISO: "2026-10-12",
    introduction: [
        "Um celular ou computador compartilhado pode servir a um grupo inteiro: uma pessoa lê, as demais conversam e uma escolha é feita na tela. Este artigo compara formatos, não oferece sete jogos digitais diferentes: os itens 1, 3, 4, 5 e 6 usam jogos do site; o 2 é uma sequência oral e o 7 é um fechamento de leitura. Não é necessário aparelho individual nem impressão. Para um evento completo, consulte a noite de jogos de 75 minutos.",
        "Escolha uma atividade conforme o tempo e a familiaridade do grupo, em vez de tentar executar as sete no mesmo encontro. Os exemplos deste artigo são demonstrações com respostas visíveis, não desafios que precisam valer pontos. Consulta e leitura em voz alta fazem parte da proposta; rapidez não precisa decidir quem participa.",
    ],
    sections: [
        {
          heading: "Antes da primeira rodada",
          bullets: [
            "Com 4 a 12 pessoas, use uma roda e alterne quem lê e quem confirma a escolha. Em grupos maiores, forme equipes de 3 a 5 e peça uma resposta por equipe, sem eliminar quem errou.",
            "Abra o jogo e teste som, tamanho do texto e conexão antes de reunir o grupo. Se uma pessoa lê a tela, não é necessário projetor; posicione o aparelho de modo que o leitor fique confortável.",
            "Combine que qualquer pessoa pode apenas observar, pedir releitura ou passar a vez. Não exija empréstimo de celular nem exposição de conhecimento individual.",
            "Guarde os exemplos, gabaritos e referências numa anotação local testada antes do encontro, com Bíblia impressa para consulta. Uma aba aberta não garante acesso após recarregar sem conexão; o site não promete funcionamento offline.",
          ],
        },
      {
        heading: "1. Quiz cooperativo",
          paragraphs: [
            "Tempo sugerido: 8 a 12 minutos para três perguntas, incluindo explicações. Abra um tema do Quiz bíblico; uma pessoa lê o enunciado e as quatro alternativas. Dê cerca de 30 segundos para conversar, aceite um pedido de releitura e escolha uma resposta coletiva. Depois, leia a explicação e consulte uma referência antes de avançar. O placar do site continua funcionando, mas o acordo cooperativo é feito pelo grupo, não por uma opção especial da interface.",
            "Demonstração pronta para uma rodada oral: 'Em que rio Jesus foi batizado por João? A) Nilo; B) Jordão; C) Eufrates; D) Tigre'. Resposta: B, Jordão. Marcos 1:9 identifica o lugar e quem batizou Jesus; os versículos 10-11 descrevem o que acontece depois. Peça que alguém localize o nome do rio no texto. Esta pergunta é um exemplo deste artigo, não a promessa de que aparecerá na próxima rodada do site.",
          ],
          reference: "Marcos 1:9-11",
          sources: [{ title: "Abrir Quiz bíblico", href: "/quiz-biblico" }],
      },
      {
        heading: "2. Referência em ordem",
          paragraphs: [
            "Tempo sugerido: 8 minutos. Esta é uma adaptação oral, não um jogo separado no site. Leia quatro cenas do Evangelho de Marcos em ordem misturada: A) Jesus acalma a tempestade; B) Jesus chama Simão e André; C) Jesus é batizado por João; D) Jesus alimenta a multidão com cinco pães e dois peixes. As equipes têm 2 minutos para propor uma sequência e 4 para conferir as passagens; reserve 2 para resumir.",
            "Gabarito: C, B, A, D. As referências são Marcos 1:9-11, 1:16-20, 4:35-41 e 6:30-44. A resposta segue a ordem em que o próprio livro apresenta os episódios, não uma reconstrução de todas as datas da vida de Jesus. Se faltar familiaridade, leia os títulos com os capítulos antes de pedir a sequência. O apoio não invalida a atividade.",
          ],
      },
      {
        heading: "3. Personagem em três pistas",
          paragraphs: [
            "Tempo sugerido: 5 a 8 minutos para um personagem e a conferência. Em Quem sou eu?, leia uma pista por vez; o grupo pode responder ou revelar outra. A pontuação do jogo diminui conforme novas pistas são abertas. Em uma rodada oral, combine previamente se haverá pontos; não acrescente regras que o site não oferece.",
            "Exemplo real do acervo, com resposta revelada para demonstração: 'Meu pai se chamava Uri e meu avô, Hur'; 'Eu pertencia à tribo de Judá'; 'Aoliabe, da tribo de Dã, foi designado para trabalhar ao meu lado'. As alternativas são Bezalel, Hur, Eleazar e Calebe. Resposta: Bezalel. Êxodo 31:2 identifica sua família e tribo; o versículo 6 menciona Aoliabe. As pistas combinam informações da mesma passagem, por isso não basta reconhecer apenas o nome Hur.",
          ],
          reference: "Êxodo 31:1-6",
          sources: [{ title: "Abrir Quem sou eu?", href: "/quem-sou-eu" }],
      },
      {
        heading: "4. Complete a frase em equipe",
          paragraphs: [
            "Tempo sugerido: 5 a 8 minutos para duas frases. No Complete a Frase, uma pessoa lê o início e as alternativas; as demais escolhem uma continuação. Confirme na tela e leia a frase inteira. Não é necessário exigir memorização de uma tradução específica antes da partida.",
            "Exemplo do jogo: 'A tua palavra é lâmpada para os meus pés,...'. A continuação correta é 'e luz para o meu caminho', em Salmos 119:105. As outras opções do jogo falam de força para o coração, abrigo para a alma e paz para os dias: são expressões diferentes, não a continuação exibida. Converse sobre as imagens de lâmpada e caminho; não use o versículo como uma previsão de decisões pessoais. A redação varia entre traduções: confira a versão identificada no jogo ao comparar palavras.",
          ],
          reference: "Salmos 119:105",
          sources: [{ title: "Abrir Complete a Frase", href: "/complete-a-frase" }],
      },
      {
        heading: "5. Ligue os pares narrado",
          paragraphs: [
            "Tempo sugerido: 6 a 10 minutos. Abra Ligue os Pares e escolha um tema. Uma pessoa pode ler as duas colunas para que o grupo discuta antes de selecionar os itens correspondentes. A leitura compartilhada é uma adaptação para o encontro; as combinações continuam sendo confirmadas na interface.",
            "Minirodada oral pronta, usando relações do acervo: coluna A — Rute, Monte Sinai, Caná; coluna B — água transformada em vinho, acompanhou Noemi até Belém, entrega dos mandamentos. Os pares são Rute e a companhia de Noemi (Rute 1:16-19); Sinai e os mandamentos (Êxodo 19-20); Caná e o sinal no casamento (João 2:1-11). Este exemplo mistura temas para demonstrar a regra, não reproduz uma tela única do jogo. Se houver dúvida, confira primeiro o lugar ou personagem, depois o acontecimento.",
          ],
          sources: [{ title: "Abrir Ligue os Pares", href: "/ligue-os-pares" }],
      },
      {
        heading: "6. Uma palavra, uma história",
          paragraphs: [
            "Tempo sugerido: 5 a 8 minutos. Diga uma palavra e dê até 1 minuto para as equipes associarem a uma narrativa. Uma equipe propõe a história, outra procura a referência. Aceite mais de uma ligação quando o texto a sustentar; não transforme a primeira associação do condutor no único gabarito.",
            "Exemplo pronto: a palavra é 'barco'. Duas respostas possíveis são o chamado de Tiago e João, que estavam no barco consertando redes (Marcos 1:19-20), e a tempestade acalmada por Jesus (Marcos 4:35-41). Peça que expliquem qual ação liga a palavra à história. Se ninguém lembrar, ofereça esses dois textos e convide o grupo a escolher. Uma lembrança aproximada merece conferência, não ridicularização.",
          ],
          note: "No Jogo da Memória, personagens e símbolos formam pares previamente definidos. Este formato oral aceita relações diferentes; não confunda essa liberdade com as regras do tabuleiro digital.",
          sources: [{ title: "Conhecer o Jogo da Memória", href: "/jogo-da-memoria-biblico" }],
      },
      {
        heading: "7. Pergunta que fica",
          paragraphs: [
            "Tempo sugerido: 5 minutos. Este formato é um fechamento, não um jogo pontuado. Escolha uma referência que apareceu na rodada e releia o trecho. Convide duas ou três pessoas a dizer uma informação confirmada e uma pergunta que ainda têm. É possível apenas ouvir; não recolha compromissos ou respostas de todos obrigatoriamente.",
            "Exemplo após as pistas de Bezalel: informação confirmada — ele era filho de Uri e neto de Hur; pergunta para continuar — quais trabalhos são mencionados em Êxodo 31:4-5? O texto fala de trabalho com metais, pedras e madeira. Isso permite ampliar a leitura para além do nome correto. Se uma pergunta não puder ser respondida na hora, registre-a sem inventar explicação.",
          ],
          note: "Uma resposta errada pode indicar uma passagem a reler, não uma pessoa que sabe menos. Escolha poucos exemplos para que a conversa caiba no tempo.",
        },
        {
          heading: "Uma combinação pronta de vinte minutos",
          schedule: [
            { time: "0–2 min", title: "Combinado", text: "Apresente a proposta cooperativa, a possibilidade de observar e quem vai ler. Use os exemplos do artigo se não houver conexão." },
            { time: "2–10 min", title: "Referência em ordem", text: "Faça a sequência das quatro cenas de Marcos do formato 2, incluindo a conferência dos capítulos." },
            { time: "10–15 min", title: "Três pistas", text: "Use Bezalel, do formato 3, com pistas e alternativas lidas em voz alta. Mostre a passagem após a resposta." },
            { time: "15–20 min", title: "Pergunta que fica", text: "Releia Êxodo 31:1-6 e use o exemplo do formato 7 para encerrar sem ranking individual." },
          ],
          note: "Os intervalos somam 20 minutos. Essa combinação é uma sugestão deste artigo, não uma funcionalidade automática do site. Em grupos grandes, recolha uma contribuição por equipe em vez de ouvir cada pessoa em toda etapa.",
      },
    ],
      relatedPaths: ["/quiz-biblico", "/complete-a-frase", "/ligue-os-pares", "/quem-sou-eu", "/jogo-da-memoria-biblico"],
  },
  {
    slug: "como-adaptar-uma-dinamica-por-idade",
    title: "Como adaptar uma dinâmica bíblica por idade",
    eyebrow: "Condução inclusiva",
    summary:
        "A mesma atividade no Salmo 100 em versões para crianças, jovens e adultos, com exemplos, tempos e opções de resposta que preservam o objetivo da leitura.",
    audience: "Líderes e professores",
    category: "Adaptação",
      readTime: "6 min de leitura",
    ...discussionImage,
      updatedAt: "8 de outubro de 2026",
      updatedAtISO: "2026-10-08",
    introduction: [
        "Uma adaptação útil preserva o que a atividade pretende ensinar e modifica o caminho para participar. A idade pode ajudar no planejamento, mas não informa sozinha a familiaridade com a Bíblia, a preferência por falar ou a facilidade de leitura. Ofereça alternativas sem separar publicamente quem sabe mais e quem sabe menos.",
        "O exemplo deste artigo usa Salmo 100:1-5. Em todas as versões, o objetivo é localizar o convite a agradecer e o motivo apresentado no salmo. A pessoa pode responder oralmente, apontar a passagem, desenhar ou apenas ouvir. Não é necessário relatar algo pessoal para cumprir o objetivo da leitura.",
    ],
    sections: [
      {
          heading: "Prepare uma atividade, não três conteúdos diferentes",
          paragraphs: [
            "Materiais: Bíblia ou aplicativo com Salmo 100:1-5, este roteiro e relógio. Papel e lápis são opcionais. O exemplo serve a 4 a 12 pessoas; com mais participantes, forme grupos de 3 a 5 e recolha uma contribuição por grupo. Não exige impressão, música, objetos pequenos ou celulares individuais.",
            "Leia o salmo previamente. Ele convida ao louvor e ao agradecimento e apresenta, no versículo 5, a bondade e a fidelidade de Deus. A figura das ovelhas no versículo 3 pertence à linguagem do salmo; não é uma instrução para encenar animais. Explique louvor como expressão de reconhecimento a Deus, sem pedir que todos cantem ou façam gestos.",
          ],
        questions: [
            "O que deve permanecer igual? Neste exemplo: localizar o agradecimento no versículo 4 e a bondade e fidelidade no 5.",
            "Como responder sem depender de leitura fluente? O condutor pode ler e aceitar que a pessoa escolha entre duas frases.",
            "O tempo inclui explicação e consulta? Não conte apenas os segundos de resposta.",
            "Alguma instrução exige exposição pessoal? Troque relatos íntimos por observação do texto ou exemplos fictícios.",
        ],
          reference: "Salmo 100:1-5",
      },
      {
          heading: "Versão para crianças: duas escolhas em sete minutos",
          paragraphs: [
            "Um adulto responsável avalia a adequação à criança; as escolhas abaixo são sugestões de formato, não testes de desenvolvimento. Leia o salmo e releia os versículos 4-5. Pergunte: 'O texto convida a agradecer ou a ganhar uma corrida?'. Apoio: agradecer, no versículo 4. Depois: 'Que motivo aparece: a bondade de Deus ou vencer outra pessoa?'. Apoio: a bondade de Deus, no versículo 5, que também menciona sua fidelidade.",
            "É possível responder por uma palavra, apontar a frase que o adulto lê ou fazer um desenho livre sobre agradecer. O desenho não é uma prova da interpretação nem precisa ser mostrado. Para quem ainda não acompanha cinco versículos, o adulto pode ler apenas 4-5, explicando que são o final de um salmo de louvor. Não simule a corrida nem exija canto, abraço ou oração em voz alta.",
        ],
          schedule: [
            { time: "0–1 min", title: "Convite", text: "Explique que poderão escolher uma frase, desenhar ou apenas ouvir." },
            { time: "1–3 min", title: "Leitura", text: "Leia a passagem e explique uma palavra necessária, sem cobrar que a criança leia." },
            { time: "3–6 min", title: "Duas escolhas", text: "Faça as duas perguntas, releia os versículos e aceite um pedido de repetição." },
            { time: "6–7 min", title: "Resumo", text: "Diga: o salmo convida a agradecer e fala da bondade e fidelidade de Deus. Encerre sem avaliar o desenho ou comparar respostas." },
          ],
      },
      {
          heading: "Versão para jovens: texto ou ideia acrescentada?",
          paragraphs: [
            "Duração sugerida: 12 minutos. Use 2 para explicar, 3 para ler, 5 para discutir em duplas ou trios e 2 para conferir. Apresente quatro frases: A) o salmo convida a agradecer; B) a bondade de Deus é apresentada como motivo; C) o salmo exige que todos relatem uma experiência pessoal; D) a atividade precisa premiar quem responder mais rápido. Peça que localizem as frases sustentadas pelo texto e identifiquem as que não estão no recorte.",
            "Gabarito: A, apoiada no versículo 4; B, no 5. C e D não são instruções da passagem. A pessoa pode apresentar apenas os versículos, escrever A e B ou acompanhar a consulta. Não peça que conte o que aconteceu na semana nem atribua falta de gratidão a quem não quiser falar.",
        ],
      },
      {
          heading: "Versão para adultos: observação e aplicação separadas",
        paragraphs: [
            "Duração sugerida: 15 minutos, com 2 para os combinados, 3 para a leitura, 6 para conversar em duplas e 4 para conferir. Use as mesmas quatro frases da versão para jovens. Depois peça uma observação e uma aplicação possível. Exemplo de observação: o versículo 4 convida a agradecer. Exemplo de aplicação proposta pelo grupo: reservar um momento opcional para agradecimento no final de um encontro.",
            "A aplicação não está escrita no salmo e não precisa ser adotada por todos. Pergunte como oferecer esse momento sem insistir em depoimentos. Uma possibilidade é o condutor agradecer brevemente e deixar livre quem deseja acompanhar. Não investigue sofrimento pessoal nem diga que a gratidão exige uma resposta positiva sobre qualquer situação dolorosa.",
          ],
        },
        {
          heading: "Em grupos mistos, ofereça escolhas a todos",
          paragraphs: [
            "Use o roteiro de 12 minutos e permita que qualquer pessoa escolha entre as duas perguntas curtas ou as quatro frases. Não anuncie uma tarefa infantil para quem tem dificuldade nem presuma que uma pessoa idosa precise de simplificação. Texto maior, leitura em voz alta, consulta assistida e resposta escrita podem ser oferecidos a todo o grupo.",
            "Nas duplas, leitura, consulta e resposta são funções voluntárias. Um adulto responsável acompanha crianças, mas uma criança maior não precisa ser encarregada de ensinar a menor. Se não houver interesse em formar duplas, o condutor faz a leitura coletiva e mostra as respostas de apoio. A atividade continua válida sem uma fala de cada participante.",
        ],
      },
      {
        heading: "Teste rápido antes de aplicar",
        steps: [
            { title: "Confira o objetivo", text: "Nos três formatos, a leitura ainda permite localizar convite e motivo? Se a conversa virou uma disputa ou relato pessoal obrigatório, retome o texto." },
            { title: "Demonstre uma resposta", text: "Leia o versículo 4 e mostre como a frase A se apoia nele. Não presuma que todos entenderão a tarefa só pelo título da dinâmica." },
            { title: "Considere a consulta", text: "Os tempos são propostas e incluem leitura. Se houver pedidos de releitura, retire uma pergunta em vez de acelerar as pessoas." },
            { title: "Garanta uma alternativa", text: "A opção de observar não deve exigir justificativa. Não publique desenhos, respostas ou fotos sem autorização." },
        ],
          note: "Adapte o formato a partir das preferências expressas pelos participantes, não de um diagnóstico presumido pela idade. O exemplo não mede desenvolvimento, atenção ou saúde emocional.",
        },
        {
          heading: "Uma referência de apoio, não uma tabela de idades",
          paragraphs: [
            "Em 1 Coríntios 9:19-23, Paulo descreve sua relação com diferentes pessoas no contexto do anúncio do evangelho. A passagem não fornece faixas etárias, tempos de atenção ou regras para dinâmicas. As versões deste artigo são escolhas práticas do projeto, verificáveis pelo objetivo e pelo respeito às formas de participação.",
            "Para adaptar outro recurso, mantenha a passagem e a pergunta central, prepare um exemplo resolvido e ofereça mais de uma forma de responder. Depois confira se o visitante consegue participar sem criar sozinho os elementos essenciais. Não é necessário alongar o conteúdo ou acrescentar uma competição para cada idade.",
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
        "Quatro sessões de 45 minutos com passagens de Marcos, atividades prontas, perguntas comentadas e apoio ao condutor para observar ensino, acolhimento, autoridade e serviço.",
    audience: "Células e famílias",
    category: "Plano de estudo",
      readTime: "9 min de leitura",
    ...discussionImage,
      updatedAt: "7 de outubro de 2026",
      updatedAtISO: "2026-10-07",
    introduction: [
        "Esta série seleciona quatro passagens do Evangelho de Marcos para leitura em grupo. Não resume o livro inteiro nem oferece um comentário especializado: cada sessão observa acontecimentos, palavras e reações que podem ser localizados no texto. Os encontros podem acontecer semanalmente ou em outro ritmo combinado pelo grupo.",
        "O plano foi pensado para 4 a 12 participantes e um condutor, com consulta à Bíblia permitida durante as atividades. Não há eliminação, ranking individual ou obrigação de contar experiências pessoais. Com mais pessoas, use equipes de 3 a 5 e recolha uma contribuição por equipe. Os jogos orais estão descritos aqui; o uso do site é opcional.",
    ],
    sections: [
        {
          heading: "Preparação e combinados",
          bullets: [
            "Materiais: Bíblia ou aplicativo bíblico, relógio e este roteiro. Papel e caneta por equipe são opcionais; respostas orais funcionam. Nenhuma atividade exige impressão, compra ou acesso ao celular de outra pessoa.",
            "Antes de cada sessão, leia a passagem inteira e confira as respostas de apoio abaixo na tradução escolhida. Anote palavras que precisem de explicação. Sinagoga é um lugar de reunião judaica; publicanos eram cobradores de impostos; escribas aparecem como conhecedores da Lei. Essas explicações ajudam a acompanhar a cena, sem exigir uma aula de história.",
            "Combine que é possível ouvir, pedir releitura ou passar a vez. Uma pessoa pode ler com auxílio; não distribua versículos obrigatoriamente nem interprete silêncio como falta de interesse.",
            "As passagens incluem cura, conflito, perigo e anúncio de sofrimento. Não peça testemunhos de doença ou situações dolorosas, não prometa resultados de cura e não use o estudo para avaliar a fé de alguém. Em família, o adulto responsável decide se o recorte é adequado à idade e pode conduzir uma leitura mais curta.",
          ],
        },
        {
          heading: "Cronograma de cada sessão",
          schedule: [
            { time: "0–5 min", title: "Acolhimento", text: "Apresente a passagem e relembre os combinados. A partir do segundo encontro, aceite uma lembrança breve da leitura anterior, sem testar quem faltou." },
            { time: "5–15 min", title: "Leitura e localização", text: "Leia o trecho completo. Identifique onde a cena ocorre, quem participa e o que muda. Explique uma ou duas palavras necessárias e aceite pedidos de releitura." },
            { time: "15–25 min", title: "Atividade pronta", text: "Use a atividade da sessão: 2 minutos para a regra, 5 para consultar e responder, 3 para conferir. Uma equipe pode ditar em vez de escrever." },
            { time: "25–40 min", title: "Perguntas comentadas", text: "Trabalhe as duas perguntas da sessão. Consulte os versículos indicados no apoio; a terceira contribuição pode ser uma dúvida, não uma conclusão definitiva." },
            { time: "40–45 min", title: "Síntese e encerramento", text: "Resuma uma observação confirmada e deixe uma pergunta para continuar a leitura. Se desejado, faça uma oração breve; ninguém precisa orar em voz alta." },
          ],
          note: "Os intervalos somam 45 minutos. Se houver apenas 30, use 3 minutos para acolher, 8 para ler, 5 para uma parte da atividade, 10 para a primeira pergunta e 4 para encerrar. Os tempos organizam o encontro, não medem qualidade da participação.",
        },
      {
        heading: "Encontro 1 — Autoridade que serve",
          paragraphs: [
            "Leia Marcos 1:21-39. A sequência passa pela sinagoga em Cafarnaum, a casa de Simão e André e um lugar deserto onde Jesus ora. O texto combina ensino, curas e deslocamentos. A afirmação sobre autoridade aparece na reação ao ensino e na reação ao que acontece na sinagoga; não reduza a passagem a uma técnica de liderança.",
            "Atividade: associe os lugares às ações. Lugares: A) sinagoga; B) casa de Simão e André; C) lugar deserto. Ações misturadas: 1) Jesus ora de madrugada; 2) Jesus ensina e as pessoas se admiram; 3) Jesus toma pela mão a sogra de Simão, que estava com febre. Gabarito: A–2 (versículos 21-22), B–3 (29-31), C–1 (35). As equipes devem indicar um versículo para cada par; não precisam memorizar nomes.",
          ],
          steps: [
            { title: "Como as pessoas reagem ao ensino?", text: "Apoio: nos versículos 22 e 27, elas se admiram e relacionam as ações de Jesus à sua autoridade. Peça que apontem a expressão na tradução usada. Não acrescentem reações emocionais que não aparecem na cena." },
            { title: "O que Jesus faz depois de ouvir que todos o procuram?", text: "Apoio: nos versículos 37-39, ele propõe ir às aldeias vizinhas para pregar. O texto também registra sua oração no 35, mas não relata o conteúdo dela. Não afirme que recebeu uma instrução específica durante essa oração." },
          ],
          note: "Síntese possível: a passagem apresenta ensino, cuidado e anúncio em diferentes lugares. Para a próxima sessão, observe como a chegada de pessoas até Jesus aparece em Marcos 2.",
        reference: "Marcos 1:21-39",
      },
      {
        heading: "Encontro 2 — Acolhimento que restaura",
          paragraphs: [
            "Leia Marcos 2:1-17. Há dois episódios: a chegada de um homem paralítico, carregado por quatro pessoas, e o chamado de Levi seguido de uma refeição. A primeira cena inclui uma discussão sobre perdão; a segunda, perguntas sobre as pessoas com quem Jesus come. Acolhimento é um eixo do encontro, mas não substitui essas questões presentes na narrativa.",
            "Atividade: identifique a qual episódio pertence cada frase. A) quatro pessoas carregam um homem; B) Levi se levanta e segue Jesus; C) a multidão impede a aproximação pela porta; D) escribas e fariseus questionam a refeição. Gabarito: A e C pertencem ao primeiro episódio (versículos 2-4); B e D ao segundo (14-16). Peça um versículo de apoio e uma diferença entre os cenários. Não encenem carregar alguém ou subir em estruturas.",
          ],
          steps: [
            { title: "Que obstáculo aparece e o que os quatro fazem?", text: "Apoio: a multidão impede a aproximação; eles abrem o telhado e descem o leito (versículos 3-4). O texto informa que são quatro, mas não nomeia essas pessoas nem afirma que sejam parentes. Preserve essa diferença entre informação e hipótese." },
            { title: "Qual é a pergunta sobre a refeição e como Jesus responde?", text: "Apoio: no versículo 16, questionam por que ele come com publicanos e pecadores; no 17, Jesus usa a comparação de quem precisa de médico e fala de seu chamado. Não use os rótulos da cena para classificar participantes atuais ou presumir que toda doença resulte de um pecado pessoal." },
          ],
          note: "Aplicação opcional: como explicar uma atividade para que uma pessoa nova possa acompanhar? Oferecer uma regra clara é uma possibilidade prática do grupo, não uma ordem literal sobre telhados ou refeições.",
        reference: "Marcos 2:1-17",
      },
      {
          heading: "Encontro 3 — Uma travessia e uma pergunta",
          paragraphs: [
            "Leia Marcos 4:35-41. Ao entardecer, Jesus propõe passar para o outro lado; durante a travessia há uma tempestade, os discípulos o despertam e o vento se aquieta após sua palavra. A pergunta final se volta para quem ele é. Mantenha a conversa nessa narrativa, sem pedir relatos de medo ou transformar o trecho em orientação sobre saúde emocional.",
            "Atividade: ordene estas quatro cenas misturadas. A) os discípulos perguntam quem é aquele a quem vento e mar obedecem; B) uma tempestade atinge o barco; C) Jesus propõe a travessia; D) Jesus se levanta e fala ao vento e ao mar. Gabarito: C, B, D, A (versículos 35, 37, 39 e 41). Para ampliar, localizem entre B e D o momento em que os discípulos o despertam, no versículo 38.",
          ],
          steps: [
            { title: "Que detalhes mostram a situação do barco?", text: "Apoio: no versículo 37, as ondas atingem o barco e ele começa a se encher. No 38, Jesus está dormindo na popa. Peça que diferenciem esses detalhes da pergunta dos discípulos sobre sua preocupação com eles." },
            { title: "Como a cena termina?", text: "Apoio: além da calmaria no versículo 39, os discípulos ficam atemorizados e perguntam quem é Jesus (41). Não diga simplesmente que todos ficaram tranquilos: essa não é a reação final registrada." },
          ],
          note: "Síntese possível: a narrativa mostra uma travessia que termina com uma pergunta sobre a identidade de Jesus. Para continuar, releia o trecho e identifique quem fala em cada versículo.",
        reference: "Marcos 4:35-41",
      },
      {
        heading: "Encontro 4 — O caminho do serviço",
          paragraphs: [
            "Leia Marcos 10:32-45. Jesus caminha para Jerusalém e anuncia sofrimento, morte e ressurreição antes do pedido de Tiago e João por lugares de destaque. O contraste importa: o ensino sobre serviço não aparece isolado, e o versículo 45 liga a missão de Jesus a servir e dar sua vida. Não reduza todo o trecho a uma lista de tarefas comunitárias.",
            "Atividade: verdadeiro, falso ou não informado? A) Tiago e João pedem lugares à direita e à esquerda de Jesus; B) os outros dez aprovam o pedido; C) o texto informa a idade dos dois irmãos; D) Jesus relaciona grandeza a servir. Gabarito: A verdadeiro (37), B falso (41, eles se irritam), C não informado, D verdadeiro (43-44). Em uma resposta falsa, localize a correção; em 'não informado', não invente um dado para preencher a lacuna.",
          ],
          steps: [
            { title: "O que os irmãos pedem e o que Jesus não lhes concede diretamente?", text: "Apoio: nos versículos 37-40, o pedido trata de lugares em sua glória; Jesus diz que esses lugares são para aqueles a quem estão preparados. O roteiro não tenta identificar essas pessoas nem transformar o diálogo em previsão sobre participantes do grupo." },
            { title: "Qual contraste aparece entre domínio e serviço?", text: "Apoio: nos versículos 42-44, Jesus contrasta a autoridade exercida como domínio com o serviço entre os seus. Se desejarem uma aplicação, escolham uma tarefa pequena do encontro, como explicar as regras a um visitante, sem obrigar ninguém a se oferecer." },
          ],
          note: "Encerre a série recolhendo uma observação de cada sessão, com consulta permitida. O participante pode escolher uma passagem a reler; não precisa apresentar um relato de mudança pessoal.",
        reference: "Marcos 10:32-45",
      },
      {
          heading: "Jogos digitais e adaptações do plano",
        bullets: [
            "As quatro atividades acima são demonstrações orais deste artigo, não uma sequência automática disponível na interface. Todos os enunciados e gabaritos necessários estão no próprio roteiro.",
            "Se preferir o Quiz de Jesus e Evangelhos, substitua o bloco de atividade por até três perguntas. A rodada pode trazer outros episódios; não prometa que corresponde exclusivamente à passagem da semana. Leia a explicação após responder e encerre o bloco no tempo combinado.",
            "Com iniciantes, ofereça as referências junto dos enunciados. Com leitores mais familiarizados, peça primeiro uma hipótese e depois a localização. Em ambos os casos, a conferência vale mais que a rapidez.",
            "Sem internet, use a Bíblia e leia as atividades em voz alta. Com pouco tempo, faça só dois itens da atividade e a primeira pergunta comentada. Não corte toda a leitura para preservar uma rodada de jogo.",
        ],
          note: "Se surgir uma divergência de tradução ou interpretação, registre o versículo e a dúvida para estudo posterior. Este plano não pressupõe assessoria especializada nem autoriza o condutor a improvisar diagnóstico ou aconselhamento.",
          sources: [{ title: "Quiz de Jesus e Evangelhos", href: "/quiz-biblico/jesus-e-evangelhos" }, { title: "Material para organizar o encontro", href: "/materiais/roteiro-de-encontro" }],
      },
    ],
    relatedPaths: ["/quiz-biblico/jesus-e-evangelhos", "/ligue-os-pares", "/materiais/roteiro-de-encontro"],
  },
  {
    slug: "plano-de-leitura-de-atos-com-jogos",
    title: "Plano de leitura de Atos com jogos e conversa",
    eyebrow: "Jornada em comunidade",
    summary:
        "Um percurso pelos 28 capítulos de Atos em seis etapas, com leitura distribuída, sessões de 45 minutos, jogos orais prontos e perguntas comentadas.",
    audience: "Jovens e adultos",
    category: "Plano de leitura",
      readTime: "9 min de leitura",
    ...discussionImage,
      updatedAt: "8 de outubro de 2026",
      updatedAtISO: "2026-10-08",
    introduction: [
        "Atos acompanha o testemunho dos primeiros cristãos de Jerusalém até Roma. Este plano percorre os 28 capítulos em seis etapas, mas não comenta todos os episódios. Em cada encontro, uma passagem central é lida e conferida em conjunto. A leitura anterior amplia o contexto; não é condição para participar dos jogos ou da conversa.",
        "A proposta serve a 4 a 16 jovens ou adultos, com equipes de 3 a 5 quando necessário. Materiais: Bíblia ou aplicativo, este roteiro e relógio; papel e caneta são opcionais. Os seis jogos são atividades orais do artigo, com gabaritos disponíveis para o condutor. Não exigem impressão, celular individual ou competição.",
    ],
    sections: [
      {
          heading: "Distribua a leitura sem transformar o plano em cobrança",
          paragraphs: [
            "Use até cinco momentos de leitura entre os encontros, conforme a divisão abaixo. Um capítulo por momento é uma proposta, não uma duração garantida. Nas etapas com menos capítulos, deixe o último momento para reler a passagem central. Na última etapa, duas leituras reúnem dois capítulos; podem ser divididas em mais dias, alongando o percurso sem prejuízo.",
            "O responsável deve ler previamente cada passagem central e conferir os gabaritos na tradução escolhida. Explique nomes e termos necessários durante a sessão. Não abra perguntando quem terminou todos os capítulos; apresente brevemente o trecho e ofereça consulta livre, leitura assistida e a opção de apenas ouvir.",
          ],
        steps: [
            { title: "Etapa 1: Atos 1–4", text: "Momentos de leitura: capítulo 1; 2; 3; 4; releitura de 2:42-47. Foco do encontro: práticas da comunidade de Jerusalém." },
            { title: "Etapa 2: Atos 5–8", text: "Momentos: capítulo 5; 6; 7; 8; releitura de 6:1-7. Foco: uma necessidade na distribuição diária e a organização do serviço." },
            { title: "Etapa 3: Atos 9–12", text: "Momentos: capítulo 9; 10; 11; 12; releitura de 9:1-19. Foco: Saulo, Ananias e os acontecimentos em Damasco." },
            { title: "Etapa 4: Atos 13–16", text: "Momentos: capítulo 13; 14; 15; 16; releitura de 16:6-15. Foco: deslocamentos e o encontro com Lídia." },
            { title: "Etapa 5: Atos 17–21", text: "Momentos: capítulo 17; 18; 19; 20; 21. Foco: a fala de Paulo em Atenas, em 17:16-34." },
            { title: "Etapa 6: Atos 22–28", text: "Momentos: capítulo 22; 23; 24; 25–26; 27–28. Foco: uma parte da viagem marítima, em 27:13-26. O capítulo 28 completa o percurso até Roma, mas não está dentro desse recorte central." },
        ],
      },
      {
          heading: "Cronograma comum de 45 minutos",
        schedule: [
            { time: "0–5 min", title: "Acolhimento e localização", text: "Diga em que ponto do percurso estão e apresente a cena. Explique que não haverá teste da leitura feita em casa." },
            { time: "5–15 min", title: "Passagem central", text: "Leia o trecho completo e esclareça termos necessários. Cada participante pode acompanhar na tradução de preferência." },
            { time: "15–25 min", title: "Jogo oral", text: "Use 2 minutos para explicar a atividade da etapa, 5 para consulta e 3 para conferir o gabarito. O condutor pode ler tudo sem distribuir falas obrigatórias." },
            { time: "25–40 min", title: "Duas perguntas", text: "Converse com apoio dos versículos indicados. Recolha até três contribuições por pergunta e aceite dúvidas que precisem de estudo posterior." },
            { time: "40–45 min", title: "Síntese", text: "Retome uma informação confirmada e apresente o próximo trecho de leitura. Uma oração breve é opcional; não exija compromisso público." },
        ],
          note: "Os intervalos somam 45 minutos. Para 30 minutos, use 3 de acolhimento, 8 de leitura, 5 de jogo, 10 para a primeira pergunta e 4 de síntese. Não retire a leitura para completar uma partida.",
      },
      {
          heading: "Etapa 1 — Práticas em comunidade",
          paragraphs: [
            "Leia Atos 2:42-47, depois do relato de Pentecostes e da mensagem de Pedro. O trecho descreve ensino, comunhão, refeições, orações e partilha. Não é uma tabela de metas que todo grupo deve reproduzir literalmente nem uma exigência de divulgar bens pessoais.",
            "Jogo de associação: A) ensino, comunhão, partir do pão e orações; B) repartição conforme a necessidade; C) refeições nas casas. Referências misturadas: 1) versículo 46; 2) versículo 42; 3) versículo 45. Gabarito: A–2, B–3, C–1. A equipe pode apontar as linhas na Bíblia em vez de responder de memória.",
          ],
          steps: [
            { title: "Que práticas são citadas no versículo 42?", text: "Apoio: ensino dos apóstolos, comunhão, partir do pão e orações. Localize todas antes de sugerir aplicações atuais; traduções podem usar palavras diferentes para essas práticas." },
            { title: "Como o versículo 45 descreve o critério da partilha?", text: "Apoio: conforme a necessidade. O encontro não pede nomes de pessoas necessitadas, renda ou doações; observa o que a narrativa afirma." },
        ],
          reference: "Atos 2:42-47",
      },
      {
          heading: "Etapa 2 — Uma tarefa e uma resposta coletiva",
        paragraphs: [
            "Leia Atos 6:1-7. Com o crescimento do grupo, surge uma queixa de que viúvas estavam sendo deixadas de lado na distribuição diária. Os doze reúnem os discípulos e propõem a escolha de sete pessoas para a tarefa. O estudo observa essa resposta, sem resolver debates sobre todos os cargos das igrejas atuais.",
            "Jogo de sequência: A) sete são escolhidos e apresentados aos apóstolos; B) surge a queixa; C) os doze reúnem os discípulos e propõem a escolha. Gabarito: B, C, A (versículos 1, 2-4 e 5-6). Peça um versículo de apoio para cada etapa, sem avaliar problemas reais do grupo.",
        ],
          steps: [
            { title: "Qual necessidade é apresentada?", text: "Apoio: a situação das viúvas na distribuição diária, no versículo 1. Não transforme a cena em acusação de que um participante atual está sendo negligenciado." },
            { title: "Quais critérios são mencionados para a escolha?", text: "Apoio: bom testemunho, Espírito e sabedoria, no versículo 3. A passagem descreve critérios daquela escolha; o exercício não é selecionar ou julgar pessoas da sala." },
          ],
          reference: "Atos 6:1-7",
      },
      {
          heading: "Etapa 3 — Pessoas e lugares em Damasco",
          paragraphs: [
            "Leia Atos 9:1-19. Saulo parte com intenção de prender discípulos; no caminho ocorre o encontro com Jesus e ele é levado a Damasco. Ananias recebe uma orientação, expressa sua objeção e depois vai à casa. Mantenha o foco nos acontecimentos, sem pedir relatos de conversão ou prometer cura a quem participa.",
            "Jogo de pares: A) Saulo; B) Ananias; C) Damasco. Descrições: 1) cidade para onde Saulo é conduzido; 2) discípulo que entra na casa e fala com Saulo; 3) homem levado pela mão após deixar de enxergar. Gabarito: A–3 (8), B–2 (10 e 17), C–1 (8). Não confunda este Ananias com a pessoa de mesmo nome em Atos 5.",
          ],
          steps: [
            { title: "Como Saulo chega à cidade?", text: "Apoio: guiado pela mão, no versículo 8. O trecho não diz que ele continua enxergando normalmente durante esse deslocamento." },
            { title: "O que Ananias diz sobre Saulo antes de ir?", text: "Apoio: ele menciona o mal feito aos discípulos e a autorização para prender, nos versículos 13-14. Não invente uma explicação psicológica; depois confira sua ida no 17." },
          ],
          reference: "Atos 9:1-19",
        },
        {
          heading: "Etapa 4 — Viagem e hospitalidade",
          paragraphs: [
            "Leia Atos 16:6-15. O trecho registra impedimentos na viagem, a visão relacionada à Macedônia e a chegada a Filipos. Ali ocorre a conversa com mulheres reunidas para oração e o encontro com Lídia. Não use esse relato como fórmula para interpretar sonhos ou decidir viagens pessoais.",
            "Jogo de identificação: qual informação corresponde a Lídia? A) vendedora de púrpura de Tiatira; B) governadora de Atenas; C) comandante do navio. Resposta: A, no versículo 14. Como segunda parte, procurem a cidade em que a equipe estava: Filipos, no 12. Tiatira é a cidade de origem mencionada para Lídia, não o lugar dessa conversa.",
          ],
          steps: [
            { title: "O que a equipe conclui após a visão?", text: "Apoio: que deveria anunciar o evangelho na Macedônia, no versículo 10. A conclusão pertence à narrativa; não autoriza o condutor a definir a vocação de alguém na sala." },
            { title: "Que convite Lídia faz?", text: "Apoio: convida a equipe a entrar e ficar em sua casa, no versículo 15. Não exija que participantes ofereçam suas casas ou contem suas condições de moradia." },
          ],
          reference: "Atos 16:6-15",
        },
        {
          heading: "Etapa 5 — Uma fala e diferentes reações",
          paragraphs: [
            "Leia Atos 17:16-34. Paulo está em Atenas, conversa em diferentes espaços e é levado ao Areópago. Sua fala parte de algo observado na cidade e trata de Deus, arrependimento e ressurreição. O exercício compara elementos do texto sem convidar a turma a atacar religiões ou pessoas de hoje.",
            "Jogo: verdadeiro, falso ou não informado? A) Paulo menciona um altar ao Deus desconhecido; B) todos os ouvintes reagem da mesma forma; C) o texto informa quantos anos Dâmaris tinha. Gabarito: A verdadeiro (23), B falso (32-34), C não informado. Corrija B mostrando as diferentes reações, não atribuindo motivos que o texto não registra.",
          ],
          steps: [
            { title: "Qual observação da cidade aparece na fala?", text: "Apoio: o altar com a inscrição ao Deus desconhecido, no versículo 23. Não acrescente detalhes sobre sua aparência ou tamanho." },
            { title: "Que reações são mencionadas ao final?", text: "Apoio: alguns zombam, outros querem ouvir novamente e alguns creem, nos versículos 32-34. A narrativa não afirma que a resposta foi unânime." },
          ],
          reference: "Atos 17:16-34",
        },
        {
          heading: "Etapa 6 — Um recorte da viagem marítima",
          paragraphs: [
            "Leia Atos 27:13-26. Paulo está numa viagem em direção a Roma e o navio enfrenta uma tempestade. O recorte registra ações da tripulação e a mensagem que Paulo comunica; não contém ainda todo o desfecho. Para acompanhar o resultado, continue a leitura de 27:27 até o capítulo 28.",
            "Jogo: quem faz ou diz? A) joga a carga fora; B) comunica que um anjo esteve com ele; C) afirma que o navio será perdido, mas não as vidas. Respostas: a bordo, a carga é lançada fora (18); Paulo relata a visita (23-24) e anuncia a preservação das vidas (22). A e B não são ações da mesma natureza; distinguir ação e fala ajuda a acompanhar a cena.",
          ],
          steps: [
            { title: "Que medidas aparecem diante da tempestade?", text: "Apoio: reforçar o navio e lançar carga e equipamentos fora, nos versículos 17-19. Não encenem risco físico nem tratem essas medidas como instruções de segurança para uma situação atual." },
            { title: "A mensagem promete que o navio ficará intacto?", text: "Apoio: não; o versículo 22 distingue vidas e navio, e o 26 menciona uma ilha. A promessa pertence àquela viagem, não é garantia universal de proteção em toda crise." },
          ],
          reference: "Atos 27:13-26",
        },
        {
          heading: "Use os jogos digitais sem perder o recorte",
        bullets: [
            "O Quiz de Igreja Primitiva pode ampliar a revisão, mas não garante estas seis atividades ou só perguntas da passagem da semana. Se usá-lo, substitua o bloco de jogo por até três perguntas e leia suas explicações.",
            "As atividades orais deste artigo não exigem pontuação. No Modo Grupo, regras e placar pertencem ao jogo; não misture esse resultado com cumprimento da leitura ou avaliação da fé.",
            "Com falha de conexão, consulte a Bíblia e as instruções previamente disponíveis. Isso não significa que o site tenha funcionamento offline garantido.",
        ],
          sources: [{ title: "Quiz de Igreja Primitiva", href: "/quiz-biblico/igreja-primitiva" }, { title: "Modo Grupo", href: "/modo-grupo" }],
        },
        {
          heading: "Feche o percurso com uma descoberta verificável",
          paragraphs: [
            "Cada pessoa pode escolher uma passagem e indicar uma informação confirmada, sem obrigação de falar. Exemplo: Lídia é identificada como vendedora de púrpura, em Atos 16:14. Registre também uma dúvida que o plano não respondeu e consulte o contexto antes de publicar uma conclusão. Não recolha relatos íntimos ou listas de quem acompanhou todas as leituras.",
            "Atos 1:8 apresenta o testemunho em Jerusalém, Judeia, Samaria e até os confins da terra. É um apoio para observar o movimento do livro; o versículo não determina seis etapas, jogos ou duração de encontro. Essas são escolhas deste recurso de leitura.",
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
        "Um exemplo comentado de Pedro e André para conferir respostas na Bíblia, acolher tentativas e corrigir perguntas ambíguas sem exposição obrigatória.",
    audience: "Professores, líderes e famílias",
    category: "Aprendizado",
      readTime: "6 min de leitura",
    ...gamesImage,
      updatedAt: "8 de outubro de 2026",
      updatedAtISO: "2026-10-08",
    introduction: [
        "Uma resposta diferente do gabarito pode ser uma oportunidade de conferir a pergunta e a passagem. Não permite, por si só, concluir por que a pessoa escolheu uma alternativa ou quanto compreendeu. A proposta é mostrar onde procurar, comparar as opções e explicar a informação sem obrigar ninguém a justificar o erro.",
      "O cuidado é especialmente importante quando o grupo reúne pessoas com histórias diferentes de acesso à Bíblia. Conhecimento prévio não deve virar medida de valor, maturidade ou fé.",
    ],
    sections: [
      {
        heading: "O método em quatro movimentos",
        steps: [
          { title: "Acolha a tentativa", text: "Agradeça a resposta e evite reações que façam o erro parecer absurdo." },
            { title: "Ofereça espaço para a pista", text: "Diga: 'Se quiserem, podem contar que detalhe consideraram'. Aceite silêncio ou recusa. O condutor pode apresentar uma associação possível, deixando claro que é um exemplo, não uma explicação do pensamento de alguém." },
          { title: "Volte à referência", text: "Leia o trecho necessário e identifique a palavra, ação ou sequência que esclarece a questão." },
            { title: "Reformule sem cobrar", text: "Convide uma contribuição voluntária com a resposta e o versículo de apoio. Se ninguém quiser falar, o condutor faz a síntese. Não submeta a pessoa que errou a uma segunda prova pública." },
        ],
      },
      {
        heading: "Exemplo completo: Pedro ou André?",
        paragraphs: [
            "Esta é uma situação fictícia para demonstrar a correção, não um relato de uma equipe real. Pergunta: 'Qual discípulo saiu do barco e caminhou sobre as águas em direção a Jesus?'. Alternativas: Pedro, André, João ou Tomé. No exemplo, uma equipe escolhe André e comenta voluntariamente: 'Lembramos que ele era irmão de Pedro e estava entre os primeiros discípulos'. A associação liga informações conhecidas, mas não identifica a ação perguntada.",
          "Em vez de responder apenas 'errado, era Pedro', o condutor pode dizer: 'Vocês lembraram corretamente que André era irmão de Pedro. Vamos descobrir qual dos dois aparece nesta ação'. Leia Mateus 14:28-31 e peça ao grupo que encontre o nome, o pedido feito a Jesus e o que acontece depois que o discípulo sai do barco.",
          "Depois da leitura, convide a equipe a reformular: 'Em Mateus 14, Pedro pede para ir até Jesus e sai do barco. André aparece em João 1:40-42 como o irmão que encontra Simão e o leva a Jesus'. A correção preserva a pista válida, separa duas narrativas e ancora a resposta em ações verificáveis.",
        ],
          note: "Materiais: Bíblia ou aplicativo e o enunciado acima; papel e cronômetro são opcionais. A resposta é Pedro, explicitamente identificado em Mateus 14:28-29. Não encenem andar sobre água nem interpretem uma escolha errada como falta de fé. O exemplo é deste artigo, não a promessa de que a pergunta aparecerá na próxima rodada do site.",
        reference: "Mateus 14:22-33; João 1:40-42",
      },
        {
          heading: "Uma pausa de cinco minutos para conferir",
          schedule: [
            { time: "0–1 min", title: "Retome o enunciado", text: "Leia a pergunta e esclareça que a ação de sair do barco é o detalhe a localizar. Não anuncie quem errou nem peça defesa da alternativa escolhida." },
            { time: "1–2 min", title: "Pista opcional", text: "Convide uma explicação voluntária. Se ninguém quiser, mostre a associação fictícia do exemplo sem atribuí-la ao grupo." },
            { time: "2–4 min", title: "Consulta", text: "Leia Mateus 14:28-31 e João 1:40-42. Mostre Pedro na primeira ação e André na segunda narrativa. Uma pessoa pode apontar os nomes em vez de ler em voz alta." },
            { time: "4–5 min", title: "Síntese", text: "Resuma a resposta e a referência ou aceite uma contribuição voluntária. Volte à partida sem exigir que cada pessoa repita a explicação." },
          ],
          note: "Os intervalos somam cinco minutos. O tempo é uma proposta: se a consulta exigir mais, retire uma pergunta da rodada, não acelere a leitura. Ler e ouvir a correção já são formas de participar.",
        },
      {
        heading: "Como adaptar a mesma correção ao grupo",
        steps: [
          { title: "Com crianças", text: "Leia Mateus 14:28-31 em frases curtas e use duas perguntas: 'Quem pediu para ir?' e 'Quem saiu do barco?'. Mostre que consultar a Bíblia faz parte do jogo e evite pedir uma explicação longa diante da turma." },
            { title: "Com adolescentes", text: "Ofereça consulta aos dois textos e a opção de escrever uma frase que diferencie Pedro de André. Compartilhar a frase ou a pista inicial é voluntário; não peça relatos pessoais para tornar a correção mais profunda." },
          { title: "Com adultos", text: "Além de localizar os personagens, pergunte que detalhe do enunciado resolve a questão e se as alternativas são justas. Isso transforma a correção em leitura atenta e também testa a qualidade da pergunta." },
            { title: "Com um grupo misto", text: "Ofereça duplas de consulta, resposta escrita e leitura pelo condutor. Funções e porta-voz são voluntários. Também é possível consultar sozinho ou acompanhar em silêncio, sem explicar essa escolha." },
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
          note: "Se a pergunta for ambígua ou a referência não sustentar o gabarito, suspenda sua pontuação e confira antes de usá-la novamente. Numa rodada oral, descarte o item ou aceite todas as respostas sustentadas pelo enunciado, conforme o combinado. Na partida digital, não prometa alterar a base pela tela: registre a página, a pergunta e a referência e envie um pedido de correção.",
          sources: [{ title: "Enviar uma correção ao Bíblia Clube", href: "/contato" }],
      },
      {
        heading: "Como manter o ritmo do jogo",
        paragraphs: [
          "Nem toda resposta precisa virar uma exposição longa. Escolha duas ou três perguntas por rodada para aprofundar. Nas demais, apresente a explicação breve e diga que a referência continuará disponível para leitura.",
            "Se o Modo Grupo estiver com rebote ativado, deixe essa tentativa acontecer antes de revelar a resposta e de ler a correção. Depois que o gabarito foi mostrado, uma nova escolha é revisão, não uma tentativa justa por pontos. A justificativa do primeiro grupo não é obrigatória nem condição para seguir o jogo. Quando o foco for apenas conferir o texto, desative o rebote antes da partida.",
        ],
      },
      {
        heading: "Perguntas para quem conduz",
        questions: [
            "A explicação mostrou onde localizar a informação, sem presumir o que a pessoa entendeu?",
          "A referência foi realmente lida?",
          "A explicação cabe na linguagem e no tempo do grupo?",
          "Existe alguma pergunta que precisa ser reescrita antes de outra rodada?",
        ],
          paragraphs: [
            "Provérbios 18:13 adverte sobre responder antes de ouvir; não use o versículo para chamar quem errou de tolo. Em Atos 17:10-12, a comunidade de Bereia examina as Escrituras diante da mensagem recebida. Essas referências apoiam escuta e conferência, não determinam jogos, duração ou penalidades.",
            "Ao registrar uma dúvida, guarde o enunciado e a passagem, não nomes, fotografias ou listas de erros individuais. Uma correção respeitosa precisa ser precisa; se ainda não houver resposta segura, diga que a questão será conferida em vez de improvisar uma conclusão.",
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
        "Uma sessão de 70 minutos sobre cooperação, com Filipenses 2:1-4, quatro situações fictícias, perguntas comentadas e preparação demonstrada.",
    audience: "Líderes de jovens",
    category: "Juventude",
      readTime: "8 min de leitura",
    ...discussionImage,
      updatedAt: "12 de outubro de 2026",
      updatedAtISO: "2026-10-12",
    introduction: [
        "Este roteiro demonstra a preparação de um encontro para 6 a 18 jovens: criar uma instrução de rodada que outro trio consiga executar e conferir. A sessão combina Filipenses 2:1-4, ajustes de organização e uma minirodada própria com três afirmações. O resultado é uma instrução testada durante a atividade, não um diagnóstico de cooperação nem um relato de aplicação real. Não exige histórias pessoais.",
        "A proposta dura 70 minutos, com uma versão de 45 ao final. O objetivo é observar a atenção aos outros no texto e experimentar escolhas simples de organização, como explicar regras e respeitar quem prefere ouvir. Os tempos e as atividades são escolhas do projeto, não exigências da passagem nem garantia de mudança de comportamento.",
    ],
    sections: [
      {
          heading: "Veja como as decisões de preparo se conectam",
        steps: [
            { title: "Pergunta de preparação", text: "Como oferecer participação sem concentrar decisões em uma pessoa? É uma pergunta sobre o formato do encontro, não uma acusação de que algum jovem domina ou se isola." },
            { title: "Passagem escolhida", text: "Filipenses 2:1-4 trata de unidade, humildade e atenção aos outros. Leia também 2:5-11 antes de conduzir, pois o texto continua com a referência a Cristo; não transforme os quatro versículos numa técnica de dinâmica desligada da carta." },
            { title: "Atividade coerente", text: "As quatro situações abaixo permitem observar escolhas fictícias antes de propor um ajuste na rodada. O roteiro não precisa recolher pressões ou problemas pessoais para gerar conversa." },
            { title: "Resultado verificável", text: "Preparem uma instrução com três campos: o que ler, como registrar a escolha e onde conferir. Modelo: 'Leiam Filipenses 2:1-4; apontem A e C ou anotem as letras; confiram A no versículo 4 e C no 3'. Outro trio testa a instrução no bloco de experiência. Isso confere clareza do material, não fé ou maturidade individual." },
        ],
      },
        {
          heading: "Materiais e combinados antes da chegada",
          bullets: [
            "Separe Bíblia ou aplicativo, relógio e este roteiro. Um papel por trio e canetas são opcionais; respostas orais funcionam. Não é necessário som, decoração, impressão, prêmio ou celular individual.",
            "Prepare trios, com uma dupla ou quarteto se o número não dividir exatamente. As funções de ler, consultar e resumir são voluntárias. Quem preferir pode acompanhar sem assumir uma função.",
            "Leia a passagem na tradução que o grupo usa e explique previamente vanglória como busca de reconhecimento para si e rivalidade como competição contra o outro nesse contexto. Não use essas palavras para rotular alguém da sala.",
            "Se houver menores, a atividade deve contar com adultos responsáveis e seguir a organização do encontro. Não proponha conversas privadas isoladas, coleta de dados pessoais ou publicação de respostas e imagens sem autorização.",
            "Apresente o combinado: é possível perguntar, pedir releitura, passar a vez ou apenas observar. Não use o silêncio como motivo para chamar alguém de surpresa pelo nome.",
          ],
        },
      {
        heading: "Roteiro de setenta minutos",
        schedule: [
            { time: "0–10 min", title: "Chegada", text: "Receba o grupo, explique a pergunta do encontro e os combinados. Ofereça uma conversa leve, sem rodada obrigatória de apresentação." },
            { time: "10–25 min", title: "Leitura e observação", text: "Leia Filipenses 2:1-4, explique os termos necessários e use as duas primeiras perguntas comentadas abaixo. O condutor pode ler tudo; alternar vozes é opcional." },
            { time: "25–40 min", title: "Situações fictícias", text: "Use 3 minutos para apresentar as quatro cenas, 6 para cada trio escolher uma e propor um ajuste, e 6 para ouvir até três sínteses e conferir os pontos de apoio." },
            { time: "40–60 min", title: "Experiência cooperativa", text: "Teste a minirodada pronta abaixo: 3 minutos para combinar funções, 7 para consulta, 5 para conferir e 5 para conversar sobre a organização. Quem observar também participa da experiência." },
            { time: "60–70 min", title: "Síntese e encerramento", text: "Retome a terceira pergunta comentada, aceite uma sugestão de organização e apresente Filipenses 2:5-11 como continuação da leitura. Uma oração breve é opcional, sem compromisso público." },
        ],
          note: "Os intervalos são contínuos e somam 70 minutos sugeridos, não medidos em aplicação real. O teste de instrução ocorre dentro dos 20 minutos de experiência, não é bloco adicional. Com mais trios, limite as apresentações a três contribuições voluntárias; não prometa que todos falarão no plenário.",
      },
      {
          heading: "Perguntas com apoio na passagem",
          paragraphs: [
            "Paulo se dirige à comunidade e relaciona sua alegria à unidade, ao amor e a uma atitude que não se limita aos próprios interesses. A continuação do capítulo apresenta Cristo como referência. O encontro observa esse recorte; não pretende resolver todos os debates sobre humildade ou comportamento cristão.",
          ],
          steps: [
            { title: "O que o versículo 2 destaca?", text: "Apoio: unidade, mesmo amor e disposição comum. Localize as expressões na tradução usada. Não conclua que todos precisam ter as mesmas preferências de jogo ou responder da mesma forma." },
            { title: "Que contraste aparece nos versículos 3-4?", text: "Apoio: rivalidade e vanglória são contrastadas com humildade e consideração pelos outros; a atenção não se restringe ao que é de cada um. Isso não exige apagar necessidades próprias nem aceitar pressão para participar." },
            { title: "Que regra pode expressar atenção ao outro numa rodada?", text: "Esta é uma aplicação proposta, não um gabarito literal: explicar antes de começar, perguntar se a pessoa quer ajuda ou oferecer a opção de observar. Uma regra não deve obrigar a pessoa a falar para provar cooperação." },
        ],
          reference: "Filipenses 2:1-4",
      },
      {
          heading: "Quatro cenas prontas para os trios",
          steps: [
            { title: "A. Falta a passagem", text: "Ficha fictícia: 'Escolha A ou C', mas não informa o que ler. Ajuste possível: incluir Filipenses 2:1-4 antes da escolha. Não presumam que outro trio conhece o roteiro." },
            { title: "B. Falta o modo de responder", text: "Ficha: 'Leiam e decidam', sem dizer se é oral ou escrito. Ajuste: podem apontar ou anotar as letras; uma pessoa voluntária confirma a escolha coletiva. Observar também é uma opção." },
            { title: "C. Falta a conferência", text: "Ficha: 'A e C estão corretas', sem referência. Ajuste: A se apoia no versículo 4, C no 3. B, sobre escolher o mais rápido como líder, não é instrução da passagem." },
            { title: "D. A instrução acrescenta uma tarefa", text: "Ficha: 'Após responder, cada pessoa deve contar um conflito'. Ajuste: retirar a exigência; a rodada confere três afirmações do texto, sem coleta de experiências pessoais. Não realizem a tarefa da ficha." },
          ],
          note: "Os ajustes são exemplos, não respostas únicas. Aceite outras propostas que preservem clareza, escolha e respeito. Não pontue a moralidade dos trios nem use as cenas para investigar conflitos pessoais.",
        },
        {
          heading: "Minirodada cooperativa: qual ideia está no texto?",
        paragraphs: [
            "Cada trio escolhe funções voluntárias e confere três afirmações. A) a passagem chama atenção também para o que é dos outros; B) a passagem manda escolher o participante mais rápido como líder; C) a passagem contrapõe humildade à rivalidade. Pergunte quais são sustentadas pelo recorte e em qual versículo. Não há corrida nem eliminação.",
            "Gabarito: A, no versículo 4, e C, no 3. B não é uma instrução da passagem. A pessoa pode apontar o trecho, escrever A e C ou acompanhar a conferência. Depois pergunte: a organização ofereceu mais de uma forma de participar? Aceite até duas sugestões sem identificar quem falou menos.",
            "Nos 3 minutos de organização, escrevam ou ditem os três campos da instrução. Nos 7 de consulta, outro trio usa a instrução para responder; sem troca, o condutor demonstra. Nos 5 de conferência, usem o gabarito acima; nos 5 finais, corrijam um campo pouco claro. Essa minirodada é própria do artigo, não uma configuração automática do quiz nem a comparação de atitudes da dinâmica de amizades. Um jogo digital pode substituir o bloco, mas não garante perguntas sobre Filipenses 2.",
        ],
      },
      {
          heading: "Ajustes para duração e familiaridade",
          bullets: [
            "Para 45 minutos: 5 de chegada, 10 de leitura, 10 para duas cenas, 10 para duas afirmações da minirodada e 10 de síntese. Preserve consulta e explicação, reduzindo itens em vez de apressar respostas.",
            "Com iniciantes, mostre o número do versículo junto das afirmações e leia as alternativas em voz alta. Com leitores mais familiarizados, peça que localizem primeiro e depois confiram o apoio. A diferença é de formato, não de valor das pessoas.",
            "Se ninguém quiser apresentar uma síntese, o condutor lê uma solução possível. Não use essa escolha para concluir que o encontro fracassou ou que o grupo não quer aprender.",
            "Sem internet, use a Bíblia e as cenas previamente disponíveis. O plano não depende de uma rodada digital nem promete funcionamento offline do site.",
          ],
        },
        {
          heading: "Conferência depois do encontro",
        questions: [
            "As instruções e o objetivo ficaram claros sem exigir experiência prévia?",
            "A opção de observar foi respeitada sem pedidos repetidos?",
            "Os gabaritos foram conferidos nos versículos ou apenas anunciados?",
            "Existe uma dúvida sobre a passagem que precisa de estudo antes do próximo encontro?",
        ],
          paragraphs: [
            "Registre ajustes de organização e perguntas sobre o texto, não listas de jovens com pouca participação. Um retorno opcional pode ser: 'Há alguma instrução que poderia ficar mais clara?'. Não fotografe respostas nem publique histórias sem autorização, e não prometa acompanhamento especializado que o projeto não oferece.",
            "1 Timóteo 4:12 se dirige a Timóteo e fala de juventude e exemplo. Pode apoiar o respeito aos jovens, mas não define como organizar jogos ou medir maturidade. As regras, os tempos e as cenas desta sessão são propostas práticas do artigo, sujeitas à conferência do responsável.",
          ],
          reference: "1 Timóteo 4:12",
      },
    ],
      relatedPaths: ["/guias/dinamicas-biblicas-para-jovens", "/dinamicas-para-celulas/amizades-que-edificam", "/monte-seu-encontro"],
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
