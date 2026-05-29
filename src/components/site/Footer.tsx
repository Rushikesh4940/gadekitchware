import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-ink text-ivory">
      <div className="container-x grid gap-12 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground font-display text-lg font-semibold">G</span>
            <span className="font-display text-2xl">GADE Kitchware</span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70">
            Modern household and kitchen essentials, manufactured in India.
            Designed for the way real homes work — daily, demanding, beautiful.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-ivory/50">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/distributors" className="hover:text-primary">Distributors</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-ivory/50">Visit</div>
          <address className="mt-4 not-italic text-sm leading-relaxed text-ivory/70">
            GADE Industries Pvt. Ltd.<br />
            Plot 14, MIDC Industrial Area<br />
            Maharashtra, India<br />
            +91 98 0000 0000
          </address>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-ivory/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} GADE Kitchware. All rights reserved.</div>
          <div>Made in India · Sold across 14 states</div>
        </div>
      </div>
    </footer>
  );
}
