import { Link } from "react-router-dom";

export default function CtaBand() {
  return (
    <section className="relative bg-canopy py-20 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-mist text-balance">
          Have a species sighting, a tour question, or a workshop request?
        </h2>
        <p className="mt-4 text-mist/75">
          Reach out and our field team will typically get back to you the same day.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-clay text-mist px-6 py-3.5 text-sm font-medium hover:bg-clay-light transition-colors"
          >
            Contact Us
          </Link>
          <Link
            to="/field-visits"
            className="inline-flex items-center rounded-full border border-mist/30 text-mist px-6 py-3.5 text-sm font-medium hover:bg-mist/10 transition-colors"
          >
            See Field Visits
          </Link>
        </div>
      </div>
    </section>
  );
}