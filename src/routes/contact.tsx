import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GADE Kitchenware — Wholesale Enquiries, Mumbai | +91 89765 70008" },
      { name: "description", content: "Contact GADE Kitchenware for wholesale enquiries, bulk orders and catalogue requests. Reach Sankesh Gade at +91 89765 70008 or gadekitchenware@gmail.com. Vasai East, Mumbai." },
      { name: "keywords", content: "contact GADE Kitchenware, plastic kitchenware wholesale enquiry, bulk order kitchen products India, Sankesh Gade contact, Vasai Mumbai kitchenware supplier" },
      { property: "og:title", content: "Contact GADE Kitchenware — Wholesale Enquiries Mumbai" },
      { property: "og:description", content: "Wholesale enquiries, bulk orders and catalogue requests. Call +91 89765 70008 or WhatsApp us. Based in Vasai East, Mumbai, Maharashtra." },
      { property: "og:url", content: "https://www.gadekitchenware.com/contact" },
    ],
    links: [
      { rel: "canonical", href: "https://www.gadekitchenware.com/contact" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const subject = String(data.get("subject") ?? "") || "Website enquiry";
    const message = String(data.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const mailto = `mailto:gadekitchenware@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

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
        <div className="md:col-span-5">
          <div className="space-y-8 border-t border-border pt-8">
            <ContactRow icon={Phone} label="Contact Person" value="Sankesh Gade" />
            <ContactRow icon={Phone} label="Phone / WhatsApp" value="+91 89765 70008" />
            <ContactRow icon={Mail} label="Email" value={"gadekitchenware@gmail.com\nsanket.gade2@gmail.com"} />
            <ContactRow icon={Instagram} label="Instagram" value="@gadekitchenware" href="https://www.instagram.com/gadekitchenware/" />
            <ContactRow icon={MapPin} label="Address" value={"H.No.2/1, Gala No.9, S No. 46/C\nShivam Industries, Gauraipada Road\nAsai, Vasai East — 401208\nMaharashtra, India"} />
          </div>
          <div className="mt-8 rounded-lg border border-border bg-muted/40 px-4 py-3 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">GSTIN:</span> 27AZBPG5815D1ZQ
          </div>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-7 rounded-xl border border-border bg-card p-8 md:p-10">
          <h2 className="font-display text-2xl">Send a message</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Subject" name="subject" />
          </div>
          <div className="mt-5">
            <label htmlFor="contact-message" className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea id="contact-message" name="message" rows={5} required className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20" />
          </div>
          <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-deep">
            Send message
          </button>
          {sent && (
            <p className="mt-3 text-xs text-muted-foreground" role="status">
              Opening your email app to send this to gadekitchenware@gmail.com…
            </p>
          )}
        </form>
      </section>
    </>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: React.ElementType; label: string; value: string; href?: string }) {
  return (
    <div className="flex gap-4">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      <div>
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="mt-1 block whitespace-pre-line text-sm leading-relaxed hover:text-primary">{value}</a>
        ) : (
          <div className="mt-1 whitespace-pre-line text-sm leading-relaxed">{value}</div>
        )}
      </div>
    </div>
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
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={id} name={name} type={type} required={required} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20" />
    </div>
  );
}
