import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { species } from "../../data/species";
import SectionHeading from "../shared/SectionHeading";

export default function FeaturedSpecies() {
  const preview = species.slice(0, 3);

  return (
    <section className="bg-mist-dim py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Species index"
          title="From our field notebooks"
          description="A growing, referenced catalogue of the species we encounter and document on expedition."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((s) => (
            <Link
              key={s.slug}
              to={`/research/${s.slug}`}
              className="group rounded-2xl overflow-hidden bg-mist border border-ink/10 hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.commonName}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 field-code bg-mist/90 px-2 py-1 rounded-full">
                  {s.code}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-medium text-ink">{s.commonName}</h3>
                <p className="text-xs italic text-ink-soft mt-0.5">{s.scientificName}</p>
                {s.status && (
                  <span className="inline-block mt-2 text-xs font-medium text-clay">
                    {s.status}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/research"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 text-ink px-6 py-3 text-sm font-medium hover:bg-ink/5 transition-colors"
          >
            See all species <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}