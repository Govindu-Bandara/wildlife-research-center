import { motion } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
  index: number;
}

export default function StatCounter({ value, label, index }: StatCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-l border-mist/20 pl-5"
    >
      <div className="font-display text-4xl md:text-5xl text-mist">{value}</div>
      <p className="mt-2 text-sm text-mist/70 leading-snug max-w-[14ch]">{label}</p>
    </motion.div>
  );
}