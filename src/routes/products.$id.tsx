import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, ChevronRight, MessageCircle } from "lucide-react";
import { products, waLink } from "@/lib/products";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.product.name} — GADE Kitchenware` : "Product — GADE" },
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
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">

      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="container-x py-3">
          <nav className="flex items-center gap-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/products" className="hover:text-foreground">Products</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground line-clamp-1">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product */}
      <section className="container-x py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">

          {/* Image */}
          <div className="flex flex-col gap-3">
            <div className="overflow-hidden rounded-2xl border border-border bg-ivory">
              <img
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="aspect-square w-full object-cover"
              />
            </div>
            {/* Placeholder thumbnails — update when more images are available */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`overflow-hidden rounded-lg border-2 bg-ivory ${i === 1 ? "border-primary" : "border-border"}`}>
                  <img
                    src={product.image}
                    alt={`${product.name} ${i}`}
                    className="aspect-square w-full object-cover opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">

            {/* Category + badge */}
            <div className="flex items-center gap-2">
              <Link to="/products" className="text-xs uppercase tracking-widest text-primary hover:underline">
                {product.category}
              </Link>
              {product.badge && (
                <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="mt-2 font-display text-3xl leading-tight md:text-4xl">
              {product.name}
            </h1>

            {/* Price + MOQ */}
            <div className="mt-5 rounded-xl border border-border bg-muted/30 px-5 py-4">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl text-primary">{product.price}</span>
                <span className="text-sm text-muted-foreground">/ unit</span>
              </div>
              <div className="mt-1.5 flex items-center gap-2 text-sm">
                <span className="font-medium">{product.moq}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">Bulk pricing on request</span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Description</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{product.desc}</p>
            </div>

            {/* Specs */}
            <div className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Specifications</h2>
              <div className="mt-3 divide-y divide-border rounded-xl border border-border overflow-hidden">
                {[
                  { label: "Dimensions", value: product.dims },
                  { label: "Pack", value: product.pack },
                  { label: "Material", value: "Food-grade polymer (BPA-free)" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-4 px-4 py-3 text-sm">
                    <span className="w-28 shrink-0 text-muted-foreground">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust bullets */}
            <ul className="mt-5 space-y-1.5">
              {[
                "BPA-free, food-grade material",
                "Dishwasher safe up to 70 °C",
                "Available in multiple colourways",
                "Pan India delivery",
                "Price includes GST",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-3.5 w-3.5 shrink-0 text-primary" /> {t}
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={waLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5d]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enquire on WhatsApp
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full border border-border py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <MessageCircle className="h-4 w-4" /> Send an enquiry
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-border bg-ivory py-14">
          <div className="container-x">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl">You may also like</h2>
              <Link to="/products" className="text-sm font-medium text-primary hover:underline">View all</Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {related.map((p) => (
                <Link key={p.id} to="/products/$id" params={{ id: p.id }} className="group">
                  <div className="overflow-hidden rounded-xl border border-border bg-white">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2.5">
                    <p className="text-sm font-medium leading-snug line-clamp-2 group-hover:text-primary transition-colors">{p.name}</p>
                    <p className="mt-1 font-display text-base text-primary">{p.price}</p>
                    <p className="text-[11px] text-muted-foreground">{p.moq}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
