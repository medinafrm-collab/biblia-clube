"use client";

export function PrivacySettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("biblia-clube:open-privacy-settings"))}
      className="border-0 bg-transparent p-0 text-sm font-bold text-[var(--muted)] hover:text-[var(--navy)]"
    >
      Preferências de privacidade
    </button>
  );
}

