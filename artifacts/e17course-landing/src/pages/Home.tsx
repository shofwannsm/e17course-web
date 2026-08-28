import React, { Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { BannerCarousel } from '@/components/home/BannerCarousel';
import { Hero } from '@/components/home/Hero';
import { PartnerMarquee } from '@/components/home/PartnerMarquee';
import { ProgramPreview } from '@/components/home/ProgramPreview';
import { SEO } from '@/components/SEO';

const BootcampCardStack = React.lazy(() => import('@/components/home/BootcampCardStack').then(m => ({ default: m.BootcampCardStack })));
const BnspSection = React.lazy(() => import('@/components/home/BnspSection').then(m => ({ default: m.BnspSection })));
const Testimonials = React.lazy(() => import('@/components/home/Testimonials').then(m => ({ default: m.Testimonials })));
const ArticlesSection = React.lazy(() => import('@/components/home/ArticlesSection').then(m => ({ default: m.ArticlesSection })));
const CtaSection = React.lazy(() => import('@/components/home/CtaSection').then(m => ({ default: m.CtaSection })));
const Footer = React.lazy(() => import('@/components/layout/Footer').then(m => ({ default: m.Footer })));

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <SEO title="Beranda | E17Course - Lembaga Pendidikan dan Pelatihan" />
      <Navbar />

      <main className="pt-[80px]">
        {/* Banner Hero Slider at the top */}
        <BannerCarousel />
        
        {/* Original Hero Segment */}
        <Hero />
        
        <PartnerMarquee />
        <ProgramPreview />
        <Suspense fallback={<div className="h-40 flex items-center justify-center text-gray-400">Loading...</div>}>
          <BootcampCardStack />
          <BnspSection isHomePage={true} />
          <Testimonials />
          <ArticlesSection />
          <CtaSection />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-20 bg-secondary" />}>
        <Footer />
      </Suspense>
      <FloatingButtons />
    </div>
  );
}
