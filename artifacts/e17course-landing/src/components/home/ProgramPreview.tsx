import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Code2, ShieldCheck, Layers } from 'lucide-react';

const featured = [
  {
    category: 'Software Development',
    title: 'Frontend Development – React.js',
    desc: 'Kuasai fondasi dan praktik terbaik membangun antarmuka web modern.',
    slug: 'frontend-reactjs',
    type: 'bootcamp',
  },
  {
    category: 'IT Quality Assurance',
    title: 'Manual Testing',
    desc: 'Bangun fondasi kuat pengujian software untuk meningkatkan kualitas aplikasi.',
    slug: 'manual-testing',
    type: 'bootcamp',
  },
  {
    category: 'Software Development',
    title: 'Backend Development – Node.js',
    desc: 'Rancang dan bangun API serta layanan backend yang scalable.',
    slug: 'backend-nodejs',
    type: 'bootcamp',
  },
];

const featuredBnsp = [
  {
    category: 'Data Science',
    title: 'Data Analyst',
    desc: 'Buktikan kemampuan mengolah data untuk mendukung keputusan bisnis.',
    slug: 'data-analyst',
  },
  {
    category: 'Software Development',
    title: 'Junior Web Developer',
    desc: 'Validasi kompetensi pengembangan web front-end dan back-end sesuai BNSP.',
    slug: 'junior-web-dev',
  },
  {
    category: 'Multimedia & Design',
    title: 'UI/UX Designer',
    desc: 'Validasi kemampuan merancang antarmuka dan pengalaman pengguna yang efektif.',
    slug: 'ui-ux-designer',
  },
];

function ProgramCard({ item, delay }: { item: typeof featured[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-amber-50 border border-amber-100 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:border-primary/30 transition-all group"
    >
      <span className="text-[10px] font-extrabold tracking-widest text-primary/70 uppercase">
        {item.category}
      </span>
      <h4 className="text-sm font-extrabold text-secondary leading-snug">{item.title}</h4>
      <p className="text-xs text-secondary/55 leading-relaxed flex-1">{item.desc}</p>
      <span className="inline-flex items-center gap-1 text-xs font-bold text-accent group-hover:gap-2 transition-all">
        Konsultasi & Daftar <ArrowRight size={12} />
      </span>
    </motion.div>
  );
}

function BnspCard({ item, delay }: { item: typeof featuredBnsp[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:border-primary/30 transition-all group"
    >
      <span className="text-[10px] font-extrabold tracking-widest text-accent uppercase">
        {item.category}
      </span>
      <h4 className="text-sm font-extrabold text-secondary leading-snug">{item.title}</h4>
      <p className="text-xs text-secondary/55 leading-relaxed flex-1">{item.desc}</p>
      <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all">
        Lihat detail & persyaratan <ArrowRight size={12} />
      </span>
    </motion.div>
  );
}

export function ProgramPreview() {
  return (
    <section id="program" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-3">
              <Layers size={14} /> Program Unggulan
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              Pilih Jalur Karier<br />
              <span className="text-primary">yang Tepat Untukmu</span>
            </h2>
            <p className="mt-3 text-secondary/55 text-sm max-w-md leading-relaxed">
              Dari bootcamp intensif hingga sertifikasi resmi BNSP — temukan program yang sesuai dengan tujuan dan kecepatan belajarmu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/program"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-secondary text-secondary font-bold text-sm hover:bg-secondary hover:text-white transition-all group"
            >
              Lihat Semua Program
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* ── Two-panel grid ── */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Bootcamp panel */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Code2 size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-secondary/50 font-semibold uppercase tracking-wider">Jalur 1</p>
                <p className="text-base font-extrabold text-secondary">Bootcamp & Training</p>
              </div>
            </motion.div>

            <div className="flex flex-col gap-4">
              {featured.map((item, i) => (
                <ProgramCard key={item.slug} item={item} delay={i * 0.07} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-5"
            >
              <Link
                href="/program#program"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-secondary transition-colors"
              >
                + 11 program lainnya <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* BNSP panel */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                <ShieldCheck size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-secondary/50 font-semibold uppercase tracking-wider">Jalur 2</p>
                <p className="text-base font-extrabold text-secondary">Sertifikasi BNSP</p>
              </div>
            </motion.div>

            <div className="flex flex-col gap-4">
              {featuredBnsp.map((item, i) => (
                <BnspCard key={item.slug} item={item} delay={i * 0.07} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-5"
            >
              <Link
                href="/program#sertifikasi"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-secondary transition-colors"
              >
                + 16 skema lainnya <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
