// Product images
import p2tierRack from "@/assets/products/2tier-kitchen-rack.png";
import p3in1Organizer from "@/assets/products/3in1-kitchen-organizer.png";
import p15GridBox from "@/assets/products/15-grid-storage-box.png";
import p24GridBox from "@/assets/products/24-grid-storage-box.png";
import p36GridBox from "@/assets/products/36-grid-storage-box.png";
import pCakescraper3 from "@/assets/products/cakescraper-3pc.png";
import pCakescraper4 from "@/assets/products/cakescraper-4pc.png";
import pTallScraper from "@/assets/products/tall-scraper-4pc.png";
import pDrawerOrg from "@/assets/products/drawer-organizer-8pc.png";
import pToolBox from "@/assets/products/multipurpose-tool-box.png";
import pSocksOrg from "@/assets/products/socks-organizer-4pc.png";
import pFlowerPot5 from "@/assets/products/flower-pot-5inch.png";
import pFlowerPot7d1 from "@/assets/products/flower-pot-7inch-d1.png";
import pFlowerPot7d2 from "@/assets/products/flower-pot-7inch-d2.png";
import pFlowerPot8Diamond from "@/assets/products/flower-pot-8inch-diamond.png";
import pFlowerPot8m3 from "@/assets/products/flower-pot-8inch-m3.png";
import pFlowerPot8m4 from "@/assets/products/flower-pot-8inch-m4.png";

export type Category = {
  slug: string;
  name: string;
  count: number;
  image: string;
  blurb: string;
};

export const categories: Category[] = [
  {
    slug: "kitchen-racks",
    name: "Kitchen Racks",
    count: 2,
    image: p2tierRack,
    blurb: "Sturdy rolling racks and countertop organizers for a clutter-free kitchen.",
  },
  {
    slug: "storage",
    name: "Storage & Organizers",
    count: 6,
    image: p15GridBox,
    blurb: "Grid boxes, drawer dividers and tool cases for every corner of your home.",
  },
  {
    slug: "baking",
    name: "Baking Tools",
    count: 3,
    image: pCakescraper3,
    blurb: "Scrapers and smoothers for clean, professional cake finishes.",
  },
  {
    slug: "planters",
    name: "Planters",
    count: 6,
    image: pFlowerPot7d1,
    blurb: "Colourful pots in every size — from windowsill herbs to statement plants.",
  },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  moq: string;
  badge?: string;
  image: string;
  dims: string;
  pack: string;
  desc: string;
};

export const WHATSAPP_NUMBER = "918976570008";

export function waLink(productName: string) {
  const msg = encodeURIComponent(
    `Hi, I'm interested in the ${productName}. Please share pricing and availability.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export const products: Product[] = [
  // ── Kitchen Racks ─────────────────────────────────────────────────────────
  {
    id: "2-tier-kitchen-rack",
    name: "2 Tier Kitchen Rack",
    category: "Kitchen Racks",
    price: "₹ 1,499",
    moq: "MOQ 10 pcs",
    badge: "New",
    image: p2tierRack,
    dims: "600 × 200 × 380 mm",
    pack: "Single",
    desc: "Bamboo-and-steel rolling rack with locking castors. Two deep shelves hold jars, bottles and condiments with room to spare.",
  },
  {
    id: "3-in-1-kitchen-organizer",
    name: "3 in 1 Kitchen Organizer",
    category: "Kitchen Racks",
    price: "₹ 349",
    moq: "MOQ 12 pcs",
    badge: "Bestseller",
    image: p3in1Organizer,
    dims: "210 × 110 × 185 mm",
    pack: "Single",
    desc: "Countertop caddy with sponge tray, towel bar and utensil holder. Available in Green, Charcoal, Yellow and Light Blue.",
  },

  // ── Storage & Organizers ──────────────────────────────────────────────────
  {
    id: "15-grid-storage-box",
    name: "15 Grid Small Storage Box",
    category: "Storage & Organizers",
    price: "₹ 129",
    moq: "MOQ 50 pcs",
    image: p15GridBox,
    dims: "240 × 160 × 30 mm",
    pack: "Single",
    desc: "Clear polypropylene case with 15 compartments and a snap-shut latch. Perfect for small parts, craft supplies and accessories.",
  },
  {
    id: "24-grid-storage-box",
    name: "24 Grid Storage Box",
    category: "Storage & Organizers",
    price: "₹ 179",
    moq: "MOQ 50 pcs",
    image: p24GridBox,
    dims: "290 × 190 × 40 mm",
    pack: "Single",
    desc: "24-cell transparent box with a secure clip closure. Stackable design keeps collections sorted and dust-free.",
  },
  {
    id: "36-grid-storage-box",
    name: "36 Grid Organizer Storage Box",
    category: "Storage & Organizers",
    price: "₹ 249",
    moq: "MOQ 25 pcs",
    badge: "Popular",
    image: p36GridBox,
    dims: "390 × 270 × 40 mm",
    pack: "Single",
    desc: "Extra-large 36-cell organizer for beads, pills, hardware or stationery. Removable dividers, hinged lid.",
  },
  {
    id: "drawer-organizer-8pc",
    name: "Drawer Organizer Pack of 8",
    category: "Storage & Organizers",
    price: "₹ 399",
    moq: "MOQ 50 sets",
    image: pDrawerOrg,
    dims: "Adjustable 150–520 mm",
    pack: "Pack of 8",
    desc: "Interlocking plastic dividers that snap together without tools. Expands to fit drawers up to 520 mm wide.",
  },
  {
    id: "multipurpose-tool-box",
    name: "Multipurpose Tool Box",
    category: "Storage & Organizers",
    price: "₹ 549",
    moq: "MOQ 20 pcs",
    image: pToolBox,
    dims: "330 × 210 × 80 mm",
    pack: "Single",
    desc: "Three-tier carry case with a secure double-latch lid. Customisable compartments for tools, craft supplies or first aid.",
  },
  {
    id: "socks-organizer-4pc",
    name: "New Socks Organizer Pack of 4",
    category: "Storage & Organizers",
    price: "₹ 299",
    moq: "MOQ 50 sets",
    image: pSocksOrg,
    dims: "300 × 120 × 90 mm each",
    pack: "Pack of 4",
    desc: "Stackable drawer bins designed for socks, underwear and small folds. Breathable grid walls keep contents visible.",
  },

  // ── Baking Tools ──────────────────────────────────────────────────────────
  {
    id: "cakescraper-3pc",
    name: "Cakescraper 3 Pcs Set",
    category: "Baking Tools",
    price: "₹ 149",
    moq: "MOQ 100 sets",
    image: pCakescraper3,
    dims: "150 × 120 mm each",
    pack: "Set of 3",
    desc: "Three serrated scrapers in different edge profiles for smooth, raked and wave finishes. Food-grade PP, dishwasher safe.",
  },
  {
    id: "cakescraper-4pc",
    name: "Cakescraper 4 Pcs Set",
    category: "Baking Tools",
    price: "₹ 199",
    moq: "MOQ 100 sets",
    badge: "Popular",
    image: pCakescraper4,
    dims: "200 × 150 mm each",
    pack: "Set of 4",
    desc: "Four large flat scrapers for icing, fondant and ganache work. Smooth straight edges for a clean, sharp finish.",
  },
  {
    id: "tall-scraper-4pc",
    name: "Tall Scraper Set of 4 Pcs",
    category: "Baking Tools",
    price: "₹ 199",
    moq: "MOQ 100 sets",
    image: pTallScraper,
    dims: "250 × 120 mm each",
    pack: "Set of 4",
    desc: "Tall-profile scrapers for multi-tier cakes. Four edge patterns — straight, wave, comb and zigzag.",
  },

  // ── Planters ──────────────────────────────────────────────────────────────
  {
    id: "flower-pot-5inch",
    name: "Flower Pot 5 Inch",
    category: "Planters",
    price: "₹ 89",
    moq: "MOQ 50 pcs",
    image: pFlowerPot5,
    dims: "Ø 125 × 110 mm",
    pack: "Single with saucer",
    desc: "Ribbed cylindrical pot with matching saucer. Ideal for windowsill herbs and small succulents. Multiple colours.",
  },
  {
    id: "flower-pot-7inch-d1",
    name: "Flower Pot 7 Inch — Design 1",
    category: "Planters",
    price: "₹ 149",
    moq: "MOQ 50 pcs",
    badge: "Bestseller",
    image: pFlowerPot7d1,
    dims: "Ø 175 × 155 mm",
    pack: "Single with saucer",
    desc: "Vertical-ribbed pot in six colour options. Drainage hole and saucer included. Stackable for easy storage.",
  },
  {
    id: "flower-pot-7inch-d2",
    name: "Flower Pot 7 Inch — Design 2",
    category: "Planters",
    price: "₹ 149",
    moq: "MOQ 50 pcs",
    image: pFlowerPot7d2,
    dims: "Ø 175 × 155 mm",
    pack: "Single with saucer",
    desc: "Horizontal-banded design in muted tones. Matches a range of interior styles from minimal to eclectic.",
  },
  {
    id: "flower-pot-8inch-diamond",
    name: "Flower Pot 8 Inch Diamond Shape",
    category: "Planters",
    price: "₹ 199",
    moq: "MOQ 25 pcs",
    badge: "New",
    image: pFlowerPot8Diamond,
    dims: "Ø 200 × 180 mm",
    pack: "Single with saucer",
    desc: "Geometric faceted exterior gives a modern architectural feel. Lightweight, UV-stabilised body.",
  },
  {
    id: "flower-pot-8inch-m3",
    name: "Flower Pot 8 Inch M3",
    category: "Planters",
    price: "₹ 179",
    moq: "MOQ 25 pcs",
    image: pFlowerPot8m3,
    dims: "Ø 200 × 175 mm",
    pack: "Single with saucer",
    desc: "Classic tapered form in soft botanical colours. Pairs well with snake plants, peace lilies and pothos.",
  },
  {
    id: "flower-pot-8inch-m4",
    name: "Flower Pot 8 Inch M4",
    category: "Planters",
    price: "₹ 179",
    moq: "MOQ 25 pcs",
    image: pFlowerPot8m4,
    dims: "Ø 200 × 175 mm",
    pack: "Single with saucer",
    desc: "Wide-mouth pot with subtle horizontal ridging. Available in earthy neutrals — grey, teal, white and mustard.",
  },
];
