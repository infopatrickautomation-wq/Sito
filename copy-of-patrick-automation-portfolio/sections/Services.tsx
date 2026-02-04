
import React from 'react';
import { ArrowUpRight, Bot, Workflow, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollReveal<HTMLDivElement>();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollReveal<HTMLDivElement>();

  const services = [
    {
      title: 'Automazione',
      subtitle: 'Processi',
      description: 'Soluzioni personalizzate per automatizzare i tuoi flussi di lavoro. Dalla raccolta dati alla gestione documentale, trasformiamo le attività manuali in processi automatici.',
      icon: Workflow,
      features: ['Workflow automatizzati', 'Integrazione API', 'Risparmio tempo'],
      cta: 'Scopri di più',
      href: '#contatti',
    },
    {
      title: 'AI',
      subtitle: 'Agent',
      description: 'Agenti intelligenti pronti all\'uso per lead generation, customer service e gestione dati. Soluzioni rapide ed efficaci per le tue esigenze immediate.',
      icon: Bot,
      features: ['Lead Generation', 'Chatbot intelligenti', 'Analisi dati'],
      cta: 'Esplora Agent',
      href: '#contatti',
    },
  ];

  return (
    <section id="soluzioni" className="py-24 bg-[#050505] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 font-montserrat uppercase tracking-tight">
            Scegli il tuo <br /> <span className="text-blue-600">Percorso</span>
          </h2>
          <p className="text-white/40 text-xl max-w-2xl mx-auto font-light">
            Automazioni sartoriali o agenti pronti all'azione. <br />
            Qualunque sia la tua sfida, abbiamo il sistema.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const cardRef = index === 0 ? card1Ref : card2Ref;
            const cardVisible = index === 0 ? card1Visible : card2Visible;
            
            return (
              <div
                key={index}
                ref={cardRef}
                className={`group relative bg-white/[0.03] rounded-[3rem] overflow-hidden border border-white/5 hover:border-blue-600/40 transition-all duration-700 p-12 ${
                  cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-12">
                  <div>
                    <h3 className="text-3xl lg:text-5xl font-black text-white mb-2 font-montserrat uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <span className="text-3xl lg:text-5xl font-black text-blue-600 italic font-montserrat uppercase tracking-tight">
                      {service.subtitle}
                    </span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-all group-hover:scale-110">
                    <Icon className="w-8 h-8 text-blue-500" />
                  </div>
                </div>

                <p className="text-white/60 text-xl mb-12 leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-16">
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-5 py-2 rounded-full bg-white/5 text-white/50 text-xs uppercase tracking-widest font-bold border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href={service.href}
                  className="inline-flex items-center gap-4 text-white font-black text-lg group/link transition-all"
                >
                  <span className="border-b-4 border-blue-600 group-hover/link:border-purple-600 pb-1 uppercase tracking-tighter">
                    {service.cta}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:border-blue-600 transition-all">
                    <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
