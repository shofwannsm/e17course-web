import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import logo from '@assets/e17brand/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

type NavLink = {
  name: string;
  href: string;
  type: 'scroll' | 'route';
};

const navLinks: NavLink[] = [
  { name: 'Beranda',     href: '/',          type: 'route'  },
  { name: 'Program',    href: '/program',    type: 'route'  },
  { name: 'Publikasi',  href: '#publikasi',  type: 'scroll' },
  { name: 'Artikel',    href: '#artikel',    type: 'scroll' },
  { name: 'Tentang Kami', href: '#tentang', type: 'scroll' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (link: NavLink) => {
    if (link.type === 'route') {
      if (link.href === '/') return location === '/';
      return location.startsWith(link.href);
    }
    return false;
  };

  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const linkClass = (link: NavLink) =>
    `text-sm font-semibold transition-colors relative py-1 ${
      isActive(link) ? 'text-primary' : 'text-secondary/70 hover:text-secondary'
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
            {navLinks.map((link) =>
              link.type === 'route' ? (
                <Link key={link.name} href={link.href} className={linkClass(link)}>
                  {link.name}
                  {isActive(link) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollLink(e, link.href)}
                  className={linkClass(link)}
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
              {navLinks.map((link) =>
                link.type === 'route' ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-base font-medium py-2 ${
                      isActive(link) ? 'text-primary' : 'text-secondary/70'
                    }`}
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
