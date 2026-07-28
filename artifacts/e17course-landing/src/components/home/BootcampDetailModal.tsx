import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ArrowRight, X, BookOpen, GraduationCap, Award, HelpCircle } from 'lucide-react';
import { type BootcampDetail } from '@/data/bootcampDetails';
import { useLanguage } from '@/context/LanguageContext';

interface BootcampDetailModalProps {
  bootcamp: BootcampDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BootcampDetailModal({ bootcamp, isOpen, onClose }: BootcampDetailModalProps) {
  const { lang } = useLanguage();
  if (!bootcamp) return null;

  const waMessage = encodeURIComponent(
    `Halo E17 Course, saya tertarik dan ingin mendaftar untuk Program Bootcamp: *${bootcamp.title}*.`
  );

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        hideDefaultClose={true}
        overlayClassName="bg-black/35 backdrop-blur-xs"
        className="max-w-3xl max-h-[92vh] overflow-y-auto p-0 rounded-3xl border-none bg-transparent shadow-none"
      >
        
        {/* Premium Container with Soft Cream/Gold Theme */}
        <div className="bg-gradient-to-b from-[#fffef7] via-[#fffdf3] to-[#fffbea] p-5 sm:p-8 rounded-3xl shadow-2xl border-2 border-amber-200/80 relative overflow-hidden">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white hover:bg-gray-100 text-gray-700 font-bold flex items-center justify-center shadow-md transition-transform hover:scale-105 z-20 border border-gray-200/80"
          >
            <X size={18} />
          </button>

          {/* Pop-Up Badge */}
          <div className="flex justify-start mb-2">
            <span className="text-[10px] font-black tracking-widest text-amber-800 uppercase bg-amber-100 border border-amber-200/60 px-3 py-1 rounded-full">
              {lang === 'en' ? 'PROGRAM DETAILS' : 'INFO SELENGKAPNYA'}
            </span>
          </div>

          {/* Program Title */}
          <h2 className="text-xl sm:text-2xl font-black text-secondary mb-5 leading-snug">
            {bootcamp.title}
          </h2>

          {/* Key Program Specifications Container (3 Pills inside a box) */}
          <div className="bg-white rounded-2xl border border-amber-200/60 p-4 mb-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="bg-amber-50/50 border border-amber-100 py-2.5 px-3 rounded-xl flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span className="text-xs font-bold text-amber-900 leading-tight">{bootcamp.sessions}</span>
              </div>
              <div className="bg-amber-50/50 border border-amber-100 py-2.5 px-3 rounded-xl flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span className="text-xs font-bold text-amber-900 leading-tight">{bootcamp.format}</span>
              </div>
              <div className="bg-amber-50/50 border border-amber-100 py-2.5 px-3 rounded-xl flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span className="text-xs font-bold text-amber-900 leading-tight">{bootcamp.softSkill}</span>
              </div>
            </div>
          </div>

          {/* Content Layout */}
          <div className="space-y-6">
            
            {/* Section 1: Fokus Materi */}
            <div className="bg-white rounded-2xl p-5 border border-amber-200/50 shadow-xs">
              <h3 className="font-extrabold text-secondary text-sm sm:text-base mb-4 flex items-center gap-2.5">
                <BookOpen size={18} className="text-amber-600 shrink-0" />
                {lang === 'en' ? 'Course Focus' : 'Fokus Materi'}
              </h3>
              <ol className="space-y-3.5">
                {bootcamp.materi.map((item, idx) => {
                  const [title, desc] = item.split(': ');
                  return (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-amber-100/70 text-amber-800 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-secondary/80 leading-relaxed font-medium">
                        <strong className="text-secondary font-black">{title}:</strong> {desc}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Section 2: Kompetensi Lulusan */}
            <div className="bg-white rounded-2xl p-5 border border-amber-200/50 shadow-xs">
              <h3 className="font-extrabold text-secondary text-sm sm:text-base mb-4 flex items-center gap-2.5">
                <GraduationCap size={18} className="text-amber-600 shrink-0" />
                {lang === 'en' ? 'Graduate Competency' : 'Kompetensi Lulusan'}
              </h3>
              <ol className="space-y-3.5">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-amber-100/70 text-amber-800 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <p className="text-xs sm:text-sm text-secondary/80 leading-relaxed font-medium">
                    <strong className="text-secondary font-black">Practical Skill:</strong> {bootcamp.kompetensi.practical}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-amber-100/70 text-amber-800 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <p className="text-xs sm:text-sm text-secondary/80 leading-relaxed font-medium">
                    <strong className="text-secondary font-black">Career Readiness:</strong> {bootcamp.kompetensi.career}
                  </p>
                </li>
              </ol>
            </div>

          </div>

          {/* Footer Text Quote with #BeTheNextTechAvengers */}
          <div className="my-6 p-4 rounded-2xl bg-amber-500/8 border border-amber-300/40 text-left">
            <p 
              className="text-xs sm:text-sm font-semibold text-secondary/80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: bootcamp.footerQuote }}
            />
          </div>

          {/* Bottom Bar: Action Button */}
          <div className="flex justify-start pt-2">
            <a
              href={`https://wa.me/6281399271717?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-secondary text-white font-extrabold text-xs sm:text-sm hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg group"
            >
              {lang === 'en' ? 'Register Program Now' : 'Daftar program sekarang'}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </div>

      </DialogContent>
    </Dialog>
  );
}
