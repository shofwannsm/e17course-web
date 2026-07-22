import { useMotionValue, useTransform, motion } from 'framer-motion';
import { 
  ChevronRight, 
  PlayCircle, 
  Users, 
  CheckCircle2, 
  Code2, 
  Award, 
  Terminal, 
  Sparkles,
  Laptop,
  Check
} from 'lucide-react';
import logo from '@assets/e17brand/logo.png';
import { useLanguage } from '@/context/LanguageContext';

const T = {
  id: {
    badge: 'Pendaftaran Gelombang 4 Dibuka',
    h1a: 'Bangun karier IT-mu',
    h1b: 'disini!',
    desc: 'E17 Course membawa fleksibilitas belajar online dan offline. Dilengkapi kelas interaktif berbasis proyek nyata serta kurikulum ramah pemula.',
    descBold: 'Apapun latar belakangmu,',
    descEnd: 'saatnya bertransformasi menjadi profesional IT bersertifikasi BNSP.',
    cta1: 'Jelajahi Program',
    cta2: 'Lihat Video',
    ratingLabel: 'dari 2.000+ alumni',
    absorbed: 'Modul Proyek Nyata',
    absorbedVal: '100%',
    mockupTitle: 'Bangun karier IT-mu disini!',
    mockupDesc: 'E17 Course membawa fleksibilitas belajar online dan offline.',
    bnspLabel: 'Sertifikasi Lisensi BNSP',
    bnspSub: 'Standar Kompetensi SKKNI RI',
    nav: ['Beranda', 'Program', 'Publikasi'],
  },
  en: {
    badge: 'Batch 4 Registration is Open',
    h1a: 'Build your IT career',
    h1b: 'right here!',
    desc: 'E17 Course brings the flexibility of online and offline learning. Equipped with interactive project-based classes and beginner-friendly curriculum.',
    descBold: 'Whatever your background,',
    descEnd: 'it\'s time to transform into a BNSP-certified IT professional.',
    cta1: 'Explore Programs',
    cta2: 'Watch Video',
    ratingLabel: 'from 2,000+ alumni',
    absorbed: 'Real Project Modules',
    absorbedVal: '100%',
    mockupTitle: 'Build your IT career right here!',
    mockupDesc: 'E17 Course brings the flexibility of online and offline learning.',
    bnspLabel: 'BNSP Certification',
    bnspSub: 'National Competency Standard',
    nav: ['Home', 'Programs', 'Publications'],
  },
};

function Hero3DMockup({ t }: { t: typeof T.id }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [12, -12]);
  const rotateY = useTransform(x, [-150, 150], [-12, 12]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-grab active:cursor-grabbing transition-transform duration-200 ease-out group"
    >
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-amber-400/15 to-transparent rounded-[36px] blur-3xl pointer-events-none" />

      {/* Main 3D Card Stack Container (Inspired by Modern Neumorphic 3D App Mockups) */}
      <div className="relative bg-white rounded-[32px] p-6 shadow-2xl border border-gray-200/80 backdrop-blur-xl group-hover:shadow-primary/20 transition-all duration-500">
        
        {/* App Titlebar Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-[11px] font-mono font-bold text-gray-400 ml-2">e17course.com/learning-hub</span>
          </div>

          <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Live Class Active
          </span>
        </div>

        {/* E17 Learning Hub App Content */}
        <div className="space-y-4">
          
          {/* Brand Header inside mockup */}
          <div className="flex items-center justify-between">
            <img src={logo} alt="E17 Course" className="h-7 object-contain" />
            <span className="text-xs font-black text-secondary bg-primary/20 px-3 py-1 rounded-full border border-primary/30">
              TECH AVENGERS
            </span>
          </div>

          {/* Interactive Code Editor Preview Box */}
          <div className="bg-[#0f172a] text-gray-200 rounded-2xl p-4 font-mono text-xs shadow-inner border border-slate-800">
            <div className="flex items-center justify-between text-[10px] text-slate-400 pb-2 mb-2 border-b border-slate-800">
              <span className="flex items-center gap-1 text-primary">
                <Terminal size={12} /> main.ts — E17 Bootcamp
              </span>
              <span className="text-emerald-400 font-bold">✓ BNSP Verified</span>
            </div>
            <p className="text-purple-400"><span className="text-blue-400">const</span> career = <span className="text-blue-400">await</span> e17.buildFuture(&#123;</p>
            <p className="pl-4 text-emerald-300">skkni: <span className="text-amber-300">'Kemnaker RI'</span>,</p>
            <p className="pl-4 text-emerald-300">realProject: <span className="text-amber-300">true</span>,</p>
            <p className="pl-4 text-emerald-300">mentor: <span className="text-amber-300">'Senior Practitioner'</span></p>
            <p className="text-purple-400">&#125;);</p>
          </div>

          {/* Live Progress Card */}
          <div className="bg-gradient-to-r from-amber-500/10 via-primary/10 to-amber-500/5 rounded-2xl p-4 border border-primary/20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-secondary flex items-center justify-center font-black shrink-0 shadow-md">
              <Code2 size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center text-xs font-black text-secondary mb-1">
                <span>Modul Proyek Nyata Bank</span>
                <span className="text-primary font-extrabold">100% Selesai</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full w-full" />
              </div>
            </div>
          </div>

          {/* Tech Pills Grid */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['React.js', 'QA Katalon', 'Temenos T24', 'Node.js API', 'Outsystems'].map((skill, idx) => (
              <span
                key={idx}
                className="text-[10px] font-extrabold text-secondary bg-gray-100 border border-gray-200 px-3 py-1 rounded-xl shadow-2xs group-hover:border-primary/40 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

      </div>

      {/* FLOATING CARD 1 (Top Right): 100% Modul Proyek Nyata (Elevated 3D Layer) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border border-primary/30 backdrop-blur-xl flex items-center gap-3 z-30"
      >
        <div className="w-10 h-10 rounded-xl bg-primary text-secondary flex items-center justify-center font-black shadow-md shrink-0">
          <Users size={20} />
        </div>
        <div>
          <p className="font-black text-secondary text-base leading-none mb-0.5">{t.absorbedVal}</p>
          <p className="text-[11px] font-bold text-secondary/60">{t.absorbed}</p>
        </div>
      </motion.div>

      {/* FLOATING CARD 2 (Bottom Left): Sertifikasi BNSP Lisensi LSP (Elevated 3D Layer) */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
        className="absolute -bottom-6 -left-6 bg-secondary text-white p-4 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl flex items-center gap-3 z-30"
      >
        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-primary flex items-center justify-center font-black shrink-0">
          <Award size={20} />
        </div>
        <div>
          <p className="font-extrabold text-white text-xs leading-snug">{t.bnspLabel}</p>
          <p className="text-[10px] text-gray-300 font-medium">{t.bnspSub}</p>
        </div>
      </motion.div>

      {/* FLOATING BADGE 3 (Top Left): Live Mentoring Praktisi */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        className="absolute -top-4 -left-4 bg-white/95 text-secondary px-3.5 py-2 rounded-xl shadow-xl border border-gray-200 text-[10px] font-extrabold flex items-center gap-2 z-30"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Mentoring 1-on-1 Praktisi</span>
      </motion.div>

    </motion.div>
  );
}

export function Hero() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section id="hero" className="relative py-12 md:py-20 overflow-hidden bg-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <div className="max-w-xl z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 text-secondary font-extrabold text-xs mb-6 border border-primary/30"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              {t.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-secondary tracking-tight"
            >
              {t.h1a}{' '}
              <span className="relative inline-block text-primary">
                {t.h1b}
                <svg className="absolute w-full -bottom-1 left-0 text-primary/30" viewBox="0 0 300 9" fill="none">
                  <path d="M2 6.73C70 1.84 194 -1.82 298 6.73" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-secondary/65 text-base sm:text-lg mb-8 leading-relaxed font-medium"
            >
              {t.desc}{' '}
              <strong className="text-secondary font-extrabold">{t.descBold}</strong>{' '}
              {t.descEnd}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-10"
            >
              <a
                href="/program"
                className="w-full sm:w-auto bg-primary text-secondary font-extrabold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group active:scale-95 text-sm sm:text-base shadow-md"
              >
                {t.cta1}
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <button className="w-full sm:w-auto text-secondary font-extrabold px-6 py-4 rounded-full border border-gray-200 hover:border-gray-300 flex items-center justify-center gap-2 transition-all duration-300 group active:scale-95 text-sm sm:text-base">
                <PlayCircle size={20} className="text-primary group-hover:scale-110 transition-transform" />
                {t.cta2}
              </button>
            </motion.div>

            {/* Social Proof Avatars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {['BS', 'SR', 'AP', 'DM'].map((i, idx) => (
                  <div
                    key={idx}
                    className={`w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold ${
                      ['bg-primary text-secondary', 'bg-blue-600', 'bg-amber-500', 'bg-emerald-600'][idx]
                    }`}
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-secondary/50 mt-0.5">
                  <span className="font-bold text-secondary">4.9/5</span> {t.ratingLabel}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Modern 3D Interactive Card Showcase Mockup (Inspired by Screenshot 2) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <Hero3DMockup t={t} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
