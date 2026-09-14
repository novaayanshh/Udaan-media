import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  SMTP_SECURE,
  MAIL_TO,
  MAIL_FROM,
} = process.env;

const isConfigured = Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && MAIL_TO);

let transporter = null;
if (isConfigured) {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true", // true for port 465, false for 587/25
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export const emailEnabled = isConfigured;

export async function sendContactEmail({ fname, phone, service, subject }) {
  if (!transporter) {
    console.warn("[mailer] SMTP not configured — skipping email send. Submission was still saved.");
    return { sent: false, reason: "not_configured" };
  }

  const html = `
    <h2>New enquiry from Udaan Media House website</h2>
    <p><strong>Name:</strong> ${escapeHtml(fname)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Service:</strong> ${escapeHtml(service || "-")}</p>
    <p><strong>Message:</strong><br/>${escapeHtml(subject || "-")}</p>
  `;

  await transporter.sendMail({
    from: MAIL_FROM || SMTP_USER,
    to: MAIL_TO,
    replyTo: undefined,
    subject: `New enquiry — ${fname}`,
    html,
  });

  return { sent: true };
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
