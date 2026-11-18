"use client";

import { ShieldCheck, Zap, Terminal, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceAndLanguages() {
  const experiences = [
    {
      year: "2026",
      role: "Junior QA Engineer",
      company: "Liquid Technologies",
      period: "May 2026 — Present &bull; Full-Time",
      description:
        "Leading Quality Assurance activities across enterprise web applications, automating regression checks using Python and Selenium WebDriver, validating REST APIs in Postman, and managing defect lifecycles in JIRA.",
    },
    {
      year: "2025",
      role: "Junior QA Engineer / QA Intern",
      company: "CodeLabs Software House",
      period: "Feb 2025 — May 2026 (1.4 Yrs) &bull; Promoted on Merit",
      description:
        "Promoted from QA Intern to Junior QA Engineer. Authored and executed exhaustive manual and automated test suites for logistics, HRMS, and multi-channel messaging platforms.",
    },
    {
      year: "2024",
      role: "Digital Marketing Intern",
      company: "Prime Digital Ventures",
      period: "Sep 2024 — Dec 2024 &bull; Internship",
      description:
        "Gained practical foundations in web performance, technical SEO, page load optimization, asset compression, and mobile responsive design compatibility.",
    },
  ];

  const focusPillars = [
    {
      title: "Defect Prevention",
      desc: "Eliminating ambiguities at requirement analysis before code is written.",
      icon: ShieldCheck,
    },
    {
      title: "Test Automation",
      desc: "Reusable Selenium (Python) suites reducing regression cycles by 70%.",
      icon: Terminal,
    },
    {
      title: "API Integrity",
      desc: "Postman collections asserting payloads, status codes, and edge-cases.",
      icon: Zap,
    },
    {
      title: "Release Gates",
      desc: "Deterministic test execution sign-offs with zero blocking escapes.",
      icon: CheckCircle2,
    },
  ];

  const hashtags = [
    "#TestAutomation",
    "#SeleniumPython",
    "#VibeCoding",
    "#FreelanceDev",
    "#PostmanAPI",
    "#DefectTriage",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="bg-[#F6EFE1] py-20 sm:py-28 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Exact Behance Yellow Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" as const }}
            className="lg:col-span-6 bg-[#FDAE16] text-[#111311] rounded-sm p-8 sm:p-10 shadow-lg relative"
          >
            <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight mb-8">
              Experience
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-8 pl-1"
            >
              {experiences.map((exp) => (
                <motion.div
                  key={exp.year}
                  variants={itemVariants}
                  className="flex items-start gap-4 sm:gap-6 group transition-transform duration-300 hover:translate-x-1"
                >
                  <span className="text-white text-xl font-bold mt-0.5 shrink-0 group-hover:rotate-45 transition-transform duration-300">
                    &#10022;
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-display font-bold text-2xl text-[#111311]">
                        {exp.year}
                      </span>
                      <span className="font-sans font-bold text-base text-[#111311]">
                        {exp.role}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#111311]/80 mt-0.5">
                      {exp.company} &bull; <span dangerouslySetInnerHTML={{ __html: exp.period }} />
                    </p>
                    <p className="text-xs sm:text-sm text-[#111311]/90 font-sans mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Hashtag Pills (Matching Behance #Creativity #Communication) */}
            <div className="pt-8 flex flex-wrap gap-2">
              {hashtags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.3 + i * 0.05 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="bg-[#111311] hover:bg-[#FD6036] text-white text-xs font-semibold px-4 py-1.5 rounded-full cursor-default select-none transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Language & Engineering Focus */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Language Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: "easeOut" as const }}
            >
              <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-[#111311] mb-6">
                Language
              </h2>

              <div className="grid grid-cols-2 gap-6 font-sans">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white/50 backdrop-blur-xs p-4 rounded-xl border border-[#334B35]/10 shadow-xs"
                >
                  <h4 className="font-display font-black text-2xl text-[#111311]">
                    English
                  </h4>
                  <p className="text-sm font-semibold text-[#111311]/70 mt-1">
                    Fluent (Professional)
                  </p>
                  <div className="w-full bg-[#111311]/10 h-1.5 rounded-full mt-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" as const }}
                      className="bg-[#FD6036] h-full rounded-full"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white/50 backdrop-blur-xs p-4 rounded-xl border border-[#334B35]/10 shadow-xs"
                >
                  <h4 className="font-display font-black text-2xl text-[#111311]">
                    Urdu
                  </h4>
                  <p className="text-sm font-semibold text-[#111311]/70 mt-1">
                    Native Speaker
                  </p>
                  <div className="w-full bg-[#111311]/10 h-1.5 rounded-full mt-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.35, ease: "easeOut" as const }}
                      className="bg-[#334B35] h-full rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Focus & Pillars Section (Matching Behance Hobbies & Interests) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" as const }}
              className="pt-4 border-t border-[#334B35]/20"
            >
              <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-[#111311] mb-6">
                Engineering Focus
              </h2>

              <div className="grid grid-cols-2 gap-6">
                {focusPillars.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="space-y-2 group cursor-default"
                    >
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 8 }}
                        transition={{ type: "spring", stiffness: 350, damping: 15 }}
                        className="w-12 h-12 rounded-full bg-[#FDAE16] group-hover:bg-[#FD6036] text-[#111311] group-hover:text-white flex items-center justify-center shadow-md transition-colors"
                      >
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </motion.div>
                      <h4 className="font-sans font-bold text-sm text-[#111311] group-hover:text-[#334B35] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#111311]/75 leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
