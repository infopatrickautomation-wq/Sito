
import React, { useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import LogoMarquee from './sections/LogoMarquee';
import Services from './sections/Services';
import About from './sections/About';
import CaseStudies from './sections/CaseStudies';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundParticles from './components/BackgroundParticles';
import CVAnalysisModal from './components/CVAnalysisModal';
import VoiceAgentModal from './components/VoiceAgentModal';

const App: React.FC = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

  const isAnyModalOpen = isCVModalOpen || isVoiceModalOpen;

  const handleOpenCV = () => setIsCVModalOpen(true);
  const handleOpenVoice = () => setIsVoiceModalOpen(true);

  const handleCloseCV = () => setIsCVModalOpen(false);
  const handleCloseVoice = () => setIsVoiceModalOpen(false);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-blue-600/30">
      <BackgroundParticles />
      <CustomCursor />
      
      {/* Navbar is now truly global with high z-index and state awareness */}
      <Navbar forceSolid={isAnyModalOpen} />
      
      <main className="relative z-10">
        <Hero />
        <LogoMarquee />
        <Services 
          onOpenCaseStudy={handleOpenCV} 
          onOpenVoiceAgent={handleOpenVoice}
        />
        <CaseStudies />
        
        <Contact />
      </main>
      <Footer />

      {/* Case Study Modals */}
      <CVAnalysisModal 
        isOpen={isCVModalOpen} 
        onClose={handleCloseCV} 
      />
      <VoiceAgentModal 
        isOpen={isVoiceModalOpen} 
        onClose={handleCloseVoice} 
      />
    </div>
  );
}

export default App;
