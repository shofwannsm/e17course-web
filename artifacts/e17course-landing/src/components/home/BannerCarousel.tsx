import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Bookmark, 
  ArrowUpRight,
  GraduationCap,
  Award,
  Building2,
  UserCheck,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const slides = {
  id: [
    {
      id: 1,
      badge: 'TERPOPULER | BATCH 2026',
      title: 'Bootcamp Intensif Siap Kerja',
      subtitle: 'PROYEK NYATA | DARI NOL HINGGA LULUS',
      desc: 'Kurikulum praktis berbasis industri — software dev, QA testing, dan data engineering.',
      cta: 'Jelajahi Bootcamp',
      href: '/program#program',
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop',
    },
    {
      id: 2,
      badge: 'SOLUSI PERUSAHAAN | IN-HOUSE',
      title: 'Corporate Training & Workforce Skilling',
      subtitle: 'CUSTOM MODUL | ONLINE & HYBRID',
      desc: 'Tingkatkan kompetensi tim IT perusahaan Anda dengan modul khusus dan instruktur praktisi senior.',
      cta: 'Jadwalkan Konsultasi Corporate',
      href: '/program#corporate',
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop',
    },
    {
      id: 3,
      badge: 'RESMI BNSP | 26 SKEMA',
      title: 'Program Sertifikasi Kompetensi BNSP 2026',
      subtitle: 'SKKNI KEMNAKER RI | ASESOR LISENSI LSP',
      desc: 'Validasi keahlianmu dengan sertifikat resmi berstandar nasional yang diakui secara luas oleh industri.',
      cta: 'Lihat Skema Sertifikasi',
      href: '/program#sertifikasi',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop',
    },
    {
      id: 4,
      badge: 'EKSLUSIF | MENTORING 1-ON-1',
      title: 'Info Kelas Privat & Mentoring Eksklusif',
      subtitle: 'FOKUS INTENSIF | JADWAL FLEKSIBEL',
      desc: 'Bimbingan belajar 1-on-1 bersama instruktur praktisi aktif untuk akselerasi skill dan persiapan karier IT.',
      cta: 'Konsultasi Kelas Privat',
      href: 'https://wa.me/6281399271717?text=Halo%20E17%20Course,%20saya%20tertarik%20dengan%20program%20Kelas%20Privat%20%26%20Mentoring.',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop',
    },
  ],
  en: [
    {
      id: 1,
      badge: 'MOST POPULAR | BATCH 2026',
      title: 'Intensive Job-Ready Bootcamp',
      subtitle: 'REAL PROJECTS | FROM ZERO TO GRADUATE',
      desc: 'Industry-based practical curriculum — software dev, QA testing, and data engineering.',
      cta: 'Explore Bootcamp',
      href: '/program#program',
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop',
    },
    {
      id: 2,
      badge: 'ENTERPRISE SOLUTION | IN-HOUSE',
      title: 'Corporate Training & Workforce Skilling',
      subtitle: 'CUSTOM MODULES | ONLINE & HYBRID',
      desc: 'Enhance your company IT team competency with tailored modules and expert practitioner instructors.',
      cta: 'Schedule Corporate Consultation',
      href: '/program#corporate',
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop',
    },
    {
      id: 3,
      badge: 'OFFICIAL BNSP | 26 SCHEMES',
      title: 'BNSP Competency Certification Program 2026',
      subtitle: 'SKKNI COMPLIANT | LSP LICENSED ASSESSORS',
      desc: 'Validate your expertise with official nationally recognised certificates widely trusted by industry.',
      cta: 'View Certification Schemes',
      href: '/program#sertifikasi',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop',
    },
    {
      id: 4,
      badge: 'EXCLUSIVE | 1-ON-1 MENTORING',
      title: 'Private Class Info & Exclusive Mentoring',
      subtitle: 'INTENSIVE FOCUS | FLEXIBLE SCHEDULE',
      desc: '1-on-1 private mentoring with active practitioner instructors for skill acceleration and IT career prep.',
      cta: 'Consult Private Class',
      href: 'https://wa.me/6281399271717?text=Halo%20E17%20Course,%20saya%20tertarik%20dengan%20program%20Kelas%20Privat%20%26%20Mentoring.',
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop',
    },
  ],
};

const quickLinks = {
  id: [
    { id: 'bootcamp', icon: GraduationCap, label: 'BOOTCAMP IT', sub: 'Pelatihan Siap Kerja', href: '/program#program' },
    { id: 'bnsp', icon: Award, label: 'SERTIFIKASI BNSP', sub: '26 Skema Resmi', href: '/program#sertifikasi' },
    { id: 'corporate', icon: Building2, label: 'CORPORATE TRAINING', sub: 'In-House Skilling', href: '/program#corporate' },
    { id: 'privat', icon: UserCheck, label: 'KELAS PRIVAT', sub: 'Mentoring 1-on-1', href: 'https://wa.me/6281399271717?text=Halo%20E17%20Course,%20saya%20tertarik%20dengan%20program%20Kelas%20Privat.' },
    { id: 'artikel', icon: BookOpen, label: 'ARTIKEL & BERITA', sub: 'Edukasi & Tren IT', href: '/artikel' },
    { id: 'whatsapp', icon: MessageSquare, label: 'KONSULTASI WA', sub: 'Respon Cepat', href: 'https://wa.me/6281399271717' },
  ],
  en: [
    { id: 'bootcamp', icon: GraduationCap, label: 'IT BOOTCAMP', sub: 'Job-Ready Training', href: '/program#program' },
    { id: 'bnsp', icon: Award, label: 'BNSP CERTIFICATION', sub: '26 Official Schemes', href: '/program#sertifikasi' },
    { id: 'corporate', icon: Building2, label: 'CORPORATE TRAINING', sub: 'In-House Skilling', href: '/program#corporate' },
    { id: 'privat', icon: UserCheck, label: 'PRIVATE CLASS', sub: '1-on-1 Mentoring', href: 'https://wa.me/6281399271717?text=Halo%20E17%20Course,%20saya%20tertarik%20dengan%20program%20Kelas%20Privat.' },
    { id: 'artikel', icon: BookOpen, label: 'ARTICLES & NEWS', sub: 'IT Education & Trends', href: '/artikel' },
    { id: 'whatsapp', icon: MessageSquare, label: 'WA CONSULTATION', sub: 'Fast Response', href: 'https://wa.me/6281399271717' },
  ],
};

export function BannerCarousel() {
  const { lang } = useLanguage();
  const currentSlides = slides[lang];
  const currentQuickLinks = quickLinks[lang];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false 
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect).on('reInit', onSelect);
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white pt-4 pb-12 overflow-hidden relative w-full">
      
      {/* Top Immersive Secondary Banner Area */}
      <div className="relative bg-secondary text-white pt-10 pb-28 sm:pb-36 overflow-hidden">
        
        {/* Ambient Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Top Header */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-6 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl md:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                Program Unggulan 
                <span className="text-primary text-[11px] font-bold px-3 py-0.5 rounded-full bg-primary/15 border border-primary/30 uppercase tracking-wider">
                  Pilihan Utama 2026
                </span>
              </h2>
              <p className="text-xs text-gray-400 mt-1">PT Edukasi Tujuh Belas • E17 Course</p>
            </div>
            <span className="text-xs font-semibold text-gray-400 hidden sm:inline-block">
              Diperbarui Mei 2026
            </span>
          </div>
        </div>

        {/* Full-Width Carousel Slider Container */}
        <div className="relative w-full z-10">
          
          {/* Embla Viewport */}
          <div className="overflow-hidden w-full py-2" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-3 sm:-ml-6">
              {currentSlides.map((s, idx) => {
                const isSelected = idx === selectedIndex;

                return (
                  <div 
                    key={s.id} 
                    className="flex-[0_0_90%] sm:flex-[0_0_82%] md:flex-[0_0_76%] lg:flex-[0_0_68%] xl:flex-[0_0_62%] min-w-0 pl-3 sm:pl-6 transition-all duration-500"
                  >
                    <div 
                      className={`relative h-[380px] sm:h-[440px] md:h-[480px] w-full rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl border ${
                        isSelected 
                          ? 'scale-100 opacity-100 border-white/20 shadow-primary/20' 
                          : 'scale-[0.93] opacity-40 filter brightness-75 border-transparent'
                      }`}
                    >
                      {/* Full-Bleed Image Background */}
                      <img 
                        src={s.img} 
                        alt={s.title} 
                        className="w-full h-full object-cover" 
                      />

                      {/* Secondary Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent opacity-95" />
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-transparent to-transparent opacity-80" />

                      {/* Floating Content Overlay */}
                      <div className="absolute inset-0 p-6 sm:p-10 md:p-14 flex flex-col justify-end items-start z-10">
                        
                        {/* Floating Action Buttons */}
                        <div className="flex items-center gap-3 mb-6">
                          <a
                            href={s.href}
                            className="w-11 h-11 rounded-full bg-primary text-secondary font-black shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                            title="Buka Program"
                          >
                            <Play size={18} className="fill-secondary translate-x-0.5" />
                          </a>
                          <button
                            className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
                            title="Simpan Program"
                          >
                            <Bookmark size={18} />
                          </button>
                        </div>

                        {/* Title */}
                        <motion.h3 
                          key={s.id + '-t-' + lang}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-3xl mb-3 tracking-tight"
                        >
                          {s.title}
                        </motion.h3>

                        {/* Subtitle & Desc */}
                        <div className="space-y-1 mb-6">
                          <span className="text-xs font-mono font-bold tracking-widest uppercase text-primary block">
                            {s.subtitle}
                          </span>
                          <p className="text-xs sm:text-sm text-gray-300 max-w-xl line-clamp-2 leading-relaxed">
                            {s.desc}
                          </p>
                        </div>

                        {/* CTA Link Button */}
                        <a
                          href={s.href}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold px-6 py-3 rounded-full bg-white/10 hover:bg-primary hover:text-secondary text-white border border-white/20 hover:border-primary transition-all duration-300 shadow-md group"
                        >
                          {s.cta} <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>

                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Left Arrow Navigation Button */}
          <button 
            onClick={scrollPrev} 
            className="absolute left-3 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-secondary font-black shadow-2xl border border-primary/50 flex items-center justify-center hover:scale-110 hover:shadow-primary/50 transition-all z-30"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} className="stroke-[3]" />
          </button>

          {/* Right Arrow Navigation Button */}
          <button 
            onClick={scrollNext} 
            className="absolute right-3 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-secondary font-black shadow-2xl border border-primary/50 flex items-center justify-center hover:scale-110 hover:shadow-primary/50 transition-all z-30"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} className="stroke-[3]" />
          </button>

        </div>

        {/* Organic Bottom Curve Wave Mask */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none -mb-[1px]">
          <svg
            className="relative block w-full h-16 sm:h-24 md:h-28 text-white"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,20 C360,100 1080,100 1440,20 L1440,120 L0,120 Z"
              fill="currentColor"
            />
            <path
              d="M0,16 C360,96 1080,96 1440,16"
              stroke="#D4A200"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>

      </div>

      {/* Horizontal Quick-Access Feature Links Row */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-6 sm:-mt-10 relative z-30">
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-2xl p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {currentQuickLinks.map((item, i) => {
            const Icon = item.icon;
            const isExternal = item.href.startsWith('http');

            return (
              <motion.a
                key={item.id}
                href={item.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-secondary hover:text-white hover:border-secondary hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 group-hover:bg-primary group-hover:border-primary flex items-center justify-center text-secondary group-hover:text-secondary mb-3 transition-colors shadow-sm">
                  <Icon size={22} className="group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xs sm:text-sm font-black tracking-tight leading-snug group-hover:text-white text-secondary transition-colors">
                  {item.label}
                </h3>
                <p className="text-[10px] text-gray-400 group-hover:text-gray-300 font-semibold mt-0.5 transition-colors flex items-center gap-0.5">
                  {item.sub} {isExternal && <ArrowUpRight size={10} />}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>

    </section>
  );
}
