"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const navItems = [
    { label: "About me", href: "#about" },
    { label: "Resume", href: "#resume" },
    { label: "Work", href: "#projects" },
    { label: "Dashboard", href: "#dashboard" },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" as const }}
      className="sticky top-0 z-50 bg-[#F6EFE1]/90 backdrop-blur-md border-b border-[#334B35]/10 px-4 sm:px-8 py-4 transition-all"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand with 4-point star */}
        <Link href="/" className="inline-flex items-center gap-2 group">
          <motion.span
            whileHover={{ rotate: 90, scale: 1.25 }}
            transition={{ type: "spring", stiffness: 350, damping: 15 }}
            className="text-[#FD6036] text-xl font-bold inline-block cursor-pointer select-none"
          >
            &#10022;
          </motion.span>
          <span className="font-display font-black text-xl tracking-tight text-[#111311] group-hover:text-[#334B35] transition-colors">
            Huzaifa Uddin Khan
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-semibold text-[#111311]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative py-1 group hover:text-[#FD6036] transition-colors"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FD6036] transition-all duration-300 ease-out group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Get in touch CTA button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="inline-flex items-center gap-2 bg-[#FDAE16] hover:bg-[#E69B0A] text-[#111311] font-bold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-6 py-2.5 rounded-full shadow-[0_4px_14px_0_rgba(253,174,22,0.35)] hover:shadow-[0_6px_20px_0_rgba(253,174,22,0.45)] transition-shadow cursor-pointer"
        >
          <span>Get in touch!</span>
        </motion.a>
      </div>
    </motion.header>
  );
}
