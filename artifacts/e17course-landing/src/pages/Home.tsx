import { Navbar } from '@/components/layout/Navbar';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { BannerCarousel } from '@/components/home/BannerCarousel';
import { PartnerMarquee } from '@/components/home/PartnerMarquee';
import { ProgramPreview } from '@/components/home/ProgramPreview';
import { WhySection } from '@/components/home/WhySection';
import { Testimonials } from '@/components/home/Testimonials';
import { CtaSection } from '@/components/home/CtaSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <Navbar />

      <main>
        <Hero />
        <BannerCarousel />
        <PartnerMarquee />
        <ProgramPreview />
        <WhySection />
        <Testimonials />
        <CtaSection />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
