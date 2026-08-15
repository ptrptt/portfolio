"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion } from "framer-motion";

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-gradient-to-r from-[#2563EB] to-[#60A5FA] origin-left"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
}
