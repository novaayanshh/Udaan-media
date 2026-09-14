import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const blocks = [
  {
    title: "Helps you with a new perspective",
    text: "By hiring a marketing consulting agency you can get fresh marketing ideas which will help you in the growth of your business. Your marketing consultants will help you with out of box ideas and creative marketing solutions that can take your business to new heights.",
    img: "/images/marketing-prospactive.jpg",
    reverse: false,
  },
  {
    title: "Helps you have defined marketing goals",
    text: "As the famous adage goes, you cannot determine the best route unless you know your destination; the same goes with your marketing techniques. If you don't have your marketing goals defined, then you cannot frame marketing strategies. A marketing consulting agency will help you with defined marketing goals.",
    img: "/images/marketing-goal.jpg",
    reverse: true,
  },
  {
    title: "Helps you concentrate on overall operations",
    text: "When you can delegate the marketing strategies and plans to the marketing consultants, you can focus on the overall operations and focus on product development.",
    img: "/images/marketing-help.jpg",
    reverse: false,
  },
];

export default function MarketingConsulting() {
  return (
    <>
      <PageHero image="/images/marketing-advertising.jpg" title="Brand Consulting Services" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
              Are You looking for Marketing Consulting Services?
            </h1>
          </Reveal>
          <Reveal animation="fadeInUp">
            <p className="text-ink-secondary leading-relaxed mb-8">
              Setting up a business is no cakewalk and make require you to walk the extra mile to get a competitive
              advantage. If you are looking for smart ways of expansion, you may partner with a marketing consulting
              service to see quicker results. Let's look into some of the reasons for which taking a marketing
              consulting service can be a prudent decision:
            </p>
          </Reveal>
          <Reveal animation="fadeIn">
            <h3 className="font-heading font-semibold text-xl text-primary mb-3">Brings specialized skills</h3>
            <p className="text-ink-secondary leading-relaxed">
              Your company may lack the specialized skills and expertise, and due to that, your ROI and conversion
              rates may be impacted. During such a scenario, hiring a marketing consultant can help you with the
              expertise that a company lacks and this will help you to reach the pinnacle of success easily.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface-secondary">
        <div className="container space-y-16">
          {blocks.map((b) => (
            <Reveal
              key={b.title}
              animation={b.reverse ? "fadeInRight" : "fadeInLeft"}
              className={`grid md:grid-cols-2 gap-10 items-center ${b.reverse ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-4">{b.title}</h3>
                <p className="text-ink-secondary leading-relaxed">{b.text}</p>
              </div>
              <img src={b.img} alt={b.title} className="rounded shadow-card w-full" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
