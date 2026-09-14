import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container max-w-lg text-center">
        <h1 className="font-heading font-extrabold text-7xl md:text-8xl text-primary mb-4">404</h1>
        <h2 className="font-heading font-semibold text-2xl text-primary mb-4">Page Not Found</h2>
        <p className="text-ink-secondary leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-heading font-bold px-8 py-3.5 rounded-sm transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
