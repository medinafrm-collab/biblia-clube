import { FooterLink } from "./FooterLink";
import { Logo } from "./Logo";

const links = [
  { label: "Guias", href: "/guias" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <path
        d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m5.25 7.25 6.75 5 6.75-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="16.2" cy="7.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-soft)]">
      <div className="container-site grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Logo />
          <p className="mt-5 max-w-md leading-7 text-[var(--muted)]">
            Jogos, guias e dinâmicas para aprender de forma leve.
          </p>
        </div>
        <nav aria-label="Links institucionais">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <FooterLink
                  href={link.href}
                  className="text-sm font-bold text-[var(--muted)] no-underline hover:text-[var(--navy)]"
                >
                  {link.label}
                </FooterLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bíblia Clube. Todos os direitos reservados.</p>
          <p className="flex flex-wrap gap-x-4 gap-y-2">
            <a
              href="mailto:bibliaclubeweb@gmail.com"
              className="inline-flex items-center gap-1.5 font-bold text-[var(--muted)] no-underline hover:text-[var(--navy)]"
            >
              <MailIcon />
              bibliaclubeweb@gmail.com
            </a>
            <a
              href="https://www.instagram.com/bibliaclube.br/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-[var(--muted)] no-underline hover:text-[var(--navy)]"
            >
              <InstagramIcon />
              @bibliaclube.br
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
