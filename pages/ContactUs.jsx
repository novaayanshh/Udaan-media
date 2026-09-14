import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";

export default function ContactUs() {
  return (
    <>
      <PageHero image="/images/contact-us.jpg" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <Reveal>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-12">
              Contact Us
            </h1>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <Reveal animation="fadeInLeft">
              <img src="/images/contact.jpg" alt="Contact Udaan Media House" className="rounded shadow-card w-full" />
            </Reveal>
            <Reveal animation="fadeInRight">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="w-full h-[400px] md:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.7880923627!2d77.4239573!3d28.6088647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefb2ac014431%3A0x149ad871eaec76c0!2sGaur%20City%20Center!5e0!3m2!1sen!2sin!4v1677221338299!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Udaan Media House location"
        />
      </section>
    </>
  );
}
