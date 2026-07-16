import React from 'react';
import { Menu, ChevronRight, PlayCircle, Star, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CleanLight() {
  return (
    <div className="relative min-h-screen w-full bg-[#FFFFFF] text-[#1C244B] overflow-x-hidden selection:bg-[#E8734A] selection:text-white" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      <style dangerouslySetInlineStyle={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          
          .blob-shape {
            border-radius: 41% 59% 47% 53% / 41% 53% 47% 59%;
            animation: blob-bounce 10s infinite alternate;
          }
          
          @keyframes blob-bounce {
            0% { border-radius: 41% 59% 47% 53% / 41% 53% 47% 59%; transform: translateY(0); }
            50% { border-radius: 59% 41% 53% 47% / 53% 47% 41% 59%; transform: translateY(-20px); }
            100% { border-radius: 41% 59% 47% 53% / 41% 53% 47% 59%; transform: translateY(0); }
          }
          
          .slide-up {
            animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
            transform: translateY(30px);
          }
          
          @keyframes slideUp {
            to { opacity: 1; transform: translateY(0); }
          }
          
          .stagger-1 { animation-delay: 0.1s; }
          .stagger-2 { animation-delay: 0.2s; }
          .stagger-3 { animation-delay: 0.3s; }
          
          .marquee-content {
            display: flex;
            animation: marquee 30s linear infinite;
          }
          
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `
      }} />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#F8F9FC] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/__mockup/images/logo.png" alt="E17" className="h-8 object-contain" />
            <span className="font-bold text-xl tracking-tight text-[#1C244B]">E17 Course</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-[#555555]">
            <a href="#" className="text-[#E8734A] relative font-semibold">
              Beranda
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#E8734A] rounded-full"></span>
            </a>
            <a href="#" className="hover:text-[#1C244B] transition-colors">Program</a>
            <a href="#" className="hover:text-[#1C244B] transition-colors">Publikasi</a>
            <a href="#" className="hover:text-[#1C244B] transition-colors">Artikel</a>
            <a href="#" className="hover:text-[#1C244B] transition-colors">Tentang Kami</a>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button className="text-[#1C244B] font-semibold text-sm px-4 py-2 hover:text-[#E8734A] transition-colors">
              Masuk
            </button>
            <button className="bg-[#E8734A] text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#d66038] hover:shadow-lg hover:shadow-[#E8734A]/20 transition-all active:scale-95">
              Daftar Sekarang
            </button>
          </div>
          
          <button className="md:hidden text-[#1C244B]">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-7xl mx-auto px-6 relative">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#E8734A]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-[#467FF7]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8734A]/10 text-[#E8734A] font-semibold text-xs mb-6 slide-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8734A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8734A]"></span>
              </span>
              Pendaftaran Gelombang 4 Dibuka
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6 slide-up stagger-1 text-[#1C244B]">
              Bangun Karier IT, <br/>
              <span className="relative inline-block mt-2">
                Dimulai dari Sini!
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#467FF7]/30 -z-10" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00015 6.72665C47.8863 1.83842 129.588 -1.82136 198.026 6.72665" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
              </span>
            </h1>
            
            <p className="text-[#555555] text-lg lg:text-xl mb-8 leading-relaxed slide-up stagger-2">
              Tingkatkan keahlianmu dengan kurikulum industri terkini dan dapatkan <strong className="text-[#1C244B] font-bold">Sertifikasi Resmi BNSP</strong> untuk memvalidasi kompetensimu di dunia kerja profesional.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 slide-up stagger-3">
              <button className="w-full sm:w-auto bg-[#E8734A] text-white font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#d66038] hover:shadow-xl hover:shadow-[#E8734A]/25 transition-all group">
                Jelajahi Program
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto bg-white border border-[#F8F9FC] shadow-sm text-[#1C244B] font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:border-[#467FF7]/30 hover:bg-[#F8F9FC] transition-all">
                <PlayCircle size={20} className="text-[#467FF7]" />
                Lihat Video
              </button>
            </div>
            
            <div className="mt-10 flex items-center gap-4 slide-up stagger-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=\${i+10}`} alt={`Student \${i}`} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-[#E8734A]">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <p className="text-[#555555] mt-0.5"><strong className="text-[#1C244B]">4.9/5</strong> dari 2,000+ alumni</p>
              </div>
            </div>
          </div>
          
          <div className="relative slide-up stagger-2 hidden md:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#F8F9FC] rounded-full blur-2xl -z-20"></div>
            
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E8734A] to-[#467FF7] rounded-[2rem] rotate-3 opacity-10"></div>
              <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-white/50 -rotate-2 transition-transform hover:rotate-0 duration-500 flex flex-col">
                <div className="h-10 bg-[#F8F9FC] border-b border-[#F8F9FC] flex items-center px-5 gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E8734A]/30"></div>
                  <div className="w-3 h-3 rounded-full bg-[#E8734A]/30"></div>
                  <div className="w-3 h-3 rounded-full bg-[#E8734A]/30"></div>
                </div>
                <img src="/__mockup/images/hero-visual.png" alt="Platform Preview" className="w-full h-full object-cover flex-1" />
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg border border-white flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E8734A]/10 flex items-center justify-center text-[#E8734A] shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#555555] uppercase tracking-wider mb-0.5">Sertifikasi BNSP</p>
                    <p className="text-sm font-bold text-[#1C244B]">Standar Kompetensi Nasional</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating element */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-[#F8F9FC] animate-[blob-bounce_8s_infinite_alternate]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#467FF7]/10 flex items-center justify-center text-[#467FF7]">
                  <Users size={20} />
                </div>
                <div>
                  <p className="font-bold text-[#1C244B] text-lg leading-none mb-1">98%</p>
                  <p className="text-xs font-medium text-[#555555]">Terserap Industri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner / Carousel Area Preview */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#E8734A]/5 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative border border-[#E8734A]/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8734A]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <div className="flex-1">
              <div className="inline-block bg-white text-[#E8734A] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm mb-5">
                🔥 Promo Spesial
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1C244B] mb-4 leading-tight">Diskon 30% Kelas Full-Stack</h3>
              <p className="text-[#555555] mb-8 max-w-md text-lg">Daftar hari ini dan dapatkan akses seumur hidup ke materi pembelajaran, mentoring eksklusif, dan ujian sertifikasi BNSP.</p>
              <button className="text-[#1C244B] font-bold flex items-center gap-2 hover:text-[#E8734A] transition-colors group">
                Klaim Promo Sekarang <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="w-full md:w-[45%] h-56 md:h-72 bg-white rounded-3xl shadow-sm border border-white overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1C244B] to-[#467FF7] opacity-5"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                 <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur shadow-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                   <PlayCircle size={32} className="text-[#E8734A]" />
                 </div>
              </div>
              <img src="/__mockup/images/hero-visual.png" className="w-full h-full object-cover opacity-60 mix-blend-overlay" alt="Course teaser" />
            </div>
          </div>
          
          {/* Carousel dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="w-8 h-2 bg-[#E8734A] rounded-full"></div>
            <div className="w-2 h-2 bg-[#1C244B]/15 rounded-full hover:bg-[#1C244B]/30 cursor-pointer transition-colors"></div>
            <div className="w-2 h-2 bg-[#1C244B]/15 rounded-full hover:bg-[#1C244B]/30 cursor-pointer transition-colors"></div>
          </div>
        </div>
      </div>

      {/* Marquee Teaser */}
      <div className="border-t border-[#F8F9FC] bg-white py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <p className="text-center text-sm font-bold tracking-wide text-[#555555] uppercase">DIPERCAYA OLEH PERUSAHAAN TEKNOLOGI TERKEMUKA</p>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Gradient masks for smooth fade effect at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex overflow-hidden">
            <div className="marquee-content flex items-center gap-20 px-8 whitespace-nowrap">
              {/* Partner Logos (Mocked with text) */}
              {["TechCorp", "InnovateID", "DataSystems", "NextGen IT", "CloudNet", "TechCorp", "InnovateID", "DataSystems", "NextGen IT", "CloudNet"].map((partner, i) => (
                <div key={i} className="text-2xl font-black text-[#1C244B]/20 grayscale hover:grayscale-0 hover:text-[#1C244B]/80 transition-all cursor-default flex items-center gap-2">
                  <div className="w-6 h-6 bg-current rounded-sm opacity-50"></div>
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
