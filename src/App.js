import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StaticGradientBackground from './components/StaticGradientBackground';

function App() {
  // Height of the navbar (for top padding)
  const NAV_HEIGHT = 64;

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      <StaticGradientBackground />
      <Navbar />
      <main className="bg-transparent" style={{ paddingTop: NAV_HEIGHT }}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
