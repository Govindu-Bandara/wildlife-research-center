import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { species } from "../../data/species";

export default function FeaturedDiscovery() {
  const pick = useMemo(
    () => species[Math.floor(Math.random() * species.length)],
    []
  );

  return (
    <section className="bg-mist-dim py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] rounded-2xl overflow-hidden order-2 md:order-1"
        >
          <img
            src={pick.image}
            alt={pick.commonName}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {pick.status && (
            <span className="absolute top-5 left-5 bg-clay text-mist text-xs font-medium px-3 py-1.5 rounded-full">
              {pick.status}
            </span>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <span className="field-code uppercase">{pick.code} · From the field</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-ink text-balance">
            {pick.commonName}
            <span className="block text-lg italic text-ink-soft mt-1">{pick.scientificName}</span>
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed">{pick.summary}</p>
          {pick.body[1] && (
            <p className="mt-4 text-ink-soft leading-relaxed">{pick.body[1]}</p>
          )}
          <Link
            to={`/research/${pick.slug}`}
            className="mt-7 inline-flex items-center gap-2 text-canopy font-medium text-sm hover:gap-3 transition-all"
          >
            Read the full account <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}