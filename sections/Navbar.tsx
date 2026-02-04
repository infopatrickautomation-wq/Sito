
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Soluzioni', href: '#soluzioni' },
    { label: 'Casi Studio', href: '#casi-studio' },
    { label: 'Chi Sono', href: '#chi-siamo' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img 
              src="https://i.ibb.co/zh2W9Mcs/Chat-GPT-Image-4-feb-2026-10-54-50.png" 
              alt="Patrick Automation Logo" 
              style={{ height: '75px' }}
              className="w-auto transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-white/70 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:3518302839"
              className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-blue-500" />
              <span>351 830 2839</span>
            </a>
            <button
              onClick={() => scrollToSection('#contatti')}
              className="bg-[#FFBF00] text-black font-black px-8 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,191,0,0.6)] hover:scale-105 active:scale-95"
            >
              Prenota Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#050505]/98 backdrop-blur-2xl border-b border-white/5 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="px-6 py-10 space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left text-white/80 hover:text-white text-xl font-black uppercase tracking-tighter transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-8 border-t border-white/10 space-y-6">
            <a
              href="tel:3518302839"
              className="flex items-center gap-3 text-white/70 hover:text-white text-lg font-medium"
            >
              <Phone className="w-5 h-5 text-blue-500" />
              <span>351 830 2839</span>
            </a>
            <button
              onClick={() => scrollToSection('#contatti')}
              className="w-full bg-[#FFBF00] text-black font-black py-5 rounded-2xl text-lg uppercase tracking-widest active:scale-95 transition-transform"
            >
              Prenota Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
