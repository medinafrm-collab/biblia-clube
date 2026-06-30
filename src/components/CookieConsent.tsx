"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_NAME = "biblia_clube_consent";
const OPEN_EVENT = "biblia-clube:open-privacy-settings";

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = document.cookie
      .split("; ")
      .some((item) => item.startsWith(`${COOKIE_NAME}=`));
    const timer = window.setTimeout(() => setOpen(!saved), 0);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(OPEN_EVENT, reopen);
    };
  }, []);

  function choose(value: "all" | "necessary") {
    const secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${COOKIE_NAME}=${value}; Max-Age=15552000; Path=/; SameSite=Lax${secure}`;
    setOpen(false);
  }

  if (!open) return null;

  return (
    <aside
      aria-label="Preferências de privacidade"
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-4xl border border-[var(--border)] bg-white p-5 shadow-[0_18px_60px_rgba(23,60,77,0.22)] sm:bottom-5 sm:p-6"
    >
      <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="font-serif text-xl font-bold text-[var(--navy)]">
            Sua privacidade importa
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
            Usamos um cookie necessário para lembrar sua escolha. As métricas
            atuais da Vercel são anônimas e não usam cookies. Recursos
            opcionais, como publicidade, só serão ativados conforme sua
            preferência. Consulte a{" "}
            <Link href="/politica-de-privacidade" className="font-bold text-[var(--navy)] underline decoration-[var(--gold)] underline-offset-4">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
          <button type="button" onClick={() => choose("necessary")} className="min-h-11 whitespace-nowrap border border-[var(--border)] bg-white px-4 text-sm font-bold text-[var(--navy)] hover:border-[var(--gold)] hover:bg-[var(--gold-soft)]">
            Somente necessários
          </button>
          <button type="button" onClick={() => choose("all")} className="min-h-11 whitespace-nowrap border border-[var(--navy)] bg-[var(--navy)] px-4 text-sm font-bold text-white hover:bg-[var(--navy-light)]">
            Aceitar opcionais
          </button>
        </div>
      </div>
    </aside>
  );
}
