import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User, BookOpen, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useLanguage } from '@/context/LanguageContext';

const T = {
  id: {
    eyebrow: 'EDUKASI & TREN IT',
    title: 'Artikel & Wawasan Terbaru',
    subtitle: 'Baca panduan karier, tren teknologi, dan wawasan terkini dari tim instruktur & praktisi E17 Course.',
    viewAll: 'Lihat Semua Artikel',
    articles: [
      {
        id: 5,
        category: 'Sertifikasi',
        title: 'Panduan Lengkap Sertifikasi BNSP 2026: Syarat & Alur Uji',
        excerpt: 'Sertifikasi BNSP adalah bukti kompetensi resmi diakui negara. Simak persiapan berkas, portofolio, dan tips sukses uji kompetensi.',
        author: 'Reza Firmansyah',
        date: '10 July 2024',
        readTime: '8 menit',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
      },
      {
        id: 4,
        category: 'Software Dev',
        title: 'React.js vs Next.js: Mana yang Harus Kamu Pelajari Duluan?',
        excerpt: 'Banyak pemula bingung harus mulai dari React atau Next.js. Artikel ini membahas perbedaan keduanya dan rekomendasi berdasarkan tujuan kariermu.',
        author: 'Budi Santoso',
        date: '08 July 2024',
        readTime: '6 menit',
        image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80',
      },
      {
        id: 6,
        category: 'Career Development',
        title: '7 Skill Soft Wajib Dimiliki IT Professional di 2026',
        excerpt: 'Kemampuan teknis memang penting, tapi soft skill yang kuatlah yang membedakan IT professional biasa dari yang unggul.',
        author: 'Andi Pratama',
        date: '12 July 2024',
        readTime: '4 menit',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      },
      {
        id: 1,
        category: 'Web Development',
        title: '8 Rekomendasi Mesin Pencari Bebas Akses dan Legal',
        excerpt: 'Cari mesin pencari bebas akses selain Yandex? Simak situs alternatif yang aman dan bebas digunakan.',
        author: 'E17 Editorial',
        date: '14 June 2024',
        readTime: '5 menit',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
      },
      {
        id: 2,
        category: 'Digital Marketing',
        title: '5+ Contoh Digital Marketing yang Sukses di Indonesia',
        excerpt: 'Contoh digital marketing adalah periklanan online, email marketing, social media marketing, SEO, dan content marketing.',
        author: 'Raniah Fatimah',
        date: '21 June 2023',
        readTime: '4 menit',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
      },
      {
        id: 3,
        category: 'Career Development',
        title: '130+ Contoh Judul Karya Ilmiah di Berbagai Bidang',
        excerpt: 'Bingung mencari referensi tentang judul karya ilmiah untuk tugas atau skripsi? Yuk simak pembahasannya.',
        author: 'Muthiatur Rohmah',
        date: '05 May 2024',
        readTime: '6 menit',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
      },
    ],
  },
  en: {
    eyebrow: 'IT EDUCATION & TRENDS',
    title: 'Latest Articles & Insights',
    subtitle: 'Read career guides, tech trends, and latest insights from E17 Course instructors & practitioners.',
    viewAll: 'View All Articles',
    articles: [
      {
        id: 5,
        category: 'Certification',
        title: 'Complete Guide to BNSP Certification 2026',
        excerpt: 'BNSP certification is official proof of competence. Check document prep, portfolio, and exam tips.',
        author: 'Reza Firmansyah',
        date: '10 July 2024',
        readTime: '8 min',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
      },
      {
        id: 4,
        category: 'Software Dev',
        title: 'React.js vs Next.js: Which Should You Learn First?',
        excerpt: 'Many beginners are confused whether to start with React or Next.js. This article discusses differences...',
        author: 'Budi Santoso',
        date: '08 July 2024',
        readTime: '6 min',
        image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80',
      },
      {
        id: 6,
        category: 'Career Development',
        title: '7 Essential Soft Skills for IT Professionals in 2026',
        excerpt: 'Technical skills are important, but strong soft skills set extraordinary IT professionals apart.',
        author: 'Andi Pratama',
        date: '12 July 2024',
        readTime: '4 min',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      },
      {
        id: 1,
        category: 'Web Development',
        title: '8 Recommended Free and Legal Search Engines',
        excerpt: 'Looking for accessible search engines? Let\'s explore legal search engine alternatives...',
        author: 'E17 Editorial',
        date: '14 June 2024',
        readTime: '5 min',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
      },
      {
        id: 2,
        category: 'Digital Marketing',
        title: '5+ Successful Digital Marketing Examples in Indonesia',
        excerpt: 'Examples of digital marketing include online advertising, email marketing, social media, SEO...',
        author: 'Raniah Fatimah',
        date: '21 June 2023',
        readTime: '4 min',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
      },
      {
        id: 3,
        category: 'Career Development',
        title: '130+ Scientific Paper Title Examples in Various Fields',
        excerpt: 'Confused looking for references for scientific paper titles? Let\'s check out the discussion...',
        author: 'Muthiatur Rohmah',
        date: '05 May 2024',
        readTime: '6 min',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
      },
    ],
  },
};

const categoryColors: Record<string, string> = {
  'Web Development': 'bg-cyan-50 text-cyan-700 border-cyan-200/60',
  'Digital Marketing': 'bg-pink-50 text-pink-700 border-pink-200/60',
  'Career Development': 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
  'Software Dev': 'bg-blue-50 text-blue-700 border-blue-200/60',
  Sertifikasi: 'bg-amber-50 text-amber-700 border-amber-200/60',
  Certification: 'bg-amber-50 text-amber-700 border-amber-200/60',
};

export function ArticlesSection() {
  const { lang } = useLanguage();
  const t = T[lang];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  });

  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Auto sliding carousel
  useEffect(() => {
    if (!emblaApi || isHovered) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi, isHovered]);

  return (
    <section className="py-20 md:py-24 bg-white text-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-secondary text-[11px] font-extrabold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-3"
            >
              <BookOpen size={14} className="text-primary" />
              {t.eyebrow}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-secondary"
            >
              {t.title}
            </motion.h2>
          </div>

          {/* Action Header Controls */}
          <div className="flex items-center gap-4">
            {/* Prev / Next Carousel Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-xs"
                aria-label="Previous Article"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-all shadow-xs"
                aria-label="Next Article"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <a
              href="/artikel"
              className="inline-flex items-center gap-2 font-extrabold text-sm text-secondary bg-primary/20 border border-primary/30 hover:bg-primary hover:text-secondary px-6 py-2.5 rounded-full transition-all duration-300 group shadow-sm"
            >
              {t.viewAll}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Animated Carousel Track (Pauses on Hover) */}
        <div
          className="overflow-hidden py-4 -mx-3 px-3"
          ref={emblaRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex touch-pan-y -ml-4">
            {t.articles.map((a, i) => (
              <div
                key={a.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
              >
                <motion.a
                  href="/artikel"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="bg-white border border-gray-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full"
                >
                  <div>
                    {/* Article Image Container */}
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full border backdrop-blur-md shadow-sm ${categoryColors[a.category] ?? 'bg-gray-100 text-gray-700'}`}>
                          {a.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                        {a.readTime} baca
                      </div>
                    </div>

                    {/* Article Card Body */}
                    <div className="p-6">
                      <h3 className="text-base sm:text-lg font-extrabold text-secondary leading-snug group-hover:text-primary transition-colors mb-3 line-clamp-2">
                        {a.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-secondary/60 leading-relaxed line-clamp-3 font-medium">
                        {a.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer Meta Details */}
                  <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-semibold bg-gray-50/50">
                    <span className="flex items-center gap-1.5 text-secondary/70 font-bold">
                      <User size={13} className="text-gray-400" /> {a.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {a.date}
                    </span>
                  </div>
                </motion.a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
