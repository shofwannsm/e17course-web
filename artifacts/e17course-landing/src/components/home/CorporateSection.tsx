import { motion } from 'framer-motion';
import { Building2, CheckCircle2, ArrowRight, Users, Calendar, Target } from 'lucide-react';

const modules = [
  { num: '01', title: 'Productivity & Performance' },
  { num: '02', title: 'Customer Experience & Sales' },
  { num: '03', title: 'Leadership & Management' },
  { num: '04', title: 'Communication & Collaboration Skills' },
  { num: '05', title: 'HR & Organizational Mindset' },
  { num: '06', title: 'Digital Transformation Fundamentals' },
  { num: '07', title: 'Data-Driven Decision Making' },
];

const benefits = [
  { icon: Target,   text: 'Kurikulum disesuaikan kebutuhan bisnis perusahaan' },
  { icon: Users,    text: 'Instruktur berpengalaman dari industri nyata' },
  { icon: Calendar, text: 'Jadwal fleksibel — online, offline, atau hybrid' },
  { icon: CheckCircle2, text: 'Laporan kompetensi dan sertifikat kelulusan' },
];

export function CorporateSection() {
  return (
    <section id="corporate" className="py-24 bg-white relative overflow-hidden">

      {/* Subtle background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.3,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">

        {/* ── Header ── */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left: text */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-widest text-primary uppercase bg-primary/8 px-3 py-1.5 rounded-full mb-5">
              <Building2 size={13} /> Corporate Training
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary leading-[1.1] mb-5">
              Solusi Pengembangan<br />
              <span className="text-primary">Talenta Digital</span><br />
              untuk Perusahaan
            </h2>

            <p className="text-secondary/60 text-sm leading-relaxed mb-8 max-w-md">
              E17 Course membantu perusahaan meningkatkan kompetensi tim melalui program corporate training yang dirancang sesuai kebutuhan bisnis, dengan pembelajaran berbasis praktik, materi relevan industri, dan instruktur berpengalaman untuk mendukung transformasi digital organisasi.
            </p>

            {/* Benefits list */}
            <div className="flex flex-col gap-3 mb-8">
              {benefits.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-primary" />
                  </div>
                  <span className="text-sm text-secondary/70 font-medium">{text}</span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-white font-bold text-sm hover:bg-secondary/90 transition-all group">
              Jadwalkan Konsultasi
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right: dark terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-secondary rounded-2xl overflow-hidden shadow-2xl">

              {/* Terminal bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-white/40 text-xs font-mono">— UPGRADE YOUR TEAM COMPETENCY</span>
              </div>

              {/* Module list */}
              <div className="p-6 flex flex-col gap-1">
                {modules.map((mod, i) => (
                  <motion.div
                    key={mod.num}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-white/5 transition-colors group cursor-default"
                  >
                    <span className="text-primary/60 text-xs font-mono w-5 shrink-0">{mod.num}</span>
                    <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                      {mod.title}
                    </span>
                    <ArrowRight
                      size={14}
                      className="ml-auto text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Bottom tag */}
              <div className="px-6 pb-5">
                <div className="border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Building2 size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">In-house &amp; Public Training</p>
                    <p className="text-white/40 text-[11px]">Online · Offline · Hybrid</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
