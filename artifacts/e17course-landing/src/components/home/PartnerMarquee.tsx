const partners = [
  { name: 'SMK Mitra', category: 'Sekolah' },
  { name: 'UNESA', category: 'Kampus' },
  { name: 'Telkom', category: 'Perusahaan' },
  { name: 'BNSP', category: 'Partner' },
  { name: 'SMK Telkom', category: 'Sekolah' },
  { name: 'ITS Surabaya', category: 'Kampus' },
  { name: 'Gojek', category: 'Perusahaan' },
  { name: 'Kominfo', category: 'Partner' },
  { name: 'SMK Negeri 1', category: 'Sekolah' },
  { name: 'UNAIR', category: 'Kampus' },
  { name: 'Tokopedia', category: 'Perusahaan' },
  { name: 'Kemendikbud', category: 'Partner' },
];

const categoryColor: Record<string, string> = {
  Sekolah: 'text-primary bg-primary/10',
  Kampus: 'text-accent bg-accent/10',
  Perusahaan: 'text-emerald-600 bg-emerald-50',
  Partner: 'text-purple-600 bg-purple-50',
};

export function PartnerMarquee() {
  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-xs font-bold tracking-widest text-secondary/40 uppercase mb-1">
          Dipercaya oleh
        </p>
        <h3 className="text-xl font-bold text-secondary">
          Ratusan institusi dan perusahaan di Indonesia
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-5 items-center whitespace-nowrap py-3">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center justify-center w-44 h-20 rounded-2xl border border-gray-100 bg-white hover:shadow-md hover:border-gray-200 transition-all"
            >
              <span className="font-extrabold text-base text-secondary">{partner.name}</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full mt-1.5 ${categoryColor[partner.category]}`}>
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
