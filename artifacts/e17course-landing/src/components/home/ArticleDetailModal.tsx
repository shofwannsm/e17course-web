import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, Clock, User, Calendar, BookOpen } from 'lucide-react';
import { type ArticleContent } from '@/data/articleContents';
import { useLanguage } from '@/context/LanguageContext';

interface ArticleDetailModalProps {
  article: ArticleContent | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArticleDetailModal({ article, isOpen, onClose }: ArticleDetailModalProps) {
  const { lang } = useLanguage();
  if (!article) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        hideDefaultClose={true}
        overlayClassName="bg-black/35 backdrop-blur-xs"
        className="max-w-3xl max-h-[92vh] overflow-y-auto p-0 rounded-3xl border-none bg-transparent shadow-none"
      >
        
        {/* Container */}
        <div className="bg-white p-5 sm:p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white hover:bg-gray-100 text-gray-700 font-bold flex items-center justify-center shadow-md transition-transform hover:scale-105 z-20 border border-gray-200/80"
          >
            <X size={18} />
          </button>

          {/* Category Badge */}
          <div className="flex justify-start mb-3">
            <span className="text-[10px] font-extrabold tracking-wider text-secondary bg-primary px-3 py-1 rounded-full uppercase shadow-xs">
              {article.category}
            </span>
          </div>

          {/* Article Title */}
          <h2 className="text-xl sm:text-2xl font-black text-secondary mb-4 leading-snug">
            {article.title}
          </h2>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 font-semibold mb-6 pb-4 border-b border-gray-100">
            <span className="flex items-center gap-1.5 text-secondary/70">
              <User size={14} className="text-gray-500" /> {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {article.readTime}
            </span>
          </div>

          {/* Article Header Cover Image */}
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 mb-6 shadow-sm">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body Content */}
          <div className="space-y-4 text-secondary/85 text-sm sm:text-base leading-relaxed font-medium">
            {article.content.map((paragraph, index) => (
              <p 
                key={index}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>

          {/* Dialog Footer */}
          <div className="mt-8 pt-5 border-t border-gray-100 flex justify-between items-center">
            <span className="inline-flex items-center gap-1.5 text-xs text-primary font-black">
              <BookOpen size={14} /> E17 Course Blog
            </span>
            <button 
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/90 text-white font-extrabold text-xs transition-all shadow-xs"
            >
              {lang === 'en' ? 'Close Reading' : 'Selesai Membaca'}
            </button>
          </div>

        </div>

      </DialogContent>
    </Dialog>
  );
}
