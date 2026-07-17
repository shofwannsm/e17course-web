import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const T = {
  id: {
    eyebrow: 'Testimoni',
    title: 'Cerita Sukses Alumni',
    subtitle: 'Ribuan peserta telah bertransformasi bersama kami. Kini giliran Anda.',
    items: [
      { name:'Budi Santoso',   role:'Alumni Fullstack Bootcamp',               quote:'Materi sangat terstruktur dan instruktur super sabar. Dari yang nol soal coding, sekarang saya sudah bekerja sebagai Junior Web Developer di startup Jakarta.', initials:'BS', color:'bg-primary text-white' },
      { name:'Siti Rahmawati', role:'Sertifikasi BNSP Digital Marketing',      quote:'Proses sertifikasi BNSP dibimbing dengan sangat baik. Portofolio saya makin kuat dan kredibel. Terima kasih E17 Course atas pendampingannya!',               initials:'SR', color:'bg-accent text-white' },
      { name:'Andi Saputra',   role:'Corporate Training Data Science',          quote:'Tim IT kami mendapatkan insight luar biasa. Pendekatan in-house training yang disesuaikan dengan studi kasus perusahaan sangat efektif dan direkomendasikan.',  initials:'AS', color:'bg-emerald-500 text-white' },
    ],
  },
  en: {
    eyebrow: 'Testimonials',
    title: 'Alumni Success Stories',
    subtitle: 'Thousands of participants have transformed with us. Now it\'s your turn.',
    items: [
      { name:'Budi Santoso',   role:'Fullstack Bootcamp Alumni',               quote:'The materials were very structured and the instructors were very patient. From knowing nothing about coding, I am now working as a Junior Web Developer at a Jakarta startup.', initials:'BS', color:'bg-primary text-white' },
      { name:'Siti Rahmawati', role:'BNSP Digital Marketing Certification',    quote:'The BNSP certification process was guided very well. My portfolio has become stronger and more credible. Thank you E17 Course for the mentoring!',                         initials:'SR', color:'bg-accent text-white' },
      { name:'Andi Saputra',   role:'Data Science Corporate Training',         quote:'Our IT team gained incredible insights. The in-house training approach tailored to our company\'s case studies was very effective and highly recommended.',                    initials:'AS', color:'bg-emerald-500 text-white' },
    ],
  },
};

export function Testimonials() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-xs font-bold tracking-widest text-primary uppercase mb-3">{t.eyebrow}</motion.p>
          <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">{t.title}</motion.h2>
          <motion.p  initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }} className="text-secondary/60 text-lg">{t.subtitle}</motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.items.map((item, i) => (
            <motion.div key={i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}
              className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl hover:border-gray-200 transition-all relative flex flex-col">
              <div className="flex items-center gap-0.5 text-primary mb-5">
                {[...Array(5)].map((_,si) => <Star key={si} size={14} fill="currentColor" />)}
              </div>
              <p className="text-secondary/70 text-base italic mb-8 leading-relaxed flex-1">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-full ${item.color} font-bold flex items-center justify-center text-sm shrink-0`}>{item.initials}</div>
                <div>
                  <h4 className="font-bold text-secondary text-sm">{item.name}</h4>
                  <p className="text-xs text-secondary/50 mt-0.5">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
