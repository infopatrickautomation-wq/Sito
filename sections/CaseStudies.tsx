
import React, { useState } from 'react';
import { ArrowRight, Briefcase, FileText, Search } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();

  const caseStudies = [
    {
      id: 0,
      title: 'Lead Generation',
      client: 'Studio Consulenza',
      icon: Briefcase,
      challenge: 'Raccolta manuale di contatti potenziali da diverse fonti, processo lungo e poco efficiente.',
      solution: 'Sistema automatizzato di raccolta e qualifica lead da multiple fonti con scoring automatico.',
      results: [{ value: '+300%', label: 'Lead qualificati' }, { value: '-80%', label: 'Tempo raccolta' }],
    },
    {
      id: 1,
      title: 'Modello F24',
      client: 'Commercialista',
      icon: FileText,
      challenge: 'Compilazione manuale ripetitiva del Modello F24 per decine di clienti ogni mese.',
      solution: 'Automazione completa della compilazione F24 con pre-compilazione dati e verifica errori.',
      results: [{ value: '10h', label: 'Risparmiate/mese' }, { value: '0', label: 'Errori' }],
    },
    {
      id: 2,
      title: 'Social Automation',
      client: 'Agenzia Recruitment',
      icon: Search,
      challenge: 'Ricerca manuale di annunci lavorativi e pubblicazione su Facebook, 2 ore al giorno.',
      solution: 'Sistema automatizzato di scraping annunci e pubblicazione programmata sui canali social.',
      results: [{ value: '2h', label: 'Risparmio/giorno' }, { value: '24/7', label: 'Operatività' }],
    },
  ];

  const activeStudy = caseStudies[activeCase];

  return (
    <section id="casi-studio" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat uppercase tracking-tight">Success Stories</h2>
          <p className="text-white/50 text-lg">Esempi concreti di processi trasformati dall'AI.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(study.id)}
              className={`px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeCase === study.id 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105 shadow-lg shadow-blue-600/20' 
                  : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
              }`}
            >
              {study.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative rounded-full overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center p-20 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15)_0%,transparent_70%)] animate-pulse" />
              <activeStudy.icon className="w-32 h-32 text-blue-500 relative z-10 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <span className="text-blue-500 font-black text-xs tracking-[0.3em] uppercase mb-3 block">{activeStudy.client}</span>
              <h3 className="text-4xl font-black text-white mb-8 font-montserrat tracking-tight">{activeStudy.title}</h3>
              <p className="text-white/70 text-lg leading-relaxed mb-10 border-l-2 border-white/10 pl-6">{activeStudy.challenge}</p>
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm group hover:border-blue-600/30 transition-colors">
                <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-black uppercase tracking-widest text-sm mb-3">La Nostra Soluzione:</h4>
                <p className="text-white/80 text-lg">{activeStudy.solution}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {activeStudy.results.map((r, i) => (
                <div key={i} className="text-center p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/[0.08] transition-all">
                  <div className="text-5xl font-black text-white mb-2 font-montserrat">{r.value}</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest font-bold">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
