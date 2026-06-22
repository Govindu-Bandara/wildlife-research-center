import PageHeader from "../components/shared/PageHeader";
import TourCard from "../components/tours/TourCard";
import { tours } from "../data/tours";

export default function FieldVisits() {
  return (
    <>
      <PageHeader
        eyebrow="Wildlife Field Visits"
        title="Guided expeditions across the island"
        description="Small, expert-led groups travelling to Sri Lanka's richest habitats. Every trip includes a complete species checklist and a detailed trip report."
      />

      <section className="py-20 max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </div>
      </section>
    </>
  );
}