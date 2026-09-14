import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export default function Thanks() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container max-w-lg text-center">
        <FaCheckCircle className="text-accent text-6xl mx-auto mb-6" />
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Thank You!</h1>
        <p className="text-ink-secondary leading-relaxed mb-8">
          Your request has been received. Our team will get back to you shortly to discuss how we can help grow
          your brand.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary hover:bg-primary-light text-white font-heading font-bold px-8 py-3.5 rounded-sm transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
