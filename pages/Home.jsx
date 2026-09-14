import { Link } from "react-router-dom";
import BannerSlider from "../components/BannerSlider";
import TypedText from "../components/TypedText";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import QuickEnquiryForm from "../components/QuickEnquiryForm";
import { featuredServices, coverageGrid, clientLogos, counters } from "../data/siteData";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <section className="relative h-[500px] md:h-[640px] overflow-hidden">
        <BannerSlider />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 via-primary-dark/60 to-transparent" />
        <div className="relative h-full container flex flex-col justify-center text-white">
          <h1 className="font-heading font-bold text-2xl md:text-4xl mb-2">We are</h1>
          <div className="font-heading font-extrabold text-4xl md:text-6xl text-accent mb-4 min-h-[1.3em]">
            <TypedText strings={["Udaan Media", "Brandriser", "Professionals", "Marketing Expert"]} />
          </div>
          <p className="text-base md:text-xl text-ink-mutedInverse max-w-xl mb-8">
            Advertising Solutions for your online and offline business!! <br className="hidden md:block" />
            Help your business to grow!!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/gallery"
              className="bg-accent hover:bg-accent-dark text-primary-dark font-heading font-bold px-7 py-3.5 rounded-sm transition-colors"
            >
              View Projects
            </Link>
            <Link
              to="/contact-us"
              className="bg-white/10 border border-white hover:bg-white hover:text-primary-dark text-white font-heading font-bold px-7 py-3.5 rounded-sm transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <Reveal animation="fadeInLeft">
            <img src="/images/about.jpg" alt="Udaan Media House" className="rounded shadow-card w-full" />
          </Reveal>
          <Reveal animation="fadeInRight">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-5">
              Make a Wise Choice in The <span className="text-accent">Best Company Branding!</span>
            </h2>
            <p className="text-ink-secondary leading-relaxed mb-6">
              Communication made from human to human. Communicating goes beyond speech, writing and sounds - it
              involves contexts and relationships. Udaan Media Advertiser seeks in these details the secret of its
              performance. We consider the client and the human side of each partner uniquely. Thus, we motivate
              ourselves to grow when we are driven to make it grow too. In this the constant exchange we listen,
              speak, feel and adapt to each client, realizing their needs to translate them into results, and then
              create new relationships.
            </p>
            <Link
              to="/about-us"
              className="inline-block bg-primary hover:bg-primary-light text-white font-heading font-bold px-7 py-3 rounded-sm transition-colors"
            >
              Read More
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-surface-secondary">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
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
      </section>

      {/* Coverage grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-12">
            We&rsquo;ve Got You Covered
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {coverageGrid.map((item, i) => (
              <Reveal key={item.title} animation={i % 2 === 0 ? "fadeInLeft" : "fadeInRight"}>
                <Link to={item.path} className="group block relative rounded overflow-hidden shadow-sm">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 to-transparent flex items-end p-4">
                    <h3 className="text-white font-heading font-semibold text-sm md:text-base">{item.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client marquee */}
      <section className="py-16 bg-surface-secondary overflow-hidden">
        <h2 className="font-heading font-bold text-3xl text-primary text-center mb-10">Our Clients</h2>
        <div className="relative w-full overflow-hidden">
          <ul className="flex items-center gap-14 animate-marquee w-max">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <li key={i} className="flex-shrink-0">
                <img src={logo} alt="Client logo" loading="lazy" className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Counters */}
      <section className="py-16 md:py-20 bg-primary-dark">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {counters.map((c) => (
            <div key={c.label}>
              <span className="font-heading font-extrabold text-4xl md:text-5xl text-accent">
                <CountUp end={c.count} />
              </span>
              <h3 className="text-ink-mutedInverse mt-2 text-sm md:text-base">{c.label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-10">
            Request a <span className="text-accent">Call Back</span>
          </h2>
          <QuickEnquiryForm />
        </div>
      </section>
    </>
  );
}
