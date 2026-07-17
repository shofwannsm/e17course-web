import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Code2, ShieldCheck, Building2 } from 'lucide-react';

const categories = [
  {
    icon: Code2,
    label: 'Bootcamp & Training',
    desc: 'Program intensif berbasis industri untuk memulai karier IT dari nol hingga siap kerja.',
    count: '14+ Program',
    href: '/program#program',
    color: 'bg-amber-50 border-amber-100 hover:border-primary/30',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    cta: 'Jelajahi Program',
  },
  {
    icon: ShieldCheck,
    label: 'Sertifikasi BNSP',
    desc: 'Validasi kompetensimu dengan sertifikasi resmi yang diakui secara nasional oleh BNSP.',
    count: '19+ Skema',
    href: '/program#sertifikasi',
    color: 'bg-white border-gray-200 hover:border-primary/30',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
    cta: 'Lihat Skema',
  },
  {
    icon: Building2,
    label: 'Corporate Training',
    desc: 'Solusi peningkatan kompetensi tim yang dirancang khusus sesuai kebutuhan bisnis perusahaan.',
    count: 'Custom Program',
    href: '/program#corporate',
    color: 'bg-secondary/5 border-secondary/10 hover:border-secondary/30',
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
    cta: 'Jadwalkan Konsultasi',
  },
];

export function ProgramPreview() {
  return (
    <section id="program" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase mb-3 block">
              Program Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              Satu Platform,<br />
              <span className="text-primary">Tiga Jalur Belajar</span>
            </h2>
            <p className="mt-2 text-secondary/55 text-sm max-w-md leading-relaxed">
              Temukan jalur yang paling sesuai dengan tujuan kariermu — dari bootcamp intensif, sertifikasi resmi, hingga pelatihan tim perusahaan.
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

        {/* ── 3 Category cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`border rounded-2xl p-7 flex flex-col gap-4 transition-all hover:shadow-lg ${cat.color}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${cat.iconBg}`}>
                  <Icon size={22} className={cat.iconColor} />
                </div>

                <div>
                  <span className="text-[10px] font-extrabold tracking-widest text-secondary/40 uppercase">
                    {cat.count}
                  </span>
                  <h3 className="text-xl font-extrabold text-secondary mt-0.5">{cat.label}</h3>
                </div>

                <p className="text-sm text-secondary/60 leading-relaxed flex-1">{cat.desc}</p>

                <Link
                  href={cat.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-secondary/70 hover:text-secondary transition-colors group"
                >
                  {cat.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
