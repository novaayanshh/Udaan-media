import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export default function MediaPlanning() {
  return (
    <>
      <PageHero image="/images/media-planning.jpg" title="Media Planning" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <Reveal animation="fadeInLeft">
            <h1 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-2">Media Planning</h1>
            <h3 className="font-heading font-semibold text-lg text-accent-dark mb-5">
              Digital Media Management for Digital First Marketing
            </h3>
            <p className="text-ink-secondary leading-relaxed">
              To level up your digital game and to have a competitive edge over others, you must have good digital
              media managers working with you. If your digital media management practices are not up to the snuff,
              you will fail to get the required visibility.
            </p>
          </Reveal>
          <Reveal animation="fadeIn">
            <img src="/images/media-planning1.jpg" alt="Media planning" className="rounded shadow-card w-full" />
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface-secondary">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <Reveal animation="fadeIn" className="order-2 md:order-1">
            <img src="/images/media-planning2.jpg" alt="Digital media management" className="rounded shadow-card w-full" />
          </Reveal>
          <Reveal animation="fadeInRight" className="order-1 md:order-2">
            <h3 className="font-heading font-semibold text-xl text-primary mb-5">
              If you are still not convinced about the importance of digital media management, then scroll down to
              gain more information on digital media management and its significance:
            </h3>
            <p className="text-ink-secondary leading-relaxed mb-4">
              Digital media management is essential for planning and coordinating the content on the site and
              determining which platform will be the best suited for the content. The digital media managers will
              have a creative mind and a business-cantered vision, which will help take your business to new
              heights.
            </p>
            <p className="text-ink-secondary leading-relaxed">
              You need a robust digital media management strategy to activate your fan base and strengthen your
              online presence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <Reveal animation="fadeInLeft">
            <p className="text-ink-secondary leading-relaxed mb-4">
              Digital media management is essential for tracking your digital media efforts and will help you have
              brand consistency across different platforms.
            </p>
            <p className="text-ink-secondary leading-relaxed">
              To reach the pinnacle of success, you must make optimum utilization of your digital budget, which you
              can do if your digital media management practices are in place.
            </p>
          </Reveal>
          <Reveal animation="fadeIn">
            <img
              src="/images/media-planning-service-500x500.png"
              alt="Digital media management"
              className="rounded shadow-card w-full max-w-sm mx-auto"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
