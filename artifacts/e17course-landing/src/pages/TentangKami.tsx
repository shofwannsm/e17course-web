import { useMotionValue, useTransform, motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { Cpu, Star, Users, Hammer, Eye, Target, CheckCircle2, ArrowRight, GraduationCap, Briefcase, Award, BookOpen, Compass } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import buildingFuture from '@assets/e17brand/building-future.png';

const T = {
  id: {
    eyebrow: 'Tentang Kami',
    h1a: 'Dari Mana Pun Kamu Memulai,',
    h1b: 'Kami Bantu Kamu Bertumbuh!',
    subhero: 'Di bawah naungan PT Edukasi Tujuh Belas, kami menghadirkan ekosistem pembelajaran yang dirancang sesuai kebutuhan industri meliputi Bootcamp, Corporate Training, Sertifikasi Kompetensi BNSP, serta Publikasi Buku ber-ISBN.',
    
    storyTitle: 'Tentang E17 Course',
    story: [
      'Perkembangan teknologi terus mengubah cara dunia bekerja. Di sisi lain, kebutuhan industri terhadap talenta yang kompeten semakin meningkat. Tantangannya, tidak semua individu memiliki akses terhadap pembelajaran yang relevan untuk membangun keterampilan yang dibutuhkan dunia kerja saat ini.',
      'Berangkat dari tantangan tersebut, <b>E17 Course</b> berkembang menjadi lembaga pendidikan dan pelatihan kerja yang menyediakan berbagai solusi pengembangan kompetensi bagi individu maupun organisasi.',
      'Di bawah naungan <b>PT Edukasi Tujuh Belas</b>, kami menghadirkan ekosistem pembelajaran yang dirancang sesuai kebutuhan industri meliputi Bootcamp, Corporate Training, Sertifikasi Kompetensi BNSP, serta Publikasi Buku ber-ISBN.',
      'Kami percaya bahwa setiap orang memiliki kesempatan yang sama untuk bertumbuh.',
    ],

    journeyTitle: 'Perjalanan Kami',
    journeyStory: [
      'Perjalanan E17 Course dimulai dari sebuah pengamatan sederhana: <i>"kebutuhan industri berkembang lebih cepat dibandingkan kesiapan talenta yang tersedia"</i>.',
      'Berawal dari penyelenggaraan Bootcamp IT untuk membantu memenuhi kebutuhan talenta di perusahaan mitra, E17 Course terus berkembang seiring meningkatnya kebutuhan akan pembelajaran yang lebih relevan dengan dunia industri. Kami memperluas layanan mulai dari peningkatan kompetensi, pengakuan melalui sertifikasi, hingga pengembangan profesional yang berkelanjutan.',
    ],

    visionTitle: 'Visi',
    visionText: 'Menjadi penyedia pelatihan teknologi <b>hard skill</b> dan <b>soft skill</b> terdepan bagi pemula dan profesional',

    missionTitle: 'Misi',
    mission: [
      'Menyediakan pelatihan berkualitas tinggi berbasis tren industri.',
      'Meningkatkan employability dan daya saing peserta.',
      'Menggunakan pendekatan inovatif dalam metode pembelajaran.',
    ],

    servicesLabel: 'Lini Layanan Utama',
    services: ['Bootcamp', 'Corporate Training', 'Sertifikasi BNSP', 'Publikasi Buku Ber-ISBN'],
    targetLabel: 'Siapa yang Kami Layani?',
    targets: ['Siswa SMA/SMK sederajat', 'Mahasiswa aktif', 'Fresh graduate', 'Profesional aktif', 'Career switcher'],

    valuesEyebrow: 'NILAI KAMI',
    valuesTitle: 'Nilai-Nilai Utama',
    valuesTitleAccent: 'E17 Course',
    valuesDesc: 'Empat nilai inti yang menjadi fondasi cara kami bekerja, mengajar, dan berkembang bersama.',
    values: [
      { letter: 'T', name: 'Tech-Driven', desc: 'Materi dan metode pelatihan kami selalu mengikuti perkembangan teknologi dan kebutuhan industri terkini.' },
      { letter: 'E', name: 'Excellence', desc: 'Kami selalu berusaha menghadirkan kualitas pembelajaran terbaik di setiap program yang kami jalankan.' },
      { letter: 'C', name: 'Collaborative', desc: 'Tumbuh bersama peserta, mentor, dan mitra industri yang saling mendukung dalam satu ekosistem belajar.' },
      { letter: 'H', name: 'Hands-On', desc: 'Praktik langsung dan proyek nyata menjadi cara utama kami mengajar — bukan sekadar teori.' },
    ],

    ctaTitle: 'Siap Bertumbuh Bersama Kami?',
    ctaDesc: 'Bergabung dengan ribuan alumni yang sudah membuktikan bahwa belajar di E17 Course membuka peluang karier yang lebih luas.',
    cta1: 'Mulai Belajar Sekarang',
    cta2: 'Konsultasi via WhatsApp',
  },
  en: {
    eyebrow: 'About Us',
    h1a: 'No Matter Where You Start,',
    h1b: 'We Help You Grow!',
    subhero: 'Under PT Edukasi Tujuh Belas, we provide a learning ecosystem designed for industry needs including Bootcamp, Corporate Training, BNSP Certification, and ISBN Book Publication.',
    
    storyTitle: 'About E17 Course',
    story: [
      'Technology development continues to change how the world works. On the other hand, industry demand for competent talent is rising. The challenge is that not all individuals have access to learning relevant to today\'s workplace.',
      'Starting from this challenge, <b>E17 Course</b> has grown into an education and job training institution providing competency development solutions for individuals and organisations.',
      'Under <b>PT Edukasi Tujuh Belas</b>, we provide a learning ecosystem designed to meet industry needs including Bootcamp, Corporate Training, BNSP Certification, and ISBN Book Publication.',
      'We believe everyone has an equal opportunity to grow.',
    ],

    journeyTitle: 'Our Journey',
    journeyStory: [
      'The journey of E17 Course started from a simple observation: <i>"industry needs grow faster than the readiness of available talent"</i>.',
      'Starting from hosting IT Bootcamps to fulfill talent needs in partner companies, E17 Course continued to grow alongside the demand for industry-relevant learning. We expanded services from competency enhancement and certification recognition to continuous professional development.',
    ],

    visionTitle: 'Vision',
    visionText: 'To become the leading provider of <b>hard skill</b> and <b>soft skill</b> technology training for beginners and professionals',

    missionTitle: 'Mission',
    mission: [
      'Provide high-quality training based on industry trends.',
      'Enhance employability and competitiveness of participants.',
      'Use innovative approaches in learning methods.',
    ],

    servicesLabel: 'Our Main Service Lines',
    services: ['Bootcamp', 'Corporate Training', 'BNSP Certification', 'ISBN Book Publication'],
    targetLabel: 'Who Do We Serve?',
    targets: ['High school/vocational students', 'Active university students', 'Fresh graduates', 'Active professionals', 'Career switchers'],

    valuesEyebrow: 'OUR VALUES',
    valuesTitle: 'Core Values of',
    valuesTitleAccent: 'E17 Course',
    valuesDesc: 'Four core values that form the foundation of how we work, teach, and grow together.',
    values: [
      { letter: 'T', name: 'Tech-Driven', desc: 'Our training materials and methods always follow the latest technology developments and industry needs.' },
      { letter: 'E', name: 'Excellence', desc: 'We always strive to deliver the best learning quality in every program we run.' },
      { letter: 'C', name: 'Collaborative', desc: 'Growing together with participants, mentors, and industry partners supporting each other in one learning ecosystem.' },
      { letter: 'H', name: 'Hands-On', desc: 'Direct practice and real projects are our main teaching approach — not just theory.' },
    ],

    ctaTitle: 'Ready to Grow With Us?',
    ctaDesc: 'Join thousands of alumni who have proven that learning at E17 Course opens wider career opportunities.',
    cta1: 'Start Learning Now',
    cta2: 'Consultation via WhatsApp',
  },
};

const serviceIcons = [GraduationCap, Briefcase, Award, BookOpen];
const valueIcons = [Cpu, Star, Users, Hammer];
const valueBgs = ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-primary'];

function Interactive3DWorkspace() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [12, -12]);
  const rotateY = useTransform(x, [-150, 150], [-12, 12]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl p-3 bg-gradient-to-b from-white/25 via-white/10 to-white/5 border border-white/20 shadow-2xl backdrop-blur-md cursor-grab active:cursor-grabbing transition-transform duration-200 ease-out group"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-amber-500/15 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Editorial Vector Illustration: Building Your Future */}
      <div className="relative rounded-2xl overflow-hidden bg-white p-2 border border-white/20 shadow-inner">
        <img
          src={buildingFuture}
          alt="E17 Course - Building Your Future Editorial Illustration"
          className="w-full h-auto object-cover rounded-xl transition-all duration-500 group-hover:scale-103"
        />

        {/* Caption Label */}
        <div className="bg-secondary/90 backdrop-blur-md text-white text-[11px] font-bold px-3.5 py-2 rounded-xl border border-white/10 mt-2 flex items-center justify-between">
          <span className="text-primary font-black">Building Your Future</span>
          <span className="text-gray-300 font-medium">Menyusun Fondasi Karier IT</span>
        </div>
      </div>

      {/* Floating Badge 1 (Top Left): BNSP Certification */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        className="absolute -top-4 -left-4 bg-secondary/95 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl shadow-2xl flex items-center gap-2 text-xs text-white font-extrabold"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        <span>Sertifikasi Lisensi BNSP</span>
      </motion.div>

      {/* Floating Badges 2 (Bottom Right Stack): Career Blocks */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute -bottom-5 -right-4 bg-white/95 text-secondary backdrop-blur-md border border-primary/30 p-3 rounded-2xl shadow-2xl flex flex-col gap-1 text-[11px] font-extrabold"
      >
        <span className="text-[10px] uppercase font-black tracking-widest text-primary/80">Fondasi Karier</span>
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="bg-primary/15 text-secondary px-2 py-0.5 rounded-md">Skill</span>
          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">Project</span>
          <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">Mentor</span>
          <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">Experience</span>
        </div>
      </motion.div>

    </motion.div>
  );
}

export default function TentangKami() {
  const { lang } = useLanguage();
  const t = T[lang as keyof typeof T];

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <Navbar />

      <main className="pt-[72px]">

        {/* HERO SECTION */}
        <section className="relative bg-secondary text-white py-20 md:py-24 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(212,162,0,0.18) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column (Text Content) */}
              <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7">
                <span className="inline-block text-[11px] font-extrabold tracking-widest text-primary uppercase mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {t.eyebrow}
                </span>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.15] mb-6 tracking-tight">
                  {t.h1a}<br /><span className="text-primary">{t.h1b}</span>
                </h1>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                  {t.story[0]}
                </p>
              </motion.div>

              {/* Right Column (Interactive 3D Isometric Workspace Component) */}
              <motion.div initial={{ opacity: 0, scale: 0.92, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-5 relative">
                <Interactive3DWorkspace />
              </motion.div>

            </div>
          </div>
        </section>

        {/* MAIN STORY & JOURNEY SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Story & Journey */}
              <div className="lg:col-span-7 space-y-12">
                
                {/* About Section */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary mb-5">
                    {t.storyTitle}
                  </h2>
                  <div className="space-y-4 text-secondary/75 text-sm sm:text-base leading-relaxed">
                    {t.story.map((p: string, i: number) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/<b>/g, '<strong class="text-secondary font-extrabold">').replace(/<\/b>/g, '</strong>') }} />
                    ))}
                  </div>
                </motion.div>

                {/* Perjalanan Kami (Our Journey) */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-amber-50/60 border border-amber-200/80 rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                      <Compass size={20} />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-secondary">
                      {t.journeyTitle}
                    </h2>
                  </div>

                  <div className="space-y-4 text-secondary/80 text-sm leading-relaxed">
                    {t.journeyStory.map((p: string, i: number) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/<i>/g, '<em class="text-accent font-bold not-italic">').replace(/<\/i>/g, '</em>') }} />
                    ))}
                  </div>
                </motion.div>

              </div>

              {/* Right Column: Services & Target Audience */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Services Box */}
                <div className="bg-gray-50 border border-gray-200/80 rounded-3xl p-7 shadow-sm">
                  <p className="text-xs font-black text-secondary/40 uppercase tracking-widest mb-4">
                    {t.servicesLabel}
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {t.services.map((l: string, i: number) => {
                      const Icon = serviceIcons[i];
                      return (
                        <div key={l} className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-3 rounded-2xl shadow-2xs">
                          <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <Icon size={16} />
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-secondary">{l}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Target Audience */}
                <div className="bg-secondary text-white rounded-3xl p-7 shadow-xl relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
                  <p className="text-xs font-black text-primary uppercase tracking-widest mb-5">
                    {t.targetLabel}
                  </p>
                  <div className="space-y-3">
                    {t.targets.map((s: string) => (
                      <div key={s} className="flex items-center gap-3 text-xs sm:text-sm text-gray-200 font-medium">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* VISION & MISSION SECTION */}
        <section className="py-20 bg-gray-50 relative overflow-hidden border-t border-gray-100">
          <div aria-hidden className="pointer-events-none absolute right-0 top-0 w-96 h-96 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #D4A200 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Vision Card */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-6 text-primary">
                  <Eye size={24} />
                </div>
                <h2 className="text-2xl font-black text-secondary mb-4">{t.visionTitle}</h2>
                <p className="text-secondary/75 text-sm sm:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: t.visionText.replace(/<b>/g, '<strong class="text-secondary font-black">').replace(/<\/b>/g, '</strong>') }} />
                <span className="absolute -bottom-6 -right-4 text-[9rem] font-black text-secondary/[0.03] leading-none select-none">V</span>
              </motion.div>

              {/* Mission Card */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-secondary text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 text-primary">
                  <Target size={24} />
                </div>
                <h2 className="text-2xl font-black text-white mb-6">{t.missionTitle}</h2>
                <div className="space-y-4">
                  {t.mission.map((m: string, i: number) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-secondary text-xs font-black shrink-0 mt-0.5 shadow-sm">
                        {i + 1}
                      </span>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">{m}</p>
                    </div>
                  ))}
                </div>
                <span className="absolute -bottom-6 -right-4 text-[9rem] font-black text-white/[0.03] leading-none select-none">M</span>
              </motion.div>

            </div>
          </div>
        </section>



        {/* BOTTOM CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4 leading-tight">{t.ctaTitle}</h2>
              <p className="text-secondary/70 text-xs sm:text-sm leading-relaxed mb-8 max-w-md mx-auto">{t.ctaDesc}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/program"
                  className="px-8 py-3.5 bg-secondary text-white rounded-full font-extrabold text-xs sm:text-sm hover:bg-secondary/90 transition-all flex items-center gap-2 group shadow-md"
                >
                  {t.cta1} <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://wa.me/6281399271717?text=Halo%20E17%20Course,%20saya%20tertarik%20dengan%20program%20pelatihan%20%26%20sertifikasi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 border-2 border-secondary text-secondary rounded-full font-extrabold text-xs sm:text-sm hover:bg-secondary hover:text-white transition-all shadow-sm"
                >
                  {t.cta2}
                </a>
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
