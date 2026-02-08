// ---------------------------------------------------------------------------
// Analytics — public API
// ---------------------------------------------------------------------------
// Import everything from here:
//
//   import { trackCTA, trackFormSubmit, useViewContent } from "@/lib/analytics"
//
// ---------------------------------------------------------------------------

// Provider (wrap your app)
export { AnalyticsProvider } from "./analytics-provider";

// Typed event functions
export { trackCTA, trackViewContent, trackFormSubmit, trackSignUp } from "./events";

// React hooks
export { useViewContent } from "./hooks";

// Low-level (rarely needed directly)
export { track } from "./core";
export { registerDestination } from "./core";

// Types
export { EVENT } from "./types";
export type {
  EventName,
  PageViewParams,
  ViewContentParams,
  ClickCTAParams,
  SubmitFormParams,
  SignUpParams,
  AnalyticsDestination,
} from "./types";
