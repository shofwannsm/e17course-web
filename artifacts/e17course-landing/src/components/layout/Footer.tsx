import { Facebook, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';
import logo from '@assets/e17brand/logo.png';
import { useLanguage } from '@/context/LanguageContext';

const T = {
  id: {
    desc: 'Lembaga pelatihan IT terpercaya di Indonesia dengan sertifikasi BNSP. Membangun masa depan profesional teknologi lewat pendidikan berkualitas.',
    nav: 'Navigasi',
    links: ['Beranda','Program','Publikasi','Artikel','Tentang Kami'],
    contact: 'Kontak',
    address: 'Graha Edukasi, Lt. 3\nJl. Teknologi No. 17\nJakarta Selatan 12345',
    copy: '© 2025 PT Edukasi Tujuh Belas. All rights reserved.',
    privacy: 'Kebijakan Privasi',
    terms: 'Syarat & Ketentuan',
  },
  en: {
    desc: 'Indonesia\'s trusted IT training institution with official BNSP certification. Building the future of technology professionals through quality education.',
    nav: 'Navigation',
    links: ['Home','Programs','Publications','Articles','About Us'],
    contact: 'Contact',
    address: 'Graha Edukasi, 3rd Floor\nJl. Teknologi No. 17\nSouth Jakarta 12345',
    copy: '© 2025 PT Edukasi Tujuh Belas. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
  },
};

const hrefs = ['/', '/program', '#publikasi', '/artikel', '/tentang'];

export function Footer() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="E17 Course Logo" className="h-12 mb-6 brightness-0 invert" />
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">{t.desc}</p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">{t.nav}</h4>
            <ul className="space-y-3 text-gray-400">
              {t.links.map((name, i) => (
                <li key={i}><a href={hrefs[i]} className="hover:text-accent transition-colors">{name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">{t.contact}</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3"><Mail className="mt-1 text-primary shrink-0" size={20} /><span>info@e17course.com</span></li>
              <li className="flex items-start gap-3"><div className="w-5 h-5 mt-1 text-primary shrink-0 flex items-center justify-center font-bold">📍</div><span className="whitespace-pre-line">{t.address}</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>{t.copy}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
