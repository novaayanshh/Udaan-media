import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { featuredServices, serviceLinks } from "../data/siteData";

export default function Services() {
  return (
    <>
      <PageHero image="/images/services.jpg" title="Our Services" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center mb-16">
          <Reveal animation="fadeInLeft">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8">
              Our <span className="text-accent">Services</span>
            </h2>
            <ul className="space-y-6">
              {featuredServices.map((s) => (
                <li key={s.path} className="border-l-4 border-accent pl-4">
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    <Link to={s.path} className="text-primary hover:text-accent transition-colors">
                      {s.title}
                    </Link>
                  </h3>
                  <p className="text-ink-secondary text-sm leading-relaxed">{s.blurb}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal animation="fadeIn">
            <img src="/images/services.jpg" alt="Our services" className="rounded shadow-card w-full" />
          </Reveal>
        </div>

        <div className="container">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary text-center mb-10">
            Full Range of Advertising Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceLinks.map((s, i) => (
              <Reveal key={s.path} animation="fadeInUp" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <Link
                  to={s.path}
                  className="block bg-surface-secondary hover:bg-primary hover:text-white text-primary rounded-lg p-6 h-full transition-colors group"
                >
                  <h3 className="font-heading font-semibold text-lg">{s.label}</h3>
                  <span className="text-sm text-accent group-hover:text-accent mt-2 inline-block">Learn more &rarr;</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
