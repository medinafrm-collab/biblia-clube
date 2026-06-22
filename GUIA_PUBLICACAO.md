# Guia simples de publicação do Bíblia Clube

## 1. Antes de começar

Instale no computador:

1. **Node.js LTS**: https://nodejs.org/
2. **Git**: https://git-scm.com/
3. Crie uma conta no **GitHub**: https://github.com/
4. Crie uma conta na **Vercel**: https://vercel.com/

Durante a instalação do Node.js e do Git, você pode manter as opções padrão.

## 2. Testar no computador

Abra um terminal dentro da pasta do projeto e execute:

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` no navegador. Para encerrar o servidor, volte ao
terminal e pressione `Ctrl + C`.

Antes de publicar, confira:

```bash
npm run lint
npm run build
```

## 3. Enviar o projeto ao GitHub

No GitHub, crie um repositório novo chamado `biblia-clube`. Não marque as opções
para criar README ou `.gitignore`, porque estes arquivos já existem.

No terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Primeira versão do Bíblia Clube"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

Troque `URL_DO_SEU_REPOSITORIO` pela URL mostrada pelo GitHub.

## 4. Publicar na Vercel

1. Entre em https://vercel.com/ usando sua conta do GitHub.
2. Clique em **Add New > Project**.
3. Escolha o repositório `biblia-clube`.
4. A Vercel reconhecerá o Next.js automaticamente.
5. Não é necessário alterar as configurações de build.
6. Clique em **Deploy**.
7. Aguarde a publicação e abra o endereço temporário terminado em
   `.vercel.app`.

Cada novo envio para a branch `main` do GitHub publicará automaticamente uma
nova versão.

## 5. Conectar bibliaclube.com.br

Na Vercel:

1. Abra o projeto.
2. Entre em **Settings > Domains**.
3. Adicione `bibliaclube.com.br`.
4. Adicione também `www.bibliaclube.com.br`.
5. A Vercel mostrará os registros DNS esperados. Use os valores exibidos no
   painel, pois eles são a referência final para o seu projeto.

### Opção recomendada: manter o DNS no Registro.br

É a opção mais simples quando o domínio já está lá. No painel do Registro.br:

1. Abra o domínio `bibliaclube.com.br`.
2. Entre em **DNS > Configurar endereçamento** ou **Editar Zona**.
3. Crie o registro indicado pela Vercel para o domínio principal. Normalmente,
   a configuração padrão é:

```txt
Tipo: A
Nome: @ (ou deixe vazio, conforme o painel)
Valor: 76.76.21.21
```

4. Para o endereço com `www`, normalmente:

```txt
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

5. Salve e volte à tela de domínios da Vercel para verificar.

**Importante:** confirme os valores apresentados pela Vercel no momento da
configuração. Registros recomendados pela plataforma podem mudar.

### Alternativa: usar nameservers da Vercel

Nesse modelo, você troca no Registro.br os servidores DNS pelos nameservers
informados pela Vercel. Depois disso, todos os registros — inclusive e-mail —
passam a ser administrados na Vercel.

Para este projeto, manter o DNS no Registro.br e criar apenas os registros
necessários é mais fácil de entender e reduz o risco de afetar futuros e-mails
do domínio.

## 6. HTTPS

A Vercel emite o certificado HTTPS automaticamente depois que o DNS é
reconhecido. A propagação pode levar de alguns minutos a até 48 horas, embora
normalmente seja mais rápida.

Teste:

- `https://bibliaclube.com.br`
- `https://www.bibliaclube.com.br`
- confira se aparece o cadeado no navegador;
- teste o quiz do início ao fim;
- teste em um celular;
- abra todas as páginas do rodapé.

## 7. Antes de solicitar Google AdSense

Não adicione anúncios reais nesta primeira publicação. Primeiro:

- publique mais conteúdo original e útil;
- crie novos quizzes e páginas temáticas;
- mantenha navegação clara e boa experiência no celular;
- revise Política de Privacidade e Termos de Uso;
- crie um canal de contato que funcione;
- adicione consentimento de cookies quando ferramentas que exigem isso forem
  ativadas;
- evite excesso de anúncios e nunca interrompa uma pergunta com publicidade.

Quando houver conteúdo suficiente, a integração deve usar o identificador real
da conta aprovada no AdSense. Nunca simule anúncios.

## 8. Venda futura de materiais

Uma evolução segura pode seguir esta ordem:

1. catálogo de materiais;
2. página individual de cada produto;
3. checkout por uma plataforma de pagamento;
4. confirmação automática do pagamento;
5. entrega protegida do arquivo digital;
6. histórico de pedidos e suporte ao comprador.

Antes de vender, será necessário definir empresa ou responsável pela venda,
regras de reembolso, emissão de documentos fiscais e tratamento de dados.

## 9. Área premium e assinaturas

Para assinaturas, o projeto precisará futuramente de:

- login;
- banco de dados;
- controle de quem pode acessar cada conteúdo;
- pagamentos mensais ou anuais;
- tratamento de cancelamentos e falhas de cobrança;
- área do assinante;
- política de privacidade e termos atualizados.

Não é recomendável construir tudo de uma vez. Um bom próximo passo é primeiro
validar quais materiais e jogos o público mais deseja.

## 10. Próximos passos sugeridos

1. Revisar todas as perguntas com alguém responsável pelo conteúdo.
2. Criar uma identidade visual definitiva e um logo em formato vetorial.
3. Publicar de três a cinco quizzes temáticos.
4. Acompanhar regularmente as mensagens enviadas para
   `bibliaclubeweb@gmail.com`.
5. Adicionar uma ferramenta de análise respeitando privacidade e consentimento.
6. Criar uma lista real de interessados nas novidades.
7. Só então avaliar AdSense, materiais pagos e assinatura.
