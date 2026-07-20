import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';
import logo from '@assets/e17brand/logo.png';
import { useLanguage } from '@/context/LanguageContext';

const T = {
  id: {
    desc: 'Lembaga pelatihan IT terpercaya di Indonesia dengan sertifikasi BNSP. Membangun masa depan profesional teknologi lewat pendidikan berkualitas.',
    ourSocialMedia: 'Sosial Media Kami',
    contactTitle: 'PT Edukasi Tujuh Belas',
    address: 'Graha Edukasi, Lt. 3\nJl. Teknologi No. 17, Jakarta Selatan 12345',
    phone: '+62 812 3456 7890',
    email: 'info@e17course.com',
    companyTitle: 'E17 COURSE',
    companyLinks: [
      { label: 'Beranda', href: '/' },
      { label: 'Program', href: '/program' },
      { label: 'Publikasi', href: '#publikasi' },
      { label: 'Artikel', href: '/artikel' },
      { label: 'Tentang Kami', href: '/tentang' },
    ],
    programTitle: 'PROGRAM UNGGULAN',
    programLinks: [
      { label: 'Bootcamp & Sertifikasi IT', href: '/program' },
      { label: 'E-learning Interaktif', href: '/program' },
      { label: 'Review CV AI', href: '#' },
      { label: 'Corporate Training', href: '#' },
    ],
    copy: '© 2025 PT Edukasi Tujuh Belas. All rights reserved.',
    privacy: 'Kebijakan Privasi',
    terms: 'Syarat & Ketentuan',
  },
  en: {
    desc: 'Indonesia\'s trusted IT training institution with official BNSP certification. Building the future of technology professionals through quality education.',
    ourSocialMedia: 'Our Social Media',
    contactTitle: 'PT Edukasi Tujuh Belas',
    address: 'Graha Edukasi, 3rd Floor\nJl. Teknologi No. 17, South Jakarta 12345',
    phone: '+62 812 3456 7890',
    email: 'info@e17course.com',
    companyTitle: 'E17 COURSE',
    companyLinks: [
      { label: 'Home', href: '/' },
      { label: 'Programs', href: '/program' },
      { label: 'Publications', href: '#publikasi' },
      { label: 'Articles', href: '/artikel' },
      { label: 'About Us', href: '/tentang' },
    ],
    programTitle: 'FEATURED PROGRAMS',
    programLinks: [
      { label: 'IT Bootcamp & Certification', href: '/program' },
      { label: 'Interactive E-learning', href: '/program' },
      { label: 'Review CV AI', href: '#' },
      { label: 'Corporate Training', href: '#' },
    ],
    copy: '© 2025 PT Edukasi Tujuh Belas. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
  },
};

export function Footer() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <footer className="bg-secondary text-white pt-10 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="bg-white/5 rounded-2xl p-6 md:p-10 shadow-xl border border-white/10 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Panel: Logo, Description, Social Media, and Contact Info */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Logo, Desc & Social Media */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <img src={logo} alt="E17 Course Logo" className="h-10 mb-4 brightness-0 invert" />
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xs">{t.desc}</p>
              </div>

              <div>
                <h5 className="font-semibold text-gray-200 text-xs md:text-sm mb-3 uppercase tracking-wider">{t.ourSocialMedia}</h5>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#3b5998] flex items-center justify-center text-white hover:scale-105 transition-all" aria-label="Facebook">
                    <FaFacebookF size={15} />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-black border border-white/10 flex items-center justify-center text-white hover:scale-105 transition-all" aria-label="X">
                    <FaXTwitter size={15} />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] flex items-center justify-center text-white hover:scale-105 transition-all" aria-label="Instagram">
                    <FaInstagram size={16} />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF0000] flex items-center justify-center text-white hover:scale-105 transition-all" aria-label="YouTube">
                    <FaYoutube size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Contact Info */}
            <div className="flex flex-col justify-start">
              <h4 className="font-bold text-white text-base md:text-lg mb-4">{t.contactTitle}</h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="text-primary shrink-0 mt-1" size={18} />
                  <span className="whitespace-pre-line leading-relaxed">{t.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-primary shrink-0" size={18} />
                  <span>{t.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-primary shrink-0" size={18} />
                  <span>{t.email}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Panel: Navigation Columns */}
          <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10 grid grid-cols-2 gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 border-white/10">
            {/* Navigation Column */}
            <div>
              <h4 className="font-bold text-white text-sm md:text-base tracking-wider uppercase mb-4">{t.companyTitle}</h4>
              <ul className="space-y-3">
                {t.companyLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-gray-300 hover:text-primary text-sm font-medium transition-colors hover:underline block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program Column */}
            <div>
              <h4 className="font-bold text-white text-sm md:text-base tracking-wider uppercase mb-4">{t.programTitle}</h4>
              <ul className="space-y-3">
                {t.programLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-gray-300 hover:text-primary text-sm font-medium transition-colors hover:underline block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
          <p>{t.copy}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


