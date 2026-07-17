import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const categories = [
  'Semua',
  'Data Science',
  'Software Development',
  'Multimedia & Design',
  'IT Infrastructure',
  'Office Productivity',
  'Digital Business',
];

const schemes = [
  // Data Science
  {
    category: 'Data Science',
    title: 'Artificial Intelligence Management',
    desc: 'Kuasai pengelolaan proyek AI dari perencanaan hingga perawatan solusi kecerdasan buatan.',
    slug: 'ai-management',
  },
  {
    category: 'Data Science',
    title: 'Data Analyst',
    desc: 'Buktikan kemampuan mengolah dan mengamankan data untuk mendukung keputusan bisnis.',
    slug: 'data-analyst',
  },
  {
    category: 'Data Science',
    title: 'Data Scientist',
    desc: 'Validasi kompetensi membangun dan mengevaluasi model data science secara profesional.',
    slug: 'data-scientist',
  },
  {
    category: 'Data Science',
    title: 'Big Data Specialist',
    desc: 'Sertifikasi kemampuan mengelola dan memproses data skala besar menggunakan platform modern.',
    slug: 'big-data',
  },
  // Software Development
  {
    category: 'Software Development',
    title: 'Junior Web Developer',
    desc: 'Validasi kompetensi dasar pengembangan web front-end dan back-end sesuai standar BNSP.',
    slug: 'junior-web-dev',
  },
  {
    category: 'Software Development',
    title: 'Pemrograman Berorientasi Objek',
    desc: 'Sertifikasi penguasaan konsep OOP dan implementasinya dalam bahasa pemrograman modern.',
    slug: 'oop',
  },
  {
    category: 'Software Development',
    title: 'Mobile Application Developer',
    desc: 'Buktikan kemampuan merancang dan membangun aplikasi mobile lintas platform.',
    slug: 'mobile-dev',
  },
  {
    category: 'Software Development',
    title: 'Database Programmer',
    desc: 'Validasi kompetensi desain, implementasi, dan pengelolaan database relasional.',
    slug: 'database-programmer',
  },
  // Multimedia & Design
  {
    category: 'Multimedia & Design',
    title: 'Graphic Designer',
    desc: 'Sertifikasi kompetensi desain grafis digital untuk media cetak dan digital profesional.',
    slug: 'graphic-designer',
  },
  {
    category: 'Multimedia & Design',
    title: 'UI/UX Designer',
    desc: 'Validasi kemampuan merancang antarmuka dan pengalaman pengguna yang efektif dan estetis.',
    slug: 'ui-ux-designer',
  },
  {
    category: 'Multimedia & Design',
    title: 'Video Editor',
    desc: 'Buktikan kompetensi produksi dan pengeditan video untuk konten digital berkualitas tinggi.',
    slug: 'video-editor',
  },
  // IT Infrastructure
  {
    category: 'IT Infrastructure',
    title: 'Administrasi Sistem Jaringan',
    desc: 'Sertifikasi kemampuan instalasi, konfigurasi, dan pemeliharaan infrastruktur jaringan komputer.',
    slug: 'network-admin',
  },
  {
    category: 'IT Infrastructure',
    title: 'Cyber Security Analyst',
    desc: 'Validasi kompetensi identifikasi dan penanganan ancaman keamanan siber pada sistem organisasi.',
    slug: 'cyber-security',
  },
  {
    category: 'IT Infrastructure',
    title: 'Cloud Computing Practitioner',
    desc: 'Buktikan kemampuan mengelola layanan cloud untuk kebutuhan infrastruktur bisnis modern.',
    slug: 'cloud-computing',
  },
  // Office Productivity
  {
    category: 'Office Productivity',
    title: 'Spreadsheet Specialist',
    desc: 'Sertifikasi penguasaan pengolahan data, formula, dan visualisasi menggunakan aplikasi spreadsheet.',
    slug: 'spreadsheet',
  },
  {
    category: 'Office Productivity',
    title: 'Digital Documentation',
    desc: 'Validasi kemampuan membuat dan mengelola dokumen digital profesional untuk kebutuhan kerja.',
    slug: 'digital-docs',
  },
  // Digital Business
  {
    category: 'Digital Business',
    title: 'Digital Marketing Specialist',
    desc: 'Sertifikasi kompetensi strategi dan implementasi pemasaran digital yang terukur dan efektif.',
    slug: 'digital-marketing',
  },
  {
    category: 'Digital Business',
    title: 'E-Commerce Operator',
    desc: 'Validasi kemampuan mengelola toko online, katalog produk, dan transaksi digital secara profesional.',
    slug: 'ecommerce',
  },
  {
    category: 'Digital Business',
    title: 'Content Creator Professional',
    desc: 'Buktikan kompetensi perencanaan, pembuatan, dan distribusi konten digital yang efektif.',
    slug: 'content-creator',
  },
];

export function BnspSection() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered =
    activeCategory === 'Semua'
      ? schemes
      : schemes.filter((s) => s.category === activeCategory);

  return (
    <section id="sertifikasi" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <ShieldCheck size={18} className="text-primary" />
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Sertifikasi BNSP
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-extrabold text-secondary mb-4 leading-tight"
          >
            TERLATIH, KOMPETEN, UNGGUL!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary/60 text-base max-w-xl mx-auto mb-2"
          >
            Untuk menang di dunia kerja, kompetensi saja tidak cukup.{' '}
            <em className="text-accent font-semibold not-italic">You need a stamp of excellence!</em>
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.13 }}
            className="text-xl font-bold text-secondary mt-6"
          >
            Pilihan Skema Sertifikasi
          </motion.h3>
        </div>

        {/* Category filter tabs — multi-row wrap */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-secondary border-primary shadow-sm'
                  : 'bg-white text-secondary/60 border-gray-200 hover:border-gray-400 hover:text-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scheme cards — horizontal scroll on mobile, 3-col grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible">
          {filtered.map((scheme, i) => (
            <motion.div
              key={scheme.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex-none w-64 md:w-auto snap-start bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              {/* Category tag */}
              <span className="text-[10px] font-extrabold tracking-widest text-accent uppercase mb-3">
                {scheme.category}
              </span>

              {/* Title */}
              <h3 className="text-base font-extrabold text-secondary mb-3 leading-snug">
                {scheme.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-secondary/55 leading-relaxed flex-1 mb-5">
                {scheme.desc}
              </p>

              {/* CTA */}
              <a
                href={`#${scheme.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-secondary transition-colors group-hover:gap-2.5"
              >
                Lihat detail &amp; persyaratan
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <button className="px-8 py-4 rounded-full border-2 border-secondary text-secondary font-bold text-base hover:bg-secondary hover:text-white transition-all flex items-center gap-2 group">
            Lihat Semua Skema Sertifikasi
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
