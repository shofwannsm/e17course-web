import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { ArrowRight, Clock, User, Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const T = {
  id: {
    title: 'Artikel',
    searchPlaceholder: 'Cari artikel...',
    empty: 'Tidak ada artikel yang cocok dengan pencarian Anda.',
    viewAll: 'Lihat semua',
    categories: ['Semua', 'Web Development', 'Digital Marketing', 'Career Development', 'Software Dev', 'Sertifikasi'],
    articles: [
      {
        id: 1,
        category: 'Web Development',
        title: '8 Rekomendasi Mesin Pencari Bebas Akses dan Legal, Situs Se...',
        excerpt: 'Cari mesin pencari bebas akses selain situs Yandex? Yuk simak situs selain Yandex bebas akses atau ...',
        author: 'E17 Editorial',
        date: '14 June 2024',
        readTime: '5 menit',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
      },
      {
        id: 2,
        category: 'Digital Marketing',
        title: '5+ Contoh Digital Marketing yang Sukses di Indonesia',
        excerpt: 'Contoh digital marketing adalah periklanan online, email marketing, social media marketing, SEO, da...',
        author: 'Raniah Fatimah',
        date: '21 June 2023',
        readTime: '4 menit',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
      },
      {
        id: 3,
        category: 'Career Development',
        title: '130+ Contoh Judul Karya Ilmiah di Berbagai Bidang, Simak!',
        excerpt: 'Bingung mencari referensi tentang judul karya ilmiah untuk tugas kuliah? Yuk simak pembahasannya pa...',
        author: 'Muthiatur Rohmah',
        date: '05 May 2024',
        readTime: '6 menit',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
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
        id: 6,
        category: 'Career Development',
        title: '7 Skill Soft Wajib Dimiliki IT Professional di 2026',
        excerpt: 'Kemampuan teknis memang penting, tapi soft skill yang kuatlah yang membedakan IT professional biasa dari yang unggul.',
        author: 'Andi Pratama',
        date: '12 July 2024',
        readTime: '4 menit',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      },
    ],
  },
  en: {
    title: 'Articles',
    searchPlaceholder: 'Search articles...',
    empty: 'No articles match your search.',
    viewAll: 'View all',
    categories: ['All', 'Web Development', 'Digital Marketing', 'Career Development', 'Software Dev', 'Certification'],
    articles: [
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
        excerpt: 'Examples of digital marketing include online advertising, email marketing, social media marketing, SEO, and more...',
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
      {
        id: 4,
        category: 'Software Dev',
        title: 'React.js vs Next.js: Which Should You Learn First?',
        excerpt: 'Many beginners are confused whether to start with React or Next.js. This article discusses the differences...',
        author: 'Budi Santoso',
        date: '08 July 2024',
        readTime: '6 min',
        image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80',
      },
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
        id: 6,
        category: 'Career Development',
        title: '7 Essential Soft Skills for IT Professionals in 2026',
        excerpt: 'Technical skills are important, but strong soft skills set extraordinary IT professionals apart.',
        author: 'Andi Pratama',
        date: '12 July 2024',
        readTime: '4 min',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
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

function Chip({ cat }: { cat: string }) {
  return (
    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border inline-flex items-center gap-1 ${categoryColors[cat] ?? 'bg-gray-100 text-gray-600 border-gray-200'}`}>
      <span>⧉</span> {cat}
    </span>
  );
}

export default function Artikel() {
  const { lang } = useLanguage();
  const t = T[lang];

  const [activeCat, setActiveCat] = useState(t.categories[0]);
  const [query, setQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(6);

  const filtered = t.articles.filter(a => {
    const matchCat = activeCat === t.categories[0] || a.category === activeCat;
    const matchQ = !query || a.title.toLowerCase().includes(query.toLowerCase()) || a.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  const displayedArticles = filtered.slice(0, displayCount);

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans text-foreground">
      <Navbar />

      <main className="pt-[80px] pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8">
          
          {/* Direct Title Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">
              {t.title}
            </h1>

            {/* Search Input */}
            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-4 py-2 text-xs sm:text-sm border border-gray-200 rounded-full bg-white text-secondary focus:outline-none focus:border-primary transition-all placeholder:text-gray-400 shadow-sm"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
            {t.categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all border ${
                  activeCat === cat
                    ? 'bg-secondary text-white border-secondary shadow-sm'
                    : 'bg-white text-secondary/70 border-gray-200 hover:border-gray-400 hover:text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          {displayedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedArticles.map((a, i) => (
                <motion.article
                  key={a.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Card Image */}
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <div className="mb-3">
                        <Chip cat={a.category} />
                      </div>

                      <h2 className="text-base sm:text-lg font-extrabold text-secondary leading-snug group-hover:text-primary transition-colors mb-3 line-clamp-2">
                        {a.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-secondary/60 leading-relaxed line-clamp-3">
                        {a.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-semibold bg-gray-50/50">
                    <span className="flex items-center gap-1.5 text-secondary/70 font-bold">
                      <User size={13} className="text-gray-400" /> {a.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {a.date}
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <p className="text-sm font-medium text-gray-500">{t.empty}</p>
            </div>
          )}

          {/* 'Lihat semua' Button at bottom */}
          {filtered.length > displayCount && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setDisplayCount(prev => prev + 6)}
                className="px-8 py-3 rounded-xl border-2 border-secondary bg-white text-secondary font-extrabold text-xs sm:text-sm hover:bg-secondary hover:text-white transition-all shadow-sm hover:shadow-md flex items-center gap-2 group"
              >
                {t.viewAll} <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
