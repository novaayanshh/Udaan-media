import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const grid = [
  {
    title: "Gets you leads that convert",
    text: "If you have the right digital strategies, you can have the right leads that will convert into sales and boost your conversion rates. The on-page SEO fundamentals and the right keywords will help you be on the top pages of SERP.",
  },
  {
    title: "Builds your brand image",
    text: "Digital marketing strategies help you communicate your brand story and build the right brand image. Once your brand image is set right, you can expect more sales. Smart digital marketers use social media to build a strong brand image.",
  },
  {
    title: "It helps you with better ROI",
    text: "The traditional marketing techniques are more expensive than digital marketing, and they are not as effective as digital marketing. With digital marketing, you can reach out to more people at a lesser cost and fill up your pipeline with more sales.",
  },
  {
    title: "It helps you measure success",
    text: "With the right analytics in digital marketing, you can measure your success. When you have the right insights, you can use them to excel every time and outshine your competitors. Thus, if you are looking for more visibility to your business and if you want to strengthen your online presence, then you must choose the right digital strategies to shine in the digital world.",
  },
];

export default function DigitalMarketing() {
  return (
    <>
      <PageHero image="/images/digital-marketing1.jpg" title="Digital Marketing" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center mb-16">
          <Reveal animation="fadeInLeft">
            <img src="/images/dm.png" alt="Digital marketing" className="w-full max-w-sm mx-auto" />
          </Reveal>
          <Reveal animation="fadeInRight">
            <ul className="flex flex-wrap gap-3 mb-6">
              {["SEO (Search Engine Optimization)", "PPC (Pay Per Click)", "SMO (Social Media Optimization)"].map((t) => (
                <li key={t} className="bg-accent/15 text-accent-dark font-semibold text-sm px-4 py-2 rounded-full">
                  {t}
                </li>
              ))}
            </ul>
            <p className="text-ink-secondary leading-relaxed">
              Digital marketing is the new success mantra for entrepreneurs these days. Digital marketing strategies
              help you to cut the noise in the fiercely competitive space.
            </p>
          </Reveal>
        </div>

        <div className="container text-center mb-14 max-w-2xl mx-auto">
          <Reveal>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
              Importance of digital marketing
            </h3>
            <p className="text-ink-secondary leading-relaxed">
              Let's look into some of the great things which digital marketing can do for your business. Now you
              have more reasons to keep your digital strategies up to the stuff:
            </p>
          </Reveal>
        </div>

        <div className="container grid sm:grid-cols-2 gap-8">
          {grid.map((item, i) => (
            <Reveal key={item.title} animation="fadeInUp" style={{ transitionDelay: `${i * 100}ms` }} className="bg-surface-secondary rounded-lg p-7">
              <h3 className="font-heading font-semibold text-lg text-primary mb-3">{item.title}</h3>
              <p className="text-ink-secondary text-sm leading-relaxed">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
