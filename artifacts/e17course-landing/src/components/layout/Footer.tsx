import { Facebook, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';
import logo from '@assets/e17brand/logo.png';

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="E17 Course Logo" className="h-12 mb-6 brightness-0 invert" />
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Lembaga pelatihan IT terpercaya di Indonesia dengan sertifikasi BNSP. 
              Membangun masa depan profesional teknologi lewat pendidikan berkualitas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 font-sans">Navigasi</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#hero" className="hover:text-accent transition-colors">Beranda</a></li>
              <li><a href="#program" className="hover:text-accent transition-colors">Program</a></li>
              <li><a href="#publikasi" className="hover:text-accent transition-colors">Publikasi</a></li>
              <li><a href="#artikel" className="hover:text-accent transition-colors">Artikel</a></li>
              <li><a href="#tentang" className="hover:text-accent transition-colors">Tentang Kami</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 font-sans">Kontak</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Mail className="mt-1 text-primary" size={20} />
                <span>info@e17course.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-1 text-primary shrink-0 flex items-center justify-center font-bold">📍</div>
                <span>Graha Edukasi, Lt. 3<br/>Jl. Teknologi No. 17<br/>Jakarta Selatan 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 PT Edukasi Tujuh Belas. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
