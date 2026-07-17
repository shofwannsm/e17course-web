import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { ProgramSection } from '@/components/home/ProgramSection';
import { BnspSection } from '@/components/home/BnspSection';

export default function Program() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <Navbar />
      <main className="pt-[72px]">
        <ProgramSection />
        <BnspSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
