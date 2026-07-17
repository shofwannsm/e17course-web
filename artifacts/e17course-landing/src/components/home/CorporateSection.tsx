import { motion } from 'framer-motion';
import { Building2, CheckCircle2, ArrowRight, Users, Calendar, Target } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const T = {
  id: {
    badge:'Corporate Training',
    h2a:'Solusi Pengembangan', h2b:'Talenta Digital', h2c:'untuk Perusahaan',
    desc:'E17 Course membantu perusahaan meningkatkan kompetensi tim melalui program corporate training yang dirancang sesuai kebutuhan bisnis, dengan pembelajaran berbasis praktik, materi relevan industri, dan instruktur berpengalaman untuk mendukung transformasi digital organisasi.',
    benefits:[
      'Kurikulum disesuaikan kebutuhan bisnis perusahaan',
      'Instruktur berpengalaman dari industri nyata',
      'Jadwal fleksibel — online, offline, atau hybrid',
      'Laporan kompetensi dan sertifikat kelulusan',
    ],
    cta:'Jadwalkan Konsultasi',
    terminalLabel:'— UPGRADE YOUR TEAM COMPETENCY',
    modules:['Productivity & Performance','Customer Experience & Sales','Leadership & Management','Communication & Collaboration Skills','HR & Organizational Mindset','Digital Transformation Fundamentals','Data-Driven Decision Making'],
    tag:'In-house & Public Training', tagSub:'Online · Offline · Hybrid',
  },
  en: {
    badge:'Corporate Training',
    h2a:'Digital Talent', h2b:'Development Solutions', h2c:'for Your Company',
    desc:'E17 Course helps companies enhance team competency through corporate training programs designed to fit business needs, with practice-based learning, industry-relevant materials, and experienced instructors to support your organisation\'s digital transformation.',
    benefits:[
      'Curriculum tailored to company business needs',
      'Experienced instructors from real industries',
      'Flexible schedule — online, offline, or hybrid',
      'Competency reports and graduation certificates',
    ],
    cta:'Schedule Consultation',
    terminalLabel:'— UPGRADE YOUR TEAM COMPETENCY',
    modules:['Productivity & Performance','Customer Experience & Sales','Leadership & Management','Communication & Collaboration Skills','HR & Organizational Mindset','Digital Transformation Fundamentals','Data-Driven Decision Making'],
    tag:'In-house & Public Training', tagSub:'Online · Offline · Hybrid',
  },
};

const benefitIcons = [Target, Users, Calendar, CheckCircle2];

export function CorporateSection() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section id="corporate" className="py-24 bg-white relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage:'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize:'48px 48px', opacity:0.3 }} />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-widest text-primary uppercase bg-primary/8 px-3 py-1.5 rounded-full mb-5">
              <Building2 size={13} /> {t.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary leading-[1.1] mb-5">
              {t.h2a}<br /><span className="text-primary">{t.h2b}</span><br />{t.h2c}
            </h2>
            <p className="text-secondary/60 text-sm leading-relaxed mb-8 max-w-md">{t.desc}</p>
            <div className="flex flex-col gap-3 mb-8">
              {t.benefits.map((b, i) => {
                const Icon = benefitIcons[i];
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Icon size={15} className="text-primary" /></div>
                    <span className="text-sm text-secondary/70 font-medium">{b}</span>
                  </div>
                );
              })}
            </div>
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-white font-bold text-sm hover:bg-secondary/90 transition-all group">
              {t.cta}<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}>
            <div className="bg-secondary rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-400" /><span className="w-3 h-3 rounded-full bg-yellow-400" /><span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-white/40 text-xs font-mono">{t.terminalLabel}</span>
              </div>
              <div className="p-6 flex flex-col gap-1">
                {t.modules.map((mod, i) => (
                  <motion.div key={i} initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay: 0.15+i*0.07 }}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-white/5 transition-colors group cursor-default">
                    <span className="text-primary/60 text-xs font-mono w-5 shrink-0">{String(i+1).padStart(2,'0')}</span>
                    <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">{mod}</span>
                    <ArrowRight size={14} className="ml-auto text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </motion.div>
                ))}
              </div>
              <div className="px-6 pb-5">
                <div className="border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center shrink-0"><Building2 size={14} className="text-primary" /></div>
                  <div>
                    <p className="text-white text-xs font-bold">{t.tag}</p>
                    <p className="text-white/40 text-[11px]">{t.tagSub}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
