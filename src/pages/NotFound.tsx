import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <span className="field-code uppercase">404</span>
      <h1 className="mt-4 font-display text-3xl text-ink">This trail doesn't exist</h1>
      <p className="mt-3 text-ink-soft max-w-sm">
        The page you're looking for has wandered off. Let's get you back to known territory.
      </p>
      <Link
        to="/"
        className="mt-7 inline-flex items-center rounded-full bg-canopy text-mist px-6 py-3 text-sm font-medium hover:bg-canopy-light transition-colors"
      >
        Back to Home
      </Link>
    </section>
  );
}