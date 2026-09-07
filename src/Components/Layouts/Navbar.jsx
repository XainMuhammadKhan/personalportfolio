import React, { useEffect, useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { HiArrowUpRight } from 'react-icons/hi2';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Credentials', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=xain.k19%40gmail.com&su=Project%20Enquiry';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#hero" className="brand-mark" aria-label="Xain Khan home">
          <span className="brand-bracket">&lt;</span>
          <span>XK</span>
          <span className="brand-bracket">/&gt;</span>
        </a>

        <div className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a className="neo-button neo-button-small" href={gmailUrl} target="_blank" rel="noreferrer">
            Hire me <HiArrowUpRight />
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

        <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <span>0{index + 1}</span>
                <a href={link.href} onClick={() => setOpen(false)}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a className="neo-button" href={gmailUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Hire me <HiArrowUpRight />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
