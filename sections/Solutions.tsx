
import React from 'react';
import { Mail, MessageSquare, FileSpreadsheet, Search, Share2, BarChart3 } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    { icon: Mail, title: 'Email Automation', desc: 'Automatizza l\'invio di email personalizzate e follow-up.' },
    { icon: MessageSquare, title: 'Chatbot AI', desc: 'Chatbot intelligenti che qualificano lead 24/7.' },
    { icon: FileSpreadsheet, title: 'Gestione Dati', desc: 'Automazione compilazione e verifica documenti.' },
    { icon: Search, title: 'Web Scraping', desc: 'Estrazione automatica dati da piattaforme online.' },
    { icon: Share2, title: 'Social Media', desc: 'Pubblicazione e engagement automatizzati.' },
    { icon: BarChart3, title: 'Reportistica', desc: 'Generazione automatica di dashboard e KPI.' },
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">Soluzioni Complete</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Una suite di strumenti pronti a scalare il tuo business.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] bg-[#050505] border border-white/5 hover:border-[#3D52A0]/50 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-[#3D52A0]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <s.icon className="w-8 h-8 text-[#3D52A0]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-white/50 text-lg leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
