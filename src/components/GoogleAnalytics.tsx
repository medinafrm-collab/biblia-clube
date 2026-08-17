"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
      if (consent === "denied") disableGoogleAnalytics();
      return;
    }

    if (!isGoogleAnalyticsHost()) return;

    initializeGoogleAnalytics();
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
      aria-label="Preferências de métricas"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-[var(--border)] bg-white shadow-[0_-18px_50px_rgba(15,49,63,0.14)]"
    >
      <div className="container-site py-5 sm:flex sm:items-center sm:justify-between sm:gap-8">
        <div className="max-w-2xl">
          <strong className="font-serif text-xl text-[var(--navy)]">
            Sua privacidade importa
          </strong>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            As métricas opcionais nos ajudam a entender quais jogos são mais
            úteis. Elas só serão ativadas com sua escolha. Consulte a{" "}
            <Link href="/politica-de-privacidade">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-2 sm:mt-0 sm:min-w-52">
          <button
            type="button"
            onClick={() => chooseConsent("denied")}
            className="button-secondary"
          >
            Somente necessário
          </button>
          <button
            type="button"
            onClick={() => chooseConsent("granted")}
            className="button-primary"
          >
            Aceitar métricas
          </button>
        </div>
      </div>
    </aside>
  );
}
