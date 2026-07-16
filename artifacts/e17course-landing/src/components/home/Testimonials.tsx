import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Alumni Fullstack Bootcamp',
    quote: 'Materi sangat terstruktur dan instruktur super sabar. Dari yang nol soal coding, sekarang saya sudah bekerja sebagai Junior Web Developer di startup Jakarta.',
    initials: 'BS',
    color: 'bg-primary text-white',
  },
  {
    name: 'Siti Rahmawati',
    role: 'Sertifikasi BNSP Digital Marketing',
    quote: 'Proses sertifikasi BNSP dibimbing dengan sangat baik. Portofolio saya makin kuat dan kredibel. Terima kasih E17 Course atas pendampingannya!',
    initials: 'SR',
    color: 'bg-accent text-white',
  },
  {
    name: 'Andi Saputra',
    role: 'Corporate Training Data Science',
    quote: 'Tim IT kami mendapatkan insight luar biasa. Pendekatan in-house training yang disesuaikan dengan studi kasus perusahaan sangat efektif dan direkomendasikan.',
    initials: 'AS',
    color: 'bg-emerald-500 text-white',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-primary uppercase mb-3"
          >
            Testimoni
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-secondary mb-4"
          >
            Cerita Sukses Alumni
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary/60 text-lg"
          >
            Ribuan peserta telah bertransformasi bersama kami. Kini giliran Anda.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl hover:border-gray-200 transition-all relative flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 text-primary mb-5">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="text-secondary/70 text-base italic mb-8 leading-relaxed flex-1">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-full ${t.color} font-bold flex items-center justify-center text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm">{t.name}</h4>
                  <p className="text-xs text-secondary/50 mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
