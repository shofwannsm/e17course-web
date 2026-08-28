import { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { ArrowLeft, Clock, User, Calendar, BookOpen, ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { articleContentsMap } from '@/data/articleContents';
import { SEO } from '@/components/SEO';

const categoryColors: Record<string, string> = {
  'Web Development': 'bg-cyan-50 text-cyan-700 border-cyan-200/60',
  'Digital Marketing': 'bg-pink-50 text-pink-700 border-pink-200/60',
  'Career Development': 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
  'Software Dev': 'bg-blue-50 text-blue-700 border-blue-200/60',
  Sertifikasi: 'bg-amber-50 text-amber-700 border-amber-200/60',
  Certification: 'bg-amber-50 text-amber-700 border-amber-200/60',
};

export default function ArtikelDetail() {
  const { lang } = useLanguage();
  const [, params] = useRoute('/artikel/:id');
  const articleId = params ? parseInt(params.id, 10) : null;
  const article = articleId ? articleContentsMap[articleId] : null;

  // Scroll to top on page mount or param change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [articleId]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
        <Navbar />
        <main className="pt-[120px] pb-20 text-center">
          <h2 className="text-2xl font-black text-secondary mb-4">
            {lang === 'en' ? 'Article Not Found' : 'Artikel Tidak Ditemukan'}
          </h2>
          <Link href="/artikel" className="text-primary font-bold hover:underline">
            {lang === 'en' ? 'Back to Articles' : 'Kembali ke Artikel'}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Get other articles for recommendation sidebar (limit to 3)
  const otherArticles = Object.values(articleContentsMap).filter(
    (a) => a.id !== article.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans text-foreground">
      <SEO 
        title={`${article.title} | E17Course`} 
        description={article.content[0].replace(/<[^>]*>?/gm, '').substring(0, 150) + '...'}
        type="article"
      />
      <Navbar />

      <main className="pt-[80px] pb-20">
        {/* Banner header container */}
        <div className="bg-white border-b border-gray-100 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            
            {/* Back Button Container */}
            <div className="mb-5 sm:mb-6">
              <Link href="/artikel" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-500 hover:text-primary transition-colors group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                {lang === 'en' ? 'Back to Articles' : 'Kembali ke Artikel'}
              </Link>
            </div>

            {/* Category Container */}
            <div className="mb-3.5">
              <span className={`text-[10px] sm:text-[11px] font-black px-3.5 py-1.5 rounded-full border inline-flex items-center gap-1 uppercase tracking-wider ${categoryColors[article.category] ?? 'bg-gray-100 text-gray-700 border-gray-200'}`}>
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary leading-tight max-w-4xl">
              {article.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 font-semibold mt-4">
              <span className="flex items-center gap-1.5 text-secondary/70">
                <User size={14} className="text-gray-500" /> {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {article.readTime}
              </span>
            </div>

          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8 sm:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
            
            {/* Main Article Content (Col-8) */}
            <div className="lg:col-span-8 bg-white p-5 sm:p-8 rounded-3xl border border-gray-100 shadow-xs">
              {/* Cover Image */}
              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 mb-8 shadow-sm">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Body Text */}
              <div className="space-y-5 text-secondary/85 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                {article.content.map((paragraph, index) => (
                  <p 
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar (Col-4) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Other Articles Card List */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs">
                <h3 className="text-base sm:text-lg font-black text-secondary mb-5 flex items-center gap-2">
                  <BookOpen size={18} className="text-primary" />
                  {lang === 'en' ? 'Recommended Articles' : 'Artikel Rekomendasi'}
                </h3>

                <div className="space-y-5">
                  {otherArticles.map((oth) => (
                    <Link
                      key={oth.id}
                      href={`/artikel/${oth.id}`}
                      className="flex gap-4 group cursor-pointer border-b border-gray-100/70 pb-4 last:border-0 last:pb-0"
                    >
                      {/* Small Thumbnail */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0 shadow-xs">
                        <img
                          src={oth.image}
                          alt={oth.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex flex-col justify-between py-0.5">
                        <div>
                          <span className="text-[9px] font-black text-primary uppercase block mb-1">
                            {oth.category}
                          </span>
                          <h4 className="text-xs sm:text-sm font-extrabold text-secondary line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                            {oth.title}
                          </h4>
                        </div>
                        <span className="text-[10px] text-gray-500 font-semibold block mt-1">
                          {oth.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Promo Banner E17 Course */}
              <div className="bg-gradient-to-br from-secondary via-secondary/95 to-[#15233c] text-white p-6 sm:p-7 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden group">
                {/* Decorative mesh/radial gradients */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                
                {/* Decorative floating icon */}
                <Sparkles className="absolute -right-2 -bottom-2 w-28 h-28 text-white/[0.04] pointer-events-none transform -rotate-12 group-hover:scale-105 transition-transform duration-500" />
                
                <h3 className="text-lg font-black text-primary leading-tight mb-2 tracking-tight">
                  {lang === 'en' ? 'Ready to Start Your Career?' : 'Siap Memulai Karier IT-mu?'}
                </h3>
                <p className="text-xs text-white/85 leading-relaxed mb-6 font-medium">
                  {lang === 'en' 
                    ? 'Join E17 Course Bootcamp and learn directly from industrial experts.'
                    : 'Gabung Bootcamp E17 Course dan belajar langsung bersama instruktur ahli industri.'}
                </p>
                <Link
                  href="/program"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-secondary text-xs font-black px-6 py-3 rounded-full hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md w-full sm:w-auto"
                >
                  {lang === 'en' ? 'View Bootcamp' : 'Lihat Program Bootcamp'}
                  <ChevronRight size={14} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
