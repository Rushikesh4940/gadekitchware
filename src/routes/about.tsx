import { createFileRoute } from "@tanstack/react-router";
import story from "@/assets/story.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GADE Kitchware — 25 Years of Indian Manufacturing" },
      { name: "description", content: "GADE Kitchware has been engineering modern household and kitchen utility products in India since 1998." },
      { property: "og:title", content: "About GADE Kitchware" },
      { property: "og:description", content: "25 years of Indian household manufacturing — engineered to last." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-x grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <div className="eyebrow rise">Our story</div>
            <h1 className="display-1 mt-6 font-display rise-2">
              Twenty-five years<br /> of <span className="italic text-primary">quiet utility</span>.
            </h1>
          </div>
          <div className="md:col-span-5 md:pt-10">
            <p className="text-base leading-relaxed text-muted-foreground rise-3">
              GADE was founded on a single belief: a household utility product should
              outlast the trend that sold it. Twenty-five years and 180 SKUs later,
              we still build to that bar.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="overflow-hidden rounded-3xl">
          <img src={story} alt="Inside the GADE manufacturing facility" loading="lazy" width={1400} height={1000} className="aspect-[16/9] w-full object-cover" />
        </div>
      </section>

      <section className="container-x grid gap-16 pb-24 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="font-display text-3xl md:text-4xl leading-tight">From a single moulding line to a household name.</h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
          <p>We began in 1998 with one injection-moulding machine in Maharashtra and a small team obsessed with tolerances. The first product was an airtight container — still in the catalogue today, refined across nine generations of tooling.</p>
          <p>Two decades on, GADE products ship to homes across 14 Indian states and to distributors in five neighbouring countries. The machines are bigger and there are more of them, but the obsession hasn't moved.</p>
          <p>We test every batch. We refine tools when feedback warrants it. We keep prices fair because the people buying our products are the ones who use them, every day.</p>
        </div>
      </section>

      <section className="bg-ink text-ivory py-24">
        <div className="container-x grid gap-10 md:grid-cols-4">
          {[
            { k: "1998", v: "Founded in Maharashtra" },
            { k: "180+", v: "Active SKUs" },
            { k: "14", v: "Indian states served" },
            { k: "5", v: "Export markets" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-5xl text-primary">{s.k}</div>
              <div className="mt-2 text-sm text-ivory/70">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
