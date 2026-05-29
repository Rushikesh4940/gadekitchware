import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Boxes, Layers, Recycle, ShieldCheck, Sparkles, Truck } from "lucide-react";
import hero from "@/assets/hero.jpg";
import story from "@/assets/story.jpg";
import { categories, products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GADE Kitchware — Smart Utility Products for Modern Living" },
      { name: "description", content: "Premium kitchen storage, racks, organizers and household utility products engineered in India." },
      { property: "og:title", content: "GADE Kitchware — Smart Utility Products for Modern Living" },
      { property: "og:description", content: "Premium kitchen storage, racks, organizers and household utility products engineered in India." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ivory">
        <div className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
        <div className="container-x relative grid gap-10 pb-20 pt-16 md:grid-cols-12 md:pb-28 md:pt-24">
          <div className="md:col-span-6 lg:col-span-5">
            <div className="eyebrow rise">Made in India · Since 1998</div>
            <h1 className="display-1 mt-6 font-display rise-2">
              Smart utility,<br />
              <span className="italic text-primary">crafted</span> for<br />
              modern living.
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground rise-3">
              Containers, racks, organizers and measuring tools designed for the
              way Indian homes actually run — daily, demanding, beautifully ordered.
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
                { k: "14", v: "States served" },
                { k: "25 yr", v: "Of manufacturing" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative md:col-span-6 lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl bg-card shadow-soft">
              <img
                src={hero}
                alt="Floating composition of GADE kitchen containers and measuring tools"
                className="aspect-[5/4] w-full object-cover float-slow"
                width={1600}
                height={1280}
              />
            </div>
            <div className="absolute -left-6 bottom-10 hidden w-64 rounded-2xl border border-border bg-background p-5 shadow-soft md:block">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary">
                <Sparkles className="h-3.5 w-3.5" /> New this season
              </div>
              <p className="mt-2 font-display text-lg leading-tight">The StackPro modular pantry system</p>
              <Link to="/products/stack-pro-2l" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-foreground hover:text-primary">
                See the set <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border/60 bg-background py-5">
          <div className="flex overflow-hidden">
            <div className="marquee-track flex shrink-0 items-center gap-16 pr-16 font-display text-xl text-muted-foreground/70">
              {Array.from({ length: 2 }).flatMap((_, i) =>
                ["Kitchen Storage", "Utility Racks", "Modular Organizers", "Measuring Tools", "Baskets & Trays", "Household Essentials"].map((t, j) => (
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

      {/* CATEGORIES */}
      <section className="container-x py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="eyebrow">Explore by category</div>
            <h2 className="display-2 mt-5 font-display">
              Six worlds of utility,<br /> one quiet aesthetic.
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
              <div className={`relative ${i === 0 ? "aspect-[4/5]" : "aspect-[4/5]"} overflow-hidden`}>
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
            {products.slice(0, 4).map((p) => (
              <Link to="/products/$id" params={{ id: p.id }} key={p.id} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-card">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {p.badge && (
                    <div className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground">
                      {p.badge}
                    </div>
                  )}
                  <div className="absolute inset-x-3 bottom-3 translate-y-2 rounded-lg bg-background/95 px-4 py-3 text-center text-sm font-medium opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Quick view →
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.category}</div>
                    <h3 className="mt-1 font-display text-lg leading-tight">{p.name}</h3>
                  </div>
                  <div className="font-display text-base text-primary">{p.price}</div>
                </div>
              </Link>
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
              We started in 1998 with a single injection-moulding line and a stubborn belief
              that household plastics deserved the same engineering rigour as anything else.
              Twenty-five years later, we ship over 180 SKUs to homes across 14 states —
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
          <div className="max-w-2xl">
            <div className="eyebrow text-primary">Why GADE</div>
            <h2 className="display-2 mt-5 font-display">
              Built like utility products used to be built.
            </h2>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ivory/10 bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { i: ShieldCheck, t: "Tested durability", d: "Drop, twist and thermal cycle tested before any tool ships." },
              { i: Layers, t: "Stack-engineered", d: "Every shape nests and stacks — your shelves stay shelves." },
              { i: Recycle, t: "Food-grade polymers", d: "Virgin BPA-free resin in every batch. No surprises." },
              { i: Boxes, t: "180+ SKUs", d: "One supplier, one quality bar, the whole utility aisle." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="bg-ink p-8">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-6 font-display text-xl">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISTRIBUTOR */}
      <section className="container-x py-24 md:py-32">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary-deep opacity-50 blur-3xl" />
          <div className="relative grid gap-10 p-10 md:grid-cols-2 md:p-16">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary-foreground/80">For wholesalers · retailers · distributors</div>
              <h2 className="display-2 mt-5 font-display">
                Partner with a brand built for repeat orders.
              </h2>
              <p className="mt-6 max-w-md text-primary-foreground/80">
                Margin-friendly pricing, fast turnaround on bulk orders, and product
                designed for genuine sell-through. Request a catalogue and a callback.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-4 md:items-end">
              <Link to="/distributors" className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-ivory">
                <Truck className="h-4 w-4" /> Distributor enquiry
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground">
                Or download catalogue PDF <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
