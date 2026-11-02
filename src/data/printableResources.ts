export type PrintableSection = {
  title: string;
  description?: string;
  items: string[];
  table?: { caption: string; columns: string[]; rows: string[][] };
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
  answerKey?: { card: number; answer: string; reference: string }[];
};

export const printableResources: PrintableResource[] = [
  {
    slug: "cartoes-de-perguntas",
    title: "Cartões de perguntas para grupos",
    eyebrow: "Material para imprimir",
    summary:
      "Seis cartões de preferências e dezoito desafios bíblicos de nomes, objetos e sequências, com referências e gabarito separado para quem conduz.",
    audience: "Células, jovens e famílias",
    format: "A4",
    instructions: [
      "Imprima em A4, frente única, ou leia na tela. O gabarito fica depois dos cartões: separe essa parte antes de entregar ou mostrar as perguntas.",
      "Escolha de dois a quatro cartões por rodada. Leia um de preferências e depois um desafio bíblico; a consulta à Bíblia é livre e não há corrida para responder.",
      "Exemplo de rodada: no cartão 7, procurem o nome da cidade em Lucas 19:1 antes de conferir Jericó no gabarito. Uma pessoa pode ler e outra localizar o versículo; troquem se desejarem.",
      "Os cartões 1 a 6 não têm gabarito: preferências diferentes também valem, inclusive imaginadas. Qualquer pessoa pode passar a vez ou apenas acompanhar.",
      "Nos cartões 7 a 24, confira a referência e aceite palavras equivalentes da tradução utilizada. Nos desafios de sequência, ordene somente as ações apresentadas.",
    ],
    sections: [
      {
        title: "Acolhimento",
        description: "Escolha uma preferência real ou imaginada. Não há resposta certa.",
        items: [
          "1. Para uma rodada curta, você escolheria pistas, memória ou perguntas?",
          "2. Que lugar escolheria para um passeio imaginado: jardim, museu ou praia?",
          "3. Que habilidade teria curiosidade de aprender: desenhar, cozinhar ou tocar um instrumento?",
          "4. Que fruta escolheria para inventar uma receita?",
          "5. Que nome daria a uma equipe de jogos?",
          "6. Que tema escolheria para a próxima rodada: animais, lugares ou objetos da Bíblia?",
        ],
      },
      {
        title: "Personagens e lugares",
        description: "Localize o nome pedido na passagem. O apoio para conferir está no gabarito separado.",
        items: [
          "7. Em qual cidade Jesus entrou em Lucas 19:1?",
          "8. Qual era o nome do pai de Bartimeu em Marcos 10:46?",
          "9. Quem chegou primeiro ao sepulcro: Pedro ou o outro discípulo? Consulte João 20:3-4.",
          "10. Em que cidade estava a casa de Simão, o curtidor, onde Pedro se hospedava? Consulte Atos 10:5-6.",
          "11. De qual cidade era Lídia, a vendedora de púrpura? Consulte Atos 16:14.",
          "12. Qual profeta foi enviado a Nínive em Jonas 3:1-3?",
        ],
      },
      {
        title: "Objetos e ações",
        description: "Encontre o objeto, a quantidade ou a ação descrita; não é necessário responder de memória.",
        items: [
          "13. Quantos pães e quantos peixes os discípulos disseram ter em Marcos 6:38?",
          "14. Sobre o que Jesus dormia na parte de trás do barco em Marcos 4:38?",
          "15. O que a mulher acende para procurar a moeda perdida em Lucas 15:8?",
          "16. Que dois alimentos estavam sobre as brasas ou junto delas quando os discípulos chegaram à terra em João 21:9?",
          "17. Com qual instrumento Miriã saiu, acompanhada pelas mulheres, em Êxodo 15:20?",
          "18. O que os amigos abriram para baixar o leito do paralítico em Marcos 2:4?",
        ],
      },
      {
        title: "Coloque em ordem",
        description: "Ordene A, B e C conforme cada recorte. As letras estão misturadas; confira depois na Bíblia.",
        items: [
          "19. Lucas 19:4-6: A) Zaqueu desce; B) Jesus olha para cima e o chama; C) Zaqueu sobe na árvore. Qual é a ordem?",
          "20. Marcos 4:38-39: A) o vento se aquieta; B) os discípulos acordam Jesus; C) Jesus repreende o vento. Qual é a ordem?",
          "21. Jonas 3:3-4: A) Jonas vai a Nínive; B) Jonas começa a anunciar a mensagem; C) Jonas se levanta. Qual é a ordem?",
          "22. Lucas 15:8-9: A) a mulher encontra a moeda; B) chama amigas e vizinhas; C) procura a moeda. Qual é a ordem?",
          "23. João 20:6-8: A) o outro discípulo entra; B) Pedro vê os lençóis; C) Pedro entra. Qual é a ordem?",
          "24. Atos 16:14-15: A) Lídia ouve; B) Lídia convida a equipe para sua casa; C) Lídia é batizada com os de sua casa. Qual é a ordem?",
        ],
      },
    ],
    answerKey: [
      { card: 7, answer: "Jericó.", reference: "Lucas 19:1" },
      { card: 8, answer: "Timeu.", reference: "Marcos 10:46" },
      { card: 9, answer: "O outro discípulo. O recorte não o identifica pelo nome.", reference: "João 20:3-4" },
      { card: 10, answer: "Jope.", reference: "Atos 10:5-6" },
      { card: 11, answer: "Tiatira; não confunda sua cidade de origem com o local do encontro.", reference: "Atos 16:14" },
      { card: 12, answer: "Jonas.", reference: "Jonas 3:1-3" },
      { card: 13, answer: "Cinco pães e dois peixes.", reference: "Marcos 6:38" },
      { card: 14, answer: "Uma almofada, também chamada de travesseiro em algumas traduções.", reference: "Marcos 4:38" },
      { card: 15, answer: "Uma candeia ou lâmpada, conforme a tradução.", reference: "Lucas 15:8" },
      { card: 16, answer: "Peixe e pão.", reference: "João 21:9" },
      { card: 17, answer: "Um pandeiro; outras traduções usam tamborim ou adufe.", reference: "Êxodo 15:20" },
      { card: 18, answer: "O telhado ou cobertura da casa.", reference: "Marcos 2:4" },
      { card: 19, answer: "C, B, A: sobe, é chamado e desce.", reference: "Lucas 19:4-6" },
      { card: 20, answer: "B, C, A: acordam Jesus, ele repreende o vento e o vento se aquieta.", reference: "Marcos 4:38-39" },
      { card: 21, answer: "C, A, B: levanta-se, vai a Nínive e começa a anunciar a mensagem.", reference: "Jonas 3:3-4" },
      { card: 22, answer: "C, A, B: procura, encontra e chama amigas e vizinhas. São as ações selecionadas, não todas as da parábola.", reference: "Lucas 15:8-9" },
      { card: 23, answer: "C, B, A: Pedro entra e vê os lençóis; depois o outro discípulo entra.", reference: "João 20:6-8" },
      { card: 24, answer: "A, C, B: ouve, é batizada com os de sua casa e faz o convite.", reference: "Atos 16:14-15" },
    ],
  },
  {
    slug: "folha-de-pontuacao",
    title: "Folha de pontuação para jogos bíblicos",
    eyebrow: "Material para imprimir",
    summary:
      "Uma tabela para até seis equipes e cinco perguntas, com regras de registro, exemplo de soma e espaço para uma descoberta, sem bônus por comportamento.",
    audience: "Grupos e eventos",
    format: "A4",
    instructions: [
      "Escolha uma escala antes de começar: na rodada oral deste modelo, 1 ponto por acerto e 0 por tentativa incorreta; no Modo Grupo, copie os pontos do jogo, com 10 pelo acerto inicial e 5 pelo rebote, quando ativado. Não misture as escalas.",
      "Cada coluna corresponde a uma pergunta. Registre os pontos na linha de quem respondeu; use um traço quando a equipe não teve tentativa, em vez de registrar um erro que não aconteceu.",
      "Some somente os números para obter o total da equipe. Empates permanecem empates, a menos que tenham combinado outra regra antes. Não acrescente bônus por colaboração ou rapidez.",
      "Use outra folha se houver mais de cinco perguntas e some os totais das folhas ao final. No Modo Grupo, a tela continua sendo a referência do placar; a folha é um registro manual, não sincronizado.",
    ],
    sections: [
      {
        title: "Equipes e perguntas",
        description: "Preencha o nome de cada equipe. Nas colunas 1 a 5, anote pontos ou um traço para quem não tentou; some os números no Total.",
        items: [],
        table: {
          caption: "Placar manual: seis equipes e cinco perguntas",
          columns: ["Equipe", "1", "2", "3", "4", "5", "Total"],
          rows: [
            ["Equipe 1: __________", "____", "____", "____", "____", "____", "____"],
            ["Equipe 2: __________", "____", "____", "____", "____", "____", "____"],
            ["Equipe 3: __________", "____", "____", "____", "____", "____", "____"],
            ["Equipe 4: __________", "____", "____", "____", "____", "____", "____"],
            ["Equipe 5: __________", "____", "____", "____", "____", "____", "____"],
            ["Equipe 6: __________", "____", "____", "____", "____", "____", "____"],
          ],
        },
      },
      {
        title: "Combinados e conferência",
        description: "Escolha uma escala: rodada oral, 1 por acerto e 0 por erro; Modo Grupo, 10 por acerto inicial ou 5 por rebote ativado. Não misture escalas nem dê bônus por comportamento. Exemplo oral: A registra 1, traço, 0, traço, 1 e soma 2. Exemplo digital: A erra (0); B acerta o rebote (5); as demais recebem traço. Se houver mais de cinco perguntas, use outra folha e some seus totais no final. Sem regra de desempate prévia, mantenha o empate.",
        items: [
          "Formato e escala escolhidos: ______________________________",
          "Regra de empate combinada antes de jogar: __________________",
          "Totais das folhas anteriores, se houver: ___________________",
        ],
      },
      {
        title: "Uma descoberta, sem pontos extras",
        items: [
          "Uma forma de colaboração observada no grupo: _______________",
          "Pergunta que queremos conferir novamente: __________________",
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
      "Doze verificações para preparar uma sessão de jogos e leitura, com ações para pendências e um registro de ajuste após o encontro.",
    audience: "Líderes e anfitriões",
    format: "A4",
    instructions: [
      "Use as duas primeiras seções antes da chegada e a última depois. Marque um item somente quando o que ele descreve estiver pronto; uma pendência pede ajuste, não uma marcação automática.",
      "O exemplo desta folha acompanha a Noite de jogos bíblicos de 75 minutos. Para outro roteiro, troque jogo, passagem e duração, mantendo as perguntas de conferência.",
      "Não precisa cumprir uma pontuação de preparo. Se faltar uma referência conferida ou uma regra clara, retire esse item da rodada até revisá-lo. Se faltar conexão, use uma alternativa oral já preparada.",
      "Registre mudanças de conteúdo ou organização, não nomes, respostas individuais ou dificuldades pessoais dos participantes.",
    ],
    sections: [
      {
        title: "Antes: conteúdo e regras",
        description: "Caso de uso: sessão de 75 minutos para 6 a 16 pessoas, com duas equipes. Ajuste ao roteiro escolhido; a duração é uma sugestão, não uma medição de uso.",
        items: [
          "[ ] Escolhi o roteiro e consigo explicar o objetivo. Se não: escolha uma atividade, em vez de tentar usar todos os jogos.",
          "[ ] Conferi perguntas, respostas e referências da rodada preparada. Se houver dúvida: retire a pergunta até conferir, sem improvisar um gabarito.",
          "[ ] Testei a configuração: duas equipes, tema geral, cinco perguntas, Sem tempo e rebote desativado no Modo Grupo. Se usar outro formato: anote suas regras antes de começar.",
          "[ ] Sei como reduzir a sessão. No exemplo: ao minuto 45, conclua a referência em andamento; se houver atraso, omita o bloco de frases e siga ao fechamento.",
        ],
      },
      {
        title: "Antes: espaço e recursos",
        description: "O exemplo usa um aparelho compartilhado. Impressão, projetor, prêmios e celulares individuais não são necessários.",
        items: [
          "[ ] Testei o aparelho e a leitura da tela. Se o texto não estiver confortável: quem conduz pode ler em voz alta; não dependa só da projeção.",
          "[ ] Guardei perguntas, alternativas, gabaritos e referências numa anotação que abre sem internet. Se não: prepare a rodada oral antes; uma aba aberta não garante acesso offline.",
          "[ ] Há assentos, passagem livre e uma forma de acompanhar a leitura. Se faltar apoio: ajuste o espaço e combine a leitura por quem conduz; com crianças, confirme um adulto responsável.",
          "[ ] Comuniquei início, término e combinados: consulta, releitura e possibilidade de apenas observar. Se alguém chegar depois: explique as regras antes da próxima pergunta.",
        ],
      },
      {
        title: "Depois do encontro",
        description: "Registre somente o necessário para melhorar a próxima sessão, sem avaliar conhecimento ou participação de pessoas.",
        items: [
          "[ ] Anotei uma instrução que precisou de explicação extra. Próximo ajuste: escrever um exemplo antes de reutilizá-la.",
          "[ ] Registrei enunciado e referência de alguma dúvida, se houve. Enquanto não conferir: não reutilize a pergunta por pontos.",
          "[ ] Comparei o tempo previsto com o usado. Se a consulta demorou: reduza a quantidade de perguntas na próxima sessão, não o tempo de leitura.",
          "[ ] Escolhi um ajuste de organização. Registro: ____________________. Se não houver ajuste identificado, anote isso sem inventar um problema.",
        ],
      },
    ],
  },
  {
    slug: "roteiro-de-encontro",
    title: "Roteiro de encontro bíblico para preencher",
    eyebrow: "Material para imprimir",
    summary:
      "Um modelo em branco para distribuir o tempo, preparar duas perguntas com apoio de resposta e definir uma alternativa se faltar conexão ou houver atraso.",
    audience: "Líderes, famílias e professores",
    format: "A4",
    instructions: [
      "Defina público, duração disponível, objetivo e uma passagem antes de escolher a atividade. O objetivo deve dizer o que será possível conferir ao final, como ordenar quatro ações da narrativa.",
      "Distribua os minutos na tabela e some antes de começar. Exemplo de 20 minutos: 3 para acolher, 5 para ler, 7 para uma atividade e 5 para conferir e encerrar. Os tempos são sugestões de organização, não medidos em uso real.",
      "Prepare até duas perguntas, anotando a resposta de apoio e o versículo que a sustenta. Escolha uma atividade principal e registre o que pode ser retirado se a consulta demorar.",
      "Se usar um jogo digital, teste a conexão e prepare uma alternativa oral com perguntas, respostas e referências. Não inclua nomes completos, relatos pessoais ou dados sensíveis na folha.",
    ],
    sections: [
      {
        title: "Identidade do encontro",
        items: [
          "Data: __________________  Público: _________________________",
          "Duração disponível: __________  Horário de término: ________",
          "Tema: ____________________________________________________",
          "Objetivo em uma frase: ___________________________________",
          "Passagem principal: ______________________________________",
        ],
      },
      {
        title: "Distribua o tempo",
        description: "Some os minutos e compare com a duração disponível. Exemplo de 20 minutos: 3 + 5 + 7 + 5. A soma organiza o roteiro; não garante o ritmo de cada grupo.",
        items: [],
        table: {
          caption: "Plano de tempo e instruções do encontro",
          columns: ["Etapa", "Minutos", "O que ler ou fazer"],
          rows: [
            ["Acolhimento", "______", "____________________"],
            ["Leitura", "______", "____________________"],
            ["Atividade", "______", "____________________"],
            ["Conferência e encerramento", "______", "____________________"],
            ["Total", "______", "Compare com a duração disponível"],
          ],
        },
      },
      {
        title: "Prepare a leitura e as perguntas",
        description: "Escolha perguntas que possam ser conferidas no recorte lido. O apoio é para quem conduz; não exija resposta de memória.",
        items: [
          "Contexto em uma frase: ____________________________________",
          "Pergunta 1: _______________________________________________",
          "Resposta de apoio e versículo: ____________________________",
          "Pergunta 2, se houver tempo: _______________________________",
          "Resposta de apoio e versículo: ____________________________",
        ],
      },
      {
        title: "Combinados e plano alternativo",
        description: "Se atrasar, reduza perguntas ou contribuições e preserve a leitura e a conferência. Participar por escuta ou passar a vez são opções.",
        items: [
          "Como acompanhar sem falar ou usar aparelho próprio: ________",
          "Materiais e responsáveis: __________________________________",
          "O que retirar se faltar tempo: ____________________________",
          "Alternativa sem internet já preparada: ____________________",
          "Depois: uma instrução ou referência para revisar: __________",
        ],
      },
    ],
  },
  {
    slug: "cartoes-para-casais",
    title: "Cartões de conversa para casais",
    eyebrow: "Material para imprimir",
    summary:
      "Dezoito cartões para leitura na mesa: doze de preferências e atividades imaginadas e seis bíblicos, cinco deles com temas também usados no guia para casais.",
    audience: "Casais",
    format: "A4",
    instructions: [
      "Imprima em A4, recorte pelas linhas e escolham de dois a quatro cartões. O recorte é opcional: também podem ler na tela.",
      "É possível passar qualquer cartão, apenas ouvir ou responder com uma ideia imaginada. Não há gabarito nas categorias Preferências e Atividades juntos.",
      "Exemplo de preferência: pistas ou memória? Uma resposta possível é pistas, porque gosto de descobrir aos poucos. Não é necessário concordar.",
      "Para os cartões bíblicos, mantenham o texto aberto. Exemplo: em Marcos 1:16, André aparece com seu irmão Simão; localizem os nomes antes de responder.",
      "Os cartões de Belém, Simão e André, Caná, pesca e fabricação de tendas retomam cinco temas do guia Quiz bíblico para casais, agora sem alternativas. Escolham uma versão para não repetir; Zaqueu é a pergunta diferente deste material.",
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
