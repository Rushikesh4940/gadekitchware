import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Boxes, Layers, Recycle, ShieldCheck, Truck } from "lucide-react";
import hero from "@/assets/hero.jpg";
import story from "@/assets/story.jpg";
import { categories, products, waLink } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GADE Kitchenware — Plastic Kitchen & Home Products Wholesale | Made in India" },
      { name: "description", content: "India's trusted wholesale supplier of plastic kitchenware. Kitchen racks, modak moulds, karanji makers, storage organisers, flower pots & more. B2B bulk orders. Pan India delivery." },
      { name: "keywords", content: "GADE Kitchenware, plastic kitchenware wholesale, kitchen rack wholesale Mumbai, modak mould supplier India, karanji maker manufacturer, plastic household products wholesale" },
      { property: "og:title", content: "GADE Kitchenware — Plastic Kitchen & Home Products Wholesale" },
      { property: "og:description", content: "India's trusted B2B wholesale supplier of plastic kitchen racks, organizers, modak moulds, karanji makers, flower pots and home essentials. Based in Mumbai." },
      { property: "og:url", content: "https://www.gadekitchenware.com/" },
    ],
  }),
  component: Home,
});

const orgSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GADE Kitchenware",
  alternateName: "Kamal Enterprises",
  url: "https://www.gadekitchenware.com",
  logo: "https://www.gadekitchenware.com/favicon.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-89765-70008",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Marathi"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "H.No.2/1, Gala No.9, S No. 46/C, Shivam Industries, Gauraipada Road, Asai",
    addressLocality: "Vasai East",
    addressRegion: "Maharashtra",
    postalCode: "401208",
    addressCountry: "IN",
  },
  sameAs: ["https://www.instagram.com/gadekitchenware/"],
});

function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: orgSchema }} />
      {/* HERO */}
      <section className="bg-ivory">
        <div className="container-x grid gap-10 pb-20 pt-16 md:grid-cols-12 md:pb-28 md:pt-24">
          <div className="md:col-span-6 lg:col-span-5">
            <div className="eyebrow rise">Made in India · Since 2017</div>
            <h1 className="display-1 mt-6 font-display rise-2">
              Smart utility,<br />
              crafted for<br />
              modern living.
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground rise-3">
              Kitchen racks, organizers, planters, baking tools and home essentials
              designed for the way Indian homes actually run — daily, demanding, beautifully ordered.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3 rise-4">
              <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep">
                Explore the catalogue
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/distributors" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium hover:bg-muted">
                Become a distributor
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border/70 pt-8">
              {[
                { k: "180+", v: "Active SKUs" },
                { k: "All India", v: "Nationwide delivery" },
                { k: "2017", v: "Est. in Maharashtra" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-6 lg:col-span-7">
            <div className="overflow-hidden rounded-2xl bg-card shadow-soft">
              <img
                src={hero}
                alt="GADE kitchen containers and measuring tools"
                className="aspect-[5/4] w-full object-cover"
                width={1600}
                height={1280}
              />
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border/60 bg-background py-5">
          <div className="flex overflow-hidden">
            <div className="marquee-track flex shrink-0 items-center gap-16 pr-16 font-display text-xl text-muted-foreground/70">
              {Array.from({ length: 2 }).flatMap((_, i) =>
                ["Kitchen Racks", "Storage & Organizers", "Baking Tools", "Planters", "Kitchen Makers", "Egg & Fridge", "Measuring Tools", "Bathroom & Home", "All India Delivery", "Wholesale Enquiries Welcome"].map((t, j) => (
                  <span key={`${i}-${j}`} className="flex items-center gap-16">
                    <span>{t}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="container-x py-24 md:py-32">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow rise">Just landed</div>
            <h2 className="display-2 mt-5 font-display rise-2 max-w-xl">New arrivals.</h2>
          </div>
          <Link to="/products" className="hidden text-sm font-medium md:inline-flex md:items-center md:gap-2">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.filter((p) => p.badge === "New").slice(0, 4).map((p) => (
            <div key={p.id} className="group">
              <Link to="/products/$id" params={{ id: p.id }}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-card">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground">
                    New
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.category}</div>
                  <h3 className="mt-1 font-display text-lg leading-tight group-hover:text-primary transition-colors">{p.name}</h3>
                  <div className="mt-1 font-display text-base text-primary">{p.price}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{p.moq}</div>
                </div>
              </Link>
              <a
                href={waLink(p.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-border py-2 text-xs font-medium text-foreground/70 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Enquire on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-x py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="eyebrow">Explore by category</div>
            <h2 className="display-2 mt-5 font-display">
              Seven categories,<br /> one trusted brand.
            </h2>
          </div>
          <Link to="/products" className="group inline-flex items-center gap-2 text-sm font-medium">
            View full catalogue
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to="/products"
              search={{ category: c.slug } as never}
              className="group lift relative overflow-hidden rounded-2xl bg-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center rounded-full bg-background/90 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-foreground">
                  {c.count} products
                </div>
                <div className="absolute inset-x-5 bottom-5 text-ivory">
                  <h3 className="font-display text-2xl leading-tight">{c.name}</h3>
                  <p className="mt-2 max-w-xs text-sm text-ivory/80">{c.blurb}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                    Browse <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow">Featured</div>
              <h2 className="display-2 mt-5 font-display max-w-xl">Pieces our customers reorder.</h2>
            </div>
            <Link to="/products" className="hidden text-sm font-medium md:inline-flex md:items-center md:gap-2">
              All products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {["container-desk-organizer", "flower-pot-7inch-d1", "modak-3fold", "toothbrush-holder-teddy"]
              .map((id) => products.find((p) => p.id === id)!)
              .filter(Boolean)
              .map((p) => (
              <div key={p.id} className="group">
                <Link to="/products/$id" params={{ id: p.id }}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-card">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={900}
                      height={1100}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {p.badge && (
                      <div className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground">
                        {p.badge}
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.category}</div>
                    <h3 className="mt-1 font-display text-lg leading-tight group-hover:text-primary transition-colors">{p.name}</h3>
                    <div className="mt-1 text-xs text-muted-foreground">{p.moq}</div>
                  </div>
                </Link>
                <a
                  href={waLink(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-border py-2 text-xs font-medium text-foreground/70 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Enquire on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="container-x py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-3xl">
              <img src={story} alt="GADE manufacturing facility in Maharashtra" loading="lazy" width={1400} height={1000} className="aspect-[7/5] w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="eyebrow">The GADE story</div>
            <h2 className="display-2 mt-5 font-display">
              A quiet obsession with what happens after the sale.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We started in 2017 with a single injection-moulding line and a stubborn belief
              that household plastics deserved the same engineering rigour as anything else.
              Eight years later, we ship over 180 SKUs to homes across all states —
              still on the same belief.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {[
                "Food-grade virgin polymers, every batch tested.",
                "Tooling refined over a decade of real-home feedback.",
                "Designed to nest, stack, and survive a thousand washes.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm font-medium">
              Read our full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY GADE */}
      <section className="bg-ink text-ivory py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="eyebrow text-primary">Why GADE</div>
              <h2 className="display-2 mt-5 font-display">
                Built like utility products used to be built.
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid gap-10 sm:grid-cols-2">
                {[
                  { i: ShieldCheck, t: "Tested durability", d: "Drop, twist and thermal cycle tested before any tool ships." },
                  { i: Layers, t: "Stack-engineered", d: "Every shape nests and stacks — your shelves stay shelves." },
                  { i: Recycle, t: "Food-grade polymers", d: "Virgin BPA-free resin in every batch. No surprises." },
                  { i: Boxes, t: "180+ SKUs", d: "One supplier, one quality bar, the whole utility aisle." },
                ].map(({ i: Icon, t, d }) => (
                  <div key={t} className="flex gap-4">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-display text-lg text-ivory">{t}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ivory/60">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISTRIBUTOR */}
      <section className="container-x py-24 md:py-32">
        <div className="rounded-2xl bg-primary text-primary-foreground">
          <div className="grid gap-10 p-10 md:grid-cols-2 md:p-14">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary-foreground/70">For wholesalers · retailers · distributors</div>
              <h2 className="display-2 mt-5 font-display">
                Partner with a brand built for repeat orders.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/75">
                Margin-friendly pricing, fast turnaround on bulk orders, and product
                designed for genuine sell-through. Request a catalogue and a callback.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-4 md:items-end">
              <Link to="/distributors" className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-ivory">
                <Truck className="h-4 w-4" /> Distributor enquiry
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground">
                Download catalogue PDF <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
