# Adaptação dos três recursos para escopo recreativo

10 de outubro de 2026. Alterações locais autorizadas após apresentação de as-is/to-be. Produção permanece na versão `aed7e77`; não houve commit, push ou deploy nesta etapa.

## Entregas

| URL preservada | Antes | Agora |
| --- | --- | --- |
| `/guias/dinamicas-biblicas-para-jovens` | Oficina sobre pressão/decisões, situações de risco, Daniel 1 e conclusão com arrependimento | Oficina de leitura de Lucas 19:1-6: três perguntas, seis frases para ordenar e quatro afirmações para conferir. Respostas apoiadas e cronograma sugerido de 35 min; opção de 20 min e participação voluntária. |
| `/guias/quiz-biblico-para-casais` | Aplicações ao relacionamento, comunicação/perdão e cuidado pastoral | Seis perguntas de fatos narrados sobre nomes, lugares, objetos, trabalho e colaboração. Quatro alternativas e um gabarito por questão, explicação, referência e observação complementar; sugestão de 15 min para três questões. Não promete as mesmas perguntas no quiz digital. |
| `/materiais/cartoes-para-casais` | Rotina, intimidade, sonhos, fé/futuro e perguntas recreativas misturadas | 18 cartões em três categorias de seis: Preferências, Atividades juntos e Leitura bíblica. Exemplos, consulta e direito de passar. Impressão e slug preservados. |

Resumos nos catálogos Guias e Biblioteca foram atualizados para refletir as entregas, sem modificar outros guias. Perguntas e dados da oficina estão em `src/data/recreationalGuides.ts`, seguindo a organização local de conteúdo em módulos de dados. As páginas continuam componentes de servidor; nenhum novo script de terceiros ou componente cliente foi acrescentado.

## Conferência bíblica

Gabaritos foram comparados ao texto disponível no leitor, Almeida 1819 (Bíblia Livre): Lucas 19:1-6, Rute 1:19, Marcos 1:16-20, João 2:6-7, Atos 18:2-3, Lucas 5:6-7 e Êxodo 4:29-30. As observações complementares usam também Rute 1:18-19. Os seis cartões bíblicos citam os mesmos recortes ou Lucas 19:4-6.

Cuidados de redação: recipientes/talhas/vasos e árvore/sicômoro aceitam equivalência entre traduções; uma altura de árvore não informada não é classificada como fato falso; apresentação do narrador não é tratada como ação de Zaqueu. As questões de casais perguntam pelos relatos, não usam personagens como regras para casamento. Não foram inventadas credenciais, revisão por especialistas ou aplicações práticas realizadas.

## Validação local

- `npm run check`: conteúdo, 47 testes, lint, TypeScript e build aprovados. Três novos testes verificam as seis perguntas/alternativas/referências, a sequência e soma dos tempos, e os 18 cartões/categorias.
- Três páginas HTTP 200, um H1 e canonical preservado; conteúdo e gabaritos disponíveis sem JavaScript.
- 18 verificações de responsividade: três páginas em 320, 375, 768, 1024, 1280 e 1440 px, sem overflow horizontal detectado.
- Nenhuma exceção de JavaScript detectada; axe sem violações nas regras WCAG 2 A/AA e 2.1 AA configuradas. Não constitui certificação manual de acessibilidade.
- Prévia dos cartões: duas páginas A4 no preset Chrome testado. Categorias e 18 perguntas presentes; texto dentro da folha; ambas as páginas renderizadas e inspecionadas. Quantidade de páginas varia com as configurações de impressão. Não foi alterado o CSS compartilhado.
- Checklist React: dados estáticos no servidor, keys estáveis, headings e listas semânticos, sem hooks ou novas chamadas assíncronas; metadata e dados estruturados dos guias atualizados com a data real da edição.
- Um servidor local antigo ainda atendia na porta 3100 com conteúdo anterior. O processo identificado como o servidor do projeto foi reiniciado; os testes acima passaram na versão nova.

Evidências em `.test-artifacts/audit/recreation-2026-10-10.json`, capturas `recreation-*.png` e `recreation-couple-cards-2026-10-10.pdf`. Servidor local em http://localhost:3100.

## Relação com AdSense e pendências

Esta mudança resolve a divergência do escopo leve aprovado pelo responsável e torna as promessas dos três recursos mais específicas. Gabaritos e tarefas concretas apoiam a utilidade; retirar temas sensíveis não é, por si só, uma exigência nem solução garantida para AdSense.

O inventário de 59 URLs continua registrando o estado publicado na coleta. Estes três itens foram adaptados apenas localmente, ainda aguardam leitura/aprovação do responsável e eventual publicação autorizada. A consolidação proposta de Rotina com propósito não foi executada. Os demais itens do plano (diferenciação, páginas principais, uso real, confiança, Home e Google) permanecem pendentes; ainda não recomendar nova revisão no AdSense apenas por esta etapa.
