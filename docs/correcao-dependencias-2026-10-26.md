# Correcao de dependencias - 26/10/2026

Primeira pendencia da revalidacao interna. Alteracoes somente locais, sem commit, push ou deploy.

## Alteracoes

- next: 16.3.8 para 16.4.3; intervalo declarado ~16.4.3.
- eslint-config-next: 16.3.8 para 16.4.3, mantendo alinhamento com o framework.
- zod indireto de desenvolvimento: 4.4.3 para 4.6.7, atualizado dentro da faixa permitida pelas ferramentas de lint; nenhuma dependencia direta nova.
- package-lock.json sincronizado pelo npm. Sem audit fix --force, overrides ou mudancas de React.

## Validacoes

- Versao alvo consultada no registro npm, compativel com Node >=20.9 e React utilizado.
- npm run check aprovado com Next 16.4.3: conteudo, 54 testes, lint, TypeScript e build; 66 paginas geradas.
- Apos atualizar zod, npm reportou zero vulnerabilidades na arvore auditada e o lint foi repetido.
- npm ls confirmou Next/eslint-config-next 16.4.3, zod 4.6.7 e sharp 0.35.5.
- npm emitiu aviso de script de instalacao pendente de unrs-resolver. Nao foram liberados scripts adicionais; a verificacao completa de lint passou antes dessa atualizacao indireta e foi repetida depois.
- Testes E2E e QA visual continuam como proxima pendencia; nao declarados aprovados nesta etapa.

## Limites

Zero avisos no npm nao certifica ausencia de todas as vulnerabilidades do aplicativo. A versao publicada continua a anterior ate autorizacao e publicacao da atualizacao. Esta correcao nao resolve por si so o motivo editorial Conteudo de baixo valor nem a investigacao da CMP.
