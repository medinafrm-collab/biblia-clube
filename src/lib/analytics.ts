"use client";

import { track } from "@vercel/analytics";
import { trackGoogleAnalyticsEvent } from "@/lib/googleAnalytics";

export type AnalyticsValue = string | number | boolean | null;

export type GameEventProperties = Record<string, AnalyticsValue>;

export type GameId =
  | "quiz"
  | "modo-grupo"
  | "ligue-os-pares"
  | "jogo-da-memoria"
  | "complete-a-frase";

export function trackGameEvent(
  game: GameId,
  action: string,
  properties: GameEventProperties = {},
) {
  try {
    track(`game_${action}`, {
      game,
      ...properties,
    });
  } catch {
    // Analytics should never interrupt the game experience.
  }

  try {
    trackGoogleAnalyticsEvent(`game_${action}`, {
      game,
      ...properties,
    });
  } catch {
    // Analytics should never interrupt the game experience.
  }
}
