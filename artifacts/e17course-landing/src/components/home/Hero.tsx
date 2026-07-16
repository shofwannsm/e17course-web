import { motion } from 'framer-motion';
import { ChevronRight, PlayCircle, Star, Users, CheckCircle2 } from 'lucide-react';
import logo from '@assets/e17brand/logo.png';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-white"
    >
      {/* Soft background blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="max-w-xl z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 text-accent font-semibold text-xs mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Pendaftaran Gelombang 4 Dibuka
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-secondary"
            >
              Bangun Karier IT,{' '}
              <span className="relative inline-block">
                Dimulai dari Sini!
                <svg
                  className="absolute w-full -bottom-1 left-0 text-accent/30"
                  viewBox="0 0 300 9" fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6.73C70 1.84 194 -1.82 298 6.73" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-secondary/60 text-lg mb-8 leading-relaxed"
            >
              Tingkatkan keahlianmu dengan kurikulum industri terkini dan dapatkan{' '}
              <strong className="text-secondary font-bold">Sertifikasi Resmi BNSP</strong> untuk memvalidasi kompetensimu di dunia kerja profesional.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-10"
            >
              <button className="w-full sm:w-auto bg-primary text-secondary font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all group active:scale-95">
                Jelajahi Program
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white border border-gray-200 shadow-sm text-secondary font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:border-accent/30 hover:bg-gray-50 transition-all">
                <PlayCircle size={20} className="text-accent" />
                Lihat Video
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {['bg-yellow-500', 'bg-amber-700', 'bg-yellow-600', 'bg-amber-500'].map((color, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full border-2 border-white ${color} flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                  >
                    {['BS', 'SR', 'AP', 'DM'][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-0.5 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                </div>
                <p className="text-secondary/60 mt-0.5">
                  <strong className="text-secondary">4.9/5</strong> dari 2,000+ alumni
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden md:block"
          >
            {/* Soft glow behind card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gray-50 rounded-full blur-2xl -z-10" />

            {/* Browser-style card */}
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[2rem] rotate-3 opacity-10" />
              <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 -rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Browser chrome */}
                <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-5 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-300" />
                  <div className="w-3 h-3 rounded-full bg-yellow-300" />
                  <div className="w-3 h-3 rounded-full bg-green-300" />
                  <div className="flex-1 mx-4 h-5 bg-gray-200 rounded-full text-xs flex items-center px-3 text-gray-400">
                    e17course.com
                  </div>
                </div>
                {/* Mock page content */}
                <div className="p-6 bg-white min-h-[280px]">
                  {/* Mini navbar */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <img src={logo} alt="E17 Course" className="h-6 object-contain" />
                    <div className="flex gap-3 text-xs text-gray-400 font-medium">
                      <span className="text-primary font-bold border-b border-primary pb-0.5">Beranda</span>
                      <span>Program</span>
                      <span>Publikasi</span>
                    </div>
                  </div>
                  {/* Mini hero content */}
                  <div className="text-secondary text-base font-bold leading-tight mb-2">Bangun Karier IT,<br />Dimulai dari Sini!</div>
                  <p className="text-xs text-secondary/50 mb-4 leading-relaxed">E17 Course membawa fleksibilitas belajar online dan offline. Dilengkapi kelas interaktif berbasis proyek nyata...</p>
                  {/* Mini slider preview */}
                  <div className="bg-primary/8 rounded-xl p-4 border border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                        <CheckCircle2 size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-secondary/50 uppercase tracking-wider">Sertifikasi BNSP</p>
                        <p className="text-xs font-bold text-secondary">Standar Kompetensi Nasional</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Users size={18} />
                </div>
                <div>
                  <p className="font-extrabold text-secondary text-lg leading-none mb-0.5">98%</p>
                  <p className="text-xs font-medium text-secondary/50">Terserap Industri</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Soft wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none" />
    </section>
  );
}
