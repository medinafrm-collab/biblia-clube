import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideHeroPanel } from "@/components/GuideHeroPanel";
import { GuideVisualBlock } from "@/components/GuideVisualBlock";
import { Header } from "@/components/Header";
import { RelatedTools } from "@/components/RelatedTools";

const title = "Quiz bíblico para casais";
const description =
  "Orientações para usar quiz bíblico em encontros de casais, células e reuniões com foco em diálogo, cuidado e edificação.";

const principles = [
  {
    title: "Use perguntas como início de conversa",
    text: "O quiz não precisa testar conhecimento. Ele pode abrir um tema sobre aliança, perdão, serviço, paciência, comunicação e vida espiritual no lar.",
  },
  {
    title: "Evite expor histórias pessoais",
    text: "Em grupos de casais, algumas conversas exigem cuidado. O condutor deve evitar perguntas que obriguem alguém a revelar conflitos íntimos diante de todos.",
  },
  {
    title: "Valorize escuta e respeito",
    text: "Depois de uma resposta, convide o grupo a refletir sobre o princípio bíblico sem transformar o momento em comparação entre casais.",
  },
  {
    title: "Finalize apontando para prática e oração",
    text: "Uma boa rodada pode terminar com uma decisão simples: pedir perdão, melhorar a comunicação, orar juntos ou cultivar mais serviço dentro de casa.",
  },
];

const themes = [
  "Comunicação e escuta.",
  "Perdão e reconciliação.",
  "Aliança e fidelidade.",
  "Cuidado com palavras.",
  "Serviço mútuo.",
  "Oração no lar.",
];

const couplesQuiz = [
  {
    question: "Segundo Provérbios 18:13, o que acontece quando alguém responde antes de ouvir?",
    options: ["Demonstra segurança", "Evita uma discussão", "Comete insensatez e passa vergonha", "Ganha tempo"],
    answer: "Comete insensatez e passa vergonha.",
    explanation: "O provérbio liga uma resposta precipitada à falta de sabedoria. O princípio vale para qualquer conversa e ajuda o casal a distinguir escutar de apenas esperar a vez de falar.",
    reference: "Provérbios 18:13",
    conversation: "Que atitude simples pode nos ajudar a verificar se entendemos o outro antes de responder?",
  },
  {
    question: "Em Efésios 4:29, que tipo de palavra deve ocupar o lugar da comunicação prejudicial?",
    options: ["Uma palavra que edifique conforme a necessidade", "Uma resposta mais forte", "O silêncio em toda situação", "Uma explicação pública"],
    answer: "Uma palavra que edifique conforme a necessidade.",
    explanation: "Paulo orienta a comunidade a usar palavras que façam bem a quem ouve. Aplicado ao lar, o texto convida a considerar tanto o conteúdo quanto o momento da fala.",
    reference: "Efésios 4:29",
    conversation: "Como podemos falar a verdade sem perder de vista a necessidade de quem escuta?",
  },
  {
    question: "Qual é o padrão de perdão apresentado em Colossenses 3:13?",
    options: ["Perdoar somente quando houver acordo", "Perdoar como o Senhor perdoou", "Esquecer sem conversar", "Evitar qualquer limite"],
    answer: "Perdoar como o Senhor perdoou.",
    explanation: "O texto chama os cristãos a suportar e perdoar uns aos outros. Perdão não significa negar o dano, dispensar limites seguros ou impedir a busca de ajuda quando necessária.",
    reference: "Colossenses 3:12-13",
    conversation: "Sem relatar conflitos pessoais, o que diferencia perdão de fingir que nada aconteceu?",
  },
  {
    question: "Em Filipenses 2:4, para onde o olhar do cristão também deve se voltar?",
    options: ["Apenas para seus próprios interesses", "Para os interesses dos outros", "Para a opinião da maioria", "Para evitar toda discordância"],
    answer: "Para os interesses dos outros.",
    explanation: "A orientação faz parte de um chamado comunitário à humildade. No casamento, ela pode inspirar atenção real às necessidades do outro sem apagar responsabilidades, limites ou individualidade.",
    reference: "Filipenses 2:3-4",
    conversation: "Que pergunta prática ajuda a descobrir do que o outro precisa, em vez de apenas presumir?",
  },
  {
    question: "O que Priscila e Áquila fizeram quando ouviram Apolo ensinando em Éfeso?",
    options: ["Expuseram o erro diante de todos", "Afastaram-se dele", "Explicaram-lhe com mais exatidão o caminho de Deus", "Pediram que ele parasse de ensinar"],
    answer: "Explicaram-lhe com mais exatidão o caminho de Deus.",
    explanation: "O casal acolheu Apolo e o ajudou a compreender melhor. A cena oferece um exemplo de serviço conjunto e correção cuidadosa, sem transformar o casal em modelo perfeito ou tirar o episódio de seu contexto missionário.",
    reference: "Atos 18:24-26",
    conversation: "Como duas pessoas podem aprender e servir juntas sem competir por reconhecimento?",
  },
  {
    question: "Qual atitude é rejeitada na descrição do amor em 1 Coríntios 13:5?",
    options: ["Alegrar-se com a verdade", "Perseverar", "Buscar somente os próprios interesses", "Ter esperança"],
    answer: "Buscar somente os próprios interesses.",
    explanation: "O capítulo foi escrito à igreja de Corinto no contexto dos dons e da vida comunitária, não como um manual exclusivo de casamento. Ainda assim, seu retrato do amor confronta o egoísmo também na convivência do casal.",
    reference: "1 Coríntios 12:31-13:7",
    conversation: "Que decisão cotidiana pode equilibrar cuidado próprio e consideração pelo outro nesta semana?",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/guias/quiz-biblico-para-casais",
  },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "/guias/quiz-biblico-para-casais",
    title,
    description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  inLanguage: "pt-BR",
  author: {
    "@type": "Organization",
    name: "Bíblia Clube",
  },
  publisher: {
    "@type": "Organization",
    name: "Bíblia Clube",
    logo: {
      "@type": "ImageObject",
      url: "https://www.bibliaclube.com.br/icon.svg",
    },
  },
  mainEntityOfPage:
    "https://www.bibliaclube.com.br/guias/quiz-biblico-para-casais",
};

export default function CouplesQuizGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <article>
          <section className="paper-texture border-b border-[var(--border)] py-16 sm:py-20">
            <div className="container-site">
              <nav
                aria-label="Navegação estrutural"
                className="flex flex-wrap gap-2 text-sm text-[var(--muted)]"
              >
                <Link href="/" className="font-bold text-[var(--navy)] no-underline">
                  Início
                </Link>
                <span aria-hidden="true">/</span>
                <Link href="/guias" className="font-bold text-[var(--navy)] no-underline">
                  Guias
                </Link>
              </nav>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div>
                  <span className="eyebrow">Guia para casais e células</span>
                  <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.7rem,6vw,4.7rem)] text-[var(--navy)]">
                    Quiz bíblico para casais.
                  </h1>
                </div>
                <GuideHeroPanel
                  description="Perguntas bem escolhidas podem ajudar casais a conversar com mais leveza sobre temas importantes, desde que a condução seja respeitosa e pastoral."
                  chips={["Casais", "Escuta", "Cuidado"]}
                  steps={["Perguntar", "Refletir", "Aplicar no lar"]}
                />
              </div>
            </div>
          </section>

          <section className="bg-white py-16 sm:py-20">
            <div className="container-site grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <aside className="h-fit rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-6">
                <h2 className="font-serif text-2xl text-[var(--navy)]">
                  Neste guia
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
                  <li>- Como usar quiz sem expor o casal.</li>
                  <li>- Temas que favorecem diálogo e oração.</li>
                  <li>- Rodada pronta com seis perguntas e respostas.</li>
                  <li>- Sugestão de condução em 15 minutos.</li>
                  <li>- Links para atividades relacionadas.</li>
                </ul>
                <Link href="/dinamicas-para-celulas" className="button-primary mt-6">
                  Ver dinâmicas
                  <span aria-hidden="true">→</span>
                </Link>
              </aside>

              <div className="min-w-0">
                <div className="prose-content">
                  <h2>O quiz pode servir a uma conversa mais profunda</h2>
                  <p>
                    Em encontros de casais, nem sempre é simples começar uma
                    conversa sobre fé, rotina, comunicação e cuidado mútuo. Uma
                    pergunta simples pode funcionar como porta de
                    entrada, tirando o peso de uma abordagem direta demais.
                  </p>
                  <p>
                    O objetivo não é avaliar quem conhece mais a Bíblia, nem
                    apontar falhas no relacionamento. O melhor uso do quiz é
                    conduzir o casal e o grupo a perceber princípios da Palavra
                    que podem ser praticados no lar.
                  </p>

                  <h2>Conduza com cuidado pastoral</h2>
                  <p>
                    Casais vivem realidades diferentes. Alguns estão em fases
                    leves, outros enfrentam cansaço, conflitos ou dores
                    silenciosas. Por isso, a condução precisa ser acolhedora,
                    sem brincadeiras que diminuam alguém ou exponham situações
                    delicadas.
                  </p>
                </div>

                <GuideVisualBlock
                  eyebrow="Condução com cuidado"
                  title="Do jogo para a conversa"
                  description="Em encontros de casais, o melhor resultado vem de perguntas que aproximam sem expor."
                  variant="flow"
                  items={[
                    {
                      label: "01",
                      title: "Pergunta",
                      text: "Use o quiz como início leve, não como avaliação do casal.",
                    },
                    {
                      label: "02",
                      title: "Princípio",
                      text: "Converse sobre o valor da Palavra presente na resposta.",
                    },
                    {
                      label: "03",
                      title: "Prática",
                      text: "Convide cada casal a pensar em um gesto simples para a semana.",
                    },
                    {
                      label: "04",
                      title: "Oração",
                      text: "Ore por unidade, perdão, escuta e cuidado dentro do lar.",
                    },
                  ]}
                />

                <section className="mt-12" aria-labelledby="rodada-pronta">
                  <span className="eyebrow">Atividade pronta</span>
                  <h2 id="rodada-pronta" className="section-title mt-4">Seis perguntas para jogar e conversar.</h2>
                  <p className="section-copy max-w-3xl">
                    Leia as alternativas antes de revelar a resposta. Em seguida, confira a passagem e escolha apenas a pergunta de conversa que couber no grupo. Ninguém precisa relatar conflitos ou responder em nome do cônjuge.
                  </p>

                  <div className="mt-8 border-y border-[var(--border)]">
                    {couplesQuiz.map((item, index) => (
                      <section key={item.reference} className="border-b border-[var(--border)] py-8 last:border-0">
                        <div className="grid gap-5 sm:grid-cols-[2.5rem_1fr]">
                          <span className="font-serif text-2xl text-[var(--gold-ink)]" aria-hidden="true">{index + 1}</span>
                          <div>
                            <h3 className="font-serif text-2xl leading-tight text-[var(--navy)]">{item.question}</h3>
                            <ol className="mt-4 grid gap-2 text-[var(--muted)] sm:grid-cols-2">
                              {item.options.map((option, optionIndex) => <li key={option}><strong className="mr-2 text-[var(--olive-dark)]">{String.fromCharCode(65 + optionIndex)}.</strong>{option}</li>)}
                            </ol>
                            <div className="mt-5 border-l-2 border-[var(--gold)] pl-4">
                              <p className="font-bold text-[var(--navy)]">Resposta: {item.answer}</p>
                              <p className="mt-2 leading-7 text-[var(--muted)]">{item.explanation}</p>
                              <p className="mt-2 text-sm font-bold text-[var(--olive-dark)]">Leia: {item.reference}</p>
                            </div>
                            <p className="mt-4 leading-7 text-[var(--foreground)]"><strong>Para conversar sem exposição:</strong> {item.conversation}</p>
                          </div>
                        </div>
                      </section>
                    ))}
                  </div>
                </section>

                <section className="mt-12 border-y border-[var(--border)] py-8">
                  <h2 className="font-serif text-3xl text-[var(--navy)]">Uma rodada de 15 minutos</h2>
                  <ol className="mt-5 grid gap-4 leading-7 text-[var(--muted)] sm:grid-cols-2">
                    <li><strong className="text-[var(--navy)]">2 min · Combinado:</strong> explique que o objetivo é aprender e que compartilhar experiências é opcional.</li>
                    <li><strong className="text-[var(--navy)]">6 min · Quiz:</strong> use três perguntas, com até dois minutos para resposta e explicação.</li>
                    <li><strong className="text-[var(--navy)]">5 min · Texto e conversa:</strong> leia uma referência completa e faça uma pergunta de aplicação.</li>
                    <li><strong className="text-[var(--navy)]">2 min · Oração:</strong> cada casal pode orar em silêncio ou acompanhar uma oração breve do condutor.</li>
                  </ol>
                  <p className="mt-6 text-sm leading-6 text-[var(--muted)]">
                    Nota de contexto: Efésios, Colossenses, Filipenses e 1 Coríntios foram escritos para comunidades cristãs. As aplicações ao casamento derivam de princípios de convivência presentes nesses textos; elas não substituem a leitura do contexto nem aconselhamento adequado em situações de violência, coerção ou risco.
                  </p>
                </section>

                <div className="mt-10 grid gap-4">
                  {principles.map((principle, index) => (
                    <section
                      key={principle.title}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-6"
                    >
                      <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--gold-ink)]">
                        Orientação {index + 1}
                      </span>
                      <h3 className="mt-3 font-serif text-2xl text-[var(--navy)]">
                        {principle.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[var(--muted)]">
                        {principle.text}
                      </p>
                    </section>
                  ))}
                </div>

                <div className="prose-content mt-12">
                  <h2>Temas que combinam com encontros de casais</h2>
                  <p>
                    Os temas mais úteis são aqueles que levam a atitudes
                    possíveis. Em vez de terminar apenas com uma reflexão geral,
                    o condutor pode propor uma pergunta prática: que gesto de
                    cuidado podemos cultivar nesta semana?
                  </p>
                </div>

                <div className="mt-6 rounded-lg border border-[var(--border)] p-6">
                  <h3 className="font-bold text-[var(--navy)]">
                    Sugestões de temas
                  </h3>
                  <ul className="mt-4 grid gap-3 leading-7 text-[var(--muted)] sm:grid-cols-2">
                    {themes.map((theme) => (
                      <li key={theme}>- {theme}</li>
                    ))}
                  </ul>
                </div>

                <section className="mt-12 rounded-lg border border-[var(--gold)]/30 bg-[var(--gold-soft)] p-6 sm:p-8">
                  <h2 className="font-serif text-3xl text-[var(--navy)]">
                    Sugestão de condução
                  </h2>
                  <ol className="mt-5 grid gap-4 leading-7 text-[var(--olive-dark)]">
                    <li>1. Abra com uma oração breve pelo encontro.</li>
                    <li>2. Escolha poucas perguntas e leia as referências com calma.</li>
                    <li>3. Depois de uma resposta, pergunte qual princípio aparece no texto.</li>
                    <li>4. Evite pedir relatos pessoais diante de todos.</li>
                    <li>5. Encerre orando por unidade, perdão, escuta e serviço no lar.</li>
                  </ol>
                </section>

                <RelatedTools
                  description="Use estas ferramentas para preparar encontros de casais com perguntas, conversa e atividades leves."
                  tools={[
                    {
                      title: "Quiz Bíblico",
                      description:
                        "Perguntas com explicações para iniciar boas conversas.",
                      href: "/quiz-biblico#quiz",
                    },
                    {
                      title: "Dinâmicas para Células",
                      description:
                        "Roteiros prontos que podem ser adaptados para casais.",
                      href: "/dinamicas-para-celulas",
                    },
                    {
                      title: "Modo Grupo",
                      description:
                        "Perguntas para equipes quando o encontro pede mais participação coletiva.",
                      href: "/modo-grupo",
                    },
                  ]}
                />

                <div className="prose-content mt-12">
                  <h2>Conclusão</h2>
                  <p>
                    Um quiz para casais pode ser simples e ainda assim
                    profundo. Quando há cuidado na condução, as perguntas ajudam
                    o grupo a conversar melhor, ouvir a Palavra e orar por
                    relacionamentos mais saudáveis.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
