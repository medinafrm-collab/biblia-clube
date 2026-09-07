export type MeetingAudience = "familias" | "jovens" | "casais" | "celulas";
export type MeetingGoal = "integrar" | "aprender" | "conversar" | "celebrar";
export type MeetingDuration = 30 | 45 | 60 | 90;

export type MeetingDynamic = {
  id: string;
  audience: "jovens" | "casais" | "todos";
  category: string;
  title: string;
  summary: string;
  duration: string;
  materials: string[];
  objective: string;
  steps: { title: string; description: string }[];
  questions: string[];
  references: string[];
  leaderNote: string;
  prayerSuggestion: string;
};

export type MeetingPlanStep = {
  title: string;
  minutes: number;
  instruction: string;
};

export const meetingAudiences: { id: MeetingAudience; label: string; description: string }[] = [
  { id: "celulas", label: "Célula ou grupo", description: "Encontro com perfis variados" },
  { id: "jovens", label: "Jovens", description: "Participação e perguntas reais" },
  { id: "casais", label: "Casais", description: "Conversa com privacidade" },
  { id: "familias", label: "Família", description: "Idades e ritmos diferentes" },
];

export const meetingGoals: { id: MeetingGoal; label: string; description: string }[] = [
  { id: "integrar", label: "Integrar", description: "Acolher e aproximar pessoas" },
  { id: "aprender", label: "Aprender", description: "Explorar uma passagem ou tema" },
  { id: "conversar", label: "Conversar", description: "Criar escuta e aplicação" },
  { id: "celebrar", label: "Celebrar", description: "Jogar e agradecer juntos" },
];

export const meetingDurations = [30, 45, 60, 90] as const;

const gameByGoal: Record<MeetingGoal, { title: string; href: string }> = {
  integrar: { title: "Ligue os Pares", href: "/ligue-os-pares" },
  aprender: { title: "Quiz Bíblico", href: "/quiz-biblico" },
  conversar: { title: "Complete a Frase", href: "/complete-a-frase" },
  celebrar: { title: "Modo Grupo", href: "/modo-grupo" },
};

const minuteProfiles: Record<MeetingDuration, [number, number, number, number, number, number]> = {
  30: [3, 5, 5, 7, 7, 3],
  45: [5, 8, 7, 10, 10, 5],
  60: [7, 12, 10, 13, 12, 6],
  90: [10, 20, 15, 20, 15, 10],
};

const welcomeByAudience: Record<MeetingAudience, string> = {
  celulas: "Receba as pessoas pelo nome, apresente o propósito e combine que ninguém precisa se expor para participar.",
  jovens: "Receba o grupo, apresente o tema em uma frase e deixe claro que perguntas honestas e a opção de apenas observar são bem-vindas.",
  casais: "Acolha os casais e combine privacidade: ninguém será convidado a relatar conflitos ou informações pessoais diante do grupo.",
  familias: "Acomode as diferentes idades, explique o encontro com palavras simples e distribua pequenas formas de participação.",
};

function selectDynamicSteps(dynamic: MeetingDynamic, duration: MeetingDuration) {
  const practical = dynamic.steps.filter((step) => !step.title.toLocaleLowerCase("pt-BR").includes("leitura bíblica"));
  const count = duration === 30 ? 1 : duration === 45 ? 2 : practical.length;
  return practical.slice(0, count);
}

function dynamicInstruction(dynamic: MeetingDynamic, duration: MeetingDuration) {
  const selected = selectDynamicSteps(dynamic, duration);
  const actions = selected.map((step) => `${step.title}: ${step.description}`).join(" ");
  if (duration === 30) return `Use somente o núcleo da dinâmica, não o roteiro integral de ${dynamic.duration}. ${actions} Interrompa no tempo indicado e registre uma conclusão em uma frase.`;
  if (duration === 45) return `${actions} Limite as falas a uma contribuição breve por pessoa e guarde as demais perguntas para outro encontro.`;
  if (duration === 60) return `${actions} Conduza cada transição de forma objetiva para preservar o tempo da conversa.`;
  return `${actions} Depois, forme duplas ou trios para aprofundar uma aplicação e recolha duas sínteses no plenário.`;
}

function gameInstruction(goal: MeetingGoal, minutes: number) {
  const count = minutes <= 5 ? 3 : minutes <= 7 ? 5 : minutes <= 10 ? 7 : 10;
  if (goal === "integrar") return `Faça ${count} associações em modo cooperativo. Convide pessoas diferentes a explicar cada par em uma frase; pule uma associação se a conversa se alongar.`;
  if (goal === "aprender") return `Faça ${count} perguntas. Após cada resposta, leia apenas a explicação; marque no máximo duas referências para a etapa de leitura.`;
  if (goal === "conversar") return `Complete ${count} frases. Escolha uma delas para reler no contexto e não transforme a atividade em teste de memorização.`;
  return `Faça uma rodada de ${count} perguntas com equipes equilibradas. Use rebote somente se houver tempo e reconheça colaboração, não apenas pontos.`;
}

function readingInstruction(dynamic: MeetingDynamic, minutes: number) {
  const references = dynamic.references.slice(0, minutes >= 18 ? 2 : 1);
  const observation = minutes <= 10
    ? "Leia em voz alta e peça uma palavra ou ação que chamou atenção."
    : "Leia em voz alta, esclareça o contexto imediato e peça ao grupo que identifique o que o texto afirma antes de aplicá-lo.";
  return `${observation} Use ${references.join(" e ")}. As outras referências ficam para estudo posterior.`;
}

function conversationInstruction(dynamic: MeetingDynamic, minutes: number) {
  const count = minutes <= 7 ? 1 : minutes <= 12 ? 2 : 3;
  return `Converse sobre ${count === 1 ? "esta pergunta" : `estas ${count} perguntas`}: ${dynamic.questions.slice(0, count).join(" / ")} Termine escolhendo uma aplicação pequena, voluntária e possível para a próxima semana.`;
}

export function buildMeetingPlan(
  dynamics: MeetingDynamic[],
  audience: MeetingAudience,
  goal: MeetingGoal,
  duration: MeetingDuration,
  variant = 0,
) {
  const matches = dynamics.filter((dynamic) => {
    if (audience === "jovens") return dynamic.audience === "jovens";
    if (audience === "casais") return dynamic.audience === "casais";
    return dynamic.audience === "todos";
  });
  const goalTerms: Record<MeetingGoal, string[]> = {
    integrar: ["comunhão", "quebra-gelo", "acolhimento", "conversa"],
    aprender: ["aprendizado", "bíblia", "fé", "palavra"],
    conversar: ["conversa", "cuidado", "escuta", "relacionamento"],
    celebrar: ["gratidão", "comunhão", "alegria", "encorajamento"],
  };
  const ranked = matches.toSorted((a, b) => {
    const score = (value: MeetingDynamic) => goalTerms[goal].filter((term) => `${value.category} ${value.summary} ${value.objective}`.toLocaleLowerCase("pt-BR").includes(term)).length;
    return score(b) - score(a);
  });
  if (ranked.length === 0) return null;

  const dynamic = ranked[((variant % ranked.length) + ranked.length) % ranked.length];
  const game = gameByGoal[goal];
  const minutes = minuteProfiles[duration];
  const timeline: MeetingPlanStep[] = [
    { title: "Acolhimento e combinados", minutes: minutes[0], instruction: welcomeByAudience[audience] },
    { title: `Dinâmica: ${dynamic.title}`, minutes: minutes[1], instruction: dynamicInstruction(dynamic, duration) },
    { title: `Jogo: ${game.title}`, minutes: minutes[2], instruction: gameInstruction(goal, minutes[2]) },
    { title: "Leitura bíblica", minutes: minutes[3], instruction: readingInstruction(dynamic, minutes[3]) },
    { title: "Conversa e aplicação", minutes: minutes[4], instruction: conversationInstruction(dynamic, minutes[4]) },
    { title: "Oração e encerramento", minutes: minutes[5], instruction: dynamic.prayerSuggestion },
  ];

  return {
    dynamic,
    game,
    timeline,
    audienceLabel: meetingAudiences.find((item) => item.id === audience)?.label ?? audience,
    goalLabel: meetingGoals.find((item) => item.id === goal)?.label ?? goal,
    materials: [...new Set([...dynamic.materials, "Bíblia ou aplicativo bíblico", "Acesso ao jogo em um celular, tablet ou computador"])],
    leaderNote: dynamic.leaderNote,
  };
}

export function meetingPlanTotal(steps: MeetingPlanStep[]) {
  return steps.reduce((total, step) => total + step.minutes, 0);
}

export function formatMeetingPlanForSharing(plan: NonNullable<ReturnType<typeof buildMeetingPlan>>, duration: MeetingDuration) {
  const steps = plan.timeline.map((step, index) => `${index + 1}. ${step.title} (${step.minutes} min): ${step.instruction}`).join("\n\n");
  return `ROTEIRO BÍBLIA CLUBE\n${plan.goalLabel} em ${duration} minutos · ${plan.audienceLabel}\n\nMateriais: ${plan.materials.join("; ")}\nReferências: ${plan.dynamic.references.join("; ")}\n\n${steps}\n\nCuidado para quem conduz: ${plan.leaderNote}\n\nhttps://www.bibliaclube.com.br/monte-seu-encontro`;
}
