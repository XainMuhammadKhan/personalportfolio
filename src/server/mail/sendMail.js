import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables early
dotenv.config();

// --- Nodemailer Transporter Setup ---
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT || 465),
  secure: process.env.SMTP_SECURE === "true" || true, // Ensures secure is a boolean
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// --- Transporter Verification (using async/await) ---
async function verifyTransporter() {
  try {
    await transporter.verify();
    console.log("✅ Mail transporter verified and ready to send.");
  } catch (err) {
    console.warn(
      "❌ Mail transporter verification failed. Check .env settings and App Password.",
      { error: err.message }
    );
  }
}
verifyTransporter();

// --- Exported Mail Sending Function ---
export async function sendMail({ to, subject, text, html, replyTo }) {
  // Define mail options clearly using environment variable for the 'from' field
  const mailOptions = {
    from: process.env.EMAIL_USER, // The sending address from .env
    to: to, // The recipient (TO_EMAIL from index.js)
    subject: subject,
    text: text,
    html: html,
  };

  // Add replyTo if provided (this lets you reply directly to the form user)
  if (replyTo) {
    mailOptions.replyTo = replyTo;
  }

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent: ${info.messageId}`);
    return { ok: true, messageId: info.messageId };
  } catch (err) {
    console.error("⚠️ sendMail error:", err.message);
    return { ok: false, error: err.message };
  }
}
