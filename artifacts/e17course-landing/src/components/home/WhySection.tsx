import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Clock, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const T = {
  id: {
    eyebrow: 'Mengapa E17 Course',
    h2a: 'Bukan Sekadar',
    h2b: 'Platform Belajar',
    desc: 'E17 Course adalah ekosistem pendidikan yang didesain untuk mentransformasi karir Anda dari nol hingga menjadi profesional bersertifikasi.',
    stats: [
      { value:'1000+', label:'Alumni' },
      { value:'20+',   label:'Program' },
      { value:'BNSP',  label:'Bersertifikasi' },
      { value:'Hybrid',label:'Online & Offline' },
    ],
    benefits: [
      { title:'Kurikulum Berbasis Industri', desc:'Materi selalu di-update mengikuti tren teknologi terbaru di perusahaan.' },
      { title:'Instruktur Berpengalaman',   desc:'Belajar langsung dari praktisi yang ahli di bidangnya masing-masing.' },
      { title:'Proyek Nyata',               desc:'Lulus dengan portofolio project real yang siap dipamerkan ke rekruter.' },
      { title:'Waktu Fleksibel',            desc:'Pilihan kelas online atau tatap muka yang bisa disesuaikan dengan kesibukan.' },
    ],
  },
  en: {
    eyebrow: 'Why E17 Course',
    h2a: 'More Than Just',
    h2b: 'a Learning Platform',
    desc: 'E17 Course is an education ecosystem designed to transform your career from zero to a certified professional.',
    stats: [
      { value:'1000+', label:'Alumni' },
      { value:'20+',   label:'Programs' },
      { value:'BNSP',  label:'Certified' },
      { value:'Hybrid',label:'Online & Offline' },
    ],
    benefits: [
      { title:'Industry-Based Curriculum',   desc:'Materials always updated following the latest tech trends in companies.' },
      { title:'Experienced Instructors',     desc:'Learn directly from practitioners who are experts in their respective fields.' },
      { title:'Real Projects',               desc:'Graduate with a real project portfolio ready to showcase to recruiters.' },
      { title:'Flexible Schedule',           desc:'Choose online or face-to-face classes that fit your busy schedule.' },
    ],
  },
};

const icons = [BookOpen, Users, CheckCircle, Clock];
const colors = [
  { color:'text-primary',    bg:'bg-primary/10' },
  { color:'text-accent',     bg:'bg-accent/10' },
  { color:'text-emerald-600',bg:'bg-emerald-50' },
  { color:'text-purple-600', bg:'bg-purple-50' },
];
const statColors = ['text-primary','text-accent','text-emerald-600','text-purple-600'];

export function WhySection() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section id="tentang" className="py-24 bg-gray-50/70 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">{t.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-6 leading-tight">
              {t.h2a}<br /><span className="text-primary">{t.h2b}</span>
            </h2>
            <p className="text-secondary/60 text-lg mb-12 leading-relaxed">{t.desc}</p>
            <div className="grid grid-cols-2 gap-6">
              {t.stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <div className={`text-3xl md:text-4xl font-extrabold ${statColors[i]} mb-1`}>{s.value}</div>
                  <div className="text-secondary/60 font-medium text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} className="grid sm:grid-cols-2 gap-5">
            {t.benefits.map((b, i) => {
              const Icon = icons[i];
              return (
                <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all">
                  <div className={`w-11 h-11 rounded-xl ${colors[i].bg} flex items-center justify-center mb-4`}>
                    <Icon size={22} className={colors[i].color} />
                  </div>
                  <h4 className="text-base font-bold text-secondary mb-2">{b.title}</h4>
                  <p className="text-sm text-secondary/60 leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
