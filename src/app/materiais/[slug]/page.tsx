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

            {resource.slug === "roteiro-de-encontro" && (
              <section className="mb-8 max-w-3xl print:hidden">
                <h2 className="font-serif text-2xl text-[var(--navy)]">Um exemplo de preenchimento</h2>
                <p className="mt-3 leading-7 text-[var(--muted)]">Público: família. Duração: 20 minutos. Objetivo: reconhecer a sequência de ações de Zaqueu em Lucas 19:1-6. Reserve 3 minutos para acolher, 5 para ler, 7 para ordenar procurar, subir, descer e receber, e 5 para conferir as respostas e encerrar. Não proponha subir em móveis: represente as ações com palavras ou desenhos.</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">Pergunta de observação: por que Zaqueu não conseguia ver Jesus? Apoio: multidão e altura, no versículo 3. Para continuar, consulte <Link href="/biblioteca/culto-domestico-com-criancas">No lar: um roteiro com crianças</Link>. O exemplo é uma sugestão, não um relato de aplicação real; a folha abaixo permanece em branco para o seu plano.</p>
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
                <p className="mt-3 leading-7 text-[var(--muted)]">Exemplo fictício com um ponto por acerto e sem desconto: Equipe A registra 1, 0, 1, 1, 0 nas cinco rodadas, total 3. Equipe B registra 0, 1, 1, 0, 1, também total 3. O empate permanece; não invente bônus por comportamento. No Modo Grupo, use os pontos definidos pelo jogo, sem misturar escalas. Os campos impressos permanecem em branco para a sua rodada.</p>
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
                  <section key={section.title} className="print-section break-inside-avoid">
                    <h3 className="font-serif text-2xl text-[var(--navy)]">{section.title}</h3>
                    {section.description && <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{section.description}</p>}
                    <ul className="mt-4 grid gap-0 border-y border-[var(--border)]">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="min-w-0 break-words border-b border-[var(--border)] py-3 leading-6 text-[var(--foreground)] [overflow-wrap:anywhere] last:border-0 print:py-2 print:[overflow-wrap:normal]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

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
