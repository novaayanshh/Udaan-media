import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { serviceOptions } from "../data/siteData";
import { submitContact } from "../lib/api";

function randomCaptcha() {
  return Math.floor(1000 + Math.random() * 8999).toString();
}

export default function QuickEnquiryForm() {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState(randomCaptcha());
  const [form, setForm] = useState({ fname: "", phone: "", service: serviceOptions[0], captchaInput: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.captchaInput.trim() !== captcha) {
      setError("Invalid Captcha Code.");
      setCaptcha(randomCaptcha());
      setForm((f) => ({ ...f, captchaInput: "" }));
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      await submitContact({
        fname: form.fname,
        phone: form.phone,
        service: form.service,
        subject: "",
      });
      navigate("/thanks");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setCaptcha(randomCaptcha());
      setForm((f) => ({ ...f, captchaInput: "" }));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
      <input
        type="text"
        name="fname"
        value={form.fname}
        onChange={handleChange}
        placeholder="Full Name"
        required
        className="px-4 py-3 rounded-sm border border-borderc focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <input
        type="text"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
        className="px-4 py-3 rounded-sm border border-borderc focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <select
        name="service"
        value={form.service}
        onChange={handleChange}
        className="px-4 py-3 rounded-sm border border-borderc focus:outline-none focus:ring-2 focus:ring-accent md:col-span-2"
      >
        {serviceOptions.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <div className="md:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <span className="bg-accent text-primary-dark font-heading font-bold text-lg px-4 py-3 rounded-sm text-center tracking-widest select-none">
          {captcha}
        </span>
        <input
          type="text"
          name="captchaInput"
          value={form.captchaInput}
          onChange={handleChange}
          placeholder="Enter Captcha Code"
          required
          className="flex-1 px-4 py-3 rounded-sm border border-borderc focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          type="submit"
          disabled={submitting}
          className="bg-primary hover:bg-primary-light text-white font-heading font-bold px-8 py-3 rounded-sm transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Submit"}
        </button>
      </div>
      {error && <p className="md:col-span-2 text-red-600 text-sm">{error}</p>}
    </form>
  );
}
