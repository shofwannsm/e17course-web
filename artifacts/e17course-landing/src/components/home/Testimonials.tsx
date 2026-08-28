import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star, X, Youtube, ShieldCheck, Award, Users, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface StudentTestimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  program: string;
  quote: string;
  videoUrl: string;
  posterImage?: string;
  fullVideoUrl: string;
  stars: number;
}

const testimonialsData: { id: StudentTestimonial[]; en: StudentTestimonial[] } = {
  id: [
    {
      id: '1',
      name: 'Fikri Aulia',
      role: 'Frontend Developer',
      program: 'Frontend Developer',
      quote: 'Course yang disediakan itu Sesuai dengan bidang yang saya minati',
      videoUrl: '/assets/testimonials/Priview Fikri Aulia-1.mp4',
      fullVideoUrl: '/assets/testimonials/fikri Aulia.mp4',
      stars: 5,
    },
    {
      id: '2',
      name: 'Fitra Rizki',
      role: 'Fullstack Developer',
      program: 'Fullstack Developer',
      quote: 'Mudah di Pahami',
      videoUrl: '/assets/testimonials/Priview Fitra Rizki-1.mp4',
      fullVideoUrl: '/assets/testimonials/Fitra Rizki-1.mp4',
      stars: 5,
    },
    {
      id: '3',
      name: 'Sela Nurjanah',
      role: 'QA Tester',
      program: 'QA Tester',
      quote: 'Banyak Pengalaman yang di peroleh saat Course',
      videoUrl: '/assets/testimonials/Priview Sela Nurjanah-1.mp4',
      fullVideoUrl: '/assets/testimonials/Sela Nurjanah-1.mp4',
      stars: 5,
    },
    {
      id: '4',
      name: 'Shana Nandya',
      role: 'QA Tester',
      program: 'QA Tester',
      quote: 'Biaya Terjangkau, Ngebantu banget untuk orang awam',
      videoUrl: '/assets/testimonials/Priview Shana Nandya-1.mp4',
      fullVideoUrl: '/assets/testimonials/Shana Nandya-1.mp4',
      stars: 5,
    },
    {
      id: '5',
      name: 'Fikri Aulia',
      role: 'Frontend Developer',
      program: 'Frontend Developer',
      quote: 'Course yang disediakan itu Sesuai dengan bidang yang saya minati',
      videoUrl: '/assets/testimonials/Priview Fikri Aulia-1.mp4',
      fullVideoUrl: '/assets/testimonials/fikri Aulia.mp4',
      stars: 5,
    },
    {
      id: '6',
      name: 'Fitra Rizki',
      role: 'Fullstack Developer',
      program: 'Fullstack Developer',
      quote: 'Mudah di Pahami',
      videoUrl: '/assets/testimonials/Priview Fitra Rizki-1.mp4',
      fullVideoUrl: '/assets/testimonials/Fitra Rizki-1.mp4',
      stars: 5,
    },
    {
      id: '7',
      name: 'Sela Nurjanah',
      role: 'QA Tester',
      program: 'QA Tester',
      quote: 'Banyak Pengalaman yang di peroleh saat Course',
      videoUrl: '/assets/testimonials/Priview Sela Nurjanah-1.mp4',
      fullVideoUrl: '/assets/testimonials/Sela Nurjanah-1.mp4',
      stars: 5,
    },
  ],
  en: [
    {
      id: '1',
      name: 'Fikri Aulia',
      role: 'Frontend Developer',
      program: 'Frontend Developer',
      quote: 'The courses provided are in line with my interests',
      videoUrl: '/assets/testimonials/Priview Fikri Aulia-1.mp4',
      fullVideoUrl: '/assets/testimonials/fikri Aulia.mp4',
      stars: 5,
    },
    {
      id: '2',
      name: 'Fitra Rizki',
      role: 'Fullstack Developer',
      program: 'Fullstack Developer',
      quote: 'Easy to understand',
      videoUrl: '/assets/testimonials/Priview Fitra Rizki-1.mp4',
      fullVideoUrl: '/assets/testimonials/Fitra Rizki-1.mp4',
      stars: 5,
    },
    {
      id: '3',
      name: 'Sela Nurjanah',
      role: 'QA Tester',
      program: 'QA Tester',
      quote: 'Gained a lot of experience during the course',
      videoUrl: '/assets/testimonials/Priview Sela Nurjanah-1.mp4',
      fullVideoUrl: '/assets/testimonials/Sela Nurjanah-1.mp4',
      stars: 5,
    },
    {
      id: '4',
      name: 'Shana Nandya',
      role: 'QA Tester',
      program: 'QA Tester',
      quote: 'Affordable, very helpful for beginners',
      videoUrl: '/assets/testimonials/Priview Shana Nandya-1.mp4',
      fullVideoUrl: '/assets/testimonials/Shana Nandya-1.mp4',
      stars: 5,
    },
    {
      id: '5',
      name: 'Fikri Aulia',
      role: 'Frontend Developer',
      program: 'Frontend Developer',
      quote: 'The courses provided are in line with my interests',
      videoUrl: '/assets/testimonials/Priview Fikri Aulia-1.mp4',
      fullVideoUrl: '/assets/testimonials/fikri Aulia.mp4',
      stars: 5,
    },
    {
      id: '6',
      name: 'Fitra Rizki',
      role: 'Fullstack Developer',
      program: 'Fullstack Developer',
      quote: 'Easy to understand',
      videoUrl: '/assets/testimonials/Priview Fitra Rizki-1.mp4',
      fullVideoUrl: '/assets/testimonials/Fitra Rizki-1.mp4',
      stars: 5,
    },
    {
      id: '7',
      name: 'Sela Nurjanah',
      role: 'QA Tester',
      program: 'QA Tester',
      quote: 'Gained a lot of experience during the course',
      videoUrl: '/assets/testimonials/Priview Sela Nurjanah-1.mp4',
      fullVideoUrl: '/assets/testimonials/Sela Nurjanah-1.mp4',
      stars: 5,
    },
  ],
};

const T = {
  id: {
    heading: 'Building Your Future, Together.',
    subtitle: 'Ribuan alumni dan profesional IT telah bertransformasi bersama kami. Geser kartu untuk melihat cerita alumni.',
    playVideo: 'Putar Testimoni Video',
    close: 'Tutup Video',
    features: [
      {
        icon: ShieldCheck,
        title: 'Career Focused Learning',
        desc: 'Pembelajaran berbasis studi kasus nyata dan proyek industri yang langsung dapat diterapkan di tempat kerja.',
      },
      {
        icon: Award,
        title: 'Mentorship from Industry Experts',
        desc: 'Bimbingan intensif dari instruktur praktisi senior dan asesor berlisensi resmi BNSP.',
      },
      {
        icon: Users,
        title: 'Trusted by Hundreds of Students',
        desc: 'Telah membantu peserta dari berbagai latar belakang meraih sertifikasi kompetensi dan akselerasi karier.',
      },
    ],
  },
  en: {
    heading: 'Building Your Future, Together.',
    subtitle: 'Thousands of alumni and IT professionals have transformed with us. Slide cards to explore alumni stories.',
    playVideo: 'Watch Video Testimonial',
    close: 'Close Video',
    features: [
      {
        icon: ShieldCheck,
        title: 'Career Focused Learning',
        desc: 'Real case-study and industry project-based learning immediately applicable in professional environments.',
      },
      {
        icon: Award,
        title: 'Mentorship from Industry Experts',
        desc: 'Intensive guidance from senior practitioner instructors and official licensed BNSP assessors.',
      },
      {
        icon: Users,
        title: 'Trusted by Hundreds of Students',
        desc: 'Empowered students from diverse backgrounds to achieve official competency certifications and career growth.',
      },
    ],
  },
};

const TestimonialCard = ({ item, isActive, diff, setActiveIndex, index, setActiveVideo, activeVideo }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play if it's the center card AND no modal is open
  const shouldPlay = isActive && !activeVideo;

  useEffect(() => {
    if (shouldPlay) {
      const playPromise = videoRef.current?.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      videoRef.current?.pause();
    }
  }, [shouldPlay]);

  const rotateY = diff * -16;
  const translateX = diff * 240;
  const translateZ = -Math.abs(diff) * 110;
  const scale = diff === 0 ? 1.06 : Math.max(0.72, 1 - Math.abs(diff) * 0.08);
  const opacity = Math.abs(diff) > 3 ? 0 : Math.max(0.4, 1 - Math.abs(diff) * 0.2);
  const zIndex = 50 - Math.abs(diff) * 10;

  return (
    <motion.div
      onClick={() => {
        if (isActive) {
          setActiveVideo(item);
        } else {
          setActiveIndex(index);
        }
      }}
      animate={{
        x: translateX,
        z: translateZ,
        rotateY,
        scale,
        opacity,
        zIndex,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 24,
        mass: 0.8,
      }}
      style={{
        position: 'absolute',
        transformStyle: 'preserve-3d',
      }}
      className={`w-[210px] sm:w-[260px] md:w-[290px] h-[360px] sm:h-[430px] md:h-[470px] rounded-[32px] overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 border ${
        isActive 
          ? 'border-primary ring-4 ring-primary/20 shadow-primary/30' 
          : 'border-secondary/15 hover:border-secondary/40'
      } bg-black group`}
    >
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="w-full h-full object-cover filter brightness-95 group-hover:brightness-100 transition-all duration-500"
      >
        <source src={item.videoUrl} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-95 group-hover:opacity-100 transition-opacity" />

      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <span className="text-[10px] font-black text-secondary bg-primary px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
          {item.program.split('-')[0]}
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className={`w-14 h-14 rounded-full bg-white/95 text-secondary flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isActive ? 'scale-100 bg-primary text-secondary animate-pulse' : 'scale-90 opacity-80 group-hover:scale-100 group-hover:bg-primary'
        }`}>
          <Play size={24} className="fill-secondary translate-x-0.5" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 text-left z-10 text-white">
        <p className="text-xs text-gray-200 italic line-clamp-2 leading-relaxed mb-3 font-normal">
          "{item.quote}"
        </p>

        <div className="pt-2.5 border-t border-white/15 flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-white text-xs sm:text-sm leading-snug">{item.name}</h3>
            <p className="text-[11px] text-gray-300 font-medium truncate mt-0.5">{item.role}</p>
          </div>

          <div className="flex items-center gap-0.5 text-primary">
            {[...Array(item.stars)].map((_, si) => (
              <Star key={si} size={11} className="fill-primary text-primary" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function Testimonials() {
  const { lang } = useLanguage();
  const t = T[lang];
  const items = testimonialsData[lang];

  const [activeIndex, setActiveIndex] = useState(3); // Start with center item (index 3 out of 7)
  const [activeVideo, setActiveVideo] = useState<StudentTestimonial | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Auto sliding animation
  useEffect(() => {
    // Pause sliding if hover pauses it OR if the video modal is open
    if (!isAutoPlaying || activeVideo !== null) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, activeVideo, nextSlide]);

  return (
    <section className="py-24 sm:py-32 bg-[#F8F5EE] text-secondary relative overflow-hidden w-full">
      
      {/* Centered Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/5 border border-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            <span>Alumni Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-secondary tracking-tight leading-[1.1] mb-6 font-sans"
          >
            {t.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </div>

      {/* FULL-WIDTH EDGE-TO-EDGE 3D CURVED ARC WALL SLIDER (Flowblox Style) */}
      <div 
        className="relative w-full py-8 mb-16 overflow-hidden select-none"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div
          className="relative flex items-center justify-center min-h-[460px] sm:min-h-[520px] w-full"
          style={{ perspective: '1400px' }}
        >
          {items.map((item, index) => {
            // Calculate shortest circular difference from activeIndex
            let diff = index - activeIndex;
            const half = Math.floor(items.length / 2);
            if (diff > half) diff -= items.length;
            if (diff < -half) diff += items.length;

            const isActive = diff === 0;

            return (
              <TestimonialCard
                key={index}
                item={item}
                index={index}
                isActive={isActive}
                diff={diff}
                setActiveIndex={setActiveIndex}
                setActiveVideo={setActiveVideo}
                activeVideo={activeVideo}
              />
            );
          })}
        </div>

        {/* Navigation Arrows & Pagination Dots */}
        <div className="flex items-center justify-center gap-4 mt-6 z-30 relative">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white text-secondary border border-secondary/15 shadow-md flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 active:scale-95"
            aria-label="Previous Alumni"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="p-4 -m-4 cursor-pointer focus:outline-none"
                aria-label={`Slide ${idx + 1}`}
              >
                <div 
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-8 bg-primary shadow-sm' : 'w-2.5 bg-secondary/20 hover:bg-secondary/40'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white text-secondary border border-secondary/15 shadow-md flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 active:scale-95"
            aria-label="Next Alumni"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* THREE MINIMAL FEATURE HIGHLIGHTS */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-secondary/10">
          {t.features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/60 border border-secondary/5 shadow-2xs hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary/5 border border-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <Icon size={22} className="text-secondary" />
                </div>

                <h3 className="text-base font-extrabold text-secondary tracking-tight mb-2">
                  {f.title}
                </h3>

                <p className="text-xs sm:text-sm text-secondary/65 leading-relaxed font-medium">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FULL SOUND YOUTUBE LIGHTBOX VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#121622] border border-white/15 rounded-3xl overflow-hidden w-full max-w-[340px] sm:max-w-[420px] shadow-2xl relative text-white flex flex-col max-h-[95vh]"
            >
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2">
                  <Play className="fill-white text-white" size={16} />
                  <h3 className="font-black text-white text-sm sm:text-base">
                    {activeVideo.name} — {activeVideo.program}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
                  aria-label={t.close}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative aspect-[9/16] w-full bg-black shrink min-h-0 overflow-hidden">
                <video
                  src={activeVideo.fullVideoUrl}
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

              <div className="p-5 bg-black/60 flex items-center justify-between text-xs text-gray-300">
                <div>
                  <p className="font-extrabold text-white text-sm">{activeVideo.name}</p>
                  <p className="text-gray-500">
                    {activeVideo.role}{activeVideo.company ? ` • ${activeVideo.company}` : ''}
                  </p>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="px-5 py-2 rounded-full bg-primary text-secondary font-extrabold hover:bg-primary/90 transition-all"
                >
                  {t.close}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
