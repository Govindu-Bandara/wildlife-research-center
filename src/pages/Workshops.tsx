import PageHeader from "../components/shared/PageHeader";
import SectionHeading from "../components/shared/SectionHeading";
import { GraduationCap, Users, BookOpen } from "lucide-react";

const offerings = [
  {
    icon: GraduationCap,
    title: "Field Identification Workshops",
    description:
      "Hands-on sessions covering bird and butterfly identification techniques, optics use, and field note-keeping, suitable for beginners and intermediate naturalists.",
  },
  {
    icon: Users,
    title: "School & University Lectures",
    description:
      "Talks on Sri Lanka's endemic species, conservation challenges, and field research methods, tailored for student audiences.",
  },
  {
    icon: BookOpen,
    title: "Conservation Awareness Sessions",
    description:
      "Community-focused sessions on the threats facing local species and habitats, and practical steps for supporting conservation.",
  },
];

export default function Workshops() {
  return (
    <>
      <PageHeader
        eyebrow="Workshops & Training"
        title="Sharing field knowledge, in the field and in the classroom"
        description="We run lectures and hands-on workshops to share what we learn on expedition, designed to inspire conservation action in students, enthusiasts, and communities alike."
      />

      <section className="py-20 max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="What we offer" title="Programs available on request" />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {offerings.map((o) => {
            const Icon = o.icon;
            return (
              <div key={o.title} className="rounded-2xl bg-mist-dim p-7">
                <Icon size={26} className="text-clay" strokeWidth={1.5} />
                <h3 className="mt-5 font-medium text-ink">{o.title}</h3>
                <p className="mt-2.5 text-sm text-ink-soft leading-relaxed">{o.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl bg-canopy p-10 text-center">
          <h3 className="font-display text-2xl text-mist">
            Planning a session for your school, university, or organisation?
          </h3>
          <p className="mt-3 text-mist/75 max-w-xl mx-auto">
            Reach out with your group size and area of interest, and we'll put together a
            session tailored to your audience.
          </p>
          <a
            href="https://wa.me/94721048084"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-full bg-clay text-mist px-6 py-3.5 text-sm font-medium hover:bg-clay-light transition-colors"
          >
            Request a Workshop
          </a>
        </div>
      </section>
    </>
  );
}