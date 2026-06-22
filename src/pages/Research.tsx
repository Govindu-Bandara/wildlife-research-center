import { Link } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import { species } from "../data/species";

export default function Research() {
  return (
    <>
      <PageHeader
        eyebrow="Research & Conservation"
        title="Field documentation across Sri Lanka's ecosystems"
        description="From rediscovering species presumed extinct to monitoring range-restricted butterflies, our research focuses on the species that conservation efforts most often overlook."
      />

      <section className="py-20 max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {species.map((s) => (
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
                <p className="text-sm text-ink-soft mt-3 leading-relaxed line-clamp-3">
                  {s.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}