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
      {/* PortfolioSection showing your GitHub repos as thumbnails.
          To use the attached images as thumbnails, place them in `public/projects/`
          and name each file exactly as the repo slug with a .png (e.g. `Al-Furqan.png`).

          Example mapping (filename -> repo slug):
            Al-Furqan.png                     -> Al-Furqan
            Fitjorn-Flutter.png               -> Fitjorn-Flutter
            Quotify-Flutter.png               -> Quotify-Flutter
            Quizzora-Flutter.png              -> Quizzora-Flutter
            Grocery-app-project.png           -> Grocery-app-project
            Flutter-covid-tracker-app.png     -> (your covid tracker repo slug)
            Weather-app-flutter.png           -> (your weather repo slug)
            periodic-table-html-css.png       -> (periodic table slug)

          If a local image file is not found, the component will fall back to the GitHub social preview image.
      */}
      <PortfolioSection github={{
        username: 'XainMuhammadKhan',
        repos: [
          'Al-Furqan',
          'Waves',
          'Tasq',
          'Academix-LMS-An-AI-powered-LMS',
          'Fitjorn-Flutter',
          'Quotify-Flutter',
          'Quizzora-Flutter',
          'Grocery-app-project',
          'periodic-table-html-css',
          'flutter-covid-tracker-app',
          'weather-app-flutter'
        ],
        // Local filename overrides (use the actual files you placed in public/projects/)
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