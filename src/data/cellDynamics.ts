export type CellAudience = "jovens" | "casais" | "todos";

export type CellDynamic = {
  id: string;
  audience: CellAudience;
  audienceLabel: string;
  category: string;
  title: string;
  summary: string;
  duration: string;
  groupSize: string;
  materials: string[];
  objective: string;
  steps: { title: string; description: string }[];
  questions: string[];
  references: string[];
  leaderNote: string;
  prayerSuggestion: string;
};

export const cellDynamics: CellDynamic[] = [
  {
    id: "verdade-ou-pressao",
    audience: "jovens",
    audienceLabel: "Jovens",
    category: "Conversa e identidade",
    title: "Verdade ou press\u00e3o?",
    summary:
      "Uma conversa honesta sobre escolhas, identidade e a coragem de permanecer fiel ao que se acredita.",
    duration: "35 a 45 min",
    groupSize: "6 a 20 pessoas",
    materials: ["Pap\u00e9is pequenos", "Canetas", "Uma caixa ou envelope"],
    objective:
      "Criar um espa\u00e7o seguro para jovens reconhecerem press\u00f5es reais e pensarem em respostas baseadas na f\u00e9.",
    steps: [
      {
        title: "Leitura b\u00edblica",
        description:
          "Antes da din\u00e2mica, o condutor ou alguns participantes leem as refer\u00eancias indicadas. Convide o grupo a observar escolhas, coragem e fidelidade a Deus nesses textos.",
      },
      {
        title: "Abertura",
        description:
          "Entregue tr\u00eas pap\u00e9is para cada pessoa. Em sil\u00eancio, cada um escreve situa\u00e7\u00f5es em que jovens sentem press\u00e3o para agir diferente do que acreditam. Ningu\u00e9m precisa assinar.",
      },
      {
        title: "Escolha e conversa",
        description:
          "Misture os pap\u00e9is e leia alguns. Para cada situa\u00e7\u00e3o, o grupo conversa sobre quais escolhas parecem mais f\u00e1ceis, quais consequ\u00eancias podem surgir e como uma amizade saud\u00e1vel poderia ajudar.",
      },
      {
        title: "Fechamento",
        description:
          "Convide cada pessoa a escolher uma atitude pr\u00e1tica para a semana: pedir ajuda, estabelecer um limite, conversar com algu\u00e9m de confian\u00e7a ou incentivar um amigo.",
      },
    ],
    questions: [
      "Qual tipo de press\u00e3o aparece com mais frequ\u00eancia na nossa idade?",
      "O que torna dif\u00edcil dizer n\u00e3o quando todos parecem concordar?",
      "Quem pode caminhar ao nosso lado quando precisamos de coragem?",
    ],
    references: ["Daniel 1", "Romanos 12:2", "1 Tim\u00f3teo 4:12"],
    leaderNote:
      "Evite expor hist\u00f3rias pessoais. O foco \u00e9 acolher, ouvir e apontar caminhos pr\u00e1ticos, sem transformar a conversa em interrogat\u00f3rio.",
    prayerSuggestion:
      "Ao encerrar, o condutor pode orar por sabedoria nas escolhas, coragem diante das press\u00f5es e prote\u00e7\u00e3o contra as tenta\u00e7\u00f5es.",
  },
  {
    id: "escuta-que-aproxima",
    audience: "casais",
    audienceLabel: "Casais",
    category: "Relacionamento e cuidado",
    title: "Escuta que aproxima",
    summary:
      "Um encontro para casais refletirem sobre comunica\u00e7\u00e3o, escuta e pequenos gestos que fortalecem o relacionamento.",
    duration: "45 a 60 min",
    groupSize: "3 a 10 casais",
    materials: ["Cart\u00f5es ou pap\u00e9is", "Canetas", "Cron\u00f4metro opcional"],
    objective:
      "Oferecer um momento leve e respeitoso para praticar a escuta e identificar atitudes simples que aproximam o casal.",
    steps: [
      {
        title: "Leitura b\u00edblica",
        description:
          "Antes da din\u00e2mica, o condutor ou um casal pode ler as refer\u00eancias indicadas. Pe\u00e7a que o grupo perceba palavras sobre escuta, cuidado, perd\u00e3o e unidade.",
      },
      {
        title: "Aquecimento",
        description:
          "Cada casal recebe duas perguntas leves, como uma lembran\u00e7a feliz do in\u00edcio do relacionamento ou algo pelo qual sente gratid\u00e3o hoje. Um fala por dois minutos; o outro apenas escuta.",
      },
      {
        title: "Troca de lugar",
        description:
          "Inverta os pap\u00e9is. Depois, cada um compartilha uma frase: 'Eu me senti ouvido quando voc\u00ea...'. O objetivo n\u00e3o \u00e9 resolver conflitos naquele momento.",
      },
      {
        title: "Compromisso da semana",
        description:
          "Em particular, cada casal define uma pr\u00e1tica pequena e concreta: uma conversa sem celular, um passeio, um pedido de perd\u00e3o ou uma ora\u00e7\u00e3o juntos.",
      },
    ],
    questions: [
      "O que faz voc\u00ea se sentir verdadeiramente ouvido?",
      "Que h\u00e1bito simples tem ajudado - ou poderia ajudar - a conversa do casal?",
      "Como podemos discordar sem deixar de cuidar um do outro?",
    ],
    references: ["Tiago 1:19", "Eclesiastes 4:9-12", "Colossenses 3:12-14"],
    leaderNote:
      "N\u00e3o pe\u00e7a que casais relatem conflitos diante do grupo. Assuntos sens\u00edveis pedem privacidade e, quando necess\u00e1rio, acompanhamento pastoral ou profissional adequado.",
    prayerSuggestion:
      "Ao encerrar, o condutor pode orar por unidade, escuta, perd\u00e3o e cuidado m\u00fatuo, pedindo que Deus fortale\u00e7a cada casal.",
  },
  {
    id: "pontes-de-gratidao",
    audience: "todos",
    audienceLabel: "Toda a c\u00e9lula",
    category: "Quebra-gelo e comunh\u00e3o",
    title: "Pontes de gratid\u00e3o",
    summary:
      "Uma din\u00e2mica r\u00e1pida para aproximar pessoas, reconhecer cuidados recebidos e preparar o grupo para uma conversa mais profunda.",
    duration: "20 a 30 min",
    groupSize: "4 a 30 pessoas",
    materials: ["Pap\u00e9is pequenos", "Canetas", "Fita adesiva opcional"],
    objective:
      "Fortalecer a comunh\u00e3o ao transformar gratid\u00e3o em palavras e atitudes de encorajamento.",
    steps: [
      {
        title: "Leitura b\u00edblica",
        description:
          "Antes da din\u00e2mica, o condutor ou participantes leem as refer\u00eancias indicadas. Convide todos a identificar motivos de gratid\u00e3o e maneiras de encorajar uns aos outros.",
      },
      {
        title: "Escreva",
        description:
          "Cada pessoa escreve, sem assinar, uma resposta para: 'Hoje sou grato por...' e outra para: 'Nesta semana, algu\u00e9m me ajudou quando...'.",
      },
      {
        title: "Conecte",
        description:
          "Misture os pap\u00e9is. Cada participante l\u00ea um em voz alta e, se quiser, acrescenta uma palavra de encorajamento. N\u00e3o \u00e9 necess\u00e1rio identificar quem escreveu.",
      },
      {
        title: "Agrade\u00e7a",
        description:
          "Em duplas, cada pessoa agradece a Deus por uma coisa ou pessoa mencionada no encontro. Finalize com uma ora\u00e7\u00e3o breve pelo grupo.",
      },
    ],
    questions: [
      "Por que \u00e9 f\u00e1cil esquecer o bem que recebemos durante uma semana corrida?",
      "Que tipo de atitude simples pode tornar nossa c\u00e9lula mais acolhedora?",
      "Como a gratid\u00e3o muda a forma como enxergamos as pessoas?",
    ],
    references: ["Salmo 100", "1 Tessalonicenses 5:18", "Hebreus 10:24-25"],
    leaderNote:
      "Inclua quem chegou pela primeira vez sem constrangimento. A participa\u00e7\u00e3o pode ser apenas ouvir; ningu\u00e9m precisa compartilhar algo pessoal.",
    prayerSuggestion:
      "Ao encerrar, o condutor pode agradecer a Deus pelas pessoas do grupo e pedir uma c\u00e9lula cada vez mais acolhedora, generosa e atenta \u00e0s necessidades uns dos outros.",
  },
  {
    id: "planejar-juntos",
    audience: "casais",
    audienceLabel: "Casais",
    category: "Finanças e parceria",
    title: "Planejar juntos",
    summary:
      "Uma conversa respeitosa sobre prioridades, decisões financeiras e a importância de construir acordos como casal.",
    duration: "50 a 65 min",
    groupSize: "3 a 8 casais",
    materials: ["Cartões com situações", "Papéis", "Canetas"],
    objective:
      "Ajudar os casais a reconhecer valores, expectativas e hábitos que influenciam as decisões financeiras do dia a dia.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "O condutor ou alguns casais leem as referências. Convide o grupo a observar princípios de planejamento, contentamento e responsabilidade, sem transformar o encontro em uma aula de investimentos.",
      },
      {
        title: "Prioridades em cartões",
        description:
          "Distribua cartões com palavras como moradia, alimentação, generosidade, lazer, reserva e projetos. Cada casal escolhe três prioridades para uma situação fictícia e conversa em particular sobre os motivos.",
      },
      {
        title: "Cenários para decidir",
        description:
          "Apresente situações hipotéticas: uma despesa inesperada, uma compra desejada ou um convite para ajudar alguém. Os casais discutem quais perguntas fariam antes de decidir.",
      },
      {
        title: "Um acordo possível",
        description:
          "Cada casal registra uma prática simples para testar durante a semana, como conversar antes de uma compra relevante ou reservar um momento mensal para planejar juntos.",
      },
    ],
    questions: [
      "Que valores desejamos que orientem nossas decisões financeiras?",
      "Como conversar sobre dinheiro sem acusação ou vergonha?",
      "Qual pequena rotina pode tornar nossas escolhas mais transparentes?",
    ],
    references: ["Provérbios 21:5", "Lucas 14:28-30", "1 Timóteo 6:6-10"],
    leaderNote:
      "Não peça valores, dívidas ou rendas pessoais. O roteiro promove diálogo e princípios; situações complexas podem exigir orientação financeira ou pastoral individual.",
    prayerSuggestion:
      "O condutor pode orar por sabedoria, contentamento, honestidade e unidade para que cada casal administre seus recursos com responsabilidade e generosidade.",
  },
  {
    id: "rotina-com-proposito",
    audience: "casais",
    audienceLabel: "Casais",
    category: "Dia a dia e cuidado",
    title: "Rotina com propósito",
    summary:
      "Uma dinâmica para perceber cargas invisíveis, valorizar contribuições e criar pequenos gestos de cuidado na rotina.",
    duration: "40 a 55 min",
    groupSize: "3 a 10 casais",
    materials: ["Papéis", "Canetas", "Cartões de tarefas opcionais"],
    objective:
      "Estimular uma divisão mais consciente das responsabilidades e fortalecer o reconhecimento mútuo dentro da rotina do casal.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Leia as referências e peça que o grupo identifique atitudes de paciência, cooperação e cuidado com as cargas uns dos outros.",
      },
      {
        title: "O que sustenta a semana",
        description:
          "Cada pessoa anota tarefas visíveis e invisíveis que ajudam a casa a funcionar. O casal compara as listas sem usar o momento para cobrar ou contabilizar quem faz mais.",
      },
      {
        title: "Reconhecer e perguntar",
        description:
          "Cada um completa duas frases: 'Eu reconheço quando você...' e 'Nesta semana, posso ajudar melhor se...'. O outro ouve antes de responder.",
      },
      {
        title: "Ajuste de sete dias",
        description:
          "O casal escolhe apenas um ajuste realista para a próxima semana e combina quando voltará a conversar sobre o resultado.",
      },
    ],
    questions: [
      "Que contribuição do outro costuma passar despercebida?",
      "O que torna difícil pedir ajuda antes de chegar ao limite?",
      "Como proteger tempo de conversa em uma semana corrida?",
    ],
    references: ["Eclesiastes 4:9-10", "Gálatas 6:2", "Colossenses 3:12-14"],
    leaderNote:
      "Mantenha os exemplos no campo das rotinas e dos acordos. Conflitos intensos, controle ou violência exigem acompanhamento privado e proteção adequada.",
    prayerSuggestion:
      "O condutor pode orar para que os casais enxerguem as necessidades um do outro e cultivem paciência, cooperação e alegria nas pequenas tarefas.",
  },
  {
    id: "casa-que-cresce",
    audience: "casais",
    audienceLabel: "Casais",
    category: "Filhos e formação",
    title: "Casa que cresce",
    summary:
      "Um encontro para refletir sobre exemplos, valores e conversas que ajudam crianças e adolescentes a crescer com cuidado e fé.",
    duration: "50 a 65 min",
    groupSize: "3 a 8 casais",
    materials: ["Cartões com valores", "Papéis", "Canetas"],
    objective:
      "Ajudar pais e responsáveis a transformar valores desejados em práticas simples e coerentes dentro de casa.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Leia as referências e converse brevemente sobre ensino no cotidiano, responsabilidade dos adultos e valor de cada filho.",
      },
      {
        title: "Valores que queremos cultivar",
        description:
          "Cada casal escolhe três valores entre opções como verdade, respeito, serviço, coragem, fé e generosidade. Depois, descreve uma atitude cotidiana que poderia tornar cada valor visível.",
      },
      {
        title: "Situações reais, respostas possíveis",
        description:
          "Use cenários adequados à faixa etária, como frustração, mentira, uso de telas ou conflito entre irmãos. Os casais pensam em respostas que unam limite, escuta e exemplo.",
      },
      {
        title: "Uma conversa em casa",
        description:
          "Cada casal prepara uma pergunta simples para fazer aos filhos ou às crianças sob seus cuidados durante a semana, sem transformar a conversa em interrogatório.",
      },
    ],
    questions: [
      "Que valor nossos hábitos já estão ensinando sem palavras?",
      "Como corrigir sem humilhar ou comparar?",
      "Que momento da rotina pode se tornar oportunidade de conversa e fé?",
    ],
    references: ["Deuteronômio 6:4-9", "Salmos 127:3-5", "Efésios 6:4"],
    leaderNote:
      "Acolha casais sem filhos, tentantes, famílias recompostas e responsáveis por outras crianças. Ninguém deve explicar sua história familiar ao grupo.",
    prayerSuggestion:
      "O condutor pode orar por sabedoria, paciência e proteção, pedindo que os lares sejam lugares de escuta, limite, afeto e formação na fé.",
  },
  {
    id: "amizades-que-edificam",
    audience: "jovens",
    audienceLabel: "Jovens",
    category: "Amizade e influência",
    title: "Amizades que edificam",
    summary:
      "Uma conversa sobre influência, lealdade, limites e o tipo de amigo que cada jovem deseja ter e também ser.",
    duration: "35 a 50 min",
    groupSize: "6 a 24 pessoas",
    materials: ["Cartões", "Canetas", "Uma caixa"],
    objective:
      "Ajudar jovens a reconhecer características de amizades saudáveis e atitudes que fortalecem ou enfraquecem vínculos.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Leia as referências e peça que o grupo observe palavras ligadas a presença, influência, correção e encorajamento.",
      },
      {
        title: "Um bom amigo...",
        description:
          "Cada participante completa anonimamente a frase 'Um bom amigo...'. Misture os cartões e organize as respostas em atitudes de apoio, sinceridade, respeito e limite.",
      },
      {
        title: "Semáforo das atitudes",
        description:
          "Leia situações fictícias e o grupo indica verde, amarelo ou vermelho: guardar confidência, incentivar uma mentira, respeitar um não ou pressionar para se encaixar.",
      },
      {
        title: "Encorajamento prático",
        description:
          "Cada jovem escolhe uma forma segura de encorajar alguém na semana, como ouvir, agradecer, pedir desculpas ou convidar uma pessoa que está isolada.",
      },
    ],
    questions: [
      "Como perceber quando influência virou pressão?",
      "É possível discordar e ainda preservar uma amizade?",
      "Que atitude nossa pode fazer alguém se sentir incluído?",
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
    audience: "jovens",
    audienceLabel: "Jovens",
    category: "Redes sociais e escolhas",
    title: "Digital com propósito",
    summary:
      "Uma dinâmica sobre atenção, comparação, conteúdo e escolhas conscientes no uso de telas e redes sociais.",
    duration: "35 a 45 min",
    groupSize: "6 a 24 pessoas",
    materials: ["Cartões de situações", "Papéis", "Canetas"],
    objective:
      "Estimular jovens a avaliar como o ambiente digital influencia pensamentos, tempo, relacionamentos e testemunho.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Leia as referências e peça ao grupo que procure princípios sobre liberdade, atenção e escolha do que alimenta a mente.",
      },
      {
        title: "Ajuda, distrai ou domina?",
        description:
          "Apresente usos comuns de tecnologia. O grupo posiciona cada exemplo em três categorias e explica por que o mesmo recurso pode ter efeitos diferentes conforme o contexto.",
      },
      {
        title: "Antes de publicar",
        description:
          "Em equipes, avaliem situações fictícias usando quatro perguntas: é verdadeiro, respeitoso, necessário e seguro? Inclua compartilhamento de fotos, comentários e mensagens privadas.",
      },
      {
        title: "Experimento de uma semana",
        description:
          "Cada participante escolhe um ajuste pessoal, como silenciar notificações em um horário, deixar o celular fora de uma conversa ou revisar quem acompanha.",
      },
    ],
    questions: [
      "Como a comparação online afeta a forma como enxergamos nossa vida?",
      "Que sinais mostram que uma ferramenta começou a nos dominar?",
      "Como podemos usar o ambiente digital para encorajar em vez de ferir?",
    ],
    references: ["Salmos 101:3", "1 Coríntios 6:12", "Filipenses 4:8"],
    leaderNote:
      "Evite demonizar tecnologia ou fiscalizar celulares. O objetivo é desenvolver discernimento, responsabilidade e conversas seguras sobre riscos reais.",
    prayerSuggestion:
      "O condutor pode orar por domínio próprio, sabedoria nas escolhas e um uso da tecnologia que preserve relacionamentos, atenção e integridade.",
  },
  {
    id: "maos-que-servem",
    audience: "todos",
    audienceLabel: "Toda a célula",
    category: "Serviço e compaixão",
    title: "Mãos que servem",
    summary:
      "Uma dinâmica para transformar necessidades percebidas em ações simples de serviço dentro e fora do grupo.",
    duration: "35 a 50 min",
    groupSize: "5 a 30 pessoas",
    materials: ["Papéis", "Canetas", "Painel ou mesa"],
    objective:
      "Ajudar a célula a enxergar necessidades reais e organizar uma resposta possível, respeitosa e responsável.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Leia as referências e observe como serviço, amor e fé aparecem ligados a atitudes concretas, não à busca por reconhecimento.",
      },
      {
        title: "Necessidades ao redor",
        description:
          "O grupo lista necessidades gerais da igreja, vizinhança ou comunidade sem expor nomes: acolhimento, visita, alimento, orientação ou cuidado com um espaço.",
      },
      {
        title: "Recursos que já temos",
        description:
          "Ao lado de cada necessidade, identifiquem tempo, habilidades, contatos e materiais disponíveis. Retirem ideias que exigem preparação ou autorização que o grupo não possui.",
      },
      {
        title: "Uma ação responsável",
        description:
          "Escolham uma ação pequena, definam responsáveis e combinem como preservar privacidade, consentimento e segurança das pessoas atendidas.",
      },
    ],
    questions: [
      "Como servir sem colocar quem recebe em posição de constrangimento?",
      "Que habilidade simples do nosso grupo pode se tornar cuidado?",
      "Como manter constância depois da empolgação inicial?",
    ],
    references: ["Marcos 10:42-45", "Gálatas 5:13", "Tiago 2:14-17"],
    leaderNote:
      "Não divulgue histórias ou imagens de pessoas ajudadas sem consentimento. Ações com crianças, idosos ou pessoas vulneráveis devem seguir as orientações da igreja e responsáveis.",
    prayerSuggestion:
      "O condutor pode orar por sensibilidade, humildade e perseverança para que o serviço seja expressão de amor e não busca por visibilidade.",
  },
  {
    id: "uma-mesa-muitas-historias",
    audience: "todos",
    audienceLabel: "Toda a célula",
    category: "Comunhão e acolhimento",
    title: "Uma mesa, muitas histórias",
    summary:
      "Uma atividade para aproximar pessoas de diferentes idades e trajetórias por meio de perguntas leves e hospitalidade.",
    duration: "30 a 45 min",
    groupSize: "6 a 30 pessoas",
    materials: ["Cartões com perguntas", "Uma cesta", "Lanche opcional"],
    objective:
      "Fortalecer pertencimento e escuta, criando oportunidades para que pessoas novas e antigas se conheçam sem exposição excessiva.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Leia as referências e destaque práticas de comunhão, hospitalidade, partilha e cuidado presentes nas primeiras comunidades.",
      },
      {
        title: "Perguntas à mesa",
        description:
          "Em pequenos grupos, cada pessoa retira uma pergunta leve: uma comida marcante, alguém que ensinou algo importante ou um motivo recente de gratidão.",
      },
      {
        title: "Algo que temos em comum",
        description:
          "Cada grupo procura três pontos em comum que não sejam aparência, profissão ou idade. Depois compartilha apenas o que todos concordarem em contar.",
      },
      {
        title: "Próximo lugar à mesa",
        description:
          "Conversem sobre quem pode estar se sentindo de fora e definam uma atitude de acolhimento para o próximo encontro.",
      },
    ],
    questions: [
      "O que faz uma pessoa perceber que é bem-vinda?",
      "Como acolher sem pressionar alguém a falar?",
      "Que hábito pode impedir a formação de grupos fechados?",
    ],
    references: ["Atos 2:42-47", "Romanos 12:9-13", "Hebreus 13:1-2"],
    leaderNote:
      "Dê liberdade para passar uma pergunta. Hospitalidade não exige que visitantes contem histórias pessoais nem que participem de todas as etapas.",
    prayerSuggestion:
      "O condutor pode agradecer pelas diferentes histórias presentes e orar para que a célula seja um ambiente de hospitalidade, amizade e cuidado sincero.",
  },
  {
    id: "boas-novas-em-uma-frase",
    audience: "todos",
    audienceLabel: "Toda a célula",
    category: "Testemunho e evangelismo",
    title: "Boas notícias em uma frase",
    summary:
      "Uma prática de comunicação simples para compartilhar esperança com respeito, clareza e atenção à história de quem ouve.",
    duration: "35 a 50 min",
    groupSize: "6 a 24 pessoas",
    materials: ["Cartões de situações", "Papéis", "Canetas"],
    objective:
      "Ajudar participantes a falar sobre sua fé de modo pessoal e respeitoso, sem fórmulas prontas ou pressão sobre o ouvinte.",
    steps: [
      {
        title: "Leitura bíblica",
        description:
          "Leia as referências e observe como testemunho, mansidão, sabedoria e atenção ao contexto caminham juntos.",
      },
      {
        title: "O que mudou em mim",
        description:
          "Cada participante escreve uma frase curta sobre algo que aprendeu ou uma mudança que experimentou. Ninguém é obrigado a ler em voz alta.",
      },
      {
        title: "Ouvir antes de responder",
        description:
          "Em duplas, uma pessoa recebe uma situação fictícia e faz uma pergunta; a outra pratica ouvir, fazer uma pergunta de volta e responder sem discurso longo.",
      },
      {
        title: "Convite sem pressão",
        description:
          "O grupo cria maneiras respeitosas de oferecer ajuda, oração, conversa ou convite para um encontro, deixando espaço real para a pessoa aceitar ou recusar.",
      },
    ],
    questions: [
      "Qual a diferença entre compartilhar e pressionar?",
      "Como nossa escuta pode tornar uma conversa mais verdadeira?",
      "Que palavras religiosas podem precisar de uma explicação simples?",
    ],
    references: ["Marcos 5:18-20", "Colossenses 4:5-6", "1 Pedro 3:15-16"],
    leaderNote:
      "Não transforme a atividade em competição por resultados. Respeite limites, diferenças de história e qualquer resposta negativa a um convite.",
    prayerSuggestion:
      "O condutor pode orar por amor, sensibilidade e coragem para compartilhar esperança com palavras honestas, mansidão e respeito.",
  },
];
