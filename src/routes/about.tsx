import { createFileRoute } from "@tanstack/react-router";
import story from "@/assets/story.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GADE Kitchenware — 8 Years of Indian Manufacturing" },
      { name: "description", content: "GADE Kitchenware has been engineering modern household and kitchen utility products in India since 2017." },
      { property: "og:title", content: "About GADE Kitchenware" },
      { property: "og:description", content: "8 years of Indian household manufacturing — engineered to last." },
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
              Eight years<br /> of <span className="italic text-primary">quiet utility</span>.
            </h1>
          </div>
          <div className="md:col-span-5 md:pt-10">
            <p className="text-base leading-relaxed text-muted-foreground rise-3">
              GADE was founded on a single belief: a household utility product should
              outlast the trend that sold it. Eight years and 180 SKUs later,
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
          <h2 className="font-display text-3xl md:text-4xl leading-tight">Plastic Kitchenware made for real occasions.</h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
          <p>We manufacture plastic kitchenware — including our signature Millennium Set — for occasional events in wide varieties. Every piece is produced using quality material, making GADE products a trusted choice for clients and an ideal option for gifting purposes.</p>
          <p>Our range is available in different colours and attractive designs, crafted to suit the diverse demands and preferences of our clients. Whether for a wedding, festive occasion or corporate gifting, there is a GADE set that fits.</p>
          <p>We offer these sets at competitive prices, keeping them affordable for both domestic households and commercial buyers without compromising on quality.</p>
        </div>
      </section>

      <section className="bg-ink text-ivory py-20">
        <div className="container-x">
          <div className="grid gap-10 border-t border-ivory/10 pt-16 sm:grid-cols-2 md:grid-cols-4">
            {[
              { k: "2017", v: "Founded in Maharashtra" },
              { k: "180+", v: "Active SKUs" },
              { k: "All India", v: "Nationwide delivery" },
              { k: "5", v: "Export markets" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-4xl text-primary">{s.k}</div>
                <div className="mt-2 text-sm text-ivory/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
