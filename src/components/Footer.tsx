import Link from "next/link";
import { Logo } from "./Logo";
import { PrivacySettingsButton } from "./PrivacySettingsButton";

const links = [
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-soft)]">
      <div className="container-site grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Logo />
          <p className="mt-5 max-w-md leading-7 text-[var(--muted)]">
            Jogos e dinâmicas bíblicas para aprender de forma leve.
          </p>
        </div>
        <nav aria-label="Links institucionais">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-bold text-[var(--muted)] no-underline hover:text-[var(--navy)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bíblia Clube. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <PrivacySettingsButton />
            <p>bibliaclube.com.br</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
