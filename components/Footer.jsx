import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { contact, siteName } from "../data/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-primary-dark text-ink-mutedInverse">
      <div className="border-b border-white/10">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-14">
          <div className="lg:col-span-1">
            <img src="/images/logo.png" alt={`${siteName} logo`} className="h-12 w-auto bg-white/90 rounded-sm p-1.5 mb-4" />
            <p className="text-sm leading-relaxed mb-5">
              Your complete outdoor &amp; media advertising partner — from strategy to execution, everything under one roof. Let&rsquo;s Fly Together.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: contact.facebook, Icon: FaFacebookF },
                { href: contact.instagram, Icon: FaInstagram },
                { href: contact.twitter, Icon: FaTwitter },
                { href: contact.youtube, Icon: FaYoutube },
                { href: contact.linkedin, Icon: FaLinkedinIn },
              ].map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-primary-dark transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/service" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link to="/contact-us" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/outdoor-advertising" className="hover:text-accent transition-colors">Outdoor Advertising</Link></li>
              <li><Link to="/lift-advertising" className="hover:text-accent transition-colors">Lift Advertising</Link></li>
              <li><Link to="/auto-rickshaw-advertising" className="hover:text-accent transition-colors">Auto Rickshaw Advertising</Link></li>
              <li><Link to="/cinema-advertising" className="hover:text-accent transition-colors">Cinema Advertising</Link></li>
              <li><Link to="/mall" className="hover:text-accent transition-colors">Mall Advertising</Link></li>
              <li><Link to="/digital-marketing" className="hover:text-accent transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/media-planning" className="hover:text-accent transition-colors">Media Planning</Link></li>
              <li><Link to="/marketing-consulting" className="hover:text-accent transition-colors">Marketing Consultancy</Link></li>
              <li><Link to="/paper-printing" className="hover:text-accent transition-colors">Paper Printing &amp; Inserts</Link></li>
              <li><Link to="/news-paper" className="hover:text-accent transition-colors">Newspaper Advertising</Link></li>
              <li><Link to="/digital-billboard" className="hover:text-accent transition-colors">Digital Billboard Advertising</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" /> {contact.address}
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-accent flex-shrink-0" />
                <a href={contact.phone1Href} className="hover:text-accent transition-colors">{contact.phone1}</a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-accent flex-shrink-0" />
                <a href={contact.phone2Href} className="hover:text-accent transition-colors">{contact.phone2}</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-accent flex-shrink-0" />
                <a href={contact.emailHref} className="hover:text-accent transition-colors">{contact.email}</a>
              </li>
            </ul>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-accent hover:bg-accent-dark text-primary-dark font-heading font-bold text-sm px-5 py-2.5 rounded-sm transition-colors"
            >
              Request a Call Back
            </a>
          </div>
        </div>
      </div>

      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-ink-mutedInverse">
        <p>&copy; {year} {siteName}. All rights reserved. &bull; A DigyUdaan Media House business</p>
        <p>Crafted with intent &bull; Let&rsquo;s Fly Together</p>
      </div>
    </footer>
  );
}
