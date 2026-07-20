import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';
import logo from '@assets/e17brand/logo.png';
import { useLanguage } from '@/context/LanguageContext';

function UpjLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg className="w-12 h-12 md:w-14 md:h-14 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 50 10 C 28 10 10 28 10 50 C 10 72 28 90 50 90 C 65 90 78 82 85 70 C 78 64 68 68 60 72 C 57 74 53 75 50 75 C 36 75 25 64 25 50 C 25 36 36 25 50 25 C 60 25 68 31 74 39 C 80 32 83 23 78 16 C 70 12 60 10 50 10 Z" fill="#00A859"/>
        <path d="M 68 20 C 80 28 88 44 88 60 C 88 76 74 88 58 88 C 48 88 38 84 32 76 C 38 70 46 72 54 72 C 66 72 76 62 76 50 C 76 40 70 32 62 26 C 65 22 66 20 68 20 Z" fill="#E53935"/>
        <path d="M 32 20 C 20 28 12 42 12 56 C 12 72 24 86 40 88 C 34 80 28 68 28 56 C 28 44 36 34 46 28 C 40 22 34 20 32 20 Z" fill="#00ACC1"/>
        <rect x="41" y="41" width="18" height="18" rx="2" fill="#D32F2F" />
        <path d="M 45 45 H 55 V 55 H 45 Z" stroke="white" strokeWidth="2" fill="none"/>
      </svg>
      <div className="flex flex-col leading-tight font-sans">
        <span className="font-bold text-[#1a2b3c] text-sm md:text-base tracking-tight">Universitas</span>
        <span className="font-bold text-[#1a2b3c] text-sm md:text-base tracking-tight">Pembangunan Jaya</span>
      </div>
    </div>
  );
}

const T = {
  id: {
    ourSocialMedia: 'Our Social Media',
    univName: 'Universitas Pembangunan Jaya',
    address: 'Jalan Boulevard UPJ, Bintaro Jaya, Tangerang Selatan 15413',
    phone: '(021) 745 5555',
    email: 'info@upj.ac.id',
    companyTitle: 'E17COURSE.ID',
    companyLinks: [
      { label: 'Tentang', href: '/tentang' },
      { label: 'Karir', href: '#' },
      { label: 'Kerja Sama', href: '#' },
      { label: 'Blog', href: '/artikel' },
    ],
    programTitle: 'Program',
    programLinks: [
      { label: 'E-learning', href: '/program' },
      { label: 'Bootcamp & Program', href: '/program' },
      { label: 'Review CV AI', href: '#' },
      { label: 'Corporate Service', href: '#' },
    ],
    copy: '© 2025 Universitas Pembangunan Jaya x E17 Course. All rights reserved.',
    privacy: 'Kebijakan Privasi',
    terms: 'Syarat & Ketentuan',
  },
  en: {
    ourSocialMedia: 'Our Social Media',
    univName: 'Universitas Pembangunan Jaya',
    address: 'Jalan Boulevard UPJ, Bintaro Jaya, South Tangerang 15413',
    phone: '(021) 745 5555',
    email: 'info@upj.ac.id',
    companyTitle: 'E17COURSE.ID',
    companyLinks: [
      { label: 'About Us', href: '/tentang' },
      { label: 'Careers', href: '#' },
      { label: 'Partnership', href: '#' },
      { label: 'Blog', href: '/artikel' },
    ],
    programTitle: 'Programs',
    programLinks: [
      { label: 'E-learning', href: '/program' },
      { label: 'Bootcamp & Program', href: '/program' },
      { label: 'Review CV AI', href: '#' },
      { label: 'Corporate Service', href: '#' },
    ],
    copy: '© 2025 Universitas Pembangunan Jaya x E17 Course. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
  },
};

export function Footer() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <footer className="bg-[#f4f5f7] border-t border-gray-200 text-gray-800 pt-10 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Panel: Logo, Social Media, and Contact Info */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Logo & Social Media */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <div className="mb-4">
                  <UpjLogo />
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <img src={logo} alt="E17 Course Logo" className="h-6 object-contain opacity-85" />
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800 text-sm mb-3">{t.ourSocialMedia}</h5>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-9 h-9 rounded-full bg-[#3b5998] flex items-center justify-center text-white hover:opacity-90 transition-opacity" aria-label="Facebook">
                    <FaFacebookF size={15} />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:opacity-90 transition-opacity" aria-label="X">
                    <FaXTwitter size={15} />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white hover:opacity-90 transition-opacity" aria-label="Instagram">
                    <FaInstagram size={16} />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:opacity-90 transition-opacity" aria-label="YouTube">
                    <FaYoutube size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Contact Info */}
            <div className="flex flex-col justify-start">
              <h4 className="font-bold text-gray-900 text-base md:text-lg mb-4">{t.univName}</h4>
              <ul className="space-y-3.5 text-gray-700 text-sm font-medium">
                <li className="flex items-start gap-3">
                  <MapPin className="text-[#00838f] shrink-0 mt-0.5" size={18} />
                  <span className="leading-relaxed">{t.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-[#00838f] shrink-0" size={18} />
                  <span>{t.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-[#00838f] shrink-0" size={18} />
                  <span>{t.email}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Panel: Navigation Columns */}
          <div className="lg:col-span-5 lg:border-l lg:border-gray-200 lg:pl-10 grid grid-cols-2 gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 border-gray-100">
            {/* E17COURSE.ID Column */}
            <div>
              <h4 className="font-semibold text-gray-600 text-sm tracking-wider uppercase mb-4">{t.companyTitle}</h4>
              <ul className="space-y-3">
                {t.companyLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-[#00838f] hover:text-[#00565e] text-sm font-semibold transition-colors hover:underline block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program Column */}
            <div>
              <h4 className="font-bold text-gray-900 text-base md:text-lg mb-4">{t.programTitle}</h4>
              <ul className="space-y-3">
                {t.programLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-[#00838f] hover:text-[#00565e] text-sm font-semibold transition-colors hover:underline block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-200/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
          <p>{t.copy}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-800 transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-gray-800 transition-colors">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

