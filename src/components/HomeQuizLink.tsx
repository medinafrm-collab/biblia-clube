"use client";

import Link from "next/link";
import { trackGoogleAnalyticsEvent } from "@/lib/googleAnalytics";

export function HomeQuizLink() {
  return (
    <Link
      href="/quiz-biblico"
      className="button-primary"
      onClick={() => trackGoogleAnalyticsEvent("home_quiz_click", { game: "quiz" })}
    >
      Jogar quiz grátis
      <span aria-hidden="true">→</span>
    </Link>
  );
}
