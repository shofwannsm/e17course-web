export interface ArticleContent {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

export const articleContentsMap: Record<number, ArticleContent> = {
  1: {
    id: 1,
    category: 'Web Development',
    title: '8 Rekomendasi Mesin Pencari Bebas Akses dan Legal',
    author: 'E17 Editorial',
    date: '14 June 2024',
    readTime: '5 menit',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    content: [
      'Ketika berbicara tentang mencari informasi di internet, mayoritas pengguna langsung tertuju pada Google. Namun, tahukah Anda bahwa ada banyak alternatif mesin pencari bebas akses, aman, dan legal yang menawarkan privasi lebih baik?',
      'Berikut adalah 8 mesin pencari alternatif terbaik yang bisa Anda gunakan secara legal:',
      '1. <strong>DuckDuckGo</strong>: Mesin pencari paling populer bagi pencari privasi. Mereka tidak pernah melacak riwayat pencarian Anda maupun mengoleksi data pribadi Anda.',
      '2. <strong>Startpage</strong>: Menyediakan hasil pencarian Google tetapi dengan privasi DuckDuckGo. Mereka bertindak sebagai perantara yang menghapus informasi pribadi Anda sebelum mengirim kueri ke Google.',
      '3. <strong>Brave Search</strong>: Mesin pencari independen yang dibuat oleh tim di balik browser Brave. Memiliki indeks pencarian sendiri tanpa bergantung pada raksasa teknologi lain.',
      '4. <strong>Ecosia</strong>: Sangat unik karena menyumbangkan sekitar 80% keuntungan iklan mereka untuk mendanai program penanaman pohon di seluruh dunia.',
      '5. <strong>Qwant</strong>: Mesin pencari asal Prancis yang mematuhi hukum privasi ketat Uni Eropa (GDPR) dan tidak pernah menyaring hasil pencarian berdasarkan profil pengguna.',
      '6. <strong>Swisscows</strong>: Menggunakan teknologi AI dan memiliki server fisik di Swiss yang dikenal dengan undang-undang privasi terketat di dunia.',
      '7. <strong>Searx</strong>: Mesin pencari metasearch open-source yang sangat transparan dan bisa di-host sendiri oleh pengguna berpengalaman.',
      '8. <strong>Gibiru</strong>: Menyediakan hasil pencarian tanpa sensor dan mengenkripsi semua kueri Anda untuk mencegah kebocoran data ke pihak ketiga.',
      'Menggunakan alternatif mesin pencari di atas tidak hanya memperluas wawasan pencarian Anda, tetapi juga membantu melindungi privasi digital Anda di era modern ini.'
    ]
  },
  2: {
    id: 2,
    category: 'Digital Marketing',
    title: '5+ Contoh Digital Marketing yang Sukses di Indonesia',
    author: 'Raniah Fatimah',
    date: '21 June 2023',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    content: [
      'Pemasaran digital di Indonesia berkembang dengan laju yang luar biasa pesat. Perusahaan lokal dan startup unicorn berhasil memanfaatkan berbagai channel digital marketing untuk membangun kedekatan emosional dan mendorong konversi penjualan yang fantastis.',
      'Mari pelajari 5 contoh strategi digital marketing yang dinilai sangat sukses di Indonesia:',
      '1. <strong>Kampanye Edukatif Ruangguru</strong>: Menggunakan kombinasi konten edukatif gratis di YouTube dan Instagram, berkolaborasi dengan guru berprestasi dan influencer muda untuk menarik kepercayaan orang tua siswa.',
      '2. <strong>Tokopedia - Waktu Indonesia Belanja (WIB)</strong>: Menggabungkan promo bulanan di aplikasi dengan konser musik interaktif yang disiarkan di TV nasional serta live streaming di platform digital.',
      '3. <strong>Gojek - Kampanye Lokal Kreatif</strong>: Menghasilkan iklan video viral di media sosial dengan pendekatan humor lokal, *relatable copy*, dan mengedukasi masyarakat tentang fungsionalitas aplikasi super (superapp).',
      '4. <strong>Shopee - Pemasaran Berbasis Gamifikasi</strong>: Menggunakan kuis Shopee, Shopee Tanam, dan game interaktif di dalam aplikasi guna meningkatkan retensi pengguna harian secara signifikan.',
      '5. <strong>Traveloka - Real-time Price Alerts & Email Marketing</strong>: Mengirimkan rekomendasi destinasi wisata personal berdasarkan riwayat pencarian pengguna serta notifikasi harga tiket murah secara instan.',
      'Kunci sukses utama dari seluruh kampanye digital marketing di atas adalah pemahaman mendalam tentang perilaku pengguna lokal, konsistensi penyampaian nilai brand, serta analisis data perilaku yang berkelanjutan.'
    ]
  },
  3: {
    id: 3,
    category: 'Career Development',
    title: '130+ Contoh Judul Karya Ilmiah di Berbagai Bidang',
    author: 'Muthiatur Rohmah',
    date: '05 May 2024',
    readTime: '6 menit',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    content: [
      'Menulis karya ilmiah adalah salah satu syarat kelulusan bagi mahasiswa. Namun, menemukan ide judul penelitian yang orisinal, menarik, dan memiliki kontribusi nyata sering kali menjadi hambatan pertama yang paling membingungkan.',
      'Berikut adalah beberapa contoh kluster judul karya ilmiah yang bisa menginspirasi penelitian Anda:',
      '<strong>Kluster Bidang Informatika & Sistem Informasi:</strong>',
      '• Rancang Bangun Sistem Monitoring Kualitas Air Tambak Berbasis IoT (Internet of Things).',
      '• Analisis Sentimen Ulasan Aplikasi E-Commerce Menggunakan Algoritma Support Vector Machine (SVM).',
      '• Implementasi Metode Agile Scrum dalam Pengembangan Sistem Manajemen Penjualan Retail.',
      '<strong>Kluster Bidang Ekonomi & Bisnis Digital:</strong>',
      '• Pengaruh Penggunaan E-Wallet Terhadap Perilaku Konsumtif Mahasiswa di Kota Metropolitan.',
      '• Analisis Efektivitas Endorsement Influencer TikTok Terhadap Minat Beli Konsumen Generasi Z.',
      '• Strategi Adaptasi UMKM Melalui Penerapan Standard QRIS (QR Code Indonesian Standard).',
      '<strong>Tips Memilih Judul:</strong> Pastikan judul yang Anda pilih memiliki landasan masalah yang kuat, metode analisis yang jelas, serta ketersediaan data riset yang memadai selama proses penelitian.'
    ]
  },
  4: {
    id: 4,
    category: 'Software Dev',
    title: 'React.js vs Next.js: Mana yang Harus Kamu Pelajari Duluan?',
    author: 'Budi Santoso',
    date: '08 July 2024',
    readTime: '6 menit',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80',
    content: [
      'Bagi para calon frontend web developer yang baru menyelesaikan dasar HTML, CSS, dan JavaScript, pertanyaan berikutnya yang sering muncul adalah: "Lebih baik belajar React.js dulu atau langsung lompat ke Next.js?"',
      'Mari kita bedah perbedaan mendasar dari kedua teknologi terpopuler buatan Meta dan Vercel ini:',
      '<strong>React.js</strong> adalah perpustakaan (library) JavaScript open-source untuk membangun antarmuka pengguna (UI). Sifatnya sangat fleksibel, ringan, dan fokus pada pembuatan komponen visual.',
      '<strong>Next.js</strong> adalah kerangka kerja (framework) React.js tingkat lanjut. Next.js menyediakan fitur siap pakai seperti Server-Side Rendering (SSR), Static Site Generation (SSG), file-based routing, dan optimasi gambar otomatis.',
      '<strong>Rekomendasi Jalur Belajar:</strong>',
      'Sangat disarankan untuk mempelajari <strong>React.js terlebih dahulu</strong>. Memahami state, props, hooks, lifecycle, dan cara kerja Virtual DOM di React adalah fondasi mutlak yang harus dikuasai sebelum Anda bisa memanfaatkan fitur-fitur canggih di Next.js secara optimal.',
      'Setelah menguasai React selama beberapa bulan, transisi ke Next.js akan terasa sangat mudah dan masuk akal karena Anda tinggal mempelajari konsep render server dan optimasi performanya.'
    ]
  },
  5: {
    id: 5,
    category: 'Sertifikasi',
    title: 'Panduan Lengkap Sertifikasi BNSP 2026: Syarat & Alur Uji',
    author: 'Reza Firmansyah',
    date: '10 July 2024',
    readTime: '8 menit',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    content: [
      'Di era persaingan kerja yang ketat saat ini, memiliki ijazah akademis saja terkadang belum cukup untuk membuktikan kemampuan praktis Anda. Sertifikasi Kompetensi Resmi dari BNSP (Badan Nasional Sertifikasi Profesi) hadir sebagai validasi resmi atas keahlian Anda diakui oleh negara dan industri.',
      'Berikut adalah tahapan lengkap dalam mengikuti proses sertifikasi kompetensi:',
      '1. <strong>Memilih Skema yang Tepat</strong>: Sesuaikan skema kompetensi (misal: Data Analyst, Programmer, Desainer Grafis) dengan latar belakang atau minat karier Anda.',
      '2. <strong>Persiapan Berkas (Form APL-01 & APL-02)</strong>: Mengisi data diri lengkap dan penilaian mandiri untuk mengukur kesiapan Anda menghadapi ujian.',
      '3. <strong>Mengumpulkan Portofolio Bukti Kerja</strong>: Portofolio seperti hasil koding, desain, atau sertifikat pelatihan sebelumnya menjadi bukti konkrit keahlian Anda.',
      '4. <strong>Menghadapi Asesmen (Uji Kompetensi)</strong>: Meliputi tes tertulis, tes wawancara, serta demonstrasi praktik langsung di depan Asesor resmi berlisensi.',
      '5. <strong>Keputusan Uji Kompetensi</strong>: Asesor akan merekomendasikan hasil uji Anda kepada Lembaga Sertifikasi Profesi (LSP) dengan predikat *Kompeten* atau *Belum Kompeten*.',
      'Mendapatkan sertifikat berlogo garuda emas BNSP akan meningkatkan *employability* serta nilai tawar profesional Anda di hadapan HRD perusahaan.'
    ]
  },
  6: {
    id: 6,
    category: 'Career Development',
    title: '7 Skill Soft Wajib Dimiliki IT Professional di 2026',
    author: 'Andi Pratama',
    date: '12 July 2024',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    content: [
      'Teknologi kecerdasan buatan (AI) berkembang pesat dan mampu menyelesaikan banyak tugas koding teknis secara instan. Di masa kini, kemampuan hard skill saja tidak lagi menjamin kesuksesan jangka panjang seorang profesional IT.',
      'Berikut adalah 7 soft skill esensial yang wajib Anda asah:',
      '1. <strong>Komunikasi Efektif</strong>: Mampu menjelaskan konsep teknis yang rumit ke dalam bahasa sederhana yang mudah dimengerti klien atau tim bisnis.',
      '2. <strong>Kemampuan Adaptasi</strong>: Cepat mempelajari framework, bahasa pemrograman, atau alur kerja baru tanpa merasa cemas.',
      '3. <strong>Kolaborasi & Kerja Tim</strong>: Bekerja harmonis dalam ekosistem tim lintas divisi (designer, QA, product manager).',
      '4. <strong>Problem Solving</strong>: Berpikir analitis untuk mengurai kendala sistem (bug/issue) dan merancang alternatif solusi yang efisien.',
      '5. <strong>Time Management</strong>: Mengelola skala prioritas tugas di tengah tenggat waktu proyek yang padat.',
      '6. <strong>Empati & Pemahaman Pengguna</strong>: Merancang sistem bukan hanya untuk mesin, tapi mengutamakan kemudahan akses bagi pengguna akhir.',
      '7. <strong>Emotional Intelligence (EQ)</strong>: Mengelola stres, tetap tenang di bawah tekanan, serta terbuka terhadap masukan atau kritik konstruktif.',
      'Dengan memadukan keahlian teknis handal dan soft skill berkualitas, Anda akan menjadi talenta IT profesional bernilai tinggi yang dicari oleh industri.'
    ]
  }
};
