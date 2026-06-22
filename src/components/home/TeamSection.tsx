import { team } from "../../data/team";
import SectionHeading from "../shared/SectionHeading";

export default function TeamSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-10">
      <SectionHeading
        eyebrow="The field team"
        title="Guided by the people who know this island best"
        description="Every expedition is led by experienced, recognised birders and field researchers, not guides who simply drive you to a location."
      />

      <div className="mt-12 grid sm:grid-cols-2 gap-8 max-w-3xl">
        {team.map((m) => (
          <div key={m.name} className="flex gap-5">
            <img
              src={m.image}
              alt={m.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-clay shrink-0"
            />
            <div>
              <h3 className="font-medium text-ink">{m.name}</h3>
              <p className="text-xs text-clay font-medium mt-0.5">{m.role}</p>
              <p className="text-sm text-ink-soft mt-2 leading-relaxed">{m.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}