import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { contact } from "../data/siteData";

export default function FloatButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-card hover:scale-105 transition-transform"
      >
        <FaWhatsapp size={26} />
      </a>
      <a
        href={contact.phone1Href}
        aria-label="Call us"
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-card hover:scale-105 transition-transform"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
}
