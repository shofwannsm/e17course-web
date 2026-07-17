import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Globe, Shield, BarChart2, Megaphone } from 'lucide-react';

const categories = [
  { label: 'Semua',               icon: null },
  { label: 'Software Development', icon: Code2 },
  { label: 'IT Quality Assurance', icon: Shield },
  { label: 'Data & AI',            icon: BarChart2 },
  { label: 'Network & Security',   icon: Globe },
  { label: 'Digital Marketing',    icon: Megaphone },
];

const programs = [
  { category: 'Software Development', title: 'Core Banking – Temenos 24',       desc: 'Pelajari sistem core banking yang digunakan dalam industri perbankan modern secara mendalam.',                            slug: 'core-banking'    },
  { category: 'Software Development', title: 'Outsystems Development',           desc: 'Bangun aplikasi enterprise lebih cepat dengan platform low-code modern terdepan.',                                          slug: 'outsystems'      },
  { category: 'Software Development', title: 'Frontend Development – React.js',  desc: 'Kuasai fondasi dan praktik terbaik membangun antarmuka web modern dengan React.js.',                                        slug: 'frontend-reactjs'},
  { category: 'Software Development', title: 'Backend Development – Node.js',    desc: 'Rancang dan bangun API serta layanan backend yang scalable dengan Node.js.',                                                slug: 'backend-nodejs'  },
  { category: 'Software Development', title: 'Mobile Development – Flutter',     desc: 'Kembangkan aplikasi mobile cross-platform dengan Flutter dan Dart dari dasar hingga deploy.',                               slug: 'mobile-flutter'  },
  { category: 'Software Development', title: 'Full Stack Web Development',       desc: 'Program komprehensif membangun aplikasi web modern dari frontend hingga backend dan deployment.',                           slug: 'fullstack'       },
  { category: 'IT Quality Assurance', title: 'Manual Testing',                   desc: 'Bangun fondasi kuat pengujian software secara manual untuk menemukan bug dan meningkatkan kualitas aplikasi.',              slug: 'manual-testing'  },
  { category: 'IT Quality Assurance', title: 'Automation Testing – Katalon',     desc: 'Kuasai automation testing end-to-end memakai tools standar industri untuk proses lebih cepat dan efisiensi QA.',           slug: 'automation-katalon'},
  { category: 'IT Quality Assurance', title: 'Performance Testing – JMeter',     desc: 'Uji performa dan skalabilitas aplikasi menggunakan Apache JMeter untuk memastikan sistem siap produksi.',                  slug: 'performance-jmeter'},
  { category: 'Data & AI',            title: 'Data Analytics – Python',          desc: 'Analisis data besar dengan Python, Pandas, dan visualisasi data untuk pengambilan keputusan berbasis data.',                slug: 'data-analytics'  },
  { category: 'Data & AI',            title: 'Machine Learning Fundamentals',    desc: 'Pelajari konsep dan implementasi machine learning menggunakan Python dan scikit-learn dari nol.',                          slug: 'machine-learning'},
  { category: 'Network & Security',   title: 'Cyber Security Essentials',        desc: 'Kuasai dasar-dasar keamanan siber, ethical hacking, dan perlindungan sistem dari ancaman digital.',                       slug: 'cybersecurity'   },
  { category: 'Network & Security',   title: 'Network Administration',           desc: 'Pelajari administrasi jaringan komputer, konfigurasi router, switch, dan troubleshooting infrastruktur.',                  slug: 'network-admin'   },
  { category: 'Digital Marketing',    title: 'Digital Marketing Fundamentals',   desc: 'Kuasai strategi pemasaran digital: SEO, SEM, media sosial, content marketing, dan analitik kampanye.',                    slug: 'digital-marketing'},
];

const stats = [
  { value: '14+', label: 'Program' },
  { value: '98%', label: 'Terserap Industri' },
  { value: '50+', label: 'Hiring Partners' },
];

export function ProgramSection() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered =
    activeCategory === 'Semua'
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="program" className="py-24 bg-white relative overflow-hidden">

      {/* Decorative background dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 w-96 h-96 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #D4A200 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">

        {/* ── Section header: 2-col split ── */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">

          {/* Left: text */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-widest text-primary uppercase bg-primary/8 px-3 py-1.5 rounded-full mb-4">
              <Code2 size={13} /> Bootcamp &amp; Training
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary leading-[1.1] mb-4">
              BE THE NEXT<br />
              <span className="text-primary">TECH AVENGERS</span>
            </h2>

            <p className="font-bold text-secondary mb-1">Mulai Karier IT dengan Learning Path yang Tepat!</p>
            <p className="text-secondary/55 text-sm leading-relaxed max-w-md">
              Pilih program yang sesuai dengan tujuan karier dan kuasai skill yang dibutuhkan untuk berkembang di industri teknologi.
            </p>
          </motion.div>

          {/* Right: stats card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="relative bg-secondary rounded-3xl p-8 overflow-hidden">
              {/* Glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />

              <p className="text-primary text-[11px] font-bold tracking-widest uppercase mb-6 relative">
                Track Record Kami
              </p>

              <div className="grid grid-cols-3 gap-4 relative">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-3xl font-extrabold text-primary">{s.value}</p>
                    <p className="text-[11px] text-white/50 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 relative">
                <p className="text-white/70 text-xs leading-relaxed italic">
                  "Kurikulum berbasis industri, instruktur praktisi aktif, dan sertifikasi resmi BNSP."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Category filters ── */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
          {categories.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActiveCategory(label)}
              className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === label
                  ? 'bg-primary text-secondary shadow-sm'
                  : 'bg-gray-100 text-secondary/60 hover:bg-gray-200 hover:text-secondary'
              }`}
            >
              {Icon && <Icon size={13} />}
              {label}
            </button>
          ))}
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((program, i) => (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex flex-col hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <span className="text-[10px] font-extrabold tracking-widest text-primary/70 uppercase mb-3">
                {program.category}
              </span>
              <h3 className="text-base font-extrabold text-secondary mb-3 leading-snug">{program.title}</h3>
              <p className="text-sm text-secondary/60 leading-relaxed flex-1 mb-5">{program.desc}</p>
              <a
                href={`#${program.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-secondary transition-colors group-hover:gap-2.5"
              >
                Konsultasi &amp; Daftar <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button className="px-8 py-4 rounded-full border-2 border-secondary text-secondary font-bold text-base hover:bg-secondary hover:text-white transition-all flex items-center gap-2 group">
            Lihat Semua Program Bootcamp &amp; Training
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
