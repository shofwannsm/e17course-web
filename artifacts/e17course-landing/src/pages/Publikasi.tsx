import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { PublicationsSection } from '@/components/home/PublicationsSection';

export default function Publikasi() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <PublicationsSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
