import React from 'react';
import {
  SiReact, SiTailwindcss, SiJavascript, SiTypescript, SiNodedotjs,
  SiDjango, SiMysql, SiPostgresql, SiFirebase, SiSupabase, SiExpo,
  SiFlutter, SiPython, SiDart, SiGit, SiFigma, SiDocker, SiKubernetes, SiJenkins,
} from 'react-icons/si';
import { HiOutlineChip } from 'react-icons/hi';

const groups = [
  {
    number: '01',
    title: 'Frontend',
    description: 'Fast, responsive interfaces with strong component systems.',
    items: [
      ['React', SiReact], ['JavaScript', SiJavascript], ['TypeScript', SiTypescript],
      ['Tailwind', SiTailwindcss], ['Figma', SiFigma],
    ],
  },
  {
    number: '02',
    title: 'Mobile',
    description: 'Cross-platform apps with smooth state and native-feeling UX.',
    items: [
      ['Flutter', SiFlutter], ['Dart', SiDart], ['React Native', SiReact],
      ['Expo', SiExpo], ['Firebase', SiFirebase],
    ],
  },
  {
    number: '03',
    title: 'Backend',
    description: 'APIs and data layers designed for clarity and scale.',
    items: [
      ['Node.js', SiNodedotjs], ['Django', SiDjango], ['Python', SiPython],
      ['PostgreSQL', SiPostgresql], ['MySQL', SiMysql], ['Supabase', SiSupabase],
    ],
  },
  {
    number: '04',
    title: 'Workflow',
    description: 'Tools that keep delivery predictable from commit to release.',
    items: [
      ['Git', SiGit], ['Docker', SiDocker],
      ['Kubernetes', SiKubernetes], ['Jenkins', SiJenkins],
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-wrap section-tinted">
    <div className="content-width">
      <header className="section-heading centered-heading">
        <span className="eyebrow"><HiOutlineChip /> 02 / Capabilities</span>
        <h2>One stack. <em>Every layer.</em></h2>
        <p>From the first wireframe to the final endpoint, these are the tools I reach for to ship complete products.</p>
      </header>

      <div className="skills-grid">
        {groups.map((group) => (
          <article className="neo-panel skill-group" key={group.title}>
            <div className="skill-group-head">
              <span>{group.number}</span>
              <h3>{group.title}</h3>
            </div>
            <p>{group.description}</p>
            <div className="skill-list">
              {group.items.map(([name, Icon]) => (
                <div className="skill-pill" key={name}>
                  <Icon />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
