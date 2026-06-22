"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const navItems = [
  { label: "Início", href: "/#inicio" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Quiz", href: "/#quiz" },
  { label: "Jogos", href: "/#jogos" },
  { label: "Premium", href: "/#premium" },
  { label: "Futuro", href: "/#futuro" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
                  className="rounded-full px-3 py-2 text-sm font-bold text-[var(--muted)] no-underline transition hover:bg-white hover:text-[var(--navy)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/#quiz" className="button-primary hidden !min-h-11 !px-5 lg:inline-flex">
          Jogar agora
          <span aria-hidden="true">→</span>
        </Link>

        <button
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
                  onClick={() => setIsOpen(false)}
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
