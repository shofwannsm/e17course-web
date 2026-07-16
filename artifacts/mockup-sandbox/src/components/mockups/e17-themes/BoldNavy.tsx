import React from 'react';
import { ArrowRight, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function BoldNavy() {
  return (
    <div className="min-h-screen w-full bg-[#1C244B] text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        .marquee {
          display: flex;
          animation: scroll 30s linear infinite;
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C244B]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#E8734A] rounded-lg flex items-center justify-center font-bold text-xl tracking-tighter">
              E17
            </div>
            <span className="font-bold text-xl tracking-tight">Course</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#E2E8F0]">
            <a href="#" className="text-white hover:text-[#F8D806] transition-colors">Beranda</a>
            <a href="#" className="hover:text-white transition-colors">Program</a>
            <a href="#" className="hover:text-white transition-colors">Publikasi</a>
            <a href="#" className="hover:text-white transition-colors">Artikel</a>
            <a href="#" className="hover:text-white transition-colors">Tentang Kami</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold hover:text-[#E8734A] transition-colors">Masuk</button>
            <button className="bg-[#E8734A] hover:bg-[#d6653f] text-white px-5 py-2.5 rounded-md text-sm font-bold transition-all shadow-[0_4px_14px_rgba(232,115,74,0.3)]">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1C244B] via-[#151b3b] to-[#0d1128] -z-10" />
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#467FF7]/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#E8734A]/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F8D806] font-medium text-sm mb-6">
              <ShieldCheck size={16} />
              <span>Lembaga Pelatihan Tersertifikasi BNSP</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Bangun Karier <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8734A] to-[#F8D806]">IT</span>,<br />
              Dimulai dari Sini!
            </h1>
            
            <p className="text-lg lg:text-xl text-[#E2E8F0] mb-8 leading-relaxed max-w-xl">
              Tingkatkan kompetensi Anda dengan kurikulum berbasis industri dan dapatkan sertifikasi resmi untuk bersaing di dunia kerja global.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-[#E8734A] hover:bg-[#d6653f] text-white px-8 py-4 rounded-md text-base font-bold transition-all shadow-[0_8px_24px_rgba(232,115,74,0.4)] flex items-center justify-center gap-2 group">
                Mulai Belajar
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-md text-base font-bold transition-all border border-white/10 flex items-center justify-center gap-2">
                Lihat Program
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#467FF7]" />
                <span>Mentor Praktisi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#467FF7]" />
                <span>Akses Selamanya</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#467FF7]" />
                <span>Disalurkan Kerja</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E8734A]/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1C244B]">
              <img 
                src="/__mockup/images/hero-bold-navy.jpg" 
                alt="IT Professional" 
                className="w-full h-[600px] object-cover opacity-90"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4">
                <div className="bg-[#F8D806] text-[#1C244B] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  4.9
                </div>
                <div>
                  <div className="flex text-[#F8D806] mb-1">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                  <div className="text-sm font-medium text-white">Dari 10,000+ Alumni</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner / Program Preview Area */}
      <section className="bg-[#E8734A] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Promo Terbatas BootCamp IT!</h2>
            <p className="text-white/90 text-lg">Dapatkan potongan hingga 50% untuk program Fullstack Web Development dan Data Science. Kesempatan terbatas bulan ini.</p>
          </div>
          <button className="bg-[#1C244B] hover:bg-[#151b3b] text-white px-8 py-4 rounded-md text-base font-bold transition-all shadow-xl whitespace-nowrap">
            Klaim Promo
          </button>
        </div>
      </section>

      {/* Partner Marquee Teaser */}
      <section className="py-12 border-t border-white/5 bg-[#0d1128]">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <p className="text-sm text-[#E2E8F0] font-medium tracking-wide uppercase">LULUSAN KAMI TELAH BEKERJA DI PERUSAHAAN TERKEMUKA</p>
        </div>
        <div className="overflow-hidden relative w-full flex">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0d1128] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0d1128] to-transparent z-10" />
          
          <div className="marquee gap-16 items-center opacity-50">
            {/* Repeated logos for infinite scroll effect */}
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="text-2xl font-bold font-mono tracking-tighter">GO-JEK</div>
                <div className="text-2xl font-bold font-serif italic">Tokopedia</div>
                <div className="text-2xl font-black uppercase">Traveloka</div>
                <div className="text-2xl font-bold">Bukalapak</div>
                <div className="text-2xl font-bold uppercase tracking-widest">Shopee</div>
                <div className="text-2xl font-bold">Telkomsel</div>
                <div className="text-2xl font-black tracking-tighter">BCA</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
