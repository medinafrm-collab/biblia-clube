export type PrintableSection = {
  title: string;
  description?: string;
  items: string[];
};

export type PrintableResource = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  audience: string;
  pages: string;
  instructions: string[];
  sections: PrintableSection[];
};

export const printableResources: PrintableResource[] = [
  {
    slug: "cartoes-de-perguntas",
    title: "Cartões de perguntas para grupos",
    eyebrow: "Material para imprimir",
    summary:
      "Vinte e quatro perguntas organizadas em quatro temas para abrir conversas sem exigir respostas íntimas.",
    audience: "Células, jovens e famílias",
    pages: "2 páginas",
    instructions: [
      "Imprima em tamanho A4 e use a opção frente única.",
      "Recorte pelas linhas e separe os cartões por tema.",
      "Permita que qualquer participante passe a vez sem explicar o motivo.",
    ],
    sections: [
      {
        title: "Acolhimento",
        description: "Perguntas leves para os primeiros minutos.",
        items: [
          "Que pequena coisa tornou sua semana melhor?",
          "Qual lugar ajuda você a desacelerar?",
          "Que habilidade você gostaria de aprender?",
          "Qual refeição lembra um momento bom em família?",
          "Que gesto simples faz você se sentir bem recebido?",
          "Qual palavra descreve como você chegou hoje?",
        ],
      },
      {
        title: "Observação bíblica",
        description: "Use depois da leitura de uma passagem.",
        items: [
          "Qual ação de uma personagem chamou sua atenção?",
          "Que palavra ou ideia aparece mais de uma vez?",
          "Que mudança acontece entre o início e o final da passagem?",
          "Qual pergunta você faria a uma personagem?",
          "O que o texto mostra sobre Deus?",
          "Que detalhe você não havia percebido antes?",
        ],
      },
      {
        title: "Aplicação",
        description: "Transforme a leitura em uma resposta possível.",
        items: [
          "Que atitude pode ser praticada nas próximas vinte e quatro horas?",
          "Que conversa este texto nos encoraja a ter?",
          "O que precisamos deixar de adiar?",
          "Quem pode caminhar conosco nessa resposta?",
          "Que hábito pequeno ajudaria a lembrar deste aprendizado?",
          "Que dificuldade precisamos apresentar a Deus?",
        ],
      },
      {
        title: "Comunidade",
        description: "Perguntas para cuidado e colaboração.",
        items: [
          "Como nosso grupo pode acolher melhor quem chega?",
          "Que necessidade podemos atender juntos?",
          "O que facilita uma conversa honesta entre nós?",
          "Como podemos discordar com respeito?",
          "Que motivo coletivo de gratidão reconhecemos hoje?",
          "Por quem podemos orar durante esta semana?",
        ],
      },
    ],
  },
  {
    slug: "folha-de-pontuacao",
    title: "Folha de pontuação para jogos bíblicos",
    eyebrow: "Material para imprimir",
    summary:
      "Um placar para até seis equipes e cinco rodadas, com espaço para registrar colaboração e descobertas.",
    audience: "Grupos e eventos",
    pages: "1 página",
    instructions: [
      "Defina antes quantos pontos vale cada rodada.",
      "Use a coluna colaboração para reconhecer escuta e participação.",
      "Registre uma descoberta do grupo antes de encerrar.",
    ],
    sections: [
      {
        title: "Equipes e rodadas",
        items: [
          "Equipe 1 | Rodada 1 ____ | Rodada 2 ____ | Rodada 3 ____ | Rodada 4 ____ | Rodada 5 ____ | Total ____",
          "Equipe 2 | Rodada 1 ____ | Rodada 2 ____ | Rodada 3 ____ | Rodada 4 ____ | Rodada 5 ____ | Total ____",
          "Equipe 3 | Rodada 1 ____ | Rodada 2 ____ | Rodada 3 ____ | Rodada 4 ____ | Rodada 5 ____ | Total ____",
          "Equipe 4 | Rodada 1 ____ | Rodada 2 ____ | Rodada 3 ____ | Rodada 4 ____ | Rodada 5 ____ | Total ____",
          "Equipe 5 | Rodada 1 ____ | Rodada 2 ____ | Rodada 3 ____ | Rodada 4 ____ | Rodada 5 ____ | Total ____",
          "Equipe 6 | Rodada 1 ____ | Rodada 2 ____ | Rodada 3 ____ | Rodada 4 ____ | Rodada 5 ____ | Total ____",
        ],
      },
      {
        title: "Além do placar",
        items: [
          "Equipe que melhor colaborou: ______________________________",
          "Pergunta que gerou mais conversa: __________________________",
          "Referência para reler: ____________________________________",
          "Uma descoberta da noite: __________________________________",
        ],
      },
    ],
  },
  {
    slug: "checklist-do-lider",
    title: "Checklist do líder de pequeno grupo",
    eyebrow: "Material para imprimir",
    summary:
      "Uma lista objetiva para preparar conteúdo, acolhimento, ambiente e acompanhamento antes de cada encontro.",
    audience: "Líderes e anfitriões",
    pages: "2 páginas",
    instructions: [
      "Use a primeira parte durante a preparação.",
      "Revise a segunda parte depois do encontro.",
      "Não guarde informações pessoais que não sejam necessárias.",
    ],
    sections: [
      {
        title: "Conteúdo",
        items: [
          "[ ] Li a passagem no contexto.",
          "[ ] Consigo dizer o objetivo do encontro em uma frase.",
          "[ ] Preparei de duas a quatro perguntas abertas.",
          "[ ] Verifiquei as referências e explicações do jogo.",
          "[ ] Sei qual parte pode ser encurtada se necessário.",
        ],
      },
      {
        title: "Pessoas e ambiente",
        items: [
          "[ ] Há lugar e orientação para quem chegar pela primeira vez.",
          "[ ] O formato permite participar sem exposição obrigatória.",
          "[ ] O espaço está acessível, ventilado e organizado.",
          "[ ] Alguém poderá acolher crianças ou necessidades específicas.",
          "[ ] O horário de início e término foi comunicado.",
        ],
      },
      {
        title: "Depois do encontro",
        items: [
          "[ ] Cumpri acompanhamentos que prometi.",
          "[ ] Percebi quem participou e quem ficou à margem.",
          "[ ] Registrei uma dúvida de conteúdo para revisar.",
          "[ ] Protegi informações compartilhadas em confiança.",
          "[ ] Anotei um ajuste simples para o próximo encontro.",
        ],
      },
    ],
  },
  {
    slug: "roteiro-de-encontro",
    title: "Roteiro de encontro bíblico para preencher",
    eyebrow: "Material para imprimir",
    summary:
      "Uma folha de planejamento com campos para objetivo, passagem, perguntas, atividade, aplicação e acompanhamento.",
    audience: "Líderes, famílias e professores",
    pages: "2 páginas",
    instructions: [
      "Preencha primeiro objetivo e passagem.",
      "Escolha apenas uma atividade principal.",
      "Planeje menos perguntas do que imagina usar.",
    ],
    sections: [
      {
        title: "Identidade do encontro",
        items: [
          "Data: __________________  Público: _________________________",
          "Tema: ____________________________________________________",
          "Objetivo em uma frase: ___________________________________",
          "Passagem principal: ______________________________________",
        ],
      },
      {
        title: "Fluxo",
        items: [
          "Acolhimento / pergunta inicial: ____________________________",
          "Atividade ou jogo: ________________________________________",
          "Contexto necessário para a leitura: ________________________",
          "Pergunta 1 — observação: __________________________________",
          "Pergunta 2 — compreensão: _________________________________",
          "Pergunta 3 — aplicação: ___________________________________",
          "Oração e encerramento: ____________________________________",
        ],
      },
      {
        title: "Cuidado e continuidade",
        items: [
          "Adaptação para visitantes ou faixas etárias: _______________",
          "Materiais e responsáveis: __________________________________",
          "Acompanhamento necessário: _________________________________",
          "Próximo passo do grupo: ____________________________________",
        ],
      },
    ],
  },
  {
    slug: "cartoes-para-casais",
    title: "Cartões de conversa para casais",
    eyebrow: "Material para imprimir",
    summary:
      "Dezoito perguntas sobre rotina, cuidado, decisões e fé, pensadas para conversa particular e sem exposição pública.",
    audience: "Casais",
    pages: "2 páginas",
    instructions: [
      "Cada casal escolhe de duas a quatro perguntas.",
      "As respostas permanecem entre o casal, salvo se ambos desejarem compartilhar.",
      "Não use os cartões para resolver um conflito grave em público.",
    ],
    sections: [
      {
        title: "Cuidado no dia a dia",
        items: [
          "Em que momento da semana você mais sentiu meu apoio?",
          "Que tarefa poderia ser dividida de um jeito melhor?",
          "O que nos ajuda a desacelerar juntos?",
          "Que gesto simples comunica carinho para você?",
          "Que hábito de escuta queremos praticar?",
          "O que podemos celebrar nesta fase?",
        ],
      },
      {
        title: "Decisões e finanças",
        items: [
          "Que prioridade familiar queremos proteger neste mês?",
          "Qual decisão precisa de mais informação antes de ser tomada?",
          "O que significa contentamento para nós hoje?",
          "Como podemos planejar sem alimentar ansiedade?",
          "Que compromisso financeiro precisa estar claro para os dois?",
          "Como queremos praticar generosidade?",
        ],
      },
      {
        title: "Fé e futuro",
        items: [
          "Por qual área da nossa casa queremos orar juntos?",
          "Que passagem bíblica marcou nossa história?",
          "Como podemos servir alguém como casal?",
          "Que sonho precisa ser revisto ou retomado?",
          "Que conversa desejamos ter com mais calma?",
          "Qual próximo passo podemos confiar a Deus?",
        ],
      },
    ],
  },
  {
    slug: "plano-familiar-semanal",
    title: "Plano familiar de leitura para sete dias",
    eyebrow: "Material para imprimir",
    summary:
      "Sete encontros de dez minutos sobre gratidão, coragem, cuidado, perdão, escolhas, serviço e esperança.",
    audience: "Famílias",
    pages: "1 página",
    instructions: [
      "Escolha um horário curto e possível para a casa.",
      "Leia apenas a passagem indicada e uma pergunta.",
      "Marque o dia realizado sem transformar o plano em cobrança.",
    ],
    sections: [
      {
        title: "Dias 1 a 3",
        items: [
          "[ ] Dia 1 — Gratidão | Lucas 17:11-19 | O que podemos agradecer hoje?",
          "[ ] Dia 2 — Coragem | Daniel 1:8-17 | Que escolha certa pode exigir coragem?",
          "[ ] Dia 3 — Cuidado | Marcos 2:1-12 | Como os amigos ajudaram e quem podemos ajudar?",
        ],
      },
      {
        title: "Dias 4 a 7",
        items: [
          "[ ] Dia 4 — Perdão | Lucas 15:11-24 | O que torna um recomeço possível?",
          "[ ] Dia 5 — Escolhas | Lucas 10:38-42 | O que disputa nossa atenção?",
          "[ ] Dia 6 — Serviço | João 13:1-17 | Que tarefa podemos fazer com amor?",
          "[ ] Dia 7 — Esperança | Marcos 4:35-41 | Como podemos falar com Deus sobre o medo?",
        ],
      },
      {
        title: "Nossa semana",
        items: [
          "Uma frase que queremos lembrar: ____________________________",
          "Uma pessoa por quem vamos orar: ____________________________",
          "Uma atitude que praticaremos juntos: ________________________",
        ],
      },
    ],
  },
];

export function getPrintableResource(slug: string) {
  return printableResources.find((resource) => resource.slug === slug);
}
