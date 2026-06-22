import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end bg-canopy overflow-hidden">
      <img
        src="/3afc530282fa8b67519a15fdbd539238.jpg"
        alt="Two elephants greeting each other in a Sri Lankan lake at sunset"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-canopy via-canopy/40 to-canopy/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-24 pt-40 w-full">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="field-code uppercase text-clay-light"
        >
          Field Research · Sri Lanka, Islandwide
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 font-display text-4xl sm:text-5xl md:text-7xl text-mist leading-[1.05] max-w-3xl text-balance"
        >
          Documenting Sri Lanka's wildlife, one expedition at a time.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-mist/80 text-base md:text-lg max-w-xl leading-relaxed"
        >
          A dedicated team of wildlife experts running field visits, scientific assessments,
          and workshops across the island, from the cloud forests of Horton Plains to the
          savanna of Nilgala.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/field-visits"
            className="inline-flex items-center gap-2 rounded-full bg-clay text-mist px-6 py-3.5 text-sm font-medium hover:bg-clay-light transition-colors"
          >
            Book a Field Visit <ArrowRight size={16} />
          </Link>
          <Link
            to="/research"
            className="inline-flex items-center gap-2 rounded-full border border-mist/30 text-mist px-6 py-3.5 text-sm font-medium hover:bg-mist/10 transition-colors"
          >
            Explore Our Research
          </Link>
        </motion.div>
      </div>
    </section>
  );
}