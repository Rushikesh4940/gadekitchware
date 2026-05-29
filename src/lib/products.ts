import storage from "@/assets/cat-storage.jpg";
import racks from "@/assets/cat-racks.jpg";
import measuring from "@/assets/cat-measuring.jpg";
import baskets from "@/assets/cat-baskets.jpg";

export type Category = {
  slug: string;
  name: string;
  count: number;
  image: string;
  blurb: string;
};

export const categories: Category[] = [
  { slug: "storage", name: "Kitchen Storage", count: 48, image: storage, blurb: "Airtight containers and modular jars for an orderly pantry." },
  { slug: "racks", name: "Utility Racks", count: 22, image: racks, blurb: "Free-standing and wall racks that earn their footprint." },
  { slug: "measuring", name: "Measuring Tools", count: 18, image: measuring, blurb: "Calibrated cups, spoons and jugs you can actually read." },
  { slug: "baskets", name: "Baskets & Trays", count: 31, image: baskets, blurb: "Lightweight, woven plastic that softens any shelf." },
  { slug: "organizers", name: "Organizers", count: 27, image: storage, blurb: "Drawer dividers and caddies designed for daily reach." },
  { slug: "bath", name: "Bathroom Utilities", count: 19, image: racks, blurb: "Compact storage that survives steam, soap and splashes." },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  badge?: string;
  image: string;
  dims: string;
  pack: string;
  desc: string;
};

export const products: Product[] = [
  { id: "stack-pro-2l", name: "StackPro 2L Container", category: "Kitchen Storage", price: "₹ 249", badge: "New", image: storage, dims: "190 × 140 × 95 mm", pack: "Set of 3", desc: "Airtight four-clip lid, freezer-safe body, stacks flush without rocking." },
  { id: "trolley-tri", name: "Tri-Tier Utility Trolley", category: "Utility Racks", price: "₹ 1,290", badge: "Bestseller", image: racks, dims: "420 × 280 × 760 mm", pack: "Single", desc: "Steel-reinforced frame, locking castors, slot perforations for runoff." },
  { id: "measure-7", name: "Measure Set of 7", category: "Measuring Tools", price: "₹ 199", image: measuring, dims: "Nests to 90 mm", pack: "7 pcs", desc: "Embossed metric + imperial markings that won't wear off in the dishwasher." },
  { id: "weave-basket", name: "Weave Basket — Round", category: "Baskets & Trays", price: "₹ 349", image: baskets, dims: "Ø 240 × 200 mm", pack: "Single", desc: "Hand-finished latticework on injection-moulded frame. Ten colourways." },
  { id: "pantry-9", name: "Pantry Modular Jar Set", category: "Kitchen Storage", price: "₹ 899", badge: "Editor's pick", image: storage, dims: "Various", pack: "Set of 9", desc: "Nine common volumes calibrated for Indian kitchens, square footprint." },
  { id: "drawer-grid", name: "Drawer Grid Divider", category: "Organizers", price: "₹ 449", image: racks, dims: "Adjustable 320–520 mm", pack: "Set of 4", desc: "Push-fit dividers, no tools, hold their position through hundreds of cycles." },
  { id: "tray-oval", name: "Service Tray — Oval", category: "Baskets & Trays", price: "₹ 299", image: baskets, dims: "380 × 260 mm", pack: "Single", desc: "Generous handles, anti-slip ribs underneath, light enough for one hand." },
  { id: "jug-1l", name: "Calibrated Jug 1L", category: "Measuring Tools", price: "₹ 179", image: measuring, dims: "Ø 110 × 165 mm", pack: "Single", desc: "Drip-free pour spout, comfortable grip, dual-side measurement window." },
];
