export type CellAudience = "jovens" | "casais" | "todos";

export type CellDynamic = {
  id: string;
  audience: CellAudience;
  audienceLabel: string;
  category: string;
  title: string;
  summary: string;
  duration: string;
  meetingCore?: string;
  groupSize: string;
  materials: string[];
  objective: string;
  steps: { title: string; description: string }[];
  questions: string[];
  references: string[];
  leaderNote: string;
  prayerSuggestion: string;
  planningWorksheet?: {
    fields: { label: string; prompt: string; example: string }[];
    variation: string;
  };
};

const cellDynamicDrafts: CellDynamic[] = [
  {
    "id": "verdade-ou-pressao",
    "meetingCore": "Leia a cena fictícia: uma equipe recebeu um ponto a mais e alguém propõe ficar quieto para vencer. Em duplas ou trios, escolham o que conferir e uma fala respeitosa. Apoio: verificar o placar e avisar quem conduz. Não peçam relatos reais nem confissões.",
    "audience": "jovens",
    "audienceLabel": "Jovens",
    "category": "Regras e conferência",
    "title": "Jogo limpo: confira o combinado",
    "summary": "Quatro cenas de placar, prazo e consulta para produzir um combinado de jogo limpo, sem avaliar pressões da vida pessoal.",
    "duration": "35 a 45 min",
    "groupSize": "6 a 20 pessoas",
    "materials": [
      "Bíblia ou aplicativo bíblico",
      "Este roteiro com as quatro cenas",
      "Relógio",
      "Papel e caneta por trio, opcionais"
    ],
    "objective": "Conferir fatos de uma rodada e escrever uma regra verificável sobre placar, consulta ou releitura, à luz de Efésios 4:25 e 4:29.",
    "steps": [
      {
        "title": "Leitura bíblica",
        "description": "Reserve 7 minutos. Explique que o encontro usa personagens fictícios e não vai recolher experiências pessoais. Leia Efésios 4:25 e 4:29, depois de consultar 4:25-32 na preparação. A passagem trata da vida em comunidade, da verdade e de palavras que contribuam para os outros. Pergunte que orientação aparece no versículo 25: falar a verdade ao próximo. As regras de jogo desta atividade são uma aplicação proposta, não uma lista presente na carta. Romanos 12:2 e 1 Timóteo 4:12 ficam para consulta posterior, sem exigir que os jovens resolvam todas as questões desses textos nesta rodada."
      },
      {
        "title": "Abertura",
        "description": "Núcleo de até 5 minutos: leia a cena fictícia: 'Uma equipe percebe que recebeu um ponto a mais por engano. Uma pessoa propõe avisar; outra diz que é melhor ficar quieto para ganhar'. Pergunte que informação pode ser conferida e que resposta respeita o combinado. Apoio: conferir o resultado e avisar quem conduz. Uma frase possível é 'Vamos verificar o placar antes de seguir'. Aceite duas contribuições voluntárias ou leia o apoio se ninguém quiser responder. O grupo pode consultar, escrever ou apenas ouvir, sem revelar como agiria numa situação real."
      },
      {
        "title": "Escolha e conversa",
        "description": "Reserve 15 minutos. Em 3 minutos, apresente as outras três cenas fictícias: A) uma rodada permite consultar a Bíblia, mas um colega diz que pedir consulta é sinal de saber menos; B) a equipe recebeu uma dica depois do prazo e alguém propõe dizer que já tinha respondido antes; C) uma pessoa pede que a regra seja repetida e recebe a resposta 'todo mundo entendeu, só você não'. Em trios ou quartetos, escolham uma cena e usem 6 minutos para separar o fato conhecido, a pressão exercida e uma resposta possível. Apoios: em A, consulta é permitida e pode ser usada sem desqualificação; em B, informar quando a resposta foi dada, sem inventar um horário; em C, repetir a regra sem ridicularizar. Usem os 6 minutos finais para até três sínteses voluntárias, de até 1 minuto cada, e a conferência. Não tentem identificar colegas reais nas cenas. Para a versão de 45 minutos, acrescentem 10 minutos para reescrever uma fala de pressão como convite respeitoso e comparar as propostas."
      },
      {
        "title": "Fechamento",
        "description": "Use 8 minutos para uma das perguntas abaixo, uma síntese e uma oração breve, se desejada. Escolham uma regra para uma próxima rodada, como conferir o placar antes de avançar ou permitir pedidos de releitura. Não cobrem promessas individuais nem confissões sobre trapaça. As etapas somam 35 minutos; a reescrita das falas acrescenta 10, totalizando 45. No criador de roteiro, use somente as etapas selecionadas e os tempos exibidos, não a duração integral desta página."
      }
    ],
    "questions": [
      "Na cena do placar, o que pode ser conferido antes de seguir? O resultado da pergunta e o ponto registrado, sem adivinhar a intenção de alguém.",
      "Na cena da consulta, qual diferença há entre uma regra e a opinião de um colega? A consulta está permitida; a fala que desqualifica não muda esse combinado.",
      "Como relacionar Efésios 4:25 e 4:29 às respostas propostas? Observem verdade e palavras que ajudem, sem usar os versículos para rotular participantes como mentirosos."
    ],
    "references": [
      "Efésios 4:25-29",
      "Romanos 12:2",
      "1 Timóteo 4:12"
    ],
    "leaderNote": "Prepare trios ou quartetos para 6 a 20 pessoas e deixe as cenas disponíveis por leitura ou na tela. Ofereça leitura assistida e a opção de observar. Não peça bilhetes sobre pressões reais, não investigue quem já mentiu e não transforme a atividade em aconselhamento. Recusa e silêncio não precisam de justificativa. Os exemplos não diagnosticam o grupo nem autorizam cobrança de relatos. Respostas e imagens não devem ser publicadas sem autorização.",
    "prayerSuggestion": "Sugestão opcional: 'Deus, ajuda-nos a falar com verdade e respeito, a ouvir e a cuidar uns dos outros. Obrigado por podermos aprender juntos. Amém.' Quem preferir pode acompanhar em silêncio."
  },
  {
    id: "escuta-que-aproxima",
    meetingCore: "Em dupla, uma pessoa escolhe entre um jogo de pistas e um de memória e explica a preferência em uma frase. A outra resume e pergunta se entendeu; depois troquem. Exemplo: Você prefere pistas e regras curtas para incluir quem chegou agora; entendi? Não avaliem o relacionamento da dupla.",
    audience: "casais",
    audienceLabel: "Casais",
    category: "Relacionamento e cuidado",
    title: "Escuta que aproxima",
    summary:
      "Uma atividade de escuta em dupla com temas leves, frases prontas e troca de funções, sem discutir conflitos ou avaliar o relacionamento.",
    duration: "45 a 60 min",
    groupSize: "3 a 10 casais",
    materials: ["Bíblia ou aplicativo bíblico", "Este roteiro com os temas e exemplos", "Relógio", "Papel e caneta por dupla, opcionais"],
    objective:
      "Observar a orientação de ouvir em Tiago 1:19 e praticar um resumo fiel de uma fala sobre preferências, sem aconselhamento ou exposição pessoal.",
    steps: [
      {
        title: "Leitura b\u00edblica",
        description:
          "Reserve 8 minutos para acolher, explicar as escolhas de participação e ler Tiago 1:19-21. Pergunte que contraste aparece no versículo 19: disposição para ouvir e cuidado ao falar e irar-se. A passagem se dirige à comunidade, não oferece um teste de comunicação conjugal. Resumir a fala do outro é uma prática proposta por este roteiro, não uma técnica descrita nesses versículos. Eclesiastes 4:9-12 e Colossenses 3:12-14 ficam para consulta posterior; companhia e cuidado nesses textos não se restringem a casais nem comprovam a qualidade de um relacionamento pela atividade.",
      },
      {
        title: "Aquecimento",
        description:
          "Núcleo de até 5 minutos: apresente uma demonstração fictícia. Uma pessoa diz: 'Eu escolheria um jogo de pistas, com regras curtas, para que quem chegou agora possa acompanhar'. A outra resume: 'Você prefere pistas e regras curtas para incluir quem está chegando; entendi corretamente?'. Quem falou pode confirmar ou corrigir. Cada dupla escolhe um tema: um jogo que gostaria de experimentar, uma receita que gostaria de aprender ou um passeio imaginado. Uma pessoa fala por até 1 minuto; a outra resume em até 30 segundos, sem sugerir uma escolha melhor. Troquem as funções e usem o minuto restante para conferir a instrução. Não é preciso relatar planos reais, gastos ou lembranças do relacionamento. Quem preferir pode usar a fala fictícia ou apenas observar.",
      },
      {
        title: "Ouça, resuma e confira",
        description:
          "Reserve 22 minutos. Em 3 minutos, leia as duas situações fictícias: A) alguém descreve uma receita, mas a outra pessoa muda de assunto antes do fim; B) alguém fala de um passeio tranquilo, e a resposta já começa sugerindo um destino sem confirmar a preferência. Cada dupla escolhe uma e propõe uma fala de escuta, como 'Você quer terminar a ideia?' ou 'O ponto principal é um lugar tranquilo; entendi?'. Usem três ciclos de 4 minutos: 1 minuto de fala, 1 de resumo e confirmação por uma pessoa; depois invertam, com os mesmos tempos. É permitido usar os temas do aquecimento em vez das cenas, passar um ciclo ou acompanhar em silêncio. Nos 7 minutos restantes, conversem sobre a primeira pergunta abaixo e ouçam até três sínteses voluntárias sobre a regra da atividade, sem conteúdo privado. Na versão de 60 minutos, acrescentem 15 minutos para experimentar outro tema e comparar duas formas de resumo, sem julgar qual casal escuta melhor.",
      },
      {
        title: "Síntese sem avaliação do casal",
        description:
          "Use 10 minutos para uma pergunta de observação, até três contribuições e um encerramento breve. Uma síntese possível é: ouvir antes de sugerir e perguntar se o resumo corresponde ao que foi dito. Uma dupla pode escolher repetir esse formato em outra atividade, mas não precisa anunciar compromissos, pedidos de perdão ou mudanças no relacionamento. A oração é opcional. As etapas somam 45 minutos; a prática adicional leva a 60. No criador de roteiro, respeite os blocos selecionados e seus tempos, não a duração integral desta página.",
      },
    ],
    questions: [
      "Qual diferença há entre resumir e decidir pelo outro? No exemplo, o resumo confirma pistas e regras curtas; não substitui a preferência por outro jogo.",
      "Se um resumo não corresponder à fala, como corrigir sem avaliação pessoal? Uma resposta possível é 'Quis dizer um passeio tranquilo, não necessariamente esse destino'.",
      "Que orientação aparece em Tiago 1:19? Localizem ouvir e falar; a troca de funções e o cronômetro são escolhas desta atividade, não exigências do versículo.",
    ],
    references: ["Tiago 1:19-21", "Eclesiastes 4:9-12", "Colossenses 3:12-14"],
    leaderNote:
      "Para 3 a 10 casais, mantenha as conversas em duplas e limite o plenário a três contribuições. Não observe nem pontue intimidade, afeto ou desempenho conjugal. Não recolha conflitos, queixas ou pedidos de perdão. É possível acompanhar sozinho, usar falas fictícias, responder por escrito ou apenas ouvir; uma recusa não pede explicação. Se surgir um assunto pessoal, não o desenvolva como atividade nem prometa aconselhamento. Não publique respostas ou imagens sem autorização.",
    prayerSuggestion:
      "Sugestão opcional: 'Deus, ajuda-nos a ouvir com atenção e falar com respeito. Obrigado pela oportunidade de aprender juntos. Amém.' Não peça que cada casal ore ou relate algo íntimo em voz alta.",
  },
  {
    id: "pontes-de-gratidao",
    meetingCore: "Cada pessoa pode escrever anonimamente uma frase sobre um gesto de acolhimento. Exemplos: ter um lugar para sentar ou ouvir uma explicação com calma. Misturem os papéis e leiam até dois, sem identificar autores. Escolham um gesto que poderia ser repetido, sem votação ou relatos íntimos.",
    audience: "todos",
    audienceLabel: "Toda a c\u00e9lula",
    category: "Quebra-gelo e comunh\u00e3o",
    title: "Pontes de gratid\u00e3o",
    summary:
      "Bilhetes anônimos sobre pequenos motivos de gratidão, com exemplos prontos, leitura do Salmo 100 e uma conversa leve sobre acolhimento.",
    duration: "20 a 30 min",
    groupSize: "4 a 30 pessoas",
    materials: ["Um papel pequeno por pessoa", "Canetas", "Um envelope ou recipiente por grupo", "Bíblia ou aplicativo bíblico", "Relógio ou cronômetro"],
    objective:
      "Fortalecer a comunh\u00e3o ao transformar gratid\u00e3o em palavras e atitudes de encorajamento.",
    steps: [
      {
        title: "Leitura b\u00edblica",
        description:
          "Reserve 5 minutos. Explique que escrever, ler e falar são convites, não obrigações. Leia Salmo 100:1-5: é um cântico de louvor que liga o agradecimento à bondade e à fidelidade de Deus, não a uma avaliação de quem teve a melhor semana. Pergunte: que motivo para agradecer aparece no versículo 5? A bondade e a fidelidade de Deus são a observação do texto. Os bilhetes são uma aplicação proposta pelo roteiro, não uma prática exigida pelo salmo. As outras referências ficam para consulta posterior.",
      },
      {
        title: "Escreva",
        description:
          "Núcleo da atividade, em até 5 minutos: entregue um papel por pessoa e escolha apenas uma frase para completar: 'Um pequeno motivo para agradecer é...' ou 'Um gesto de acolhimento que aprecio é...'. Não coloque nomes nem detalhes que identifiquem alguém. Exemplos fictícios para quem precisar: 'Ter um lugar para sentar'; 'Receber ajuda para encontrar uma passagem'; 'Ser recebido com um bom-dia'; 'Ouvir uma explicação com calma'. É possível usar um exemplo, pedir ajuda para escrever ou apenas observar. Dobre os bilhetes, misture no recipiente e convide duas pessoas voluntárias a ler um papel cada, sem tentar descobrir o autor. Quem conduz pode ler por elas. Agradeça as contribuições sem comparar as respostas.",
      },
      {
        title: "Conecte",
        description:
          "Reserve 7 minutos. Com 4 a 8 pessoas, leia até quatro dos bilhetes restantes e converse sobre a primeira pergunta abaixo. Com 9 a 30, forme grupos de 4 a 6, distribua os bilhetes restantes e peça que cada grupo leia até quatro; não é preciso ler todos. Use 3 minutos para a leitura e 4 para a conversa. Procurem um gesto simples que possa ser repetido no próximo encontro. Na versão de 30 minutos, acrescente 5 minutos para a segunda pergunta e 5 para recolher uma sugestão breve de cada grupo. Não peça relatos íntimos nem transforme os bilhetes em votação.",
      },
      {
        title: "Agrade\u00e7a",
        description:
          "Reserve os 3 minutos finais. Resuma um gesto de acolhimento sugerido, por exemplo, deixar uma cadeira disponível ou oferecer ajuda com a leitura. Convide o grupo a experimentar esse gesto, sem cobrar compromissos públicos. Faça uma oração breve de gratidão; quem preferir pode acompanhar em silêncio. Recolha os papéis para descarte, sem fotografar ou publicar os bilhetes. As quatro etapas somam 20 minutos; os dois acréscimos da conversa levam a 30 minutos.",
      },
    ],
    questions: [
      "Qual gesto dos bilhetes podemos repetir para receber bem alguém no próximo encontro? Pense em algo concreto, como oferecer uma cadeira ou explicar uma atividade com calma.",
      "No Salmo 100:4-5, o agradecimento se relaciona a quê? Observem a bondade e a fidelidade de Deus antes de trazer exemplos do cotidiano.",
      "Hebreus 10:24-25 menciona incentivo ao amor e às boas obras. Como podemos encorajar a participação sem obrigar ninguém a falar? Uma possibilidade é oferecer ajuda e respeitar quem prefere ouvir.",
    ],
    references: ["Salmo 100:1-5", "1 Tessalonicenses 5:16-18", "Hebreus 10:24-25"],
    leaderNote:
      "Antes de começar, deixe os materiais ao alcance e organize grupos pequenos se houver mais de oito pessoas. Ofereça letras grandes e leitura assistida quando necessário. Gratidão não significa negar tristeza ou exigir uma resposta positiva: não peça motivos para agradecer por situações dolorosas. Se aparecer um bilhete íntimo ou identificável, não o leia em público. Não investigue seu autor. Ninguém precisa justificar a escolha de não participar. No criador de roteiro, siga o tempo de cada bloco e use somente as etapas selecionadas, não o cronograma integral desta página.",
    prayerSuggestion:
      "Sugestão breve, adaptável: 'Deus, agradecemos por tua bondade e pelas oportunidades de cuidar uns dos outros. Ajuda-nos a receber cada pessoa com atenção e respeito. Amém.' A oração é opcional para quem acompanha; não peça que cada pessoa ore em voz alta.",
  },
  {
    id: "planejar-juntos",
    meetingCore: "Leia o cenário fictício: seis adultos têm um celular, duas pessoas não conhecem o site e há 20 minutos para uma sessão futura. Cada dupla escolhe um jogo e registra quem explica e como todos podem acompanhar. Apoio: quiz cooperativo, leitura em voz alta e consulta compartilhada. Preparem somente uma decisão do plano neste bloco curto; não executem a sessão nem acrescentem a variação da mesa.",
    audience: "casais",
    audienceLabel: "Casais",
    category: "Planejamento e cooperação",
    title: "Planejar juntos",
    summary:
      "Uma oficina em dupla para preencher um plano de 20 minutos de jogos: formato, tempo, funções, participação e alternativa sem internet, com exemplo pronto.",
    duration: "30 a 45 min",
    groupSize: "3 a 8 casais",
    materials: ["Um papel por casal", "Canetas", "Bíblia ou aplicativo bíblico", "Relógio"],
    objective:
      "Preparar um plano curto que outra dupla consiga compreender: jogo, distribuição do tempo, funções voluntárias, participação com um aparelho e alternativa oral. Não executar o evento durante a oficina nem avaliar o relacionamento.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Reserve 6 minutos para os combinados e a leitura de Eclesiastes 4:9-10. O texto descreve vantagens da companhia e da ajuda mútua; não é uma regra exclusiva sobre casamento. Pergunte que exemplo de ajuda aparece na passagem. Planejar um jogo em dupla é uma aplicação criada para este encontro. Ninguém precisa contar algo sobre seu relacionamento.",
      },
      {
        title: "Uma tarde de jogos",
        description:
          "Use até 5 minutos para o cenário fictício: seis adultos têm 20 minutos para uma sessão futura; há um celular e duas pessoas nunca usaram o site. Cada dupla escolhe quiz cooperativo, pistas de personagens ou pares narrados e registra como explicar a regra. Uma pessoa sugere, a outra confirma o que entendeu. Não há um plano único correto. Em vez desta etapa, é possível usar a variação da mesa descrita abaixo, também de 5 minutos; escolha uma das duas, sem somar tempos.",
      },
      {
        title: "Cenários para decidir",
        description:
          "Reserve 12 minutos para preencher os cinco campos abaixo: 2 para ler o modelo, 7 para registrar decisões e 3 para conferir o tempo e a alternativa sem conexão. O plano do evento deve distribuir seus próprios 20 minutos, por exemplo 3 de regras, 12 de jogo e 5 de conferência. Esses 20 minutos não são executados agora nem somados à oficina. Definam funções voluntárias, como ler, confirmar a escolha e acompanhar o relógio; a mesma pessoa pode fazer mais de uma, e ninguém precisa emprestar aparelho. A alternativa deve incluir pergunta ou pistas, resposta e referência disponíveis antes do evento.",
      },
      {
        title: "Um acordo possível",
        description:
          "Use 7 minutos: 2 para outra dupla ler o plano, 3 para localizar uma instrução ausente ou pouco clara e 2 para corrigir e encerrar. Sem troca, o condutor lê um exemplo e a dupla confere seus campos. Na sugestão de 45 minutos, acrescente 15: 5 para cada dupla ler as regras da outra, 5 para simular oralmente a falha de conexão e 5 para revisar os campos, sem jogar o evento inteiro. A oficina soma 6 + 5 + 12 + 7 = 30 minutos sugeridos, ou 45 com esse teste; não são tempos observados em aplicação real. No criador de roteiro, use apenas o núcleo e os tempos selecionados, não o modelo inteiro nem sua variação.",
      },
    ],
    questions: [
      "Outra dupla consegue identificar o jogo e quem explica a regra? Se faltar uma informação, acrescentem ao campo correspondente, sem avaliar quem escreveu.",
      "Os blocos do evento somam 20 minutos? Confiram regras, jogo e conferência; não incluam os 30 minutos de preparo nesse total.",
      "O plano funciona sem internet? A alternativa precisa ter uma pergunta ou pistas, resposta e referência já disponíveis, não apenas mandar abrir outra página.",
    ],
    references: ["Eclesiastes 4:9-10", "Gênesis 6:13-22"],
    planningWorksheet: {
      fields: [
        { label: "Jogo", prompt: "Que formato será usado e qual regra será explicada?", example: "Quiz cooperativo: o condutor lê uma pergunta e as alternativas; o grupo conversa e escolhe uma resposta. Consulta permitida, sem ranking individual." },
        { label: "Tempo do evento", prompt: "Como distribuir os 20 minutos, incluindo explicação e conferência?", example: "3 minutos de regras, 12 de até três perguntas com explicações e 5 para reler uma referência. Se faltar tempo, retire uma pergunta; não apresse a consulta." },
        { label: "Funções", prompt: "Quem deseja ler, confirmar escolhas e acompanhar o horário?", example: "Uma pessoa voluntária lê, outra confirma a escolha no celular e outra acompanha o relógio. Trocas são opcionais; uma pessoa pode acumular funções." },
        { label: "Participação", prompt: "Como acompanhar com um celular e sem conhecer o site?", example: "Faça uma pergunta de demonstração sem pontuação, leia as opções em voz alta e deixe a Bíblia aberta. É possível apenas ouvir ou passar." },
        { label: "Sem internet", prompt: "Qual exemplo oral fica pronto antes do evento, com resposta e referência?", example: "Leia as pistas: recebeu instruções para construir uma arca; sua história aparece em Gênesis 6. Resposta: Noé; confira Gênesis 6:13-22. As pistas e a passagem ficam anotadas ou abertas numa Bíblia impressa antes do evento. Não prometa funcionamento offline do site." },
      ],
      variation: "Alternativa para a etapa de escolha, não uma atividade extra: em 1 minuto, apresente uma mesa fictícia com livros, folhas comuns e uma anotação pessoal. Em 2 minutos, ordenem A conferir; B pedir autorização e combinar ajuda voluntária; C separar os materiais autorizados; D colocá-los no lugar combinado. Gabarito: B, C, D, A. Nos 2 minutos finais, expliquem por que autorização vem antes de mover os materiais e confiram a resposta. Total: 5 minutos, substituindo Uma tarde de jogos. Não usem objetos reais, não leiam anotações privadas e não avaliem a rotina doméstica. Depois, sigam ao modelo do evento: esta sequência serve como aquecimento para instruções claras, não altera seus 20 minutos.",
    },
    leaderNote:
      "Use apenas o cenário fictício. Não avalie o relacionamento de ninguém nem compare duplas. Ofereça leitura assistida e a opção de observar. Os planos não exigem compras, coleta de dinheiro, exposição familiar ou aconselhamento. Com oito casais, limite as apresentações a três voluntários para preservar o tempo.",
    prayerSuggestion:
      "Sugestão opcional: 'Deus, ajuda-nos a ouvir com atenção, cooperar e receber bem as pessoas. Obrigado pela oportunidade de aprender juntos. Amém.' Quem preferir pode acompanhar em silêncio.",
  },
  {
    id: "casa-que-cresce",
    meetingCore: "Apresente as opções A ao levantar, B em casa, C ao deitar e D pelo caminho. Localizem as situações em Deuteronômio 6:7. Apoio: todas aparecem, na ordem B, D, C, A. É uma conferência da leitura, não uma rotina familiar obrigatória. Respondam oralmente, por letras ou apenas acompanhem.",
    audience: "casais",
    audienceLabel: "Casais",
    category: "Leitura em família",
    title: "Casa que cresce",
    summary:
      "Uma oficina em dupla para preparar uma leitura curta em família, com Deuteronômio 6:4-9, perguntas prontas e formas voluntárias de acompanhar.",
    duration: "50 a 65 min",
    groupSize: "3 a 8 casais",
    materials: ["Bíblia ou aplicativo bíblico", "Este roteiro com as perguntas", "Relógio", "Papel e caneta por dupla, opcionais"],
    objective:
      "Localizar as situações de ensino mencionadas em Deuteronômio 6:7 e preparar instruções claras para uma leitura compartilhada, sem aconselhamento sobre criação de filhos.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Reserve 12 minutos para acolher, explicar que a oficina é para adultos e ler Deuteronômio 6:4-9. O texto se dirige a Israel e relaciona amor a Deus, suas palavras e ensino aos filhos em situações cotidianas. Localizem no versículo 7 casa, caminho, deitar e levantar. Esta oficina não reproduz todas as práticas descritas nos versículos 8-9: o formato de leitura curta é uma proposta do roteiro. Efésios 6:4 fica como referência complementar, não como convite a discutir disciplina ou conflitos no grupo. Nenhum participante precisa ter filhos ou explicar sua história familiar.",
      },
      {
        title: "Localize quatro momentos",
        description:
          "Núcleo de até 5 minutos: apresente quatro situações misturadas: A) ao levantar; B) em casa; C) ao deitar; D) pelo caminho. Pergunte quais aparecem em Deuteronômio 6:7. Apoio: todas; na ordem do versículo, B, D, C, A. A ordem serve à conferência da leitura, não é uma rotina obrigatória a cumprir diariamente. A dupla pode apontar o texto, escrever as letras ou apenas ouvir. Quem conduz lê o apoio se ninguém quiser responder; não peça relatos dos horários da família.",
      },
      {
        title: "Prepare uma leitura de sete minutos",
        description:
          "Reserve 23 minutos. Em 3 minutos, apresente este exemplo de leitura em família: 1 minuto para oferecer ouvir ou responder, 2 para ler Deuteronômio 6:4-7, 3 para duas perguntas e 1 para resumir, totalizando 7. Perguntas prontas: 'A quem a fala se dirige no versículo 4?' — Israel; 'Que situações aparecem no versículo 7?' — em casa, pelo caminho, ao deitar e levantar. Em 7 minutos, cada dupla prepara a instrução para um grupo fictício com uma criança que ainda não lê e dois adultos. Exemplo de apoio: o adulto lê e a criança pode escolher entre 'em casa' e 'no espaço' quando perguntar por uma situação do texto. Nos 8 minutos seguintes, testem oralmente duas vezes, 4 minutos por vez: uma pessoa lê a instrução e a outra verifica se é possível acompanhar, depois troquem se quiserem. Esse teste abreviado não executa os sete minutos completos nem exige encenar uma criança. Nos 5 minutos finais, recolha até três sugestões sobre clareza. Para 65 minutos, acrescente 15 para adaptar o mesmo exemplo a um grupo fictício com idades misturadas, oferecendo apontar, desenhar ou acompanhar em silêncio.",
      },
      {
        title: "Confira a proposta, não a família",
        description:
          "Use 10 minutos para conferir uma pergunta abaixo, ouvir até três contribuições e encerrar. Verifiquem se o roteiro contém passagem, instrução, pergunta e resposta de apoio, e se oferece uma forma de apenas ouvir. A dupla pode guardar a proposta, mas não precisa prometer aplicá-la em casa. Uma oração breve é opcional. As etapas da oficina somam 50 minutos; a adaptação extra leva a 65. Essa é a duração da preparação entre adultos, não o tempo recomendado de uma atividade com crianças. No criador de roteiro, siga os blocos selecionados e seus tempos, não a duração integral desta página.",
      },
    ],
    questions: [
      "As duas perguntas podem ser respondidas pelo texto lido? Sim: Israel aparece em Deuteronômio 6:4 e as situações cotidianas em 6:7; não é necessário inventar detalhes.",
      "Como participar sem ler em voz alta? É possível acompanhar a leitura de um adulto, apontar um trecho, escolher entre frases ou apenas ouvir.",
      "Qual diferença há entre observar o versículo e criar um cronograma? As situações estão no texto; sete minutos, papéis e funções são escolhas desta oficina, não uma regra da passagem.",
    ],
    references: ["Deuteronômio 6:4-9", "Efésios 6:4"],
    leaderNote:
      "Para 3 a 8 casais, mantenha o preparo em duplas e limite apresentações a três voluntárias. Não peça informação sobre filhos, fertilidade, relações familiares ou disciplina. Casais sem filhos podem usar o mesmo cenário fictício; ninguém precisa justificar sua participação. Leitura assistida, resposta escrita e observação são alternativas. Se a proposta for aplicada com crianças depois, um adulto responsável acompanha e avalia sua adequação, sem exigir gestos, toque ou relato pessoal. Não recolha desenhos ou publique imagens sem autorização. A oficina não avalia desenvolvimento nem oferece aconselhamento familiar.",
    prayerSuggestion:
      "Sugestão opcional: 'Deus, ajuda-nos a ler com atenção, explicar com paciência e respeitar as diferentes formas de participar. Obrigado por podermos aprender juntos. Amém.' É possível acompanhar em silêncio.",
  },
  {
    "id": "amizades-que-edificam",
    "meetingCore": "Leia a cena fictícia: uma pessoa emprestou um livro e a outra pergunta onde guardá-lo antes de devolver. Escolham verde, amarelo ou vermelho para a atitude e expliquem o que a cena informa. Apoio: verde, pois pergunta antes de decidir. Não classifiquem amigos reais.",
    "audience": "jovens",
    "audienceLabel": "Jovens",
    "category": "Amizade e influência",
    "title": "Amizades que edificam",
    "summary": "Compare quatro atitudes fictícias envolvendo um livro, um desenho e um marcador; produza uma justificativa e uma nova fala, sem avaliar amizades reais.",
    "duration": "35 a 50 min",
    "groupSize": "6 a 24 pessoas",
    "materials": [
      "Um papel por participante",
      "Canetas",
      "Bíblia ou aplicativo bíblico",
      "Relógio",
      "Três papéis por equipe com as palavras verde, amarelo e vermelho"
    ],
    "objective": "Distinguir ação observável e informação ausente em cenas leves, usando um semáforo de atitudes, não um diagnóstico de amizades.",
    "steps": [
      {
        "title": "Leitura bíblica",
        "description": "Reserve 7 minutos para os combinados e Provérbios 17:17 e 27:17. Os provérbios falam de amizade constante e influência mútua, não oferecem um teste para classificar pessoas. Localizem amizade e comparação com o ferro. O semáforo é uma atividade criada pelo roteiro; 1 Coríntios 15:33 fica para consulta posterior em seu contexto sobre ressurreição."
      },
      {
        "title": "Uma atitude observável",
        "description": "Em até 5 minutos, leia: uma pessoa emprestou um livro; quem o recebeu pergunta onde guardá-lo antes de devolver. Pergunte qual ação aparece, sem adivinhar intenções. Apoio: pedir informação antes de decidir. Mostre que verde avalia uma atitude nesta cena, não toda uma pessoa. Aceite resposta oral, escrita ou apenas escuta."
      },
      {
        "title": "Semáforo das atitudes",
        "description": "Reserve 15 minutos: 1 para explicar, até 3 por cena e 2 para síntese. Verde ajuda na cena; amarelo pede informação; vermelho indica algo a evitar. Cenas: A alguém pergunta antes de usar o marcador emprestado; B alguém guarda um livro sem saber se a leitura terminou; C alguém rasga o desenho de outra pessoa para fazer uma piada; D alguém elogia uma cor do desenho e pergunta se a pessoa quer uma sugestão. Apoios: A e D, verde, pois preservam escolha; B, amarelo, falta confirmar o uso; C, vermelho, danifica algo alheio. Outras justificativas podem ser discutidas com base nos fatos. Produto: uma cor e uma frase que a sustente por cena. Para 50 minutos, acrescente 15: 5 para escolher B ou C, 5 para reescrever a ação com respeito e 5 para conferir, sem encenação obrigatória."
      },
      {
        "title": "Compare sem rotular",
        "description": "Use 8 minutos: 3 para uma pergunta, 3 para até três contribuições e 2 para encerrar. Compare ação conhecida e hipótese sobre intenção. Não nomeiem colegas nem anunciem compromissos. Total sugerido: 7 + 5 + 15 + 8 = 35 minutos, ou 50 com reescrita; não medido em aplicação real. No criador, use apenas o núcleo e o tempo reservado."
      }
    ],
    "questions": [
      "Por que B pede mais contexto? Não sabemos se a pessoa terminou a leitura; perguntar evita decidir por ela.",
      "O que muda numa reescrita de C? Preservar o desenho e perguntar antes de comentar são possibilidades; não julguem o caráter de quem aparece na cena.",
      "Qual diferença entre observar um gesto e classificar uma amizade? Os provérbios não fornecem uma nota nem um semáforo para pessoas."
    ],
    "references": [
      "Provérbios 17:17",
      "Provérbios 27:17",
      "1 Coríntios 15:33"
    ],
    "leaderNote": "Use cenas fictícias, sem nomes, bilhetes íntimos ou diagnóstico de amizades. Não rasguem desenhos nem usem objetos pessoais na atividade. Leitura assistida e observação são opções; não investigue experiências reais. Se surgir preocupação pessoal, interrompa essa discussão coletiva e preserve a privacidade.",
    "prayerSuggestion": "Sugestão opcional: 'Deus, ajuda-nos a tratar as pessoas e suas escolhas com respeito. Obrigado por aprendermos juntos. Amém.' É possível apenas ouvir."
  },
  {
    id: "quando-a-mente-acelera",
    audience: "jovens",
    audienceLabel: "Jovens",
    category: "Ansiedade e cuidado",
    title: "Quando a mente acelera",
    summary:
      "Um espaço cuidadoso para nomear preocupações, reconhecer redes de apoio e praticar formas saudáveis de pedir ajuda.",
    duration: "35 a 50 min",
    groupSize: "6 a 18 pessoas",
    materials: ["Papéis", "Canetas", "Envelope"],
    objective:
      "Ajudar jovens a diferenciar preocupações, responsabilidades e situações em que precisam procurar apoio de alguém confiável.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Leia as referências com calma. Explique que fé, oração, descanso, apoio profissional e cuidado comunitário podem caminhar juntos.",
      },
      {
        title: "O que pesa e o que ajuda",
        description:
          "Sem assinar, cada pessoa escreve uma preocupação comum entre jovens e uma atitude que costuma ajudar de forma saudável. Leia apenas exemplos gerais.",
      },
      {
        title: "Círculos de ação",
        description:
          "Organize respostas em três grupos: algo que posso fazer, algo sobre o qual preciso conversar e algo que não controlo. Discuta um próximo passo possível para cada grupo.",
      },
      {
        title: "Mapa de apoio",
        description:
          "Cada participante anota, para si, três pessoas ou serviços seguros que poderia procurar: familiar, líder responsável, escola ou profissional de saúde.",
      },
    ],
    questions: [
      "Por que pedir ajuda pode parecer difícil?",
      "Que hábitos ajudam a desacelerar sem fugir dos problemas?",
      "Como perceber que uma preocupação precisa de acompanhamento?",
    ],
    references: ["Salmos 56:3-4", "Filipenses 4:6-9", "1 Pedro 5:7"],
    leaderNote:
      "Não diagnostique nem prometa que oração elimina todo sofrimento. Fala sobre autoagressão, abuso ou risco exige acolhimento imediato e encaminhamento a responsáveis e profissionais.",
    prayerSuggestion:
      "O condutor pode orar por paz, clareza e coragem para pedir ajuda, lembrando ao grupo que cuidado espiritual e acompanhamento profissional não competem entre si.",
  },
  {
    id: "digital-com-proposito",
    meetingCore: "Leia a cena fictícia: o convite diz 15h, mas uma mensagem encaminhada diz 17h. Em trios, identifiquem o que sabemos e o que falta confirmar. Apoio: há horários diferentes; é preciso conferir com a organização antes de divulgar. Não abram perfis, contatos ou mensagens reais.",
    audience: "jovens",
    audienceLabel: "Jovens",
    category: "Convite e conferência",
    title: "Digital com propósito",
    summary:
      "Revise um convite fictício com informações conflitantes e produza uma versão marcada como exemplo, sem abrir perfis ou enviar mensagens reais.",
    duration: "35 a 45 min",
    groupSize: "6 a 24 pessoas",
    materials: ["Bíblia ou aplicativo bíblico", "Este roteiro com as cenas", "Relógio", "Papel e caneta por equipe, opcionais"],
    objective:
      "Produzir um convite fictício conferível com atividade, data, horário e local, separando dado confirmado e informação ausente, com apoio de Filipenses 4:8.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Reserve 7 minutos para acolher, explicar que ninguém vai abrir perfis ou conversas e ler Filipenses 4:8-9. Pergunte quais qualidades o versículo 8 menciona, como verdadeiro e respeitável. A carta trata do pensamento e da prática da comunidade; não apresenta uma política de redes sociais ou um diagnóstico de uso de telas. As perguntas de conferência abaixo são aplicações propostas pelo roteiro. Salmos 101:3 fica para consulta complementar em seu contexto de compromisso com a integridade, sem usá-lo para fiscalizar celulares.",
      },
      {
        title: "Confira antes de encaminhar",
        description:
          "Núcleo de até 5 minutos: leia a cena fictícia: 'O convite do encontro diz 15h, mas uma mensagem encaminhada diz 17h. Uma pessoa quer repassar a mensagem sem conferir'. Pergunte o que sabemos e o que falta confirmar. Apoio: há horários diferentes; não sabemos qual informação está atualizada. Uma frase possível é 'Vou confirmar com quem organiza antes de divulgar'. Ouça duas contribuições voluntárias ou leia o apoio. Não busquem um evento real nem enviem mensagens durante a atividade. Consulta ao texto, resposta escrita e apenas escuta são opções.",
      },
      {
        title: "Antes de publicar",
        description:
          "Reserve 15 minutos: 3 para ler a ficha fictícia, 6 para revisar e 6 para até três conferências. Ficha EXEMPLO: atividade = leitura e quiz; data = 20/11/2030; horário confirmado pela organização fictícia = 15h; local = Sala A do espaço imaginário. Rascunho: 'Jogos, sábado, 17h, no lugar de sempre'. Sem consultar calendário, confiram os campos: faltam data e local completos, o horário conflita com a ficha e o dia da semana não foi informado. Modelo corrigido: 'EXEMPLO FICTÍCIO: leitura e quiz, 20/11/2030, às 15h, Sala A do espaço imaginário. Participação opcional'. Não acrescente endereço real, inscrição, gratuidade ou dia da semana sem fonte. Use texto sem foto de pessoas; autorização desconhecida não permite publicação. Para 45 minutos, acrescente 10: 5 para outra equipe conferir os quatro campos e 5 para corrigir. Não divulguem o convite nem usem dados reais.",
      },
      {
        title: "Uma regra clara de compartilhamento",
        description:
          "Use 8 minutos para uma pergunta, até três contribuições e encerramento opcional. Produto: um convite fictício com quatro campos conferidos e marcação EXEMPLO. Isso não diagnostica hábitos digitais nem garante segurança em situações reais. Total sugerido: 7 + 5 + 15 + 8 = 35 minutos, ou 45 com revisão cruzada; não medido em aplicação real. No criador, o núcleo é só a conferência dos horários, não a produção integral do convite.",
      },
    ],
    questions: [
      "Na cena dos horários, podemos afirmar qual é o correto? Não: a diferença exige conferência com quem organiza, sem adivinhar ou divulgar primeiro.",
      "Quais campos precisam estar conferidos no convite? Atividade, data, horário e local; o dia da semana não deve ser presumido. Use texto sem foto de participantes.",
      "Como Filipenses 4:8 se relaciona às propostas? Localizem verdadeiro e respeitável; conferir cartazes e pedir autorização são escolhas práticas do roteiro, não regras digitais escritas no versículo.",
    ],
    references: ["Filipenses 4:8-9", "Salmos 101:3"],
    leaderNote:
      "Para 6 a 24 pessoas, organize equipes de 3 a 5 e limite o plenário a três contribuições. O exercício não precisa de celular, conta ou acesso à internet. Não peça tempo de tela, histórico, senhas, perfis, fotografias ou mensagens particulares. Não classifique participantes como dependentes de tecnologia nem use as cenas para investigar experiências pessoais. Leitura assistida, resposta escrita e observação são alternativas. Se surgir um assunto privado, não o desenvolva no grupo como parte da atividade. Não publique as respostas ou imagens sem autorização.",
    prayerSuggestion:
      "Sugestão opcional: 'Deus, ajuda-nos a conferir o que compartilhamos e a tratar as pessoas com respeito. Obrigado pela oportunidade de aprender juntos. Amém.' Quem preferir pode acompanhar em silêncio.",
  },
  {
    "id": "maos-que-servem",
    "meetingCore": "Em grupo, distribuam seis itens fictícios entre três caixas: livros, materiais de escrita e folhas comuns. Itens: Bíblia, caderno, caneta, lápis, folha de regras e folha de placar. Apoio: Bíblia/caderno; caneta/lápis; regras/placar. Confiram se cada item tem destino. Usem palavras, sem mover peso ou materiais pessoais.",
    "audience": "todos",
    "audienceLabel": "Toda a célula",
    "category": "Serviço e compaixão",
    "title": "Mãos que servem",
    "summary": "Uma tarefa cooperativa de separar seis materiais fictícios, testar instruções e conferir o resultado, sem planejamento de eventos ou investigação de necessidades pessoais.",
    "duration": "35 a 50 min",
    "groupSize": "5 a 30 pessoas",
    "materials": [
      "Um papel por equipe",
      "Canetas",
      "Bíblia ou aplicativo bíblico",
      "Relógio"
    ],
    "objective": "Produzir uma distribuição completa de materiais fictícios e instruções que outra equipe consiga conferir, relacionando cooperação ao serviço em Marcos 10:42-45.",
    "steps": [
      {
        "title": "Leitura bíblica",
        "description": "Use 7 minutos para acolher e ler Marcos 10:42-45. Jesus contrasta domínio e serviço; localizar esse contraste não reduz a passagem a arrumação de objetos. A tarefa é uma aplicação criada pelo roteiro. Gálatas 5:13 e Tiago 2:14-17 ficam para consulta, sem propor trabalho social ou aconselhamento."
      },
      {
        "title": "Distribua seis materiais",
        "description": "Em 5 minutos, apresente três caixas fictícias: livros, escrita e folhas comuns. Distribuam Bíblia, caderno, caneta, lápis, folha de regras e folha de placar. Apoio por categoria: Bíblia/caderno; caneta/lápis; regras/placar. Neste exemplo, caderno fica com livros por convenção anunciada, não por regra universal. Usem palavras ou desenhos; nenhuma caixa ou objeto real é necessário. Cada pessoa pode ler, apontar, ditar ou observar."
      },
      {
        "title": "Teste a instrução de outra equipe",
        "description": "Reserve 15 minutos: 3 para registrar destinos, 5 para escrever três instruções e 5 para outra equipe conferir os seis itens; use 2 para corrigir. Modelo: 'Coloque Bíblia e caderno em livros; caneta e lápis em escrita; regras e placar em folhas comuns'. Conferência: todo item aparece uma vez? Existe destino para cada um? Se alguém propuser outra categoria, explicite a convenção antes de conferir. Não há corrida nem ranking. Para 50 minutos, acrescente 15: 5 para inserir o item fictício envelope, 5 para combinar seu destino e 5 para atualizar e testar as instruções. Não há destino único para envelope; o acordo precisa estar escrito."
      },
      {
        "title": "Confira a tarefa, não as pessoas",
        "description": "Use 8 minutos: 3 para uma pergunta abaixo, 3 para até três contribuições e 2 para encerrar. Produto: três instruções completas e uma lista de seis itens conferida. Não atribua tarefas domésticas ou ação social aos participantes. Total sugerido: 7 + 5 + 15 + 8 = 35 minutos, ou 50 com envelope; não medido em aplicação real. No criador, pratique somente a distribuição do núcleo no tempo do bloco."
      }
    ],
    "questions": [
      "Na distribuição inicial, algum item ficou sem destino? Confiram os seis nomes; isso avalia a instrução, não quem escreveu.",
      "Por que o envelope pede uma convenção nova? O exemplo inicial não define seu destino; combinar antes é melhor que adivinhar.",
      "Em Marcos 10:42-45, que contraste aparece? Domínio e serviço; as três caixas não estão no texto, são uma aplicação recreativa."
    ],
    "references": [
      "Marcos 10:42-45",
      "Gálatas 5:13",
      "Tiago 2:14-17"
    ],
    "leaderNote": "Não movam móveis, peso, objetos pessoais ou anotações privadas. As caixas e os itens são fictícios. Funções são voluntárias; não distribua trabalho a quem prefere ouvir. Esta tarefa não identifica necessidades sociais nem oferece cuidado profissional.",
    "prayerSuggestion": "Sugestão opcional: 'Deus, ajuda-nos a cooperar com respeito e clareza. Obrigado por este encontro. Amém.' Acompanhar em silêncio é uma opção."
  },
  {
    id: "uma-mesa-muitas-historias",
    meetingCore: "Escolham somente uma pergunta: Que jogo você escolheria para uma tarde livre? Ouçam até duas respostas voluntárias ou usem exemplos imaginados. Em duplas ou trios, apontem uma preferência comum ou duas diferentes, sem inventar unanimidade. Não é necessário lanche, aparelho ou relato pessoal.",
    audience: "todos",
    audienceLabel: "Toda a célula",
    category: "Comunhão e acolhimento",
    title: "Uma mesa, muitas histórias",
    summary:
      "Seis perguntas leves sobre preferências e lembranças para conhecer o grupo, encontrar afinidades e praticar hospitalidade sem exposição pessoal.",
    duration: "30 a 45 min",
    groupSize: "6 a 30 pessoas",
    materials: ["As seis perguntas deste roteiro em papéis ou na tela", "Papel e caneta por grupo", "Bíblia ou aplicativo bíblico", "Relógio", "Lanche opcional, com ingredientes informados"],
    objective:
      "Fortalecer pertencimento e escuta, criando oportunidades para que pessoas novas e antigas se conheçam sem exposição excessiva.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Use 6 minutos para acolher e ler Atos 2:42-47. A passagem descreve ensino, comunhão, refeições e partilha na comunidade de Jerusalém. Pergunte quais ações são citadas; não conclua que todo encontro precisa reproduzir o mesmo formato. As perguntas à mesa são uma proposta de integração, não uma regra do texto. Romanos 12:9-13 e Hebreus 13:1-2 são apoios para consulta posterior. Uma mesa ou um lanche não são necessários: cadeiras em pequenos círculos funcionam.",
      },
      {
        title: "Perguntas à mesa",
        description:
          "Núcleo de até 8 minutos: forme grupos de 3 a 5 pessoas e ofereça estas seis perguntas: 'Qual comida você gosta de preparar ou provar?'; 'Que jogo você escolheria para uma tarde livre?'; 'Qual lugar tranquilo você gostaria de conhecer?'; 'Que habilidade simples gostaria de aprender?'; 'Qual música você gosta de ouvir?'; 'Que pequeno detalhe faz você se sentir bem recebido?'. Cada pessoa escolhe uma e dispõe de até 1 minuto para responder. Use o tempo restante para uma troca breve. É permitido passar, trocar a pergunta ou responder com uma preferência imaginada. No bloco curto do criador de roteiro, escolha só uma pergunta para o grupo e limite a duas respostas voluntárias, respeitando o tempo exibido.",
      },
      {
        title: "Algo que temos em comum",
        description:
          "Reserve 10 minutos: durante 4 minutos, cada grupo procura até dois interesses em comum entre as respostas, como gostar de jogos cooperativos ou querer aprender uma receita. Não inventem unanimidade: se não houver uma afinidade de todos, registrem duas preferências diferentes que o grupo conheceu. Nos 6 minutos seguintes, cada grupo pode apresentar uma frase que todos concordem em compartilhar. Com até seis grupos, limite cada fala a 45 segundos. Não exponham nomes ou histórias sem autorização. Para a versão de 45 minutos, acrescente 15 minutos para uma segunda rodada de perguntas nos mesmos grupos.",
      },
      {
        title: "Próximo lugar à mesa",
        description:
          "Use 6 minutos para escolher uma pergunta abaixo, ouvir até três contribuições e encerrar. Não apontem quem parece isolado. Escolham um gesto para o próximo encontro, como apresentar as regras antes do jogo ou deixar a pessoa escolher onde sentar. A oração pode ser breve e acompanhada em silêncio. Total: 30 minutos, ou 45 com a segunda rodada. No criador de roteiro, siga os blocos selecionados e seus tempos, não este cronograma integral.",
      },
    ],
    questions: [
      "Qual pergunta abriu espaço para conhecer uma preferência sem exigir uma história íntima? Respostas diferentes também são uma descoberta válida.",
      "Como demonstrar hospitalidade a quem prefere apenas ouvir? Oferecer um lugar e explicar a atividade são possibilidades; insistir em uma fala não é necessário.",
      "Que gesto pode ajudar uma pessoa nova na próxima rodada? Apresentar as regras e convidar sem obrigar permite que ela escolha como participar.",
    ],
    references: ["Atos 2:42-47", "Romanos 12:9-13", "Hebreus 13:1-2"],
    leaderNote:
      "Prepare grupos de 3 a 5, ofereça leitura assistida e mantenha as perguntas disponíveis para consulta. Ninguém precisa contar histórias pessoais nem participar de todas as etapas. Se houver lanche, informe os ingredientes e não pressione ninguém a comer; restrições alimentares não precisam ser explicadas ao grupo. Não publique respostas ou fotos sem autorização. A dinâmica é uma proposta de integração, não uma avaliação de sociabilidade.",
    prayerSuggestion:
      "O condutor pode agradecer pelas diferentes histórias presentes e orar para que a célula seja um ambiente de hospitalidade, amizade e cuidado sincero.",
  },
  {
    "id": "boas-novas-em-uma-frase",
    "meetingCore": "Leia Colossenses 4:5-6 e a frase fictícia: O texto orienta cuidar da maneira de falar e responder a cada pessoa. Confiram o que sustenta esse resumo. Apoio: versículo 6. Uma frase-resumo não substitui o trecho nem promete resultados pessoais.",
    "audience": "todos",
    "audienceLabel": "Toda a célula",
    "category": "Comunicação e respeito",
    "title": "Uma leitura em uma frase",
    "summary": "Resuma uma observação de Colossenses 4:5-6 e compare três frases com a passagem, sem criar outro convite ou exigir testemunho pessoal.",
    "duration": "35 a 50 min",
    "groupSize": "6 a 24 pessoas",
    "materials": [
      "Bíblia",
      "Este roteiro com as situações",
      "Relógio",
      "Papel e caneta opcionais"
    ],
    "objective": "Escrever uma frase fiel ao recorte lido e distinguir observação, detalhe não informado e aplicação, sem técnica de persuasão.",
    "steps": [
      {
        "title": "Leia antes de resumir",
        "description": "Use 7 minutos para os combinados e Colossenses 4:5-6. Localizem a orientação sobre palavra e resposta no versículo 6. A comparação com sal precisa ser lida no contexto, não encenada com alimentos. 1 Pedro 3:15-16 e Marcos 5:18-20 são referências complementares, não pedidos de testemunho ou promessa de adesão."
      },
      {
        "title": "Uma descoberta em uma frase",
        "description": "Em 5 minutos, apresente: 'O texto orienta cuidar da maneira de falar e responder a cada pessoa'. Confiram no versículo 6. Cada dupla propõe outra redação ou acompanha a leitura do exemplo. A frase informa uma observação; não promete mudar a vida de quem a ouvir e não substitui a passagem."
      },
      {
        "title": "Três frases para conferir",
        "description": "Reserve 15 minutos: 3 para ler as frases, 6 para consultar e 6 para até três contribuições. A 'O texto menciona responder a cada pessoa'; B 'O texto determina uma reunião de 35 minutos'; C 'Podemos explicar uma regra de jogo com gentileza'. Apoio: A é observação apoiada no versículo 6; B é detalhe não informado; C é aplicação criada para a atividade, não uma regra de jogo na carta. Produto: marcar observação, não informado ou aplicação e escrever um resumo fiel. Para 50 minutos, acrescente 15: 5 para outra dupla ler o resumo, 5 para localizar palavras de apoio e 5 para corrigir algo que extrapole o recorte."
      },
      {
        "title": "Uma frase com referência",
        "description": "Use 8 minutos: 3 para escolher uma pergunta, 3 para até três resumos e 2 para encerramento opcional. Anotem Colossenses 4:5-6 junto da frase para permitir conferência. Não enviem mensagens, recolham contatos ou meçam persuasão. Total sugerido: 7 + 5 + 15 + 8 = 35 minutos, ou 50 com conferência ampliada; não medido em aplicação real. No criador, use somente o núcleo e o tempo indicado."
      }
    ],
    "questions": [
      "Qual frase é observação apoiada no versículo 6? A, sobre responder a cada pessoa.",
      "Por que B não pode ser apresentada como instrução bíblica? A passagem não informa a duração da reunião.",
      "Qual é a diferença entre C e o resumo? C aplica uma ideia a um jogo; o resumo descreve o recorte, sem inventar que ele menciona esse jogo."
    ],
    "references": [
      "Marcos 5:18-20",
      "Colossenses 4:5-6",
      "1 Pedro 3:15-16"
    ],
    "leaderNote": "Não peça testemunhos, relatos íntimos, conversões ou convites reais. O produto é uma frase com referência e limite de escopo. Aceite formas equivalentes da tradução e participação por escuta. Uma frase não resolve todo o sentido da passagem.",
    "prayerSuggestion": "Oração breve opcional por palavras respeitosas e leitura atenta; ninguém precisa falar ou aderir à oração."
  },
];

const pausedDynamicIds = ["quando-a-mente-acelera"];

export const cellDynamics = cellDynamicDrafts.filter(
  (dynamic) => !pausedDynamicIds.includes(dynamic.id),
);

export function getCellDynamicById(id: string) {
  return cellDynamics.find((dynamic) => dynamic.id === id);
}
