import React from 'react';
import { HiCheck, HiOutlineAcademicCap, HiOutlineBadgeCheck } from 'react-icons/hi';

const credentials = [
  { title: 'Flutter Development', type: 'Specialization', detail: 'Cross-platform mobile apps, state management and clean architecture.' },
  { title: 'Web Development', type: 'Specialization', detail: 'Responsive frontends, backend services and database-driven applications.' },
  { title: 'AI & Machine Learning', type: 'Specialization', detail: 'Applied intelligent systems, model integration and data-led features.' },
];

const CertificationsSection = () => (
  <section id="certifications" className="section-wrap">
    <div className="content-width">
      <header className="section-heading centered-heading">
        <span className="eyebrow"><HiOutlineBadgeCheck /> 05 / Credentials</span>
        <h2>Learning that compounds.<br /><em>Skills that ship.</em></h2>
        <p>A technical foundation supported by continued specialisation across the disciplines I use every day.</p>
      </header>

      <div className="credential-layout">
        <article className="neo-panel education-card">
          <div className="education-icon"><HiOutlineAcademicCap /></div>
          <div>
            <span className="project-type">Formal education</span>
            <h3>Bachelor&apos;s of Science in Software Engineering</h3>
            <p>Department of Computer Science (UBIT), University of Karachi</p>
          </div>
          <span className="credential-seal">SE</span>
        </article>

        <div className="credentials-grid">
          {credentials.map((credential, index) => (
            <article className="neo-panel credential-card" key={credential.title}>
              <div className="credential-top">
                <span>0{index + 1}</span>
                <div className="check-well"><HiCheck /></div>
              </div>
              <span className="project-type">{credential.type}</span>
              <h3>{credential.title}</h3>
              <p>{credential.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CertificationsSection;
