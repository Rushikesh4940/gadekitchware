import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Download, Truck } from "lucide-react";

export const Route = createFileRoute("/distributors")({
  head: () => ({
    meta: [
      { title: "Distributors & Wholesalers — GADE Kitchware" },
      { name: "description", content: "Partner with GADE for wholesale and distribution of premium household and kitchen utility products across India." },
      { property: "og:title", content: "Distributors & Wholesalers — GADE Kitchware" },
      { property: "og:description", content: "Margin-friendly pricing, bulk orders, and product designed for genuine sell-through." },
    ],
  }),
  component: DistributorsPage,
});

function DistributorsPage() {
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
        <div className="md:col-span-7 space-y-4">
          {[
            "Wholesale pricing tiered to volume",
            "Dedicated distributor support manager",
            "Bulk order turnaround under 14 days",
            "Co-branded marketing collateral on request",
            "MOQ from 50 units per SKU",
          ].map((t) => (
            <div key={t} className="flex items-center gap-3 rounded-xl border border-border bg-card p-5">
              <Check className="h-5 w-5 text-primary" /> <span className="text-sm">{t}</span>
            </div>
          ))}
        </div>

        <form className="md:col-span-5 space-y-4 rounded-2xl border border-border bg-card p-8">
          <h2 className="font-display text-2xl">Distributor enquiry</h2>
          <Field label="Business name" />
          <Field label="Contact person" />
          <Field label="City, State" />
          <Field label="Phone / WhatsApp" type="tel" />
          <Field label="Email" type="email" />
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Tell us about your business</label>
            <textarea rows={3} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
          </div>
          <button type="button" className="w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-primary-deep">
            Send enquiry
          </button>
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

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input type={type} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
    </div>
  );
}
