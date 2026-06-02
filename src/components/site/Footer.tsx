import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-ivory">
      <div className="container-x grid gap-12 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Gade" className="h-9 w-auto brightness-0 invert" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-ivory/50">Kitchenware</span>
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
            H.No.2/1, Gala No.9, S No. 46/C<br />
            Shivam Industries, Gauraipada Road<br />
            Asai, Vasai East — 401208<br />
            Maharashtra, India<br />
            <a href="tel:+918976570008" className="mt-2 block hover:text-primary">+91 89765 70008</a>
          </address>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-ivory/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} GADE Kitchenware. All rights reserved.</div>
          <div>Made in India · Delivered across all states</div>
        </div>
      </div>
    </footer>
  );
}
