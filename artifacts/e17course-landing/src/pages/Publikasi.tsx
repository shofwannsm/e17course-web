import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { PublicationsSection } from '@/components/home/PublicationsSection';
import { SEO } from '@/components/SEO';

export default function Publikasi() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground flex flex-col">
      <SEO 
        title="Publikasi Buku Ber-ISBN | E17Course" 
        description="Layanan publikasi buku ber-ISBN dari E17Course. Terbitkan buku Anda bersama kami."
      />
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <PublicationsSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
