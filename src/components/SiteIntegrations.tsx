"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { isAdEligiblePath } from "@/lib/adEligibility";

export function SiteIntegrations({ adEligiblePaths }: { adEligiblePaths: string[] }) {
  const pathname = usePathname();
  const isPrivacyPage = pathname === "/politica-de-privacidade";
  const adsEnabled = isAdEligiblePath(pathname, adEligiblePaths);
  const previouslyEnabled = useRef({ ads: false, analytics: false });

  useEffect(() => {
    // Unmounting cannot undo third-party scripts already executed in this document.
    if ((!adsEnabled && previouslyEnabled.current.ads) ||
      (isPrivacyPage && previouslyEnabled.current.analytics)) {
      window.location.reload();
      return;
    }
    if (adsEnabled) previouslyEnabled.current.ads = true;
    if (!isPrivacyPage) previouslyEnabled.current.analytics = true;
  }, [adsEnabled, isPrivacyPage]);

  if (isPrivacyPage) return null;

  return (
    <>
      {adsEnabled ? <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8150008386108071"
        crossOrigin="anonymous"
      /> : null}
      <GoogleAnalytics />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
