import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Layers } from 'lucide-react';

const featured = [
  {
    category: 'Software Development',
    title: 'Core Banking – Temenos 24',
    desc: 'Pelajari sistem core banking yang digunakan dalam industri perbankan modern.',
    slug: 'core-banking',
    type: 'bootcamp',
  },
  {
    category: 'Software Development',
    title: 'Outsystems Development',
    desc: 'Bangun aplikasi enterprise lebih cepat dengan platform low-code modern.',
    slug: 'outsystems',
    type: 'bootcamp',
  },
  {
    category: 'Software Development',
    title: 'Frontend Development – React.js',
    desc: 'Kuasai fondasi dan praktik terbaik membangun antarmuka web modern.',
    slug: 'frontend-reactjs',
    type: 'bootcamp',
  },
  {
    category: 'Software Development',
    title: 'Backend Development – Node.js',
    desc: 'Rancang dan bangun API serta layanan backend yang scalable.',
    slug: 'backend-nodejs',
    type: 'bootcamp',
  },
  {
    category: 'IT Quality Assurance',
    title: 'Manual Testing',
    desc: 'Bangun fondasi kuat pengujian software untuk menemukan bug dan meningkatkan kualitas aplikasi.',
    slug: 'manual-testing',
    type: 'bootcamp',
  },
  {
    category: 'IT Quality Assurance',
    title: 'Automation Testing – Katalon',
    desc: 'Kuasai automation testing end-to-end memakai tools standar industri.',
    slug: 'automation-katalon',
    type: 'bootcamp',
  },
];

export function ProgramPreview() {
  return (
    <section id="program" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-widest text-primary uppercase mb-3">
              <Layers size={13} /> Bootcamp &amp; Training
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              BE THE NEXT TECH AVENGERS
            </h2>
            <p className="mt-2 text-secondary font-bold text-sm">
              Mulai Karier IT dengan Learning Path yang Tepat!
            </p>
            <p className="mt-1 text-secondary/55 text-sm max-w-lg leading-relaxed">
              Pilih program yang sesuai dengan tujuan karier dan kuasai skill yang dibutuhkan untuk berkembang di industri teknologi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="shrink-0"
          >
            <Link
              href="/program"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-secondary text-secondary font-bold text-sm hover:bg-secondary hover:text-white transition-all group whitespace-nowrap"
            >
              Lihat Semua Program
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* ── Horizontal scroll row ── */}
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {featured.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex-none w-64 snap-start bg-amber-50 border border-amber-100 rounded-2xl p-6 flex flex-col hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <span className="text-[10px] font-extrabold tracking-widest text-primary/70 uppercase mb-3">
                {item.category}
              </span>
              <h3 className="text-base font-extrabold text-secondary mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-secondary/60 leading-relaxed flex-1 mb-5">
                {item.desc}
              </p>
              <Link
                href="/program"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-secondary transition-colors group-hover:gap-2.5"
              >
                Konsultasi &amp; Daftar <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
