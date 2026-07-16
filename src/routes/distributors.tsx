import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Download, Truck } from "lucide-react";

export const Route = createFileRoute("/distributors")({
  head: () => ({
    meta: [
      { title: "Become a Distributor — GADE Kitchenware Wholesale Partnership India" },
      { name: "description", content: "Partner with GADE Kitchenware as a wholesale distributor or retailer. Competitive MOQs, margin-friendly pricing, bulk supply of plastic kitchen and home products across India." },
      { name: "keywords", content: "GADE Kitchenware distributor, plastic kitchenware wholesale partner India, kitchen products distributor Mumbai, household plastic wholesale dealership, B2B kitchenware supplier India" },
      { property: "og:title", content: "Become a GADE Kitchenware Distributor — Wholesale Partnership India" },
      { property: "og:description", content: "Wholesale and distribution partnerships for plastic kitchen racks, organisers, modak moulds and home essentials. Competitive pricing, pan India delivery." },
      { property: "og:url", content: "https://www.gadekitchenware.com/distributors" },
    ],
    links: [
      { rel: "canonical", href: "https://www.gadekitchenware.com/distributors" },
    ],
  }),
  component: DistributorsPage,
});

function DistributorsPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const business = String(data.get("business") ?? "");
    const contact = String(data.get("contact") ?? "");
    const city = String(data.get("city") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const about = String(data.get("about") ?? "");

    const body = [
      `Business name: ${business}`,
      `Contact person: ${contact}`,
      `City, State: ${city}`,
      phone ? `Phone / WhatsApp: ${phone}` : null,
      `Email: ${email}`,
      "",
      about,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const mailto = `mailto:gadekitchenware@gmail.com?subject=${encodeURIComponent(`Distributor enquiry — ${business}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <>
      <section className="bg-ivory">
        <div className="container-x py-20 md:py-28">
          <div className="eyebrow">For the trade</div>
          <h1 className="display-1 mt-6 max-w-3xl font-display">
            Stock a brand that <span className="italic text-primary">moves</span>.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Margin-friendly pricing, fast bulk fulfilment, and a product line that earns its shelf space.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-7">
          <ul className="space-y-5 border-t border-border pt-8">
            {[
              "Wholesale pricing tiered to volume",
              "Dedicated distributor support manager",
              "Bulk order turnaround under 14 days",
              "Co-branded marketing collateral on request",
              "MOQ from 50 units per SKU",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-5 space-y-4 rounded-xl border border-border bg-card p-8">
          <h2 className="font-display text-2xl">Distributor enquiry</h2>
          <Field label="Business name" name="business" required />
          <Field label="Contact person" name="contact" required />
          <Field label="City, State" name="city" required />
          <Field label="Phone / WhatsApp" name="phone" type="tel" />
          <Field label="Email" name="email" type="email" required />
          <div>
            <label htmlFor="distributor-about" className="text-xs uppercase tracking-wider text-muted-foreground">Tell us about your business</label>
            <textarea id="distributor-about" name="about" rows={3} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20" />
          </div>
          <button type="submit" className="w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-primary-deep">
            Send enquiry
          </button>
          {sent && (
            <p className="text-xs text-muted-foreground" role="status">
              Opening your email app to send this to gadekitchenware@gmail.com…
            </p>
          )}
          <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4" /> Bulk-ready</span>
            <Link to="/contact" className="inline-flex items-center gap-1 hover:text-foreground">
              <Download className="h-3.5 w-3.5" /> Catalogue PDF
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  const id = `distributor-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={id} name={name} type={type} required={required} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20" />
    </div>
  );
}
