import React, { useEffect, useState } from 'react';

const sections = [
  ['hero', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['experience', 'Experience'],
  ['projects', 'Projects'], ['certifications', 'Credentials'], ['contact', 'Contact'],
];

const SectionIndicator = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-30% 0px -55%', threshold: [0, 0.2, 0.5] });

    sections.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-indicator" aria-label="Section navigation">
      {sections.map(([id, label], index) => (
        <a className={active === id ? 'active' : ''} href={`#${id}`} key={id} aria-label={label}>
          <span>{String(index + 1).padStart(2, '0')}</span>
        </a>
      ))}
    </div>
  );
};

export default SectionIndicator;
