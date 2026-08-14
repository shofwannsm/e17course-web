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
import carouselBootcamp from '@assets/e17brand/carousel-bootcamp.png';
import carouselBnsp from '@assets/e17brand/baner_BNSP_v2.png';
import carouselCorporate from '@assets/e17brand/carousel-corporate.png';
import carouselPrivat from '@assets/e17brand/carousel-privat.png';

const slides = {
  id: [
    {
      id: 1,
      isFullImage: true,
      img: carouselBootcamp,
      bgColor: '#FFBF00',
      title: 'Bootcamp Tech Avengers',
      href: '/program#program',
    },
    {
      id: 2,
      isFullImage: true,
      img: carouselBnsp,
      bgColor: '#FFBC06',
      title: 'Sertifikasi BNSP',
      href: '/program#sertifikasi',
    },
    {
      id: 3,
      isFullImage: true,
      img: carouselCorporate,
      bgColor: '#FFE3A8',
      title: 'Corporate Training',
      href: '/program#corporate',
    },
    {
      id: 4,
      isFullImage: true,
      img: carouselPrivat,
      bgColor: '#FFFFFF',
      title: 'Kelas IT Eksklusif',
      href: 'https://wa.me/6281399271717?text=Halo%20E17%20Course,%20saya%20tertarik%20dengan%20program%20Kelas%20Privat.',
    },
  ],
  en: [
    {
      id: 1,
      isFullImage: true,
      img: carouselBootcamp,
      bgColor: '#FFBF00',
      title: 'Bootcamp Tech Avengers',
      href: '/program#program',
    },
    {
      id: 2,
      isFullImage: true,
      img: carouselBnsp,
      bgColor: '#FFBC06',
      title: 'BNSP Certification',
      href: '/program#sertifikasi',
    },
    {
      id: 3,
      isFullImage: true,
      img: carouselCorporate,
      bgColor: '#FFE3A8',
      title: 'Corporate Training',
      href: '/program#corporate',
    },
    {
      id: 4,
      isFullImage: true,
      img: carouselPrivat,
      bgColor: '#FFFFFF',
      title: 'Exclusive IT Class',
      href: 'https://wa.me/6281399271717?text=Halo%20E17%20Course,%20saya%20tertarik%20dengan%20program%20Kelas%20Privat.',
    },
  ],
};

const quickLinks = {
  id: [
    { id: 'bootcamp', icon: GraduationCap, label: 'BOOTCAMP', sub: 'Pelatihan Siap Kerja', href: '/program#program' },
    { id: 'bnsp', icon: Award, label: 'SERTIFIKASI BNSP', sub: '26 Skema Resmi', href: '/program#sertifikasi' },
    { id: 'corporate', icon: Building2, label: 'CORPORATE TRAINING', sub: 'In-House Skilling', href: '/program#corporate' },
    { id: 'privat', icon: UserCheck, label: 'KELAS PRIVAT', sub: 'Mentoring 1-on-1', href: 'https://wa.me/6281399271717?text=Halo%20E17%20Course,%20saya%20tertarik%20dengan%20program%20Kelas%20Privat.' },
    { id: 'artikel', icon: BookOpen, label: 'ARTIKEL & BERITA', sub: 'Edukasi & Tren IT', href: '/artikel' },
  ],
  en: [
    { id: 'bootcamp', icon: GraduationCap, label: 'IT BOOTCAMP', sub: 'Job-Ready Training', href: '/program#program' },
    { id: 'bnsp', icon: Award, label: 'BNSP CERTIFICATION', sub: '26 Official Schemes', href: '/program#sertifikasi' },
    { id: 'corporate', icon: Building2, label: 'CORPORATE TRAINING', sub: 'In-House Skilling', href: '/program#corporate' },
    { id: 'privat', icon: UserCheck, label: 'PRIVATE CLASS', sub: '1-on-1 Mentoring', href: 'https://wa.me/6281399271717?text=Halo%20E17%20Course,%20saya%20tertarik%20dengan%20program%20Kelas%20Privat.' },
    { id: 'artikel', icon: BookOpen, label: 'ARTICLES & NEWS', sub: 'IT Education & Trends', href: '/artikel' },
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
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect).on('reInit', onSelect);

    // Pause auto-sliding on hover
    if (isHovered) return;

    const interval = setInterval(() => emblaApi.scrollNext(), 8000);
    return () => clearInterval(interval);
  }, [emblaApi, onSelect, isHovered]);

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white pt-4 pb-12 overflow-hidden relative w-full"
    >

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
            <div className="flex touch-pan-y">
              {currentSlides.map((s, idx) => {
                const isSelected = idx === selectedIndex;

                return (
                  <div
                    key={s.id}
                    className="flex-[0_0_100%] min-w-0 px-4 md:px-8"
                  >
                    <a
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="relative aspect-[1024/381] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 block cursor-pointer hover:shadow-[0_8px_40px_rgba(255,191,0,0.3)] transition-shadow duration-300"
                    >
                      {/* Full-Bleed Image Background */}
                      <div
                        className="w-full h-full flex items-center justify-center relative select-none"
                        style={{ backgroundColor: s.bgColor || '#0d1a30' }}
                      >
                        <img
                          src={s.img}
                          alt={s.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                    </a>
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
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-2xl p-4 sm:p-6 grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
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
                className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-secondary hover:text-white hover:border-secondary hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                  i === 4 ? 'col-span-2 lg:col-span-1 w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)] lg:w-full mx-auto lg:mx-0' : ''
                }`}
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
