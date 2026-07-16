import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { products, waLink } from "@/lib/products";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BASE_URL = "https://www.gadekitchenware.com";
const PAGE_URL = `${BASE_URL}/products/modak-moulds`;

const faqs = [
  {
    q: "What sizes of modak mould do you make?",
    a: "Small, medium and large single-cavity moulds, a 3-fold mould, a 4-piece combo set covering multiple sizes, and a 1 kg mould for big festive modak — nine variants in total.",
  },
  {
    q: "Are these moulds food-grade and safe for festival cooking?",
    a: "Yes — every mould is made from food-grade, BPA-free plastic and is built for repeated use through the Ganesh Chaturthi season and beyond.",
  },
  {
    q: "What's the MOQ for bulk/wholesale modak mould orders?",
    a: "MOQ varies by size — from 210 pieces for the smaller Modak Patti moulds up to 1,000 pieces for the 1 KG mould. Contact us for combined-SKU wholesale orders ahead of festival season.",
  },
  {
    q: "How fast can you supply before Ganesh Chaturthi?",
    a: "Orders confirmed with enough lead time before the festival season ship within 1–3 business days, with 3–7 days transit pan-India — reach out early to secure festival-season stock.",
  },
] as const;

export const Route = createFileRoute("/products/modak-moulds")({
  head: () => ({
    meta: [
      {
        title: "Modak Mould Manufacturer & Wholesale Supplier India | GADE Kitchenware",
      },
      {
        name: "description",
        content:
          "GADE Kitchenware manufactures plastic modak moulds in small, medium, large, 3-fold, combo and 1kg sizes — food-grade, wholesale-ready, and built for Ganesh Chaturthi bulk orders across India.",
      },
      {
        name: "keywords",
        content:
          "modak mould, modak mould wholesale, modak mould manufacturer India, ukadiche modak mould, modak maker, plastic modak mould Ganesh Chaturthi, modak mould bulk order",
      },
      { property: "og:title", content: "Modak Mould Manufacturer & Wholesale Supplier — GADE Kitchenware" },
      {
        property: "og:description",
        content:
          "Nine sizes of food-grade plastic modak moulds, from single-cavity small/medium/large to 3-fold and 1kg festive moulds. Wholesale and bulk supply pan-India.",
      },
      { property: "og:url", content: PAGE_URL },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: ModakMouldsPage,
});

function ModakMouldsPage() {
  const modakProducts = products.filter((p) => p.id.startsWith("modak"));

  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Products", item: `${BASE_URL}/products` },
      { "@type": "ListItem", position: 3, name: "Modak Moulds", item: PAGE_URL },
    ],
  });

  const collectionSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Modak Mould Manufacturer & Wholesale Supplier",
    url: PAGE_URL,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: modakProducts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE_URL}/products/${p.id}`,
        name: p.name,
      })),
    },
  });

  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: collectionSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <div className="border-b border-border bg-muted/30">
        <div className="container-x py-3">
          <nav className="flex items-center gap-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/products" className="hover:text-foreground">Products</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">Modak Moulds</span>
          </nav>
        </div>
      </div>

      <section className="border-b border-border bg-ivory">
        <div className="container-x py-20 md:py-28">
          <div className="eyebrow rise">Kitchen Makers · Festival season</div>
          <h1 className="display-1 mt-6 font-display rise-2 max-w-3xl">
            Modak moulds, in every size you need.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground rise-3">
            GADE manufactures food-grade plastic modak moulds for making ukadiche modak at home
            and at scale — small, medium and large single-cavity moulds, a quick 3-fold mould, a
            4-piece combo set, and a 1&nbsp;kg mould for big festive modak. Every mould is
            BPA-free, built for repeated use, and available for wholesale and bulk orders ahead of
            Ganesh Chaturthi.
          </p>
        </div>
      </section>

      <section className="container-x py-14 md:py-20">
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {modakProducts.map((p) => (
            <div key={p.id} className="group flex flex-col">
              <Link to="/products/$id" params={{ id: p.id }} className="flex flex-col flex-1">
                <div className="relative overflow-hidden rounded-xl bg-ivory">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {p.badge && (
                    <div className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground">
                      {p.badge}
                    </div>
                  )}
                </div>
                <div className="mt-4 flex-1">
                  <h2 className="mt-1 font-display text-lg leading-tight group-hover:text-primary transition-colors">
                    {p.name}
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span className="font-display text-base text-primary">{p.price}</span>
                    <span className="text-[11px] text-muted-foreground">{p.moq}</span>
                  </div>
                </div>
              </Link>
              <a
                href={waLink(p.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-border py-2 text-xs font-medium text-foreground/70 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
              >
                <WhatsAppIcon />
                Enquire on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-ivory py-16 md:py-20">
        <div className="container-x max-w-2xl">
          <div className="eyebrow">Good to know</div>
          <h2 className="mt-4 font-display text-3xl">Modak mould — frequently asked questions</h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="font-display text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
