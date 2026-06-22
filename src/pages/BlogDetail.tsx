import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getSpeciesBySlug } from "../data/species";

export default function BlogDetail() {
  const { slug } = useParams();
  const item = getSpeciesBySlug(slug ?? "");

  if (!item) return <Navigate to="/blog" replace />;

  return (
    <article className="pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink">
          <ArrowLeft size={15} /> Back to Journal
        </Link>

        <span className="field-code uppercase mt-8 block">{item.code} · Field Note</span>
        <h1 className="mt-3 font-display text-3xl md:text-4xl text-ink">{item.commonName}</h1>
        <p className="italic text-ink-soft mt-1">{item.scientificName}</p>

        <div className="mt-8 aspect-[16/9] rounded-2xl overflow-hidden">
          <img src={item.image} alt={item.commonName} className="w-full h-full object-cover" />
        </div>

        <div className="mt-10 space-y-5 text-ink-soft leading-relaxed">
          <p className="text-lg text-ink">{item.summary}</p>
          {item.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {item.references && (
          <div className="mt-10 pt-8 border-t border-ink/10">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-soft mb-3">References</h3>
            <ul className="text-sm text-ink-soft space-y-1.5">
              {item.references.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}