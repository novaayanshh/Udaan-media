import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { simpleServicePages } from "../data/siteData";

export default function SimpleServicePage({ slug }) {
  const data = simpleServicePages[slug];

  if (!data) return null;

  return (
    <>
      <PageHero image={data.heroImg} title={data.title} />
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-8">{data.title}</h1>
          </Reveal>
          <Reveal animation="fadeInUp" className="space-y-5 text-ink-secondary leading-relaxed mb-10">
            {data.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
          <Reveal animation="fadeIn">
            <img src={data.bodyImg} alt={data.title} className="rounded shadow-card w-full" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
