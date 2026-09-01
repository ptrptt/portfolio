"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-gradient-to-r from-[#087F78] via-[#40E0D0] to-[#7EECE2] origin-left"
      style={{ scaleX: scrollYProgress }}
      initial={{ scaleX: 0 }}
    />
  );
}
