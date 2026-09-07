"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  disableGoogleAnalytics,
  GA_MEASUREMENT_ID,
  initializeGoogleAnalytics,
  isGoogleAnalyticsHost,
  readAnalyticsConsent,
  saveAnalyticsConsent,
  subscribeToAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/googleAnalytics";

const GOOGLE_TAG_SCRIPT_ID = "biblia-clube-google-analytics";

function loadGoogleTag() {
  if (document.getElementById(GOOGLE_TAG_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = GOOGLE_TAG_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const refresh = () => {
      setConsent(readAnalyticsConsent());
      setIsReady(true);
    };
    const timer = window.setTimeout(refresh, 0);
    const unsubscribe = subscribeToAnalyticsConsent(refresh);

    return () => {
      window.clearTimeout(timer);
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (consent !== "granted") {
      disableGoogleAnalytics();
      return;
    }

    if (!isGoogleAnalyticsHost()) return;

    if (!initializeGoogleAnalytics()) return;
    loadGoogleTag();

    if (lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;
    window.gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [consent, pathname]);

  function chooseConsent(nextConsent: AnalyticsConsent) {
    if (nextConsent === "denied") disableGoogleAnalytics();
    setConsent(nextConsent);
    saveAnalyticsConsent(nextConsent);
  }

  if (!isReady || consent !== null) return null;

  return (
    <aside
      aria-label="Preferências de cookies"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-[var(--border)] bg-white shadow-[0_-18px_50px_rgba(15,49,63,0.14)]"
    >
      <div className="container-site py-5 sm:flex sm:items-center sm:justify-between sm:gap-8">
        <div className="max-w-2xl">
          <strong className="font-serif text-xl text-[var(--navy)]">
            Sua privacidade importa
          </strong>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            O site usa recursos essenciais para funcionar e lembrar sua
            escolha. Com sua permissão, também usamos cookies de análise para
            entender quais jogos são mais úteis. Consulte a{" "}
            <a href="/politica-de-privacidade">
              Política de Privacidade
            </a>
            .
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-2 sm:mt-0 sm:min-w-52">
          <button
            type="button"
            onClick={() => chooseConsent("denied")}
            className="button-secondary"
          >
            Apenas necessários
          </button>
          <button
            type="button"
            onClick={() => chooseConsent("granted")}
            className="button-primary"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </aside>
  );
}
