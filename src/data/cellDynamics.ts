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
];
