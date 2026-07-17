import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Shield, BarChart2, Globe, Megaphone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const programs = {
  id: [
    { category:'Software Development', title:'Core Banking – Temenos 24',      desc:'Pelajari sistem core banking yang digunakan dalam industri perbankan modern secara mendalam.',                 slug:'core-banking'     },
    { category:'Software Development', title:'Outsystems Development',          desc:'Bangun aplikasi enterprise lebih cepat dengan platform low-code modern terdepan.',                               slug:'outsystems'       },
    { category:'Software Development', title:'Frontend Development – React.js', desc:'Kuasai fondasi dan praktik terbaik membangun antarmuka web modern dengan React.js.',                             slug:'frontend-reactjs' },
    { category:'Software Development', title:'Backend Development – Node.js',   desc:'Rancang dan bangun API serta layanan backend yang scalable dengan Node.js.',                                     slug:'backend-nodejs'   },
    { category:'Software Development', title:'Mobile Development – Flutter',    desc:'Kembangkan aplikasi mobile cross-platform dengan Flutter dan Dart dari dasar hingga deploy.',                    slug:'mobile-flutter'   },
    { category:'Software Development', title:'Full Stack Web Development',      desc:'Program komprehensif membangun aplikasi web modern dari frontend hingga backend dan deployment.',                slug:'fullstack'        },
    { category:'IT Quality Assurance', title:'Manual Testing',                  desc:'Bangun fondasi kuat pengujian software secara manual untuk menemukan bug dan meningkatkan kualitas aplikasi.',   slug:'manual-testing'   },
    { category:'IT Quality Assurance', title:'Automation Testing – Katalon',    desc:'Kuasai automation testing end-to-end memakai tools standar industri untuk proses lebih cepat dan efisiensi QA.',slug:'automation-katalon'},
    { category:'IT Quality Assurance', title:'Performance Testing – JMeter',    desc:'Uji performa dan skalabilitas aplikasi menggunakan Apache JMeter untuk memastikan sistem siap produksi.',       slug:'performance-jmeter'},
    { category:'Data & AI',            title:'Data Analytics – Python',         desc:'Analisis data besar dengan Python, Pandas, dan visualisasi data untuk pengambilan keputusan berbasis data.',     slug:'data-analytics'   },
    { category:'Data & AI',            title:'Machine Learning Fundamentals',   desc:'Pelajari konsep dan implementasi machine learning menggunakan Python dan scikit-learn dari nol.',               slug:'machine-learning' },
    { category:'Network & Security',   title:'Cyber Security Essentials',       desc:'Kuasai dasar-dasar keamanan siber, ethical hacking, dan perlindungan sistem dari ancaman digital.',            slug:'cybersecurity'    },
    { category:'Network & Security',   title:'Network Administration',          desc:'Pelajari administrasi jaringan komputer, konfigurasi router, switch, dan troubleshooting infrastruktur.',       slug:'network-admin'    },
    { category:'Digital Marketing',    title:'Digital Marketing Fundamentals',  desc:'Kuasai strategi pemasaran digital: SEO, SEM, media sosial, content marketing, dan analitik kampanye.',         slug:'digital-marketing'},
  ],
  en: [
    { category:'Software Development', title:'Core Banking – Temenos 24',      desc:'Deeply learn the core banking systems used in the modern banking industry.',                                      slug:'core-banking'     },
    { category:'Software Development', title:'Outsystems Development',          desc:'Build enterprise applications faster with the leading modern low-code platform.',                                 slug:'outsystems'       },
    { category:'Software Development', title:'Frontend Development – React.js', desc:'Master the foundations and best practices for building modern web interfaces with React.js.',                     slug:'frontend-reactjs' },
    { category:'Software Development', title:'Backend Development – Node.js',   desc:'Design and build scalable APIs and backend services with Node.js.',                                              slug:'backend-nodejs'   },
    { category:'Software Development', title:'Mobile Development – Flutter',    desc:'Develop cross-platform mobile apps with Flutter and Dart from the basics to deployment.',                        slug:'mobile-flutter'   },
    { category:'Software Development', title:'Full Stack Web Development',      desc:'Comprehensive program to build modern web apps from frontend to backend and deployment.',                        slug:'fullstack'        },
    { category:'IT Quality Assurance', title:'Manual Testing',                  desc:'Build a strong foundation in software testing manually to find bugs and improve application quality.',            slug:'manual-testing'   },
    { category:'IT Quality Assurance', title:'Automation Testing – Katalon',    desc:'Master end-to-end automation testing using industry-standard tools for faster and more efficient QA.',          slug:'automation-katalon'},
    { category:'IT Quality Assurance', title:'Performance Testing – JMeter',    desc:'Test application performance and scalability using Apache JMeter to ensure systems are production-ready.',       slug:'performance-jmeter'},
    { category:'Data & AI',            title:'Data Analytics – Python',         desc:'Analyse big data with Python, Pandas, and data visualisation for data-driven decision making.',                  slug:'data-analytics'   },
    { category:'Data & AI',            title:'Machine Learning Fundamentals',   desc:'Learn machine learning concepts and implementation using Python and scikit-learn from scratch.',                 slug:'machine-learning' },
    { category:'Network & Security',   title:'Cyber Security Essentials',       desc:'Master cybersecurity fundamentals, ethical hacking, and digital system protection.',                            slug:'cybersecurity'    },
    { category:'Network & Security',   title:'Network Administration',          desc:'Learn computer network administration, router/switch configuration, and infrastructure troubleshooting.',        slug:'network-admin'    },
    { category:'Digital Marketing',    title:'Digital Marketing Fundamentals',  desc:'Master digital marketing strategy: SEO, SEM, social media, content marketing, and campaign analytics.',        slug:'digital-marketing'},
  ],
};

const categories = {
  id: ['Semua','Software Development','IT Quality Assurance','Data & AI','Network & Security','Digital Marketing'],
  en: ['All',  'Software Development','IT Quality Assurance','Data & AI','Network & Security','Digital Marketing'],
};

const catIcons = [null, Code2, Shield, BarChart2, Globe, Megaphone];

const T = {
  id: { eyebrow:'Bootcamp & Training', h2a:'BE THE NEXT', h2b:'TECH AVENGERS', sub1:'Mulai Karier IT dengan Learning Path yang Tepat!', sub2:'Pilih program yang sesuai dengan tujuan karier dan kuasai skill yang dibutuhkan untuk berkembang di industri teknologi.', trackRecord:'Track Record Kami', stats:[{v:'14+',l:'Program'},{v:'98%',l:'Terserap Industri'},{v:'50+',l:'Hiring Partners'}], quote:'"Kurikulum berbasis industri, instruktur praktisi aktif, dan sertifikasi resmi BNSP."', cta:'Lihat Semua Program Bootcamp & Training', link:'Konsultasi & Daftar' },
  en: { eyebrow:'Bootcamp & Training', h2a:'BE THE NEXT', h2b:'TECH AVENGERS', sub1:'Start Your IT Career with the Right Learning Path!', sub2:'Choose the program that fits your career goals and master the skills needed to thrive in the tech industry.', trackRecord:'Our Track Record', stats:[{v:'14+',l:'Programs'},{v:'98%',l:'Industry Absorbed'},{v:'50+',l:'Hiring Partners'}], quote:'"Industry-based curriculum, active practitioner instructors, and official BNSP certification."', cta:'View All Bootcamp & Training Programs', link:'Consult & Register' },
};

export function ProgramSection() {
  const { lang } = useLanguage();
  const t = T[lang];
  const cats = categories[lang];
  const progs = programs[lang];
  const [activeCat, setActiveCat] = useState(cats[0]);

  const filtered = activeCat === cats[0] ? progs : progs.filter(p => p.category === (cats.indexOf(activeCat) >= 1 ? categories.id[cats.indexOf(activeCat)] : activeCat));

  return (
    <section id="program" className="py-24 bg-white relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 w-96 h-96 opacity-[0.04]" style={{ backgroundImage:'radial-gradient(circle, #D4A200 1.5px, transparent 1.5px)', backgroundSize:'28px 28px' }} />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-widest text-primary uppercase bg-primary/8 px-3 py-1.5 rounded-full mb-4">
              <Code2 size={13} /> {t.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary leading-[1.1] mb-4">{t.h2a}<br /><span className="text-primary">{t.h2b}</span></h2>
            <p className="font-bold text-secondary mb-1">{t.sub1}</p>
            <p className="text-secondary/55 text-sm leading-relaxed max-w-md">{t.sub2}</p>
          </motion.div>
          <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} className="hidden md:block">
            <div className="relative bg-secondary rounded-3xl p-8 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
              <p className="text-primary text-[11px] font-bold tracking-widest uppercase mb-6 relative">{t.trackRecord}</p>
              <div className="grid grid-cols-3 gap-4 relative">
                {t.stats.map(s => (
                  <div key={s.l} className="text-center">
                    <p className="text-3xl font-extrabold text-primary">{s.v}</p>
                    <p className="text-[11px] text-white/50 mt-1 leading-tight">{s.l}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 relative">
                <p className="text-white/70 text-xs leading-relaxed italic">{t.quote}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
          {cats.map((cat, idx) => {
            const Icon = catIcons[idx];
            return (
              <button key={cat} onClick={() => setActiveCat(cat)} className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCat===cat ? 'bg-primary text-secondary shadow-sm' : 'bg-gray-100 text-secondary/60 hover:bg-gray-200 hover:text-secondary'}`}>
                {Icon && <Icon size={13} />}{cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <motion.div key={p.slug} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.05 }}
              className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex flex-col hover:shadow-lg hover:border-primary/30 transition-all group">
              <span className="text-[10px] font-extrabold tracking-widest text-primary/70 uppercase mb-3">{p.category}</span>
              <h3 className="text-base font-extrabold text-secondary mb-3 leading-snug">{p.title}</h3>
              <p className="text-sm text-secondary/60 leading-relaxed flex-1 mb-5">{p.desc}</p>
              <a href={`#${p.slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-secondary transition-colors group-hover:gap-2.5">
                {t.link} <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="flex justify-center mt-12">
          <button className="px-8 py-4 rounded-full border-2 border-secondary text-secondary font-bold text-base hover:bg-secondary hover:text-white transition-all flex items-center gap-2 group">
            {t.cta}<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
