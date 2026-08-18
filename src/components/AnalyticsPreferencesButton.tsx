"use client";

import {
  disableGoogleAnalytics,
  resetAnalyticsConsent,
} from "@/lib/googleAnalytics";

export function AnalyticsPreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => {
        disableGoogleAnalytics();
        resetAnalyticsConsent();
      }}
      className="text-sm font-bold text-[var(--muted)] hover:text-[var(--navy)]"
    >
      Preferências de cookies
    </button>
  );
}
