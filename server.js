import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sendMail } from "./src/server/mail/sendMail.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message)
    return res.status(400).json({ error: "Missing fields" });

  // --- Refactored Subject Line for Clarity ---
  // This makes it easier to spot in your inbox.
  const subject = `[PORTFOLIO CONTACT] Message from ${name}`;
  // ------------------------------------------

  const text = `${message}\n\nFrom: ${name} <${email}>`;
  const html = `<p>${message.replace(
    /\n/g,
    "<br/>"
  )}</p><p>From: <strong>${name}</strong> &lt;${email}&gt;</p>`;

  const result = await sendMail({
    // The TO_EMAIL from your .env is correctly used here
    to: process.env.TO_EMAIL || process.env.EMAIL_USER,
    subject,
    text,
    html,
    replyTo: email, // This lets you hit 'Reply' directly to the user's email
  });
  if (result.ok) return res.json({ ok: true });
  return res.status(500).json({ ok: false, error: result.error });
});

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
