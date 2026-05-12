"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero, hide near footer/final CTA
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const nearBottom = scrollY > docHeight - winHeight - 600;
      setVisible(scrollY > 800 && !nearBottom);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[9996] md:hidden p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-black-matte/90 backdrop-blur-xl border-t border-white/[0.06]"
        >
          <a
            href="#book"
            className="group flex items-center justify-center gap-2 w-full py-3.5 bg-electric-blue text-white font-semibold rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] text-sm"
          >
            Book Your Strategy Session
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
