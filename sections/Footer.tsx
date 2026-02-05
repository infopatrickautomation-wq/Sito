
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-20 text-white/50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-16">
        <div>
          <img 
            src="https://i.ibb.co/zh2W9Mcs/Chat-GPT-Image-4-feb-2026-10-54-50.png" 
            alt="Patrick Automation Logo" 
            className="h-[80px] w-auto mb-6 brightness-125 opacity-90 transition-all hover:scale-105 filter drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]" 
          />
          <p className="leading-relaxed font-light">Trasformiamo il modo in cui le aziende lavorano attraverso l'Intelligenza Artificiale.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 font-montserrat uppercase tracking-tight">Contatti</h4>
          <div className="space-y-4">
            <div className="flex gap-4 items-center hover:text-white transition-colors cursor-pointer font-light">
              <Phone className="w-5 h-5 text-blue-500" /> 351 830 2839
            </div>
            <div className="flex gap-4 items-center hover:text-white transition-colors cursor-pointer font-light">
              <Mail className="w-5 h-5 text-purple-500" /> info.patrickautomation@gmail.com
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 font-montserrat uppercase tracking-tight">Social</h4>
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-transparent transition-all">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-white/5 text-center text-sm font-light">
        © {new Date().getFullYear()} Patrick-AI. Patrick Boccia - Automazione & Ottimizzazione Processi.
      </div>
    </footer>
  );
};

export default Footer;
