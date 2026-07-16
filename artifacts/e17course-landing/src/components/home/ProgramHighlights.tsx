import { motion } from 'framer-motion';
import { MonitorPlay, Users, Award, ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 'bootcamp',
    title: 'Training & Bootcamp',
    icon: MonitorPlay,
    desc: 'Kurikulum intensif berbasis proyek nyata dirancang khusus untuk mencetak developer siap kerja dalam waktu singkat.',
    tag: 'Paling Populer',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    tagColor: 'bg-primary/10 text-primary',
    hoverBorder: 'hover:border-primary/30',
    blob: 'bg-primary/10',
  },
  {
    id: 'corporate',
    title: 'Corporate Training',
    icon: Users,
    desc: 'Pelatihan in-house yang disesuaikan dengan teknologi perusahaan Anda untuk upskilling seluruh tim IT secara efektif.',
    tag: 'Enterprise',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
    tagColor: 'bg-accent/10 text-accent',
    hoverBorder: 'hover:border-accent/30',
    blob: 'bg-accent/10',
  },
  {
    id: 'certification',
    title: 'Sertifikasi BNSP',
    icon: Award,
    desc: 'Validasi kompetensi dengan sertifikat nasional resmi dari BNSP yang diakui oleh industri dan instansi pemerintah.',
    tag: 'Resmi BNSP',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    tagColor: 'bg-emerald-50 text-emerald-600',
    hoverBorder: 'hover:border-emerald-200',
    blob: 'bg-emerald-50',
  },
];

export function ProgramHighlights() {
  return (
    <section id="program" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-primary uppercase mb-3"
          >
            Program Kami
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-secondary mb-4"
          >
            Program Unggulan E17 Course
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary/60 text-lg"
          >
            Pilih jalur belajar yang paling sesuai dengan kebutuhan karier dan tujuan profesional Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group p-8 rounded-3xl bg-white border border-gray-100 ${program.hoverBorder} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${program.tagColor} mb-5 inline-block`}>
                  {program.tag}
                </span>

                <div className={`w-14 h-14 rounded-2xl ${program.iconBg} flex items-center justify-center mb-5`}>
                  <Icon size={28} className={program.iconColor} />
                </div>

                <h3 className="text-xl font-extrabold text-secondary mb-3">{program.title}</h3>
                <p className="text-secondary/60 mb-8 leading-relaxed text-sm">{program.desc}</p>

                <a
                  href={`#${program.id}`}
                  className={`inline-flex items-center gap-2 font-bold text-sm ${program.iconColor} group-hover:gap-3 transition-all`}
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight size={16} />
                </a>

                <div className={`absolute -bottom-16 -right-16 w-36 h-36 rounded-full ${program.blob} opacity-0 group-hover:opacity-60 transition-opacity blur-2xl`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
