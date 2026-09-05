"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const progress = useScrollProgress();
  const visible = progress > 10;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#991b1b] to-[#dc2626] text-white shadow-lg shadow-[#dc2626]/25 hover:shadow-[#dc2626]/40 hover:scale-110 transition-all duration-200"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
