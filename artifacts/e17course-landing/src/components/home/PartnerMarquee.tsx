import { useLanguage } from '@/context/LanguageContext';
import { Award } from 'lucide-react';

const partners = [
  { name: 'EVOTEKS', sub: 'Tech Innovations', category: 'Industri', color: 'bg-amber-50 text-amber-800 border-amber-200' },
  { name: 'ATLASFIZL', sub: 'Tech Solutions', category: 'Industri', color: 'bg-amber-50 text-amber-800 border-amber-200' },
  { name: 'NS Development', sub: 'Software House', category: 'Industri', color: 'bg-blue-50 text-blue-800 border-blue-200' },
  { name: 'FKDK Budi Luhur', sub: 'Fakultas Komunikasi & Desain', category: 'Kampus', color: 'bg-purple-50 text-purple-800 border-purple-200' },
  { name: 'LSP Telematika', sub: 'Lembaga Sertifikasi Profesi', category: 'LSP & BNSP', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { name: 'Jagogo.net', sub: 'Live in Digital', category: 'Industri', color: 'bg-red-50 text-red-800 border-red-200' },
  { name: 'PublikasiKu', sub: 'Academic Solution', category: 'Akademik', color: 'bg-orange-50 text-orange-800 border-orange-200' },
  { name: 'LSP SDM TIK', sub: 'TIK & Kreatif', category: 'LSP & BNSP', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { name: 'IEC', sub: 'Intensive English Course', category: 'Pendidikan', color: 'bg-blue-50 text-blue-800 border-blue-200' },
  { name: 'LSP PERS INDONESIA', sub: 'Lembaga Sertifikasi Profesi', category: 'LSP & BNSP', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { name: 'QIA Solution', sub: 'IT Consultant', category: 'Industri', color: 'bg-indigo-50 text-indigo-800 border-indigo-200' },
  { name: 'SMK Muhammadiyah 2', sub: 'Tangerang', category: 'Sekolah', color: 'bg-sky-50 text-sky-800 border-sky-200' },
  { name: 'BNSP', sub: 'Badan Nasional Sertifikasi Profesi', category: 'LSP & BNSP', color: 'bg-amber-100 text-amber-900 border-amber-300 font-bold' },
  { name: 'Yayasan Budi Mulia', sub: 'Tangerang', category: 'Sekolah', color: 'bg-sky-50 text-sky-800 border-sky-200' },
  { name: 'Evolusi Kreatif Solusi', sub: 'Digital Creative', category: 'Industri', color: 'bg-teal-50 text-teal-800 border-teal-200' },
  { name: 'LSP Media Informatika', sub: 'Lembaga Sertifikasi Profesi', category: 'LSP & BNSP', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { name: 'Yayasan Abdi Karya', sub: 'YADIKA Jakarta', category: 'Sekolah', color: 'bg-sky-50 text-sky-800 border-sky-200' },
  { name: 'SMK Negeri 10', sub: 'Tangerang', category: 'Sekolah', color: 'bg-sky-50 text-sky-800 border-sky-200' },
  { name: 'LSP TIBD', sub: 'TI Bisnis Digital', category: 'LSP & BNSP', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { name: 'PT ALTEK CITRA CEMERLANG', sub: 'Mitra Industri', category: 'Industri', color: 'bg-amber-50 text-amber-800 border-amber-200' },
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

        <h3 className="text-2xl md:text-3xl font-extrabold text-secondary mb-2">
          {t.h3}
        </h3>

        <p className="text-sm text-secondary/60 max-w-2xl mx-auto">
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
              className="flex-shrink-0 flex flex-col items-center justify-center w-52 h-24 rounded-2xl border border-gray-200/80 bg-white hover:border-primary/50 hover:shadow-lg transition-all px-4 text-center group"
            >
              <span className="font-black text-sm md:text-base text-secondary group-hover:text-primary transition-colors leading-tight">
                {p.name}
              </span>
              <span className="text-[11px] text-gray-500 font-medium truncate max-w-full mt-0.5">
                {p.sub}
              </span>
              <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full mt-2 border ${p.color}`}>
                {p.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
