"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function FooterLink({ href, children, className }: FooterLinkProps) {
  const pathname = usePathname();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname !== href) return;

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
