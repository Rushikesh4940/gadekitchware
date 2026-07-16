import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, ChevronRight, MessageCircle } from "lucide-react";
import { products, waLink } from "@/lib/products";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — Buy Wholesale | GADE Kitchenware` : "Product — GADE Kitchenware";
    const desc = p ? `${p.desc} ${p.price !== "On request" ? `Price: ${p.price}.` : ""} ${p.moq}. Wholesale enquiries welcome.` : "GADE Kitchenware product";
    const url = p ? `https://www.gadekitchenware.com/products/${p.id}` : "https://www.gadekitchenware.com/products";
    const image = p?.image ? `https://www.gadekitchenware.com${p.image}` : "https://www.gadekitchenware.com/og-image.jpg";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: p ? `${p.name}, ${p.category} wholesale India, buy ${p.name} bulk, GADE Kitchenware` : "GADE Kitchenware" },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: p?.name ?? "GADE Product" },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "og:type", content: "product" },
        { name: "twitter:title", content: p?.name ?? "GADE Product" },
        { name: "twitter:description", content: desc },
        { name: "twitter:image", content: image },
      ],
      links: [
        { rel: "canonical", href: url },
      ],
    };
  },
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

  const hasPrice = product.price !== "On request";
  const priceValue = hasPrice ? product.price.replace(/[^\d.]/g, "").trim() : undefined;

  const productSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.desc,
    image: `https://www.gadekitchenware.com${product.image}`,
    brand: { "@type": "Brand", name: "GADE" },
    manufacturer: { "@type": "Organization", name: "Kamal Enterprises" },
    category: product.category,
    ...(hasPrice && priceValue ? {
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: priceValue,
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "GADE Kitchenware" },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: { "@type": "MonetaryAmount", currency: "INR" },
          shippingDestination: { "@type": "DefinedRegion", addressCountry: "IN" },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 3, unitCode: "d" },
            transitTime: { "@type": "QuantitativeValue", minValue: 3, maxValue: 7, unitCode: "d" },
          },
        },
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          applicableCountry: "IN",
          returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
        },
      },
    } : {}),
  });

  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.gadekitchenware.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.gadekitchenware.com/products" },
      { "@type": "ListItem", position: 3, name: product.name, item: `https://www.gadekitchenware.com/products/${product.id}` },
    ],
  });

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: productSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />

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
                    width={200}
                    height={200}
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
              <div className="mt-1.5 text-sm font-medium">{product.moq}</div>
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
                <WhatsAppIcon className="h-5 w-5" />
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
                      width={400}
                      height={400}
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
