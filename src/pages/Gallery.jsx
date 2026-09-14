import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { galleryVideos } from "../data/siteData";

export default function Gallery() {
  return (
    <>
      <PageHero image="/images/work1.jpg" title="Gallery" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-12">Gallery</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryVideos.map((id, i) => (
              <Reveal key={id} animation="fadeInUp" style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
                <div className="aspect-video rounded-lg overflow-hidden shadow-card">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Udaan Media House project video ${i + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
