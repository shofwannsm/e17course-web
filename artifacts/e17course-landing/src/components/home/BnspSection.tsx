import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Search } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from '@/context/LanguageContext';
import { bnspDetailsMap, type BnspSchemeDetail } from '@/data/bnspDetails';
import { BnspDetailModal } from './BnspDetailModal';

const categories = {
  id: [
    { label: 'Semua', count: 26 },
    { label: 'Data Science & Advanced Analytics', count: 3 },
    { label: 'Software Development & Programming', count: 9 },
    { label: 'Multimedia, Design & Content Creation', count: 6 },
    { label: 'IT Infrastructure & Networking', count: 4 },
    { label: 'Office Productivity & Digital Literacy', count: 3 },
    { label: 'Digital Business & Marketing', count: 1 },
  ],
  en: [
    { label: 'All', count: 26 },
    { label: 'Data Science & Advanced Analytics', count: 3 },
    { label: 'Software Development & Programming', count: 9 },
    { label: 'Multimedia, Design & Content Creation', count: 6 },
    { label: 'IT Infrastructure & Networking', count: 4 },
    { label: 'Office Productivity & Digital Literacy', count: 3 },
    { label: 'Digital Business & Marketing', count: 1 },
  ],
};

const schemes = {
  id: [
    // Category 1: Data Science & Advanced Analytics
    { category: 'Data Science & Advanced Analytics', tag: 'DATA SCIENCE', title: 'Artificial Intelligence Management', desc: 'Dapatkan pengakuan resmi BNSP atas kompetensimu mengelola proyek AI, sesuai SKKNI Bidang Artificial Intelligence.', slug: 'ai-management' },
    { category: 'Data Science & Advanced Analytics', tag: 'DATA SCIENCE', title: 'Data Analyst', desc: 'Buktikan kompetensimu mengolah dan mengamankan data secara profesional dengan sertifikasi resmi BNSP.', slug: 'data-analyst' },
    { category: 'Data Science & Advanced Analytics', tag: 'DATA SCIENCE', title: 'Data Scientist', desc: 'Validasi kompetensimu membangun dan mengevaluasi model data science, diakui secara nasional oleh BNSP.', slug: 'data-scientist' },

    // Category 2: Software Development & Programming
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'Backend Programmer', desc: 'Sertifikasi resmi BNSP untuk kompetensimu merancang dan membangun layanan backend yang andal.', slug: 'backend-programmer' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'Frontend Programmer', desc: 'Dapatkan pengakuan resmi atas kompetensi membangun antarmuka web modern, sesuai standar BNSP.', slug: 'frontend-programmer' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'Junior Web Developer', desc: 'Buktikan kompetensi dasar pengembangan web-mu dengan sertifikasi resmi yang diakui industri.', slug: 'junior-web-developer' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'Junior Web Programmer', desc: 'Validasi kompetensi dasar pemrograman webmu melalui sertifikasi kompetensi BNSP.', slug: 'junior-web-programmer' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'Pemrogram Junior', desc: 'Sertifikasi resmi BNSP untuk kompetensi pemrograman tingkat dasar yang kamu kuasai.', slug: 'pemrogram-junior' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'Web Developer Junior', desc: 'Buktikan kompetensi membangun halaman web dengan kode terstruktur, sesuai standar BNSP.', slug: 'web-developer-junior' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'Database Programmer', desc: 'Dapatkan pengakuan resmi atas kompetensimu merancang dan mengelola basis data aplikasi.', slug: 'database-programmer' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'IT Quality Assurance', desc: 'Validasi kompetensi pengujian software-mu, dari unit testing hingga audit TI, dengan sertifikasi BNSP.', slug: 'it-quality-assurance' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'UI/UX Designer', desc: 'Buktikan kompetensi merancang pengalaman pengguna dengan pengakuan resmi dari BNSP.', slug: 'ui-ux-designer' },

    // Category 3: Multimedia, Design & Content Creation
    { category: 'Multimedia, Design & Content Creation', tag: 'MULTIMEDIA & DESIGN', title: 'Editor Video', desc: 'Sertifikasi resmi BNSP atas kompetensi editing video profesionalmu, diakui di seluruh industri.', slug: 'editor-video' },
    { category: 'Multimedia, Design & Content Creation', tag: 'MULTIMEDIA & DESIGN', title: 'Desainer Grafis Muda', desc: 'Dapatkan pengakuan resmi atas kompetensi dasar desain grafis yang kamu miliki.', slug: 'desainer-grafis-muda' },
    { category: 'Multimedia, Design & Content Creation', tag: 'MULTIMEDIA & DESIGN', title: 'Content Creator', desc: 'Validasi kompetensimu memproduksi konten multimedia secara profesional dengan sertifikasi BNSP.', slug: 'content-creator' },
    { category: 'Multimedia, Design & Content Creation', tag: 'MULTIMEDIA & DESIGN', title: 'Desainer Konten Visual Junior', desc: 'Buktikan kompetensi merancang konsep hingga materi visual siap produksi, diakui BNSP.', slug: 'desainer-konten-visual-junior' },
    { category: 'Multimedia, Design & Content Creation', tag: 'MULTIMEDIA & DESIGN', title: 'Desainer Multimedia Muda', desc: 'Sertifikasi resmi atas kompetensimu menggabungkan teks, gambar, dan audio jadi produk multimedia.', slug: 'desainer-multimedia-muda' },
    { category: 'Multimedia, Design & Content Creation', tag: 'MULTIMEDIA & DESIGN', title: 'Animator Muda', desc: 'Dapatkan pengakuan resmi BNSP atas kompetensi animasi digital 2D yang kamu kuasai.', slug: 'animator-muda' },

    // Category 4: IT Infrastructure & Networking
    { category: 'IT Infrastructure & Networking', tag: 'IT INFRASTRUCTURE', title: 'Teknisi Pusat Data Muda', desc: 'Validasi kompetensimu mengelola operasional harian pusat data dengan sertifikasi resmi BNSP.', slug: 'teknisi-pusat-data-muda' },
    { category: 'IT Infrastructure & Networking', tag: 'IT INFRASTRUCTURE', title: 'Network Administrator Muda', desc: 'Buktikan kompetensi merancang dan mengonfigurasi jaringan komputer, diakui secara nasional.', slug: 'network-administrator-muda' },
    { category: 'IT Infrastructure & Networking', tag: 'IT INFRASTRUCTURE', title: 'Teknisi Perbaikan Komputer', desc: 'Sertifikasi resmi BNSP atas kompetensi perbaikan hardware komputer yang kamu miliki.', slug: 'teknisi-perbaikan-komputer' },
    { category: 'IT Infrastructure & Networking', tag: 'IT INFRASTRUCTURE', title: 'Data Center Manager', desc: 'Dapatkan pengakuan resmi atas kompetensi manajerial mengelola operasional pusat data.', slug: 'data-center-manager' },

    // Category 5: Office Productivity & Digital Literacy
    { category: 'Office Productivity & Digital Literacy', tag: 'OFFICE PRODUCTIVITY', title: 'Data Management Staff', desc: 'Validasi kompetensi dasar pengoperasian komputer dan aplikasi perkantoranmu dengan sertifikasi BNSP.', slug: 'data-management-staff' },
    { category: 'Office Productivity & Digital Literacy', tag: 'OFFICE PRODUCTIVITY', title: 'Junior Office Operator', desc: 'Buktikan kompetensi mengoperasikan aplikasi perkantoran, diakui secara resmi oleh BNSP.', slug: 'junior-office-operator' },
    { category: 'Office Productivity & Digital Literacy', tag: 'OFFICE PRODUCTIVITY', title: 'Operator Komputer Muda', desc: 'Sertifikasi resmi atas kompetensi dasar pengoperasian sistem dan aplikasi perkantoranmu.', slug: 'operator-komputer-muda' },

    // Category 6: Digital Business & Marketing
    { category: 'Digital Business & Marketing', tag: 'DIGITAL BUSINESS', title: 'Digital Marketing', desc: 'Dapatkan pengakuan resmi BNSP atas kompetensimu menyusun strategi kampanye dan pemasaran digital.', slug: 'digital-marketing' },
  ],
  en: [
    // Category 1: Data Science & Advanced Analytics
    { category: 'Data Science & Advanced Analytics', tag: 'DATA SCIENCE', title: 'Artificial Intelligence Management', desc: 'Get official BNSP recognition for your competence in managing AI projects, per SKKNI in Artificial Intelligence.', slug: 'ai-management' },
    { category: 'Data Science & Advanced Analytics', tag: 'DATA SCIENCE', title: 'Data Analyst', desc: 'Prove your competence in processing and securing data professionally with official BNSP certification.', slug: 'data-analyst' },
    { category: 'Data Science & Advanced Analytics', tag: 'DATA SCIENCE', title: 'Data Scientist', desc: 'Validate your competence in building and evaluating data science models, nationally recognised by BNSP.', slug: 'data-scientist' },

    // Category 2: Software Development & Programming
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'Backend Programmer', desc: 'Official BNSP certification for your competence in designing and building reliable backend services.', slug: 'backend-programmer' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'Frontend Programmer', desc: 'Get official recognition for your competence in building modern web interfaces, per BNSP standards.', slug: 'frontend-programmer' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'Junior Web Developer', desc: 'Prove your basic web development competence with industry-recognised official certification.', slug: 'junior-web-developer' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'Junior Web Programmer', desc: 'Validate your basic web programming competence through BNSP competency certification.', slug: 'junior-web-programmer' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'Pemrogram Junior', desc: 'Official BNSP certification for entry-level programming competencies you master.', slug: 'pemrogram-junior' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'Web Developer Junior', desc: 'Prove your competence in building web pages with structured code, per BNSP standards.', slug: 'web-developer-junior' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'Database Programmer', desc: 'Get official recognition for your competence in designing and managing application databases.', slug: 'database-programmer' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'IT Quality Assurance', desc: 'Validate your software testing competence, from unit testing to IT audit, with BNSP certification.', slug: 'it-quality-assurance' },
    { category: 'Software Development & Programming', tag: 'SOFTWARE DEVELOPMENT', title: 'UI/UX Designer', desc: 'Prove your competence in designing user experiences with official recognition from BNSP.', slug: 'ui-ux-designer' },

    // Category 3: Multimedia, Design & Content Creation
    { category: 'Multimedia, Design & Content Creation', tag: 'MULTIMEDIA & DESIGN', title: 'Video Editor', desc: 'Official BNSP certification for your professional video editing competence, recognised industry-wide.', slug: 'editor-video' },
    { category: 'Multimedia, Design & Content Creation', tag: 'MULTIMEDIA & DESIGN', title: 'Junior Graphic Designer', desc: 'Get official recognition for the basic graphic design competencies you possess.', slug: 'desainer-grafis-muda' },
    { category: 'Multimedia, Design & Content Creation', tag: 'MULTIMEDIA & DESIGN', title: 'Content Creator', desc: 'Validate your competence in producing multimedia content professionally with BNSP certification.', slug: 'content-creator' },
    { category: 'Multimedia, Design & Content Creation', tag: 'MULTIMEDIA & DESIGN', title: 'Junior Visual Content Designer', desc: 'Prove your competence from concept design to production-ready visual materials, recognised by BNSP.', slug: 'desainer-konten-visual-junior' },
    { category: 'Multimedia, Design & Content Creation', tag: 'MULTIMEDIA & DESIGN', title: 'Junior Multimedia Designer', desc: 'Official certification for combining text, images, and audio into multimedia products.', slug: 'desainer-multimedia-muda' },
    { category: 'Multimedia, Design & Content Creation', tag: 'MULTIMEDIA & DESIGN', title: 'Junior Animator', desc: 'Get official BNSP recognition for the 2D digital animation competencies you master.', slug: 'animator-muda' },

    // Category 4: IT Infrastructure & Networking
    { category: 'IT Infrastructure & Networking', tag: 'IT INFRASTRUCTURE', title: 'Data Center Technician', desc: 'Validate your competence in managing daily data center operations with official BNSP certification.', slug: 'teknisi-pusat-data-muda' },
    { category: 'IT Infrastructure & Networking', tag: 'IT INFRASTRUCTURE', title: 'Junior Network Administrator', desc: 'Prove your competence in designing and configuring computer networks, nationally recognised.', slug: 'network-administrator-muda' },
    { category: 'IT Infrastructure & Networking', tag: 'IT INFRASTRUCTURE', title: 'Computer Repair Technician', desc: 'Official BNSP certification for computer hardware repair competencies you possess.', slug: 'teknisi-perbaikan-komputer' },
    { category: 'IT Infrastructure & Networking', tag: 'IT INFRASTRUCTURE', title: 'Data Center Manager', desc: 'Get official recognition for managerial competence in managing data center operations.', slug: 'data-center-manager' },

    // Category 5: Office Productivity & Digital Literacy
    { category: 'Office Productivity & Digital Literacy', tag: 'OFFICE PRODUCTIVITY', title: 'Data Management Staff', desc: 'Validate your basic computer and office application operation competencies with BNSP certification.', slug: 'data-management-staff' },
    { category: 'Office Productivity & Digital Literacy', tag: 'OFFICE PRODUCTIVITY', title: 'Junior Office Operator', desc: 'Prove your competence in operating office applications, officially recognised by BNSP.', slug: 'junior-office-operator' },
    { category: 'Office Productivity & Digital Literacy', tag: 'OFFICE PRODUCTIVITY', title: 'Junior Computer Operator', desc: 'Official certification for basic system and office application operation competencies.', slug: 'operator-komputer-muda' },

    // Category 6: Digital Business & Marketing
    { category: 'Digital Business & Marketing', tag: 'DIGITAL BUSINESS', title: 'Digital Marketing', desc: 'Get official BNSP recognition for your competence in formulating digital marketing and campaign strategies.', slug: 'digital-marketing' },
  ],
};

const T = {
  id: {
    badge: 'Sertifikasi BNSP',
    h2a: 'TERLATIH, KOMPETEN,',
    h2b: 'UNGGUL!',
    descQuote: 'Untuk menang di dunia kerja, kompetensi saja tidak cukup.',
    descQuoteEm: 'You need a stamp of excellence!',
    desc: 'E17 Course siap mendampingi proses Sertifikasi BNSP, mulai dari persiapan dokumen, portofolio, hingga uji kompetensi.',
    searchPlaceholder: 'Cari skema... (misal: Data Analyst, Video Editor, Web Developer)',
    badges: ['Diakui Nasional', 'Mengacu SKKNI Kemnaker RI', 'Asesor Berlisensi LSP'],
    sub: 'Pilihan Skema Sertifikasi',
    link: 'Lihat detail & unit kompetensi',
    cta: 'Konsultasi & Daftar Sertifikasi',
    viewAllPage: 'Lihat Semua 26 Skema Sertifikasi Lengkap di Halaman Program',
    noResults: 'Tidak ada skema yang cocok dengan pencarian Anda.',
  },
  en: {
    badge: 'BNSP Certification',
    h2a: 'TRAINED, COMPETENT,',
    h2b: 'EXCELLENT!',
    descQuote: 'To win in the workplace, competency alone is not enough.',
    descQuoteEm: 'You need a stamp of excellence!',
    desc: 'E17 Course is ready to assist your BNSP Certification process, from document preparation, portfolio, to competency testing.',
    searchPlaceholder: 'Search scheme... (e.g., Data Analyst, Video Editor, Web Developer)',
    badges: ['Nationally Recognised', 'SKKNI Compliant', 'LSP Licensed Assessors'],
    sub: 'Choice of Certification Schemes',
    link: 'View details & unit competencies',
    cta: 'Consult & Register for Certification',
    viewAllPage: 'View All 26 Full Certification Schemes on Program Page',
    noResults: 'No certification schemes match your search.',
  },
};

interface BnspSectionProps {
  isHomePage?: boolean;
}

export function BnspSection({ isHomePage = false }: BnspSectionProps) {
  const { lang } = useLanguage();
  const t = T[lang];
  const cats = categories[lang];
  const items = schemes[lang];
  
  const [activeCat, setActiveCat] = useState(cats[0].label);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedScheme, setSelectedScheme] = useState<BnspSchemeDetail | null>(null);

  // Filter items by category
  const categoryFiltered = activeCat === cats[0].label 
    ? items 
    : items.filter(s => s.category === (cats.findIndex(c => c.label === activeCat) >= 1 ? categories.id[cats.findIndex(c => c.label === activeCat)].label : activeCat));

  // Filter items by search query
  const filtered = categoryFiltered.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // On Home Page: show top 6 featured schemes
  const displayedItems = isHomePage ? filtered.slice(0, 6) : filtered;

  const handleOpenDetail = (slug: string) => {
    const detail = bnspDetailsMap[slug];
    if (detail) {
      setSelectedScheme(detail);
    }
  };

  return (
    <section id="sertifikasi" className="py-20 bg-gray-50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="text-[18rem] font-extrabold text-secondary/[0.025] select-none leading-none">BNSP</span>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        
        {/* Section Header */}
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border border-primary/20 shadow-sm text-primary text-[11px] font-extrabold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            <ShieldCheck size={14} />{t.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.1] mb-4">
            {t.h2a}<br /><span className="text-primary">{t.h2b}</span>
          </h2>
          <p className="text-secondary/90 text-sm md:text-base font-bold leading-relaxed max-w-2xl mx-auto mb-2">
            {t.descQuote} <em className="text-accent font-extrabold not-italic">{t.descQuoteEm}</em>
          </p>
          <p className="text-secondary/70 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto mb-6">
            {t.desc}
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {t.badges.map(b => <span key={b} className="bg-primary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full">✓ {b}</span>)}
          </div>
          <h3 className="text-xl font-black text-secondary mt-6">{t.sub}</h3>
        </motion.div>

        {/* Search Bar (Shown on Full Program Page or Home Page) */}
        {!isHomePage && (
          <div className="max-w-xl mx-auto mb-8 relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-gray-400" size={18} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-gray-200 shadow-sm text-xs sm:text-sm text-secondary focus:outline-none focus:border-primary transition-all placeholder:text-gray-400"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 text-xs font-bold text-gray-400 hover:text-secondary"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {cats.map(cat => {
            const isActive = activeCat === cat.label;

            return (
              <button 
                key={cat.label} 
                onClick={() => setActiveCat(cat.label)} 
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold border transition-all flex items-center gap-2 ${
                  isActive 
                    ? 'bg-primary text-secondary border-primary shadow-sm' 
                    : 'bg-white text-secondary/60 border-gray-200 hover:border-gray-400 hover:text-secondary'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                  isActive ? 'bg-secondary/15 text-secondary' : 'bg-gray-100 text-gray-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Card Grid */}
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedItems.map((s, i) => (
              <motion.div 
                key={s.slug} 
                initial={{ opacity:0, y:16 }} 
                animate={{ opacity:1, y:0 }} 
                transition={{ delay: i * 0.03 }}
                onClick={() => handleOpenDetail(s.slug)}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:shadow-xl hover:border-primary/40 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-extrabold tracking-wider text-primary uppercase bg-primary/10 px-2.5 py-1 rounded-md">{s.tag}</span>
                  <span className="text-[11px] text-gray-400 font-bold group-hover:text-primary transition-colors">Detail & Unit Uji →</span>
                </div>
                <h3 className="text-base font-extrabold text-secondary mb-3 leading-snug group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-secondary/60 leading-relaxed flex-1 mb-5">{s.desc}</p>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleOpenDetail(s.slug); }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary transition-colors group-hover:gap-2.5"
                >
                  {t.link} <ArrowRight size={13} />
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
            <p className="text-sm text-gray-500 font-medium">{t.noResults}</p>
          </div>
        )}

        {/* On Home Page: Direct CTA to Dedicated Program Page */}
        {isHomePage && (
          <div className="flex flex-col items-center mt-10">
            <Link 
              href="/program#sertifikasi"
              className="px-8 py-4 rounded-full bg-secondary text-white font-extrabold text-xs sm:text-sm hover:bg-secondary/90 transition-all flex items-center gap-2.5 shadow-md hover:shadow-lg group"
            >
              {t.viewAllPage} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-xs text-gray-400 mt-2 font-medium">
              Menampilkan 6 skema terpopuler dari 26 skema sertifikasi BNSP resmi
            </p>
          </div>
        )}

        {/* On Program Page: WhatsApp Consultation CTA */}
        {!isHomePage && (
          <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="flex justify-center mt-12">
            <a href="https://wa.me/6281399271717" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-primary text-secondary font-bold text-base hover:bg-primary/90 transition-all flex items-center gap-2 group shadow-md hover:shadow-lg">
              {t.cta}<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        )}

      </div>

      {/* Interactive Detail Modal */}
      <BnspDetailModal 
        scheme={selectedScheme}
        isOpen={Boolean(selectedScheme)}
        onClose={() => setSelectedScheme(null)}
      />
    </section>
  );
}
