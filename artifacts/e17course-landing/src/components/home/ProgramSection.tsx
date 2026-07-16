import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  'Semua',
  'Software Development',
  'IT Quality Assurance',
  'Data & AI',
  'Network & Security',
  'Digital Marketing',
];

const programs = [
  // Software Development
  {
    category: 'Software Development',
    title: 'Core Banking – Temenos 24',
    desc: 'Pelajari sistem core banking yang digunakan dalam industri perbankan modern secara mendalam.',
    slug: 'core-banking',
  },
  {
    category: 'Software Development',
    title: 'Outsystems Development',
    desc: 'Bangun aplikasi enterprise lebih cepat dengan platform low-code modern terdepan.',
    slug: 'outsystems',
  },
  {
    category: 'Software Development',
    title: 'Frontend Development – React.js',
    desc: 'Kuasai fondasi dan praktik terbaik membangun antarmuka web modern dengan React.js.',
    slug: 'frontend-reactjs',
  },
  {
    category: 'Software Development',
    title: 'Backend Development – Node.js',
    desc: 'Rancang dan bangun API serta layanan backend yang scalable dengan Node.js.',
    slug: 'backend-nodejs',
  },
  {
    category: 'Software Development',
    title: 'Mobile Development – Flutter',
    desc: 'Kembangkan aplikasi mobile cross-platform dengan Flutter dan Dart dari dasar hingga deploy.',
    slug: 'mobile-flutter',
  },
  {
    category: 'Software Development',
    title: 'Full Stack Web Development',
    desc: 'Program komprehensif membangun aplikasi web modern dari frontend hingga backend dan deployment.',
    slug: 'fullstack',
  },
  // IT Quality Assurance
  {
    category: 'IT Quality Assurance',
    title: 'Manual Testing',
    desc: 'Bangun fondasi kuat pengujian software secara manual untuk menemukan bug dan meningkatkan kualitas aplikasi.',
    slug: 'manual-testing',
  },
  {
    category: 'IT Quality Assurance',
    title: 'Automation Testing – Katalon',
    desc: 'Kuasai automation testing end-to-end memakai tools standar industri untuk proses lebih cepat dan efisiensi QA.',
    slug: 'automation-katalon',
  },
  {
    category: 'IT Quality Assurance',
    title: 'Performance Testing – JMeter',
    desc: 'Uji performa dan skalabilitas aplikasi menggunakan Apache JMeter untuk memastikan sistem siap produksi.',
    slug: 'performance-jmeter',
  },
  // Data & AI
  {
    category: 'Data & AI',
    title: 'Data Analytics – Python',
    desc: 'Analisis data besar dengan Python, Pandas, dan visualisasi data untuk pengambilan keputusan berbasis data.',
    slug: 'data-analytics',
  },
  {
    category: 'Data & AI',
    title: 'Machine Learning Fundamentals',
    desc: 'Pelajari konsep dan implementasi machine learning menggunakan Python dan scikit-learn dari nol.',
    slug: 'machine-learning',
  },
  // Network & Security
  {
    category: 'Network & Security',
    title: 'Cyber Security Essentials',
    desc: 'Kuasai dasar-dasar keamanan siber, ethical hacking, dan perlindungan sistem dari ancaman digital.',
    slug: 'cybersecurity',
  },
  {
    category: 'Network & Security',
    title: 'Network Administration',
    desc: 'Pelajari administrasi jaringan komputer, konfigurasi router, switch, dan troubleshooting infrastruktur.',
    slug: 'network-admin',
  },
  // Digital Marketing
  {
    category: 'Digital Marketing',
    title: 'Digital Marketing Fundamentals',
    desc: 'Kuasai strategi pemasaran digital: SEO, SEM, media sosial, content marketing, dan analitik kampanye.',
    slug: 'digital-marketing',
  },
];

export function ProgramSection() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered =
    activeCategory === 'Semua'
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="program" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-primary uppercase"
          >
            Bootcamp &amp; Training
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold text-secondary mt-2 mb-3 leading-tight"
          >
            BE THE NEXT TECH AVENGERS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary font-bold text-lg mb-1"
          >
            Mulai Karier IT dengan Learning Path yang Tepat!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-secondary/60 text-base max-w-2xl"
          >
            Pilih program yang sesuai dengan tujuan karier dan kuasai skill yang dibutuhkan untuk berkembang di industri teknologi.
          </motion.p>
        </div>

        {/* Category filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-secondary shadow-sm'
                  : 'bg-gray-100 text-secondary/60 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program cards — horizontal scroll on mobile, grid on desktop */}
        <div className="relative">
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible">
            {filtered.map((program, i) => (
              <motion.div
                key={program.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex-none w-64 md:w-auto snap-start bg-amber-50 border border-amber-100 rounded-2xl p-6 flex flex-col hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                {/* Category tag */}
                <span className="text-[10px] font-extrabold tracking-widest text-primary/70 uppercase mb-3">
                  {program.category}
                </span>

                {/* Title */}
                <h3 className="text-base font-extrabold text-secondary mb-3 leading-snug">
                  {program.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-secondary/60 leading-relaxed flex-1 mb-5">
                  {program.desc}
                </p>

                {/* CTA */}
                <a
                  href={`#${program.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-secondary transition-colors group-hover:gap-2.5"
                >
                  Konsultasi &amp; Daftar
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
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
