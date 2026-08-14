import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import Program from '@/pages/Program';
import Artikel from '@/pages/Artikel';
import ArtikelDetail from '@/pages/ArtikelDetail';
import TentangKami from '@/pages/TentangKami';
import Publikasi from '@/pages/Publikasi';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { LanguageProvider } from '@/context/LanguageContext';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/program" component={Program} />
      <Route path="/artikel" component={Artikel} />
      <Route path="/artikel/:id" component={ArtikelDetail} />
      <Route path="/tentang" component={TentangKami} />
      <Route path="/publikasi" component={Publikasi} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
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
  );
}

export default App;
