import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { serviceOptions } from "../data/siteData";

function randomCaptcha() {
  return Math.floor(1000 + Math.random() * 8999).toString();
}

export default function ContactForm() {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState(randomCaptcha());
  const [form, setForm] = useState({ fname: "", phone: "", service: "", subject: "", captchaInput: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.captchaInput.trim() !== captcha) {
      setError("Invalid Captcha Code.");
      setCaptcha(randomCaptcha());
      setForm((f) => ({ ...f, captchaInput: "" }));
      return;
    }
    setError("");
    navigate("/thanks");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="fname" className="block text-sm font-semibold text-primary mb-1.5">
          First Name
        </label>
        <input
          id="fname"
          type="text"
          name="fname"
          value={form.fname}
          onChange={handleChange}
          placeholder="Your name.."
          required
          className="w-full px-4 py-3 rounded-sm border border-borderc focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-1.5">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Your Phone"
          required
          className="w-full px-4 py-3 rounded-sm border border-borderc focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-primary mb-1.5">
          Services
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-sm border border-borderc focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">Select</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-1.5">
          Message
        </label>
        <textarea
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Write something.."
          rows={5}
          className="w-full px-4 py-3 rounded-sm border border-borderc focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-semibold text-primary mb-1.5">Captcha Code</label>
          <div className="bg-accent text-primary-dark font-heading font-bold text-xl px-4 py-2.5 rounded-sm text-center tracking-widest select-none">
            {captcha}
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-semibold text-primary mb-1.5 sm:invisible">Enter Captcha</label>
          <input
            type="text"
            name="captchaInput"
            value={form.captchaInput}
            onChange={handleChange}
            placeholder="Enter Captcha Code"
            required
            className="w-full px-4 py-3 rounded-sm border border-borderc focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        className="mt-2 bg-primary hover:bg-primary-light text-white font-heading font-bold px-8 py-3.5 rounded-sm transition-colors self-start"
      >
        Submit
      </button>
    </form>
  );
}
