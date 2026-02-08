// ---------------------------------------------------------------------------
// Analytics Event Taxonomy — CTI Sourcing
// ---------------------------------------------------------------------------
// 5 events. Everything else is a parameter.
//
//   page_view      — user navigates
//   view_content   — user engages with a section / article
//   click_cta      — user clicks any call-to-action
//   submit_form    — user converts (inquiry form)
//   sign_up        — user opts in (newsletter, future)
// ---------------------------------------------------------------------------

/** Canonical event names — the only events that should ever be emitted. */
export const EVENT = {
  PAGE_VIEW: "page_view",
  VIEW_CONTENT: "view_content",
  CLICK_CTA: "click_cta",
  SUBMIT_FORM: "submit_form",
  SIGN_UP: "sign_up",
} as const;

export type EventName = (typeof EVENT)[keyof typeof EVENT];

// --- Parameter shapes per event ------------------------------------------------

export interface PageViewParams {
  page_path: string;
  page_title: string;
  page_type: "home" | "products" | "about" | "blog" | "article" | "other";
}

export interface ViewContentParams {
  content_type: "product" | "section" | "article";
  content_id: string;
  content_location: "home" | "products" | "about" | "blog";
}

export interface ClickCTAParams {
  cta_location:
    | "hero"
    | "navbar"
    | "footer"
    | "product_section"
    | "cta_banner"
    | "about"
    | "blog"
    | "modal";
  cta_text: string;
  cta_action: "open_modal" | "navigate" | "external";
}

export interface SubmitFormParams {
  form_type: "inquiry" | "newsletter";
  product_interest?: string;
  estimated_volume?: string;
  has_phone?: boolean;
  has_message?: boolean;
}

export interface SignUpParams {
  method: "newsletter" | "whatsapp";
  source: string;
}

// --- Destination interface (for extensibility) ---------------------------------

export interface AnalyticsDestination {
  name: string;
  init?: () => void;
  track: (event: string, params: Record<string, unknown>) => void;
}
