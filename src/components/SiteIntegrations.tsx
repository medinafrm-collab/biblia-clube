"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "./GoogleAnalytics";

export function SiteIntegrations() {
  const pathname = usePathname();
  const isPrivacyPage = pathname === "/politica-de-privacidade";
  const previouslyEnabled = useRef(false);

  useEffect(() => {
    // Unmounting cannot undo third-party scripts already executed in this document.
    if (isPrivacyPage && previouslyEnabled.current) window.location.reload();
    if (!isPrivacyPage) previouslyEnabled.current = true;
  }, [isPrivacyPage]);

  if (isPrivacyPage) return null;

  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8150008386108071"
        crossOrigin="anonymous"
      />
      <GoogleAnalytics />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
