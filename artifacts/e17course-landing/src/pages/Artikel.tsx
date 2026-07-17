import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { ArrowRight, Clock, User, Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const T = {
  id: {
    eyebrow:'Blog & Artikel', h1:'Artikel', desc:'Baca artikel seputar tren teknologi, tips karier, dan sertifikasi agar kamu selalu selangkah di depan.',
    featuredBadge:'Featured', readBtn:'Baca Artikel', latestTitle:'Artikel', latestAccent:'Terbaru',
    searchPlaceholder:'Cari artikel...', empty:'Tidak ada artikel yang cocok.', viewAll:'Lihat Semua Artikel',
    categories:['Semua','Tips Karier','Tren Teknologi','Sertifikasi','Software Dev','Digital Marketing','Corporate'],
    articles: [
      { id:1, category:'Tips Karier',       title:'Cara Memulai Karier di Bidang IT Tanpa Latar Belakang Teknis',        excerpt:'Kamu tidak perlu kuliah di jurusan IT untuk bisa bekerja di industri teknologi. Berikut langkah-langkah praktis yang bisa kamu ikuti untuk memulai karier IT dari nol.',                                       author:'Andi Pratama',    date:'14 Jul 2025', readTime:'5 menit', image:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80', featured:true },
      { id:2, category:'Tren Teknologi',    title:'AI dan Machine Learning: Tren yang Wajib Dikuasai Developer 2025',    excerpt:'Artificial Intelligence bukan lagi teknologi masa depan — ia sudah ada di mana-mana. Ini skill AI yang paling dibutuhkan perusahaan tahun ini.',                                                               author:'Sari Dewi',       date:'12 Jul 2025', readTime:'7 menit', image:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80', featured:false },
      { id:3, category:'Sertifikasi',       title:'Panduan Lengkap Sertifikasi BNSP: Apa, Mengapa, dan Bagaimana',       excerpt:'Sertifikasi BNSP adalah bukti kompetensi yang diakui secara nasional. Pelajari skema, persyaratan, dan tips lolos ujian sertifikasi BNSP dalam panduan lengkap ini.',                                           author:'Reza Firmansyah', date:'10 Jul 2025', readTime:'8 menit', image:'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80', featured:false },
      { id:4, category:'Software Dev',      title:'React.js vs Next.js: Mana yang Harus Kamu Pelajari Duluan?',          excerpt:'Banyak pemula bingung harus mulai dari React atau Next.js. Artikel ini membahas perbedaan keduanya dan rekomendasi berdasarkan tujuan kariermu.',                                                             author:'Budi Santoso',    date:'8 Jul 2025',  readTime:'6 menit', image:'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80', featured:false },
      { id:5, category:'Digital Marketing', title:'KOL Marketing: Pengertian, Strategi, dan Cara Memilih yang Tepat',    excerpt:'Key Opinion Leader (KOL) menjadi strategi marketing yang semakin populer. Pelajari cara memanfaatkan KOL untuk pertumbuhan brand digitalmu.',                                                                   author:'Nina Kartika',    date:'5 Jul 2025',  readTime:'5 menit', image:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80', featured:false },
      { id:6, category:'Corporate',         title:'Mengapa Perusahaan Perlu Investasi di Corporate Training IT?',         excerpt:'Di era transformasi digital, meningkatkan kompetensi tim IT bukan pilihan — tapi keharusan. Ini data dan alasan mengapa corporate training IT penting untuk bisnis.',                                          author:'Dian Permata',    date:'3 Jul 2025',  readTime:'6 menit', image:'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80', featured:false },
      { id:7, category:'Tips Karier',       title:'7 Skill Soft yang Wajib Dimiliki IT Professional di 2025',            excerpt:'Kemampuan teknis memang penting, tapi soft skill yang kuatlah yang membedakan IT professional biasa dari yang luar biasa di mata HRD dan tim.',                                                             author:'Andi Pratama',    date:'1 Jul 2025',  readTime:'4 menit', image:'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', featured:false },
      { id:8, category:'Tren Teknologi',    title:'Cloud Computing 2025: AWS, Azure, atau GCP — Mana yang Tepat?',       excerpt:'Tiga raksasa cloud computing menawarkan layanan berbeda. Panduan ini membantu kamu memilih platform cloud yang paling sesuai dengan kebutuhan dan jalur kariermu.',                                           author:'Reza Firmansyah', date:'28 Jun 2025', readTime:'9 menit', image:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', featured:false },
      { id:9, category:'Sertifikasi',       title:'Berapa Lama Waktu yang Dibutuhkan untuk Lulus Sertifikasi BNSP?',     excerpt:'Banyak yang bertanya soal timeline sertifikasi BNSP. Artikel ini memberikan gambaran realistis persiapan, jadwal ujian, hingga waktu keluarnya sertifikat.',                                                author:'Sari Dewi',       date:'25 Jun 2025', readTime:'5 menit', image:'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80', featured:false },
    ],
  },
  en: {
    eyebrow:'Blog & Articles', h1:'Articles', desc:'Read articles about technology trends, career tips, and certifications so you\'re always one step ahead.',
    featuredBadge:'Featured', readBtn:'Read Article', latestTitle:'Latest', latestAccent:'Articles',
    searchPlaceholder:'Search articles...', empty:'No articles found.', viewAll:'View All Articles',
    categories:['All','Career Tips','Tech Trends','Certification','Software Dev','Digital Marketing','Corporate'],
    articles: [
      { id:1, category:'Career Tips',       title:'How to Start an IT Career Without a Technical Background',            excerpt:'You don\'t need an IT degree to work in the tech industry. Here are practical steps you can follow to start an IT career from scratch.',                                                                         author:'Andi Pratama',    date:'14 Jul 2025', readTime:'5 min', image:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80', featured:true },
      { id:2, category:'Tech Trends',       title:'AI and Machine Learning: Trends Every Developer Must Master in 2025', excerpt:'Artificial Intelligence is no longer a future technology — it\'s everywhere. These are the AI skills companies need most this year.',                                                                          author:'Sari Dewi',       date:'12 Jul 2025', readTime:'7 min', image:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80', featured:false },
      { id:3, category:'Certification',     title:'Complete Guide to BNSP Certification: What, Why, and How',            excerpt:'BNSP certification is proof of competence recognised nationally. Learn the schemes, requirements, and tips for passing the BNSP certification exam.',                                                          author:'Reza Firmansyah', date:'10 Jul 2025', readTime:'8 min', image:'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80', featured:false },
      { id:4, category:'Software Dev',      title:'React.js vs Next.js: Which Should You Learn First?',                  excerpt:'Many beginners are confused about whether to start with React or Next.js. This article discusses the differences and recommendations based on your career goals.',                                              author:'Budi Santoso',    date:'8 Jul 2025',  readTime:'6 min', image:'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80', featured:false },
      { id:5, category:'Digital Marketing', title:'KOL Marketing: Definition, Strategy, and How to Choose the Right One',excerpt:'Key Opinion Leader (KOL) is an increasingly popular marketing strategy. Learn how to leverage KOLs for your digital brand growth.',                                                                           author:'Nina Kartika',    date:'5 Jul 2025',  readTime:'5 min', image:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80', featured:false },
      { id:6, category:'Corporate',         title:'Why Companies Need to Invest in IT Corporate Training',                excerpt:'In the digital transformation era, improving IT team competency is not an option — it\'s a necessity. Here\'s data and reasons why IT corporate training is important for business.',                          author:'Dian Permata',    date:'3 Jul 2025',  readTime:'6 min', image:'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80', featured:false },
      { id:7, category:'Career Tips',       title:'7 Soft Skills Every IT Professional Must Have in 2025',               excerpt:'Technical skills are important, but strong soft skills are what differentiate an ordinary IT professional from an extraordinary one in the eyes of HR.',                                                       author:'Andi Pratama',    date:'1 Jul 2025',  readTime:'4 min', image:'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', featured:false },
      { id:8, category:'Tech Trends',       title:'Cloud Computing 2025: AWS, Azure, or GCP — Which Is Right for You?', excerpt:'Three cloud computing giants offer different services. This guide helps you choose the cloud platform that best suits your needs and career path.',                                                          author:'Reza Firmansyah', date:'28 Jun 2025', readTime:'9 min', image:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', featured:false },
      { id:9, category:'Certification',     title:'How Long Does It Take to Pass BNSP Certification?',                   excerpt:'Many people ask about the BNSP certification timeline. This article gives a realistic overview of preparation, exam schedules, and when the certificate is issued.',                                          author:'Sari Dewi',       date:'25 Jun 2025', readTime:'5 min', image:'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80', featured:false },
    ],
  },
};

const categoryColors: Record<string, string> = {
  'Tips Karier':'bg-primary/10 text-primary','Career Tips':'bg-primary/10 text-primary',
  'Tren Teknologi':'bg-blue-50 text-blue-700','Tech Trends':'bg-blue-50 text-blue-700',
  'Sertifikasi':'bg-accent/10 text-accent','Certification':'bg-accent/10 text-accent',
  'Software Dev':'bg-emerald-50 text-emerald-700',
  'Digital Marketing':'bg-pink-50 text-pink-700',
  'Corporate':'bg-secondary/10 text-secondary',
};

function Chip({ cat }: { cat: string }) {
  return <span className={`text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full ${categoryColors[cat] ?? 'bg-gray-100 text-gray-600'}`}>{cat}</span>;
}

export default function Artikel() {
  const { lang } = useLanguage();
  const t = T[lang];
  const [activeCat, setActiveCat] = useState(t.categories[0]);
  const [query, setQuery] = useState('');

  const featured = t.articles[0];
  const rest = t.articles.slice(1);
  const filtered = rest.filter(a => {
    const matchCat = activeCat === t.categories[0] || a.category === activeCat;
    const matchQ = !query || a.title.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <Navbar />
      <main className="pt-[72px]">
        <div className="bg-gray-50 border-b border-gray-100 py-14">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}>
              <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase mb-3 block">{t.eyebrow}</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight mb-3">{t.h1}</h1>
              <p className="text-secondary/55 text-base max-w-xl leading-relaxed">{t.desc}</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
          {/* Featured */}
          <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
            className="group relative rounded-3xl overflow-hidden bg-secondary mb-16 cursor-pointer">
            <div className="absolute inset-0">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
            </div>
            <div className="relative px-10 py-14 md:py-20 max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-primary text-secondary text-[10px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-full">{t.featuredBadge}</span>
                <Chip cat={featured.category} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">{featured.title}</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-lg">{featured.excerpt}</p>
              <div className="flex items-center gap-6 text-white/50 text-xs mb-8">
                <span className="flex items-center gap-1.5"><User size={12}/>{featured.author}</span>
                <span className="flex items-center gap-1.5"><Clock size={12}/>{featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-secondary font-bold text-sm hover:bg-primary/90 transition-all group/btn">
                {t.readBtn}<ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Filter row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-extrabold text-secondary">{t.latestTitle} <span className="text-primary">{t.latestAccent}</span></h2>
            <div className="relative">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary/30" />
              <input type="text" placeholder={t.searchPlaceholder} value={query} onChange={e => setQuery(e.target.value)}
                className="w-64 pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 text-secondary placeholder:text-secondary/30" />
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
            {t.categories.map(cat => (
              <button key={cat} onClick={() => setActiveCat(cat)} className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCat===cat ? 'bg-primary text-secondary shadow-sm' : 'bg-gray-100 text-secondary/60 hover:bg-gray-200 hover:text-secondary'}`}>{cat}</button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-secondary/40 text-sm">{t.empty}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((a, i) => (
                <motion.article key={a.id} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.06 }}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <Chip cat={a.category} />
                    <h3 className="text-base font-extrabold text-secondary leading-snug group-hover:text-primary transition-colors line-clamp-2">{a.title}</h3>
                    <p className="text-sm text-secondary/55 leading-relaxed line-clamp-3 flex-1">{a.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-secondary/40">
                      <span className="flex items-center gap-1.5"><User size={11}/>{a.author}</span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><Clock size={11}/>{a.readTime}</span>
                        <span>{a.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="flex justify-center mt-12">
            <button className="px-8 py-4 rounded-full border-2 border-secondary text-secondary font-bold text-base hover:bg-secondary hover:text-white transition-all flex items-center gap-2 group">
              {t.viewAll}<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
