"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EducationAndSkills() {
  const [certModalOpen, setCertModalOpen] = useState(false);

  const softwareTools = [
    { code: "Se", name: "Selenium", category: "Automation" },
    { code: "Py", name: "Python", category: "Core Language" },
    { code: "Po", name: "Postman", category: "REST APIs" },
    { code: "Ji", name: "JIRA", category: "Defect Triage" },
    { code: "Gt", name: "Git", category: "Version Control" },
    { code: "Sq", name: "SQL", category: "Database QA" },
  ];

  const qaCompetencies = [
    "Manual Testing",
    "Automation Testing",
    "Functional Testing",
    "Regression Testing",
    "Test Case Design",
    "JIRA Defect Triage",
    "Boundary Value (BVA)",
    "Equivalence Partitioning",
    "API Payload Validation",
    "STLC & SDLC Governance",
  ];

  const categoryPills = [
    "Test Automation",
    "REST API Validation",
    "JIRA Defect Triage",
    "Regression Suites",
    "Production Health Gates",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="resume" className="bg-[#334B35] text-white py-20 sm:py-28 px-4 sm:px-8 relative overflow-hidden">
      {/* Background Watermark Outlined Text (from Behance Design) with subtle ambient drift */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 0.25, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" as const }}
        className="absolute right-4 top-12 select-none pointer-events-none hidden md:block"
      >
        <div className="outline-text text-8xl sm:text-9xl font-display font-black leading-none">
          RESUME
          <br />
          RESUME
          <br />
          RESUME
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="lg:col-span-6 space-y-8"
          >
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#FDAE16] tracking-tight">
              Education
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-8 pl-2"
            >
              {/* Item 1 */}
              <motion.div variants={itemVariants} className="flex items-start gap-4 sm:gap-6 group">
                <span className="text-[#FD6036] text-xl font-bold mt-0.5 shrink-0 group-hover:rotate-45 transition-transform duration-300">
                  &#10022;
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-display font-bold text-xl sm:text-2xl text-white">
                      2021—2025
                    </span>
                    <span className="text-sm font-semibold text-[#FDAE16]">
                      Sir Syed University (SSUET)
                    </span>
                  </div>
                  <h4 className="font-sans font-bold text-base text-gray-100 mt-1">
                    B.S. in Software Engineering &bull; Graduated Aug 2025
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-sans mt-1 leading-relaxed">
                    Four-year intensive curriculum specializing in Software Quality Assurance (SQA), STLC, automated testing architectures, and database design.
                  </p>
                  <p className="text-xs font-mono text-[#FDAE16] mt-2">
                    &bull; Capstone: Cricket Eye (Lead QA &amp; Dev) &bull; 2nd Place in ML Competition
                  </p>
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div variants={itemVariants} className="flex items-start gap-4 sm:gap-6 group">
                <span className="text-[#FD6036] text-xl font-bold mt-0.5 shrink-0 group-hover:rotate-45 transition-transform duration-300">
                  &#10022;
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-display font-bold text-xl sm:text-2xl text-white">
                      Verified
                    </span>
                    <span className="text-sm font-semibold text-[#FDAE16]">
                      10Pearls University &bull; NASTP
                    </span>
                  </div>
                  <h4 className="font-sans font-bold text-base text-gray-100 mt-1">
                    Selenium with Python Certification &bull; 15 Jan 2025
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-sans mt-1 leading-relaxed">
                    National Aerospace Science and Technology Park (NASTP), Karachi. Awarded for notable performance in practical Python Selenium WebDriver automation.
                  </p>
                  <button
                    onClick={() => setCertModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FDAE16] hover:text-white mt-2 underline transition-colors cursor-pointer group/btn"
                  >
                    <Award className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                    <span>View Official 10Pearls Certificate &rarr;</span>
                  </button>
                </div>
              </motion.div>

              {/* Item 3 */}
              <motion.div variants={itemVariants} className="flex items-start gap-4 sm:gap-6 group">
                <span className="text-[#FD6036] text-xl font-bold mt-0.5 shrink-0 group-hover:rotate-45 transition-transform duration-300">
                  &#10022;
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-display font-bold text-xl sm:text-2xl text-white">
                      Credentials
                    </span>
                    <span className="text-sm font-semibold text-[#FDAE16]">
                      MindLuster &bull; IBAC 6.0
                    </span>
                  </div>
                  <h4 className="font-sans font-bold text-base text-gray-100 mt-1">
                    Selenium WebDriver in Python &bull; Technical Competition
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-sans mt-1 leading-relaxed">
                    Verified competencies in Page Object Model (POM), element locators, and engineering collaboration.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" as const }}
            className="lg:col-span-6 space-y-8"
          >
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#FDAE16] tracking-tight">
              Technical skills
            </h2>

            {/* Split: Software Skills & Coding/QA Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start">
              
              {/* Software Skills (White Badges matching Ps, Ai, In from Behance) */}
              <div className="sm:col-span-5 space-y-3">
                <h3 className="font-display italic text-xl font-bold text-gray-200">
                  Software tools
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid grid-cols-2 gap-3 pt-1"
                >
                  {softwareTools.map((tool) => (
                    <motion.div
                      key={tool.code}
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 350, damping: 18 }}
                      className="bg-white text-[#111311] rounded-xl p-3 flex flex-col items-center justify-center shadow-md cursor-pointer select-none border border-white/40"
                    >
                      <span className="font-display font-black text-2xl text-[#334B35]">
                        {tool.code}
                      </span>
                      <span className="font-sans text-[11px] font-bold mt-0.5 text-[#111311]">
                        {tool.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Coding & QA Competencies */}
              <div className="sm:col-span-7 space-y-3">
                <h3 className="font-display italic text-xl font-bold text-gray-200">
                  QA skills
                </h3>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  Deep mastery across the software testing lifecycle:
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-1 font-sans text-xs text-gray-100">
                  {qaCompetencies.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-center gap-1.5 group"
                    >
                      <span className="text-[#FDAE16] text-[10px] group-hover:rotate-45 transition-transform">&#10022;</span>
                      <span className="group-hover:text-white transition-colors">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            {/* Category Pills (Black Pills matching Behance Packaging, UI/UX design) */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              {categoryPills.map((pill, i) => (
                <motion.span
                  key={pill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  whileHover={{ y: -2, scale: 1.04 }}
                  className="bg-[#111311] hover:bg-[#FD6036] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-sm border border-white/10 transition-colors cursor-default select-none"
                >
                  {pill}
                </motion.span>
              ))}
            </div>

          </motion.div>

        </div>
      </div>

      {/* 10Pearls Certificate Enlarged Modal with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {certModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setCertModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white text-[#111311] rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 font-sans">
                <div>
                  <h4 className="font-display font-black text-lg text-[#111311]">
                    Official Certificate &bull; 10Pearls University
                  </h4>
                  <p className="text-xs text-gray-500">
                    Selenium with Python &bull; National Aerospace Science and Technology Park (NASTP)
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCertModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-200">
                <Image
                  src="/images/certificate-10pearls.png"
                  alt="Enlarged 10Pearls Certificate - Huzaifa Khan"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
