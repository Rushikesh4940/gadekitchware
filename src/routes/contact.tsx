import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GADE Kitchware" },
      { name: "description", content: "Get in touch with GADE Kitchware for product enquiries, catalogue requests, distribution and bulk orders." },
      { property: "og:title", content: "Contact GADE Kitchware" },
      { property: "og:description", content: "Reach our team for product, catalogue and distribution enquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-x py-20 md:py-28">
          <div className="eyebrow">Get in touch</div>
          <h1 className="display-1 mt-6 max-w-3xl font-display">
            Say hello — we <span className="italic text-primary">reply</span>.
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Product questions, catalogue requests, distribution enquiries. Our team responds within one business day.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5 space-y-6">
          <ContactCard icon={Phone} label="Phone" value="+91 98 0000 0000" />
          <ContactCard icon={MessageCircle} label="WhatsApp" value="+91 98 0000 0000" />
          <ContactCard icon={Mail} label="Email" value="hello@gadekitchware.com" />
          <ContactCard icon={MapPin} label="Visit" value={"Plot 14, MIDC Industrial Area\nMaharashtra, India"} />
        </div>

        <form className="md:col-span-7 rounded-2xl border border-border bg-card p-8 md:p-10">
          <h2 className="font-display text-2xl">Send a message</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field label="Name" />
            <Field label="Email" type="email" />
            <Field label="Phone" type="tel" />
            <Field label="Subject" />
          </div>
          <div className="mt-5">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea rows={5} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
          </div>
          <button type="button" className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-deep">
            Send message
          </button>
        </form>
      </section>
    </>
  );
}

function ContactCard({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      </div>
      <div className="mt-4 whitespace-pre-line font-display text-xl leading-tight">{value}</div>
    </div>
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
