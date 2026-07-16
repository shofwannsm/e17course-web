import React from "react";
import { Terminal, ChevronRight, Code, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

export default function DarkTech() {
  return (
    <div className="min-h-screen w-full bg-[#0A0E1A] text-white font-sans overflow-hidden relative">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Outfit:wght@300;400;600;800&display=swap');
        
        .font-tech { font-family: 'JetBrains Mono', monospace; }
        .font-display { font-family: 'Outfit', sans-serif; }
        
        .grid-bg {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(70, 127, 247, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(70, 127, 247, 0.05) 1px, transparent 1px);
          mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
        }

        .glow-text {
          text-shadow: 0 0 20px rgba(70, 127, 247, 0.5);
        }

        .btn-glow {
          box-shadow: 0 0 15px rgba(70, 127, 247, 0.4);
          transition: all 0.3s ease;
        }
        
        .btn-glow:hover {
          box-shadow: 0 0 25px rgba(70, 127, 247, 0.7);
          transform: translateY(-2px);
        }

        .btn-glow-yellow {
          box-shadow: 0 0 15px rgba(248, 216, 6, 0.3);
          transition: all 0.3s ease;
        }
        
        .btn-glow-yellow:hover {
          box-shadow: 0 0 25px rgba(248, 216, 6, 0.6);
          transform: translateY(-2px);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}} />

      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg z-0" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#467FF7] rounded-full blur-[150px] pulse-slow z-0 mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E8734A] rounded-full blur-[150px] opacity-20 z-0 mix-blend-screen" />

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E1A]/80 backdrop-blur-md border-b border-[#467FF7]/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-tech font-bold text-2xl tracking-tighter">
            <span className="text-[#F8D806]">&lt;</span>
            <span className="text-white">E17</span>
            <span className="text-[#467FF7]">Course</span>
            <span className="text-[#F8D806]">/&gt;</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-display text-sm font-semibold text-[#B0B8CC]">
            <a href="#" className="text-white relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#467FF7] after:rounded-full">Beranda</a>
            <a href="#" className="hover:text-white transition-colors">Program</a>
            <a href="#" className="hover:text-white transition-colors">Publikasi</a>
            <a href="#" className="hover:text-white transition-colors">Artikel</a>
            <a href="#" className="hover:text-white transition-colors">Tentang Kami</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 font-display font-semibold text-sm px-5 py-2.5 rounded-md border border-[#467FF7]/30 text-[#467FF7] hover:bg-[#467FF7]/10 transition-colors">
              Masuk
            </button>
            <button className="font-display font-bold text-sm px-6 py-2.5 rounded-md bg-[#467FF7] text-white btn-glow">
              Daftar
            </button>
          </div>
        </div>
      </nav>

      {/* Main Hero Content */}
      <main className="relative z-10 pt-32 pb-16 px-6 max-w-7xl mx-auto min-h-[calc(100vh-80px)] flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center flex-1">
          
          {/* Left Column: Copy */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#467FF7]/10 border border-[#467FF7]/30 text-[#467FF7] font-tech text-xs font-bold mb-6">
              <Terminal size={14} />
              <span>INITIALIZE_CAREER.exe</span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 text-white">
              Bangun Karier IT,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#467FF7] to-[#F8D806] glow-text">Dimulai dari Sini!</span>
            </h1>
            
            <p className="font-display text-lg text-[#B0B8CC] mb-10 max-w-xl leading-relaxed">
              Tingkatkan keahlian coding dan networking Anda dengan kurikulum berbasis industri. Dapatkan sertifikasi resmi BNSP dan wujudkan masa depan digital yang gemilang.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 font-display">
              <button className="flex items-center gap-2 bg-[#467FF7] hover:bg-[#3A6AE0] text-white px-8 py-4 rounded-md font-bold text-base btn-glow">
                Mulai Belajar Sekarang <ChevronRight size={18} />
              </button>
              <button className="flex items-center gap-2 bg-transparent border border-[#B0B8CC]/30 hover:border-[#F8D806] hover:text-[#F8D806] text-[#B0B8CC] px-8 py-4 rounded-md font-bold text-base transition-all">
                <Code size={18} /> Lihat Silabus
              </button>
            </div>

            {/* Micro Stats */}
            <div className="mt-12 flex items-center gap-8 border-t border-[#467FF7]/20 pt-8 w-full">
              <div>
                <p className="font-tech text-2xl font-bold text-white">10K+</p>
                <p className="font-display text-xs text-[#B0B8CC] uppercase tracking-wider mt-1">Alumni Lulus</p>
              </div>
              <div>
                <p className="font-tech text-2xl font-bold text-white">50+</p>
                <p className="font-display text-xs text-[#B0B8CC] uppercase tracking-wider mt-1">Hiring Partners</p>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={32} className="text-[#F8D806]" />
                <div>
                  <p className="font-tech text-sm font-bold text-white">Terakreditasi</p>
                  <p className="font-display text-xs text-[#B0B8CC] uppercase tracking-wider mt-0.5">BNSP Resmi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Preview Area */}
          <div className="relative w-full h-[500px] flex items-center justify-center">
            {/* Decorative tech rings */}
            <div className="absolute w-[400px] h-[400px] rounded-full border border-[#467FF7]/20 border-dashed animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[300px] h-[300px] rounded-full border border-[#F8D806]/20 border-dashed animate-[spin_30s_linear_infinite_reverse]" />
            
            {/* Mock Image/Terminal Card */}
            <div className="relative w-[450px] bg-[#111827] border border-[#467FF7]/30 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(70,127,247,0.15)] floating">
              {/* Terminal Header */}
              <div className="bg-[#1F2937] px-4 py-3 flex items-center border-b border-[#467FF7]/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto font-tech text-xs text-[#B0B8CC]">bash - e17_training_module</div>
              </div>
              {/* Terminal Body */}
              <div className="p-6 font-tech text-sm text-[#B0B8CC] leading-relaxed">
                <p><span className="text-[#467FF7]">~</span> $ ./start_journey.sh</p>
                <p className="text-[#F8D806] mt-2">&gt; Memuat modul Full-Stack Web Development...</p>
                <p className="text-white mt-1">[====================] 100% Selesai</p>
                <p className="text-[#E8734A] mt-4">&gt; Kompilasi materi Cyber Security...</p>
                <p className="text-white mt-1">[====================] 100% Selesai</p>
                
                {/* Feature preview slide */}
                <div className="mt-8 p-4 rounded-lg bg-[#0A0E1A] border border-[#467FF7]/30 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#467FF7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex justify-between items-center relative z-10">
                    <div>
                      <h4 className="font-display font-bold text-white text-base">Sertifikasi BNSP</h4>
                      <p className="text-xs text-[#B0B8CC] mt-1">Ujian kompetensi standar nasional</p>
                    </div>
                    <div className="bg-[#467FF7]/20 p-2 rounded-full text-[#467FF7]">
                      <ShieldCheck size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-12 -right-4 bg-[#1F2937]/90 backdrop-blur border border-[#467FF7]/40 px-4 py-3 rounded-lg flex items-center gap-3 shadow-lg btn-glow">
              <Cpu className="text-[#F8D806]" size={24} />
              <div>
                <p className="text-white font-tech text-xs font-bold">Teknologi Terbaru</p>
                <p className="text-[#B0B8CC] text-[10px]">React, Node, Go, Python</p>
              </div>
            </div>
            
            <div className="absolute bottom-12 -left-8 bg-[#1F2937]/90 backdrop-blur border border-[#E8734A]/40 px-4 py-3 rounded-lg flex items-center gap-3 shadow-lg">
              <Zap className="text-[#E8734A]" size={24} />
              <div>
                <p className="text-white font-tech text-xs font-bold">Akses Seumur Hidup</p>
                <p className="text-[#B0B8CC] text-[10px]">Materi selalu update</p>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Marquee Partner Teaser */}
      <div className="relative z-10 w-full border-t border-[#467FF7]/20 bg-[#0A0E1A] py-6 flex overflow-hidden whitespace-nowrap">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0E1A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0E1A] to-transparent z-10" />
        
        <div className="animate-marquee flex items-center gap-16 px-8">
          {/* Repeat multiple times for seamless scrolling */}
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2 text-[#B0B8CC] opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <Globe size={24} /> <span className="font-display font-bold text-lg">TechCorp</span>
              </div>
              <div className="flex items-center gap-2 text-[#B0B8CC] opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <Code size={24} /> <span className="font-display font-bold text-lg">DevStudio</span>
              </div>
              <div className="flex items-center gap-2 text-[#B0B8CC] opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <Terminal size={24} /> <span className="font-display font-bold text-lg">CodeSystem</span>
              </div>
              <div className="flex items-center gap-2 text-[#B0B8CC] opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <Zap size={24} /> <span className="font-display font-bold text-lg">FastStack</span>
              </div>
              <div className="flex items-center gap-2 text-[#B0B8CC] opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <Cpu size={24} /> <span className="font-display font-bold text-lg">NeuralNet</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

    </div>
  );
}
