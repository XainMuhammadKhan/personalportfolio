import React, { useEffect } from 'react';
import Navbar from './Components/Layouts/Navbar';
import HeroSection from './Components/Sections/HeroSection';
import AboutSection from './Components/Sections/AboutSection';
import SkillsSection from './Components/Sections/SkillsSection';
import ExperienceSection from './Components/Sections/ExperienceSection';
import PortfolioSection from './Components/Sections/PortfolioSection';
import CertificationsSection from './Components/Sections/CertificationsSection';
import ContactSection from './Components/Sections/ContactSection';
import Footer from './Components/Layouts/Footer';
import SectionIndicator from './Components/Layouts/SectionIndicator';
import BackToTop from './Components/Layouts/BackToTop';
import CursorGlow from './Components/Ui/CursorGlow';

function App() {
  useEffect(() => {
    if (!window.location.hash) return undefined;
    const timer = window.setTimeout(() => {
      document.querySelector(window.location.hash)?.scrollIntoView();
    }, 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />
      <CursorGlow />
      <Navbar />
      <SectionIndicator />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <PortfolioSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
