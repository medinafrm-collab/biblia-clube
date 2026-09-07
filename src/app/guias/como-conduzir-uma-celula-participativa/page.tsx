import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideHeroPanel } from "@/components/GuideHeroPanel";
import { GuideVisualBlock } from "@/components/GuideVisualBlock";
import { Header } from "@/components/Header";
import { RelatedTools } from "@/components/RelatedTools";

const title = "Como conduzir uma célula participativa";
const description =
  "Orientações para conduzir uma célula cristã mais participativa, com leitura bíblica, conversa, dinâmica e oração aplicada.";

const facilitationRoles = [
  { title: "Facilitador", text: "Apresenta a pergunta, distribui a palavra, resume o que foi dito e devolve a conversa ao texto." },
  { title: "Guardião do tempo", text: "Sinaliza discretamente quando uma etapa está terminando. Não interrompe participantes por conta própria." },
  { title: "Anfitrião", text: "Cuida do espaço, recebe quem chega e percebe necessidades práticas durante o encontro." },
  { title: "Responsável pelo cuidado", text: "Combina conversas posteriores e aciona ajuda adequada quando surge uma situação que não deve ser tratada em público." },
];

const facilitationCases = [
  {
    situation: "Depois da pergunta, ninguém fala",
    action: "Espere de seis a oito segundos. Refaça a pergunta de modo observável ou dê dois minutos para conversa em duplas. Silêncio não prova desinteresse.",
    phrase: "Vamos olhar apenas para o versículo: qual ação ou palavra vocês conseguem identificar primeiro?",
  },
  {
    situation: "Uma pessoa ocupa quase todo o tempo",
    action: "Interrompa na primeira pausa natural, reconheça a contribuição e explique que abrirá espaço para outras vozes. Converse em particular se o padrão continuar.",
    phrase: "Obrigado por trazer esse ponto. Vou pausar aqui para ouvirmos quem ainda não falou e depois retomamos o que ficou aberto.",
  },
  {
    situation: "Há interrupções ou conversas paralelas",
    action: "Nomeie o comportamento, não a intenção. Retome o combinado de uma fala por vez e faça uma rodada curta, com direito de passar.",
    phrase: "Temos mais de uma conversa acontecendo. Vamos ouvir esta fala até o fim e depois sigo pela ordem, tudo bem?",
  },
  {
    situation: "A resposta se afasta do texto",
    action: "Registre o assunto para depois e volte à pergunta central. Não transforme toda associação interessante em novo tema do encontro.",
    phrase: "Esse assunto merece atenção e vou anotá-lo. Para concluir esta pergunta, onde percebemos essa ideia na passagem?",
  },
  {
    situation: "Surge uma interpretação apressada",
    action: "Peça evidência textual, diferencie observação de inferência e ofereça contexto sem ridicularizar. Não use votação para decidir o sentido do texto.",
    phrase: "Vamos separar o que o texto afirma do que estamos concluindo. Qual frase sustenta essa leitura? Há outra possibilidade no contexto?",
  },
  {
    situation: "Duas pessoas discordam e o tom sobe",
    action: "Resuma as duas posições sem declarar vencedores, reafirme limites de respeito e decida se o grupo tem elementos para continuar. Consenso forçado não é participação.",
    phrase: "Estou ouvindo duas leituras diferentes. Vou resumir cada uma e voltaremos ao texto; se não houver clareza hoje, registramos a questão para estudar.",
  },
  {
    situation: "Alguém revela sofrimento ou risco",
    action: "Agradeça a confiança, interrompa perguntas invasivas e pergunte do que a pessoa precisa agora. Situações de violência, abuso, autoagressão, crise de saúde ou risco exigem ajuda responsável fora da discussão pública.",
    phrase: "Obrigado por confiar isso. Não precisamos pedir detalhes aqui. Podemos pausar e combinar, com você, quem deve acompanhar esta situação agora?",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/guias/como-conduzir-uma-celula-participativa",
  },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "/guias/como-conduzir-uma-celula-participativa",
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
    "https://www.bibliaclube.com.br/guias/como-conduzir-uma-celula-participativa",
};

export default function ParticipativeCellGuide() {
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
                  <span className="eyebrow">Guia para liderança de célula</span>
                  <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.7rem,6vw,4.7rem)] text-[var(--navy)]">
                    Como conduzir uma célula participativa.
                  </h1>
                </div>
                <GuideHeroPanel
                  description="Uma célula participativa não depende de muitas atividades. Ela nasce de uma condução atenta e acolhedora, em que as pessoas têm espaço para ouvir, falar e orar."
                  chips={["Liderança", "Células", "Condução"]}
                  steps={["Acolher", "Ler juntos", "Conduzir resposta"]}
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
                  <li>- Quatro papéis de apoio à condução.</li>
                  <li>- Sete situações difíceis com respostas prontas.</li>
                  <li>- Simulação de uma conversa bíblica.</li>
                  <li>- Limites entre facilitação e cuidado particular.</li>
                </ul>
                <Link href="/dinamicas-para-celulas" className="button-primary mt-6">
                  Ver dinâmicas
                  <span aria-hidden="true">→</span>
                </Link>
              </aside>

              <div className="min-w-0">
                <div className="prose-content">
                  <h2>Participação não significa falar o tempo todo</h2>
                  <p>
                    Uma célula participativa não é aquela em que todos precisam
                    falar muito. É aquela em que as pessoas se sentem incluídas,
                    compreendem o caminho do encontro e percebem que podem
                    contribuir sem medo de julgamento.
                  </p>
                  <p>
                    O líder tem um papel importante: abrir espaço, organizar o
                    tempo, proteger o ambiente e manter o foco na Palavra. A
                    condução precisa ser leve, mas não improvisada.
                  </p>

                  <h2>Uma estrutura simples ajuda o grupo</h2>
                  <p>
                    Ter uma sequência não significa transformar a célula em um
                    roteiro rígido. Significa oferecer direção. O líder pode
                    adaptar o tempo conforme o grupo, mas uma estrutura básica
                    evita dispersão e ajuda todos a acompanharem.
                  </p>
                </div>

                <GuideVisualBlock
                  eyebrow="Fluxo do encontro"
                  title="Uma sequência que não engessa"
                  description="O líder pode adaptar o tempo, mas uma ordem simples ajuda o grupo a caminhar junto."
                  variant="timeline"
                  items={[
                    {
                      label: "01",
                      title: "Acolhimento",
                      text: "Receba as pessoas e apresente o tema com simplicidade.",
                    },
                    {
                      label: "02",
                      title: "Leitura",
                      text: "Convide participantes para lerem as referências principais.",
                    },
                    {
                      label: "03",
                      title: "Dinâmica",
                      text: "Use uma atividade curta para abrir participação.",
                    },
                    {
                      label: "04",
                      title: "Resposta",
                      text: "Finalize com conversa prática e oração ligada ao tema.",
                    },
                  ]}
                />

                <section className="mt-12" aria-labelledby="papeis-conducao">
                  <span className="eyebrow">Responsabilidade compartilhada</span>
                  <h2 id="papeis-conducao" className="section-title mt-4">Quatro papéis, sem quatro comandantes.</h2>
                  <p className="section-copy max-w-3xl">O facilitador continua responsável pelo fluxo da conversa, mas não precisa cuidar sozinho de tempo, recepção e acompanhamento. Apresente as funções antes do encontro e deixe claro quem toma cada decisão.</p>
                  <dl className="mt-8 border-y border-[var(--border)]">
                    {facilitationRoles.map((role) => (
                      <div key={role.title} className="grid gap-2 border-b border-[var(--border)] py-5 last:border-0 sm:grid-cols-[12rem_1fr] sm:gap-6">
                        <dt className="font-serif text-xl text-[var(--navy)]">{role.title}</dt>
                        <dd className="leading-7 text-[var(--muted)]">{role.text}</dd>
                      </div>
                    ))}
                  </dl>
                </section>

                <section className="mt-12" aria-labelledby="intervencoes-prontas">
                  <span className="eyebrow">Durante a conversa</span>
                  <h2 id="intervencoes-prontas" className="section-title mt-4">Sete situações e como intervir.</h2>
                  <p className="section-copy max-w-3xl">Intervir não é controlar cada resposta. É proteger pessoas, tempo e propósito para que a participação continue possível.</p>
                  <div className="mt-8 border-y border-[var(--border)]">
                    {facilitationCases.map((item, index) => (
                      <section key={item.situation} className="border-b border-[var(--border)] py-7 last:border-0">
                        <div className="grid gap-4 sm:grid-cols-[2.5rem_1fr]">
                          <span className="font-serif text-2xl text-[var(--gold-ink)]" aria-hidden="true">{index + 1}</span>
                          <div>
                            <h3 className="font-serif text-2xl text-[var(--navy)]">{item.situation}</h3>
                            <p className="mt-3 leading-7 text-[var(--muted)]">{item.action}</p>
                            <p className="mt-4 border-l-2 border-[var(--gold)] pl-4 leading-7 text-[var(--foreground)]"><strong>Uma frase possível:</strong> “{item.phrase}”</p>
                          </div>
                        </div>
                      </section>
                    ))}
                  </div>

                  <aside className="mt-7 border-l-2 border-[var(--gold)] bg-[var(--surface-soft)] px-5 py-4" aria-label="Orientação para situações de risco">
                    <p className="leading-7 text-[var(--muted)]">
                      <strong className="text-[var(--navy)]">Quando houver risco:</strong>{" "}
                      facilitação de grupo não substitui atendimento especializado. No Brasil, urgências de saúde podem ser encaminhadas ao SAMU 192; o CVV atende pelo 188 para apoio emocional; e o Disque 100 recebe denúncias de violações de direitos humanos. Em perigo imediato, interrompa a atividade e procure o serviço adequado.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      Fontes oficiais: <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/suicidio-prevencao" className="font-bold text-[var(--navy)]">Ministério da Saúde</a> e <a href="https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos" className="font-bold text-[var(--navy)]">Disque Direitos Humanos</a>.
                    </p>
                  </aside>
                </section>

                <section className="mt-12" aria-labelledby="simulacao-conversa">
                  <span className="eyebrow">Exemplo fictício · Lucas 10:38-42</span>
                  <h2 id="simulacao-conversa" className="section-title mt-4">Uma conversa facilitada, passo a passo.</h2>
                  <p className="section-copy max-w-3xl">Leia a passagem completa. O objetivo deste exemplo é demonstrar intervenções, não oferecer uma interpretação exaustiva do episódio de Marta e Maria.</p>

                  <div className="mt-8 grid gap-6 border-y border-[var(--border)] py-7">
                    <div className="grid gap-2 sm:grid-cols-[9rem_1fr]"><strong className="text-[var(--navy)]">Facilitador</strong><p className="leading-7 text-[var(--muted)]">“Antes de aplicar, o que Marta e Maria fazem na cena e o que Jesus diz?”</p></div>
                    <div className="grid gap-2 sm:grid-cols-[9rem_1fr]"><strong className="text-[var(--navy)]">Participante 1</strong><p className="leading-7 text-[var(--muted)]">“Marta recebe Jesus e se ocupa com o serviço; Maria se senta para ouvi-lo.”</p></div>
                    <div className="grid gap-2 sm:grid-cols-[9rem_1fr]"><strong className="text-[var(--navy)]">Participante 2</strong><p className="leading-7 text-[var(--muted)]">“Então servir é errado e só Maria teve fé.”</p></div>
                    <div className="grid gap-2 sm:grid-cols-[9rem_1fr]"><strong className="text-[var(--navy)]">Facilitador</strong><p className="leading-7 text-[var(--muted)]">“Vamos conferir: Jesus chama atenção para ansiedade e distração de Marta. O texto diz que todo serviço é errado ou essa é uma conclusão além da frase? O que o contexto permite afirmar com segurança?”</p></div>
                    <div className="grid gap-2 sm:grid-cols-[9rem_1fr]"><strong className="text-[var(--navy)]">Participante 3</strong><p className="leading-7 text-[var(--muted)]">Começa uma história longa sobre tarefas e conflitos de outra pessoa.</p></div>
                    <div className="grid gap-2 sm:grid-cols-[9rem_1fr]"><strong className="text-[var(--navy)]">Facilitador</strong><p className="leading-7 text-[var(--muted)]">“Obrigado por relacionar o tema à rotina. Vou interromper antes de entrarmos na história de quem não está aqui e abrir espaço para outra voz: que contraste do texto ainda não observamos?”</p></div>
                    <div className="grid gap-2 sm:grid-cols-[9rem_1fr]"><strong className="text-[var(--navy)]">Após silêncio</strong><p className="leading-7 text-[var(--muted)]">“Conversem em duplas por dois minutos: o que ajuda alguém a perceber quando muitas tarefas estão retirando sua atenção do que é essencial? Vocês podem responder de modo geral.”</p></div>
                  </div>

                  <div className="mt-7 border-l-2 border-[var(--gold)] pl-5">
                    <h3 className="font-serif text-2xl text-[var(--navy)]">O que o facilitador fez</h3>
                    <ul className="mt-3 grid gap-2 leading-7 text-[var(--muted)]">
                      <li>- Começou por observações verificáveis no texto.</li>
                      <li>- Corrigiu uma conclusão sem rotular a pessoa.</li>
                      <li>- Protegeu a privacidade de alguém ausente.</li>
                      <li>- Interrompeu uma fala longa e devolveu a palavra ao grupo.</li>
                      <li>- Usou duplas e uma pergunta geral quando surgiu silêncio.</li>
                    </ul>
                  </div>
                </section>

                <RelatedTools
                  description="Estas ferramentas ajudam a variar a participação sem tirar a Palavra do centro do encontro."
                  tools={[
                    {
                      title: "Dinâmicas para Células",
                      description:
                        "Roteiros com objetivo, materiais, referências e sugestão de condução.",
                      href: "/dinamicas-para-celulas",
                    },
                    {
                      title: "Quiz Bíblico",
                      description:
                        "Perguntas para abrir conversa e revisar histórias bíblicas.",
                      href: "/quiz-biblico#quiz",
                    },
                    {
                      title: "Modo Grupo",
                      description:
                        "Atividades pensadas para participação em equipes.",
                      href: "/modo-grupo",
                    },
                  ]}
                />

                <div className="prose-content mt-12">
                  <h2>Conclusão</h2>
                  <p>
                    Conduzir uma célula participativa é unir preparo e
                    sensibilidade. Quando a liderança cria espaço para a
                    Palavra, para a escuta e para a oração, o encontro deixa de
                    ser apenas uma reunião e se torna um ambiente de cuidado e
                    crescimento.
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
