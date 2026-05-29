import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { products } from "@/lib/products";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.product.name} — GADE Kitchware` : "Product — GADE" },
      { name: "description", content: loaderData?.product.desc ?? "GADE product" },
      { property: "og:title", content: loaderData?.product.name ?? "GADE product" },
      { property: "og:description", content: loaderData?.product.desc ?? "GADE product" },
      ...(loaderData?.product.image ? [{ property: "og:image", content: loaderData.product.image }] : []),
    ],
  }),
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="font-display text-4xl">Product not found</h1>
      <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to catalogue
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-x py-32 text-center">
      <h1 className="font-display text-2xl">Couldn't load this product</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground">Try again</button>
    </div>
  ),
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <>
      <section className="container-x pt-10">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to catalogue
        </Link>
      </section>

      <section className="container-x grid gap-12 py-10 md:grid-cols-12 md:gap-16 md:py-16">
        <div className="md:col-span-7">
          <div className="overflow-hidden rounded-3xl bg-ivory">
            <img src={product.image} alt={product.name} width={1200} height={1500} className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl border border-border bg-ivory">
                <img src={product.image} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.22em] text-primary">{product.category}</div>
          <h1 className="mt-4 font-display text-4xl md:text-5xl leading-tight">{product.name}</h1>
          <div className="mt-6 font-display text-3xl text-primary">{product.price}</div>
          <p className="mt-6 leading-relaxed text-muted-foreground">{product.desc}</p>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
            <Spec label="Dimensions" value={product.dims} />
            <Spec label="Pack" value={product.pack} />
            <Spec label="Material" value="Food-grade polymer" />
            <Spec label="Warranty" value="12 months" />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary-deep">
              Enquire about bulk pricing
            </Link>
            <a href="https://wa.me/919800000000" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3.5 text-sm font-medium hover:bg-muted">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <ul className="mt-10 space-y-3 border-t border-border pt-8 text-sm">
            {["BPA-free, food-grade material", "Dishwasher safe up to 70 °C", "Available in 6 colourways"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-muted-foreground">
                <Check className="h-4 w-4 text-primary" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-x py-20">
          <h2 className="font-display text-3xl">More in {product.category}</h2>
          <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-3">
            {related.map((p) => (
              <Link key={p.id} to="/products/$id" params={{ id: p.id }} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-card">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-4 flex justify-between gap-3">
                  <h3 className="font-display text-lg">{p.name}</h3>
                  <span className="font-display text-primary">{p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background p-4">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-medium">{value}</div>
    </div>
  );
}
