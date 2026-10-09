# Revisão das dinâmicas — 7 de outubro de 2026

Item 3 em andamento. Revisão local, sem publicação. Por solicitação do responsável, avançamos para este item; os dez artigos restantes do item 2 continuam pendentes.

## Primeira dinâmica: Pontes de gratidão

Arquivo: `src/data/cellDynamics.ts`.
Rota preservada: `/dinamicas-para-celulas/pontes-de-gratidao`.

O roteiro anterior dependia de instruções genéricas, propunha dois bilhetes por pessoa e não explicava como atender até 30 participantes no tempo informado.

Correções locais:

- Um bilhete por pessoa, materiais completos e quatro exemplos fictícios prontos.
- Quatro etapas de 5, 5, 7 e 3 minutos: 20 minutos. Dois acréscimos de 5 minutos permitem a versão de 30 minutos.
- Até oito pessoas em conjunto; grupos de quatro a seis para públicos maiores, sem obrigação de ler todos os bilhetes.
- Contexto do Salmo 100 e distinção entre observação bíblica e aplicação criada pelo projeto.
- Perguntas com pontos de apoio para quem conduz.
- Participação voluntária, leitura assistida e cuidados com bilhetes identificáveis. Sem exposição de histórias dolorosas ou promessa de benefícios emocionais.
- Primeiro passo continua sendo leitura bíblica; segundo passo contém um núcleo completo para o criador de roteiro. Os blocos do criador têm seu próprio tempo, explicitamente distinguido do roteiro integral.

Referências conferidas na base local: Salmo 100:1-5, 1 Tessalonicenses 5:16-18 e Hebreus 10:24-25. A referência disponível não substitui a conferência editorial humana.

## Validações

- `npm run check` aprovado: estrutura do conteúdo, 12 testes, lint, TypeScript e build.
- Testes existentes verificam 64 combinações do criador e adaptações por duração.
- HTTP 200, um H1, conteúdo principal legível sem JavaScript e ausência de overflow horizontal em 320, 375, 768, 1024, 1280 e 1440 px.
- `git diff --check` aprovado.
- Evidências: `tmp/audit-2026-10-07/pontes-gratidao-validation.json` e `pontes-gratidao-375.png`.

## Pendências

Conferência do responsável: linguagem, adequação ao público, referências e tempo prático. Não houve aplicação real com participantes neste ciclo.

### Segunda rodada: três dinâmicas revisadas

- Uma mesa, muitas histórias: seis perguntas prontas, grupos de três a cinco, alternativas quando não houver afinidade comum, cuidados com lanche e cronograma de 30 ou 45 minutos.
- Mãos que servem: três cenas fictícias sobre organização do próprio encontro, autorização e participação voluntária; cronograma de 35 ou 50 minutos. Não propõe atendimento especializado nem exposição de beneficiários.
- Amizades que edificam: quatro cenas fictícias de jogos e convivência, semáforo com justificativas e reescrita opcional; cronograma de 35 ou 50 minutos. Não classifica colegas reais.

Em todos, o segundo passo oferece um núcleo utilizável pelo criador. O contexto bíblico é distinguido das escolhas práticas do roteiro. Títulos, rotas e públicos foram preservados. Conferidos na base local Provérbios 17:17 e 27:17, 1 Coríntios 15:29-34, Marcos 10:35-45, Gálatas 5:13, Tiago 2:14-17, Atos 2:42-47, Romanos 12:9-13 e Hebreus 13:1-2.

`npm run check` aprovado novamente. As três páginas responderam 200, com um H1, conteúdo disponível sem JavaScript e sem overflow nas seis larguras previstas. Evidência: `tmp/audit-2026-10-07/dynamics-three-validation.json`, com capturas mobile por slug. Teste prático com participantes e conferência editorial humana continuam pendentes.

Total: quatro das onze dinâmicas revisadas localmente. Permanecem sete: Verdade ou pressão?, Escuta que aproxima, Planejar juntos, Rotina com propósito, Casa que cresce, Digital com propósito e Boas notícias em uma frase. Nenhuma dessas sete foi alterada nesta rodada.

O responsável autorizou adaptar “Planejar juntos”. A rota e o público de casais foram preservados; a atividade agora é um planejamento em dupla de uma tarde de jogos fictícia. Inclui turnos, acolhimento de iniciantes, alternativa de pistas sem internet e cronograma de 30 ou 45 minutos. Não trata de finanças ou conflitos pessoais. Eclesiastes 4:9-10 e Gênesis 6:13-22 foram conferidos na base local. Cinco das onze dinâmicas estão revisadas localmente; restam seis, além da conferência humana.

Após essa adaptação, `npm run check` passou com 13 testes. A página também passou nas seis larguras, sem overflow, no teste `scripts/audit-ad-eligibility.mjs`.

“Quando a mente acelera” permanece pausada. Nenhuma página foi removida, nenhum slug foi alterado e nenhuma aprovação do AdSense foi solicitada.

## Sexta dinâmica: Verdade ou pressão? — 08/10/2026

Título, rota, público e duração de 35 a 45 minutos preservados. Categoria e objetivo ajustados para escolhas honestas em cenas fictícias de jogos. Retirada a coleta de bilhetes sobre pressões reais; os exemplos não procuram expor histórias pessoais ou oferecer aconselhamento.

Quatro cenas completas: erro de placar, consulta autorizada desqualificada por um colega, resposta fora do prazo e pedido de releitura ridicularizado. Materiais, respostas de apoio, perguntas e encerramento prontos. Etapas de 7, 5, 15 e 8 minutos somam 35; reescrita opcional acrescenta 10. O núcleo do segundo passo continua completo para o criador de roteiro, cujos blocos têm tempos próprios.

Efésios 4:25-32, Romanos 12:1-2 e 1 Timóteo 4:12 conferidos na base local. Efésios passa a ser a referência central; Daniel 1 deixa de ser indicado para o recorte agora adotado. Texto e aplicações de regras são distinguidos. Participação voluntária, leitura assistida e nenhuma cobrança de confissões ou promessas públicas.

`npm run check` aprovado com 13 testes, incluindo 64 combinações do criador, lint, TypeScript e build. HTTP 200, um H1, exemplos legíveis sem JavaScript e sem overflow nas seis larguras. `git diff --check` aprovado. Evidências: `tmp/audit-2026-10-07/verdade-20261008-validation.json` e `verdade-20261008-375.png`.

Total atual: seis das onze dinâmicas revisadas localmente. Restam Escuta que aproxima, Rotina com propósito, Casa que cresce, Digital com propósito e Boas notícias em uma frase. Conferência humana e aplicação prática continuam pendentes; nada foi publicado.

## Sétima dinâmica: Escuta que aproxima — 08/10/2026

Preservados título, rota, público e duração de 45 a 60 minutos. Prática leve de resumo e confirmação da fala, com temas de preferência, demonstração fictícia e duas cenas prontas. Retiradas solicitações de lembranças do relacionamento e compromissos de perdão; a atividade não avalia o casal nem exige relatos íntimos.

Etapas de 8, 5, 22 e 10 minutos somam 45; prática adicional acrescenta 15. O núcleo do segundo passo é completo para o criador de roteiro. Funções e compartilhamento voluntários, leitura assistida, opção de acompanhar sozinho ou em silêncio e plenário limitado a três contribuições.

Tiago 1:19-21, Eclesiastes 4:9-12 e Colossenses 3:12-14 conferidos na base local. Distinguida a prática proposta das orientações bíblicas, sem prometer resultados relacionais ou aconselhamento.

`npm run check` aprovado com 13 testes, incluindo 64 combinações do criador, lint, TypeScript e build. HTTP 200, um H1, exemplos disponíveis sem JavaScript e sem overflow nas seis larguras. `git diff --check` aprovado. Evidências: `tmp/audit-2026-10-07/escuta-20261008-validation.json` e `escuta-20261008-375.png`.

Total atual: sete das onze dinâmicas revisadas localmente. Restam Rotina com propósito, Casa que cresce, Digital com propósito e Boas notícias em uma frase. Conferência humana e aplicação prática continuam pendentes. Nada foi publicado.

## Oitava dinâmica: Rotina com propósito — 08/10/2026

Título, rota, público e duração de 40 a 55 minutos preservados. Substituídas listas da casa e acordos semanais por organização de uma mesa de leitura fictícia. Materiais, sequência de quatro tarefas, gabarito B, C, D, A, convite de ajuda e perguntas com apoio prontos. Não avalia divisão doméstica, não compara contribuições e não solicita relatos íntimos.

Etapas de 7, 5, 18 e 10 minutos somam 40; variação acrescenta 15. O núcleo do segundo passo permanece completo para o criador de roteiro. Papéis voluntários, alternativas de escuta e leitura assistida. Nenhum objeto real ou pesado é necessário; anotações pessoais são tratadas como privadas.

Conferidos Eclesiastes 4:9-10, Gálatas 6:1-5 e Colossenses 3:12-14 na base local. Distinguida cooperação na passagem de regras práticas de organização; sem promessa de efeito no relacionamento ou aconselhamento.

`npm run check` aprovado com 13 testes, incluindo 64 combinações do criador, lint, TypeScript e build. HTTP 200, um H1, exemplos disponíveis sem JavaScript e sem overflow nas seis larguras. `git diff --check` aprovado. Evidências: `tmp/audit-2026-10-07/rotina-20261008-validation.json` e `rotina-20261008-375.png`.

Total atual: oito das onze dinâmicas revisadas localmente. Restam Casa que cresce, Digital com propósito e Boas notícias em uma frase. Conferência humana e aplicação prática continuam pendentes. Nada foi publicado.

## Nona dinâmica: Casa que cresce — 08/10/2026

Título, rota, público e duração de 50 a 65 minutos preservados. Foco substituído de discussão sobre criação de filhos por oficina de preparação de leitura em família. Categoria e objetivo atualizados. Materiais, quatro situações de Deuteronômio 6:7, gabarito B, D, C, A e exemplo de leitura de sete minutos prontos. Não exige relatos familiares, decisões disciplinares ou compromisso de aplicação.

Etapas de 12, 5, 23 e 10 minutos somam 50; adaptação extra acrescenta 15. A duração é da preparação entre adultos, não de uma sessão com crianças. O segundo passo oferece núcleo completo ao criador de roteiro. Consulta, escrita, leitura assistida e observação voluntárias, sem avaliação de desenvolvimento ou aconselhamento.

Conferidos Deuteronômio 6:4-9, Salmos 127:3-5 e Efésios 6:1-4 na base local. Para o foco adotado, Deuteronômio é central e Efésios fica complementar; Salmos 127 deixou de ser listado por não ser necessário à atividade. Formato e tempos distinguidos das práticas descritas no texto.

`npm run check` aprovado com 13 testes, incluindo 64 combinações do criador, lint, TypeScript e build. HTTP 200, um H1, exemplos legíveis sem JavaScript e ausência de overflow nas seis larguras. `git diff --check` aprovado. Evidências: `tmp/audit-2026-10-07/casa-20261008-validation.json` e `casa-20261008-375.png`.

Total atual: nove das onze dinâmicas revisadas localmente. Restam Digital com propósito e Boas notícias em uma frase. Conferência humana e aplicação prática continuam pendentes. Nada foi publicado.

## Décima dinâmica: Digital com propósito — 08/10/2026

Preservados título, rota, público e duração de 35 a 45 minutos. Três cenas fictícias prontas abordam confirmação de informações, autorização para divulgar imagens e comentários respeitosos. Incluídos exemplos de respostas e convite fictício opcional. Não solicita perfis, mensagens, fotografias pessoais ou avaliação de hábitos digitais.

Etapas de 7, 5, 15 e 8 minutos somam 35; variação acrescenta 10. O segundo passo oferece um núcleo completo ao criador de roteiro. Participação, escrita e compartilhamento voluntários; nenhum aparelho ou conta é necessário. Não promete segurança de conteúdo nem diagnostica dependência.

Filipenses 4:8-9 e Salmos 101:1-4 conferidos na base local. Distinguida a aplicação proposta de regras digitais que não estão literalmente nas passagens. 1 Coríntios 6:12 deixou de ser listado por não ser necessário ao foco adotado.

`npm run check` aprovado com 13 testes, incluindo 64 combinações do criador, lint, TypeScript e build. HTTP 200, um H1, exemplos disponíveis sem JavaScript e ausência de overflow nas seis larguras. Evidências: `tmp/audit-2026-10-07/digital-20261008-validation.json` e `digital-20261008-375.png`.

Total atual: dez das onze dinâmicas revisadas localmente. Resta Boas notícias em uma frase. Conferência humana e aplicação prática continuam pendentes. Nada foi publicado.

## Décima primeira dinâmica: Boas notícias em uma frase — 08/10/2026

Título, rota, público e duração de 35 a 50 minutos preservados. Categoria alterada para Comunicação e respeito. Substituída a solicitação de experiências pessoais por três cenas fictícias prontas: explicar uma leitura, aceitar uma recusa e esclarecer uma palavra. Incluídos exemplos de frases e contraste entre convite e pressão. Não recolhe testemunhos, nomes, contatos ou compromissos.

Etapas de 7, 5, 15 e 8 minutos somam 35; criação opcional de convite fictício acrescenta 15. O segundo passo oferece uma prática curta completa ao criador de roteiro. Escrita, leitura assistida e observação são alternativas à encenação. Não exige aparelhos, divulgação real ou oração.

Marcos 5:18-20, Colossenses 4:5-6 e 1 Pedro 3:15-16 conferidos na base local. Diferenciado o relato específico de Marcos de uma exigência de testemunho pessoal. A aplicação de comunicação é proposta editorial, não técnica bíblica para obter adesões ou promessa de conversão.

`npm run check` aprovado com 13 testes, incluindo 64 combinações do criador, validação de conteúdo, lint, TypeScript e build. HTTP 200, um H1, exemplos disponíveis sem JavaScript e ausência de overflow em 320, 375, 768, 1024, 1280 e 1440 px. Evidências: `tmp/audit-2026-10-07/boas-20261008-validation.json` e `boas-20261008-375.png`.

Total atual: onze das onze dinâmicas revisadas localmente. Conferência humana e aplicação prática continuam pendentes; esta conclusão não encerra as demais etapas do plano nem garante aprovação no AdSense. Nada foi publicado.
