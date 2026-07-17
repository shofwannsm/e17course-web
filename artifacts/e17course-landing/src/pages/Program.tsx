import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { ProgramSection } from '@/components/home/ProgramSection';
import { BnspSection } from '@/components/home/BnspSection';
import { CorporateSection } from '@/components/home/CorporateSection';

export default function Program() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
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
