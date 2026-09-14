import { Link } from "react-router-dom";
import { FaRocket, FaBriefcase, FaLifeRing } from "react-icons/fa";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export default function AboutUs() {
  return (
    <>
      <PageHero image="/images/about-us.jpg" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-10">
              <span className="text-accent">About</span> Udaan Media House
            </h2>
          </Reveal>
          <Reveal animation="fadeIn">
            <img src="/images/about1.jpg" alt="About Udaan Media House" className="rounded shadow-card w-full mb-10" />
          </Reveal>
          <div className="space-y-5 text-ink-secondary leading-relaxed">
            <p>
              We at Udaan make every single impression count, assuring that advertisements are viewable by real
              people, in safe and fair environments, activating contextual targeting, and driving supply path
              optimisation. Our goal is to be the global benchmark for trust and transparency in advertising and
              digital media quality for the world&rsquo;s leading businesses, brands and publishers. We work for
              quantifiable outcomes through data-driven technologies with actionable real-time signals and
              insights.
            </p>
            <p>
              We aspire to serve brands from all sectors. We specialize in diverse areas of media planning,
              marketing consultancy, ATL-BTL Advertisement and Digital Marketing services. Based in Ghaziabad,
              India, we cater to the needs of our clients across the country. Adopting a 360-degree approach, we
              have established the highest standards of best-performing strategies and processes. We always plan a
              strategy keeping your objectives in mind, ensuring we take the finest path to beat the competition
              off your socks.
            </p>
            <p>
              Our advertising agency was founded in 2019 with a vision to provide media possibilities to our
              clients which simultaneously enhance and accelerate their business to the next level. Since our
              inception, we have worked for more than 200 clients worldwide. We have been fortunate to work with
              large entrepreneurs as well as small businesses across the world. As a team, we hold 25 years of
              collective experience and thus believe in a customized and client-oriented approach thereby,
              providing services exclusively as per client requirements. Our detailed approach, commitment towards
              the project, well-researched strategies aim to achieve the best results for our clients. We have been
              able to maintain 95% client retention for the past 11 years due to our dedication and transparency in
              work.
            </p>
            <p>
              We have a team of advertising experts who are competent and creative in advertising solutions. They
              work judiciously for our clients&rsquo; brand creation, management, consultation and digital
              marketing solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary-dark text-white">
        <div className="container max-w-5xl">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">Vision</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              {
                icon: FaRocket,
                title: "Our Mission",
                text: "To be the global benchmark for trust and transparency in advertising.",
              },
              {
                icon: FaBriefcase,
                title: "Our Vision",
                text: "Udaan media house has a vision to empower Indian Start-ups & SMEs in all possible ways of marketing.",
              },
              {
                icon: FaLifeRing,
                title: "Help & Support",
                text: "We work for quantifiable outcomes through data-driven technologies with actionable real-time signals and insights.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <Reveal key={title} animation="fadeInUp" className="bg-white/5 rounded-lg p-8 text-center">
                <Icon className="text-accent text-4xl mx-auto mb-5" />
                <h3 className="font-heading font-semibold text-xl mb-3">{title}</h3>
                <p className="text-ink-mutedInverse text-sm leading-relaxed">{text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center">
            <h5 className="font-heading font-semibold text-lg md:text-xl mb-6 leading-relaxed">
              ARE YOU A STARTUP? <br /> OR IF YOU HAVE BEEN WORKING TO BUILD BRAND IDENTITY FOR YOUR BUSINESS.
              <br /> GET IN TOUCH WITH US TODAY!
            </h5>
            <Link
              to="/contact-us"
              className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-heading font-bold px-8 py-3.5 rounded-sm transition-colors"
            >
              Join Us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
