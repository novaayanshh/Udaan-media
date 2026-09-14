import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaAngleDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { navItems, serviceLinks, contact, siteName } from "../data/siteData";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const isServiceActive =
    location.pathname === "/service" ||
    serviceLinks.some((s) => s.path === location.pathname);

  return (
    <header id="site-header" className="relative z-50">
      {/* Top bar */}
      <div className="hidden md:block bg-primary-dark text-ink-mutedInverse text-sm">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-5">
            <a href={contact.phone1Href} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <FaPhoneAlt className="text-accent" size={11} /> {contact.phone1}
            </a>
            <a href={contact.phone2Href} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <FaPhoneAlt className="text-accent" size={11} /> {contact.phone2}
            </a>
            <a href={contact.emailHref} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <FaEnvelope className="text-accent" size={11} /> {contact.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-accent" size={11} /> Gaur City Centre, Greater Noida
            </span>
            <span className="flex items-center gap-3">
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaFacebookF size={13} /></a>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaInstagram size={13} /></a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaLinkedinIn size={13} /></a>
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow-sm">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex-shrink-0">
            <img src="/images/logo.png" alt={`${siteName} logo`} className="h-12 md:h-14 w-auto" />
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="md:hidden text-primary text-2xl"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-7">
              {navItems.map((item) =>
                item.path === "/service" ? (
                  <li key={item.path} className="relative group py-2">
                    <NavLink
                      to={item.path}
                      className={`flex items-center gap-1 font-heading font-semibold text-sm uppercase tracking-wide transition-colors ${
                        isServiceActive ? "text-accent" : "text-primary hover:text-accent"
                      }`}
                    >
                      {item.label} <FaAngleDown size={10} />
                    </NavLink>
                    <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-card rounded-sm py-2 min-w-[260px] border border-borderc">
                      {serviceLinks.map((s) => (
                        <li key={s.path}>
                          <NavLink
                            to={s.path}
                            className="block px-5 py-2 text-sm text-ink-secondary hover:text-accent hover:bg-surface-secondary transition-colors"
                          >
                            {s.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `font-heading font-semibold text-sm uppercase tracking-wide transition-colors ${
                          isActive ? "text-accent" : "text-primary hover:text-accent"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
              <li>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent-dark text-primary-dark font-heading font-bold text-sm px-5 py-2.5 rounded-sm transition-colors"
                >
                  Get a Free Quote
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-borderc bg-white">
            <ul className="flex flex-col py-2">
              {navItems.map((item) =>
                item.path === "/service" ? (
                  <li key={item.path} className="border-b border-borderc">
                    <button
                      className={`w-full flex items-center justify-between px-5 py-3 font-heading font-semibold text-sm uppercase ${
                        isServiceActive ? "text-accent" : "text-primary"
                      }`}
                      onClick={() => setMobileServicesOpen((v) => !v)}
                    >
                      <NavLink to={item.path} onClick={() => setMobileOpen(false)}>
                        {item.label}
                      </NavLink>
                      <FaAngleDown className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileServicesOpen && (
                      <ul className="bg-surface-secondary">
                        {serviceLinks.map((s) => (
                          <li key={s.path}>
                            <NavLink
                              to={s.path}
                              onClick={() => setMobileOpen(false)}
                              className="block px-8 py-2.5 text-sm text-ink-secondary"
                            >
                              {s.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.path} className="border-b border-borderc">
                    <NavLink
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `block px-5 py-3 font-heading font-semibold text-sm uppercase ${
                          isActive ? "text-accent" : "text-primary"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
              <li className="px-5 py-4">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-accent hover:bg-accent-dark text-primary-dark font-heading font-bold text-sm px-5 py-3 rounded-sm transition-colors"
                >
                  Get a Free Quote
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
