import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const slides = [
  {
    id: 1,
    badge: 'Terpopuler',
    title: 'Training & Bootcamp',
    desc: 'Kurikulum intensif berbasis proyek nyata. Dirancang untuk mencetak developer siap kerja dalam waktu singkat.',
    cta: 'Daftar Bootcamp',
    accent: '#C8940A',
    bg: 'from-[#C8940A] to-[#1C244B]',
    lightBg: 'bg-[#FDF8E1]',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    badge: 'Enterprise',
    title: 'Corporate Training',
    desc: 'Tingkatkan kapasitas tim IT perusahaan dengan in-house training yang disesuaikan kebutuhan teknologi terkini.',
    cta: 'Jadwalkan Training',
    accent: '#467FF7',
    bg: 'from-[#467FF7] to-[#1C244B]',
    lightBg: 'bg-[#EEF4FF]',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    badge: 'Resmi BNSP',
    title: 'Sertifikasi BNSP',
    desc: 'Dapatkan pengakuan nasional atas kompetensi IT Anda dengan sertifikasi resmi dari Badan Nasional Sertifikasi Profesi.',
    cta: 'Info Sertifikasi',
    accent: '#22b57c',
    bg: 'from-[#22b57c] to-[#1a8f60]',
    lightBg: 'bg-[#EDFAF4]',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    badge: 'Privat',
    title: 'Info Kelas Privat',
    desc: 'Belajar lebih fokus dan intensif secara one-on-one dengan mentor berpengalaman. Jadwal & materi fleksibel.',
    cta: 'Tanya Kelas Privat',
    accent: '#9b59b6',
    bg: 'from-[#9b59b6] to-[#6c3483]',
    lightBg: 'bg-[#F7EEFB]',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
  },
];

export function BannerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    const interval = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  const slide = slides[selectedIndex];

  return (
    <section className="py-16 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {slides.map((s) => (
                <div key={s.id} className="flex-[0_0_100%] min-w-0">
                  <div className="relative h-[380px] md:h-[440px] w-full bg-white flex items-center">
                    {/* Right image panel */}
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block overflow-hidden">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-full object-cover"
                        style={{ filter: 'brightness(0.85)' }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-l ${s.bg} opacity-60`} />
                    </div>

                    {/* Left content */}
                    <div className="relative z-10 px-8 md:px-16 w-full md:w-1/2">
                      <span
                        className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                        style={{ backgroundColor: `${s.accent}18`, color: s.accent }}
                      >
                        {s.badge}
                      </span>
                      <motion.h2
                        key={s.id + '-title'}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 leading-tight"
                      >
                        {s.title}
                      </motion.h2>
                      <motion.p
                        key={s.id + '-desc'}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.08 }}
                        className="text-secondary/60 text-base md:text-lg mb-8 leading-relaxed max-w-sm"
                      >
                        {s.desc}
                      </motion.p>
                      <motion.button
                        key={s.id + '-btn'}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.16 }}
                        className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 group"
                        style={{ backgroundColor: s.accent }}
                      >
                        {s.cta}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md text-secondary p-2.5 rounded-full transition-all z-20 border border-gray-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md text-secondary p-2.5 rounded-full transition-all z-20 border border-gray-100"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className="h-2 rounded-full transition-all"
                style={{
                  width: i === selectedIndex ? 28 : 8,
                  backgroundColor: i === selectedIndex ? slide.accent : '#D1D5DB',
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
