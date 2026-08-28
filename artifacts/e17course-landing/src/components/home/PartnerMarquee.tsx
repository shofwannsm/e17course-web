import { useLanguage } from '@/context/LanguageContext';
import { Award } from 'lucide-react';

const partners = [
  { name: 'PT Evolution Technology Solutions', logo: '/partners/LOGO EVOTEKS.png', sub: 'Tech Innovations', category: 'Industri', color: 'bg-amber-50 text-amber-800 border-amber-200' },
  { name: 'ATLASFIZL', logo: '/partners/ATLASFIZL.png', sub: 'Tech Solutions', category: 'Industri', color: 'bg-amber-50 text-amber-800 border-amber-200' },
  { name: 'NS Development', logo: '/partners/NS DEVELOPMENT.png', sub: 'Software House', category: 'Industri', color: 'bg-blue-50 text-blue-800 border-blue-200' },
  { name: 'FKDK Budi Luhur', logo: '/partners/FKDK BUDI LUHUR.png', sub: 'Fakultas Komunikasi & Desain', category: 'Kampus', color: 'bg-purple-50 text-purple-800 border-purple-200' },
  { name: 'LSP Telematika', logo: '/partners/LSP TELEMATIKA.png', sub: 'Lembaga Sertifikasi Profesi', category: 'LSP & BNSP', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { name: 'Jagogo.net', logo: '/partners/JAGOGO.png', sub: 'Live in Digital', category: 'Industri', color: 'bg-red-50 text-red-800 border-red-200' },
  { name: 'PublikasiKu', logo: '/partners/PUBLIKASIKU.png', sub: 'Academic Solution', category: 'Akademik', color: 'bg-orange-50 text-orange-800 border-orange-200' },
  { name: 'LSP SDM TIK', logo: '/partners/LSP SDMTIK.png', sub: 'TIK & Kreatif', category: 'LSP & BNSP', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { name: 'Intensive English Course', logo: '/partners/INTENSIVE ENGLISH COURSE.webp', sub: 'Intensive English Course', category: 'Pendidikan', color: 'bg-blue-50 text-blue-800 border-blue-200' },
  { name: 'LSP PERS INDONESIA', logo: '/partners/LSP PERS INDONESIA.jpeg', sub: 'Lembaga Sertifikasi Profesi', category: 'LSP & BNSP', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { name: 'QIA Solution', logo: '/partners/LOGO QIA SOLUTION.webp', sub: 'IT Consultant', category: 'Industri', color: 'bg-indigo-50 text-indigo-800 border-indigo-200' },
  { name: 'SMK Muhammadiyah 2 Tangerang', logo: '/partners/LOGO SMK MUHAMMIDIYAH TANGERANG.png', sub: 'Tangerang', category: 'Sekolah', color: 'bg-sky-50 text-sky-800 border-sky-200' },
  { name: 'BNSP', logo: '/partners/LOGO BNSP.png', sub: 'Badan Nasional Sertifikasi Profesi', category: 'LSP & BNSP', color: 'bg-amber-100 text-amber-900 border-amber-300 font-bold' },
  { name: 'Yayasan Budi Mulia Tangerang', logo: '/partners/YAYASAN PENDIDIKAN BUDI MULIA .png', sub: 'Tangerang', category: 'Sekolah', color: 'bg-sky-50 text-sky-800 border-sky-200' },
  { name: 'Evolusi Kreatif Solusi', logo: '/partners/LOGO EVOLUSI KREATIF SOLUSI.png', sub: 'Digital Creative', category: 'Industri', color: 'bg-teal-50 text-teal-800 border-teal-200' },
  { name: 'LSP Media Informatika', logo: '/partners/Logo lspmi.webp', sub: 'Lembaga Sertifikasi Profesi', category: 'LSP & BNSP', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { name: 'Yayasan Abdi Karya Jakarta', logo: '/partners/YAYASAN ABDI KARYA.png', sub: 'YADIKA Jakarta', category: 'Sekolah', color: 'bg-sky-50 text-sky-800 border-sky-200' },
  { name: 'SMK Negeri 10 Tangerang', logo: '/partners/SMKN 10 TANGERANG.jpg', sub: 'Tangerang', category: 'Sekolah', color: 'bg-sky-50 text-sky-800 border-sky-200' },
  { name: 'LSP TIBD', logo: '/partners/LEMBAGA SERTIFIKIASI PROFESI TEKNOLOGI INFORMATIKA BISNIS DIGITAL.jpg', sub: 'TI Bisnis Digital', category: 'LSP & BNSP', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { name: 'PT ALTEK CITRA CEMERLANG', logo: '/partners/PT ALTEK CITRA CEMERLANG.png', sub: 'Mitra Industri', category: 'Industri', color: 'bg-amber-50 text-amber-800 border-amber-200' },
];

const T = {
  id: {
    badge: 'OUR NETWORKS',
    h3: 'Jaringan Kerjasama & Mitra Resmi',
    desc: 'Bekerja sama dengan BNSP, Lembaga Sertifikasi Profesi (LSP), Perusahaan Industri, Perguruan Tinggi, dan Sekolah Menengah Kejuruan.',
  },
  en: {
    badge: 'OUR NETWORKS',
    h3: 'Official Partners & Networks',
    desc: 'Partnered with BNSP, Professional Certification Agencies (LSP), Industry Enterprises, Universities, and Vocational Schools.',
  },
};

export function PartnerMarquee() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 text-center">

        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary text-white font-extrabold text-xs tracking-wider uppercase mb-3 shadow-sm">
          <Award size={14} className="text-primary" /> {t.badge}
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-secondary mb-2">
          {t.h3}
        </h2>

        <p className="text-sm text-secondary/70 max-w-2xl mx-auto">
          {t.desc}
        </p>

      </div>

      {/* CONTINUOUS MARQUEE SLIDER */}
      <div className="relative flex overflow-x-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-5 items-center whitespace-nowrap py-3">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center justify-center w-70 h-55 rounded-3xl border border-gray-200/80 bg-white hover:border-primary/50 hover:shadow-xl transition-all px- py-4 text-center group gap-4"
            >
              <div className="h-17 w-full flex items-center justify-center">
                {p.logo ? (
                  <img src={p.logo} alt={p.name} className="max-h-full max-w-[90%] object-contain drop-shadow-sm" />
                ) : (
                  <span className="font-black text-lg md:text-xl text-secondary group-hover:text-primary transition-colors leading-tight">
                    {p.name}
                  </span>
                )}
              </div>
              <span className="text-[15px] text-gray-500 font-semibold truncate max-w-full px-4">
                {p.name}
              </span>
              <span className={`text-[13px] font-extrabold px-3.5 py-1 rounded-full mt-2 border ${p.color}`}>
                {p.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
