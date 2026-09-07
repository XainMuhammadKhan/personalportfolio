import React from 'react';
import { HiBriefcase, HiCode, HiOutlineAcademicCap } from 'react-icons/hi';
import { HiArrowUpRight } from 'react-icons/hi2';

const journey = [
  {
    period: 'Present',
    type: 'Independent work',
    title: 'Full-Stack & Mobile Developer',
    icon: HiBriefcase,
    text: 'Designing and delivering complete product experiences across Flutter, React, Django and modern data platforms.',
    points: ['Cross-platform mobile products', 'Responsive web applications', 'REST APIs and database systems'],
  },
  {
    period: '03+ years',
    type: 'Continuous practice',
    title: 'Project-Based Engineering',
    icon: HiCode,
    text: 'Building a broad portfolio of practical applications while strengthening architecture, state management and interface craft.',
    points: ['Product prototyping', 'UI engineering and motion', 'Testing, iteration and deployment'],
  },
  {
    period: 'Foundation',
    type: 'University of Karachi',
    title: 'Computer Science',
    icon: HiOutlineAcademicCap,
    text: 'Developing the computer science foundation behind the products: algorithms, data structures, databases and software design.',
    points: ['Core computing concepts', 'Problem-solving discipline', 'Collaborative development'],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-wrap">
    <div className="content-width">
      <header className="section-heading split-heading">
        <div>
          <span className="eyebrow"><HiBriefcase /> 03 / Experience</span>
          <h2>The path so far.<br /><em>Still moving.</em></h2>
        </div>
        <p>A practical journey built through shipping projects, learning across the stack and treating every new constraint as part of the craft.</p>
      </header>

      <div className="timeline">
        {journey.map(({ period, type, title, icon: Icon, text, points }, index) => (
          <article className="timeline-row" key={title}>
            <div className="timeline-marker">
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="timeline-period">
              <strong>{period}</strong>
              <span>{type}</span>
            </div>
            <div className="neo-panel timeline-card">
              <div className="icon-well"><Icon /></div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul>
                  {points.map((point) => <li key={point}><HiArrowUpRight /> {point}</li>)}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
