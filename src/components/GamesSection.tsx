import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const games: Array<{
  title: string;
  description: string;
  href: string;
  action: string;
  image: string;
  imageAlt: string;
}> = [
  {
    title: "Quem sou eu?",
    description: "Descubra personagens bíblicos usando o menor número possível de pistas.",
    href: "/quem-sou-eu",
    action: "Descobrir personagens",
    image: "/images/games/quem-sou-eu-silhuetas.webp",
    imageAlt: "Silhuetas de personagens bíblicos cercadas por pontos de interrogação",
  },
  {
    title: "Quiz bíblico",
    description: "Teste seus conhecimentos com perguntas e respostas sobre a Bíblia.",
    href: "/quiz-biblico",
    action: "Jogar agora",
    image: "/images/games/quiz-tablet-real.webp",
    imageAlt: "Quiz bíblico aberto em um tablet ao lado de uma Bíblia",
  },
  {
    title: "Desafios por tema",
    description: "Explore assuntos bíblicos em jornadas organizadas por tema.",
    href: "/desafios-por-tema",
    action: "Ver desafios",
    image: "/images/games/desafios-temas-postits-natural.webp",
    imageAlt: "Post-its escritos à mão com os oito temas dos desafios bíblicos",
  },
  {
    title: "Ligue os pares",
    description: "Encontre relações e aprenda enquanto conecta cada par.",
    href: "/ligue-os-pares",
    action: "Jogar agora",
    image: "/images/editorial/criancas-jogando-com-biblia-tablet.webp",
    imageAlt: "Crianças relacionando cartas em uma mesa com Bíblia e tablet",
  },
  {
    title: "Complete a frase",
    description: "Complete passagens e exercite sua memória bíblica de forma leve.",
    href: "/complete-a-frase",
    action: "Jogar agora",
    image: "/images/games/complete-frase-celular-jardim-mesa-branca.webp",
    imageAlt: "Pessoa jogando Complete a frase no celular em uma mesa branca de jardim",
  },
  {
    title: "Jogo da memória",
    description: "Vire as cartas, encontre os pares e memorize símbolos bíblicos.",
    href: "/jogo-da-memoria-biblico",
    action: "Jogar agora",
    image: "/images/games/jogo-memoria-projecao.webp",
    imageAlt: "Apresentador conduzindo um jogo da memória bíblico projetado para um grupo",
  },
  {
    title: "Dinâmicas para células",
    description: "Atividades para fortalecer relacionamentos e aprender em grupo.",
    href: "/dinamicas-para-celulas",
    action: "Ver dinâmicas",
    image: "/images/editorial/grupo-estudo-mesa-preta.webp",
    imageAlt: "Grupo de diferentes idades reunido para conversar sobre a Bíblia",
  },
  {
    title: "Modo grupo",
    description: "Forme equipes, acompanhe os pontos e jogue no mesmo ambiente.",
    href: "/modo-grupo",
    action: "Jogar em grupo",
    image: "/images/editorial/grupo-modo-clean.webp",
    imageAlt: "Grupo participando de uma atividade com Bíblias e laptop",
  },
];

export function GamesSection() {
  return (
    <section id="jogos" className="scroll-mt-20 bg-white py-14 lg:py-16">
      <div className="mx-auto w-[calc(100%_-_2rem)] max-w-[1260px] max-sm:w-[calc(100%_-_1.25rem)]">
        <ScrollReveal>
          <div className="grid items-end gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="eyebrow">Jogos em destaque</span>
              <h2 className="mt-3 max-w-2xl font-serif text-[clamp(2rem,3.2vw,2.8rem)] leading-[1.08] text-[var(--navy)]">
                Escolha uma forma de aprender brincando.
              </h2>
            </div>
            <div className="max-w-xl text-sm leading-7 text-[var(--muted)] lg:justify-self-end">
              <p>Nossos jogos são gratuitos, rápidos e feitos para diferentes idades.</p>
              <p>Jogue sozinho, em família, com crianças, na célula ou com seu grupo.</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {games.map((game) => (
            <article
              key={game.title}
              className="group h-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--gold)] hover:shadow-[0_16px_38px_rgba(37,50,43,0.08)]"
            >
              <div className="flex h-full flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.imageAlt}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 22px), (max-width: 1023px) calc(50vw - 26px), (max-width: 1279px) calc(33.333vw - 24px), 301px"
                    className="object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-serif text-xl leading-tight text-[var(--navy)]">{game.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-[var(--muted)]">{game.description}</p>
                  <Link
                    href={game.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--olive-dark)] no-underline transition group-hover:text-[var(--navy)]"
                  >
                    {game.action} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
