import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ShieldCheck, BookOpen, Layers, FileText, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { type BnspSchemeDetail, bnspRoadmap } from '@/data/bnspDetails';

interface BnspDetailModalProps {
  scheme: BnspSchemeDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BnspDetailModal({ scheme, isOpen, onClose }: BnspDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'units' | 'procedure' | 'requirements'>('units');

  if (!scheme) return null;

  const waMessage = encodeURIComponent(
    `Halo E17 Course, saya ingin konsultasi & mendaftar Sertifikasi BNSP untuk skema: *${scheme.title}*. Mohon informasi jadwal dan ketersediaan kuota.`
  );

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        hideDefaultClose={true}
        overlayClassName="bg-black/30 backdrop-blur-xs"
        className="max-w-4xl max-h-[92vh] overflow-y-auto p-0 rounded-3xl border-none bg-transparent shadow-none"
      >
        
        {/* Outer Very Soft Cream-Yellow Card Container */}
        <div className="bg-gradient-to-b from-[#fffef5] via-[#fffdf0] to-[#fffbe8] p-4 sm:p-7 rounded-3xl shadow-2xl border-2 border-amber-200/70 relative overflow-hidden">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white hover:bg-gray-100 text-gray-700 font-bold flex items-center justify-center shadow-md transition-transform hover:scale-105 z-20 border border-gray-200/80"
          >
            <X size={18} />
          </button>

          {/* Top Pill Header Title */}
          <div className="flex justify-center mb-5 pt-1">
            <div className="bg-white px-6 sm:px-8 py-2.5 rounded-full shadow-sm border border-amber-200/80 inline-flex items-center gap-2 max-w-full">
              <span className="font-extrabold text-gray-900 text-sm sm:text-base md:text-lg text-center tracking-tight leading-snug">
                {scheme.title}
              </span>
            </div>
          </div>

          {/* Top Info Card (Skema, Jenis, SKKNI) */}
          <div className="bg-white rounded-2xl shadow-sm border border-amber-200/60 p-4 sm:p-5 mb-5">
            <div className="space-y-2.5">
              
              {/* Skema Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 pb-2.5 border-b border-gray-100">
                <span className="w-20 shrink-0 bg-[#fef3c7]/70 text-[#78350f] font-bold text-xs px-3 py-1 rounded-full text-center">
                  Skema
                </span>
                <span className="font-semibold text-gray-900 text-xs sm:text-sm">
                  {scheme.title}
                </span>
              </div>

              {/* Jenis Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 pb-2.5 border-b border-gray-100">
                <span className="w-20 shrink-0 bg-[#fef3c7]/70 text-[#78350f] font-bold text-xs px-3 py-1 rounded-full text-center">
                  Jenis
                </span>
                <span className="font-semibold text-gray-900 text-xs sm:text-sm">
                  {scheme.jenis}
                </span>
              </div>

              {/* SKKNI Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <span className="w-20 shrink-0 bg-[#fef3c7]/70 text-[#78350f] font-bold text-xs px-3 py-1 rounded-full text-center">
                  SKKNI
                </span>
                <span className="font-semibold text-gray-800 text-xs sm:text-sm leading-relaxed">
                  {scheme.skkni}
                </span>
              </div>

            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex justify-center gap-2 mb-4 bg-[#fef3c7]/40 p-1.5 rounded-full border border-amber-200/60 max-w-xl mx-auto overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveTab('units')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                activeTab === 'units'
                  ? 'bg-secondary text-white shadow-sm'
                  : 'text-amber-950/80 hover:bg-white/80 hover:text-amber-950'
              }`}
            >
              <BookOpen size={14} /> Unit Kompetensi ({scheme.units.length})
            </button>
            <button
              onClick={() => setActiveTab('procedure')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                activeTab === 'procedure'
                  ? 'bg-secondary text-white shadow-sm'
                  : 'text-amber-950/80 hover:bg-white/80 hover:text-amber-950'
              }`}
            >
              <Layers size={14} /> Prosedur (6 Langkah)
            </button>
            <button
              onClick={() => setActiveTab('requirements')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                activeTab === 'requirements'
                  ? 'bg-secondary text-white shadow-sm'
                  : 'text-amber-950/80 hover:bg-white/80 hover:text-amber-950'
              }`}
            >
              <FileText size={14} /> Persyaratan
            </button>
          </div>

          {/* TAB 1: UNIT KOMPETENSI TABLE */}
          {activeTab === 'units' && (
            <div className="bg-white rounded-2xl shadow-sm border border-amber-200/60 overflow-hidden mb-5">
              
              {/* Soft Golden Header */}
              <div className="bg-gradient-to-r from-[#fef08a]/80 via-[#fde68a]/70 to-[#fef08a]/80 px-4 py-3 grid grid-cols-12 gap-2 text-xs sm:text-sm font-extrabold text-[#78350f] text-center border-b border-amber-200/80">
                <div className="col-span-2 sm:col-span-1 border-r border-amber-900/10">No.</div>
                <div className="col-span-4 sm:col-span-4 border-r border-amber-900/10">Kode Unit</div>
                <div className="col-span-6 sm:col-span-7">Unit Kompetensi</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-amber-100/60">
                {scheme.units.map((unit, idx) => (
                  <div key={unit.kode} className="px-4 py-3 grid grid-cols-12 gap-2 text-xs sm:text-sm items-center hover:bg-[#fffdf0] transition-colors">
                    <div className="col-span-2 sm:col-span-1 text-center font-bold text-gray-400 border-r border-gray-100 pr-1">
                      {idx + 1}.
                    </div>
                    <div className="col-span-4 sm:col-span-4 text-center font-mono font-bold text-[#92400e] border-r border-gray-100 pr-1">
                      {unit.kode}
                    </div>
                    <div className="col-span-6 sm:col-span-7 text-center sm:text-left font-semibold text-gray-800 leading-snug pl-1">
                      {unit.judul}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: PROSEDUR ROADMAP */}
          {activeTab === 'procedure' && (
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-200/60 mb-5">
              <h4 className="font-extrabold text-gray-900 text-sm sm:text-base mb-4 flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#92400e]" /> 
                Roadmap Prosedur Sertifikasi Kompetensi (6 Tahapan)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {bnspRoadmap.map((r) => (
                  <div key={r.step} className="bg-[#fffef5] border border-amber-200/60 rounded-xl p-4">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="w-7 h-7 rounded-lg bg-[#fef08a] text-[#78350f] font-black text-xs flex items-center justify-center shrink-0">
                        {r.step}
                      </span>
                      <h5 className="font-bold text-gray-900 text-xs sm:text-sm">{r.title}</h5>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed mb-2">{r.desc}</p>
                    <div className="bg-white rounded-lg p-2 text-[11px] text-gray-700 font-medium border border-amber-100">
                      <strong className="text-[#78350f]">Output:</strong> {r.docs.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PERSYARATAN DOKUMEN */}
          {activeTab === 'requirements' && (
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-200/60 mb-5">
              <h4 className="font-extrabold text-gray-900 text-sm sm:text-base mb-4">
                Dokumen Persyaratan Uji Kompetensi
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                <div className="bg-[#fffef5] border border-amber-200/60 rounded-xl p-3.5 flex items-start gap-2.5">
                  <CheckCircle2 className="text-[#92400e] shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-gray-900 text-xs sm:text-sm block">1. Raport / Transkrip Nilai</strong>
                    <span className="text-xs text-gray-600">Scan raport semester akhir atau transkrip akademik.</span>
                  </div>
                </div>
                <div className="bg-[#fffef5] border border-amber-200/60 rounded-xl p-3.5 flex items-start gap-2.5">
                  <CheckCircle2 className="text-[#92400e] shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-gray-900 text-xs sm:text-sm block">2. Sertifikat PKL / Magang</strong>
                    <span className="text-xs text-gray-600">Sertifikat pelatihan atau pengalaman kerja relevan.</span>
                  </div>
                </div>
                <div className="bg-[#fffef5] border border-amber-200/60 rounded-xl p-3.5 flex items-start gap-2.5">
                  <CheckCircle2 className="text-[#92400e] shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-gray-900 text-xs sm:text-sm block">3. Pasfoto 3x4 Background Merah</strong>
                    <span className="text-xs text-gray-600">Foto formal 3x4 berpakaian rapi latar belakang merah.</span>
                  </div>
                </div>
                <div className="bg-[#fffef5] border border-amber-200/60 rounded-xl p-3.5 flex items-start gap-2.5">
                  <CheckCircle2 className="text-[#92400e] shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-gray-900 text-xs sm:text-sm block">4. KTP / Kartu Keluarga (KK)</strong>
                    <span className="text-xs text-gray-600">Scan kartu identitas KTP/KK yang masih berlaku.</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#fef3c7]/60 text-[#78350f] font-semibold rounded-xl p-3 text-xs text-center border border-amber-200/80">
                ✨ Sertifikat Kompetensi BNSP berlaku selama 3 (tiga) tahun sejak diterbitkan dan diakui secara nasional.
              </div>
            </div>
          )}

          {/* Bottom Bar: Action & Category Tag Pill */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-1">
            
            <a
              href={`https://wa.me/6281234567890?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-secondary text-white font-extrabold text-xs sm:text-sm hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              Konsultasi & Daftar Skema Ini <ArrowRight size={16} />
            </a>

            {/* Bottom Right Category Tag Pill */}
            <div className="bg-white px-5 py-2 rounded-full shadow-sm border border-amber-200/80 inline-flex items-center">
              <span className="font-extrabold text-gray-900 text-xs tracking-wider uppercase">
                {scheme.tag}
              </span>
            </div>

          </div>

        </div>

      </DialogContent>
    </Dialog>
  );
}
