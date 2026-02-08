// ---------------------------------------------------------------------------
// GTM Destination — pushes events to window.dataLayer
// ---------------------------------------------------------------------------

import type { AnalyticsDestination } from "./types";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function createGTMDestination(): AnalyticsDestination {
  return {
    name: "gtm",
    init() {
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
      }
    },
    track(event, params) {
      if (typeof window !== "undefined") {
        window.dataLayer.push({ event, ...params });
      }
    },
  };
}
