import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import React, { Suspense, lazy } from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';

const NotFound = lazy(() => import('@/pages/not-found'));
const Home = lazy(() => import('@/pages/Home'));
const Program = lazy(() => import('@/pages/Program'));
const Artikel = lazy(() => import('@/pages/Artikel'));
const ArtikelDetail = lazy(() => import('@/pages/ArtikelDetail'));
const TentangKami = lazy(() => import('@/pages/TentangKami'));
const Publikasi = lazy(() => import('@/pages/Publikasi'));
import { LanguageProvider } from '@/context/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-primary font-bold">Memuat...</div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/program" component={Program} />
        <Route path="/artikel" component={Artikel} />
        <Route path="/artikel/:id" component={ArtikelDetail} />
        <Route path="/tentang" component={TentangKami} />
        <Route path="/publikasi" component={Publikasi} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
              <Router />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
