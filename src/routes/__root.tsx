import { createRootRouteWithContext, HeadContent, Outlet, Scripts, Link, useRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow justify-center">404</div>
        <h1 className="mt-4 font-display text-5xl">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">The page you're looking for has moved or never existed.</p>
        <Link to="/" className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-deep">
          Back to home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing or head home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-deep">Try again</button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GADE Kitchenware — Plastic Kitchen & Home Products Wholesale | India" },
      { name: "description", content: "GADE Kitchenware is India's trusted B2B wholesale supplier of plastic kitchen racks, organisers, modak moulds, karanji makers, flower pots and home essentials. Based in Mumbai, Maharashtra." },
      { name: "keywords", content: "plastic kitchenware wholesale India, kitchen rack supplier Mumbai, modak mould manufacturer, karanji maker wholesale, plastic organizer supplier, flower pot wholesale, kitchen storage supplier, bakeware wholesale India, egg storage box, measuring cups wholesale, Gade Kitchenware" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "GADE Kitchenware — Kamal Enterprises, Mumbai" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "GADE Kitchenware" },
      { property: "og:image", content: "https://www.gadekitchenware.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "GADE Kitchenware — Premium Plastic Household Products" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@gadekitchenware" },
      { name: "twitter:image", content: "https://www.gadekitchenware.com/og-image.jpg" },
    ],
    links: [
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "canonical", href: "https://www.gadekitchenware.com/" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.gadekitchenware.com/#website",
      "url": "https://www.gadekitchenware.com/",
      "name": "GADE Kitchenware",
      "description": "Smart Utility Products for Modern Living — Kitchen racks, organizers, planters, baking tools and home essentials designed for Indian homes.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.gadekitchenware.com/products?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.gadekitchenware.com/#organization",
      "name": "GADE Kitchenware",
      "alternateName": "Kamal Enterprises",
      "url": "https://www.gadekitchenware.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.gadekitchenware.com/favicon.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-89765-70008",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://wa.me/918976570008"
      ]
    },
    {
      "@type": "ItemList",
      "name": "Site Navigation",
      "itemListElement": [
        { "@type": "SiteLinksSearchBox", "potentialAction": { "@type": "SearchAction", "target": "https://www.gadekitchenware.com/products" } },
        { "@type": "ListItem", "position": 1, "name": "Products", "url": "https://www.gadekitchenware.com/products" },
        { "@type": "ListItem", "position": 2, "name": "About Us", "url": "https://www.gadekitchenware.com/about" },
        { "@type": "ListItem", "position": 3, "name": "Distributors", "url": "https://www.gadekitchenware.com/distributors" },
        { "@type": "ListItem", "position": 4, "name": "Contact Us", "url": "https://www.gadekitchenware.com/contact" }
      ]
    }
  ]
};

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NM4LWTH8');` }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-37CSSCMZKN" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-37CSSCMZKN');` }} />
        <HeadContent />
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NM4LWTH8" height="0" width="0" style={{ display: "none", visibility: "hidden" }} /></noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
