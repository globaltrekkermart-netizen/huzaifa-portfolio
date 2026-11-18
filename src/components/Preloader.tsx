"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("huzaifa_preloader_seen");
    if (hasSeen) {
      setVisible(false);
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("huzaifa_preloader_seen", "true");
      onComplete?.();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFAFA] text-[#171717] selection:bg-none"
        >
          {/* Top ambient highlight in ember */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none" />

          <div className="flex flex-col items-center px-6 text-center max-w-lg">
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1EB] border border-[#FED7C7] text-[#F05A28] text-xs font-mono font-bold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#F05A28] animate-pulse" />
              <span>TEST SUITE INITIALIZING</span>
            </motion.div>

            {/* Main Name Split Animation */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#171717] font-heading"
              >
                Huzaifa Uddin Khan
              </motion.h1>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm text-[#737373] font-mono tracking-wider uppercase font-semibold"
              >
                Software QA Engineer &bull; Liquid Technologies
              </motion.p>
            </div>

            {/* Progress bar line */}
            <div className="w-48 h-1 bg-[#E5E5E5] rounded-full mt-8 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="h-full bg-[#F05A28] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
