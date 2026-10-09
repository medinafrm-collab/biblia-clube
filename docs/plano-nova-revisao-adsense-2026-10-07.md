# Plano para uma nova revisão do AdSense

Revisão realizada em 7 de outubro de 2026. Projeto: Bíblia Clube.

## Atualização local de 9 de outubro

As descrições do diagnóstico abaixo retratam o estado encontrado em 7 de outubro, não todas as correções posteriores. Os onze artigos, onze dinâmicas e 290 perguntas já passaram pela revisão local assistida. Agora os oito temas têm contextos próprios; os outros cinco jogos têm exemplos comentados sem depender da interação. Materiais, responsabilidade editorial e adaptações do planejador também foram revistos. Nenhuma publicação foi feita.

O cronograma do planejador foi corrigido de forma substantiva: seus núcleos curtos são separados das instruções integrais das dinâmicas e os testes conferem os subtempos de cada bloco. A autorização anterior para adaptar Planejar juntos já foi atendida; os cartões de casais também foram alinhados a atividades leves, sem o bloco financeiro.

A leitura e aprovação pelo responsável continuam pendentes. Use [revisao-responsavel-2026-10-09.md](./revisao-responsavel-2026-10-09.md) para registrá-las. Resultados e pendências consolidados estão em [fechamento-revisao-local-2026-10-09.md](./fechamento-revisao-local-2026-10-09.md). Não tratar revisão local, simulação de terceiros ou aprovação de build como validação das contas Google ou da versão publicada.

## Decisão atual

Ainda não solicitar nova revisão. As melhorias anteriores estão publicadas, mas permanecem lacunas editoriais concretas e surgiu uma pendência de atualização de dependências. A ordem proposta é corrigir a base técnica, aprofundar o acervo existente, comprovar a revisão pelo responsável e validar a publicação antes do novo pedido.

O Google informou "conteúdo de baixo valor", conforme a captura da conta, com atualização em 18/09/2026. Isso não identifica a página responsável nem comprova uma causa técnica específica. As hipóteses editoriais abaixo são uma avaliação do projeto, não uma explicação oficial da decisão.

Esta etapa produziu diagnóstico e plano. Não modificou a aplicação, os textos públicos, configurações de contas, anúncios, domínio ou produção.

## Evidências verificadas agora

- Código local na branch `main`, commit `292e741`, de 09/09/2026. Antes desta revisão, apenas `marketing/` e `tmp/` estavam sem rastreamento no Git.
- Stack instalada: Next.js 16.3.1, React/React DOM 19.2.4, TypeScript e Tailwind CSS 4. Conteúdo em arquivos TypeScript, sem CMS editorial.
- Sitemap publicado e inventário local coincidem: 59 URLs, sem diferenças.
- As 59 URLs responderam HTTP 200, com canonical, um H1 no conteúdo principal e texto no HTML inicial. Todas declaram `index, follow`.
- O HTML inicial foi inspecionado sem executar JavaScript. Isso comprova disponibilidade do conteúdo inicial, não indexação efetiva nem que o Google avaliou essas páginas.
- Home e quiz temático responderam 200 também com o User-Agent `Mediapartners-Google`. Esse teste não simula o IP ou todo o funcionamento do rastreador real.
- `robots.txt` responde 200 e permite rastreamento.
- `ads.txt` responde 200 com a linha do publisher `pub-8150008386108071`, tanto com `www` quanto sem `www`. O aviso "Não encontrado" da captura não corresponde à disponibilidade atual observada. Falta conferir o novo status dentro da conta.
- Acervo público: 11 artigos, 6 guias, 11 dinâmicas e 6 materiais. Jogos: 290 perguntas de quiz em 8 temas, 24 personagens em Quem sou eu?, 24 pares de memória, 6 temas de associação e 20 frases.
- `npm run check` concluído com saída 0: validação estrutural de conteúdo, 12 testes, lint, TypeScript e build de produção aprovados. O build gerou 67 páginas/recursos estáticos, número distinto das 59 URLs editoriais do sitemap.
- `npm audit --omit=dev` encontrou 3 pacotes afetados: 1 crítico e 2 altos. Esses avisos não são falhas de build nem explicam a rejeição do AdSense.
- As três páginas pausadas anteriormente continuam respondendo 404: conversas sensíveis, encontro de casais sobre finanças e quando a mente acelera.

Registros gerados nesta revisão:

- `tmp/audit-2026-10-07/public-pages.json`: respostas, canonical, robots e aproximação do texto principal das 59 URLs.
- `tmp/audit-2026-10-07/check.log`: verificações locais completas.
- `tmp/audit-2026-10-07/dependency-audit.json`: auditoria de dependências.

Limites: não houve nova bateria visual/E2E, medição atual de Core Web Vitals, acesso ao Search Console, GA4 ou painel AdSense. Relatórios de navegador/Lighthouse existentes são de setembro e não foram apresentados como medições atuais. Não foi realizada investigação de comprometimento nem teste de exploração das vulnerabilidades.

## Diagnóstico editorial

A hipótese prioritária é que parte do acervo entrega menos utilidade e diferenciação do que os títulos prometem. A base de SEO e a existência de texto renderizado melhoraram, mas isso não assegura que o conteúdo seja suficientemente original e útil para monetização.

Exemplos observados:

1. `/biblioteca/roteiro-completo-de-celula-em-60-minutos` anuncia encontro pronto, mas manda o condutor escolher uma passagem, preparar perguntas e selecionar uma dinâmica. Oferece a estrutura de tempo; falta o encontro completo executável.
2. `/biblioteca/plano-de-quatro-encontros-em-marcos` oferece leituras e perguntas pertinentes, porém pouco contexto ou apoio para conduzir cada sessão. Pode ser um bom recurso se cada encontro for desenvolvido, sem virar comentário teológico especializado.
3. `/biblioteca/jogos-biblicos-sem-impressao` tem sete sugestões curtas. Faltam exemplos prontos de acontecimentos, pistas e respostas; também falta conectar o formato de três pistas ao jogo Quem sou eu? já existente.
4. `/biblioteca/culto-domestico-com-criancas` apresenta um roteiro genérico. Falta demonstrar uma atividade completa com passagem, perguntas e adaptações concretas por idade.
5. As 11 dinâmicas compartilham estrutura semelhante e instruções resumidas. Em `planejar-juntos`, por exemplo, são solicitados cartões e cenários que o visitante precisa criar.
6. Na base de quiz, 276 das 290 explicações têm menos de 20 palavras; 49 referências não informam versículos específicos. Uma explicação curta ou uma referência ampla não é necessariamente errada, mas a predominância de respostas apenas reafirmadas reduz o valor didático agregado.
7. Memória, Ligue os Pares e Complete a Frase possuem orientações indexáveis, mas os exemplos comentados específicos ficam principalmente na interação. O texto estático explica o formato mais do que demonstra o conteúdo do jogo.
8. O conteúdo relacionado dos quizzes às vezes é apenas genericamente próximo: o tema Mulheres da Bíblia aponta para inclusão de visitantes, por exemplo. O relacionamento pode ser mais útil com referências e jogos diretamente ligados às personagens.

Contagem de palavras não é critério de aprovação. Muitos artigos têm aproximadamente 300 a 450 palavras de corpo, enquanto as páginas completas incluem títulos, navegação interna e recomendações. Isso apenas ajudou a localizar onde faltam exemplos. Um material imprimível curto e funcional pode ser útil; um artigo longo e repetitivo pode continuar fraco.

## Inventário editorial para decidir as revisões

Classificação relativa ao acervo, sem equivaler a um julgamento do Google.

### Artigos da Biblioteca: 11

| Caminho após `/biblioteca/` | Avaliação atual | Entrega necessária |
| --- | --- | --- |
| `como-transformar-respostas-erradas-em-aprendizado` | Mais forte | Manter o exemplo completo e conferir a revisão humana. Usar como referência de utilidade, sem copiar seu molde para todos os artigos. |
| `como-montar-uma-noite-de-jogos-biblicos` | Aceitável, precisa aprofundar | Sessão pronta, seleção concreta de jogos/perguntas, configuração de equipes e plano alternativo sem internet. |
| `roteiro-completo-de-celula-em-60-minutos` | Prioridade alta: promessa incompleta | Passagem definida, contexto breve, dinâmica pronta, perguntas com apoio ao condutor e fechamento coerente. |
| `como-incluir-pessoas-timidas-e-visitantes` | Aceitável | Exemplo de uma atividade adaptada, frases de acolhimento e alternativas sem participação obrigatória. |
| `culto-domestico-com-criancas` | Prioridade alta: roteiro pouco concreto | Uma sessão integral de 15 minutos, exemplos por idade e propostas realmente prontas para as semanas seguintes. |
| `quiz-para-escola-biblica-dominical` | Precisa revisão | Seleção fixa de questões com gabarito comentado, objetivo de revisão e adaptação ao nível da turma; diferenciar do guia de quiz em células. |
| `jogos-biblicos-sem-impressao` | Prioridade alta: lista breve | Regras completas e exemplo jogável em cada formato, com acesso aos jogos correspondentes. |
| `como-adaptar-uma-dinamica-por-idade` | Precisa revisão | Mostrar a mesma atividade em versões concretas, em vez de apenas listar recomendações por idade. |
| `plano-de-quatro-encontros-em-marcos` | Prioridade alta: apoio insuficiente | Preparação, cronograma, observações textuais e apoio para as perguntas dos quatro encontros. |
| `plano-de-leitura-de-atos-com-jogos` | Precisa revisão | Detalhar as seis etapas com leituras, exemplos de perguntas e jogos compatíveis; evitar repetir o plano de Marcos. |
| `como-preparar-um-encontro-para-jovens` | Precisa revisão | Uma sessão de exemplo e decisões de preparação demonstradas; diferenciar da oficina do guia de dinâmicas para jovens. |

### Guias: 6

Os seis guias já apresentam exemplos, perguntas, estudos ou intervenções mais completos. São os melhores candidatos para formar o núcleo editorial, sujeitos à confirmação humana de precisão e adequação:

- `/guias/como-usar-quiz-biblico-em-celulas`
- `/guias/dinamicas-biblicas-para-jovens`
- `/guias/jogos-biblicos-para-grupos`
- `/guias/quiz-biblico-para-casais`
- `/guias/como-conduzir-uma-celula-participativa`
- `/guias/ideias-para-estudo-biblico-em-grupo`

Não repetir automaticamente a expansão anterior desses guias. Verificar precisão, sobreposição com os artigos e aderência ao escopo leve definido pelo responsável.

### Dinâmicas: 11

Todas precisam de avaliação de execução: quantidade e conteúdo dos cartões, situações de exemplo, tempo por etapa, adaptações e fechamento. Priorizar gratidão, associação, acolhimento e colaboração:

- `/dinamicas-para-celulas/pontes-de-gratidao`
- `/dinamicas-para-celulas/uma-mesa-muitas-historias`
- `/dinamicas-para-celulas/maos-que-servem`
- `/dinamicas-para-celulas/amizades-que-edificam`

As demais são `verdade-ou-pressao`, `escuta-que-aproxima`, `planejar-juntos`, `rotina-com-proposito`, `casa-que-cresce`, `digital-com-proposito` e `boas-novas-em-uma-frase`. `planejar-juntos` ainda aborda decisões financeiras. Isso não é uma infração comprovada, mas merece decisão explícita porque o responsável optou por evitar assuntos que demandem assessoria. Proposta: transformar em planejamento neutro de atividades ou pausar; não fazer essa alteração sem discutir a decisão.

### Jogos, ferramenta e materiais

| Grupo | Avaliação | Próxima melhoria |
| --- | --- | --- |
| 8 URLs `/quiz-biblico*` | Base indexável aceitável; qualidade didática ainda desigual | Revisar explicações e referências; exemplos temáticos próprios e relações mais relevantes. |
| `/quem-sou-eu` | Boa proposta; contexto estático pode demonstrar melhor o jogo | Um exemplo fora da rodada pontuada, pistas comentadas e inclusão na Biblioteca. |
| `/ligue-os-pares`, `/complete-a-frase`, `/jogo-da-memoria-biblico` | Prioridade alta: predominam instruções | Exemplos reais comentados, passagem/fonte e uso prático próprio de cada formato. |
| `/modo-grupo` | Ferramenta útil; configuração ocupa o início | Sessão demonstrada com placar, regras e perguntas concretas; não repetir o guia. |
| `/monte-seu-encontro` | Diferencial útil; necessita demonstração e validação editorial | Exemplo inicial explicado, justificar as escolhas e testar impressão/compartilhamento. As 64 combinações estruturais passaram nos testes. |
| 6 URLs `/materiais/*` | Avaliar como recurso, não como artigo | Conferir impressão, entrega prometida e incluir exemplo preenchido/instruções quando necessário. `roteiro-de-encontro` é a prioridade. |
| `/`, `/biblioteca` | Entradas úteis | Exibir os recursos editoriais mais completos e facilitar a distinção entre jogo, guia e material. |
| `/guias`, `/materiais`, `/desafios-por-tema`, `/dinamicas-para-celulas` | Índices/catálogos | Organização clara e seleção com finalidade; evitar expansão com textos artificiais. |
| Institucionais | Confiança e suporte, não acervo principal | Sobre/metodologia honestos, autoria responsável, contato e políticas coerentes com o funcionamento real. Não adicionar texto apenas para inflar a página Contato. |

## Plano sequencial

### 1. P0 técnico: atualizar dependências com correção de segurança

Status em 07/10/2026: concluído localmente, com pendência upstream de desenvolvimento triada. Next/eslint-config-next 16.3.8, sharp 0.35.5 e source-map-js 1.2.2; auditoria de produção zerada, checks e onze fluxos de navegador aprovados. Os cinco avisos restantes do audit completo vêm de `braces` no lint, sem versão corrigida. Detalhes e evidências em [seguranca-dependencias-2026-10-07.md](./seguranca-dependencias-2026-10-07.md). Não publicado.

Arquivos: `package.json`, `package-lock.json`.

- Next.js 16.3.1 foi sinalizado como crítico; sharp 0.35.3 e source-map-js 1.2.1 como altos. O audit informa correções disponíveis.
- Avaliar atualização compatível do Next e seu eslint-config, com resolução corrigida das dependências transitivas. Os advisories consultados apontam Next 16.3.6 como versão corrigida para o mais recente dos três avisos do Next; confirmar novamente a versão-alvo antes da execução.
- Avaliar cada condição de exploração. O aviso de Windows depende da hospedagem em filesystem Windows; o de imagens envolve AVIF; o de `next/og` depende de entradas controladas por atacante em geração de SVG. As imagens OG do projeto são arquivos estáticos. A presença de uma versão afetada não comprova exploração do site publicado.
- Executar os checks e testes dos jogos após a atualização. Não aplicar `npm audit fix --force` de forma indiscriminada.

Concluído quando: versões corrigidas registradas, avisos críticos/altos relevantes resolvidos ou triados com justificativa verificável, build e fluxos principais aprovados. Uma publicação técnica de segurança poderá ser priorizada antes da revisão editorial, mediante autorização de deploy.

### 2. P1: aprofundar os artigos existentes, um por vez

Status em 08/10/2026: primeira revisão local dos onze artigos concluída e validada; dez reescritos e o artigo sobre respostas erradas conferido e ajustado pontualmente, preservando seu exemplo completo. Todos aguardam conferência humana do responsável, por isso o critério final da etapa ainda não está cumprido. Registro em [revisao-editorial-2026-10-07.md](./revisao-editorial-2026-10-07.md).

Arquivo principal: `src/data/editorialContent.ts`.

Começar pelo roteiro de célula em 60 minutos, depois No lar, Jogos digitais e plano de Marcos. Revisar os demais na sequência do inventário. Para cada página, entregar um exemplo executável, resolver a necessidade prometida, conferir referências e diferenciar o objetivo dos conteúdos vizinhos.

Corrigir também tempos de leitura: o roteiro de 60 minutos informa 9 minutos de leitura, o plano de Marcos informa 10 e Jogos digitais informa 7, apesar dos corpos breves. Recalcular a estimativa ou identificar separadamente tempo de leitura e tempo de preparação/aplicação.

Concluído quando: o visitante consegue aplicar o recurso sem criar sozinho os elementos essenciais; o responsável leu e aprovou a página; referências e links estão conferidos; datas só mudam quando houve revisão efetiva.

### 3. P1: revisar as dinâmicas e alinhar o escopo

Status em 08/10/2026: onze das onze revisadas e validadas localmente. Planejar juntos adaptado com autorização para uma atividade de jogos; Verdade ou pressão? usa cenas fictícias leves; Escuta que aproxima e Rotina com propósito não recolhem conflitos ou acordos domésticos; Casa que cresce é uma oficina de leitura, sem aconselhamento sobre criação de filhos; Digital com propósito não acessa contas ou mensagens; Boas notícias em uma frase pratica comunicação e respeito sem exigir testemunhos. Conferência humana e aplicação prática de todas continuam pendentes. As demais etapas do plano não estão concluídas. Registro em [revisao-dinamicas-2026-10-07.md](./revisao-dinamicas-2026-10-07.md).

Arquivo: `src/data/cellDynamics.ts`; template: `src/app/dinamicas-para-celulas/[slug]/page.tsx`.

Desenvolver os materiais citados e as etapas com exemplos concretos. Revisar as 11 individualmente. Dar prioridade aos temas leves e decidir o destino de `planejar-juntos`. Não reintroduzir as três páginas pausadas nem inventar assessoria profissional.

Concluído quando: materiais e execução estão completos, o tempo é plausível e nenhuma página exige aconselhamento que o projeto não pretende oferecer.

### 4. P1: aumentar o valor próprio dos jogos

Status em 09/10/2026: concluído o escopo local dos oito temas e dos outros cinco jogos. As 290 perguntas permanecem revisadas; todas as introduções e contextos foram conferidos integralmente sem JavaScript e os outros jogos têm dez exemplos comentados independentes da interação. Correções de referências e pistas, links relacionados, fluxos até o resultado e seis larguras validados. Registro em [revisao-jogos-2026-10-08.md](./revisao-jogos-2026-10-08.md). Conferência e aprovação pelo responsável continuam pendentes; conclusão local não equivale a revisão humana.

Arquivos: `src/data/quizQuestions.ts`, `quizQuestionExpansions.ts`, `quizQuestionJourneyThree.ts`, `quizTopicContext.ts`, `quizTopicEditorial.ts`, `src/components/QuizTopicPage.tsx`, páginas dos demais jogos.

- Selecionar uma jornada de cada tema para revisão inicial; depois conferir o restante da base existente.
- Trocar explicações que apenas repetem a alternativa por contexto útil quando houver algo a explicar. Não alongar artificialmente questões simples.
- Precisar referências quando isso facilita conferência; preservar capítulos inteiros quando forem realmente a fonte adequada.
- Acrescentar exemplos próprios e comentados às páginas de Memória, Pares, Frase e Quem sou eu?, sem revelar necessariamente a rodada pontuada.
- Melhorar links relacionados; perguntas frequentes iguais sobre cadastro ou funcionamento são legítimas, mas não devem ser a principal diferenciação dos temas.
- Remover a frase voltada à avaliação da página: "Estes exemplos permanecem visíveis para que o tema, a resposta e a fonte possam ser avaliados...". Usar uma introdução dirigida ao aprendizado do visitante.

Concluído quando: cada jogo demonstra conteúdo útil antes da interação e as respostas/referências passaram por conferência humana. Não criar centenas de questões novas para atingir volume.

### 5. P1: tornar a responsabilidade editorial verificável

Arquivos: `src/app/sobre/page.tsx`, `src/app/como-produzimos-conteudos/page.tsx`, modelo de artigos.

Já existem transparência sobre IA, autoria institucional e canais de contato. O próximo passo é confirmar que as declarações de conferência correspondem ao trabalho realizado. Identificação pessoal e pequena biografia real podem ajudar, mas não são apresentadas como requisito universal de aprovação. O responsável decide como quer se apresentar.

Manter um registro de revisão com página, data, pessoa responsável e referências conferidas. Acrescentar exemplos ou relatos reais apenas quando existirem; não usar imagens geradas como prova de encontros reais.

Concluído quando: processo e identificação são honestos, revisão substantiva está registrada e o leitor sabe como pedir correção.

### 6. P1: definir páginas e estados elegíveis para anúncios

Arquivo: `src/components/SiteIntegrations.tsx`; configuração externa de anúncios automáticos e CMP depende de autorização.

O loader AdSense está presente em 58 das 59 URLs; a política de privacidade é a exceção. Também apareceu no HTML de uma URL inexistente genérica que retornou 404. Isso comprova carregamento potencial, não que anúncios estejam sendo exibidos nem uma infração consumada.

Planejar exclusões para erro, contato e estados sem conteúdo suficiente; validar institucional, impressão e resultados. Proteger áreas de clique frequente dos jogos. Preservar o método de verificação de propriedade necessário e avaliar os efeitos da CMP antes de mudar o loader.

Concluído quando: elegibilidade explícita por página/estado, erro sem anúncios e ausência de posicionamentos que se confundam com controles. CMP, recusa e acesso à política testados no domínio publicado.

### 7. P2: navegação, materiais e inventário de indexação

Arquivos: `src/data/libraryItems.ts`, `src/app/sitemap.ts`, páginas de índices e materiais.

- Incluir Quem sou eu? na Biblioteca; hoje não está entre os itens do catálogo.
- Revisar sobreposição entre guias e artigos, preservando URLs nesta primeira etapa. Consolidar ou redirecionar apenas com análise específica.
- Reavaliar materiais como entregas funcionais: visualizar/imprimir de fato, testar campos e páginas prometidas e oferecer exemplos quando úteis.
- Tratar resultados de filtros/busca e combinações geradas conforme o funcionamento real. O planejador atual não cria dezenas de URLs para suas combinações; isso é positivo.
- Não aplicar `noindex` em massa. Indexação de busca e elegibilidade AdSense são assuntos distintos: `noindex` não impede o AdSense de avaliar uma página pública.
- Adicionar `lastModified` ao sitemap somente com datas verdadeiras e sustentáveis; não atualizar tudo a cada deploy.

Concluído quando: não há recursos principais omitidos, links públicos quebrados, rotas redundantes sem decisão ou URLs fracas criadas automaticamente.

### 8. P2: validar experiência e publicação

Executar testes funcionais de Home, Biblioteca/busca/filtros, cada jogo e resultado, roteiro/compartilhamento/impressão e institucionais. Conferir 320, 375, 768, 1024, 1280 e 1440 px, teclado, feedback acessível e console. Medir performance em build de produção; diferenciar medições de laboratório e dados reais de uso.

Publicar as melhorias somente após autorização. Depois conferir o domínio público, páginas prioritárias, arquivos técnicos, consentimento e ausência de regressões. Não tratar um build local aprovado como prova de que tudo foi publicado.

### 9. P1: fechar evidências no Google e solicitar revisão

Depende do responsável ou de acesso explicitamente autorizado:

- Search Console: inspecionar Home, Biblioteca, guias fortes, quatro artigos revisados e exemplos de jogos; conferir canonical escolhido, último rastreamento, indexação/exclusões e problemas de segurança/ações manuais.
- AdSense: atualizar a conferência do `ads.txt`, revisar mensagens de acesso/política e confirmar que o site correto está na conta. Não remover e cadastrar novamente sem motivo.
- Dados de uso: verificar quais páginas recebem visitantes e se as ferramentas são usadas; usar isso para melhorar o produto, sem comprar tráfego ou fabricar métricas.
- Registrar o conjunto concreto de mudanças publicadas após a recusa. Aguardar evidência de rastreamento das páginas principais, sem inventar prazo fixo que garanta aprovação.

Concluído quando: mudanças estão públicas, acessíveis, revisadas e rastreadas onde for verificável; pendências relevantes foram resolvidas. A decisão continua sendo do Google.

## O que depende de você

1. Ler e confirmar cada conteúdo revisado e as referências indicadas, no ritmo de uma página por vez.
2. Definir como apresentar sua responsabilidade pelo projeto e fornecer experiências próprias, caso existam.
3. Conferir as adaptações leves de Planejar juntos e dos cartões para casais, já aplicadas localmente; a decisão de adaptar a dinâmica foi atendida.
4. Conferir ou autorizar leitura dos dados de Search Console/AdSense quando chegarmos à etapa de conta. Nunca enviar senhas ou dados bancários.
5. Autorizar publicação das correções e, ao final, o pedido de nova revisão.

## Critérios para o próximo pedido

- [x] Pendências críticas/altas de dependências resolvidas ou triadas e mitigadas adequadamente no projeto local; pendência upstream do lint documentada.
- [x] Artigos e dinâmicas do catálogo revisados localmente segundo sua utilidade, com os exemplos prometidos; aprovação humana continua separada.
- [x] Jogos com conteúdo demonstrado e referências conferidas na revisão local assistida; explicações não se limitam sistematicamente a repetir a resposta.
- [ ] Responsabilidade editorial e conferência humana confirmadas.
- [x] Recursos principais acessíveis pela navegação e materiais funcionando nos testes locais.
- [x] Elegibilidade local de anúncios e exclusão de páginas de erro verificadas com terceiros simulados.
- [ ] CMP e experiência publicitária reais verificadas no domínio publicado.
- [x] Validação técnica, mobile e fluxos principais concluída no candidato local final.
- [ ] Versão final publicada com autorização e conferida no domínio.
- [ ] Search Console e status atual do AdSense conferidos; rastreamento das páginas principais verificado quando disponível.

## Ajustes ao plano anterior

O plano antigo sugeria ampliar o acervo para cerca de 30 conteúdos e cogitava notícias/arqueologia. A prioridade atual deve ser aprofundar o que já existe. Não há aqui uma meta obrigatória de artigos, palavras ou visitas. Notícias e assuntos especializados não são necessários para este ciclo e podem afastar o projeto do foco leve escolhido.

Novas imagens e mais jogos podem melhorar a experiência, mas não substituem utilidade, originalidade, conferência e conteúdo que cumpra sua promessa. IA não torna um recurso automaticamente inadequado; o problema é publicar sem revisão ou sem agregar valor. O Google também orienta a não escrever para uma suposta contagem de palavras preferida.

## Fontes consultadas

- [Requisitos de qualificação do AdSense](https://support.google.com/adsense/answer/9724?hl=pt-BR): conteúdo original, de qualidade e adequado ao público.
- [Site não está pronto para exibir anúncios](https://support.google.com/adsense/answer/12176698?hl=pt-BR): acesso, código, experiência e conteúdo exclusivo.
- [Telas sem conteúdo do editor](https://support.google.com/publisherpolicies/answer/11112688?hl=pt-BR): páginas sem valor, de erro/navegação e conteúdo automático sem curadoria.
- [Conteúdo útil e confiável](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-br): originalidade, experiência, precisão e satisfação do leitor; não estabelece contagem preferida de palavras.
- [Next.js em servidores Windows](https://github.com/advisories/GHSA-p293-qw3h-jr36).
- [Next.js e otimização AVIF](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4).
- [Next.js ImageResponse](https://github.com/advisories/GHSA-vcvr-r3jv-pc5j).

Essas fontes não estabelecem que um site de jogos será necessariamente recusado, nem fornecem uma receita ou garantia de aprovação. A recomendação atual é encerrar as etapas acima antes de solicitar outra revisão.
