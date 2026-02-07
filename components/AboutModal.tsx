import React from 'react';
import { X, Check, Clock, Target, TrendingUp } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const benefits = [
    { icon: Clock, title: 'Risparmio Tempo', description: 'Automatizza task ripetitivi e recupera ore preziose ogni giorno.' },
    { icon: Target, title: 'Precisione', description: 'Elimina errori umani e garantisci risultati sempre accurati.' },
    { icon: TrendingUp, title: 'Scalabilità', description: 'Cresci senza limiti, i tuoi processi si adattano automaticamente.' },
  ];

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 p-6 flex justify-between items-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#FFBF00] animate-pulse" />
            <span className="text-[#E6E8EB] text-sm font-medium">Chi Sono</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat uppercase tracking-tight">
                Trasformo il tuo modo di <span className="text-blue-600">lavorare con l'AI</span>
              </h2>
              <div className="space-y-6 text-[#E6E8EB] text-lg leading-relaxed mb-10">
                <p>
                  Mi chiamo <strong className="text-white">Patrick Boccia</strong> e sono uno 
                  specialista in automazione e ottimizzazione dei processi aziendali. 
                </p>
                <p>
                  Attraverso l'integrazione di sistemi automatici e intelligenza artificiale, 
                  permetto di risparmiare tempo prezioso e concentrarsi su ciò che conta davvero: far crescere il business.
                </p>
              </div>
              <div className="space-y-4">
                {['Analisi personalizzata', 'Soluzioni su misura', 'Formazione e supporto', 'Integrazione seamless'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#3D52A0]/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#FFBF00]" />
                    </div>
                    <span className="text-[#E6E8EB]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {benefits.map((b, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-600/30 transition-all">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-xl bg-blue-600/10 text-[#FFBF00]">
                      <b.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                      <p className="text-white/60 text-sm">{b.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 bg-gradient-to-t from-[#0A0A0A] to-transparent p-6 border-t border-white/10">
          <div className="flex justify-center">
            
              href="/#contatti"
              onClick={onClose}
              className="bg-[#FFBF00] text-black font-black px-10 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,191,0,0.6)] hover:scale-105 active:scale-95"
            >
              Prenota una Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
