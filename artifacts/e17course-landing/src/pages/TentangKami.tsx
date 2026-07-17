import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import {
  Cpu, Star, Users, Hammer,
  Eye, Target, CheckCircle2, ArrowRight,
  GraduationCap, Briefcase, Award, BookOpen,
} from 'lucide-react';

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: '10K+', label: 'Alumni Lulus' },
  { value: '98%',  label: 'Terserap Industri' },
  { value: '50+',  label: 'Hiring Partners' },
  { value: '4',    label: 'Lini Program' },
];

const misi = [
  'Menyediakan pelatihan berkualitas tinggi berbasis tren industri.',
  'Meningkatkan employability dan daya saing peserta.',
  'Menggunakan pendekatan inovatif dalam metode pembelajaran.',
];

const values = [
  {
    letter: 'T',
    name: 'Tech-Driven',
    desc: 'Materi dan metode pelatihan kami selalu mengikuti perkembangan teknologi dan kebutuhan industri terkini.',
    icon: Cpu,
    bg: 'bg-primary',
    text: 'text-secondary',
  },
  {
    letter: 'E',
    name: 'Excellence',
    desc: 'Kami selalu berusaha menghadirkan kualitas pembelajaran terbaik di setiap program yang kami jalankan.',
    icon: Star,
    bg: 'bg-secondary',
    text: 'text-white',
  },
  {
    letter: 'C',
    name: 'Collaborative',
    desc: 'Tumbuh bersama peserta, mentor, dan mitra industri yang saling mendukung dalam satu ekosistem belajar.',
    icon: Users,
    bg: 'bg-accent',
    text: 'text-white',
  },
  {
    letter: 'H',
    name: 'Hands-On',
    desc: 'Praktik langsung dan proyek nyata menjadi cara utama kami mengajar — bukan sekadar teori.',
    icon: Hammer,
    bg: 'bg-primary',
    text: 'text-secondary',
  },
];

const layanan = [
  { icon: GraduationCap, label: 'Bootcamp & Training' },
  { icon: Briefcase,     label: 'Corporate Training' },
  { icon: Award,         label: 'Sertifikasi BNSP' },
  { icon: BookOpen,      label: 'Publikasi Buku Ber-ISBN' },
];

const sasaran = [
  'Siswa SMA/SMK sederajat',
  'Mahasiswa aktif',
  'Fresh graduate',
  'Profesional aktif',
  'Career switcher',
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <Navbar />
      <main className="pt-[72px]">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative bg-secondary overflow-hidden py-24">
          {/* Dot grid decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(212,162,0,0.18) 1.5px, transparent 1.5px)',
              backgroundSize: '32px 32px',
            }}
          />
          {/* Glow blobs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <span className="inline-block text-[11px] font-extrabold tracking-widest text-primary uppercase mb-5">
                Tentang Kami
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-5">
                Dari Mana Pun Kamu Memulai,{' '}
                <span className="text-primary">Kami Bantu Kamu Bertumbuh!</span>
              </h1>
              <p className="text-white/55 text-base leading-relaxed max-w-xl">
                Mengenal lebih dekat perjalanan, visi, dan nilai yang menjadi fondasi E17 Course dalam mencetak talenta digital Indonesia.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14"
            >
              {stats.map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-center">
                  <p className="text-3xl font-extrabold text-primary">{s.value}</p>
                  <p className="text-white/50 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══ TENTANG PERUSAHAAN ════════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">

              {/* Left: story */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase mb-4 block">
                  Tentang Perusahaan
                </span>
                <div className="flex flex-col gap-5 text-secondary/65 text-sm leading-relaxed">
                  <p>
                    Perkembangan teknologi terus mengubah cara dunia bekerja. Di sisi lain, kebutuhan industri terhadap talenta yang kompeten semakin meningkat. Tantangannya, tidak semua individu memiliki akses terhadap pembelajaran yang relevan untuk membangun keterampilan yang dibutuhkan dunia kerja saat ini.
                  </p>
                  <p>
                    Berangkat dari tantangan tersebut, <strong className="text-secondary">E17 Course</strong> hadir sebagai partner pengembangan talenta yang membantu setiap individu membangun kompetensi, meningkatkan kesiapan kerja, dan terus bertumbuh mengikuti perkembangan industri.
                  </p>
                  <p>
                    Di bawah naungan <strong className="text-secondary">PT Edukasi Tujuh Belas</strong>, kami menghadirkan ekosistem pembelajaran yang dirancang sesuai kebutuhan industri.
                  </p>
                  <p>
                    Kami percaya bahwa setiap orang memiliki kesempatan yang sama untuk bertumbuh. Karena itu, E17 Course terbuka bagi semua kalangan yang ingin meningkatkan kompetensi dan memperluas peluang karier.
                  </p>
                </div>

                {/* Layanan chips */}
                <div className="mt-8 flex flex-col gap-3">
                  <p className="text-xs font-bold text-secondary/40 uppercase tracking-widest">Lini Layanan Kami</p>
                  <div className="flex flex-wrap gap-2">
                    {layanan.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2 bg-amber-50 border border-amber-100 px-3 py-2 rounded-full">
                        <Icon size={13} className="text-primary" />
                        <span className="text-xs font-semibold text-secondary">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: sasaran + quote */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                {/* Sasaran card */}
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
                  <p className="text-xs font-extrabold text-secondary/40 uppercase tracking-widest mb-5">
                    Siapa yang Kami Layani?
                  </p>
                  <div className="flex flex-col gap-3">
                    {sasaran.map((s) => (
                      <div key={s} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        <span className="text-sm text-secondary font-medium">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-secondary rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
                  <p className="text-5xl text-primary font-serif leading-none mb-4">"</p>
                  <p className="text-white/80 text-base leading-relaxed italic relative">
                    Setiap orang berhak atas pembelajaran berkualitas yang membuka pintu karier lebih lebar.
                  </p>
                  <p className="text-primary text-xs font-bold mt-4 relative">— Fondasi E17 Course</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ VISI & MISI ═══════════════════════════════════════════════════ */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 w-96 h-96 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, #D4A200 1.5px, transparent 1.5px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-10">

              {/* Visi */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-3xl p-10 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye size={22} className="text-primary" />
                </div>
                <h2 className="text-2xl font-extrabold text-secondary mb-4">Visi</h2>
                <p className="text-secondary/65 text-base leading-relaxed">
                  Menjadi penyedia pelatihan teknologi <strong className="text-secondary">hard skill</strong> dan{' '}
                  <strong className="text-secondary">soft skill</strong> terdepan bagi pemula dan profesional di Indonesia.
                </p>
                {/* Decorative large letter */}
                <span className="absolute -bottom-6 -right-4 text-[9rem] font-extrabold text-secondary/[0.04] leading-none select-none">
                  V
                </span>
              </motion.div>

              {/* Misi */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-secondary rounded-3xl p-10 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <Target size={22} className="text-primary" />
                </div>
                <h2 className="text-2xl font-extrabold text-white mb-6">Misi</h2>
                <div className="flex flex-col gap-4">
                  {misi.map((m, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-secondary text-xs font-extrabold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-white/70 text-sm leading-relaxed">{m}</p>
                    </div>
                  ))}
                </div>
                <span className="absolute -bottom-6 -right-4 text-[9rem] font-extrabold text-white/[0.04] leading-none select-none">
                  M
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ NILAI PERUSAHAAN ══════════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase mb-3 block">
                Nilai Perusahaan
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
                Kami Percaya pada <span className="text-primary">TECH</span>
              </h2>
              <p className="mt-2 text-secondary/50 text-sm max-w-md mx-auto">
                Empat nilai inti yang menjadi fondasi cara kami bekerja, mengajar, dan berkembang bersama.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.letter}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative rounded-3xl overflow-hidden group"
                  >
                    {/* Top accent bar */}
                    <div className={`h-1.5 w-full ${v.bg}`} />

                    <div className="bg-white border border-gray-100 rounded-b-3xl p-7 h-full flex flex-col gap-4 hover:shadow-lg transition-all">
                      {/* Big letter */}
                      <div className="flex items-center justify-between">
                        <span className={`text-5xl font-extrabold leading-none ${v.bg === 'bg-primary' ? 'text-primary' : v.bg === 'bg-secondary' ? 'text-secondary' : 'text-accent'}`}>
                          {v.letter}
                        </span>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          v.bg === 'bg-primary' ? 'bg-primary/10' : v.bg === 'bg-secondary' ? 'bg-secondary/10' : 'bg-accent/10'
                        }`}>
                          <Icon size={18} className={v.bg === 'bg-primary' ? 'text-primary' : v.bg === 'bg-secondary' ? 'text-secondary' : 'text-accent'} />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base font-extrabold text-secondary">{v.name}</h3>
                        <p className="text-sm text-secondary/55 leading-relaxed mt-2">{v.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ CTA ═══════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-primary">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 leading-tight">
                Siap Bertumbuh Bersama Kami?
              </h2>
              <p className="text-secondary/60 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                Bergabung dengan ribuan alumni yang sudah membuktikan bahwa belajar di E17 Course membuka peluang karier yang lebih luas.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-7 py-3.5 bg-secondary text-white rounded-full font-bold text-sm hover:bg-secondary/90 transition-all flex items-center gap-2 group">
                  Mulai Belajar Sekarang
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-7 py-3.5 border-2 border-secondary text-secondary rounded-full font-bold text-sm hover:bg-secondary hover:text-white transition-all">
                  Jadwalkan Konsultasi
                </button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
