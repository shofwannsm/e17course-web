import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const T = {
  id: { badge:'Mulai Sekarang', h2:'Siap Mulai Karier IT-mu?', desc:'Jangan tunda lagi. Jadilah bagian dari ribuan alumni sukses yang telah membangun masa depan bersama E17 Course.', cta1:'Daftar Sekarang', cta2:'Konsultasi Gratis' },
  en: { badge:'Get Started',    h2:'Ready to Start Your IT Career?', desc:'Don\'t wait any longer. Be part of thousands of successful alumni who have built their future with E17 Course.', cta1:'Register Now', cta2:'Free Consultation' },
};

export function CtaSection() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 md:px-20 md:py-20 text-center">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage:'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize:'32px 32px' }} />
          <div className="relative z-10">
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6">{t.badge}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">{t.h2}</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">{t.desc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white text-primary rounded-full font-bold text-base hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 group">
                {t.cta1}<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/15 border border-white/30 text-white rounded-full font-bold text-base hover:bg-white/25 transition-all flex items-center gap-2">
                <MessageCircle size={18} />{t.cta2}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
