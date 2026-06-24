import React from 'react';
import HeroSection from './Components/Sections/HeroSection';
import AboutSection from './Components/Sections/AboutSection';
import PortfolioSection from './Components/Sections/PortfolioSection';
import SkillsSection from './Components/Sections/SkillsSection';
import ContactSection from './Components/Sections/ContactSection';
import Footer from './Components/Layouts/Footer';
import SectionIndicator from './Components/Layouts/SectionIndicator';
import BackToTop from './Components/Layouts/BackToTop';

function App() {
  return (
    <main>
      <SectionIndicator />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection github={{
        username: 'XainMuhammadKhan',
        localMap: {
          'Quotify-Flutter': 'quotelogo.png',
          'Fitjorn-Flutter': 'fitjorn.png',
          'Quizzora-Flutter': 'quizzora.png',
          'Grocery-app-project': 'grocery.png',
          'Al-Furqan': 'al furqan.png',
          'Waves': 'waves.png',
          'weather-app-flutter': 'weather.png',
          'Academix-LMS-An-AI-powered-LMS': 'academix.png',
          'My-Events': 'my events.png',
          'flutter-covid-tracker-app': 'covid.png',
          'periodic-table-html-css': 'periodic.png',
          'Tasq': 'task.svg'
        }
      }} />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}

export default App;