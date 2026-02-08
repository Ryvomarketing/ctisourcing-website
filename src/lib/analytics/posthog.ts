// ---------------------------------------------------------------------------
// PostHog Destination — ready to activate
// ---------------------------------------------------------------------------
//
// To enable PostHog:
//
//   1. npm install posthog-js
//   2. Add to .env.local:
//        NEXT_PUBLIC_POSTHOG_KEY=phc_your_key_here
//        NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
//   3. Uncomment the import + registration in analytics-provider.tsx
//
// That's it — same events, same parameters, new destination.
// ---------------------------------------------------------------------------

// import posthog from "posthog-js";
// import type { AnalyticsDestination } from "./types";
//
// export function createPostHogDestination(): AnalyticsDestination {
//   return {
//     name: "posthog",
//     init() {
//       if (typeof window === "undefined") return;
//       const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
//       if (!key) return;
//       posthog.init(key, {
//         api_host:
//           process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
//         capture_pageview: false, // We handle page views manually
//         capture_pageleave: true,
//       });
//     },
//     track(event, params) {
//       posthog.capture(event, params);
//     },
//   };
// }
