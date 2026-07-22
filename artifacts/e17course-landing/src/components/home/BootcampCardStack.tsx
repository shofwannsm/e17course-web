import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Flame } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import CardSwap, { Card } from '@/components/ui/CardSwap';
import techAvengersLogo from '@assets/e17brand/tech-avengers.png';

const bootcampPrograms = {
  id: [
    {
      badge: 'SOFTWARE DEVELOPMENT',
      title: 'Core Banking - Temenos 24',
      desc: 'Mempelajari sistem core banking yang digunakan dalam industri perbankan modern.',
      price: 'Mulai Rp 600.000',
      tag: 'Banking Tech',
      color: 'from-amber-500/25 via-amber-400/10 to-transparent',
      borderColor: 'border-amber-400/40',
      badgeColor: 'bg-amber-400/15 text-amber-300',
    },
    {
      badge: 'SOFTWARE DEVELOPMENT',
      title: 'Outsystems Development',
      desc: 'Membangun aplikasi enterprise lebih cepat dengan platform low-code modern.',
      price: 'Mulai Rp 600.000',
      tag: 'Low-Code Enterprise',
      color: 'from-blue-500/25 via-cyan-400/10 to-transparent',
      borderColor: 'border-blue-400/40',
      badgeColor: 'bg-blue-400/15 text-blue-300',
    },
    {
      badge: 'SOFTWARE DEVELOPMENT',
      title: 'Frontend Development - React.js',
      desc: 'Menguasai fondasi untuk membangun antarmuka web modern.',
      price: 'Mulai Rp 600.000',
      tag: 'Modern Web UI',
      color: 'from-cyan-500/25 via-blue-400/10 to-transparent',
      borderColor: 'border-cyan-400/40',
      badgeColor: 'bg-cyan-400/15 text-cyan-300',
    },
    {
      badge: 'SOFTWARE DEVELOPMENT',
      title: 'Backend Development - Node.js',
      desc: 'Merancang dan membangun API.',
      price: 'Mulai Rp 600.000',
      tag: 'Scalable Services',
      color: 'from-emerald-500/25 via-emerald-400/10 to-transparent',
      borderColor: 'border-emerald-400/40',
      badgeColor: 'bg-emerald-400/15 text-emerald-300',
    },
    {
      badge: 'IT QUALITY ASSURANCE',
      title: 'Manual Testing',
      desc: 'Menguasai pengujian software secara manual.',
      price: 'Mulai Rp 600.000',
      tag: 'Software QA',
      color: 'from-purple-500/25 via-purple-400/10 to-transparent',
      borderColor: 'border-purple-400/40',
      badgeColor: 'bg-purple-400/15 text-purple-300',
    },
    {
      badge: 'IT QUALITY ASSURANCE',
      title: 'Automation Testing - Katalon',
      desc: 'Menguasai automation testing end-to-end untuk hasil lebih cepat dan efisiensi.',
      price: 'Mulai Rp 600.000',
      tag: 'Automation Testing',
      color: 'from-red-500/25 via-red-400/10 to-transparent',
      borderColor: 'border-red-400/40',
      badgeColor: 'bg-red-400/15 text-red-300',
    },
  ],
  en: [
    {
      badge: 'SOFTWARE DEVELOPMENT',
      title: 'Core Banking - Temenos 24',
      desc: 'Learn the core banking systems used in the modern banking industry.',
      price: 'From Rp 600,000',
      tag: 'Banking Tech',
      color: 'from-amber-500/25 via-amber-400/10 to-transparent',
      borderColor: 'border-amber-400/40',
      badgeColor: 'bg-amber-400/15 text-amber-300',
    },
    {
      badge: 'SOFTWARE DEVELOPMENT',
      title: 'Outsystems Development',
      desc: 'Build enterprise applications faster with modern low-code platforms.',
      price: 'From Rp 600,000',
      tag: 'Low-Code Enterprise',
      color: 'from-blue-500/25 via-cyan-400/10 to-transparent',
      borderColor: 'border-blue-400/40',
      badgeColor: 'bg-blue-400/15 text-blue-300',
    },
    {
      badge: 'SOFTWARE DEVELOPMENT',
      title: 'Frontend Development - React.js',
      desc: 'Master the foundations for building modern web interfaces.',
      price: 'From Rp 600,000',
      tag: 'Modern Web UI',
      color: 'from-cyan-500/25 via-blue-400/10 to-transparent',
      borderColor: 'border-cyan-400/40',
      badgeColor: 'bg-cyan-400/15 text-cyan-300',
    },
    {
      badge: 'SOFTWARE DEVELOPMENT',
      title: 'Backend Development - Node.js',
      desc: 'Design and build APIs.',
      price: 'From Rp 600,000',
      tag: 'Scalable Services',
      color: 'from-emerald-500/25 via-emerald-400/10 to-transparent',
      borderColor: 'border-emerald-400/40',
      badgeColor: 'bg-emerald-400/15 text-emerald-300',
    },
    {
      badge: 'IT QUALITY ASSURANCE',
      title: 'Manual Testing',
      desc: 'Master manual software testing.',
      price: 'From Rp 600,000',
      tag: 'Software QA',
      color: 'from-purple-500/25 via-purple-400/10 to-transparent',
      borderColor: 'border-purple-400/40',
      badgeColor: 'bg-purple-400/15 text-purple-300',
    },
    {
      badge: 'IT QUALITY ASSURANCE',
      title: 'Automation Testing - Katalon',
      desc: 'Master end-to-end automation testing for faster results and efficiency.',
      price: 'From Rp 600,000',
      tag: 'Automation Testing',
      color: 'from-red-500/25 via-red-400/10 to-transparent',
      borderColor: 'border-red-400/40',
      badgeColor: 'bg-red-400/15 text-red-300',
    },
  ],
};

const T = {
  id: {
    eyebrow: 'BOOTCAMP',
    h2a: 'BE THE NEXT',
    manifestoDesc: 'Seluruh program pembelajaran E17 Course berada dalam satu campaign besar bernama TechAvengers — merepresentasikan semangat kolaborasi, peningkatan skill, dan kesiapan menghadapi tantangan industri digital.',
    cta: 'Daftar & Konsultasi Bootcamp via WhatsApp',
    badgeText: 'BATCH 2026 DIBUKA',
    learnMore: 'Pelajari selengkapnya',
  },
  en: {
    eyebrow: 'BOOTCAMP',
    h2a: 'BE THE NEXT',
    manifestoDesc: 'All E17 Course learning programs fall under one big master campaign named TechAvengers — representing collaboration spirit, skill enhancement, and readiness for digital industry challenges.',
    cta: 'Register & Consult Bootcamp via WhatsApp',
    badgeText: 'BATCH 2026 OPEN',
    learnMore: 'Learn more',
  },
};

export function BootcampCardStack() {
  const { lang } = useLanguage();
  const t = T[lang];
  const progs = bootcampPrograms[lang];

  return (
    <section className="py-24 bg-[#080a0f] text-white relative overflow-hidden">
      
      {/* Tech Avengers Heroic Energy Aura (Blue & Red Laser Effects) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[550px] h-[550px] bg-red-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Tech Avengers Headline & Campaign Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-[11px] font-extrabold tracking-widest uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-md">
                <Flame size={14} className="text-amber-400 animate-pulse" /> {t.eyebrow}
              </div>

              {/* BE THE NEXT (Small Tracking Header) + HUGE Tech Avengers Logo */}
              <div className="flex flex-col items-start gap-1 mb-6">
                <span className="text-xs sm:text-sm md:text-base font-black tracking-[0.25em] text-gray-300 uppercase">
                  {t.h2a}
                </span>
                <img 
                  src={techAvengersLogo} 
                  alt="Tech Avengers" 
                  className="h-36 sm:h-52 md:h-64 w-auto max-w-full md:max-w-2xl object-contain drop-shadow-[0_0_60px_rgba(255,202,40,0.8)] mt-1" 
                />
              </div>

              {/* Campaign Description Box */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 max-w-xl">
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {t.manifestoDesc}
                </p>
              </div>

              {/* Golden Heroic WhatsApp CTA Button */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/6281399271717?text=Halo%20E17%20Course,%20saya%20tertarik%20dengan%20program%20Bootcamp%20Tech%20Avengers."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-[#ffca28] text-secondary font-black text-xs sm:text-sm hover:bg-[#ffd54f] transition-all flex items-center gap-2.5 shadow-[0_0_30px_rgba(255,202,40,0.35)] hover:shadow-[0_0_40px_rgba(255,202,40,0.5)] group transform hover:-translate-y-0.5"
                >
                  {t.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: React Bits <CardSwap /> Deck */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[500px]">
            <div className="relative w-full max-w-[460px] h-[400px]">
              
              <CardSwap
                width={360}
                height={320}
                cardDistance={45}
                verticalDistance={55}
                delay={4000}
                pauseOnHover={false}
                skewAmount={4}
                easing="elastic"
              >
                {progs.map((p, i) => (
                  <Card 
                    key={i} 
                    className={`p-6 sm:p-7 flex flex-col justify-between overflow-hidden border ${p.borderColor} bg-[#101420] shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}
                  >
                    {/* Hero Energy Card Gradient */}
                    <div aria-hidden className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-50 pointer-events-none`} />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className={`text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md ${p.badgeColor}`}>
                          {p.badge}
                        </span>
                        <span className="text-[11px] font-black text-[#ffca28] bg-[#ffca28]/15 border border-[#ffca28]/30 px-3 py-0.5 rounded-full shadow-sm">
                          {p.price}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-white mb-2 leading-snug tracking-tight">
                        {p.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 font-medium">
                        {p.desc}
                      </p>
                    </div>

                    <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                      <a
                        href={`https://wa.me/6281399271717?text=Halo%20E17%20Course,%20saya%20tertarik%20dengan%20program%20Bootcamp:%20*${encodeURIComponent(p.title)}*.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-black text-[#ffca28] hover:text-white transition-colors group"
                      >
                        {t.learnMore} <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </a>

                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        {t.badgeText}
                      </span>
                    </div>
                  </Card>
                ))}
              </CardSwap>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
