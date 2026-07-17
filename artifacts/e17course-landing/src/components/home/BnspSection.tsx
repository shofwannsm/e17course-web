import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const schemes = {
  id: [
    { category:'Data Science',        title:'Artificial Intelligence Management', desc:'Kuasai pengelolaan proyek AI dari perencanaan hingga perawatan solusi kecerdasan buatan.',           slug:'ai-management'    },
    { category:'Data Science',        title:'Data Analyst',                       desc:'Buktikan kemampuan mengolah dan mengamankan data untuk mendukung keputusan bisnis.',                  slug:'data-analyst'     },
    { category:'Data Science',        title:'Data Scientist',                     desc:'Validasi kompetensi membangun dan mengevaluasi model data science secara profesional.',               slug:'data-scientist'   },
    { category:'Data Science',        title:'Big Data Specialist',                desc:'Sertifikasi kemampuan mengelola dan memproses data skala besar menggunakan platform modern.',        slug:'big-data'         },
    { category:'Software Development',title:'Junior Web Developer',               desc:'Validasi kompetensi dasar pengembangan web front-end dan back-end sesuai standar BNSP.',             slug:'junior-web-dev'   },
    { category:'Software Development',title:'Pemrograman Berorientasi Objek',     desc:'Sertifikasi penguasaan konsep OOP dan implementasinya dalam bahasa pemrograman modern.',            slug:'oop'              },
    { category:'Software Development',title:'Mobile Application Developer',       desc:'Buktikan kemampuan merancang dan membangun aplikasi mobile lintas platform.',                        slug:'mobile-dev'       },
    { category:'Software Development',title:'Database Programmer',                desc:'Validasi kompetensi desain, implementasi, dan pengelolaan database relasional.',                     slug:'database'         },
    { category:'Multimedia & Design', title:'Graphic Designer',                   desc:'Sertifikasi kompetensi desain grafis digital untuk media cetak dan digital profesional.',            slug:'graphic-designer' },
    { category:'Multimedia & Design', title:'UI/UX Designer',                     desc:'Validasi kemampuan merancang antarmuka dan pengalaman pengguna yang efektif dan estetis.',           slug:'ui-ux'            },
    { category:'Multimedia & Design', title:'Video Editor',                       desc:'Buktikan kompetensi produksi dan pengeditan video untuk konten digital berkualitas tinggi.',         slug:'video-editor'     },
    { category:'IT Infrastructure',   title:'Administrasi Sistem Jaringan',       desc:'Sertifikasi kemampuan instalasi, konfigurasi, dan pemeliharaan infrastruktur jaringan komputer.',   slug:'network-admin'    },
    { category:'IT Infrastructure',   title:'Cyber Security Analyst',             desc:'Validasi kompetensi identifikasi dan penanganan ancaman keamanan siber pada sistem organisasi.',    slug:'cyber-security'   },
    { category:'IT Infrastructure',   title:'Cloud Computing Practitioner',       desc:'Buktikan kemampuan mengelola layanan cloud untuk kebutuhan infrastruktur bisnis modern.',           slug:'cloud'            },
    { category:'Office Productivity', title:'Spreadsheet Specialist',             desc:'Sertifikasi penguasaan pengolahan data, formula, dan visualisasi menggunakan aplikasi spreadsheet.',slug:'spreadsheet'      },
    { category:'Office Productivity', title:'Digital Documentation',              desc:'Validasi kemampuan membuat dan mengelola dokumen digital profesional untuk kebutuhan kerja.',        slug:'digital-docs'     },
    { category:'Digital Business',    title:'Digital Marketing Specialist',       desc:'Sertifikasi kompetensi strategi dan implementasi pemasaran digital yang terukur dan efektif.',      slug:'digital-mktg'     },
    { category:'Digital Business',    title:'E-Commerce Operator',                desc:'Validasi kemampuan mengelola toko online, katalog produk, dan transaksi digital secara profesional.',slug:'ecommerce'        },
    { category:'Digital Business',    title:'Content Creator Professional',       desc:'Buktikan kompetensi perencanaan, pembuatan, dan distribusi konten digital yang efektif.',          slug:'content-creator'  },
  ],
  en: [
    { category:'Data Science',        title:'Artificial Intelligence Management', desc:'Master AI project management from planning to maintaining intelligent solutions.',                    slug:'ai-management'    },
    { category:'Data Science',        title:'Data Analyst',                       desc:'Prove your ability to process and secure data to support business decision-making.',                 slug:'data-analyst'     },
    { category:'Data Science',        title:'Data Scientist',                     desc:'Validate the competency of building and evaluating data science models professionally.',             slug:'data-scientist'   },
    { category:'Data Science',        title:'Big Data Specialist',                desc:'Certification of ability to manage and process large-scale data using modern platforms.',           slug:'big-data'         },
    { category:'Software Development',title:'Junior Web Developer',               desc:'Validate basic web development competency for front-end and back-end per BNSP standards.',          slug:'junior-web-dev'   },
    { category:'Software Development',title:'Object-Oriented Programming',        desc:'Certification of mastery of OOP concepts and their implementation in modern programming languages.',slug:'oop'              },
    { category:'Software Development',title:'Mobile Application Developer',       desc:'Prove the ability to design and build cross-platform mobile applications.',                        slug:'mobile-dev'       },
    { category:'Software Development',title:'Database Programmer',                desc:'Validate competency in design, implementation, and management of relational databases.',            slug:'database'         },
    { category:'Multimedia & Design', title:'Graphic Designer',                   desc:'Certification of digital graphic design competency for professional print and digital media.',      slug:'graphic-designer' },
    { category:'Multimedia & Design', title:'UI/UX Designer',                     desc:'Validate the ability to design effective and aesthetic user interfaces and experiences.',           slug:'ui-ux'            },
    { category:'Multimedia & Design', title:'Video Editor',                       desc:'Prove video production and editing competency for high-quality digital content.',                   slug:'video-editor'     },
    { category:'IT Infrastructure',   title:'Network System Administration',      desc:'Certification of ability to install, configure, and maintain computer network infrastructure.',    slug:'network-admin'    },
    { category:'IT Infrastructure',   title:'Cyber Security Analyst',             desc:'Validate competency in identifying and handling cyber security threats in organisational systems.', slug:'cyber-security'   },
    { category:'IT Infrastructure',   title:'Cloud Computing Practitioner',       desc:'Prove the ability to manage cloud services for modern business infrastructure needs.',              slug:'cloud'            },
    { category:'Office Productivity', title:'Spreadsheet Specialist',             desc:'Certification of mastery of data processing, formulas, and visualisation using spreadsheet apps.', slug:'spreadsheet'      },
    { category:'Office Productivity', title:'Digital Documentation',              desc:'Validate the ability to create and manage professional digital documents for work needs.',          slug:'digital-docs'     },
    { category:'Digital Business',    title:'Digital Marketing Specialist',       desc:'Certification of strategy and implementation competency for measurable digital marketing.',        slug:'digital-mktg'     },
    { category:'Digital Business',    title:'E-Commerce Operator',                desc:'Validate the ability to manage online stores, product catalogues, and digital transactions.',      slug:'ecommerce'        },
    { category:'Digital Business',    title:'Content Creator Professional',       desc:'Prove competency in planning, creating, and distributing effective digital content.',               slug:'content-creator'  },
  ],
};

const categories = {
  id: ['Semua','Data Science','Software Development','Multimedia & Design','IT Infrastructure','Office Productivity','Digital Business'],
  en: ['All',  'Data Science','Software Development','Multimedia & Design','IT Infrastructure','Office Productivity','Digital Business'],
};

const T = {
  id: { badge:'Sertifikasi BNSP', h2a:'TERLATIH,', h2b:'KOMPETEN,', h2c:'UNGGUL!', quote:'Untuk menang di dunia kerja, kompetensi saja tidak cukup.', quoteEm:'You need a stamp of excellence!', badges:['Diakui Nasional','Standar Industri','Ujian Terstruktur'], sub:'Pilihan Skema Sertifikasi', link:'Lihat detail & persyaratan', cta:'Lihat Semua Skema Sertifikasi' },
  en: { badge:'BNSP Certification', h2a:'TRAINED,', h2b:'COMPETENT,', h2c:'EXCELLENT!', quote:'To win in the workplace, competency alone is not enough.', quoteEm:'You need a stamp of excellence!', badges:['Nationally Recognised','Industry Standard','Structured Exam'], sub:'Available Certification Schemes', link:'View details & requirements', cta:'View All Certification Schemes' },
};

export function BnspSection() {
  const { lang } = useLanguage();
  const t = T[lang];
  const cats = categories[lang];
  const items = schemes[lang];
  const [activeCat, setActiveCat] = useState(cats[0]);

  const filtered = activeCat === cats[0] ? items : items.filter(s => s.category === categories.id[cats.indexOf(activeCat)]);

  return (
    <section id="sertifikasi" className="py-24 bg-gray-50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="text-[18rem] font-extrabold text-secondary/[0.025] select-none leading-none">BNSP</span>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border border-primary/20 shadow-sm text-primary text-[11px] font-extrabold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <ShieldCheck size={14} />{t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary leading-[1.1] mb-5">
            {t.h2a}<br /><span className="text-primary">{t.h2b}</span> {t.h2c}
          </h2>
          <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 inline-block text-left shadow-sm mb-6">
            <div className="flex gap-1 mb-2">{[...Array(5)].map((_,i) => <Star key={i} size={12} className="fill-primary text-primary" />)}</div>
            <p className="text-secondary/70 text-sm leading-relaxed">{t.quote} <em className="text-accent font-semibold not-italic">{t.quoteEm}</em></p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {t.badges.map(b => <span key={b} className="bg-primary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full">✓ {b}</span>)}
          </div>
          <h3 className="text-lg font-bold text-secondary mt-6">{t.sub}</h3>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {cats.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${activeCat===cat ? 'bg-primary text-secondary border-primary shadow-sm' : 'bg-white text-secondary/60 border-gray-200 hover:border-gray-400 hover:text-secondary'}`}>{cat}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s, i) => (
            <motion.div key={s.slug} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.05 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:shadow-lg hover:border-primary/30 transition-all group">
              <span className="text-[10px] font-extrabold tracking-widest text-accent uppercase mb-3">{s.category}</span>
              <h3 className="text-base font-extrabold text-secondary mb-3 leading-snug">{s.title}</h3>
              <p className="text-sm text-secondary/55 leading-relaxed flex-1 mb-5">{s.desc}</p>
              <a href={`#${s.slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-secondary transition-colors group-hover:gap-2.5">
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
