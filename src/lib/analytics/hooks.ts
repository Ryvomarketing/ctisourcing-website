"use client";

// ---------------------------------------------------------------------------
// React hooks for declarative tracking
// ---------------------------------------------------------------------------

import { useEffect, useRef } from "react";
import { track } from "./core";
import { EVENT } from "./types";
import type { ViewContentParams } from "./types";

/**
 * Track when a section scrolls into view (fires once per mount).
 *
 * Usage:
 *   const ref = useViewContent({ content_type: "product", content_id: "beeswax", content_location: "products" })
 *   <section ref={ref}>...</section>
 */
export function useViewContent(params: ViewContentParams) {
  const ref = useRef<HTMLElement>(null);
  const hasFired = useRef(false);
  const paramsRef = useRef(params);
  paramsRef.current = params;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFired.current) {
          hasFired.current = true;
          track(EVENT.VIEW_CONTENT, { ...paramsRef.current });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
