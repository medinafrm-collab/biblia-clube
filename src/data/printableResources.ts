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
  format: string;
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
    format: "A4",
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
    format: "A4",
    instructions: [
      "Defina antes quantos pontos vale cada rodada.",
      "Use o campo Equipe que melhor colaborou para reconhecer escuta e participação.",
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
    format: "A4",
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
    format: "A4",
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
      "Dezoito cartões recreativos sobre preferências, atividades juntos e leitura bíblica, com exemplos e liberdade para pular qualquer pergunta.",
    audience: "Casais",
    format: "A4",
    instructions: [
      "Imprima em A4, recorte pelas linhas e escolham de dois a quatro cartões. O recorte é opcional: também podem ler na tela.",
      "É possível passar qualquer cartão, apenas ouvir ou responder com uma ideia imaginada. Não há gabarito nas categorias Preferências e Atividades juntos.",
      "Exemplo de preferência: pistas ou memória? Uma resposta possível é pistas, porque gosto de descobrir aos poucos. Não é necessário concordar.",
      "Para os cartões bíblicos, mantenham o texto aberto. Exemplo: em Marcos 1:16, André aparece com seu irmão Simão; localizem os nomes antes de responder.",
      "Compartilhar respostas com outras pessoas é opcional. A atividade não avalia o relacionamento nem pede histórias íntimas.",
    ],
    sections: [
      {
        title: "Preferências",
        description: "Escolham uma opção ou imaginem outra; respostas diferentes também valem.",
        items: [
          "Qual jogo você escolheria: pistas, memória ou perguntas?",
          "Para um passeio imaginado, você escolheria jardim, praia ou museu?",
          "Qual receita simples você teria curiosidade de experimentar?",
          "Você prefere descobrir uma história lendo ou ouvindo alguém contar?",
          "Em um jogo de palavras, você escolheria nomes, lugares ou objetos?",
          "Que música você escolheria para acompanhar uma tarde de jogos?",
        ],
      },
      {
        title: "Atividades juntos",
        description: "Ideias recreativas, sem compras, compromissos ou avaliação da rotina.",
        items: [
          "Como seria uma rodada de cinco minutos com um único celular?",
          "Que nome divertido vocês dariam a uma equipe de quiz?",
          "Qual passeio fictício caberia em uma tarde: parque, biblioteca ou exposição?",
          "Que dupla de ingredientes vocês combinariam numa receita imaginada?",
          "Que personagem bíblico vocês escolheriam para um jogo de três pistas?",
          "Que tema escolheriam para uma rodada: lugares, personagens ou histórias?",
        ],
      },
      {
        title: "Leitura bíblica",
        description: "Consultem as referências; as perguntas pedem informações do texto, não relatos pessoais.",
        items: [
          "Em Marcos 1:16, qual irmão aparece com Simão e o que faziam?",
          "Em Rute 1:19, a qual cidade as duas mulheres chegam?",
          "Em João 2:6, quantos recipientes de pedra são mencionados?",
          "Em Lucas 19:4-6, Zaqueu sobe ou desce primeiro? Confiram a sequência.",
          "Em Lucas 5:6-7, a quem os pescadores pedem ajuda?",
          "Em Atos 18:2-3, qual ofício é mencionado no encontro com Áquila e Priscila?",
        ],
      },
    ],
  },
  {
    slug: "plano-familiar-semanal",
    title: "Plano familiar de leitura para sete dias",
    eyebrow: "Material para imprimir",
    summary:
      "Sete sugestões de leitura com perguntas de observação e apoio para conferir, sem obrigação de completar uma semana ou compartilhar informações pessoais.",
    audience: "Famílias",
    format: "A4",
    instructions: [
      "Escolha uma leitura por ocasião, com adulto responsável quando houver crianças. Os dias são opções, não uma sequência obrigatória.",
      "Dez minutos são uma estimativa: 2 para combinar, 4 para ler, 3 para conferir uma pergunta e 1 para resumir. Se o trecho exigir mais, reduza itens ou divida a leitura; não apresse a criança.",
      "O adulto pode ler; apontar o versículo ou apenas ouvir são formas de participar. Não há avaliação da família, confissão ou cobrança de tarefa.",
    ],
    sections: [
      {
        title: "Dias 1 a 3",
        items: [
          "[ ] Dia 1 — Jesus recebe crianças | Marcos 10:13-16 | Quem foi trazido? Apoio: crianças, no 13. O que Jesus fez ao final? Recebeu e abençoou, no 16.",
          "[ ] Dia 2 — Zaqueu | Lucas 19:1-6 | O que ele fez para ver Jesus? Apoio: subiu numa árvore, no 4. Representem com palavras, sem subir em móveis.",
          "[ ] Dia 3 — Dois pares de irmãos | Marcos 1:16-20 | Quais são os pares? Apoio: Simão e André, no 16; Tiago e João, no 19.",
        ],
      },
      {
        title: "Dias 4 a 7",
        items: [
          "[ ] Dia 4 — Pães e peixes | João 6:8-13 | Quantos pães e peixes o menino tinha? Apoio: cinco pães e dois peixes, no 9; doze cestos recolhidos, no 13.",
          "[ ] Dia 5 — Um trabalho em comum | Atos 18:1-3 | Que ofício Paulo compartilhava com Áquila e Priscila? Apoio: fabricar tendas, no 3.",
          "[ ] Dia 6 — Materiais e habilidade | Êxodo 31:1-6 | Quem é nomeado e que trabalhos aparecem? Apoio: Bezalel, no 2; metais, pedras e madeira, nos 4-5. Não é necessário manusear ferramentas.",
          "[ ] Dia 7 — Palavra e luz | Salmos 119:105 | Que duas imagens aparecem? Apoio: lâmpada e luz. Aceite a redação da tradução utilizada.",
        ],
      },
      {
        title: "Registro opcional de leitura",
        items: [
          "Passagem que lemos: _______________________________________",
          "Uma palavra ou ação encontrada no texto: ___________________",
          "Uma referência que queremos reler: _________________________",
        ],
      },
    ],
  },
];

export function getPrintableResource(slug: string) {
  return printableResources.find((resource) => resource.slug === slug);
}
