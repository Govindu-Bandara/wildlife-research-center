import { Link } from "react-router-dom";
import { CalendarDays, MapPin } from "lucide-react";
import type { Tour } from "../../data/tours";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      to={`/field-visits/${tour.slug}`}
      className="group block rounded-2xl overflow-hidden bg-mist border border-ink/10 hover:shadow-xl hover:shadow-ink/5 transition-shadow"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 field-code bg-mist/90 px-2.5 py-1 rounded-full">
          {tour.code}
        </span>
        {tour.status === "fully-booked" && (
          <span className="absolute top-4 right-4 bg-canopy text-mist text-xs font-medium px-3 py-1 rounded-full">
            Fully Booked
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-ink">{tour.title}</h3>
        <div className="mt-3 flex flex-col gap-1.5 text-sm text-ink-soft">
          <span className="flex items-center gap-1.5"><MapPin size={14} /> {tour.location}</span>
          <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {tour.dates}</span>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-canopy font-medium">{tour.price}</span>
          <span className="text-sm font-medium text-clay group-hover:underline">
            {tour.status === "fully-booked" ? "Join waitlist" : "View details"}
          </span>
        </div>
      </div>
    </Link>
  );
}