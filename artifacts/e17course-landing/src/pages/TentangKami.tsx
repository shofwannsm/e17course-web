import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { Cpu, Star, Users, Hammer, Eye, Target, CheckCircle2, ArrowRight, GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const T = {
  id: {
    eyebrow:'Tentang Kami',
    h1a:'Dari Mana Pun Kamu Memulai,', h1b:'Kami Bantu Kamu Bertumbuh!',
    subhero:'Mengenal lebih dekat perjalanan, visi, dan nilai yang menjadi fondasi E17 Course dalam mencetak talenta digital Indonesia.',
    stats:[{v:'10K+',l:'Alumni Lulus'},{v:'98%',l:'Terserap Industri'},{v:'50+',l:'Hiring Partners'},{v:'4',l:'Lini Program'}],
    companyEyebrow:'Tentang Perusahaan',
    story:[
      'Perkembangan teknologi terus mengubah cara dunia bekerja. Di sisi lain, kebutuhan industri terhadap talenta yang kompeten semakin meningkat. Tantangannya, tidak semua individu memiliki akses terhadap pembelajaran yang relevan untuk membangun keterampilan yang dibutuhkan dunia kerja saat ini.',
      'Berangkat dari tantangan tersebut, <b>E17 Course</b> hadir sebagai partner pengembangan talenta yang membantu setiap individu membangun kompetensi, meningkatkan kesiapan kerja, dan terus bertumbuh mengikuti perkembangan industri.',
      'Di bawah naungan <b>PT Edukasi Tujuh Belas</b>, kami menghadirkan ekosistem pembelajaran yang dirancang sesuai kebutuhan industri.',
      'Kami percaya bahwa setiap orang memiliki kesempatan yang sama untuk bertumbuh. Karena itu, E17 Course terbuka bagi semua kalangan yang ingin meningkatkan kompetensi dan memperluas peluang karier.',
    ],
    servicesLabel:'Lini Layanan Kami',
    services:['Bootcamp & Training','Corporate Training','Sertifikasi BNSP','Publikasi Buku Ber-ISBN'],
    targetLabel:'Siapa yang Kami Layani?',
    targets:['Siswa SMA/SMK sederajat','Mahasiswa aktif','Fresh graduate','Profesional aktif','Career switcher'],
    quote:'Setiap orang berhak atas pembelajaran berkualitas yang membuka pintu karier lebih lebar.',
    quoteAttr:'— Fondasi E17 Course',
    visionEyebrow:'Visi',
    visionText:'Menjadi penyedia pelatihan teknologi <b>hard skill</b> dan <b>soft skill</b> terdepan bagi pemula dan profesional di Indonesia.',
    missionEyebrow:'Misi',
    mission:['Menyediakan pelatihan berkualitas tinggi berbasis tren industri.','Meningkatkan employability dan daya saing peserta.','Menggunakan pendekatan inovatif dalam metode pembelajaran.'],
    valuesEyebrow:'Nilai Perusahaan', valuesTitle:'Kami Percaya pada', valuesTitleAccent:'TECH',
    valuesDesc:'Empat nilai inti yang menjadi fondasi cara kami bekerja, mengajar, dan berkembang bersama.',
    values:[
      {letter:'T',name:'Tech-Driven',   desc:'Materi dan metode pelatihan kami selalu mengikuti perkembangan teknologi dan kebutuhan industri terkini.'},
      {letter:'E',name:'Excellence',    desc:'Kami selalu berusaha menghadirkan kualitas pembelajaran terbaik di setiap program yang kami jalankan.'},
      {letter:'C',name:'Collaborative', desc:'Tumbuh bersama peserta, mentor, dan mitra industri yang saling mendukung dalam satu ekosistem belajar.'},
      {letter:'H',name:'Hands-On',      desc:'Praktik langsung dan proyek nyata menjadi cara utama kami mengajar — bukan sekadar teori.'},
    ],
    ctaTitle:'Siap Bertumbuh Bersama Kami?',
    ctaDesc:'Bergabung dengan ribuan alumni yang sudah membuktikan bahwa belajar di E17 Course membuka peluang karier yang lebih luas.',
    cta1:'Mulai Belajar Sekarang', cta2:'Jadwalkan Konsultasi',
  },
  en: {
    eyebrow:'About Us',
    h1a:'No Matter Where You Start,', h1b:'We Help You Grow!',
    subhero:'Get to know the journey, vision, and values that form the foundation of E17 Course in shaping Indonesia\'s digital talent.',
    stats:[{v:'10K+',l:'Graduates'},{v:'98%',l:'Industry Absorbed'},{v:'50+',l:'Hiring Partners'},{v:'4',l:'Program Lines'}],
    companyEyebrow:'About the Company',
    story:[
      'Technology development continues to change the way the world works. Meanwhile, the industry\'s need for competent talent continues to grow. The challenge is that not everyone has access to relevant learning to build the skills needed in today\'s workplace.',
      'In response to this challenge, <b>E17 Course</b> was founded as a talent development partner that helps every individual build competency, increase work readiness, and continuously grow alongside industry developments.',
      'Under the umbrella of <b>PT Edukasi Tujuh Belas</b>, we offer a learning ecosystem designed to meet industry needs.',
      'We believe everyone has an equal opportunity to grow. That is why E17 Course is open to anyone who wants to improve their competency and expand their career opportunities.',
    ],
    servicesLabel:'Our Service Lines',
    services:['Bootcamp & Training','Corporate Training','BNSP Certification','ISBN Book Publication'],
    targetLabel:'Who Do We Serve?',
    targets:['Senior high school students','Active university students','Fresh graduates','Active professionals','Career switchers'],
    quote:'Everyone deserves quality learning that opens wider doors to their career.',
    quoteAttr:'— E17 Course Foundation',
    visionEyebrow:'Vision',
    visionText:'To become the leading provider of <b>hard skill</b> and <b>soft skill</b> technology training for beginners and professionals in Indonesia.',
    missionEyebrow:'Mission',
    mission:['Provide high-quality training based on industry trends.','Improve employability and competitiveness of participants.','Use innovative approaches in teaching methods.'],
    valuesEyebrow:'Company Values', valuesTitle:'We Believe in', valuesTitleAccent:'TECH',
    valuesDesc:'Four core values that form the foundation of how we work, teach, and grow together.',
    values:[
      {letter:'T',name:'Tech-Driven',   desc:'Our training materials and methods always follow the latest technology developments and current industry needs.'},
      {letter:'E',name:'Excellence',    desc:'We always strive to deliver the best quality learning experience in every program we run.'},
      {letter:'C',name:'Collaborative', desc:'Growing together with participants, mentors, and industry partners who support each other in one learning ecosystem.'},
      {letter:'H',name:'Hands-On',      desc:'Direct practice and real projects are our primary method of teaching — not just theory.'},
    ],
    ctaTitle:'Ready to Grow With Us?',
    ctaDesc:'Join thousands of alumni who have proven that learning at E17 Course opens wider career opportunities.',
    cta1:'Start Learning Now', cta2:'Schedule a Consultation',
  },
};

const valueIcons = [Cpu, Star, Users, Hammer];
const valueBgs   = ['bg-primary','bg-secondary','bg-accent','bg-primary'];
const serviceIcons = [GraduationCap, Briefcase, Award, BookOpen];

export default function TentangKami() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <Navbar />
      <main className="pt-[72px]">

        {/* HERO */}
        <section className="relative bg-secondary overflow-hidden py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage:'radial-gradient(circle, rgba(212,162,0,0.18) 1.5px, transparent 1.5px)', backgroundSize:'32px 32px' }} />
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} className="max-w-2xl">
              <span className="inline-block text-[11px] font-extrabold tracking-widest text-primary uppercase mb-5">{t.eyebrow}</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-5">{t.h1a}{' '}<span className="text-primary">{t.h1b}</span></h1>
              <p className="text-white/55 text-base leading-relaxed max-w-xl">{t.subhero}</p>
            </motion.div>
            <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.15 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
              {t.stats.map(s => (
                <div key={s.l} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-center">
                  <p className="text-3xl font-extrabold text-primary">{s.v}</p>
                  <p className="text-white/50 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
                <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase mb-4 block">{t.companyEyebrow}</span>
                <div className="flex flex-col gap-5 text-secondary/65 text-sm leading-relaxed">
                  {t.story.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/<b>/g,'<strong class="text-secondary">').replace(/<\/b>/g,'</strong>') }} />)}
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  <p className="text-xs font-bold text-secondary/40 uppercase tracking-widest">{t.servicesLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.services.map((l, i) => {
                      const Icon = serviceIcons[i];
                      return <div key={l} className="flex items-center gap-2 bg-amber-50 border border-amber-100 px-3 py-2 rounded-full"><Icon size={13} className="text-primary"/><span className="text-xs font-semibold text-secondary">{l}</span></div>;
                    })}
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} className="flex flex-col gap-6">
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
                  <p className="text-xs font-extrabold text-secondary/40 uppercase tracking-widest mb-5">{t.targetLabel}</p>
                  <div className="flex flex-col gap-3">
                    {t.targets.map(s => (
                      <div key={s} className="flex items-center gap-3"><CheckCircle2 size={16} className="text-primary shrink-0"/><span className="text-sm text-secondary font-medium">{s}</span></div>
                    ))}
                  </div>
                </div>
                <div className="bg-secondary rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl"/>
                  <p className="text-5xl text-primary font-serif leading-none mb-4">"</p>
                  <p className="text-white/80 text-base leading-relaxed italic relative">{t.quote}</p>
                  <p className="text-primary text-xs font-bold mt-4 relative">{t.quoteAttr}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute right-0 top-0 w-96 h-96 opacity-[0.04]" style={{ backgroundImage:'radial-gradient(circle, #D4A200 1.5px, transparent 1.5px)', backgroundSize:'28px 28px' }} />
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-10">
              <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="bg-white border border-gray-100 rounded-3xl p-10 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"><Eye size={22} className="text-primary"/></div>
                <h2 className="text-2xl font-extrabold text-secondary mb-4">{t.visionEyebrow}</h2>
                <p className="text-secondary/65 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: t.visionText.replace(/<b>/g,'<strong class="text-secondary">').replace(/<\/b>/g,'</strong>') }} />
                <span className="absolute -bottom-6 -right-4 text-[9rem] font-extrabold text-secondary/[0.04] leading-none select-none">V</span>
              </motion.div>
              <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }} className="bg-secondary rounded-3xl p-10 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6"><Target size={22} className="text-primary"/></div>
                <h2 className="text-2xl font-extrabold text-white mb-6">{t.missionEyebrow}</h2>
                <div className="flex flex-col gap-4">
                  {t.mission.map((m, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-secondary text-xs font-extrabold shrink-0 mt-0.5">{i+1}</span>
                      <p className="text-white/70 text-sm leading-relaxed">{m}</p>
                    </div>
                  ))}
                </div>
                <span className="absolute -bottom-6 -right-4 text-[9rem] font-extrabold text-white/[0.04] leading-none select-none">M</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
              <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase mb-3 block">{t.valuesEyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">{t.valuesTitle} <span className="text-primary">{t.valuesTitleAccent}</span></h2>
              <p className="mt-2 text-secondary/50 text-sm max-w-md mx-auto">{t.valuesDesc}</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.values.map((v, i) => {
                const Icon = valueIcons[i];
                const accentColor = valueBgs[i] === 'bg-primary' ? 'text-primary' : valueBgs[i] === 'bg-secondary' ? 'text-secondary' : 'text-accent';
                const iconBg = valueBgs[i] === 'bg-primary' ? 'bg-primary/10' : valueBgs[i] === 'bg-secondary' ? 'bg-secondary/10' : 'bg-accent/10';
                return (
                  <motion.div key={v.letter} initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }} className="relative rounded-3xl overflow-hidden group">
                    <div className={`h-1.5 w-full ${valueBgs[i]}`} />
                    <div className="bg-white border border-gray-100 rounded-b-3xl p-7 h-full flex flex-col gap-4 hover:shadow-lg transition-all">
                      <div className="flex items-center justify-between">
                        <span className={`text-5xl font-extrabold leading-none ${accentColor}`}>{v.letter}</span>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}><Icon size={18} className={accentColor}/></div>
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

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 leading-tight">{t.ctaTitle}</h2>
              <p className="text-secondary/60 text-sm leading-relaxed mb-8 max-w-md mx-auto">{t.ctaDesc}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-7 py-3.5 bg-secondary text-white rounded-full font-bold text-sm hover:bg-secondary/90 transition-all flex items-center gap-2 group">
                  {t.cta1}<ArrowRight size={15} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button className="px-7 py-3.5 border-2 border-secondary text-secondary rounded-full font-bold text-sm hover:bg-secondary hover:text-white transition-all">{t.cta2}</button>
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
