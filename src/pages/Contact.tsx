import PageHeader from "../components/shared/PageHeader";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Questions about an upcoming field visit, a workshop request, or a species sighting to report? We'd love to hear from you."
      />

      <section className="py-20 max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-sm font-medium text-ink" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="mt-1.5 w-full rounded-lg border border-ink/15 bg-mist px-4 py-2.5 text-sm focus:border-clay outline-none"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-ink" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="mt-1.5 w-full rounded-lg border border-ink/15 bg-mist px-4 py-2.5 text-sm focus:border-clay outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-ink" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              className="mt-1.5 w-full rounded-lg border border-ink/15 bg-mist px-4 py-2.5 text-sm focus:border-clay outline-none"
              placeholder="Tell us what you're looking for…"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-canopy text-mist px-6 py-3 text-sm font-medium hover:bg-canopy-light transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-6">
          <div className="rounded-2xl bg-mist-dim p-7">
            <Phone size={20} className="text-clay" />
            <h3 className="mt-4 font-medium text-ink">Call or WhatsApp</h3>
            <p className="text-sm text-ink-soft mt-1">077 402 8135</p>
          </div>
          <div className="rounded-2xl bg-mist-dim p-7">
            <MapPin size={20} className="text-clay" />
            <h3 className="mt-4 font-medium text-ink">Where we operate</h3>
            <p className="text-sm text-ink-soft mt-1">
              Field expeditions conducted islandwide across Sri Lanka.
            </p>
          </div>
          <div className="rounded-2xl bg-mist-dim p-7">
            <Clock size={20} className="text-clay" />
            <h3 className="mt-4 font-medium text-ink">Response time</h3>
            <p className="text-sm text-ink-soft mt-1">We typically reply within the same day.</p>
          </div>
        </div>
      </section>
    </>
  );
}