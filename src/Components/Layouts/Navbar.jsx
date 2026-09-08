import React, { useEffect, useState } from 'react';
import { HiMenuAlt3, HiMoon, HiSun, HiX } from 'react-icons/hi';
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

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  try {
    return window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

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

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The active theme still works when browser storage is unavailable.
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#e8e8ec' : '#070708');
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark');
  const ThemeIcon = theme === 'dark' ? HiSun : HiMoon;
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

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
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} mode`}
            title={`Switch to ${nextTheme} mode`}
            aria-pressed={theme === 'light'}
          >
            <ThemeIcon />
          </button>
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
          <div className="mobile-menu-actions">
            <button
              className="theme-toggle mobile-theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${nextTheme} mode`}
              title={`Switch to ${nextTheme} mode`}
              aria-pressed={theme === 'light'}
            >
              <ThemeIcon />
            </button>
            <a className="neo-button" href={gmailUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              Hire me <HiArrowUpRight />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
