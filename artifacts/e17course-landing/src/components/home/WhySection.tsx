import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Clock, Users } from 'lucide-react';

const stats = [
  { value: '1000+', label: 'Alumni', color: 'text-primary' },
  { value: '20+', label: 'Program', color: 'text-accent' },
  { value: 'BNSP', label: 'Bersertifikasi', color: 'text-emerald-600' },
  { value: 'Hybrid', label: 'Online & Offline', color: 'text-purple-600' },
];

const benefits = [
  {
    icon: BookOpen,
    title: 'Kurikulum Berbasis Industri',
    desc: 'Materi selalu di-update mengikuti tren teknologi terbaru di perusahaan.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Users,
    title: 'Instruktur Berpengalaman',
    desc: 'Belajar langsung dari praktisi yang ahli di bidangnya masing-masing.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: CheckCircle,
    title: 'Proyek Nyata',
    desc: 'Lulus dengan portofolio project real yang siap dipamerkan ke rekruter.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Clock,
    title: 'Waktu Fleksibel',
    desc: 'Pilihan kelas online atau tatap muka yang bisa disesuaikan dengan kesibukan.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
];

export function WhySection() {
  return (
    <section id="tentang" className="py-24 bg-gray-50/70 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
              Mengapa E17 Course
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-6 leading-tight">
              Bukan Sekadar<br />
              <span className="text-primary">Platform Belajar</span>
            </h2>
            <p className="text-secondary/60 text-lg mb-12 leading-relaxed">
              E17 Course adalah ekosistem pendidikan yang didesain untuk mentransformasi karir Anda dari nol hingga menjadi profesional bersertifikasi.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                >
                  <div className={`text-3xl md:text-4xl font-extrabold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-secondary/60 font-medium text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all"
                >
                  <div className={`w-11 h-11 rounded-xl ${benefit.bg} flex items-center justify-center mb-4`}>
                    <Icon size={22} className={benefit.color} />
                  </div>
                  <h4 className="text-base font-bold text-secondary mb-2">{benefit.title}</h4>
                  <p className="text-sm text-secondary/60 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
