import { useState } from "react";
import PageHeader from "../components/shared/PageHeader";

const categories = ["All", "Birds", "Butterflies", "Mammals", "Expeditions"] as const;

const images: { src: string; alt: string; category: (typeof categories)[number] }[] = [
  { src: "/about.jpg", alt: "Sri Lankan Leopard, Horton Plains", category: "Mammals" },
  { src: "/Indian Nightjar .jpg", alt: "Indian Nightjar", category: "Birds" },
  { src: "/Baronet.jpg", alt: "Baronet butterfly", category: "Butterflies" },
  { src: "/Starry Shrub Frog.png", alt: "Starry Shrub Frog", category: "Mammals" },
  { src: "/field_visit.jpg", alt: "Field visit participants in the wild", category: "Expeditions" },
  { src: "/Black Baza.jpg", alt: "Black Baza", category: "Birds" },
  { src: "/Black-necked-Stork.jpg", alt: "Black-necked Stork", category: "Birds" },
];

export default function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? images : images.filter((i) => i.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Field photography from our expeditions"
        description="A growing collection of images captured by our guides and participants on field visits across Sri Lanka."
      />

      <section className="py-16 max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                active === c ? "bg-canopy text-mist" : "bg-mist-dim text-ink-soft hover:bg-mist"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((img) => (
            <div key={img.src} className="aspect-square rounded-xl overflow-hidden bg-mist-dim">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}