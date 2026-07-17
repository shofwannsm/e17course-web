import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  ArrowRight, Code2, ShieldCheck, Building2,
  Zap, Star, BarChart2, Users, CheckCircle,
} from 'lucide-react';

const categories = [
  {
    icon: Code2,
    eyebrow: 'Jalur 01',
    label: 'Bootcamp & Training',
    tagline: 'Siap Kerja dalam Hitungan Bulan',
    desc: 'Program intensif berbasis industri — dari nol hingga siap berkarier di bidang IT profesional.',
    count: '14+',
    countLabel: 'Program Aktif',
    chips: ['Software Dev', 'QA Testing', 'Data & AI'],
    href: '/program#program',
    cta: 'Jelajahi Program',
    // visual theme
    bg: 'bg-secondary',
    chipBg: 'bg-white/10 text-white/70',
    accentDot: 'bg-primary',
    iconWrap: 'bg-primary/20 text-primary',
    textMain: 'text-white',
    textSub: 'text-white/60',
    textCount: 'text-primary',
    border: '',
    ctaClass: 'bg-primary text-secondary hover:bg-primary/90',
    decorIcon: Zap,
  },
  {
    icon: ShieldCheck,
    eyebrow: 'Jalur 02',
    label: 'Sertifikasi BNSP',
    tagline: 'Stamp of Excellence Resmi Nasional',
    desc: 'Validasi kompetensimu dengan sertifikasi yang diakui negara dan dipercaya perusahaan.',
    count: '19+',
    countLabel: 'Skema Tersedia',
    chips: ['Data Science', 'IT Infrastructure', 'Digital Business'],
    href: '/program#sertifikasi',
    cta: 'Lihat Skema',
    bg: 'bg-amber-50',
    chipBg: 'bg-accent/10 text-accent',
    accentDot: 'bg-accent',
    iconWrap: 'bg-accent/15 text-accent',
    textMain: 'text-secondary',
    textSub: 'text-secondary/55',
    textCount: 'text-accent',
    border: 'border border-amber-200',
    ctaClass: 'bg-secondary text-white hover:bg-secondary/90',
    decorIcon: Star,
  },
  {
    icon: Building2,
    eyebrow: 'Jalur 03',
    label: 'Corporate Training',
    tagline: 'Transformasi Kompetensi Tim Anda',
    desc: 'Pelatihan custom yang dirancang khusus untuk kebutuhan dan target bisnis perusahaanmu.',
    count: 'Custom',
    countLabel: 'Sesuai Kebutuhan',
    chips: ['In-house', 'Online / Hybrid', 'Bersertifikat'],
    href: '/program#corporate',
    cta: 'Jadwalkan Konsultasi',
    bg: 'bg-white',
    chipBg: 'bg-secondary/8 text-secondary',
    accentDot: 'bg-secondary',
    iconWrap: 'bg-secondary/10 text-secondary',
    textMain: 'text-secondary',
    textSub: 'text-secondary/55',
    textCount: 'text-secondary',
    border: 'border border-gray-200',
    ctaClass: 'bg-secondary text-white hover:bg-secondary/90',
    decorIcon: Users,
  },
];

export function ProgramPreview() {
  return (
    <section id="program" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase mb-3 block">
              Program Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              Satu Platform,{' '}
              <span className="text-primary">Tiga Jalur Belajar</span>
            </h2>
            <p className="mt-2 text-secondary/55 text-sm max-w-lg leading-relaxed">
              Dari bootcamp intensif, sertifikasi resmi BNSP, hingga pelatihan tim perusahaan — pilih jalur yang paling sesuai dengan tujuanmu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/program"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-secondary text-secondary font-bold text-sm hover:bg-secondary hover:text-white transition-all group whitespace-nowrap"
            >
              Lihat Semua Program
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const DecorIcon = cat.decorIcon;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl p-7 flex flex-col gap-5 overflow-hidden ${cat.bg} ${cat.border} hover:shadow-xl transition-all duration-300 group`}
              >
                {/* Decorative large icon watermark */}
                <DecorIcon
                  size={120}
                  className="absolute -bottom-4 -right-4 opacity-[0.06]"
                  aria-hidden
                />

                {/* Top row: eyebrow + icon */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-extrabold tracking-widest uppercase ${cat.textSub}`}>
                    {cat.eyebrow}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.iconWrap}`}>
                    <Icon size={20} />
                  </div>
                </div>

                {/* Count + label */}
                <div className="flex items-end gap-2">
                  <span className={`text-5xl font-extrabold leading-none ${cat.textCount}`}>
                    {cat.count}
                  </span>
                  <span className={`text-xs font-semibold mb-1.5 ${cat.textSub}`}>
                    {cat.countLabel}
                  </span>
                </div>

                {/* Title + tagline */}
                <div>
                  <h3 className={`text-xl font-extrabold leading-snug ${cat.textMain}`}>
                    {cat.label}
                  </h3>
                  <p className={`text-xs font-semibold mt-0.5 ${cat.textCount}`}>
                    {cat.tagline}
                  </p>
                </div>

                {/* Desc */}
                <p className={`text-sm leading-relaxed ${cat.textSub}`}>
                  {cat.desc}
                </p>

                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.chips.map((chip) => (
                    <span
                      key={chip}
                      className={`text-[11px] font-semibold px-3 py-1 rounded-full ${cat.chipBg}`}
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className={`h-px w-full ${cat.textMain === 'text-white' ? 'bg-white/10' : 'bg-black/8'}`} />

                {/* CTA */}
                <Link
                  href={cat.href}
                  className={`self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all group-hover:gap-3 ${cat.ctaClass}`}
                >
                  {cat.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
