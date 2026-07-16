import { FileDown, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-8 z-40 flex flex-col gap-3 items-end">
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05, x: -3 }}
        whileTap={{ scale: 0.95 }}
        className="bg-accent text-white shadow-lg shadow-accent/40 px-4 py-3 rounded-full flex items-center gap-2 font-semibold text-sm transition-colors group overflow-hidden"
      >
        <span className="max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300 whitespace-nowrap">
          Konsultasi Gratis
        </span>
        <MessageCircle size={20} />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05, x: -3 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary text-white shadow-lg shadow-primary/30 px-4 py-3 rounded-full flex items-center gap-2 font-semibold text-sm transition-colors group overflow-hidden"
      >
        <span className="max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300 whitespace-nowrap">
          Unduh Profil
        </span>
        <FileDown size={20} />
      </motion.button>
    </div>
  );
}
