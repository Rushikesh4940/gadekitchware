import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products, categories } from "@/lib/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — GADE Kitchware" },
      { name: "description", content: "Browse the full GADE catalogue: kitchen storage, utility racks, organizers, measuring tools, baskets and bathroom utilities." },
      { property: "og:title", content: "Products — GADE Kitchware" },
      { property: "og:description", content: "Browse the full GADE catalogue of premium household and kitchen utility products." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [filter, setFilter] = useState<string>("all");
  const filtered = useMemo(
    () => (filter === "all" ? products : products.filter((p) => p.category.toLowerCase().includes(filter))),
    [filter]
  );

  return (
    <>
      <section className="border-b border-border bg-ivory">
        <div className="container-x py-20 md:py-28">
          <div className="eyebrow rise">The catalogue</div>
          <h1 className="display-1 mt-6 font-display rise-2 max-w-3xl">
            Every utility we make,<br /> <span className="italic text-primary">in one place</span>.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground rise-3">
            180+ SKUs across six categories. Filter by what you need; we'll keep it organised.
          </p>
        </div>
      </section>

      <section className="container-x py-14 md:py-20">
        <div className="flex flex-wrap items-center gap-2 border-b border-border pb-6">
          <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>All</FilterChip>
          {categories.map((c) => (
            <FilterChip key={c.slug} active={filter === c.name.toLowerCase().split(" ")[0]} onClick={() => setFilter(c.name.toLowerCase().split(" ")[0])}>
              {c.name}
            </FilterChip>
          ))}
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link key={p.id} to="/products/$id" params={{ id: p.id }} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-card">
                <img src={p.image} alt={p.name} loading="lazy" width={900} height={1100} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {p.badge && (
                  <div className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground">{p.badge}</div>
                )}
              </div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.category}</div>
                  <h3 className="mt-1 font-display text-lg leading-tight">{p.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.pack}</p>
                </div>
                <div className="font-display text-base text-primary">{p.price}</div>
              </div>
            </Link>
          ))}
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
