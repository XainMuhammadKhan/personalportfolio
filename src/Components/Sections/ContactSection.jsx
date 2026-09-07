import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiMail, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineSparkles } from 'react-icons/hi';
import { HiArrowUpRight } from 'react-icons/hi2';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const openGmail = (event) => {
    event.preventDefault();
    const subject = form.subject || `Project enquiry from ${form.name}`;
    const body = `${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`;
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=xain.k19%40gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section-wrap contact-section">
      <div className="content-width">
        <div className="contact-intro">
          <span className="eyebrow"><HiOutlineSparkles /> 06 / Contact</span>
          <h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2>
          <p>Tell me what you&apos;re building, where it needs to go and what success looks like. I&apos;ll meet you there.</p>
        </div>

        <div className="contact-grid">
          <aside className="contact-details">
            <a className="neo-panel contact-item" href="mailto:xain.k19@gmail.com">
              <div className="icon-well"><HiMail /></div>
              <div><span>Email</span><strong>xain.k19@gmail.com</strong></div>
              <HiArrowUpRight className="contact-arrow" />
            </a>
            <a className="neo-panel contact-item" href="tel:+923352909044">
              <div className="icon-well"><HiOutlinePhone /></div>
              <div><span>Phone</span><strong>+92 335 2909044</strong></div>
              <HiArrowUpRight className="contact-arrow" />
            </a>
            <div className="neo-panel contact-item">
              <div className="icon-well"><HiOutlineLocationMarker /></div>
              <div><span>Location</span><strong>Karachi, Pakistan</strong></div>
            </div>
            <div className="social-wells">
              <a href="https://github.com/XainMuhammadKhan" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/xain-muhammad-khan-8a746b319/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </aside>

          <form className="neo-panel contact-form" onSubmit={openGmail}>
            <div className="form-row">
              <label>
                <span>Your name</span>
                <input name="name" value={form.name} onChange={updateField} placeholder="John Doe" required />
              </label>
              <label>
                <span>Your email</span>
                <input name="email" type="email" value={form.email} onChange={updateField} placeholder="john@company.com" required />
              </label>
            </div>
            <label>
              <span>Subject</span>
              <input name="subject" value={form.subject} onChange={updateField} placeholder="A new digital product" />
            </label>
            <label>
              <span>Tell me about it</span>
              <textarea name="message" value={form.message} onChange={updateField} rows="6" placeholder="Project goals, scope and timeline..." required />
            </label>
            <button className="neo-button form-submit" type="submit">
              Continue in Gmail <HiArrowUpRight />
            </button>
            <p className="form-note">Opens a pre-filled Gmail compose window addressed to me.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
