import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Home } from 'lucide-react';
import AboutModal from '../components/AboutModal';

interface NavbarProps {
  forceSolid?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ forceSolid }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Soluzioni', href: '/#soluzioni' },
    { label: 'Casi Studio', href: '/#casi-studio' },
    { label: 'Chi Sono', href: '#', isModal: true },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string, isModal?: boolean) => {
    if (isModal) {
      e.preventDefault();
      setIsAboutModalOpen(true);
      setIsMobileMenuOpen(false);
      return;
    }

    // Se il link è un'ancora sulla stessa pagina
    if (href.startsWith('/#')) {
      const id = href.replace('/', '');
      const element = document.querySelector(id);
      
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else if (href === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const showBackground = isScrolled || forceSolid;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${
          showBackground
            ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo Group */}
            <div className="flex items-center">
              
                href="/"
                className="flex items-center gap-2 group"
                onClick={(e) => handleLinkClick(e, '/')}
              >
                <img 
                  src="https://i.ibb.co/zh2W9Mcs/Chat-GPT-Image-4-feb-2026-10-54-50.png" 
                  alt="Patrick Automation Logo" 
                  className="h-[75px] w-auto transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]" 
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {/* Home Icon integrata nel menu con spaziatura coerente */}
              <a 
                href="/" 
                onClick={(e) => handleLinkClick(e, '/')}
                className="text-white opacity-70 hover:opacity-100 hover:text-[#00D1FF] transition-all duration-300 hover:drop-shadow-[0_0_8px_#00D1FF] flex items-center justify-center"
                title="Home"
              >
                <Home className="w-[17px] h-[17px]" />
              </a>

              {navLinks.map((link) => (
                
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.isModal)}
                  className="text-white/70 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors duration-300 relative group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-6">
              
                href="tel:3518302839"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-blue-500" />
                <span>351 830 2839</span>
              </a>
              
                href="/#contatti"
                onClick={(e) => handleLinkClick(e, '/#contatti')}
                className="bg-[#FFBF00] text-black font-black px-8 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,191,0,0.6)] hover:scale-105 active:scale-95"
              >
                Prenota Call
              </a>
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
            
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center gap-3 text-white hover:text-[#00D1FF] text-xl font-black uppercase tracking-tighter transition-colors"
            >
              <Home className="w-6 h-6" /> Home
            </a>
            {navLinks.map((link) => (
              
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.isModal)}
                className="block w-full text-left text-white/80 hover:text-white text-xl font-black uppercase tracking-tighter transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-8 border-t border-white/10 space-y-6">
              
                href="tel:3518302839"
                className="flex items-center gap-3 text-white/70 hover:text-white text-lg font-medium"
              >
                <Phone className="w-5 h-5 text-blue-500" />
                <span>351 830 2839</span>
              </a>
              
                href="/#contatti"
                onClick={(e) => handleLinkClick(e, '/#contatti')}
                className="block w-full text-center bg-[#FFBF00] text-black font-black py-5 rounded-2xl text-lg uppercase tracking-widest active:scale-95 transition-transform"
              >
                Prenota Call
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* About Modal */}
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </>
  );
};

export default Navbar;
