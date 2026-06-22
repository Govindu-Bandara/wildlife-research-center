import { orgStats } from "../../data/team";
import StatCounter from "../shared/StatCounter";

export default function ImpactStats() {
  return (
    <section className="bg-canopy py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {orgStats.map((s, i) => (
          <StatCounter key={s.label} value={s.value} label={s.label} index={i} />
        ))}
      </div>
    </section>
  );
}