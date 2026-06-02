import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
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
          <div className="overflow-hidden rounded-2xl bg-ivory">
            <img src={product.image} alt={product.name} width={1200} height={1500} className="aspect-[4/5] w-full object-cover" />
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.22em] text-primary">{product.category}</div>
          <h1 className="mt-4 font-display text-4xl md:text-5xl leading-tight">{product.name}</h1>
          <div className="mt-4 text-sm text-muted-foreground">{product.moq}</div>
          <p className="mt-6 leading-relaxed text-muted-foreground">{product.desc}</p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-8">
            <Spec label="Dimensions" value={product.dims} />
            <Spec label="Pack" value={product.pack} />
            <Spec label="Material" value="Food-grade polymer" />
            <Spec label="Warranty" value="12 months" />
          </dl>

          <div className="mt-10">
            <a
              href={waLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1ebe5d]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Enquire on WhatsApp
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
              <div key={p.id} className="group">
                <Link to="/products/$id" params={{ id: p.id }}>
                  <div className="aspect-[4/5] overflow-hidden rounded-xl bg-card">
                    <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-display text-lg group-hover:text-primary transition-colors">{p.name}</h3>
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
      )}
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-sm font-medium">{value}</dd>
    </div>
  );
}
