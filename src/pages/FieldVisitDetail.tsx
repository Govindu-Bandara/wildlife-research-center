import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft, CalendarDays, MapPin, Check } from "lucide-react";
import { getTourBySlug } from "../data/tours";
import PaymentModal from "../components/payment/PaymentModal";

export default function FieldVisitDetail() {
  const { slug } = useParams();
  const tour = getTourBySlug(slug ?? "");
  const [paymentOpen, setPaymentOpen] = useState(false);

  if (!tour) return <Navigate to="/field-visits" replace />;

  return (
    <>
    <article className="pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <Link
          to="/field-visits"
          className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink"
        >
          <ArrowLeft size={15} /> Back to Field Visits
        </Link>

        <div className="mt-8 flex items-center gap-3">
          <span className="field-code uppercase">{tour.code}</span>
          {tour.status === "fully-booked" && (
            <span className="text-xs font-medium text-mist bg-canopy px-3 py-1 rounded-full">
              Fully Booked
            </span>
          )}
        </div>

        <h1 className="mt-3 font-display text-3xl md:text-4xl text-ink text-balance">
          {tour.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-5 text-sm text-ink-soft">
          <span className="flex items-center gap-1.5"><MapPin size={15} /> {tour.location}</span>
          <span className="flex items-center gap-1.5"><CalendarDays size={15} /> {tour.dates}</span>
        </div>

        <div className="mt-8 aspect-[16/9] rounded-2xl overflow-hidden">
          <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-8">
            <p className="text-ink-soft leading-relaxed text-lg">{tour.summary}</p>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-soft mb-3">
                Species highlights
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check size={15} className="text-clay mt-0.5 shrink-0" /> {h}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-soft mb-3">
                What's included
              </h3>
              <ul className="space-y-2">
                {tour.includes.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check size={15} className="text-clay mt-0.5 shrink-0" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="rounded-2xl bg-mist-dim p-6 sticky top-28">
              <span className="text-2xl font-display text-canopy">{tour.price}</span>
              <p className="text-xs text-ink-soft mt-1">per person, all inclusive</p>

              {tour.status === "fully-booked" ? (
                <a
                  href="https://wa.me/94721048084"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block text-center rounded-full bg-clay text-mist px-5 py-3 text-sm font-medium hover:bg-clay-light transition-colors"
                >
                  Join the waitlist
                </a>
              ) : (
                <button
                  onClick={() => setPaymentOpen(true)}
                  className="mt-6 w-full rounded-full bg-clay text-mist px-5 py-3 text-sm font-medium hover:bg-clay-light transition-colors"
                >
                  Reserve your place
                </button>
              )}

              <div className="mt-6 pt-6 border-t border-ink/10">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-soft mb-2">
                  Field guides
                </h4>
                <p className="text-sm text-ink-soft">{tour.guides.join(" · ")}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>

    <AnimatePresence>
      {paymentOpen && (
        <PaymentModal tour={tour} onClose={() => setPaymentOpen(false)} />
      )}
    </AnimatePresence>
    </>
  );
}