import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GameEditorialSection } from "@/components/GameEditorialSection";
import { Header } from "@/components/Header";
import { WhoAmIGame } from "@/components/WhoAmIGame";

const title = "Quem Sou Eu? Bíblico — Jogo de Personagens";
const description = "Descubra personagens bíblicos por pistas progressivas, confira explicações e referências e marque mais pontos usando menos pistas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/quem-sou-eu" },
  openGraph: { type: "website", locale: "pt_BR", url: "/quem-sou-eu", title, description },
};

const faq = [
  { question: "Quantas pistas aparecem para cada personagem?", answer: "Cada personagem possui três pistas progressivas. Você pode responder desde a primeira pista ou revelar as próximas antes de escolher." },
  { question: "Como funciona a pontuação?", answer: "Um acerto na primeira pista vale 100 pontos. A segunda vale 80 e a terceira, 60. Respostas erradas não somam pontos, mas sempre mostram a explicação e a referência." },
  { question: "Posso usar o jogo com crianças ou em grupo?", answer: "Sim. A primeira jornada reúne personagens mais conhecidos. Em grupo, uma pessoa pode ler as pistas e dar alguns segundos para todos conversarem antes da escolha." },
  { question: "Preciso criar uma conta?", answer: "Não. O jogo é gratuito, funciona no navegador e não exige cadastro." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Game", name: "Quem sou eu?", description, url: "https://www.bibliaclube.com.br/quem-sou-eu", inLanguage: "pt-BR", isAccessibleForFree: true, numberOfPlayers: { "@type": "QuantitativeValue", minValue: 1 } },
    { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
  ],
};

export default function QuemSouEuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <Header />
      <main>
        <section className="paper-texture border-b border-[var(--border)] py-14 sm:py-20">
          <div className="container-site">
            <nav aria-label="Navegação estrutural" className="flex gap-2 text-sm text-[var(--muted)]">
              <Link href="/" className="font-bold text-[var(--navy)] no-underline">Início</Link><span aria-hidden="true">/</span><span>Quem sou eu?</span>
            </nav>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
              <div>
                <span className="eyebrow">Personagens e pistas</span>
                <h1 className="display-title mt-5 max-w-3xl text-[clamp(2.8rem,6vw,5rem)] text-[var(--navy)]">Quem sou eu?</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">Descubra personagens bíblicos usando o menor número possível de pistas. Cada resposta vem acompanhada de contexto e referência para continuar a leitura.</p>
                <a href="#jogo" className="button-primary mt-7">Descobrir personagens <span aria-hidden="true">↓</span></a>
              </div>
              <div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[var(--border)] bg-white">
                  <Image
                    src="/images/games/quem-sou-eu-silhuetas.webp"
                    alt="Silhuetas de personagens bíblicos cercadas por pontos de interrogação"
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                <dl className="mt-3 grid rounded-lg border border-[var(--border)] bg-white sm:grid-cols-3">
                  <div className="border-b border-[var(--border)] p-4 sm:border-b-0 sm:border-r"><dt className="text-xs font-extrabold text-[var(--olive-dark)]">Conteúdo</dt><dd className="mt-1 font-serif text-xl text-[var(--navy)]">24 personagens</dd></div>
                  <div className="border-b border-[var(--border)] p-4 sm:border-b-0 sm:border-r"><dt className="text-xs font-extrabold text-[var(--olive-dark)]">Duração</dt><dd className="mt-1 font-serif text-xl text-[var(--navy)]">8 a 12 minutos</dd></div>
                  <div className="p-4"><dt className="text-xs font-extrabold text-[var(--olive-dark)]">Formato</dt><dd className="mt-1 font-serif text-xl text-[var(--navy)]">2 jornadas</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <div className="container-site">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
              <div><span className="eyebrow">Antes de jogar</span><h2 className="section-title">Observe detalhes, conecte histórias.</h2></div>
              <div className="space-y-5 text-lg leading-8 text-[var(--muted)]">
                <p>Quem sou eu? trabalha com pistas que vão do detalhe menos evidente ao mais reconhecível. A proposta não é adivinhar no escuro: é relacionar lugares, decisões, funções e encontros registrados nas narrativas.</p>
                <p>A primeira jornada revisita personagens conhecidos por ângulos menos repetidos. A segunda apresenta colaboradores, profetas e pessoas que tiveram participações breves, mas importantes. Ao responder, você confere uma explicação autoral e a passagem usada como referência.</p>
              </div>
            </div>
            <div className="mt-12 grid border-y border-[var(--border)] md:grid-cols-3">
              {[
                ["01", "Leia a primeira pista", "Ela é mais desafiadora e rende a maior pontuação."],
                ["02", "Decida com estratégia", "Responda ou revele outra pista, sabendo que o valor diminui."],
                ["03", "Confira o contexto", "Depois da escolha, leia a explicação e consulte a referência."],
              ].map(([number, heading, copy]) => <article key={number} className="border-b border-[var(--border)] py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"><span className="font-serif text-3xl text-[var(--gold-ink)]">{number}</span><h3 className="mt-3 font-serif text-2xl text-[var(--navy)]">{heading}</h3><p className="mt-3 leading-7 text-[var(--muted)]">{copy}</p></article>)}
            </div>
          </div>
        </section>

        <WhoAmIGame />

        <GameEditorialSection
          title="Um jogo de reconhecimento, contexto e leitura."
          paragraphs={[
            "As pistas foram construídas para destacar ações, relações e circunstâncias registradas nas passagens indicadas. Personagens conhecidos aparecem por fatos diferentes dos desafios já existentes no Bíblia Clube, enquanto a jornada intermediária amplia o repertório com nomes menos frequentes.",
            "Sozinho, o jogador pode tentar maximizar a pontuação. Em família ou grupo, a mesma rodada funciona como conversa: leia uma pista por vez, permita hipóteses e, depois da resposta, abra a referência para localizar o personagem no texto.",
          ]}
          benefits={["Atenção a detalhes dentro das narrativas.", "Associação entre personagens, lugares e acontecimentos.", "Curiosidade para consultar passagens menos conhecidas."]}
          groupTips={["Escolha a jornada de acordo com a familiaridade do grupo.", "Leia cada pista sem mostrar as alternativas imediatamente, se quiser ampliar a conversa.", "Ouça uma justificativa antes de confirmar a resposta.", "Selecione uma referência da rodada para leitura conjunta ao final."]}
          sourceNote="as pistas são paráfrases autorais de fatos verificáveis nas referências indicadas e evitam reproduções extensas de traduções bíblicas."
        />

        <section className="border-t border-[var(--border)] bg-white py-14 sm:py-20">
          <div className="container-site grid gap-12 lg:grid-cols-2">
            <div><span className="eyebrow">Dúvidas frequentes</span><h2 className="section-title">Como aproveitar a rodada.</h2><div className="mt-8 border-y border-[var(--border)]">{faq.map((item) => <details key={item.question} className="border-b border-[var(--border)] py-5 last:border-0"><summary className="cursor-pointer font-bold leading-7 text-[var(--navy)]">{item.question}</summary><p className="mt-3 leading-7 text-[var(--muted)]">{item.answer}</p></details>)}</div></div>
            <div><span className="eyebrow">Continue jogando</span><h2 className="section-title">Outras formas de aprender.</h2><div className="mt-8 border-y border-[var(--border)]">{[
              ["Quiz bíblico", "Perguntas por tema, com explicações e referências.", "/quiz-biblico"],
              ["Ligue os pares", "Conecte personagens, lugares e acontecimentos.", "/ligue-os-pares"],
              ["Jogo da memória", "Encontre relações entre cartas em diferentes modos.", "/jogo-da-memoria-biblico"],
            ].map(([heading, copy, href]) => <Link key={href} href={href} className="group block border-b border-[var(--border)] py-5 text-inherit no-underline last:border-0"><h3 className="font-serif text-2xl text-[var(--navy)]">{heading}</h3><p className="mt-2 leading-7 text-[var(--muted)]">{copy}</p><span className="mt-3 inline-flex text-sm font-extrabold text-[var(--olive-dark)]">Abrir jogo <span className="ml-2 group-hover:translate-x-1" aria-hidden="true">→</span></span></Link>)}</div></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
