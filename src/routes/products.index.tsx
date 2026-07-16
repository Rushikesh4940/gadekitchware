import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { Download } from "lucide-react";
import { z } from "zod";
import { products, categories, waLink } from "@/lib/products";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What's the minimum order quantity (MOQ)?",
    a: "MOQ varies by product, from 12 pieces for larger items like kitchen racks up to 300+ for small storage boxes — each product page lists its exact MOQ. For mixed-SKU wholesale orders, contact us and we'll work out a combined minimum.",
  },
  {
    q: "How long does delivery take?",
    a: "Orders typically leave our facility within 1–3 business days of confirmation, with transit taking a further 3–7 days depending on your location. We deliver pan-India.",
  },
  {
    q: "Do you offer returns or exchanges?",
    a: "As these are wholesale/bulk orders, we don't accept general returns or exchanges — but if there's a quality issue or damage with your order, contact us directly and we'll make it right.",
  },
  {
    q: "Can I get custom colours or branding on products?",
    a: "Many of our SKUs are available in multiple colourways, and co-branded packaging can be arranged for larger distributor orders — ask us when you enquire.",
  },
] as const;

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

const productsSearchSchema = z.object({
  category: z.string().optional(),
});

export const Route = createFileRoute("/products/")({
  validateSearch: productsSearchSchema,
  head: () => ({
    meta: [
      { title: "Wholesale Products — GADE Kitchenware | Kitchen Racks, Organisers, Bakeware & More" },
      { name: "description", content: "Browse 80+ wholesale plastic products: kitchen racks, storage organisers, modak moulds, karanji makers, measuring tools, flower pots, egg storage boxes and bathroom accessories." },
      { name: "keywords", content: "plastic kitchen products wholesale, kitchen rack India, storage organizer wholesale, modak mould, karanji maker, flower pot wholesale, measuring cups supplier, bakeware wholesale, egg storage box, bathroom organizer wholesale India" },
      { property: "og:title", content: "Wholesale Products — GADE Kitchenware" },
      { property: "og:description", content: "80+ wholesale plastic products across 7 categories. Kitchen racks, organisers, bakeware, planters, kitchen makers, egg & fridge storage and bathroom essentials." },
      { property: "og:url", content: "https://www.gadekitchenware.com/products" },
    ],
    links: [
      { rel: "canonical", href: "https://www.gadekitchenware.com/products" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { category } = Route.useSearch();
  const navigate = Route.useNavigate();
  const filter = category ?? "all";

  const setFilter = (next: string) => {
    navigate({
      search: next === "all" ? {} : { category: next },
      replace: true,
    });
  };

  const filtered = useMemo(
    () => (filter === "all" ? products : products.filter((p) => {
      const cat = categories.find((c) => c.slug === filter);
      return cat ? p.category === cat.name : true;
    })),
    [filter]
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <section className="border-b border-border bg-ivory">
        <div className="container-x py-20 md:py-28">
          <div className="eyebrow rise">The catalogue</div>
          <h1 className="display-1 mt-6 font-display rise-2 max-w-3xl">
            Every product we make,<br /> in one place.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground rise-3">
            {products.length} products across {categories.length} categories. Filter by what you need.
          </p>
          <a
            href="/gade-product-catalogue.pdf"
            download="Gade-Product-Catalogue.pdf"
            className="rise-3 mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Download className="h-4 w-4" />
            Download Full Catalogue (PDF)
          </a>
        </div>
      </section>

      <section className="container-x py-14 md:py-20">
        <div className="flex flex-wrap items-center gap-2 border-b border-border pb-6">
          <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>All ({products.length})</FilterChip>
          {categories.map((c) => {
            const count = products.filter((p) => p.category === c.name).length;
            return (
              <FilterChip key={c.slug} active={filter === c.slug} onClick={() => setFilter(c.slug)}>
                {c.name} ({count})
              </FilterChip>
            );
          })}
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.id} className="group flex flex-col">
              <Link to="/products/$id" params={{ id: p.id }} className="flex flex-col flex-1">
                <div className="relative overflow-hidden rounded-xl bg-ivory">
                  <img src={p.image} alt={p.name} loading="lazy" width={600} height={600} className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  {p.badge && (
                    <div className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground">{p.badge}</div>
                  )}
                </div>
                <div className="mt-4 flex-1">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.category}</div>
                  <h3 className="mt-1 font-display text-lg leading-tight group-hover:text-primary transition-colors">{p.name}</h3>
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
          <h2 className="mt-4 font-display text-3xl">Frequently asked questions</h2>
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

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
        active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:bg-muted"
      }`}
    >
      {children}
    </button>
  );
}
