// ---------------------------------------------------------------------------
// Analytics Core — destination dispatcher
// ---------------------------------------------------------------------------
// Register one or more destinations (GTM, PostHog, etc.).
// Every `track()` call fans out to all registered destinations.
// ---------------------------------------------------------------------------

import type { AnalyticsDestination } from "./types";

const destinations: AnalyticsDestination[] = [];
const registered = new Set<string>();

/** Register a destination. Duplicate names are ignored (safe for StrictMode). */
export function registerDestination(destination: AnalyticsDestination) {
  if (registered.has(destination.name)) return;
  registered.add(destination.name);
  destinations.push(destination);
  destination.init?.();
}

/** Emit an event to every registered destination. */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  destinations.forEach((d) => d.track(event, params));
}
