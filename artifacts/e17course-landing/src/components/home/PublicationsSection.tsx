import { motion } from 'framer-motion';
import { Book, FileText, Library, ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const T = {
  id: {
    eyebrow: 'KARYA & LITERASI',
    title: 'Publikasi Resmi E17 Course',
    subtitle: 'Jelajahi berbagai karya literasi, jurnal penelitian, dan artikel teknologi yang diterbitkan secara resmi oleh tim ahli kami.',
    categories: [
      {
        id: 'buku',
        title: 'Buku ber-ISBN',
        desc: 'Koleksi buku cetak dan digital ber-ISBN resmi yang merangkum kurikulum, panduan karier, dan referensi industri IT terkini.',
        icon: Book,
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'jurnal',
        title: 'Jurnal Ilmiah',
        desc: 'Publikasi penelitian dan studi kasus mendalam seputar inovasi teknologi dan rekayasa perangkat lunak.',
        icon: Library,
        image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'artikel',
        title: 'Artikel & Wawasan',
        desc: 'Opini, panduan teknis, dan berita tren IT terbaru yang ditulis langsung oleh praktisi berpengalaman.',
        icon: FileText,
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop',
      }
    ],
    comingSoon: 'Segera Hadir'
  },
  en: {
    eyebrow: 'WORKS & LITERACY',
    title: 'E17 Official Publications',
    subtitle: 'Explore literacy works, research journals, and tech articles officially published by our expert team.',
    categories: [
      {
        id: 'buku',
        title: 'ISBN Books',
        desc: 'Collection of official ISBN printed and digital books summarizing curriculum, career guides, and latest IT industry references.',
        icon: Book,
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'jurnal',
        title: 'Scientific Journals',
        desc: 'In-depth research publications and case studies on technology innovation and software engineering.',
        icon: Library,
        image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'artikel',
        title: 'Articles & Insights',
        desc: 'Opinions, technical guides, and the latest IT trend news written directly by experienced practitioners.',
        icon: FileText,
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop',
      }
    ],
    comingSoon: 'Coming Soon'
  }
};

export function PublicationsSection() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section id="publikasi" className="py-24 sm:py-32 bg-white text-secondary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[60%] bg-blue-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/5 border border-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            <span>{t.eyebrow}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary tracking-tight mb-6"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary/70 text-base sm:text-lg leading-relaxed font-medium"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.categories.map((cat, i) => {
            const Icon = cat.icon;
            
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative rounded-[2rem] overflow-hidden bg-black min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-6 sm:p-8 cursor-pointer border border-secondary/10 hover:border-primary/50 transition-colors shadow-2xl"
              >
                {/* Background Image */}
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] group-hover:brightness-40 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="relative z-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:text-secondary group-hover:border-primary transition-all duration-500 shadow-xl">
                    <Icon size={26} />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                    {cat.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span>{t.comingSoon}</span>
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
