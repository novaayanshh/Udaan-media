import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { saveSubmission, listSubmissions } from "./store.js";
import { sendContactEmail, emailEnabled } from "./mailer.js";

const app = express();
const PORT = process.env.PORT || 5000;
const ADMIN_KEY = process.env.ADMIN_KEY || "";

app.use(cors());
app.use(express.json());

// Basic anti-spam: max 5 submissions per 10 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: "Too many requests. Please try again later." },
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, emailEnabled });
});

app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const { fname, phone, service, subject } = req.body || {};

    // --- Validation ---
    const errors = {};
    if (!fname || String(fname).trim().length < 2) errors.fname = "Please enter your name.";
    if (!phone || !/^[0-9+\-\s()]{7,15}$/.test(String(phone).trim())) {
      errors.phone = "Please enter a valid phone number.";
    }
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const entry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      fname: String(fname).trim(),
      phone: String(phone).trim(),
      service: service ? String(service).trim() : "",
      subject: subject ? String(subject).trim() : "",
      createdAt: new Date().toISOString(),
      ip: req.ip,
    };

    await saveSubmission(entry);

    let mailResult = { sent: false };
    try {
      mailResult = await sendContactEmail(entry);
    } catch (mailErr) {
      // Submission is already saved even if email fails — don't fail the request.
      console.error("[mailer] Failed to send email:", mailErr.message);
    }

    return res.json({ success: true, emailSent: mailResult.sent });
  } catch (err) {
    console.error("[/api/contact] error:", err);
    return res.status(500).json({ success: false, error: "Something went wrong. Please try again." });
  }
});

// Simple protected endpoint to view saved leads without email/DB setup.
// Pass ?key=YOUR_ADMIN_KEY (set ADMIN_KEY in server/.env) to access.
app.get("/api/submissions", async (req, res) => {
  if (!ADMIN_KEY || req.query.key !== ADMIN_KEY) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }
  const list = await listSubmissions();
  res.json({ success: true, count: list.length, submissions: list });
});

app.listen(PORT, () => {
  console.log(`Udaan Media backend running on http://localhost:${PORT}`);
  console.log(`Email sending: ${emailEnabled ? "ENABLED" : "DISABLED (set SMTP_* vars in server/.env)"}`);
});
