import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  HiOutlineCash,
  HiOutlineChatAlt2,
  HiOutlineHome,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
  HiOutlineViewGrid,
} from 'react-icons/hi';
import { HiArrowUpRight, HiScale } from 'react-icons/hi2';

const projects = [
  {
    title: 'Quizzora',
    type: 'Interactive Quiz Platform',
    description: 'A Flutter quiz experience with online and offline categories, multiple difficulty levels, flash cards, authentication and persistent user profiles.',
    tags: ['Flutter', 'Firebase', 'GetX', 'REST API'],
    url: 'https://github.com/XainMuhammadKhan/Quizzora-Flutter',
    icon: HiOutlineQuestionMarkCircle,
    featured: true,
  },
  {
    title: 'Mizana',
    type: 'Personal Expense Tracker',
    description: 'A structured finance app for recording, editing and categorising expenses through a clean dashboard and secure account-based experience.',
    tags: ['Flutter', 'BLoC', 'Supabase', 'Clean Architecture'],
    url: 'https://github.com/XainMuhammadKhan/Mizana',
    icon: HiScale,
    featured: true,
  },
  {
    title: 'ChatApp',
    type: 'Real-Time Communication',
    description: 'A full-featured Flutter messaging app with authentication, user discovery, media sharing, presence, profiles and integrated audio/video calling.',
    tags: ['Flutter', 'Riverpod', 'Firestore', 'ZegoCloud'],
    url: 'https://github.com/XainMuhammadKhan/chatapp',
    icon: HiOutlineChatAlt2,
  },
  {
    title: 'Grocix',
    type: 'Smart Grocery Planner',
    description: 'A cross-platform grocery companion for planning lists, prioritising items and understanding shopping habits through useful category insights.',
    tags: ['Expo', 'TypeScript', 'Neon DB', 'Drizzle'],
    url: 'https://github.com/XainMuhammadKhan/Grocix',
    icon: HiOutlineShoppingCart,
  },
  {
    title: 'Immobilier',
    type: 'Property Discovery App',
    description: 'A mobile real-estate experience with property search, filters, saved listings, map-based discovery, image galleries and profile management.',
    tags: ['React Native', 'Expo', 'Supabase', 'Maps'],
    url: 'https://github.com/XainMuhammadKhan/Immobilier',
    icon: HiOutlineHome,
  },
  {
    title: 'Ghazzarah',
    type: 'Intelligent Finance Manager',
    description: 'A personal finance platform for accounts, budgets and transactions with visual analytics, exports and an assistant-led workflow.',
    tags: ['React Native', 'Supabase', 'React Query', 'Zustand'],
    url: 'https://github.com/XainMuhammadKhan/Ghazzarah',
    icon: HiOutlineCash,
    featured: true,
  },
];

const PortfolioSection = () => (
  <section id="projects" className="section-wrap section-tinted">
    <div className="content-width">
      <header className="section-heading project-heading">
        <div>
          <span className="eyebrow"><HiOutlineViewGrid /> 04 / Selected work</span>
          <h2>Products with purpose.<br /><em>Built end to end.</em></h2>
        </div>
        <div className="heading-action">
          <p>Six focused products spanning education, finance, communication, commerce and property technology.</p>
          <a href="https://github.com/XainMuhammadKhan" target="_blank" rel="noreferrer" className="text-link">
            All repositories <FaGithub />
          </a>
        </div>
      </header>

      <div className="projects-grid project-icon-grid">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <article className="neo-panel project-card project-icon-card" key={project.title}>
              <div className="project-card-top">
                <div className="project-icon-well"><Icon /></div>
                {project.featured ? <span className="featured-badge">★ Featured</span> : <span className="project-order">{String(index + 1).padStart(2, '0')}</span>}
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <span className="project-type">{project.type}</span>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>

              <a href={project.url} target="_blank" rel="noreferrer" className="project-repo-link" aria-label={`View ${project.title} on GitHub`}>
                <FaGithub /> View repository <HiArrowUpRight />
              </a>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
