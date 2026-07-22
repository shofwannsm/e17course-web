import { Navbar } from '@/components/layout/Navbar';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { Footer } from '@/components/layout/Footer';
import { BannerCarousel } from '@/components/home/BannerCarousel';
import { Hero } from '@/components/home/Hero';
import { PartnerMarquee } from '@/components/home/PartnerMarquee';
import { ProgramPreview } from '@/components/home/ProgramPreview';
import { BootcampCardStack } from '@/components/home/BootcampCardStack';
import { BnspSection } from '@/components/home/BnspSection';
import { WhySection } from '@/components/home/WhySection';
import { Testimonials } from '@/components/home/Testimonials';
import { ArticlesSection } from '@/components/home/ArticlesSection';
import { CtaSection } from '@/components/home/CtaSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <Navbar />

      <main className="pt-[80px]">
        {/* Banner Hero Slider at the top */}
        <BannerCarousel />
        
        {/* Original Hero Segment */}
        <Hero />
        
        <PartnerMarquee />
        <ProgramPreview />
        <BootcampCardStack />
        <BnspSection isHomePage={true} />
        <WhySection />
        <Testimonials />
        <ArticlesSection />
        <CtaSection />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
