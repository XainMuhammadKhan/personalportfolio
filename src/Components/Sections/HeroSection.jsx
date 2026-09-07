import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiArrowDown, HiOutlineLocationMarker } from 'react-icons/hi';
import { HiArrowUpRight } from 'react-icons/hi2';
import BlobImage from '../Ui/BlobImage';
import TypewriterSkills from '../Ui/TypeWriterSkills';

const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=xain.k19%40gmail.com&su=Project%20Enquiry';

const HeroSection = () => (
  <section id="hero" className="hero section-wrap">
    <div className="hero-grid content-width">
      <div className="hero-copy reveal-in">
        <div className="availability-pill">
          <span className="status-dot" /> Available for selected projects
        </div>

        <p className="hero-kicker">Hello, I&apos;m Xain Muhammad Khan</p>
        <h1>
          I build digital
          <span> experiences that hit different.</span>
        </h1>
        <div className="role-line">
          <span className="role-label">I&apos;m a</span>
          <TypewriterSkills />
        </div>
        <p className="hero-summary">
          Full-stack and mobile developer turning ambitious ideas into fast, useful and memorable products—from polished interfaces to production-ready backends.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="neo-button">
            Explore my work <HiArrowDown />
          </a>
          <a href={gmailUrl} target="_blank" rel="noreferrer" className="neo-button neo-button-ghost">
            Hire me <HiArrowUpRight />
          </a>
        </div>

        <div className="hero-meta">
          <span><HiOutlineLocationMarker /> Karachi, Pakistan</span>
          <a href="https://github.com/XainMuhammadKhan" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          <a href="https://www.linkedin.com/in/xain-muhammad-khan-8a746b319/" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
        </div>
      </div>

      <div className="hero-visual reveal-in reveal-delay">
        <BlobImage />
        <div className="floating-chip chip-top">03+ <span>Years building</span></div>
        <div className="floating-chip chip-bottom">12+ <span>Projects created</span></div>
      </div>
    </div>

    <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
      <span>Scroll to explore</span>
      <HiArrowDown />
    </a>
  </section>
);

export default HeroSection;
