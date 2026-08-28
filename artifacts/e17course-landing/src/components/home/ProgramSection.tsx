import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { BootcampDetailModal } from './BootcampDetailModal';
import { bootcampDetailsMap, type BootcampDetail } from '@/data/bootcampDetails';

const programs = {
  id: [
    { 
      category: 'SOFTWARE DEVELOPMENT', 
      title: 'Core Banking - Temenos T24', 
      desc: 'Mempelajari sistem core banking yang digunakan dalam industri perbankan modern.',
      price: 'Biaya program mulai dari Rp 600.000',
      slug: 'core-banking-temenos-24',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop'
    },
    { 
      category: 'SOFTWARE DEVELOPMENT', 
      title: 'Outsystems Development', 
      desc: 'Membangun aplikasi enterprise lebih cepat dengan platform low-code modern.',
      price: 'Biaya program mulai dari Rp 600.000',
      slug: 'outsystems-development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
    },
    { 
      category: 'SOFTWARE DEVELOPMENT', 
      title: 'Frontend Development - React.JS', 
      desc: 'Menguasai fondasi untuk membangun antarmuka web modern.',
      price: 'Biaya program mulai dari Rp 600.000',
      slug: 'frontend-development-reactjs',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop'
    },
    { 
      category: 'SOFTWARE DEVELOPMENT', 
      title: 'Backend Development - Node.JS', 
      desc: 'Merancang dan membangun API & database modern.',
      price: 'Biaya program mulai dari Rp 600.000',
      slug: 'backend-development-nodejs',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800&auto=format&fit=crop'
    },
    { 
      category: 'IT QUALITY ASSURANCE', 
      title: 'QA Manual Testing', 
      desc: 'Menguasai pengujian software secara manual.',
      price: 'Biaya program mulai dari Rp 600.000',
      slug: 'manual-testing',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop'
    },
    { 
      category: 'IT QUALITY ASSURANCE', 
      title: 'QA Automation Testing - Katalon', 
      desc: 'Menguasai automation testing end-to-end untuk hasil lebih cepat dan efisiensi.',
      price: 'Biaya program mulai dari Rp 600.000',
      slug: 'automation-testing-katalon',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop'
    },
  ],
  en: [
    { 
      category: 'SOFTWARE DEVELOPMENT', 
      title: 'Core Banking - Temenos T24', 
      desc: 'Learn the core banking systems used in the modern banking industry.',
      price: 'Program fee starts from Rp 600,000',
      slug: 'core-banking-temenos-24',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop'
    },
    { 
      category: 'SOFTWARE DEVELOPMENT', 
      title: 'Outsystems Development', 
      desc: 'Build enterprise applications faster with modern low-code platforms.',
      price: 'Program fee starts from Rp 600,000',
      slug: 'outsystems-development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
    },
    { 
      category: 'SOFTWARE DEVELOPMENT', 
      title: 'Frontend Development - React.JS', 
      desc: 'Master the foundations for building modern web interfaces.',
      price: 'Program fee starts from Rp 600,000',
      slug: 'frontend-development-reactjs',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop'
    },
    { 
      category: 'SOFTWARE DEVELOPMENT', 
      title: 'Backend Development - Node.JS', 
      desc: 'Design and build APIs & modern databases.',
      price: 'Program fee starts from Rp 600,000',
      slug: 'backend-development-nodejs',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800&auto=format&fit=crop'
    },
    { 
      category: 'IT QUALITY ASSURANCE', 
      title: 'QA Manual Testing', 
      desc: 'Master manual software testing.',
      price: 'Program fee starts from Rp 600,000',
      slug: 'manual-testing',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop'
    },
    { 
      category: 'IT QUALITY ASSURANCE', 
      title: 'QA Automation Testing - Katalon', 
      desc: 'Master end-to-end automation testing for faster results and efficiency.',
      price: 'Program fee starts from Rp 600,000',
      slug: 'automation-testing-katalon',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop'
    },
  ],
};

const categories = {
  id: ['Semua', 'SOFTWARE DEVELOPMENT', 'IT QUALITY ASSURANCE'],
  en: ['All', 'SOFTWARE DEVELOPMENT', 'IT QUALITY ASSURANCE'],
};

const T = {
  id: {
    eyebrow: 'BOOTCAMP',
    h2a: 'BE THE NEXT',
    h2b: 'TECH AVENGERS',
    desc: 'Pilih program yang sesuai dengan tujuan karier dan kuasai skill yang dibutuhkan dibidang IT.',
    cta: 'Lihat Semua Program Bootcamp',
    link: 'Pelajari selengkapnya',
  },
  en: {
    eyebrow: 'BOOTCAMP',
    h2a: 'BE THE NEXT',
    h2b: 'TECH AVENGERS',
    desc: 'Choose the program that fits your career goals and master the skills needed in the IT field.',
    cta: 'View All Bootcamp Programs',
    link: 'Learn more',
  },
};

export function ProgramSection() {
  const { lang } = useLanguage();
  const t = T[lang];
  const cats = categories[lang];
  const progs = programs[lang];
  
  const [activeCat, setActiveCat] = useState(cats[0]);
  const [selectedBootcamp, setSelectedBootcamp] = useState<BootcampDetail | null>(null);

  const filtered = activeCat === cats[0]
    ? progs
    : progs.filter(p => p.category === activeCat);

  const handleOpenDetail = (slug: string) => {
    const detail = bootcampDetailsMap[slug];
    if (detail) {
      setSelectedBootcamp(detail);
    }
  };

  return (
    <section id="program" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-primary uppercase bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            <Code2 size={14} /> {t.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-secondary leading-[1.1] mb-4">
            {t.h2a} <span className="text-primary">{t.h2b}</span>
          </h2>
          <p className="text-secondary/70 text-sm md:text-base leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center pb-3 mb-10">
          {cats.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-extrabold transition-all border ${
                activeCat === cat
                  ? 'bg-primary text-secondary border-primary shadow-sm'
                  : 'bg-white text-secondary/70 border-gray-200 hover:border-gray-400 hover:text-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Image Bootcamp Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => handleOpenDetail(p.slug)}
              className="bg-white border border-gray-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Program Cover Image */}
                <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-extrabold tracking-wider text-secondary bg-primary px-3 py-1 rounded-full uppercase shadow-md">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-black text-secondary mb-2 leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-secondary/65 leading-relaxed font-medium line-clamp-3 mb-4">
                    {p.desc}
                  </p>

                  <div className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-2 rounded-xl border border-amber-200/60 inline-block">
                    {p.price}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenDetail(p.slug);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary hover:text-secondary transition-colors group-hover:gap-2.5 bg-transparent border-none p-0 cursor-pointer"
                >
                  {t.link} <ArrowRight size={14} />
                </button>

                <span className="text-[11px] font-bold text-gray-500">
                  Batch 2026
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://wa.me/6281399271717?text=Halo%20E17%20Course,%20saya%20ingin%20konsultasi%20mengenai%20program%20Bootcamp."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-primary text-secondary font-extrabold text-xs sm:text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
          >
            {t.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>

      {/* Bootcamp Detail Modal */}
      <BootcampDetailModal
        bootcamp={selectedBootcamp}
        isOpen={Boolean(selectedBootcamp)}
        onClose={() => setSelectedBootcamp(null)}
      />
    </section>
  );
}
