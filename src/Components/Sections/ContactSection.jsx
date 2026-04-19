import React, { useRef, useEffect, useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"; 

const ContactSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }
    setLoading(true);
    try {
      // During local development the backend Express server listens on port 3000
      // (run with `npm run start-server`). In production (Netlify) the function
      // path is `/.netlify/functions/contact`. Use the local API when running
      // on localhost to avoid 404s.
      const endpoint = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:3000/api/contact'
        : '/.netlify/functions/contact';

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus({ type: 'success', message: 'Message sent — thank you! I will reply soon.' });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error — please try again later.' });
    }
    setLoading(false);
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center bg-theme-black text-white py-20 relative overflow-hidden">

      {/* Background decorative glow (subtle theme tint) */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      <div
        className={`container mx-auto px-6 sm:px-12 lg:px-24 transition-all duration-1000 ease-out transform ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Section Header aligned with About */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="col-span-1 lg:col-span-6">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white mb-2">Contact Me</h2>
              <div className="h-1 w-24 bg-theme-accent-gray"></div>
            </div>
            <p className="text-theme-accent-gray mt-4">I&apos;m available for freelance work and new projects — reach out and let&apos;s build something great.</p>
          </div>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT COLUMN: Contact Information */}
          <div className="flex flex-col gap-10 lg:pl-12">
            {/* Email */}
            <div className="flex items-center gap-6">
              <div className="text-4xl text-white icon-glow">
                <MdEmail />
              </div>
              <span className="text-lg text-white font-medium">xain.k19@gmail.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-6">
              <div className="text-4xl text-white icon-glow">
                <MdPhone />
              </div>
              <span className="text-lg text-white font-medium">+92 335 2909044</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-6">
              <div className="text-4xl text-white icon-glow">
                <MdLocationOn />
              </div>
              <span className="text-lg text-white font-medium">Karachi, Pakistan</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 bg-theme-gray/60 border border-white/10 focus:border-white outline-none text-white placeholder-theme-accent-gray transition-colors duration-300 rounded-md white-glow" 
              aria-label="Your name"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-theme-gray/60 border border-white/10 focus:border-white outline-none text-white placeholder-theme-accent-gray transition-colors duration-300 rounded-md white-glow" 
              aria-label="Your email"
            />
            <textarea 
              placeholder="Your Message" 
              rows="6" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 bg-theme-gray/60 border border-white/10 focus:border-white outline-none text-white placeholder-theme-accent-gray resize-y transition-colors duration-300 rounded-md white-glow" 
              aria-label="Your message"
            ></textarea>
            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-4 bg-white text-theme-black font-bold text-xl uppercase tracking-wider rounded-lg hover:opacity-95 transition-all duration-300 white-glow hover:white-glow-strong focus:outline-none ${loading ? 'opacity-60 pointer-events-none' : ''}`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <div className={`text-sm mt-2 ${status.type === 'success' ? 'text-green-400' : 'text-rose-400'}`} role="status">
                {status.message}
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;