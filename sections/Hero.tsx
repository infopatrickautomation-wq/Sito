
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal<HTMLDivElement>();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Deep Radial Gradient for Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.25)_0%,transparent_70%)] z-0" />

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-32 pb-20">
        
        {/* Logo Centrale - Effetto Olografico Integrato e Potenziato */}
        <div 
          className={`mb-12 flex justify-center transition-all duration-1000 ${
            titleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="relative group">
            {/* Multi-layered Glow behind the logo */}
            <div className="absolute inset-0 bg-blue-600/30 blur-[100px] rounded-full scale-150 animate-pulse"></div>
            <div className="absolute inset-0 bg-purple-600/20 blur-[120px] rounded-full scale-125 animate-pulse delay-700"></div>
            
            {/* Logo notevolmente ingrandito per impatto massimo */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
              <img 
                src="https://i.ibb.co/zh2W9Mcs/Chat-GPT-Image-4-feb-2026-10-54-50.png" 
                alt="Patrick Automation Logo" 
                className="w-full h-auto drop-shadow-[0_0_80px_rgba(37,99,235,0.9)] filter brightness-110" 
              />
            </div>
          </div>
        </div>

        {/* Main Title Section */}
        <div 
          ref={titleRef}
          className={`transition-all duration-1000 delay-200 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-[0.9] tracking-tighter uppercase font-montserrat">
            L'Evoluzione <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600">
              Intelligente
            </span> <br />
            del tuo Business
          </h1>
          
          <p className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-12 tracking-wide uppercase">
            Oltre ogni confine digitale.
          </p>
        </div>

        {/* Action Section */}
        <div 
          ref={ctaRef}
          className={`transition-all duration-700 delay-400 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Integrazione di sistemi AI e automazioni avanzate per scalare <br className="hidden md:block" />
            la tua attività risparmiando centinaia di ore manuali.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => scrollToSection('#contatti')}
              className="relative group bg-gradient-to-r from-blue-600 to-purple-600 p-[1px] rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
            >
              <span className="flex items-center gap-2 bg-[#050505] group-hover:bg-transparent transition-colors px-10 py-5 rounded-full text-white font-bold text-lg">
                Inizia l'Evoluzione
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('#soluzioni')}
              className="text-white/80 hover:text-white px-10 py-5 rounded-full text-lg font-medium border border-white/10 hover:bg-white/5 transition-all duration-300"
            >
              Scopri i Servizi
            </button>
          </div>
        </div>
      </div>

      {/* Animated Gradient Orbs for Depth */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full animate-pulse delay-1000" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
