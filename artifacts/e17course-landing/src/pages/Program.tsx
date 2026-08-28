import { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { ProgramSection } from '@/components/home/ProgramSection';
import { BnspSection } from '@/components/home/BnspSection';
import { CorporateSection } from '@/components/home/CorporateSection';
import { SEO } from '@/components/SEO';

export default function Program() {
  useEffect(() => {
    const hash = window.location.hash;
    let timer: NodeJS.Timeout;
    if (hash) {
      timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          const navbarHeight = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 300);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <SEO 
        title="Program Pelatihan | E17Course" 
        description="Jelajahi berbagai program pelatihan IT, Bootcamp, Corporate Training, dan Sertifikasi BNSP dari E17Course."
      />
      <Navbar />
      <main className="pt-[72px]">
        <ProgramSection />
        <BnspSection />
        <CorporateSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
