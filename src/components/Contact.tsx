"use client";

import { useState } from "react";
import { Phone, Copy, Check, FileDown } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "huzaiffauddin@gmail.com";
  const phone = "+92-336-1110057";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <footer id="contact" className="bg-[#334B35] text-white pt-20 sm:pt-28 pb-12 px-4 sm:px-8 border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Contact Showcase Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" as const }}
          className="bg-[#273A29] rounded-3xl p-8 sm:p-14 border border-white/15 shadow-2xl text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#FDAE16] tracking-wider">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              &#10022;
            </motion.span>
            <span>GET IN TOUCH &bull; OPEN FOR OPPORTUNITIES</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Let&apos;s build software that never breaks.
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            Seeking full-time Software QA Engineer roles across <strong>Europe</strong>, <strong>Canada</strong>, or <strong>global remote teams</strong>. Also open to high-impact test automation consulting.
          </p>

          {/* Large Email Link */}
          <div className="pt-2">
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="font-display font-black text-2xl sm:text-4xl text-[#FDAE16] hover:text-white transition-colors inline-block break-all"
            >
              {email}
            </motion.a>
            <p className="text-xs sm:text-sm font-mono text-gray-300 mt-2">
              {phone} &bull; Karachi, Pakistan
            </p>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {/* Copy Email Button */}
            <motion.button
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 bg-[#FDAE16] hover:bg-[#E69B0A] text-[#111311] font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-full shadow-md transition-shadow cursor-pointer select-none"
            >
              <AnimatePresence mode="wait">
                {copiedEmail ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Copy className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
              <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
            </motion.button>

            {/* Copy Phone Button */}
            <motion.button
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={handleCopyPhone}
              className="inline-flex items-center gap-2 bg-[#FD6036] hover:bg-[#E6481E] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-full shadow-md transition-shadow cursor-pointer select-none"
            >
              <AnimatePresence mode="wait">
                {copiedPhone ? (
                  <motion.div
                    key="check-phone"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="phone"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
              <span>{copiedPhone ? "Phone Copied!" : "Copy Phone"}</span>
            </motion.button>

            {/* Download CV PDF */}
            <motion.a
              href="/images/huzaifa-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#111311] font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-full shadow-md transition-shadow cursor-pointer select-none"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </motion.a>
          </div>

          {/* Social Links Grid */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 text-xs font-mono">
            <motion.a
              href="https://linkedin.com/in/huzaifa-uddinkhan-connect"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-[#FDAE16] transition-colors group"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">&nearr;</span>
            </motion.a>
            <motion.a
              href="https://github.com/Huzaiffauddin"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-[#FDAE16] transition-colors group"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">&nearr;</span>
            </motion.a>
            <motion.a
              href="https://wa.me/923361110057"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-[#FDAE16] transition-colors group"
            >
              <span>WhatsApp</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">&nearr;</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400 pt-8 border-t border-white/10">
          <p>
            &copy; {new Date().getFullYear()} Huzaifa Uddin Khan. All rights reserved.
          </p>
          <motion.a
            href="#about"
            whileHover={{ y: -2 }}
            className="text-[#FDAE16] hover:underline font-bold inline-flex items-center gap-1"
          >
            <span>Back to top</span>
            <span>&uarr;</span>
          </motion.a>
        </div>

      </div>
    </footer>
  );
}
