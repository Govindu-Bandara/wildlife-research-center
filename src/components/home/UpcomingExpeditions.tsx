import { Link } from "react-router-dom";
import { tours } from "../../data/tours";
import TourCard from "../tours/TourCard";
import SectionHeading from "../shared/SectionHeading";
import { ArrowRight } from "lucide-react";

export default function UpcomingExpeditions() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <SectionHeading
          eyebrow="Upcoming expeditions"
          title="Join our next field visit"
          description="Small, expert-guided groups exploring the island's most rewarding habitats. Every trip ends with a full species checklist."
        />
        <Link
          to="/field-visits"
          className="inline-flex items-center gap-2 text-canopy font-medium text-sm whitespace-nowrap hover:gap-3 transition-all"
        >
          View all field visits <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tours.map((t) => (
          <TourCard key={t.slug} tour={t} />
        ))}
      </div>
    </section>
  );
}