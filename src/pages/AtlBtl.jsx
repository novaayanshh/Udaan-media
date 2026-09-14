import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const items = [
  {
    title: "How BTL can help your marketing campaigns?",
    text: "BTL or below the line marketing targets specific audiences. BTL can help with better conversions as the target audience is limited. If you are targeting local audiences, then BTL can work wonders to your business and can take your business to new heights. BTLS can refer to telemarketing, leaflet drops, in-person demonstrations, door-to-door selling, catalogues, email marketing, PPC or social media ads and many more. In the digital era, email marketing and social media ads can bring faster results than the other methods. Customized emails can help you to boost your ROI to a considerable extent. Through the cost-per-click adverting campaign, you can pay for the ads only when someone clicks, and hence this is an effective way to control your expenses. You can also consider using analytics to monitor how many users clicked on your ad, and based on the numbers; you can adjust your ad campaigns.",
    img: "/images/btl.jpg",
    reverse: false,
  },
  {
    title: "Importance of Mall advertising",
    text: "A mall gets many visitors and hence advertising in the mall can be a great way to promote your products and services. You can try out more innovative methods to do advertising in the malls. The right ad placements can get you to your dream leads. Malls advertising can create more exposures to the ads and can strengthen your brand value. You can place ads to tailor the needs of different individuals. Through the right advertising strategies, you can entice the customers to invest in your products and services.",
    img: "/images/services/5.jpg",
    reverse: true,
  },
  {
    title: "RWA board",
    text: "A society gets many visitors and hence advertising in the rwa society gate can be a great way to promote your products and services. You can try out more innovative methods to do advertising with the gates. The right ad placements can get you to your dream leads. Rwa board advertising can create more exposures to the ads and can strengthen your brand value. You can place ads to tailor the needs of different individuals. Through the right advertising strategies, you can entice the customers to invest in your products and services.",
    img: "/images/services/13.jpg",
    reverse: false,
  },
  {
    title: "Police barricades branding",
    text: "Police barricade marketing helps to get you more leads. You can customize your messages to boost your sales. You need to know about your target audiences so that you can customize the messages for them to get more effective results. Employ the right barricade marketing strategies to double your conversions and to see faster results.",
    img: "/images/services/baricade.jpg",
    reverse: true,
  },
  {
    title: "Product Launch",
    text: "A planned product launch can get a lot of visitors and hence doing a product launch can be a great way to promote your products and services and attract more potential clients. You can try out more innovative methods and make it more dynamic. The on point product launch can get you to your dream leads. Product launch can create more exposures to the ads and can strengthen your brand value. You can advertise to tailor the needs of different individuals. Through the right advertising strategies, you can entice the customers to invest in your products and services.",
    img: "/images/services/14.jpg",
    reverse: false,
  },
];

export default function AtlBtl() {
  return (
    <>
      <PageHero image="/images/atl-btl-advertising.jpg" title="Below the Lines" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <Reveal>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-14">
              BTL Marketing
            </h1>
          </Reveal>
          <div className="space-y-16">
            {items.map((item) => (
              <Reveal
                key={item.title}
                animation={item.reverse ? "fadeInRight" : "fadeInLeft"}
                className={`grid md:grid-cols-2 gap-10 items-center ${item.reverse ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div>
                  <h3 className="font-heading font-semibold text-2xl text-primary mb-4">{item.title}</h3>
                  <p className="text-ink-secondary leading-relaxed">{item.text}</p>
                </div>
                <img src={item.img} alt={item.title} className="rounded shadow-card w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
