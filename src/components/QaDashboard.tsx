"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function QaDashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  const kpis = [
    { label: "Execution Progress", value: "79.84%", sub: "194 of 243 cases executed", color: "text-[#FDAE16]" },
    { label: "Total Test Cases", value: "243", sub: "12 active modules mapped", color: "text-white" },
    { label: "Passed Cases", value: "124", sub: "Verified stable functionality", color: "text-white" },
    { label: "Defects Trapped", value: "70", sub: "Logged & triaged in JIRA", color: "text-[#FD6036]" },
    { label: "Blocked Cases", value: "0", sub: "Zero critical pipeline blocks", color: "text-white" },
    { label: "Pass Rate", value: "63.92%", sub: "Phase 1 consolidated run", color: "text-[#FDAE16]" },
  ];

  const moduleHighlights = [
    { id: "M01", name: "Authentication & Session", tcs: 50, exec: "66.0%", passRate: "87.9%", status: "Stable" },
    { id: "M02", name: "User & Role Management", tcs: 38, exec: "89.5%", passRate: "55.9%", status: "Retesting" },
    { id: "M03", name: "Service Centre & Multi-Location", tcs: 15, exec: "73.3%", passRate: "100.0%", status: "100% Passed" },
    { id: "M05", name: "SAP CSV Import Engine", tcs: 26, exec: "69.2%", passRate: "94.4%", status: "Ready" },
    { id: "M06", name: "Job & WO Structure", tcs: 9, exec: "77.8%", passRate: "100.0%", status: "100% Passed" },
    { id: "M09", name: "Voice State Machine", tcs: 39, exec: "89.7%", passRate: "57.1%", status: "Bugs Trapped" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="dashboard" className="bg-[#334B35] text-white py-20 sm:py-28 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#FDAE16] tracking-wider mb-2">
              <span>&#10022;</span>
              <span>LIVE ARTIFACT &bull; EXECUTION METRICS</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
              QA Test Dashboard
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-300 max-w-md font-sans">
            An authentic look at my structured Excel-based QA Test Execution Dashboard used to track sprint progress, isolate module defect rates, and deliver transparent reporting.
          </p>
        </motion.div>

        {/* 6-Metric Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {kpis.map((kpi) => (
            <motion.div
              key={kpi.label}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="bg-[#273A29] rounded-xl p-4 sm:p-5 flex flex-col justify-between border border-white/10 shadow-sm hover:border-[#FDAE16]/40 transition-colors cursor-default"
            >
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-gray-400 block mb-1">
                  {kpi.label}
                </span>
                <span className={`text-2xl sm:text-3xl font-display font-black tracking-tight ${kpi.color}`}>
                  {kpi.value}
                </span>
              </div>
              <p className="text-[10px] font-mono text-gray-400 mt-2 pt-2 border-t border-white/10">
                {kpi.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* High-Res Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: "easeOut" as const }}
          className="bg-[#273A29] rounded-2xl p-4 sm:p-8 border border-white/15 shadow-xl space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FDAE16] animate-pulse" />
              <span className="font-bold text-white">QA_TEST_EXECUTION_DASHBOARD_PHASE1.xlsx</span>
              <span className="bg-[#FDAE16] text-[#111311] px-2 py-0.5 rounded-full text-[10px] font-bold uppercase">
                Verified Client Suite
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 bg-[#FDAE16] hover:bg-[#E69B0A] text-[#111311] font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Enlarge Full Resolution</span>
            </motion.button>
          </div>

          <motion.div
            whileHover={{ scale: 1.008 }}
            transition={{ duration: 0.3 }}
            onClick={() => setModalOpen(true)}
            className="group relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#111311] border border-white/20 cursor-pointer shadow-inner"
          >
            <Image
              src="/images/qa-dashboard.png"
              alt="Authentic QA Test Execution Dashboard"
              fill
              className="object-contain object-top group-hover:scale-[1.01] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-white text-[#111311] font-bold text-xs px-5 py-2.5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                Click to View High-Resolution Fullscreen
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Methodology & Module Breakdown Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: SQA Methodology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="lg:col-span-6 space-y-4"
          >
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#FDAE16] tracking-tight">
              Actionable Sprint Intelligence
            </h3>
            <p className="text-sm text-gray-300 font-sans leading-relaxed">
              In fast-paced engineering environments, vague statements like <em>&quot;testing is in progress&quot;</em> provide zero clarity to engineering leads and PMs. I build deterministic execution dashboards linked directly to individual test sheets.
            </p>

            <div className="space-y-3 pt-2">
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-[#273A29] border border-white/10 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FDAE16] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-gray-200">
                  <strong className="text-white">Module Defect Isolation:</strong> Pinpoints high-risk components immediately (e.g., M04 Localization with 16.7% pass rate vs M05 SAP Import Engine with 94.4% stability).
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-[#273A29] border border-white/10 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FDAE16] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-gray-200">
                  <strong className="text-white">Transparent Release Gates:</strong> With 194 of 243 cases executed (79.84%), stakeholders know exactly what has been validated, what remains, and whether blocking bugs exist.
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-[#273A29] border border-white/10 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FDAE16] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-gray-200">
                  <strong className="text-white">Seamless Developer Triage:</strong> Failed cases correspond to logged JIRA tickets with video attachments, console logs, and deterministic steps to reproduce.
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Module Sample Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" as const }}
            className="lg:col-span-6 bg-[#273A29] rounded-2xl p-6 border border-white/10 space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-display font-bold text-lg text-white">Module Execution Sample</span>
              <span className="text-xs font-mono text-[#FDAE16]">Phase 1 Consolidated Suite</span>
            </div>

            <div className="space-y-2 font-mono text-xs">
              {moduleHighlights.map((mod, i) => (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ scale: 1.015, x: 4 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#334B35] border border-white/5 hover:border-[#FDAE16]/30 transition-colors cursor-default"
                >
                  <div>
                    <span className="font-bold text-[#FDAE16] mr-2">[{mod.id}]</span>
                    <span className="text-white font-medium">{mod.name}</span>
                    <span className="block text-[10px] text-gray-400 mt-0.5">
                      {mod.tcs} Test Cases &bull; {mod.exec} Executed
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-white block">{mod.passRate}</span>
                    <span className="text-[10px] text-[#FDAE16] uppercase font-semibold">
                      {mod.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-[11px] font-mono text-gray-400 text-center pt-2">
              * Every metric mirrors verified records from my actual client execution dashboard.
            </p>
          </motion.div>

        </div>

      </div>

      {/* Enlarged Modal with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full bg-white text-[#111311] rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 font-sans">
                <div>
                  <h4 className="font-display font-black text-lg text-[#111311]">
                    QA Test Execution Dashboard &bull; Full View
                  </h4>
                  <p className="text-xs text-gray-500">
                    Shop Module Phase 1 &bull; Consolidated Test Case Suite
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-200">
                <Image
                  src="/images/qa-dashboard.png"
                  alt="Enlarged QA Test Execution Dashboard"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
