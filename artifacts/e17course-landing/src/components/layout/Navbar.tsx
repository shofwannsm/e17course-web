import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Globe } from 'lucide-react';
import logo from '@assets/e17brand/logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const navLinks = {
  id: [
    { name: 'Beranda',      href: '/',        type: 'route' as const },
    { name: 'Program',      href: '/program', type: 'route' as const },
    { name: 'Publikasi',    href: '#publikasi', type: 'scroll' as const },
    { name: 'Artikel',      href: '/artikel', type: 'route' as const },
    { name: 'Tentang Kami', href: '/tentang', type: 'route' as const },
  ],
  en: [
    { name: 'Home',         href: '/',        type: 'route' as const },
    { name: 'Programs',     href: '/program', type: 'route' as const },
    { name: 'Publications', href: '#publikasi', type: 'scroll' as const },
    { name: 'Articles',     href: '/artikel', type: 'route' as const },
    { name: 'About Us',     href: '/tentang', type: 'route' as const },
  ],
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { lang, toggleLang } = useLanguage();

  const links = navLinks[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [location]);

  const isActive = (href: string, type: string) => {
    if (type !== 'route') return false;
    if (href === '/') return location === '/';
    return location.startsWith(href);
  };

  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const linkCls = (href: string, type: string) =>
    `text-sm font-semibold transition-colors relative py-1 ${
      isActive(href, type) ? 'text-primary' : 'text-secondary/70 hover:text-secondary'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="E17 Course Logo" className="h-8 object-contain" />
            <span className="font-bold text-lg text-secondary hidden sm:block">E17 Course</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) =>
              link.type === 'route' ? (
                <Link key={link.name} href={link.href} className={linkCls(link.href, link.type)}>
                  {link.name}
                  {isActive(link.href, link.type) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollLink(e, link.href)}
                  className={linkCls(link.href, link.type)}
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          {/* Right: lang toggle + mobile hamburger */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white hover:border-primary/40 hover:bg-primary/5 transition-all text-xs font-bold text-secondary/70 hover:text-secondary"
              aria-label="Toggle language"
            >
              <Globe size={13} className="text-primary" />
              <span className="hidden sm:block">{lang === 'id' ? 'ID' : 'EN'}</span>
              <span className="text-secondary/30">/</span>
              <span className="hidden sm:block">{lang === 'id' ? 'EN' : 'ID'}</span>
            </button>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-secondary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <nav className="flex flex-col px-4 py-4 gap-3 max-w-7xl mx-auto">
              {links.map((link) =>
                link.type === 'route' ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-base font-medium py-2 ${isActive(link.href, link.type) ? 'text-primary' : 'text-secondary/70'}`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollLink(e, link.href)}
                    className="text-base font-medium py-2 text-secondary/70"
                  >
                    {link.name}
                  </a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
