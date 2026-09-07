"use client";

import { resetAnalyticsConsent } from "@/lib/googleAnalytics";
import { usePathname } from "next/navigation";

export function AnalyticsPreferencesButton() {
  const pathname = usePathname();
  if (pathname === "/politica-de-privacidade") return null;
  return (
    <button
      type="button"
      onClick={resetAnalyticsConsent}
      className="text-sm font-bold text-[var(--muted)] hover:text-[var(--navy)]"
    >
      Preferências de cookies
    </button>
  );
}
