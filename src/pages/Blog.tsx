import { Link } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import { species } from "../data/species";

export default function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Field notes & species spotlights"
        description="Short, referenced write-ups from our expeditions. These are the same field notes we once shared only on social media, now properly documented."
      />

      <section className="py-20 max-w-4xl mx-auto px-6 md:px-10">
        <div className="divide-y divide-ink/10">
          {species.map((s) => (
            <Link
              key={s.slug}
              to={`/blog/${s.slug}`}
              className="group flex gap-6 py-8 items-start"
            >
              <img
                src={s.image}
                alt={s.commonName}
                className="w-28 h-28 rounded-xl object-cover shrink-0"
              />
              <div>
                <span className="field-code uppercase">{s.code}</span>
                <h3 className="mt-2 text-lg font-medium text-ink group-hover:text-clay transition-colors">
                  {s.commonName}
                </h3>
                <p className="text-sm italic text-ink-soft">{s.scientificName}</p>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-2">
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