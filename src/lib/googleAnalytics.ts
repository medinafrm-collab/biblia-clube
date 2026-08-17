"use client";

export const GA_MEASUREMENT_ID = "G-4YDMW2FM81";

const CONSENT_KEY = "biblia-clube:analytics-consent:v1";
const CONSENT_EVENT = "biblia-clube:analytics-consent-updated";

export type AnalyticsConsent = "granted" | "denied";
export type GoogleAnalyticsValue = string | number | boolean | null;
export type GoogleAnalyticsParameters = Record<
  string,
  GoogleAnalyticsValue
>;

const ANALYTICS_HOSTS = new Set([
  "bibliaclube.com.br",
  "www.bibliaclube.com.br",
]);

declare global {
  interface Window {
    bibliaClubeGaInitialized?: boolean;
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

export function readAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const consent = window.localStorage.getItem(CONSENT_KEY);
    return consent === "granted" || consent === "denied" ? consent : null;
  } catch {
    return null;
  }
}

export function saveAnalyticsConsent(consent: AnalyticsConsent) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(CONSENT_KEY, consent);
  } catch {
    // The current page still respects the visitor's choice.
    return;
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function resetAnalyticsConsent() {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.removeItem(CONSENT_KEY);
  } catch {
    // The preferences panel can still reopen for the current page.
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function subscribeToAnalyticsConsent(callback: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_KEY) callback();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(CONSENT_EVENT, callback);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

export function initializeGoogleAnalytics() {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });
  if (window.bibliaClubeGaInitialized) return;

  window.bibliaClubeGaInitialized = true;
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
    anonymize_ip: true,
  });
}

export function isGoogleAnalyticsHost() {
  return (
    typeof window !== "undefined" &&
    ANALYTICS_HOSTS.has(window.location.hostname)
  );
}

export function disableGoogleAnalytics() {
  if (typeof window === "undefined") return;

  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  window.gtag?.("consent", "update", {
    analytics_storage: "denied",
  });
}

export function trackGoogleAnalyticsEvent(
  name: string,
  parameters: GoogleAnalyticsParameters = {},
) {
  if (
    typeof window === "undefined" ||
    !isGoogleAnalyticsHost() ||
    readAnalyticsConsent() !== "granted"
  ) {
    return;
  }

  window.gtag?.("event", name, parameters);
}
