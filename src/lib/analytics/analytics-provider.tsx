"use client";

// ---------------------------------------------------------------------------
// AnalyticsProvider — wrap your app, get automatic page views + GTM script
// ---------------------------------------------------------------------------

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { registerDestination, track } from "./core";
import { createGTMDestination } from "./gtm";
import { EVENT } from "./types";

// To enable PostHog, uncomment:
// import { createPostHogDestination } from "./posthog";

// Validate GTM_ID format to prevent script injection via env var
const RAW_GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GTM_ID = RAW_GTM_ID && /^GTM-[A-Z0-9]{1,10}$/.test(RAW_GTM_ID) ? RAW_GTM_ID : undefined;

function getPageType(pathname: string) {
  if (pathname === "/") return "home";
  if (pathname === "/products") return "products";
  if (pathname === "/about") return "about";
  if (pathname.startsWith("/blog/")) return "article";
  if (pathname === "/blog") return "blog";
  return "other";
}

export function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const initialized = useRef(false);

  // Register destinations once
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    registerDestination(createGTMDestination());

    // To enable PostHog, uncomment:
    // registerDestination(createPostHogDestination());
  }, []);

  // Auto page_view on every route change
  useEffect(() => {
    if (!initialized.current) return;
    track(EVENT.PAGE_VIEW, {
      page_path: pathname,
      page_title: document.title,
      page_type: getPageType(pathname),
    });
  }, [pathname]);

  return (
    <>
      {/* GTM Script — only renders when NEXT_PUBLIC_GTM_ID is set */}
      {GTM_ID && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      )}
      {/* GTM noscript fallback */}
      {GTM_ID && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      )}
      {children}
    </>
  );
}
