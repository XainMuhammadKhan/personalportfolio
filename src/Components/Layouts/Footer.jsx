import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const footerLinks = [
  ['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'],
  ['Projects', '#projects'], ['Credentials', '#certifications'], ['Contact', '#contact'],
];

const Footer = () => (
  <footer className="site-footer">
    <div className="content-width footer-grid">
      <div className="footer-brand">
        <a href="#hero" className="brand-mark" aria-label="Back to home">
          <span className="brand-bracket">&lt;</span>XK<span className="brand-bracket">/&gt;</span>
        </a>
        <p>Full-stack and mobile developer building sharp products from Karachi, Pakistan.</p>
      </div>
      <div>
        <span className="footer-label">Navigate</span>
        <div className="footer-links">
          {footerLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </div>
      </div>
      <div>
        <span className="footer-label">Connect</span>
        <a className="footer-email" href="mailto:xain.k19@gmail.com">xain.k19@gmail.com</a>
        <div className="footer-socials">
          <a href="https://github.com/XainMuhammadKhan" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/xain-muhammad-khan-8a746b319/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/xaiiiiiiin" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom content-width">
      <span>© {new Date().getFullYear()} Xain Muhammad Khan</span>
      <span>Designed in black. Lit in red.</span>
    </div>
  </footer>
);

export default Footer;
