import { motion } from 'framer-motion';
import { ChevronRight, PlayCircle, Users, CheckCircle2 } from 'lucide-react';
import logo from '@assets/e17brand/logo.png';
import { useLanguage } from '@/context/LanguageContext';

const T = {
  id: {
    badge: 'Pendaftaran Gelombang 4 Dibuka',
    h1a: 'Bangun Karier IT,',
    h1b: 'Dimulai dari Sini!',
    desc: 'Tingkatkan keahlianmu dengan kurikulum industri terkini dan dapatkan',
    descBold: 'Sertifikasi Resmi BNSP',
    descEnd: 'untuk memvalidasi kompetensimu di dunia kerja profesional.',
    cta1: 'Jelajahi Program',
    cta2: 'Lihat Video',
    ratingLabel: 'dari 2.000+ alumni',
    absorbed: 'Terserap Industri',
    mockupTitle: 'Bangun Karier IT,\nDimulai dari Sini!',
    mockupDesc: 'E17 Course membawa fleksibilitas belajar online dan offline. Dilengkapi kelas interaktif berbasis proyek nyata...',
    bnspLabel: 'Sertifikasi BNSP',
    bnspSub: 'Standar Kompetensi Nasional',
    nav: ['Beranda', 'Program', 'Publikasi'],
  },
  en: {
    badge: 'Batch 4 Registration is Open',
    h1a: 'Build Your IT Career,',
    h1b: 'Starting Right Here!',
    desc: 'Level up your skills with the latest industry curriculum and earn',
    descBold: 'Official BNSP Certification',
    descEnd: 'to validate your competence in the professional world.',
    cta1: 'Explore Programs',
    cta2: 'Watch Video',
    ratingLabel: 'from 2,000+ alumni',
    absorbed: 'Industry Absorbed',
    mockupTitle: 'Build Your IT Career,\nStarting Right Here!',
    mockupDesc: 'E17 Course brings flexibility of online and offline learning with interactive project-based classes...',
    bnspLabel: 'BNSP Certification',
    bnspSub: 'National Competency Standard',
    nav: ['Home', 'Programs', 'Publications'],
  },
};

export function Hero() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-white">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="max-w-xl z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 text-accent font-semibold text-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              {t.badge}
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-secondary">
              {t.h1a}{' '}
              <span className="relative inline-block">
                {t.h1b}
                <svg className="absolute w-full -bottom-1 left-0 text-accent/30" viewBox="0 0 300 9" fill="none">
                  <path d="M2 6.73C70 1.84 194 -1.82 298 6.73" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-secondary/60 text-lg mb-8 leading-relaxed">
              {t.desc}{' '}
              <strong className="text-secondary font-bold">{t.descBold}</strong>{' '}
              {t.descEnd}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-10">
              <button className="w-full sm:w-auto bg-primary text-secondary font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all group active:scale-95">
                {t.cta1}
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto text-secondary/70 font-semibold px-6 py-4 rounded-full border border-gray-200 hover:border-gray-300 flex items-center justify-center gap-2 transition-all group active:scale-95">
                <PlayCircle size={20} className="text-primary group-hover:scale-110 transition-transform" />
                {t.cta2}
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {['BS','SR','AP','DM'].map((i,idx) => (
                  <div key={idx} className={`w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold ${['bg-primary','bg-accent','bg-amber-400','bg-yellow-500'][idx]}`}>{i}</div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-primary">
                  {[...Array(5)].map((_,i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                </div>
                <p className="text-xs text-secondary/50 mt-0.5"><span className="font-bold text-secondary">4.9/5</span> {t.ratingLabel}</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Browser mockup */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:block">
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded-full px-3 py-1 text-xs text-secondary/40 text-center border border-gray-200">e17course.com</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <img src={logo} alt="logo" className="h-7 object-contain" />
                    <div className="flex gap-4 text-xs font-semibold text-secondary/60 ml-auto">
                      {t.nav.map((n,i) => (
                        <span key={i} className={i===0 ? 'text-primary border-b border-primary pb-0.5 font-bold' : ''}>{n}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-secondary text-base font-bold leading-tight mb-2">{t.mockupTitle.split('\n')[0]}<br />{t.mockupTitle.split('\n')[1]}</div>
                  <p className="text-xs text-secondary/50 mb-4 leading-relaxed">{t.mockupDesc}</p>
                  <div className="bg-primary/8 rounded-xl p-4 border border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                        <CheckCircle2 size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-secondary/50 uppercase tracking-wider">{t.bnspLabel}</p>
                        <p className="text-xs font-bold text-secondary">{t.bnspSub}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div animate={{ y: [0,-8,0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-6 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Users size={18} />
                  </div>
                  <div>
                    <p className="font-extrabold text-secondary text-lg leading-none mb-0.5">98%</p>
                    <p className="text-xs font-medium text-secondary/50">{t.absorbed}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none" />
    </section>
  );
}
