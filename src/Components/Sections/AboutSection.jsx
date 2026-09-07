import React from 'react';
import { HiCode, HiLightBulb, HiOutlineCube, HiOutlineSparkles } from 'react-icons/hi';

const stats = [
  { value: '03+', label: 'Years of practice' },
  { value: '12+', label: 'Projects built' },
  { value: '04', label: 'Core disciplines' },
  { value: '100%', label: 'Curiosity driven' },
];

const principles = [
  { icon: HiCode, title: 'Built properly', text: 'Readable code, thoughtful architecture and interfaces that hold up beyond the demo.' },
  { icon: HiLightBulb, title: 'Purpose first', text: 'Every interaction has a job. I reduce friction before I add decoration.' },
  { icon: HiOutlineCube, title: 'End to end', text: 'Comfortable moving from UI and state to APIs, databases and deployment.' },
];

const AboutSection = () => (
  <section id="about" className="section-wrap">
    <div className="content-width">
      <header className="section-heading split-heading">
        <div>
          <span className="eyebrow"><HiOutlineSparkles /> 01 / About</span>
          <h2>Developer by craft.<br /><em>Builder by nature.</em></h2>
        </div>
        <p>
          I&apos;m Xain, a software engineer based in Karachi. I build across mobile and web, combining visual detail with the engineering discipline needed to make products dependable.
        </p>
      </header>

      <div className="about-grid">
        <div className="neo-panel about-story">
          <span className="panel-number">01</span>
          <p className="lead-copy">I like the difficult middle ground where design, logic and real-world constraints meet.</p>
          <p>
            My work spans Flutter applications, modern React experiences, Django backends and practical database systems. I care about the tiny interaction and the big architectural decision in equal measure.
          </p>
          <p>
            The goal is always the same: turn a rough idea into software that feels simple, confident and genuinely useful.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="neo-panel stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="principles-grid">
        {principles.map(({ icon: Icon, title, text }) => (
          <article className="neo-panel principle-card" key={title}>
            <div className="icon-well"><Icon /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
