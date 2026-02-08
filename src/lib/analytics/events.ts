// ---------------------------------------------------------------------------
// Typed event helpers — one function per event in the taxonomy
// ---------------------------------------------------------------------------
// Usage:
//   import { trackCTA } from "@/lib/analytics"
//   trackCTA({ cta_location: "hero", cta_text: "Get in Touch", cta_action: "open_modal" })
// ---------------------------------------------------------------------------

import { track } from "./core";
import { EVENT } from "./types";
import type {
  ClickCTAParams,
  ViewContentParams,
  SubmitFormParams,
  SignUpParams,
} from "./types";

export function trackCTA(params: ClickCTAParams) {
  track(EVENT.CLICK_CTA, { ...params });
}

export function trackViewContent(params: ViewContentParams) {
  track(EVENT.VIEW_CONTENT, { ...params });
}

export function trackFormSubmit(params: SubmitFormParams) {
  track(EVENT.SUBMIT_FORM, { ...params });
}

export function trackSignUp(params: SignUpParams) {
  track(EVENT.SIGN_UP, { ...params });
}
