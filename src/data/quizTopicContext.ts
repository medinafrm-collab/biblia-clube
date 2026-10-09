import type { QuizTopicId } from "./quizQuestions";

export type QuizTopicContext = {
  heading: string;
  introduction: string;
  sections: {
    title: string;
    description: string;
    references: string[];
  }[];
  closingNote: string;
};

const quizTopicContexts: Record<QuizTopicId, QuizTopicContext> = {
  geral: {
    heading: "Livro, passagem e contexto: três pistas diferentes.",
    introduction:
      "Saber um nome não resolve toda pergunta. Às vezes a pista é a posição de um livro; outras vezes, quem está falando ou a pergunta feita naquela cena. Os exemplos desta página permitem praticar essas diferenças antes da rodada, sem transformar um resumo em substituto da leitura.",
    sections: [
      {
        title: "Organização não é ordem de escrita",
        description:
          "Gênesis aparece primeiro na organização usual das Bíblias cristãs e começa com o relato da criação. Reconhecer essa posição não significa afirmar que foi o primeiro livro escrito. Confira o índice da sua edição para a ordem dos livros; Gênesis 1:1-5 permite observar o início do relato, não provar a ordem editorial.",
        references: ["Gênesis 1:1-5"],
      },
      {
        title: "Leia a pergunta feita na cena",
        description:
          "Em Mateus 22:34-40, um especialista da Lei pergunta a Jesus sobre o grande mandamento. Jesus responde com o amor a Deus e acrescenta o amor ao próximo. A alternativa Amar a Deus responde à pergunta do quiz, mas ler apenas essa alternativa deixaria de fora o segundo mandamento e a ligação entre os dois no versículo 40.",
        references: ["Mateus 22:34-40"],
      },
      {
        title: "Distinga posição e assunto do livro",
        description:
          "Apocalipse está no final do Novo Testamento na organização usual das Bíblias cristãs. Sua abertura apresenta a revelação de Jesus Cristo e menciona leitura, escuta e observância. A posição no índice e o assunto apresentado no texto são informações diferentes; a pergunta sobre o último livro não exige interpretar suas imagens ou prever acontecimentos.",
        references: ["Apocalipse 1:1-3"],
      },
    ],
    closingNote:
      "Depois da rodada, escolha uma pergunta e releia sua referência com os versículos próximos. Anote o que o texto informa e o que a pergunta não perguntou. A pontuação registra acertos nesta rodada, não maturidade espiritual nem compreensão de toda a Bíblia.",
  },
  "antigo-testamento": {
    heading: "Quem, onde e o que aconteceu: situe cada episódio.",
    introduction:
      "Os livros reúnem narrativas, leis, poemas e falas proféticas; nem toda passagem conta um acontecimento da mesma maneira. Para as perguntas deste tema, três comparações ajudam a separar episódios: a entrega das tábuas, duas travessias e duas obras diferentes. Leia as referências como apoio para reconhecer detalhes, não como resumo de todo o Antigo Testamento.",
    sections: [
      {
        title: "Lei e aliança",
        description:
          "Em Êxodo 19, Israel acampa diante do Sinai depois de sair do Egito, e Moisés transmite ao povo as palavras recebidas. Êxodo 31:18 identifica Moisés recebendo duas tábuas de pedra. Deuteronômio 10:1-5 relembra novas tábuas com os dez mandamentos, depois de as primeiras terem sido quebradas. Para reconhecer quem recebeu as tábuas, esses trechos são mais diretos que uma referência apenas ao conteúdo dos mandamentos.",
        references: ["Êxodo 19:1-8", "Êxodo 31:18", "Deuteronômio 10:1-5"],
      },
      {
        title: "Duas travessias, momentos diferentes",
        description:
          "Em Êxodo 14, Moisés estende a mão sobre o mar e o povo passa em seco. Em Josué 3, a travessia é do Jordão, e os sacerdotes que levam a arca ficam no meio do rio enquanto o povo passa. Água e passagem em seco aparecem nos dois relatos, mas as pessoas, o lugar e a etapa da viagem são diferentes. Compare esses elementos antes de associar qualquer travessia ao mesmo personagem.",
        references: ["Êxodo 14:21-22", "Josué 3:14-17"],
      },
      {
        title: "Templo e muro não são a mesma obra",
        description:
          "1 Reis 6 situa o início da construção da casa do Senhor no reinado de Salomão. Em Neemias 2, o convite é reconstruir o muro de Jerusalém e suas portas; o povo responde que vai começar a obra. Neemias 6 informa a conclusão do muro em cinquenta e dois dias. Uma pergunta sobre esse muro não pede o nome do construtor do templo, e o convite coletivo mostra que Neemias não executa sozinho toda a reconstrução.",
        references: ["1 Reis 6:1-2", "Neemias 2:17-18", "Neemias 6:15-16"],
      },
    ],
    closingNote:
      "Escolha duas histórias que pareçam semelhantes e anote, para cada uma, pessoa, lugar e ação. Por exemplo: Moisés, mar, travessia; sacerdotes com a arca, Jordão, travessia. Depois confira o que distingue os trechos. A pontuação mostra acertos nas perguntas, não mede a fé nem o conhecimento de todo um livro.",
  },
  "jesus-evangelhos": {
    heading: "Qual relato, qual fala e qual momento da cena?",
    introduction:
      "Uma pergunta pode pedir um personagem, uma fala ou uma ação já realizada. Essas informações não são intercambiáveis. A abertura de Lucas e o encerramento de João ajudam a perceber o propósito dos relatos; as cenas da moeda e de Maria Madalena permitem praticar a diferença entre instrução, observação e anúncio.",
    sections: [
      {
        title: "Relatos com propósito",
        description:
          "Lucas 1:1-4 apresenta um relato organizado a partir do que foi transmitido por testemunhas, dirigido a Teófilo para que conheça a certeza do que aprendeu. João 20:30-31 informa que outros sinais não foram escritos e explica o propósito dos que foram selecionados. Esses trechos mostram que há organização e seleção; não permitem presumir que todo episódio apareça em todos os Evangelhos.",
        references: ["Lucas 1:1-4", "João 20:30-31"],
      },
      {
        title: "Orientação não é desfecho",
        description:
          "Em Mateus 17:24-27, os cobradores perguntam a Pedro sobre a taxa. Jesus o orienta a pescar e a procurar uma moeda na boca do primeiro peixe, para pagar por ambos. O trecho termina nessa instrução, sem narrar a pesca ou o pagamento. Por isso, perguntar onde Pedro acharia a moeda acompanha o texto mais precisamente que dizer que a passagem descreve onde ele já a encontrou.",
        references: ["Mateus 17:24-27"],
      },
      {
        title: "O momento muda a resposta",
        description:
          "Em João 20:1-2, Maria Madalena vê a pedra retirada do sepulcro e diz a Pedro e ao outro discípulo que levaram o Senhor e não sabem onde o puseram. Mais adiante, depois de reconhecer Jesus, ela anuncia que o viu. As duas falas pertencem à mesma personagem, mas a momentos diferentes. A descoberta do sepulcro vazio não é ainda, naquela primeira fala, o anúncio do encontro com Jesus.",
        references: ["João 20:1-2", "João 20:11-18"],
      },
    ],
    closingNote:
      "Ao reler uma cena, marque três coisas: quem fala, o que sabe naquele momento e o que o narrador conta depois. Compare a fala inicial de Maria Madalena com seu anúncio posterior. Se consultar outro Evangelho, anote de onde vem cada detalhe, em vez de atribuir todos à mesma passagem. Um acerto identifica a resposta pedida, não resume toda a cena.",
  },
  personagens: {
    heading: "Nomes, famílias e funções: quem é quem na história?",
    introduction:
      "Duas pessoas podem ter o mesmo nome, e uma pessoa pode aparecer com mais de um nome. Além disso, alguém pode participar de uma cena sem executar a ação perguntada. As comparações abaixo ajudam a identificar pessoas por informação explícita: nome, parentesco e função, sem preencher lacunas com detalhes de outra história.",
    sections: [
      {
        title: "Nomes iguais, pessoas diferentes",
        description:
          "Gênesis 41 apresenta José recebendo autoridade de Faraó sobre o Egito. Atos 4 apresenta outro José, levita de Chipre, chamado Barnabé pelos apóstolos. O nome compartilhado não une suas histórias. Já Atos 9:36 explica que Tabita se traduz Dorcas: nesse caso são dois nomes da mesma discípula de Jope. Lugar, livro e identificação fornecida pelo narrador ajudam a decidir se há uma ou duas pessoas.",
        references: ["Gênesis 41:39-41", "Atos 4:36-37", "Atos 9:36-39"],
      },
      {
        title: "Conte as relações, não apenas os nomes",
        description:
          "No final de Rute, Boaz e Rute têm Obede; Obede é pai de Jessé, que é pai de Davi. A sequência deixa Jessé como pai, Obede como avô e Boaz como bisavô de Davi. Noemi recebe o menino e cuida dele, mas esse cuidado não altera a genealogia apresentada. Uma pergunta sobre quem se casou com Rute e se tornou bisavô de Davi pede Boaz, não qualquer nome ligado à família.",
        references: ["Rute 4:13-22"],
      },
      {
        title: "Participar não é fazer a mesma tarefa",
        description:
          "Em Neemias 8, o povo pede ao escriba Esdras que traga o Livro da Lei, e ele faz a leitura pública. Os levitas ajudam a explicar o sentido para que os ouvintes entendam. Neemias participa e é identificado como governador. O título do livro não significa que Neemias execute toda ação narrada nele: para saber quem lê, observe o sujeito da frase e o papel indicado na passagem.",
        references: ["Neemias 8:1-9"],
      },
    ],
    closingNote:
      "Faça uma pequena ficha com nome, lugar, relação familiar ou função e ação no trecho. Para Barnabé: José, Chipre, levita, entrega o valor de uma propriedade. Para Boaz: esposo de Rute e pai de Obede. Use apenas informações conferidas na passagem e deixe em branco o que ela não informa; reconhecer uma pessoa não exige inventar sua biografia.",
  },
  "mulheres-da-biblia": {
    heading: "Histórias de fé, coragem, cuidado e participação.",
    introduction:
      "Mulheres aparecem em diferentes períodos e contextos da Bíblia: famílias, liderança, preservação do povo, discipulado e serviço. Cada história precisa ser lida em seus próprios termos, sem reunir experiências muito diferentes em um único modelo.",
    sections: [
      {
        title: "Família e recomeço",
        description:
          "Em Rute 1, Noemi tenta convencer Rute a voltar, mas Rute decide acompanhá-la. No final do livro, Rute e Boaz têm Obede, e Noemi recebe o menino e cuida dele. Diferencie parentesco e cuidado: Rute é a mãe, Boaz é o pai e Noemi participa da criação. A expressão das vizinhas sobre um filho para Noemi não substitui a genealogia apresentada pelo narrador.",
        references: ["Rute 1:16-18", "Rute 4:13-17"],
      },
      {
        title: "Coragem em momentos decisivos",
        description:
          "Juízes 4 identifica Débora como profetisa e juíza; ela chama Baraque e comunica uma orientação para a batalha. Ester 4 registra outra situação: Mordecai pede que Ester fale ao rei, e ela solicita um jejum antes de entrar sem ser chamada. São pessoas, funções e épocas diferentes. Não atribua a Ester a função de juíza nem transforme o risco que ela assume em garantia de sucesso para qualquer decisão atual.",
        references: ["Juízes 4:4-9", "Ester 4:13-16"],
      },
      {
        title: "Discípulas e testemunhas",
        description:
          "Lucas 8 nomeia Maria Madalena, Joana e Susana entre as mulheres que acompanham Jesus e contribuem com seus bens. João 20 acompanha Maria Madalena no sepulcro: ela inicialmente não reconhece Jesus e depois anuncia que o viu. O nome Maria, sozinho, não identifica toda mulher nos Evangelhos; confira a identificação e o lugar antes de unir episódios de pessoas diferentes.",
        references: ["Lucas 8:1-3", "João 20:11-18"],
      },
    ],
    closingNote:
      "Observe o que o texto diz sobre cada mulher, suas escolhas e seu contexto, evitando completar a narrativa com detalhes que a passagem não oferece.",
  },
  "parabolas-de-jesus": {
    heading: "Histórias breves que convidam a ouvir e responder.",
    introduction:
      "As parábolas usam situações reconhecíveis para confrontar expectativas e ensinar. Para compreendê-las, é importante observar a pergunta, o conflito ou o público que levou Jesus a contar cada história.",
    sections: [
      {
        title: "Por que Jesus contou parábolas",
        description:
          "Em Mateus 13:10, os discípulos perguntam por que Jesus fala ao povo por parábolas. A resposta distingue o que é dado aos discípulos e a condição de quem ouve sem entender. Mais adiante, o narrador relaciona o uso de parábolas a uma citação profética. Portanto, a explicação do próprio capítulo é mais precisa que dizer que parábolas são apenas histórias fáceis, sempre compreendidas de imediato por todos.",
        references: ["Mateus 13:10-17", "Mateus 13:34-35"],
      },
      {
        title: "O contexto orienta a leitura",
        description:
          "Em Lucas 10, a pergunta Quem é o meu próximo? antecede o relato do homem ferido; no final, Jesus pergunta quem se tornou próximo dele. O sacerdote e o levita passam adiante; o samaritano se aproxima e cuida. Em Lucas 15, a reclamação de fariseus e escribas por Jesus receber pecadores antecede outras parábolas. Identificar a pergunta ou a reclamação inicial evita tratar histórias distintas como respostas à mesma situação.",
        references: ["Lucas 10:25-37", "Lucas 15:1-3"],
      },
      {
        title: "A resposta faz parte do ensino",
        description:
          "Em Mateus 21, um filho inicialmente recusa o pedido do pai, mas depois vai; o outro concorda, mas não vai. A pergunta final trata de quem fez a vontade do pai, não de quem respondeu melhor de início. Em Lucas 12, o homem rico planeja ampliar seus celeiros, mas o desfecho interrompe esse plano. Separe fala, intenção e ação: uma intenção narrada não é necessariamente um resultado realizado.",
        references: ["Mateus 21:28-32", "Lucas 12:16-21"],
      },
    ],
    closingNote:
      "Antes de escolher uma alternativa, lembre quem ouviu a parábola e o que aconteceu imediatamente antes e depois dela.",
  },
  "lugares-da-biblia": {
    heading: "A geografia ajuda a acompanhar o movimento da narrativa.",
    introduction:
      "Cidades, montes, rios, mares e desertos não são apenas cenários. Eles marcam jornadas, fronteiras, encontros e mudanças de fase. Relacionar lugar e acontecimento ajuda a organizar a sequência bíblica.",
    sections: [
      {
        title: "Partidas e promessas",
        description:
          "Gênesis 12 apresenta Abrão saindo de Harã e passando por Siquém, depois acampando entre Betel e Ai. Em Gênesis 28, Jacó sai de Berseba em direção a Harã e dá o nome Betel ao lugar de seu sonho, antes chamado Luz. Harã pode ser ponto de partida em uma história e destino em outra. Para responder, relacione o lugar ao viajante e ao trecho indicado, não apenas a uma lista de cidades.",
        references: ["Gênesis 12:1-9", "Gênesis 28:10-19"],
      },
      {
        title: "Deserto, monte e terra",
        description:
          "Êxodo 14 narra a passagem pelo mar em seco; Êxodo 19 situa a chegada ao deserto do Sinai e o acampamento diante do monte. A travessia e o encontro no Sinai são etapas diferentes da viagem. O texto não pede que você determine uma localização arqueológica moderna: nas perguntas, reconheça o lugar nomeado e o acontecimento associado a ele.",
        references: ["Êxodo 14:21-31", "Êxodo 19:1-6"],
      },
      {
        title: "Caminhos do anúncio",
        description:
          "Lucas 9:51 registra a decisão de Jesus de ir a Jerusalém. Atos 1:8 apresenta Jerusalém, Judeia, Samaria e os confins da terra como alcance do testemunho, não como roteiro detalhado de uma viagem. Atos 13 identifica Antioquia como comunidade em que Barnabé e Saulo são separados para a missão, seguida da partida por Selêucia. Distinga destino, região de atuação e cidade de envio.",
        references: ["Lucas 9:51", "Atos 1:8", "Atos 13:1-4"],
      },
    ],
    closingNote:
      "Associe o lugar ao deslocamento e ao acontecimento, sem depender de equivalências modernas que não aparecem diretamente no texto.",
  },
  "igreja-primitiva": {
    heading: "Do Pentecostes às comunidades formadas em novas cidades.",
    introduction:
      "Atos acompanha o testemunho cristão saindo de Jerusalém e alcançando outras regiões. Pessoas, viagens, conflitos e decisões mostram como as primeiras comunidades aprenderam a viver e anunciar sua fé.",
    sections: [
      {
        title: "Pentecostes e testemunho",
        description:
          "Atos 1:8 anuncia poder para testemunhar em Jerusalém e além dela. Atos 2 situa o Pentecostes, relata línguas como de fogo e descreve ouvintes de diferentes lugares reconhecendo suas próprias línguas. A pergunta sobre o que os ouvintes escutam é diferente de uma pergunta sobre o sinal visto pelos discípulos. O capítulo localiza o episódio em Jerusalém; a lista de povos não muda o lugar do acontecimento.",
        references: ["Atos 1:8", "Atos 2:1-12"],
      },
      {
        title: "Vida em comunidade",
        description:
          "Atos 2 descreve ensino, comunhão, refeições e orações. Atos 6 mostra uma dificuldade concreta: viúvas dos helenistas eram esquecidas na distribuição diária. Os doze propõem escolher sete pessoas para esse serviço, preservando sua dedicação à oração e à palavra. O trecho distingue tarefas e apresenta nomes; não afirma que os sete executam toda função existente na comunidade.",
        references: ["Atos 2:42-47", "Atos 6:1-7"],
      },
      {
        title: "Missão entre cidades",
        description:
          "Atos 13 registra Barnabé e Saulo separados para a missão em Antioquia. Atos 15 apresenta outra cena: uma discussão sobre exigir circuncisão dos gentios leva uma delegação a Jerusalém. A carta resultante é uma decisão coletiva comunicada às comunidades, não uma opinião isolada de Paulo. Compare cidade de envio, motivo da viagem e participantes antes de juntar episódios de jornadas diferentes.",
        references: ["Atos 13:1-4", "Atos 15:1-21"],
      },
    ],
    closingNote:
      "Nas perguntas sobre viagens, identifique a cidade de partida, os companheiros e o momento da missão para não misturar jornadas diferentes.",
  },
};

export function getQuizTopicContext(id: QuizTopicId) {
  return quizTopicContexts[id];
}
