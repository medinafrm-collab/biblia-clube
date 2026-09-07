"use client";

import Link from "next/link";
import { type MouseEvent, useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";

const navItems = [
  { label: "Início", href: "/#inicio" },
  { label: "Jogos", href: "/#jogos" },
  { label: "Biblioteca", href: "/biblioteca" },
  { label: "Criar roteiro", href: "/monte-seu-encontro" },
  { label: "Sobre", href: "/sobre" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      menuButtonRef.current?.focus();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  function handleNavigation(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    setIsOpen(false);

    if (!href.startsWith("/#") || window.location.pathname !== "/") return;

    const hash = href.slice(1);
    const target = document.querySelector(hash);
    if (!target) return;

    event.preventDefault();
    if (window.location.hash !== hash) {
      window.history.pushState(null, "", hash);
    }
    const scrollToTarget = () => {
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    };

    if (isOpen) {
      requestAnimationFrame(() => requestAnimationFrame(scrollToTarget));
      return;
    }

    scrollToTarget();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(251,250,246,0.9)] backdrop-blur-xl">
      <div className="container-site flex min-h-20 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(event) => handleNavigation(event, item.href)}
                  className="rounded-full px-3 py-2 text-sm font-bold text-[var(--muted)] no-underline transition hover:bg-white hover:text-[var(--navy)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/quiz-biblico"
          className="hidden min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--navy)] bg-[var(--navy)] px-5 text-sm font-extrabold text-white no-underline shadow-[0_12px_30px_rgba(23,60,77,0.18)] transition hover:-translate-y-0.5 hover:bg-[var(--navy-light)] lg:inline-flex"
        >
          Jogar agora
          <span aria-hidden="true">→</span>
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
          className="grid size-11 place-items-center rounded-full border border-[var(--border)] bg-white text-xl text-[var(--navy)] lg:hidden"
        >
          <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navegação para celular"
          className="border-t border-[var(--border)] bg-[var(--background)] px-4 pb-5 pt-3 lg:hidden"
        >
          <ul className="container-site grid gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(event) => handleNavigation(event, item.href)}
                  className="block rounded-xl px-4 py-3 font-bold text-[var(--navy)] no-underline hover:bg-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
