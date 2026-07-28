export interface BootcampDetail {
  title: string;
  category: string;
  sessions: string;
  format: string;
  softSkill: string;
  materi: string[];
  kompetensi: {
    practical: string;
    career: string;
  };
  footerQuote: string;
  slug: string;
}

export const bootcampDetailsMap: Record<string, BootcampDetail> = {
  'core-banking-temenos-24': {
    slug: 'core-banking-temenos-24',
    title: 'Core Banking - Temenos T24',
    category: 'SOFTWARE DEVELOPMENT',
    sessions: '20 Sesi Hard Skill (120 Menit/Sesi)',
    format: 'Full Online / Hybrid',
    softSkill: 'Free 3 Sesi Soft Skill',
    materi: [
      'Core Banking Fundamental: Konsep & arsitektur sistem perbankan',
      'T24 System Structure: Struktur komponen & ekosistem Temenos T24',
      'Core Module Management: Pengelolaan modul Account, Customer, & Transaction',
      'Basic System Customization: Logika konfigurasi dasar sistem Temenos T24',
      'End-to-End Transaction Flow: Simulasi alur transaksi perbankan riil'
    ],
    kompetensi: {
      practical: 'Mampu mengoperasikan dan menganalisis alur transaksi core banking system.',
      career: 'Memiliki keahlian siap pakai untuk posisi IT Banking, System Analyst, atau Consultant di sektor perbankan & fintech.'
    },
    footerQuote: 'Wujudkan mimpimu #BeTheNextTechAvengers,<br />siap jadi Temenos T24 Specialist dengan kurikulum berstandar industri.'
  },
  'outsystems-development': {
    slug: 'outsystems-development',
    title: 'Outsystems Development',
    category: 'SOFTWARE DEVELOPMENT',
    sessions: '20 Sesi Hard Skill (120 Menit/Sesi)',
    format: 'Full Online / Hybrid',
    softSkill: 'Free 3 Sesi Soft Skill',
    materi: [
      'Low-Code Platform: Pengenalan dasar arsitektur & ekosistem OutSystems',
      'UI Development: Perancangan antarmuka responsif via drag & drop',
      'Logic & Workflow: Pengaturan alur proses bisnis & logika aplikasi',
      'Database Integration: Manajemen data & koneksi database enterprise',
      'Application Deployment: Simulasi publikasi & pelunculan aplikasi siap pakai'
    ],
    kompetensi: {
      practical: 'Mampu membangun aplikasi enterprise fungsional secara cepat tanpa kompleksitas koding tinggi.',
      career: 'Memiliki keahlian siap pakai untuk posisi Low-Code Enterprise Developer, OutSystems Engineer, atau App Consultant di sektor industri modern.'
    },
    footerQuote: 'Wujudkan mimpimu #BeTheNextTechAvengers,<br />siap jadi Low-Code Enterprise Developer dengan kurikulum berstandar industri.'
  },
  'frontend-development-reactjs': {
    slug: 'frontend-development-reactjs',
    title: 'Frontend Development - React.JS',
    category: 'SOFTWARE DEVELOPMENT',
    sessions: '20 Sesi Hard Skill (120 Menit/Sesi)',
    format: 'Full Online / Hybrid',
    softSkill: 'Free 3 Sesi Soft Skill',
    materi: [
      'Modern JavaScript: Pemahaman dasar JavaScript modern',
      'Component & State: Penguasaan konsep component dan state',
      'Navigation & Routing: Pengaturan routing untuk navigasi halaman web',
      'API Integration: Integrasi API untuk menghubungkan frontend ke backend',
      'State & Deployment: Manajemen state tingkat dasar dan publikasi (deployment) frontend'
    ],
    kompetensi: {
      practical: 'Mampu membuat tampilan website atau aplikasi interaktif dan modern (seperti dashboard, landing page) serta menguasai cara consume API dari backend.',
      career: 'Memiliki keahlian siap pakai untuk posisi Frontend Developer, React JS Developer, atau Web Engineer di berbagai perusahaan teknologi & industri digital.'
    },
    footerQuote: 'Wujudkan mimpimu #BeTheNextTechAvengers,<br />siap jadi Frontend Developer dengan kurikulum berstandar industri.'
  },
  'backend-development-nodejs': {
    slug: 'backend-development-nodejs',
    title: 'Backend Development - Node.JS',
    category: 'SOFTWARE DEVELOPMENT',
    sessions: '20 Sesi Hard Skill (120 Menit/Sesi)',
    format: 'Full Online / Hybrid',
    softSkill: 'Free 3 Sesi Soft Skill',
    materi: [
      'Server Foundation: Penguasaan dasar NodeJS & ExpressJS',
      'API Development: Perancangan REST API yang efisien',
      'Database Management: Integrasi database menggunakan MongoDB / MySQL',
      'Security & Auth: Penerapan sistem keamanan autentikasi (login, register, JWT)',
      'Architecture & Deployment: Pengaturan middleware, struktur backend, hingga publikasi server'
    ],
    kompetensi: {
      practical: 'Mampu membuat sistem backend / server lengkap yang mengatur data dan logika aplikasi, serta mahir menangani database & autentikasi.',
      career: 'Memiliki keahlian siap pakai untuk posisi Backend Developer, Node.JS Engineer, atau System Architect di berbagai perusahaan teknologi & industri digital.'
    },
    footerQuote: 'Wujudkan mimpimu #BeTheNextTechAvengers,<br />siap jadi Backend Engineer dengan kurikulum berstandar industri.'
  },
  'manual-testing': {
    slug: 'manual-testing',
    title: 'QA Manual Testing',
    category: 'IT QUALITY ASSURANCE',
    sessions: '20 Sesi Hard Skill (120 Menit/Sesi)',
    format: 'Full Online / Hybrid',
    softSkill: 'Free 3 Sesi Soft Skill',
    materi: [
      'QA Fundamentals: Pemahaman fundamental Quality Assurance & SDLC',
      'Scenario Design: Penyusunan test case & test scenario yang presisi',
      'Bug Tracking: Teknik pencatatan dan pelaporan bug (bug reporting) secara profesional',
      'Exploratory Testing: Pelaksanaan eksplorasi pengujian untuk menemukan celah sistem',
      'User Acceptance: Pengujian akhir melalui UAT (User Acceptance Testing)'
    ],
    kompetensi: {
      practical: 'Mampu melakukan testing aplikasi secara manual dengan benar serta mendokumentasikan bug secara profesional.',
      career: 'Memiliki keahlian siap pakai untuk posisi QA Manual Specialist, Software Tester, atau Quality Assurance Specialist di berbagai perusahaan teknologi & korporat.'
    },
    footerQuote: 'Wujudkan mimpimu #BeTheNextTechAvengers,<br />siap jadi QA Manual Specialist dengan kurikulum berstandar industri.'
  },
  'automation-testing-katalon': {
    slug: 'automation-testing-katalon',
    title: 'QA Automation Testing - Katalon',
    category: 'IT QUALITY ASSURANCE',
    sessions: '20 Sesi Hard Skill (120 Menit/Sesi)',
    format: 'Full Online / Hybrid',
    softSkill: 'Free 3 Sesi Soft Skill',
    materi: [
      'Automation Foundation: Pengenalan dasar testing automation',
      'Katalon Studio Usage: Penguasaan dan pemanfaatan perangkat Katalon Studio',
      'Web Testing Automation: Implementasi otomatisasi pengujian berbasis web',
      'API Testing: Pengujian otomatis untuk API',
      'Test Management & Reporting: Pengelolaan test case, test suite, serta otomasi pelaporan (reporting automation)'
    ],
    kompetensi: {
      practical: 'Mampu membuat automation testing tanpa coding kompleks serta mengurangi beban pengujian manual secara signifikan (manual testing effort).',
      career: 'Memiliki keahlian siap pakai untuk posisi QA Automation Engineer, Software Test Automation Specialist, atau QA Analyst di berbagai perusahaan teknologi & korporat.'
    },
    footerQuote: 'Wujudkan mimpimu #BeTheNextTechAvengers,<br />siap jadi QA Automation Engineer dengan kurikulum berstandar industri.'
  }
};
