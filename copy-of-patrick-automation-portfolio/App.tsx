
import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import LogoMarquee from './sections/LogoMarquee';
import Services from './sections/Services';
import About from './sections/About';
import CaseStudies from './sections/CaseStudies';
import Solutions from './sections/Solutions';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-blue-600/30">
      <BackgroundParticles />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <LogoMarquee />
        <Services />
        <About />
        <CaseStudies />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
