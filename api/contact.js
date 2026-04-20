/* Vercel serverless function to send contact emails via Gmail SMTP (Nodemailer).
   Recommended Vercel environment variables:
   - GMAIL_USER             (required) Gmail address (your.email@gmail.com)
   - GMAIL_APP_PASSWORD     (required) App password generated in your Google Account
   - TO_EMAIL               (required) Recipient email address
   - FROM_EMAIL             (optional) Overrides the `from` address in sent emails

   Notes:
   - Create an App Password in Google Account Security > App passwords (requires 2-Step Verification).
   - This works from serverless functions but ties mail delivery to your Gmail account.
*/

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });

  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
  const TO_EMAIL = process.env.TO_EMAIL;
  const FROM_EMAIL = process.env.FROM_EMAIL || GMAIL_USER;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !TO_EMAIL) {
    return res.status(500).json({ error: 'Email service not configured (missing GMAIL_USER, GMAIL_APP_PASSWORD, or TO_EMAIL)' });
  }

  const subject = `[PORTFOLIO CONTACT] Message from ${name}`;
  const text = `${message}\n\nFrom: ${name} <${email}>`;
  const html = `<p>${message.replace(/\n/g, '<br/>')}</p><p>From: <strong>${name}</strong> &lt;${email}&gt;</p>`;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // Verify connection configuration in dev logs (silent in prod)
    if (process.env.NODE_ENV !== 'production') {
      try { await transporter.verify(); } catch (_) { /* ignore verify errors */ }
    }

    const info = await transporter.sendMail({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    return res.status(200).json({ ok: true, messageId: info.messageId });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
