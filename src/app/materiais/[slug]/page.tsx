import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PrintActions } from "@/components/PrintActions";
import { getPrintableResource, printableResources } from "@/data/printableResources";

type MaterialPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return printableResources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: MaterialPageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getPrintableResource(slug);
  if (!resource) return {};
  return {
    title: resource.title,
    description: resource.summary,
    alternates: { canonical: `/materiais/${resource.slug}` },
    openGraph: { title: resource.title, description: resource.summary, url: `/materiais/${resource.slug}`, type: "article" },
  };
}

export default async function MaterialPage({ params }: MaterialPageProps) {
  const { slug } = await params;
  const resource = getPrintableResource(slug);
  if (!resource) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: resource.title,
    description: resource.summary,
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    author: { "@type": "Organization", name: "Bíblia Clube" },
    url: `https://www.bibliaclube.com.br/materiais/${resource.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <div className="print:hidden"><Header /></div>
      <main>
        <section className="paper-texture border-b border-[var(--border)] py-12 sm:py-16 print:hidden">
          <div className="container-site">
            <nav aria-label="Navegação estrutural" className="flex flex-wrap gap-2 text-sm text-[var(--muted)]">
              <Link href="/" className="font-bold text-[var(--navy)] no-underline">Início</Link><span aria-hidden="true">/</span>
              <Link href="/materiais" className="font-bold text-[var(--navy)] no-underline">Materiais</Link><span aria-hidden="true">/</span><span>{resource.title}</span>
            </nav>
            <div className="mt-9 grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="min-w-0">
                <span className="eyebrow">{resource.eyebrow}</span>
                <h1 className="display-title mt-5 max-w-4xl break-words text-[clamp(3rem,6vw,5rem)] text-[var(--navy)]">{resource.title}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{resource.summary}</p>
                <p className="mt-5 text-sm font-bold text-[var(--olive-dark)]">{resource.audience} · Impressão em A4</p>
              </div>
              <PrintActions />
            </div>
          </div>
        </section>

        <section className="bg-[#eef1eb] py-12 print:bg-white print:py-0">
          <div className="container-site print:w-full">
            <div className="mb-8 grid gap-6 rounded-lg border border-[var(--border)] bg-white p-6 md:grid-cols-[0.6fr_1fr] print:hidden">
              <h2 className="font-serif text-2xl text-[var(--navy)]">Como usar</h2>
              <ol className="grid gap-2 leading-7 text-[var(--muted)]">
                {resource.instructions.map((instruction, index) => <li key={instruction}>{index + 1}. {instruction}</li>)}
                <li>Confira a prévia: a quantidade de páginas varia com a escala, as margens e o navegador. Não preencha dados pessoais sensíveis.</li>
              </ol>
            </div>

            {resource.slug === "checklist-do-lider" && (
              <section className="mb-8 max-w-3xl print:hidden" aria-labelledby="exemplo-checklist">
                <h2 id="exemplo-checklist" className="font-serif text-2xl text-[var(--navy)]">Exemplo: preparar uma noite de jogos</h2>
                <p className="mt-3 leading-7 text-[var(--muted)]">Esta folha acompanha o roteiro <Link href="/biblioteca/como-montar-uma-noite-de-jogos-biblicos">Como montar uma noite de jogos bíblicos</Link>, com sessão de 75 minutos sugeridos, duas equipes e alternativa oral. O roteiro oferece perguntas e gabaritos; o checklist ajuda a conferir o preparo, sem substituir a atividade.</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">Exemplo fictício: o aparelho abre o jogo, mas a anotação de apoio não abre com a conexão desligada. O item de alternativa sem internet fica pendente. Antes do encontro, guarde as perguntas com alternativas, respostas e referências em um arquivo local e teste novamente. Marque só depois de confirmar o acesso.</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">Para criar outra sessão, use o <Link href="/materiais/roteiro-de-encontro">roteiro de encontro para preencher</Link>. A folha abaixo contém as decisões essenciais e pode ser impressa sem abrir esses links.</p>
              </section>
            )}

            {resource.slug === "cartoes-para-casais" && (
              <section className="mb-8 max-w-3xl print:hidden" aria-labelledby="kit-casais">
                <h2 id="kit-casais" className="font-serif text-2xl text-[var(--navy)]">Use os cartões com ou sem o guia</h2>
                <p className="mt-3 leading-7 text-[var(--muted)]">Para jogar com os cartões, escolham de dois a quatro e consultem as passagens indicadas. As preferências e atividades imaginadas não têm resposta certa. Não é necessário abrir outra página para começar.</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">Se preferirem alternativas, explicações e uma observação complementar, abram o <Link href="/guias/quiz-biblico-para-casais">guia Quiz bíblico para casais</Link>. Ele retoma cinco temas dos cartões e acrescenta uma pergunta sobre Arão, enquanto este material traz a sequência de Zaqueu. Usem uma versão por ocasião; o guia não é uma segunda rodada inteiramente diferente.</p>
              </section>
            )}

            {resource.slug === "roteiro-de-encontro" && (
              <section className="mb-8 max-w-3xl print:hidden">
                <h2 className="font-serif text-2xl text-[var(--navy)]">Um exemplo de preenchimento</h2>
                <p className="mt-3 leading-7 text-[var(--muted)]">Exemplo fictício para uma família, com adulto responsável: duração disponível de 20 minutos; objetivo de reconhecer quatro ações de Zaqueu em Lucas 19:1-6. Distribuição: acolhimento, 3; leitura, 5; atividade, 7; conferência e encerramento, 5. Soma: 20 minutos sugeridos, ainda não medidos em aplicação com participantes.</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">Contexto: Jesus atravessa Jericó e Zaqueu procura vê-lo. Pergunta 1: por que Zaqueu não conseguia vê-lo? Apoio: a multidão e sua baixa estatura, no versículo 3. Pergunta 2: qual é a ordem entre procurar, subir, descer e receber? Apoio: essa é a sequência dos versículos 3 a 6. Leia as ações misturadas — receber, subir, procurar, descer — e peça que as ordenem, com consulta livre. Use palavras ou desenhos, sem subir em móveis nem encenar as ações.</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">Se houver atraso, mantenha a leitura e confira somente a sequência. A alternativa sem internet é ler as quatro ações anotadas e consultar uma Bíblia impressa; não exige outro jogo. Quem preferir pode apontar a passagem ou apenas ouvir. A folha abaixo permanece em branco: o exemplo não é preenchido automaticamente.</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">Para uma proposta já pronta, <Link href="/biblioteca/culto-domestico-com-criancas">No lar: um roteiro com crianças</Link> oferece outra sessão, sobre Marcos 10, não uma continuação da história de Zaqueu. Para combinar recursos do acervo, use o <Link href="/monte-seu-encontro">Criador de roteiro</Link>; este material serve para registrar suas próprias escolhas.</p>
              </section>
            )}

            {resource.slug === "plano-familiar-semanal" && (
              <section className="mb-8 max-w-3xl print:hidden">
                <h2 className="font-serif text-2xl text-[var(--navy)]">Um dia completo, sem cobrança</h2>
                <p className="mt-3 leading-7 text-[var(--muted)]">Exemplo do dia 1: em 2 minutos, combine que é possível responder, apontar ou ouvir. Use até 4 para ler Marcos 10:13-16. Em 3, pergunte quem foi trazido e confira crianças no versículo 13; depois, localize receber e abençoar no 16. No minuto final, releia uma frase ou resuma a cena. Total: 10 minutos sugeridos, não medidos em aplicação real. Se a leitura demorar, use só a primeira pergunta e preserve a conferência.</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">Para quem ainda não lê, o adulto conta a sequência trazer, impedir, acolher, apoiada nos versículos 13, 14 e 16. Não encene abraço nem peça contato físico. O registro pode ficar em branco. Em textos mais longos, escolha uma pergunta por ocasião; não prometa terminar todo trecho em quatro minutos. As sete sugestões são independentes e não avaliam a rotina da família.</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">A folha abaixo inclui o apoio para cada pergunta. Para outro formato, consulte <Link href="/biblioteca/culto-domestico-com-criancas">No lar: um roteiro com crianças</Link>, uma sessão de 15 minutos com jogo de sequência. Esta folha serve para escolher leituras e registrar observações, não reproduz aquele encontro inteiro.</p>
              </section>
            )}

            {resource.slug === "folha-de-pontuacao" && (
              <section className="mb-8 max-w-3xl print:hidden">
                <h2 className="font-serif text-2xl text-[var(--navy)]">Exemplo de soma</h2>
                <p className="mt-3 leading-7 text-[var(--muted)]">Na rodada oral com 1 ponto por acerto, a Equipe A registra 1, traço, 0, traço, 1 e soma 2. O traço indica que não teve tentativa, não um erro. No Modo Grupo, copie a pontuação da tela: 10 pelo acerto inicial ou 5 pelo rebote, quando ativado. Não acrescente pontos por comportamento.</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">Para usar com uma sessão pronta, consulte <Link href="/biblioteca/como-montar-uma-noite-de-jogos-biblicos">Como montar uma noite de jogos bíblicos</Link>. O roteiro usa duas equipes e rebote desativado no jogo digital. Os exemplos desta folha são fictícios; os campos ficam em branco para sua partida.</p>
              </section>
            )}

            <article className="print-sheet mx-auto max-w-[900px] rounded-sm bg-white p-8 shadow-[0_18px_55px_rgba(37,50,43,0.12)] sm:p-12 print:max-w-none print:p-0 print:shadow-none">
              <header className="border-b-2 border-[var(--navy)] pb-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--olive-dark)]">Bíblia Clube · Material gratuito</p>
                <h2 className="mt-3 font-serif text-4xl leading-tight text-[var(--navy)]">{resource.title}</h2>
                <p className="mt-3 leading-7 text-[var(--muted)]">{resource.summary}</p>
              </header>

              <div className="mt-8 grid gap-9">
                {resource.sections.map((section) => (
                  <section key={section.title} className="print-section min-w-0 break-inside-avoid">
                    <h3 className="font-serif text-2xl text-[var(--navy)]">{section.title}</h3>
                    {section.description && <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{section.description}</p>}
                    {section.table && (
                      <div className="mt-4 overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)] print:overflow-visible" role="region" aria-label={section.table.caption} tabIndex={0}>
                        <table className="w-full min-w-[32rem] table-fixed border-collapse text-sm print:min-w-0">
                          <caption className="mb-3 text-left text-sm text-[var(--muted)]">{section.table.caption}</caption>
                          <thead>
                            <tr>{section.table.columns.map((column, index) => <th key={column} scope="col" className={`border border-[var(--border)] p-2 text-center font-bold text-[var(--navy)] ${index === 0 ? "w-[28%] text-left" : ""}`}>{column}</th>)}</tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row) => (
                              <tr key={row[0]}>
                                {row.map((cell, index) => index === 0
                                  ? <th key={index} scope="row" className="break-words border border-[var(--border)] px-2 py-4 text-left font-normal">{cell}</th>
                                  : <td key={index} className="border border-[var(--border)] px-1 py-4 text-center">{cell}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    {section.items.length > 0 && <ul className="mt-4 grid gap-0 border-y border-[var(--border)]">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="min-w-0 break-words border-b border-[var(--border)] py-3 leading-6 text-[var(--foreground)] [overflow-wrap:anywhere] last:border-0 print:py-2 print:[overflow-wrap:normal]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>}
                  </section>
                ))}
              </div>

              {resource.answerKey && (
                <section className="mt-10 border-t-2 border-[var(--navy)] pt-6 print:break-before-page print:mt-0" aria-labelledby="gabarito">
                  <h3 id="gabarito" className="font-serif text-2xl text-[var(--navy)]">Gabarito para quem conduz</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Separe esta parte antes de distribuir os cartões. Os cartões 1 a 6 são de preferências e não têm resposta certa. Nos demais, aceite palavras equivalentes da tradução utilizada.</p>
                  <dl className="mt-5 grid gap-4">
                    {resource.answerKey.map((entry) => (
                      <div key={entry.card} className="break-inside-avoid border-b border-[var(--border)] pb-3">
                        <dt className="font-bold text-[var(--navy)]">Cartão {entry.card}</dt>
                        <dd className="mt-1 leading-6 text-[var(--foreground)]">{entry.answer}<span className="mt-1 block text-sm text-[var(--muted)]">Confira: {entry.reference}.</span></dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}

              <footer className="mt-10 border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)] print:mt-4 print:pt-2">
                bibliaclube.com.br · Material do Bíblia Clube. Adapte ao seu grupo.
              </footer>
            </article>
          </div>
        </section>
      </main>
      <div className="print:hidden"><Footer /></div>
    </>
  );
}
