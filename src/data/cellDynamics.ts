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
};

const cellDynamicDrafts: CellDynamic[] = [
  {
    id: "verdade-ou-pressao",
    meetingCore: "Leia a cena fictícia: uma equipe recebeu um ponto a mais e alguém propõe ficar quieto para vencer. Em duplas ou trios, escolham o que conferir e uma fala respeitosa. Apoio: verificar o placar e avisar quem conduz. Não peçam relatos reais nem confissões.",
    audience: "jovens",
    audienceLabel: "Jovens",
    category: "Escolhas e honestidade",
    title: "Verdade ou press\u00e3o?",
    summary:
      "Quatro cenas fictícias de jogos para distinguir informação verdadeira, pressão da equipe e combinados justos, sem contar histórias pessoais.",
    duration: "35 a 45 min",
    groupSize: "6 a 20 pessoas",
    materials: ["Bíblia ou aplicativo bíblico", "Este roteiro com as quatro cenas", "Relógio", "Papel e caneta por trio, opcionais"],
    objective:
      "Observar o convite a falar a verdade em Efésios 4:25 e propor escolhas honestas em situações fictícias de uma rodada de jogos.",
    steps: [
      {
        title: "Leitura b\u00edblica",
        description:
          "Reserve 7 minutos. Explique que o encontro usa personagens fictícios e não vai recolher experiências pessoais. Leia Efésios 4:25 e 4:29, depois de consultar 4:25-32 na preparação. A passagem trata da vida em comunidade, da verdade e de palavras que contribuam para os outros. Pergunte que orientação aparece no versículo 25: falar a verdade ao próximo. As regras de jogo desta atividade são uma aplicação proposta, não uma lista presente na carta. Romanos 12:2 e 1 Timóteo 4:12 ficam para consulta posterior, sem exigir que os jovens resolvam todas as questões desses textos nesta rodada.",
      },
      {
        title: "Abertura",
        description:
          "Núcleo de até 5 minutos: leia a cena fictícia: 'Uma equipe percebe que recebeu um ponto a mais por engano. Uma pessoa propõe avisar; outra diz que é melhor ficar quieto para ganhar'. Pergunte que informação pode ser conferida e que resposta respeita o combinado. Apoio: conferir o resultado e avisar quem conduz. Uma frase possível é 'Vamos verificar o placar antes de seguir'. Aceite duas contribuições voluntárias ou leia o apoio se ninguém quiser responder. O grupo pode consultar, escrever ou apenas ouvir, sem revelar como agiria numa situação real.",
      },
      {
        title: "Escolha e conversa",
        description:
          "Reserve 15 minutos. Em 3 minutos, apresente as outras três cenas fictícias: A) uma rodada permite consultar a Bíblia, mas um colega diz que pedir consulta é sinal de saber menos; B) a equipe recebeu uma dica depois do prazo e alguém propõe dizer que já tinha respondido antes; C) uma pessoa pede que a regra seja repetida e recebe a resposta 'todo mundo entendeu, só você não'. Em trios ou quartetos, escolham uma cena e usem 6 minutos para separar o fato conhecido, a pressão exercida e uma resposta possível. Apoios: em A, consulta é permitida e pode ser usada sem desqualificação; em B, informar quando a resposta foi dada, sem inventar um horário; em C, repetir a regra sem ridicularizar. Usem os 6 minutos finais para até três sínteses voluntárias, de até 1 minuto cada, e a conferência. Não tentem identificar colegas reais nas cenas. Para a versão de 45 minutos, acrescentem 10 minutos para reescrever uma fala de pressão como convite respeitoso e comparar as propostas.",
      },
      {
        title: "Fechamento",
        description:
          "Use 8 minutos para uma das perguntas abaixo, uma síntese e uma oração breve, se desejada. Escolham uma regra para uma próxima rodada, como conferir o placar antes de avançar ou permitir pedidos de releitura. Não cobrem promessas individuais nem confissões sobre trapaça. As etapas somam 35 minutos; a reescrita das falas acrescenta 10, totalizando 45. No criador de roteiro, use somente as etapas selecionadas e os tempos exibidos, não a duração integral desta página.",
      },
    ],
    questions: [
      "Na cena do placar, o que pode ser conferido antes de seguir? O resultado da pergunta e o ponto registrado, sem adivinhar a intenção de alguém.",
      "Na cena da consulta, qual diferença há entre uma regra e a opinião de um colega? A consulta está permitida; a fala que desqualifica não muda esse combinado.",
      "Como relacionar Efésios 4:25 e 4:29 às respostas propostas? Observem verdade e palavras que ajudem, sem usar os versículos para rotular participantes como mentirosos.",
    ],
    references: ["Efésios 4:25-29", "Romanos 12:2", "1 Timóteo 4:12"],
    leaderNote:
      "Prepare trios ou quartetos para 6 a 20 pessoas e deixe as cenas disponíveis por leitura ou na tela. Ofereça leitura assistida e a opção de observar. Não peça bilhetes sobre pressões reais, não investigue quem já mentiu e não transforme a atividade em aconselhamento. Recusa e silêncio não precisam de justificativa. Os exemplos não diagnosticam o grupo nem autorizam cobrança de relatos. Respostas e imagens não devem ser publicadas sem autorização.",
    prayerSuggestion:
      "Sugestão opcional: 'Deus, ajuda-nos a falar com verdade e respeito, a ouvir e a cuidar uns dos outros. Obrigado por podermos aprender juntos. Amém.' Quem preferir pode acompanhar em silêncio.",
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
    meetingCore: "Leia o cenário fictício: seis adultos têm um celular e duas pessoas não conhecem o site. Cada dupla escolhe um jogo e uma forma de incluir todos. Apoio: ler perguntas em voz alta e conversar antes da resposta. Acrescente apenas como explicar a regra se a conexão cair, sem jogar a sessão planejada agora.",
    audience: "casais",
    audienceLabel: "Casais",
    category: "Planejamento e cooperação",
    title: "Planejar juntos",
    summary:
      "Planeje em dupla uma tarde de jogos para um grupo fictício, escolhendo atividades, turnos e uma alternativa sem internet.",
    duration: "30 a 45 min",
    groupSize: "3 a 8 casais",
    materials: ["Um papel por casal", "Canetas", "Bíblia ou aplicativo bíblico", "Relógio"],
    objective:
      "Praticar escuta e cooperação em um planejamento simples de atividade, sem discutir dinheiro ou conflitos pessoais.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Reserve 6 minutos para os combinados e a leitura de Eclesiastes 4:9-10. O texto descreve vantagens da companhia e da ajuda mútua; não é uma regra exclusiva sobre casamento. Pergunte que exemplo de ajuda aparece na passagem. Planejar um jogo em dupla é uma aplicação criada para este encontro. Ninguém precisa contar algo sobre seu relacionamento.",
      },
      {
        title: "Uma tarde de jogos",
        description:
          "Núcleo de até 5 minutos: leia este cenário fictício: 'Seis adultos têm 20 minutos para jogar. Há um celular e duas pessoas nunca usaram o site'. Cada dupla escolhe entre quiz cooperativo, adivinhação de personagens com pistas ou associação oral de pares. Uma pessoa sugere um formato; a outra resume o que ouviu antes de propor um ajuste. Registrem o jogo e um modo de incluir quem está chegando. Uma solução possível é ler as perguntas do quiz em voz alta e deixar todos conversarem antes da escolha. Não há um único plano correto.",
      },
      {
        title: "Cenários para decidir",
        description:
          "Reserve 12 minutos para transformar a ideia em um roteiro: 3 minutos para explicar regras, 12 para jogar e 5 para conversar sobre uma referência, totalizando os 20 minutos do cenário. Definam quem lê e como alternar respostas, sem exigir que alguém use o celular. Depois apresente a mudança: 'A conexão caiu'. Alternativa pronta: uma pessoa lê estas pistas, uma por vez: 'Construí uma embarcação'; 'Minha família entrou nela'; 'Minha história aparece em Gênesis 6-9'. Resposta: Noé; confira Gênesis 6:13-22. Nos últimos 3 minutos deste bloco, ouça até três planos em uma frase. Para a versão de 45 minutos, acrescente 15 minutos para trocar os planos entre duplas e verificar se as instruções podem ser seguidas sem explicação adicional.",
      },
      {
        title: "Um acordo possível",
        description:
          "Use 7 minutos para conferir os combinados: quem explica, quanto tempo dura, como participar sem aparelho e o que fazer sem conexão. Converse sobre uma das perguntas abaixo e encerre com uma oração breve, se desejado. O plano é um exercício fictício, não um compromisso de organizar um evento. As etapas somam 30 minutos, ou 45 com a troca entre duplas. No criador de roteiro, respeite o tempo e as etapas selecionadas, não este cronograma integral.",
      },
    ],
    questions: [
      "Que ajuste ajudou a incluir as duas pessoas novas? Explicar uma rodada sem pontuação é uma possibilidade.",
      "Como resumir a sugestão do outro antes de responder? Tente 'Você propôs este jogo porque...; entendi corretamente?'.",
      "O plano funciona sem internet? Verifiquem se as pistas, a resposta e a referência estão disponíveis no próprio roteiro.",
    ],
    references: ["Eclesiastes 4:9-10", "Gênesis 6:13-22"],
    leaderNote:
      "Use apenas o cenário fictício. Não avalie o relacionamento de ninguém nem compare duplas. Ofereça leitura assistida e a opção de observar. Os planos não exigem compras, coleta de dinheiro, exposição familiar ou aconselhamento. Com oito casais, limite as apresentações a três voluntários para preservar o tempo.",
    prayerSuggestion:
      "Sugestão opcional: 'Deus, ajuda-nos a ouvir com atenção, cooperar e receber bem as pessoas. Obrigado pela oportunidade de aprender juntos. Amém.' Quem preferir pode acompanhar em silêncio.",
  },
  {
    id: "rotina-com-proposito",
    meetingCore: "Leia a cena fictícia de uma mesa com livros, folhas comuns e uma anotação pessoal. Ordenem: B pedir autorização; C separar os materiais autorizados; D colocá-los no lugar combinado; A conferir. Apoio: B, C, D, A. Cada dupla sugere uma frase de ajuda; não movam objetos reais nem leiam anotações privadas.",
    audience: "casais",
    audienceLabel: "Casais",
    category: "Dia a dia e cuidado",
    title: "Rotina com propósito",
    summary:
      "Organize uma mesa de leitura fictícia em dupla, colocando tarefas em sequência e oferecendo ajuda sem cobranças sobre a rotina do casal.",
    duration: "40 a 55 min",
    groupSize: "3 a 10 casais",
    materials: ["Bíblia ou aplicativo bíblico", "Este roteiro com as tarefas", "Relógio", "Papel e caneta por dupla, opcionais"],
    objective:
      "Observar a ajuda mútua em Eclesiastes 4:9-10 e praticar uma sequência simples de tarefas compartilhadas, sem avaliar responsabilidades familiares reais.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Reserve 7 minutos para acolher, explicar que o cenário é fictício e ler Eclesiastes 4:9-10. Pergunte qual exemplo de ajuda o versículo 10 apresenta: uma pessoa levantar a outra quando cai. O texto valoriza companhia e cooperação; não determina uma divisão de tarefas domésticas nem se restringe a casais. A organização da mesa é uma aplicação criada pelo roteiro. Gálatas 6:2 e Colossenses 3:12-14 ficam para consulta posterior, sem pedir relatos de cargas pessoais ou conflitos.",
      },
      {
        title: "Uma tarefa pequena, em dupla",
        description:
          "Núcleo de até 5 minutos: leia o cenário fictício: 'Uma mesa vai receber quatro pessoas para leitura. Há dois livros, folhas comuns e uma anotação pessoal. Antes de organizar, o responsável deve indicar o que pode ser movido'. Pergunte qual deve ser o primeiro passo e como oferecer ajuda. Apoio: pedir autorização antes de mexer e não ler a anotação pessoal. Uma frase possível é 'Posso separar os livros enquanto você verifica quais folhas podem ser guardadas?'. Cada dupla propõe uma frase ou acompanha a demonstração do condutor. Não é necessário usar objetos reais, contar como a própria casa funciona ou comparar quem faz mais.",
      },
      {
        title: "Antes, durante e depois",
        description:
          "Reserve 18 minutos. Em 3 minutos, apresente quatro tarefas misturadas: A) conferir se a mesa ficou pronta; B) perguntar o que pode ser movido e combinar quem deseja ajudar; C) separar os livros e as folhas autorizadas; D) colocar os materiais autorizados no lugar combinado. Em 6 minutos, as duplas ordenam as tarefas e propõem uma função voluntária para cada pessoa. Gabarito de sequência: B, C, D, A. Use mais 6 minutos para testar oralmente: uma pessoa lê os passos, a outra procura algo que faltou explicar, e depois trocam se desejarem. Nos 3 minutos finais, recolha até duas observações sobre a instrução, sem informações da rotina real. Não há uma divisão única de funções: uma pessoa pode ler, ambas podem decidir juntas ou alguém pode apenas observar. Para 55 minutos, acrescente 15 minutos com a variação fictícia 'Só uma pessoa quer executar; a outra prefere acompanhar'. Adaptem o plano sem atribuir tarefas a quem não se ofereceu.",
      },
      {
        title: "Conferência sem cobrança pessoal",
        description:
          "Use 10 minutos para uma das perguntas abaixo, até três contribuições voluntárias e a síntese. Uma conclusão possível é: pedir autorização, combinar ajuda e conferir o resultado são partes da tarefa, não apenas mover objetos. Não cobrem acordos domésticos, pedidos de perdão ou mudanças para a semana seguinte. A oração é opcional. As etapas somam 40 minutos; a variação acrescenta 15, totalizando 55. No criador de roteiro, siga somente as etapas selecionadas e o tempo de cada bloco, não a duração integral desta página.",
      },
    ],
    questions: [
      "Por que a tarefa B vem antes de mover os materiais? É preciso saber o que pode ser mexido e quem deseja ajudar; a anotação pessoal não deve ser lida.",
      "Como oferecer uma ajuda concreta sem decidir pelo outro? Uma possibilidade é perguntar 'Posso separar os livros?' e aceitar a resposta.",
      "Em Eclesiastes 4:9-10, qual exemplo mostra ajuda mútua? Localizem o auxílio a quem cai; a sequência de tarefas da mesa foi criada para esta atividade, não está na passagem.",
    ],
    references: ["Eclesiastes 4:9-10", "Gálatas 6:2", "Colossenses 3:12-14"],
    leaderNote:
      "Para 3 a 10 casais, trabalhe em duplas e limite o plenário a três contribuições. Use apenas o cenário fictício; não recolha listas da casa, horas de trabalho ou queixas sobre o outro. Papéis não dependem de gênero, rapidez ou conhecimento prévio. Leitura assistida, resposta escrita e escuta são alternativas; ninguém precisa justificar uma recusa. Não manipulem objetos pesados nem dados privados. A atividade não oferece diagnóstico ou aconselhamento; um assunto pessoal não deve ser desenvolvido no grupo como parte do exercício. Não publique respostas ou imagens sem autorização.",
    prayerSuggestion:
      "Sugestão opcional: 'Deus, ajuda-nos a oferecer ajuda com respeito, a ouvir e a cooperar nas pequenas tarefas. Obrigado por aprendermos juntos. Amém.' Quem preferir pode acompanhar em silêncio.",
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
    id: "amizades-que-edificam",
    meetingCore: "Leia a cena fictícia: uma pessoa chega ao quiz sem conhecer as regras, e um colega explica e oferece jogar em dupla. Em trios, completem Um bom amigo, nesta cena... com uma ação observável. Apoios: explicar sem rir, convidar sem obrigar e esperar a pergunta terminar. Não nomeiem colegas reais.",
    audience: "jovens",
    audienceLabel: "Jovens",
    category: "Amizade e influência",
    title: "Amizades que edificam",
    summary:
      "Um semáforo de atitudes com quatro cenas fictícias para praticar inclusão, respeito e encorajamento, sem avaliar colegas reais.",
    duration: "35 a 50 min",
    groupSize: "6 a 24 pessoas",
    materials: ["Um papel por participante", "Canetas", "Bíblia ou aplicativo bíblico", "Relógio", "Três papéis por equipe com as palavras verde, amarelo e vermelho"],
    objective:
      "Ajudar jovens a reconhecer características de amizades saudáveis e atitudes que fortalecem ou enfraquecem vínculos.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Reserve 7 minutos para apresentar os combinados e ler Provérbios 17:17 e 27:17. São ditados breves sobre amizade constante e influência mútua; não são uma lista para classificar pessoas como boas ou más. Pergunte o que muda entre estar presente e concordar com tudo. As cenas e o semáforo são uma proposta do roteiro. Deixe 1 Coríntios 15:33 para consulta posterior: o versículo está em uma discussão sobre a ressurreição, não autoriza humilhar colegas.",
      },
      {
        title: "Um bom amigo...",
        description:
          "Núcleo de 5 minutos: forme trios ou quartetos. Leia a cena fictícia: 'Uma pessoa chega à rodada de quiz sem conhecer as regras. Um colega explica e oferece jogar em dupla'. Cada equipe completa 'Um bom amigo, nesta cena...' com uma ação observável. Sugestões: explicar sem rir, convidar sem obrigar ou esperar a pessoa terminar a pergunta. Ouça duas respostas voluntárias. Não escrevam nomes nem histórias pessoais; quem preferir pode apenas ouvir.",
      },
      {
        title: "Semáforo das atitudes",
        description:
          "Reserve 15 minutos: explique verde como uma atitude que ajuda, amarelo como algo que precisa de contexto e vermelho como uma atitude a evitar. Leia estas quatro cenas fictícias: 1) alguém convida um colega para jogar e aceita quando ele prefere observar; 2) alguém decide o jogo por todos antes de perguntar; 3) um grupo ri de quem errou uma resposta e repete a piada; 4) alguém oferece ajuda com uma pista, mas pergunta antes se o colega quer. Use 1 minuto para explicar as regras e até 3 por cena para escolher uma palavra e justificar; os 2 minutos finais servem para resumir. Pontos de apoio: respeitar uma recusa e oferecer ajuda são atitudes acolhedoras; decidir sozinho pede conversa; ridicularizar o erro deve ser evitado. Não dê pontos nem trate a cor como diagnóstico de uma pessoa. Na versão de 50 minutos, acrescente 15 minutos para cada equipe reescrever uma cena de forma mais acolhedora e apresentar uma frase, não uma encenação obrigatória.",
      },
      {
        title: "Encorajamento prático",
        description:
          "Use 8 minutos para conversar sobre uma das perguntas abaixo, recolher até três sugestões e encerrar. Cada pessoa pode escolher uma atitude pequena para a próxima rodada: esperar a vez, explicar uma regra ou respeitar quem quer observar. Não é necessário anunciar um compromisso. As etapas somam 35 minutos, ou 50 com a reescrita das cenas. No criador de roteiro, use apenas as etapas e o tempo do bloco selecionado.",
      },
    ],
    questions: [
      "Na primeira cena, o que torna o convite respeitoso? Observe que a recusa é aceita, sem insistência.",
      "Como refazer a segunda cena para ouvir o grupo antes de escolher um jogo? Uma votação com opção de observar é uma possibilidade.",
      "Como encorajar quem errou sem dar a resposta por ele? Pergunte se quer uma explicação e espere sua resposta.",
    ],
    references: ["Provérbios 17:17", "Provérbios 27:17", "1 Coríntios 15:33"],
    leaderNote:
      "Não incentive acusações nem relatos com nomes. Casos de ameaça, humilhação ou isolamento persistente devem ser acolhidos em particular por adultos responsáveis.",
    prayerSuggestion:
      "O condutor pode orar por amizades sábias, coragem para estabelecer limites e disposição para ser uma presença leal e acolhedora.",
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
    category: "Redes sociais e escolhas",
    title: "Digital com propósito",
    summary:
      "Três cenas fictícias para conferir informações, pedir autorização antes de divulgar imagens e escrever comentários respeitosos, sem abrir perfis ou mensagens reais.",
    duration: "35 a 45 min",
    groupSize: "6 a 24 pessoas",
    materials: ["Bíblia ou aplicativo bíblico", "Este roteiro com as cenas", "Relógio", "Papel e caneta por equipe, opcionais"],
    objective:
      "Observar o valor do que é verdadeiro e respeitável em Filipenses 4:8 e propor cuidados concretos antes de compartilhar conteúdo fictício de um encontro.",
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
          "Reserve 15 minutos. Em 3 minutos, apresente as cenas fictícias: A) alguém encontrou um cartaz sem data e quer divulgar como convite para o próximo sábado; B) alguém fotografou participantes, mas não sabe se eles concordam com a publicação; C) alguém quer postar uma captura do erro de uma equipe no quiz com uma legenda de deboche. Formem equipes de 3 a 5 e usem 6 minutos para escolher uma cena, identificar o que precisa ser conferido e redigir uma resposta. Apoios: em A, confirmar data e contexto com a organização, sem divulgar como fato o que ainda é incerto; em B, não publicar enquanto não houver autorização e usar um convite sem imagem de pessoas; em C, não expor o erro para ridicularizar e comentar uma descoberta da leitura sem nomes ou capturas. Nos 6 minutos finais, ouça até três sínteses e confira as propostas. Para 45 minutos, acrescente 10 minutos para escrever um convite fictício completo, com título, data, horário e local claramente marcados como exemplo, e revisar se nenhuma informação foi presumida.",
      },
      {
        title: "Uma regra clara de compartilhamento",
        description:
          "Use 8 minutos para uma pergunta abaixo, uma síntese e uma oração breve, se desejada. Uma conclusão possível é: antes de compartilhar, conferir a informação, considerar as pessoas envolvidas e escolher uma linguagem respeitosa. Isso não garante que todo conteúdo será seguro nem substitui análise de situações reais. Não cobrem mudanças de hábitos, revisão de contatos ou compromissos públicos. As etapas somam 35 minutos; o convite fictício acrescenta 10, totalizando 45. No criador de roteiro, siga as etapas selecionadas e seus tempos, não a duração integral desta página.",
      },
    ],
    questions: [
      "Na cena dos horários, podemos afirmar qual é o correto? Não: a diferença exige conferência com quem organiza, sem adivinhar ou divulgar primeiro.",
      "Na cena da foto, qual alternativa não depende de expor participantes? Preparar um convite sem imagens de pessoas enquanto a autorização não está confirmada.",
      "Como Filipenses 4:8 se relaciona às propostas? Localizem verdadeiro e respeitável; conferir cartazes e pedir autorização são escolhas práticas do roteiro, não regras digitais escritas no versículo.",
    ],
    references: ["Filipenses 4:8-9", "Salmos 101:3"],
    leaderNote:
      "Para 6 a 24 pessoas, organize equipes de 3 a 5 e limite o plenário a três contribuições. O exercício não precisa de celular, conta ou acesso à internet. Não peça tempo de tela, histórico, senhas, perfis, fotografias ou mensagens particulares. Não classifique participantes como dependentes de tecnologia nem use as cenas para investigar experiências pessoais. Leitura assistida, resposta escrita e observação são alternativas. Se surgir um assunto privado, não o desenvolva no grupo como parte da atividade. Não publique as respostas ou imagens sem autorização.",
    prayerSuggestion:
      "Sugestão opcional: 'Deus, ajuda-nos a conferir o que compartilhamos e a tratar as pessoas com respeito. Obrigado pela oportunidade de aprender juntos. Amém.' Quem preferir pode acompanhar em silêncio.",
  },
  {
    id: "maos-que-servem",
    meetingCore: "Leia a cena fictícia: visitantes ainda não receberam as regras do jogo. Em pequenos grupos, proponham uma ajuda simples, como explicar uma rodada sem pontuação. Confiram se a proposta preserva a escolha de participar. Não identifiquem visitantes reais nem atribuam tarefas a quem não se ofereceu.",
    audience: "todos",
    audienceLabel: "Toda a célula",
    category: "Serviço e compaixão",
    title: "Mãos que servem",
    summary:
      "Três desafios fictícios de organização do encontro para escolher uma pequena ação de serviço, sem expor necessidades pessoais ou assumir tarefas especializadas.",
    duration: "35 a 50 min",
    groupSize: "5 a 30 pessoas",
    materials: ["Um papel por equipe", "Canetas", "Bíblia ou aplicativo bíblico", "Relógio"],
    objective:
      "Ajudar a célula a enxergar necessidades reais e organizar uma resposta possível, respeitosa e responsável.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Reserve 7 minutos para acolher e ler Marcos 10:42-45. No contexto de uma discussão sobre posição e importância, Jesus contrasta o domínio sobre os outros com o serviço. Pergunte que contraste o texto apresenta antes de falar de tarefas. Organizar uma sala é uma aplicação cotidiana proposta aqui, não o sentido completo da passagem. Gálatas 5:13 e Tiago 2:14-17 ficam para aprofundamento; o roteiro não substitui trabalho social ou orientação profissional.",
      },
      {
        title: "Necessidades ao redor",
        description:
          "Núcleo de 5 minutos: forme equipes de 3 a 5 e leia uma cena fictícia: 'O encontro vai começar, mas as regras do jogo ainda não foram explicadas aos visitantes'. Cada equipe escreve uma ajuda simples e pede duas contribuições voluntárias. Exemplos: explicar uma rodada sem contar pontos ou mostrar onde ficam as instruções. Não identifiquem visitantes reais. Quem preferir pode ouvir ou ditar uma ideia para outra pessoa escrever.",
      },
      {
        title: "Recursos que já temos",
        description:
          "Reserve 15 minutos. Distribua estas três cenas fictícias entre as equipes: A) as cadeiras deixam uma passagem estreita; B) só há um celular para uma rodada cooperativa; C) os papéis usados no encontro ficaram espalhados. Cada equipe tem 5 minutos para propor uma tarefa, 5 para responder 'temos autorização, material e uma pessoa voluntária?' e 5 para compartilhar uma frase. Pontos de apoio: em A, pedir ao responsável que organize uma passagem livre, sem mover peso por conta própria; em B, combinar turnos e leitura em voz alta, sem exigir empréstimo de aparelhos; em C, combinar recolhimento dos papéis comuns, sem ler anotações privadas. Não coletem dinheiro ou dados pessoais. Para 50 minutos, acrescente 15 minutos para comparar duas soluções e desenhar um plano de três passos.",
      },
      {
        title: "Uma ação responsável",
        description:
          "Use 8 minutos para escolher uma tarefa do próprio encontro e combinar quem deseja ajudar, quando e com autorização de quem. Exemplo: ao final, duas pessoas voluntárias recolhem os papéis comuns em uma caixa, sem fotografá-los. Se não houver uma tarefa adequada, guardem a proposta; não é obrigatório executar algo. Converse sobre uma pergunta abaixo e encerre. Total: 35 minutos, ou 50 com o planejamento ampliado. No criador de roteiro, siga o tempo e as etapas selecionadas, não a duração integral desta página.",
      },
    ],
    questions: [
      "Qual solução ajuda sem decidir pelo outro? Pedir autorização e aceitar uma recusa são parte do serviço.",
      "Na cena do celular, como incluir quem não tem aparelho? Turnos e uma leitura compartilhada permitem participar sem emprestar bens pessoais.",
      "O que precisamos combinar antes de executar uma tarefa? Identifiquem responsável, material, autorização e momento, sem atribuir trabalho a quem não se ofereceu.",
    ],
    references: ["Marcos 10:42-45", "Gálatas 5:13", "Tiago 2:14-17"],
    leaderNote:
      "Não divulgue histórias ou imagens de pessoas ajudadas sem consentimento. Ações com crianças, idosos ou pessoas vulneráveis devem seguir as orientações da igreja e responsáveis.",
    prayerSuggestion:
      "O condutor pode orar por sensibilidade, humildade e perseverança para que o serviço seja expressão de amor e não busca por visibilidade.",
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
    id: "boas-novas-em-uma-frase",
    meetingCore: "Leia a cena fictícia: depois de um jogo, alguém pergunta o que o grupo leu. Apoio: Hoje lemos uma passagem que destaca responder com mansidão e respeito. Em duplas, proponham uma frase clara sobre esse assunto. Confiram se ela informa sem pressionar a pessoa nem inventar uma experiência pessoal.",
    audience: "todos",
    audienceLabel: "Toda a célula",
    category: "Comunicação e respeito",
    title: "Boas notícias em uma frase",
    summary:
      "Três cenas fictícias para explicar uma descoberta bíblica, fazer um convite claro e respeitar uma recusa, sem exigir testemunhos pessoais.",
    duration: "35 a 50 min",
    groupSize: "6 a 24 pessoas",
    materials: ["Bíblia", "Este roteiro com as situações", "Relógio", "Papel e caneta opcionais"],
    objective:
      "Praticar clareza e respeito em conversas fictícias sobre uma leitura bíblica ou um encontro, distinguindo explicação, convite e insistência.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Reserve 7 minutos para ler Colossenses 4:5-6 e 1 Pedro 3:15-16. Observe a atenção à resposta de cada pessoa e a orientação de mansidão e respeito. Pedro trata da resposta sobre a esperança cristã, não de uma técnica para conseguir adesões. Marcos 5:18-20 é uma leitura complementar sobre o relato de uma pessoa específica; ninguém precisa reproduzir sua experiência ou contar a própria história. As cenas e os tempos abaixo são propostas de comunicação, não instruções literais dessas passagens.",
      },
      {
        title: "Uma descoberta em uma frase",
        description:
          "Em 5 minutos, leia a cena fictícia: depois de um jogo, alguém pergunta o que o grupo leu. Ofereça a frase de apoio: Hoje lemos uma passagem que destaca responder com mansidão e respeito. Convide até duas pessoas a propor uma versão simples, sem prometer mudanças na vida de quem ouve nem inventar experiências pessoais. Compare se a frase informa o assunto e pode ser entendida sem conhecer o jogo. O condutor pode ler o exemplo sozinho; acompanhar em silêncio também é participar. Esse passo funciona como uma prática curta completa.",
      },
      {
        title: "Ouvir antes de responder",
        description:
          "Reserve 15 minutos: 3 para apresentar as cenas, 6 para duplas ou grupos de três escolherem uma frase e 6 para até três contribuições. Cena A: alguém pergunta o que haverá no encontro. Apoio: Teremos leitura e jogos bíblicos; você quer saber como funciona? Cena B: alguém diz que não deseja participar. Apoio: Tudo bem, obrigado por responder. Encerre o convite, sem pedir justificativa ou repeti-lo. Cena C: alguém não entende a palavra mansidão. Apoio: Aqui estamos falando de responder com gentileza, sem agressividade. Explique que uma frase ajuda a iniciar a conversa, mas não substitui todo o contexto da passagem. Não é necessário encenar; escrever, ouvir ou pedir leitura assistida são alternativas. Para a versão de 50 minutos, acrescente 15 para criar um convite fictício com atividade, horário e local claramente identificados como exemplos.",
      },
      {
        title: "Convite sem pressão",
        description:
          "Use 8 minutos para as perguntas, uma síntese e oração opcional. Compare Você pode participar se quiser com Você tem de ir para mostrar que tem fé. A primeira preserva a escolha; a segunda pressiona e não deve ser usada. Retome o exemplo de recusa e encerre sem recolher nomes, contatos ou compromissos. As etapas somam 35 minutos; a criação adicional de um convite acrescenta 15. No criador de roteiro, siga o tempo reservado no plano gerado em vez de somar novamente a duração integral desta atividade.",
      },
    ],
    questions: [
      "Na cena A, que informação ajuda a pessoa a decidir? Apoio: explicar a atividade e responder ao que ela quer saber, sem prometer resultados.",
      "O que fazer após a recusa da cena B? Apoio: aceitar e encerrar o convite, sem insistir ou pedir explicações.",
      "Na cena C, a frase simples substitui a leitura bíblica? Apoio: não; esclarece uma palavra, mas o contexto continua importante.",
    ],
    references: ["Marcos 5:18-20", "Colossenses 4:5-6", "1 Pedro 3:15-16"],
    leaderNote:
      "Use somente cenas fictícias. Não solicite testemunhos, relatos de sofrimento, listas de pessoas a convidar ou avaliação da fé dos participantes. Não transforme clareza de comunicação em competição ou promessa de conversão. Não envie os convites nem fotografe ou publique respostas durante a atividade. Respeite recusas, diferenças de crença e a opção de apenas observar. Esta prática não oferece aconselhamento nem substitui uma conversa consentida e atenta ao contexto.",
    prayerSuggestion:
      "Se o grupo desejar, o condutor pode fazer uma oração breve por palavras honestas, gentileza e respeito às escolhas de cada pessoa. Ninguém precisa falar ou acompanhar a oração.",
  },
];

const pausedDynamicIds = ["quando-a-mente-acelera"];

export const cellDynamics = cellDynamicDrafts.filter(
  (dynamic) => !pausedDynamicIds.includes(dynamic.id),
);

export function getCellDynamicById(id: string) {
  return cellDynamics.find((dynamic) => dynamic.id === id);
}
