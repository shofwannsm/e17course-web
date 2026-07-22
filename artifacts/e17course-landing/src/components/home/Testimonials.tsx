import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star, X, Youtube, ShieldCheck, Award, Users, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface StudentTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  program: string;
  quote: string;
  videoUrl: string;
  posterImage: string;
  youtubeId: string;
  stars: number;
}

const testimonialsData: { id: StudentTestimonial[]; en: StudentTestimonial[] } = {
  id: [
    {
      id: '1',
      name: 'Budi Santoso',
      role: 'Core Banking Specialist',
      company: 'Bank Swasta Nasional',
      program: 'Core Banking - Temenos 24',
      quote: 'Materi Temenos T24 dan pendampingan sertifikasi BNSP di E17 Course sangat aplikatif. Langsung relevan dengan kebutuhan perbankan modern!',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-42898-large.mp4',
      posterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      stars: 5,
    },
    {
      id: '2',
      name: 'Siti Rahmawati',
      role: 'Frontend Engineer',
      company: 'Digital Startup Jakarta',
      program: 'Frontend Development - React.js',
      quote: 'Dari nol belajar React.js hingga lulus sertifikasi BNSP. Instrukturnya ramah dan sangat sabar bimbing sampai paham!',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-working-on-a-laptop-42907-large.mp4',
      posterImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      stars: 5,
    },
    {
      id: '3',
      name: 'Andi Saputra',
      role: 'QA Automation Lead',
      company: 'Enterprise Financial Tech',
      program: 'Automation Testing - Katalon',
      quote: 'Katalon Automation nya super praktis. Proses testing tim QA kami sekarang jauh lebih cepat dan efisien.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-team-of-programmers-working-together-42900-large.mp4',
      posterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      stars: 5,
    },
    {
      id: '4',
      name: 'Reza Firmansyah',
      role: 'Backend Engineer',
      company: 'Tech Solutions Indonesia',
      program: 'Backend Development - Node.js',
      quote: 'Materi Node.js dan perancangan RESTful API sangat terstruktur. Sangat membantu menaikkan level karier backend saya.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-laptop-in-a-modern-office-42897-large.mp4',
      posterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      stars: 5,
    },
    {
      id: '5',
      name: 'Nina Kartika',
      role: 'Low-Code Developer',
      company: 'Enterprise System House',
      program: 'Outsystems Development',
      quote: 'Outsystems low-code platform membantu membangun aplikasi enterprise 3x lebih cepat. Sangat direkomendasikan!',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-her-laptop-in-a-modern-office-42902-large.mp4',
      posterImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      stars: 5,
    },
    {
      id: '6',
      name: 'Farhan Rizky',
      role: 'Manual QA Specialist',
      company: 'Logistics Digital Tech',
      program: 'Manual Testing',
      quote: 'Fondasi pengujian software manual diajarkan sangat teliti. Portofolio pengujian saya makin kredibel.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-holding-a-laptop-and-talking-to-a-colleague-42918-large.mp4',
      posterImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      stars: 5,
    },
    {
      id: '7',
      name: 'Dian Permata',
      role: 'Fullstack Developer',
      company: 'Digital Bank Indonesia',
      program: 'Fullstack Engineering',
      quote: 'Pendampingan sertifikasi BNSP dari asesor praktisi langsung mengubah cara kerja dan kepercayaan diri saya di industri.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-typing-on-a-laptop-42899-large.mp4',
      posterImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      stars: 5,
    },
  ],
  en: [
    {
      id: '1',
      name: 'Budi Santoso',
      role: 'Core Banking Specialist',
      company: 'National Private Bank',
      program: 'Core Banking - Temenos 24',
      quote: 'The Temenos T24 materials and BNSP mentoring at E17 Course were extremely practical. Immediately relevant for modern banking needs!',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-42898-large.mp4',
      posterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      stars: 5,
    },
    {
      id: '2',
      name: 'Siti Rahmawati',
      role: 'Frontend Engineer',
      company: 'Digital Startup Jakarta',
      program: 'Frontend Development - React.js',
      quote: 'From zero React.js to passing BNSP certification. The instructors were friendly and very patient until I understood!',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-working-on-a-laptop-42907-large.mp4',
      posterImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      stars: 5,
    },
    {
      id: '3',
      name: 'Andi Saputra',
      role: 'QA Automation Lead',
      company: 'Enterprise Financial Tech',
      program: 'Automation Testing - Katalon',
      quote: 'Katalon Automation was super practical. Our QA team testing process is now much faster and more efficient.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-team-of-programmers-working-together-42900-large.mp4',
      posterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      stars: 5,
    },
    {
      id: '4',
      name: 'Reza Firmansyah',
      role: 'Backend Engineer',
      company: 'Tech Solutions Indonesia',
      program: 'Backend Development - Node.js',
      quote: 'The Node.js and RESTful API design materials were very structured. Greatly helped level up my backend career.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-laptop-in-a-modern-office-42897-large.mp4',
      posterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      stars: 5,
    },
    {
      id: '5',
      name: 'Nina Kartika',
      role: 'Low-Code Developer',
      company: 'Enterprise System House',
      program: 'Outsystems Development',
      quote: 'The Outsystems low-code platform helps build enterprise apps 3x faster. Highly recommended!',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-her-laptop-in-a-modern-office-42902-large.mp4',
      posterImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      stars: 5,
    },
    {
      id: '6',
      name: 'Farhan Rizky',
      role: 'Manual QA Specialist',
      company: 'Logistics Digital Tech',
      program: 'Manual Testing',
      quote: 'The fundamentals of manual software testing were taught meticulously. My test portfolio is much more credible.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-holding-a-laptop-and-talking-to-a-colleague-42918-large.mp4',
      posterImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      stars: 5,
    },
    {
      id: '7',
      name: 'Dian Permata',
      role: 'Fullstack Developer',
      company: 'Digital Bank Indonesia',
      program: 'Fullstack Engineering',
      quote: 'BNSP certification mentoring directly from practitioner assessors transformed my work approach and confidence.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-typing-on-a-laptop-42899-large.mp4',
      posterImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
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
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

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

            // 3D Arc Wall Transformation Math (Flowblox Curves)
            // Center card (diff = 0) faces straight forward upright
            // Side cards angle inward (rotateY) and push back in Z-axis (translateZ)
            const rotateY = diff * -16; // Inward angle toward center
            const translateX = diff * 240; // Responsive horizontal separation
            const translateZ = -Math.abs(diff) * 110; // Push outer cards back to form 3D arc wall
            const scale = diff === 0 ? 1.06 : Math.max(0.72, 1 - Math.abs(diff) * 0.08);
            const opacity = Math.abs(diff) > 3 ? 0 : Math.max(0.4, 1 - Math.abs(diff) * 0.2);
            const zIndex = 50 - Math.abs(diff) * 10;
            const isActive = diff === 0;

            return (
              <motion.div
                key={item.id}
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
                {/* Autoplay Looping Video (Active center card plays video, inactive cards show crisp preview) */}
                <video
                  autoPlay={isActive}
                  loop
                  muted
                  playsInline
                  poster={item.posterImage}
                  className="w-full h-full object-cover filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                >
                  <source src={item.videoUrl} type="video/mp4" />
                  <img src={item.posterImage} alt={item.name} className="w-full h-full object-cover" />
                </video>

                {/* Dark Gradient Protection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Top Program Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-[10px] font-black text-secondary bg-primary px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {item.program.split('-')[0]}
                  </span>
                </div>

                {/* Play Button Center Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className={`w-14 h-14 rounded-full bg-white/95 text-secondary flex items-center justify-center shadow-2xl transition-all duration-300 ${
                    isActive ? 'scale-100 bg-primary text-secondary animate-pulse' : 'scale-90 opacity-80 group-hover:scale-100 group-hover:bg-primary'
                  }`}>
                    <Play size={24} className="fill-secondary translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Student Info & Quote */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left z-10 text-white">
                  <p className="text-xs text-gray-200 italic line-clamp-2 leading-relaxed mb-3 font-normal">
                    "{item.quote}"
                  </p>

                  <div className="pt-2.5 border-t border-white/15 flex items-center justify-between">
                    <div>
                      <h4 className="font-extrabold text-white text-xs sm:text-sm leading-snug">{item.name}</h4>
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
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-primary shadow-sm' : 'w-2.5 bg-secondary/20 hover:bg-secondary/40'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
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
              className="bg-[#121622] border border-white/15 rounded-3xl overflow-hidden w-full max-w-4xl shadow-2xl relative text-white"
            >
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2">
                  <Youtube className="text-red-500" size={20} />
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

              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                  title={`${activeVideo.name} Testimonial Video`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-5 bg-black/60 flex items-center justify-between text-xs text-gray-300">
                <div>
                  <p className="font-extrabold text-white text-sm">{activeVideo.name}</p>
                  <p className="text-gray-400">
                    {activeVideo.role} • {activeVideo.company}
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
