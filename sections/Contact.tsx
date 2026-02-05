
import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contatti" className="py-24 bg-[#050505] relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat uppercase tracking-tight">Lavoriamo Insieme</h2>
          <p className="text-white/50 text-lg font-light">Compila il form per una consulenza gratuita personalizzata.</p>
        </div>

        <div className="bg-white/[0.03] backdrop-blur-sm rounded-[2.5rem] p-10 md:p-16 border border-white/5 shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
              <CheckCircle className="w-20 h-20 text-blue-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white uppercase font-montserrat">Richiesta Inviata!</h3>
              <p className="text-white/50 mt-2">Ti ricontatterò personalmente entro 24 ore.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-2">Nome</label>
                  <input required className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:border-blue-500 transition-colors outline-none" placeholder="Inserisci il tuo nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-2">Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:border-blue-500 transition-colors outline-none" placeholder="nome@azienda.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-white/40 ml-2">Messaggio</label>
                <textarea required className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:border-blue-500 transition-colors outline-none min-h-[150px]" placeholder="Descrivi brevemente il tuo progetto o le tue necessità..." />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black py-6 rounded-2xl text-xl uppercase tracking-widest hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                Invia Richiesta
                <Send className="w-6 h-6" />
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 mt-16 text-white/60">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
              <Phone className="w-5 h-5 text-blue-500" />
            </div>
            <span className="text-lg font-medium">351 830 2839</span>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center group-hover:bg-purple-600/20 transition-colors">
              <Mail className="w-5 h-5 text-purple-500" />
            </div>
            <span className="text-lg font-medium underline underline-offset-4 decoration-white/10 hover:decoration-purple-500 transition-colors tracking-tight">info.patrickautomation@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
