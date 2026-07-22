// Events go through window.gtag (GA4 G-37CSSCMZKN, loaded in __root.tsx) so
// they reach GA4 without any GTM workspace configuration. GTM also sees the
// same dataLayer — don't add duplicate GA4 event tags there.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, {
    page_path: window.location.pathname,
    ...params,
  });
}

export function trackPageView(path: string) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "page_view", {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: document.title,
  });
}

// One delegated listener covers every WhatsApp / call / email link on the
// site, including ones added later — no per-component wiring needed.
export function initLinkTracking(): () => void {
  function onClick(e: MouseEvent) {
    const anchor = (e.target as Element | null)?.closest?.("a[href]");
    if (!(anchor instanceof HTMLAnchorElement)) return;
    const href = anchor.href;
    const label = anchor.textContent?.trim().slice(0, 100) ?? "";

    if (href.includes("wa.me/")) {
      trackEvent("whatsapp_click", { link_url: href, link_text: label });
    } else if (href.startsWith("tel:")) {
      trackEvent("phone_call_click", { link_url: href, link_text: label });
    } else if (href.startsWith("mailto:")) {
      trackEvent("email_click", { link_url: href.split("?")[0], link_text: label });
    }
  }

  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}
