"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  buildMeetingPlan,
  formatMeetingPlanForSharing,
  meetingAudiences as audiences,
  meetingDurations as durations,
  meetingGoals as goals,
  type MeetingAudience as Audience,
  type MeetingDynamic,
  type MeetingDuration,
  type MeetingGoal as Goal,
} from "@/lib/meetingPlan";

export type { MeetingDynamic } from "@/lib/meetingPlan";

type MeetingBuilderProps = { dynamics?: MeetingDynamic[] };

export function MeetingBuilder({ dynamics = [] }: MeetingBuilderProps) {
  const [audience, setAudience] = useState<Audience>("celulas");
  const [duration, setDuration] = useState<MeetingDuration>(60);
  const [goal, setGoal] = useState<Goal>("aprender");
  const [variant, setVariant] = useState(0);
  const [message, setMessage] = useState("");

  const plan = useMemo(
    () => buildMeetingPlan(dynamics, audience, goal, duration, variant),
    [audience, duration, dynamics, goal, variant],
  );

  async function sharePlan() {
    if (!plan) return;
    const text = formatMeetingPlanForSharing(plan, duration);
    try {
      if (navigator.share) await navigator.share({ title: "Meu encontro no Bíblia Clube", text });
      else { await navigator.clipboard.writeText(text); setMessage("Roteiro completo copiado."); }
    } catch {
      setMessage("O compartilhamento foi cancelado.");
    }
  }

  if (!plan) {
    return <p className="container-site py-16 text-[var(--muted)]" role="status">Não há sugestões disponíveis para este público no momento.</p>;
  }

  return (
    <div>
      <section className="bg-white py-14 sm:py-20 print:hidden">
        <div className="container-site grid gap-12 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <span className="eyebrow">Três escolhas</span>
            <h2 className="section-title">Descreva o encontro que você precisa.</h2>
            <p className="section-copy">As sugestões usam dinâmicas e jogos que já existem no Bíblia Clube. Você continua livre para ajustar qualquer etapa.</p>
          </div>

          <div className="grid gap-9">
            <fieldset>
              <legend className="font-serif text-2xl text-[var(--navy)]"><span className="mr-3 text-[var(--gold-ink)]">1</span>Para quem?</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {audiences.map((item) => (
                  <button key={item.id} type="button" aria-pressed={audience === item.id} onClick={() => { setAudience(item.id); setVariant(0); }} className={`min-h-24 rounded-lg border p-4 text-left transition ${audience === item.id ? "border-[var(--navy)] bg-[var(--navy)] text-white" : "border-[var(--border)] bg-[var(--background)] text-[var(--navy)] hover:border-[var(--gold)]"}`}>
                    <strong className="block">{item.label}</strong><span className={`mt-1 block text-sm leading-5 ${audience === item.id ? "text-white/75" : "text-[var(--muted)]"}`}>{item.description}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-serif text-2xl text-[var(--navy)]"><span className="mr-3 text-[var(--gold-ink)]">2</span>Quanto tempo?</legend>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {durations.map((item) => <button key={item} type="button" aria-pressed={duration === item} onClick={() => setDuration(item)} className={`min-h-14 rounded-lg border px-3 font-extrabold transition ${duration === item ? "border-[var(--navy)] bg-[var(--navy)] text-white" : "border-[var(--border)] bg-white text-[var(--navy)] hover:border-[var(--gold)]"}`}>{item} min</button>)}
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-serif text-2xl text-[var(--navy)]"><span className="mr-3 text-[var(--gold-ink)]">3</span>Qual é o objetivo?</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {goals.map((item) => (
                  <button key={item.id} type="button" aria-pressed={goal === item.id} onClick={() => { setGoal(item.id); setVariant(0); }} className={`min-h-24 rounded-lg border p-4 text-left transition ${goal === item.id ? "border-[var(--olive-dark)] bg-[var(--surface-soft)] text-[var(--navy)]" : "border-[var(--border)] bg-white text-[var(--navy)] hover:border-[var(--gold)]"}`}>
                    <strong className="block">{item.label}</strong><span className="mt-1 block text-sm leading-5 text-[var(--muted)]">{item.description}</span>
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
      </section>

      <section id="plano" className="scroll-mt-28 border-y border-[var(--border)] bg-[var(--surface-soft)] py-14 sm:py-20 print:bg-white print:py-0">
        <article className="meeting-plan container-site print:w-full">
          <header className="grid gap-6 border-b-2 border-[var(--navy)] pb-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--olive-dark)]">Plano sugerido · Bíblia Clube</span>
              <h2 className="mt-3 font-serif text-[clamp(2.4rem,5vw,4rem)] leading-tight text-[var(--navy)]">{plan.goalLabel} em {duration} minutos</h2>
              <p className="mt-3 text-lg text-[var(--muted)]">Para {plan.audienceLabel.toLowerCase()}, sem cadastro e com liberdade para adaptar.</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row print:hidden">
              <button type="button" onClick={() => setVariant((current) => current + 1)} className="button-secondary">Trocar sugestão</button>
              <button type="button" onClick={() => window.print()} className="button-secondary">Imprimir</button>
              <button type="button" onClick={sharePlan} className="button-primary">Compartilhar</button>
            </div>
          </header>
          {message && <p className="mt-4 text-sm font-bold text-[var(--olive-dark)] print:hidden" role="status">{message}</p>}

          <div className="mt-9 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h3 className="font-serif text-2xl text-[var(--navy)]">Visão geral</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{plan.dynamic.summary}</p>
              <p className="mt-4 leading-7 text-[var(--foreground)]"><strong>Objetivo:</strong> {plan.dynamic.objective}</p>

              <h3 className="mt-9 font-serif text-2xl text-[var(--navy)]">Materiais</h3>
              <ul className="mt-4 grid gap-2 leading-7 text-[var(--muted)]">
                {plan.materials.map((material) => <li key={material} className="flex gap-3"><span aria-hidden="true" className="text-[var(--gold-ink)]">•</span><span>{material}</span></li>)}
              </ul>

              <h3 className="mt-9 font-serif text-2xl text-[var(--navy)]">Base bíblica</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{plan.dynamic.references.join(" · ")}</p>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">Leia ao menos uma passagem completa no encontro e confira o contexto antes de aplicar.</p>

              <h3 className="mt-9 font-serif text-2xl text-[var(--navy)]">Cuidado para quem conduz</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{plan.leaderNote}</p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[var(--navy)]">Roteiro passo a passo</h3>
              <p className="mt-2 leading-7 text-[var(--muted)]">Cada instrução já considera o limite de {duration} minutos. Encerre a etapa no tempo indicado para preservar o conjunto.</p>
              <ol className="mt-5 border-y border-[var(--border)]">
                {plan.timeline.map((slot, index) => (
                  <li key={slot.title} className="grid gap-3 border-b border-[var(--border)] py-6 last:border-0 sm:grid-cols-[2.5rem_1fr_auto] sm:gap-x-4">
                    <span className="font-serif text-2xl text-[var(--gold-ink)]" aria-hidden="true">{index + 1}</span>
                    <div>
                      <h4 className="font-serif text-2xl leading-tight text-[var(--navy)]">{slot.title}</h4>
                      <p className="mt-2 leading-7 text-[var(--muted)]">{slot.instruction}</p>
                      {index === 1 && <Link href={`/dinamicas-para-celulas/${plan.dynamic.id}`} className="mt-3 inline-flex font-extrabold text-[var(--olive-dark)] no-underline print:hidden">Consultar dinâmica completa →</Link>}
                      {index === 2 && <Link href={plan.game.href} className="mt-3 inline-flex font-extrabold text-[var(--olive-dark)] no-underline print:hidden">Abrir jogo →</Link>}
                    </div>
                    <span className="w-fit rounded-full border border-[var(--border)] px-3 py-1 text-sm font-bold text-[var(--navy)] sm:row-start-1">{slot.minutes} min</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <footer className="mt-12 border-t border-[var(--border)] pt-5 text-xs leading-5 text-[var(--muted)]">Sugestão gerada com recursos do Bíblia Clube. Adapte à idade, ao contexto e às necessidades reais do grupo.</footer>
        </article>
      </section>
    </div>
  );
}
