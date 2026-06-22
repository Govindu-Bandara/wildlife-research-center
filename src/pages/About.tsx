import SectionHeading from "../components/shared/SectionHeading";
import { team, orgStats } from "../data/team";
import StatCounter from "../components/shared/StatCounter";

export default function About() {
  return (
    <>
      {/* Hero with leopard image */}
      <section className="relative min-h-[60vh] flex items-end bg-canopy overflow-hidden">
        <img
          src="/about.jpg"
          alt="Sri Lankan leopard resting on a tree branch"
          className="absolute inset-0 w-full h-full object-cover object-[50%_30%] opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canopy via-canopy/50 to-canopy/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 pb-16 pt-40 w-full">
          <span className="field-code uppercase text-clay-light">About the Center</span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-mist text-balance">
            A team of field researchers, not just tour operators
          </h1>
          <p className="mt-5 text-mist/75 text-base md:text-lg leading-relaxed max-w-2xl">
            Consisting of a dedicated team of wildlife experts, we organise field visits, offer
            comprehensive wildlife assessments across Sri Lanka, and conduct lectures and workshops
            to share knowledge and inspire action.
          </p>
        </div>
      </section>

      <section className="bg-canopy pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {orgStats.map((s, i) => (
            <StatCounter key={s.label} value={s.value} label={s.label} index={i} />
          ))}
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Our story"
          title="Built on field data, not just photographs"
        />
        <div className="mt-8 grid md:grid-cols-2 gap-10 text-ink-soft leading-relaxed">
          <p>
            The Wildlife Research and Study Center began as an informal network of birders and
            naturalists documenting Sri Lanka's endemic and threatened species in the field. What
            started as shared sightings grew into a structured practice of guided expeditions,
            checklist-based species recording, and public education.
          </p>
          <p>
            One discovery shaped our direction more than any other: the rediscovery of the Starry
            Shrub Frog (Pseudophilautus stellatus) in the Peak Wilderness Sanctuary, a species
            unrecorded for over 150 years and widely presumed extinct. It reminded us how much of
            Sri Lanka's biodiversity remains undocumented, with so much still left to find.
          </p>
        </div>
      </section>

      <section className="bg-mist-dim py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <SectionHeading eyebrow="The field team" title="Who leads our expeditions" />
          <div className="mt-10 grid sm:grid-cols-2 gap-8">
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
        </div>
      </section>
    </>
  );
}