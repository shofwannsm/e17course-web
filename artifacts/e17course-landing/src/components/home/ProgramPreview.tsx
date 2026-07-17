import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Code2, ShieldCheck, Building2, Zap, Star, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const T = {
  id: {
    eyebrow: 'Program Kami',
    h2: 'Satu Platform,',
    h2accent: 'Tiga Jalur Belajar',
    desc: 'Dari bootcamp intensif, sertifikasi resmi BNSP, hingga pelatihan tim perusahaan — pilih jalur yang paling sesuai dengan tujuanmu.',
    viewAll: 'Lihat Semua Program',
    categories: [
      { eyebrow:'Jalur 01', label:'Bootcamp & Training',  tagline:'Siap Kerja dalam Hitungan Bulan',       desc:'Program intensif berbasis industri — dari nol hingga siap berkarier di bidang IT profesional.', count:'14+', countLabel:'Program Aktif',      chips:['Software Dev','QA Testing','Data & AI'],            cta:'Jelajahi Program',         href:'/program#program',      chipBg:'bg-white/10 text-white/70',  bg:'bg-secondary',   border:'',                      iconWrap:'bg-primary/20 text-primary',    textMain:'text-white',   textSub:'text-white/60',     textCount:'text-primary',  ctaClass:'bg-primary text-secondary hover:bg-primary/90' },
      { eyebrow:'Jalur 02', label:'Sertifikasi BNSP',     tagline:'Stamp of Excellence Resmi Nasional',    desc:'Validasi kompetensimu dengan sertifikasi yang diakui negara dan dipercaya perusahaan.',        count:'19+', countLabel:'Skema Tersedia',    chips:['Data Science','IT Infrastructure','Digital Business'],  cta:'Lihat Skema',              href:'/program#sertifikasi',  chipBg:'bg-accent/10 text-accent',   bg:'bg-amber-50', border:'border border-amber-200', iconWrap:'bg-accent/15 text-accent',      textMain:'text-secondary',textSub:'text-secondary/55', textCount:'text-accent',   ctaClass:'bg-secondary text-white hover:bg-secondary/90' },
      { eyebrow:'Jalur 03', label:'Corporate Training',   tagline:'Transformasi Kompetensi Tim Anda',      desc:'Pelatihan custom yang dirancang khusus untuk kebutuhan dan target bisnis perusahaanmu.',        count:'Custom', countLabel:'Sesuai Kebutuhan', chips:['In-house','Online / Hybrid','Bersertifikat'],          cta:'Jadwalkan Konsultasi',    href:'/program#corporate',    chipBg:'bg-secondary/8 text-secondary',bg:'bg-white',    border:'border border-gray-200', iconWrap:'bg-secondary/10 text-secondary',textMain:'text-secondary',textSub:'text-secondary/55', textCount:'text-secondary',ctaClass:'bg-secondary text-white hover:bg-secondary/90' },
    ],
  },
  en: {
    eyebrow: 'Our Programs',
    h2: 'One Platform,',
    h2accent: 'Three Learning Paths',
    desc: 'From intensive bootcamps, official BNSP certification, to corporate team training — pick the path that fits your goals.',
    viewAll: 'View All Programs',
    categories: [
      { eyebrow:'Path 01', label:'Bootcamp & Training',  tagline:'Job-Ready in a Matter of Months',       desc:'Industry-based intensive program — from zero to a professional IT career.',                    count:'14+', countLabel:'Active Programs',  chips:['Software Dev','QA Testing','Data & AI'],            cta:'Explore Programs',         href:'/program#program',      chipBg:'bg-white/10 text-white/70',  bg:'bg-secondary',   border:'',                      iconWrap:'bg-primary/20 text-primary',    textMain:'text-white',   textSub:'text-white/60',     textCount:'text-primary',  ctaClass:'bg-primary text-secondary hover:bg-primary/90' },
      { eyebrow:'Path 02', label:'BNSP Certification',   tagline:'Official National Stamp of Excellence', desc:'Validate your competence with nationally recognised certification trusted by companies.',     count:'19+', countLabel:'Available Schemes', chips:['Data Science','IT Infrastructure','Digital Business'],  cta:'View Schemes',             href:'/program#sertifikasi',  chipBg:'bg-accent/10 text-accent',   bg:'bg-amber-50', border:'border border-amber-200', iconWrap:'bg-accent/15 text-accent',      textMain:'text-secondary',textSub:'text-secondary/55', textCount:'text-accent',   ctaClass:'bg-secondary text-white hover:bg-secondary/90' },
      { eyebrow:'Path 03', label:'Corporate Training',   tagline:'Transform Your Team\'s Competency',     desc:'Custom training specifically designed to meet your company\'s business needs and targets.',    count:'Custom', countLabel:'Tailored Needs',   chips:['In-house','Online / Hybrid','Certified'],              cta:'Schedule Consultation',   href:'/program#corporate',    chipBg:'bg-secondary/8 text-secondary',bg:'bg-white',    border:'border border-gray-200', iconWrap:'bg-secondary/10 text-secondary',textMain:'text-secondary',textSub:'text-secondary/55', textCount:'text-secondary',ctaClass:'bg-secondary text-white hover:bg-secondary/90' },
    ],
  },
};

const icons = [Code2, ShieldCheck, Building2];
const decorIcons = [Zap, Star, Users];

export function ProgramPreview() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section id="program" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase mb-3 block">{t.eyebrow}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              {t.h2}{' '}<span className="text-primary">{t.h2accent}</span>
            </h2>
            <p className="mt-2 text-secondary/55 text-sm max-w-lg leading-relaxed">{t.desc}</p>
          </motion.div>
          <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}>
            <Link href="/program" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-secondary text-secondary font-bold text-sm hover:bg-secondary hover:text-white transition-all group whitespace-nowrap">
              {t.viewAll}<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.categories.map((cat, i) => {
            const Icon = icons[i];
            const DecorIcon = decorIcons[i];
            return (
              <motion.div key={cat.label} initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}
                className={`relative rounded-3xl p-7 flex flex-col gap-5 overflow-hidden ${cat.bg} ${cat.border} hover:shadow-xl transition-all duration-300 group`}>
                <DecorIcon size={120} className="absolute -bottom-4 -right-4 opacity-[0.06]" aria-hidden />
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-extrabold tracking-widest uppercase ${cat.textSub}`}>{cat.eyebrow}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.iconWrap}`}><Icon size={20} /></div>
                </div>
                <div className="flex items-end gap-2">
                  <span className={`text-5xl font-extrabold leading-none ${cat.textCount}`}>{cat.count}</span>
                  <span className={`text-xs font-semibold mb-1.5 ${cat.textSub}`}>{cat.countLabel}</span>
                </div>
                <div>
                  <h3 className={`text-xl font-extrabold leading-snug ${cat.textMain}`}>{cat.label}</h3>
                  <p className={`text-xs font-semibold mt-0.5 ${cat.textCount}`}>{cat.tagline}</p>
                </div>
                <p className={`text-sm leading-relaxed ${cat.textSub}`}>{cat.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.chips.map((chip) => <span key={chip} className={`text-[11px] font-semibold px-3 py-1 rounded-full ${cat.chipBg}`}>{chip}</span>)}
                </div>
                <div className={`h-px w-full ${cat.textMain === 'text-white' ? 'bg-white/10' : 'bg-black/8'}`} />
                <Link href={cat.href} className={`self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all group-hover:gap-3 ${cat.ctaClass}`}>
                  {cat.cta}<ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
