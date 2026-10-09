# Item 1: atualização de segurança das dependências

Concluído localmente em 7 de outubro de 2026, com uma pendência upstream de desenvolvimento documentada abaixo. Nenhuma publicação realizada.

## Alterações

| Pacote | Antes | Depois |
| --- | --- | --- |
| next | 16.3.1 | 16.3.8 |
| eslint-config-next | 16.3.1 | 16.3.8 |
| sharp | 0.35.3 | 0.35.5 |
| source-map-js | 1.2.1 | 1.2.2 |
| js-yaml | 4.3.1 | 4.3.2 |
| brace-expansion, linha 1 | 1.1.18 | 1.1.21 |
| brace-expansion, linha 5 | 5.0.9 | 5.0.12 |

As versões anteriores foram conferidas no lockfile do Git. Next e eslint-config-next ficaram na faixa `~16.3.8`, permitindo correções 16.3.x sem avançar automaticamente para outra versão menor. React permaneceu 19.2.4.

Arquivos de aplicação alterados: somente `package.json` e `package-lock.json`. Nenhuma mudança de layout, conteúdo, jogos ou configurações externas. Não foi utilizado `npm audit fix --force`.

## Resultado das auditorias

- `npm audit --omit=dev`: zero vulnerabilidades conhecidas reportadas.
- `npm audit` completo: zero críticas; cinco avisos altos derivados de uma mesma dependência de desenvolvimento, `braces@3.0.3`.
- A consulta é uma fotografia dos advisories disponíveis nesta data, não uma garantia de ausência de todo risco.

### Pendência de desenvolvimento

O [advisory GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) descreve esgotamento de pilha ao processar padrões de chaves profundamente aninhados. Não informa versão corrigida; o npm confirmou 3.0.3 como versão atual do pacote.

Cadeia presente no projeto: `eslint-config-next` -> `@next/eslint-plugin-next` -> `fast-glob` -> `micromatch` -> `braces`. Os cinco avisos correspondem a estes cinco pacotes, não a cinco falhas independentes.

A cadeia pertence ao lint e não aparece na auditoria de dependências de produção. Não foram encontrados imports destes pacotes no código da aplicação. Não há nesta análise evidência de que uma requisição de visitante alcance esse processamento de padrões. No ambiente de desenvolvimento/build, manter os padrões e configurações sob controle do próprio projeto; não transformar o lint em um serviço que aceite padrões fornecidos por terceiros.

O npm sugere recuar eslint-config-next para 14.2.35. Isso não foi aplicado: quebraria a correspondência com Next 16 e não é uma correção compatível. Não foram adicionados overrides para uma versão inexistente nem removido o lint.

Reabrir esta pendência quando houver correção upstream ou alternativa compatível, ou caso a arquitetura passe a aceitar padrões externos. O risco residual nas ferramentas de desenvolvimento foi triado; não se declara que a auditoria completa está zerada.

## Verificação

- Validação estrutural do conteúdo, 12 testes, lint, TypeScript e build de produção aprovados com Next 16.3.8.
- Onze fluxos de navegador aprovados, sem erros de página: Home/menu, quiz completo/resultado, retomada e leitura bíblica, Biblioteca/filtros, 64 combinações de roteiro, Ligue os Pares, Complete a Frase, Quem sou eu?, Memória, Modo Grupo e entradas inválidas na API.
- Os fluxos foram executados a 375 px, com terceiros bloqueados. Não representam validação real das contas Google ou uma auditoria completa de acessibilidade.
- Otimizador de imagens: 20 arquivos distintos da Home em 384, 640 e 1080 px, totalizando 60 respostas HTTP 200.
- Home em 1440 e 375 px: 21 elementos de imagem carregados, sem overflow horizontal e sem erros de página. Capturas conferidas.

Durante a verificação, o servidor local apresentou requisições de imagem pendentes. A conversão direta com sharp funcionou; o servidor foi reiniciado e o cache anterior foi preservado em `.next/cache/images-before-security-validation-20261007`. Com cache regenerado, a imagem do jogo passou nos tamanhos mobile/desktop, os onze fluxos originais passaram e as 60 conversões foram verificadas. O diagnóstico não prova uma falha no ambiente de produção. O ajuste provisório no teste foi revertido; os seletores e assertions originais foram mantidos.

## Evidências

- `tmp/audit-2026-10-07/security-check.log`
- `tmp/audit-2026-10-07/security-audit-production.json`
- `tmp/audit-2026-10-07/security-audit-full.json`
- `tmp/audit-2026-10-07/security-flows-first.json`: primeira execução, com timeout de imagem.
- `tmp/audit-2026-10-07/security-flows-final.json`: onze fluxos aprovados.
- `tmp/audit-2026-10-07/security-image-api.json`
- `tmp/audit-2026-10-07/security-images.json`
- `tmp/audit-2026-10-07/security-home-1440.png`
- `tmp/audit-2026-10-07/security-home-375.png`

As correções estão no projeto local. Para que cheguem à produção é necessária uma publicação autorizada e verificação do domínio depois dela. O próximo item do plano é a revisão dos artigos, começando pelo roteiro completo de célula em 60 minutos.
