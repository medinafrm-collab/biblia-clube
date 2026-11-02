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
    meetingCore: "Em dupla, uma pessoa escolhe entre um jogo de pistas e um de memória e explica a preferência em uma frase. A outra resume sem acrescentar uma sugestão e pergunta se entendeu; quem falou confirma ou corrige. Depois troquem. Exemplo fictício: 'Prefiro pistas com regras curtas'; resumo: 'Você prefere pistas e regras curtas; entendi?'. Se o resumo acrescentar uma ideia, retirem esse acréscimo e confiram de novo. Usem somente essa troca no bloco curto, não toda a oficina. É possível usar o exemplo ou apenas acompanhar, sem avaliar o relacionamento.",
    audience: "casais",
    audienceLabel: "Casais",
    category: "Relacionamento e cuidado",
    title: "Escuta que aproxima",
    summary:
      "Uma rodada de escuta em dupla, com 15 minutos sugeridos: escolha uma preferência leve, ouça o resumo e confirme ou corrija, sem avaliar o relacionamento.",
    duration: "15 min; extensão de 5 min",
    groupSize: "3 a 10 casais",
    materials: ["Bíblia ou aplicativo bíblico", "Este roteiro com os temas e exemplos", "Relógio", "Papel e caneta por dupla, opcionais"],
    objective:
      "Observar a orientação de ouvir em Tiago 1:19 e praticar um resumo fiel de uma fala sobre preferências, sem aconselhamento ou exposição pessoal.",
    steps: [
      {
        title: "Leitura b\u00edblica",
        description:
          "Use 3 minutos para acolher e ler Tiago 1:19-21. No versículo 19, localizem a disposição para ouvir e o cuidado ao falar e irar-se. A passagem se dirige à comunidade; o exercício de resumo é uma proposta deste roteiro, não uma técnica conjugal descrita no texto. As outras referências ficam para consulta posterior. Se a leitura exigir mais tempo, omita a extensão e reduza as contribuições finais.",
      },
      {
        title: "Veja a diferença entre resumir e sugerir",
        description:
          "Reserve 3 minutos para esta demonstração fictícia. Fala: 'Eu escolheria um jogo de pistas com regras curtas'. Compare A) 'Você prefere pistas e regras curtas; entendi?' e B) 'Então vamos jogar memória, que é melhor'. A retoma a preferência; B oferece outra escolha sem confirmar o que ouviu. Não é uma disputa sobre qual jogo é melhor. Se o resumo fosse 'Você prefere jogar sozinho', haveria um detalhe acrescentado: uma correção possível é 'Não falei sobre jogar sozinho; falei sobre pistas e regras curtas'. Leia a fala corrigida e pergunte se agora corresponde ao exemplo.",
      },
      {
        title: "Ouça, resuma e confira",
        description:
          "Reserve 6 minutos. No primeiro minuto, cada dupla escolhe um tema real ou imaginado: jogo de pistas ou memória; receita com frutas ou pão; passeio num jardim ou museu. Uma pessoa fala por até 30 segundos; a outra resume em até 30; use até 1 minuto para confirmar ou corrigir. Troquem as funções e repitam os mesmos 2 minutos. No minuto final, confiram a regra: o resumo manteve a preferência sem acrescentar uma escolha? Se já corresponder, não inventem um erro. Extensão opcional de 5 minutos: em 1 minuto, leiam 'Eu escolheria um passeio no jardim, mas ainda não decidi o horário'. Nos 2 seguintes, comparem os resumos 'Você quer ir ao jardim amanhã cedo' e 'Você escolheria o jardim e ainda não decidiu o horário'. Nos 2 finais, retirem do primeiro resumo o dia e o horário inventados e confiram a nova frase. A extensão testa um detalhe não informado, sem pedir histórias pessoais.",
      },
      {
        title: "Síntese sem avaliação do casal",
        description:
          "Use 3 minutos para uma pergunta abaixo, até duas contribuições sobre a regra do exercício e um encerramento breve. Não compartilhem o conteúdo da fala da outra pessoa sem autorização. Uma síntese possível é ouvir, resumir e confirmar antes de sugerir. Total sugerido: 3 + 3 + 6 + 3 = 15 minutos; com a extensão, 20. São estimativas, ainda não medidas com participantes. No criador de roteiro, use apenas a troca curta indicada no bloco, sem acrescentar a demonstração e a extensão da página.",
      },
    ],
    questions: [
      "Qual diferença há entre os exemplos A e B? A confirma pistas e regras curtas; B sugere memória antes de confirmar a preferência. Sugerir outro jogo é diferente de resumir.",
      "Que detalhe não estava na fala sobre pistas e regras curtas? Jogar sozinho. Uma correção possível é retirar esse acréscimo e confirmar a preferência novamente.",
      "Que orientação aparece em Tiago 1:19? Localizem ouvir e falar; a troca de funções e o cronômetro são escolhas desta atividade, não exigências do versículo.",
    ],
    references: ["Tiago 1:19-21", "Eclesiastes 4:9-12", "Colossenses 3:12-14"],
    leaderNote:
      "Para 3 a 10 casais, as duplas praticam ao mesmo tempo; o fechamento recebe até duas contribuições voluntárias sobre a regra, não relatos do relacionamento. É possível usar as falas fictícias, escrever ou apenas ouvir, sem justificar. Quem acompanha sozinho pode comparar os exemplos com quem conduz, se desejar. Não pontue a escuta nem recolha conflitos ou pedidos de perdão; se surgir um assunto íntimo, preserve-o fora da atividade coletiva.",
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
    "meetingCore": "Confiram esta instrução para seis itens fictícios: 'Bíblia e caderno em livros; caneta e lápis em escrita; folha de regras em folhas comuns'. A lista completa também inclui folha de placar. Qual item ficou sem destino? Apoio: folha de placar. Completem a instrução com esse item em folhas comuns e confiram se os seis nomes aparecem uma vez. Caderno em livros é uma convenção deste exercício. Usem palavras ou desenhos, sem mover objetos. Se houver tempo, outra dupla lê a instrução corrigida e aponta os destinos; não é necessário executar toda a oficina da página original.",
    "audience": "todos",
    "audienceLabel": "Toda a célula",
    "category": "Serviço e compaixão",
    "title": "Mãos que servem",
    "summary": "Uma rodada cooperativa de 15 minutos sugeridos: escreva instruções para seis itens fictícios, teste com outra equipe e corrija o que ficou faltando.",
    "duration": "15 min; extensão de 5 min",
    "groupSize": "5 a 30 pessoas",
    "materials": [
      "Este roteiro e um papel por equipe para instruções e respostas",
      "Canetas",
      "Bíblia ou aplicativo bíblico",
      "Relógio"
    ],
    "objective": "Produzir e testar uma instrução que dê destino aos seis itens, sem omissões ou duplicações, relacionando clareza na cooperação ao serviço em Marcos 10:42-45.",
    "steps": [
      {
        "title": "Leitura bíblica",
        "description": "Reserve 3 minutos para apresentar a rodada e ler Marcos 10:42-45. Pergunte o que Jesus contrapõe ao domínio: o serviço. A atividade abaixo é uma proposta de cooperação, não uma tarefa descrita na passagem. Gálatas 5:13 e Tiago 2:14-17 ficam para consulta posterior. Se a leitura precisar de mais tempo, omita a extensão e reduza as contribuições finais."
      },
      {
        "title": "Prepare a instrução",
        "description": "Use 3 minutos. Forme equipes de 2 a 5 pessoas e mantenha esta ficha visível: ITENS — Bíblia, caderno, caneta, lápis, folha de regras e folha de placar. DESTINOS — livros: Bíblia e caderno; escrita: caneta e lápis; folhas comuns: folha de regras e folha de placar. Caderno em livros é uma convenção anunciada para este exercício. Cada equipe escreve ou dita uma instrução que dê destino a todos os itens. Exemplo incompleto para demonstrar: 'Coloque Bíblia e caderno em livros; caneta e lápis em escrita; folha de regras em folhas comuns'. Falta a folha de placar. Não entreguem esse exemplo como solução pronta: completem sua própria instrução."
      },
      {
        "title": "Teste a instrução de outra equipe",
        "description": "Reserve 6 minutos: 2 para trocar instruções e registrar os destinos indicados, 2 para comparar com a ficha e 2 para corrigir e reler. Cada equipe usa apenas a instrução recebida na primeira tentativa; se um destino não estiver claro, registra 'não informado' em vez de adivinhar. Depois confere três critérios: os seis itens aparecem uma vez? Cada um tem destino? Os destinos correspondem à ficha? Modelo completo: 'Coloque Bíblia e caderno em livros; caneta e lápis em escrita; folha de regras e folha de placar em folhas comuns'. Se houver só uma equipe ou sobrar uma sem par, quem conduz faz a troca. Se a instrução já funcionar, registrem 'nenhum ajuste necessário'. Extensão opcional de 5 minutos: outra equipe recebe a instrução 'Coloque os materiais no lugar certo', identifica quais itens e destinos faltam, reescreve e testa a nova versão. Não acrescente apenas objetos para prolongar a rodada."
      },
      {
        "title": "Confira a tarefa, não as pessoas",
        "description": "Use 3 minutos: ouça até duas contribuições sobre uma instrução que ficou clara ou precisou de ajuste e encerre. Produto: a instrução, o resultado do teste e uma correção quando necessária. Total sugerido: 3 + 3 + 6 + 3 = 15 minutos; com a extensão, 20. São estimativas, ainda não medidas em aplicação com participantes. A atividade confere o material, não classifica pessoas como prestativas. No criador de roteiro, use apenas o núcleo de identificar e corrigir o item sem destino, no tempo exibido."
      }
    ],
    "questions": [
      "Qual item falta no exemplo incompleto? A folha de placar. Ao acrescentá-la em folhas comuns, os seis itens passam a ter destino.",
      "O que falta em 'Coloque os materiais no lugar certo'? A lista dos itens e seus destinos. Uma instrução útil permite conferir o resultado sem adivinhar.",
      "Em Marcos 10:42-45, que contraste aparece? Domínio e serviço; as três caixas não estão no texto, são uma aplicação recreativa."
    ],
    "references": [
      "Marcos 10:42-45",
      "Gálatas 5:13",
      "Tiago 2:14-17"
    ],
    "leaderNote": "Use palavras ou desenhos; não são necessárias caixas nem objetos reais. Ler, ditar, apontar e observar são opções. Com até 30 pessoas, forme equipes de 2 a 5 e faça as trocas ao mesmo tempo; limite o fechamento a duas contribuições. Não há corrida, ranking ou coleta de informações pessoais. A ficha avalia a clareza da instrução, não o valor de quem a escreveu.",
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
    "meetingCore": "Com Colossenses 4:5-6 aberto, comparem 'O texto menciona responder a cada pessoa' e 'O texto manda jogar durante 12 minutos'. A primeira frase se apoia no versículo 6; a duração do jogo não é informada. Corrijam a segunda para 'Nesta atividade, escolhemos jogar durante 12 minutos': agora é uma escolha do roteiro, não uma instrução da passagem. Leiam o exemplo ou proponham outra redação. No bloco curto, usem somente essa comparação; a leitura geral já tem etapa própria.",
    "audience": "todos",
    "audienceLabel": "Toda a célula",
    "category": "Comunicação e respeito",
    "title": "Uma leitura em uma frase",
    "summary": "Compare observação, detalhe não informado e aplicação em Colossenses 4:5-6; escreva uma frase com referência numa rodada de 12 minutos sugeridos.",
    "duration": "12 min; extensão de 3 min",
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
        "description": "Reserve 3 minutos para ler Colossenses 4:5-6 e localizar, no versículo 6, a orientação sobre a maneira de falar e responder a cada pessoa. O trecho se dirige à comunidade e relaciona fala e convivência; não define o formato deste encontro. As demais referências são complementares. Se a leitura precisar de mais tempo, dispense a extensão e reduza o compartilhamento final, sem apressar quem acompanha."
      },
      {
        "title": "Uma descoberta em uma frase",
        "description": "Use 2 minutos para demonstrar: 'O texto orienta cuidar da maneira de falar e responder a cada pessoa — Colossenses 4:6'. Mostre onde o versículo sustenta a frase. Ela é uma paráfrase de uma observação, não uma citação literal nem um resumo completo da passagem. Para conferir outra frase, perguntem: que informação ela apresenta e onde essa informação aparece?"
      },
      {
        "title": "Três frases para conferir",
        "description": "Reserve 5 minutos: 1 para ler as frases, 2 para comparar em duplas e 2 para conferir e escrever uma frase com referência. A) 'O texto menciona responder a cada pessoa'; B) 'O texto determina uma reunião de 12 minutos'; C) 'Podemos explicar uma regra de jogo com gentileza'. Apoio: A é observação do versículo 6; B atribui ao texto uma duração não informada; C é aplicação proposta, pois a passagem não fala de jogos. Modelo de resposta: 'A: observação, Colossenses 4:6; B: não informado; C: aplicação'. Cada dupla escreve ou dita uma observação com referência; também pode usar o exemplo anterior. Extensão opcional de 3 minutos: em 1, outra dupla lê a frase; em 1, localiza o apoio; no último, corrigem algum acréscimo. Se a frase já estiver sustentada, mantenham-na. Sem troca de duplas, quem conduz demonstra a conferência."
      },
      {
        "title": "Uma frase com referência",
        "description": "Use 2 minutos para ouvir até duas frases voluntárias e conferir a referência de uma delas. Exemplo de correção: troque 'A Bíblia manda reunir por 12 minutos' por 'Escolhemos 12 minutos para esta atividade'. A mudança distingue a organização do encontro da informação bíblica. Produto: uma observação com referência e a comparação das três frases. Total sugerido: 3 + 2 + 5 + 2 = 12 minutos; com a extensão, 15. Tempos ainda não medidos com participantes. No criador, execute somente a comparação curta indicada no bloco, não a oficina integral."
      }
    ],
    "questions": [
      "Qual frase é observação apoiada no versículo 6? A, sobre responder a cada pessoa.",
      "Por que B não pode ser apresentada como instrução bíblica? A passagem não informa a duração da reunião.",
      "Qual é a diferença entre C e o resumo? C aplica uma ideia a um jogo; o resumo descreve o recorte, sem inventar que ele menciona esse jogo."
    ],
    "references": [
      "Colossenses 4:5-6",
      "Marcos 5:18-20",
      "1 Pedro 3:15-16"
    ],
    "leaderNote": "Forme duplas ou um trio e faça as comparações ao mesmo tempo, com até duas contribuições no fechamento. Ler, ditar e apenas acompanhar são opções. Não peça testemunhos, contatos ou relatos pessoais. Não use sal nem outros alimentos para encenar a passagem. Aceite palavras equivalentes da tradução e mantenha a referência junto da paráfrase; uma frase não substitui a leitura do trecho.",
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
