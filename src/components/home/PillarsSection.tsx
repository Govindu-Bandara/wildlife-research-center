import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Microscope, Binoculars, GraduationCap, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    icon: Microscope,
    code: "01",
    title: "Research & Conservation",
    description:
      "Scientific assessments and species documentation across Sri Lanka, ranging from rediscovering species presumed extinct to tracking range-restricted butterflies.",
    to: "/research",
  },
  {
    icon: Binoculars,
    code: "02",
    title: "Wildlife Field Visits",
    description:
      "Guided expeditions to the island's richest habitats, including Nilgala's savanna, Horton Plains' cloud forest, and the wetlands of Mannar.",
    to: "/field-visits",
  },
  {
    icon: GraduationCap,
    code: "03",
    title: "Workshops & Training",
    description:
      "Lectures and hands-on sessions that share field knowledge and inspire conservation action among students and enthusiasts alike.",
    to: "/workshops",
  },
];

export default function PillarsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid md:grid-cols-3 gap-px bg-ink/10 rounded-2xl overflow-hidden">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={p.to}
                className="group block bg-mist p-8 h-full hover:bg-mist-dim transition-colors"
              >
                <div className="flex items-center justify-between">
                  <Icon size={28} className="text-clay" strokeWidth={1.5} />
                  <span className="field-code">{p.code}</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-ink">{p.title}</h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{p.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-canopy group-hover:gap-2 transition-all">
                  Learn more <ArrowUpRight size={15} />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}