"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function TestingWorkflow() {
  const steps = [
    {
      step: "01",
      title: "Requirements Analysis",
      subtitle: "Preventing ambiguities before code is written",
      details:
        "Deconstruct user stories, PRDs, and functional specifications. Clarify edge cases and business logic with product managers and developers early to eliminate defects at the requirement stage.",
      deliverable: "Acceptance Criteria Review & Scope Matrix",
    },
    {
      step: "02",
      title: "Test Planning",
      subtitle: "Defining scope, environments & release gates",
      details:
        "Establish test objectives, environment configurations (Staging, QAT, Production), entry/exit criteria, test schedule, and resource allocation across manual and automated testing streams.",
      deliverable: "Comprehensive QA Test Plan",
    },
    {
      step: "03",
      title: "Test Case Design",
      subtitle: "Exhaustive positive, negative & boundary sets",
      details:
        "Author detailed test cases with preconditions, step-by-step actions, and deterministic assertions. Utilize boundary value analysis (BVA), equivalence partitioning, and state transition techniques.",
      deliverable: "Test Case Repository & RTM Matrix",
    },
    {
      step: "04",
      title: "Test Execution",
      subtitle: "Systematic manual testing & browser automation",
      details:
        "Execute manual functional test passes across browsers (Chrome, Firefox, Safari) and run automated regression suites using Python and Selenium WebDriver for fast validation of critical workflows.",
      deliverable: "Test Execution Logs & Pass/Fail Reports",
    },
    {
      step: "05",
      title: "Defect Reporting & Tracking",
      subtitle: "Zero-ambiguity bug logging in JIRA",
      details:
        "Log reproducible bug reports with clear titles, exact steps to replicate, actual vs. expected results, network payloads, console logs, and severity/priority triaging. Partner directly with developers.",
      deliverable: "JIRA Bug Tickets & Sprint Defect Logs",
    },
    {
      step: "06",
      title: "Regression Testing",
      subtitle: "Verifying fixes without collateral breakage",
      details:
        "Re-test resolved defects and execute automated regression test suites to guarantee that bug fixes haven't introduced unintended regressions in adjacent modules or user journeys.",
      deliverable: "Regression Sign-Off & Verification Stamp",
    },
    {
      step: "07",
      title: "Quality Monitoring & Maintenance",
      subtitle: "Post-release surveillance & ongoing stability",
      details:
        "Perform smoke tests immediately following live production releases. Actively monitor error telemetry and user feedback during maintenance phases to uphold 99.9% application stability.",
      deliverable: "Production Health Check & QA Sign-Off",
    },
  ];

  return (
    <section id="approach" className="bg-[#F6EFE1] py-20 sm:py-28 px-4 sm:px-8 border-t border-[#334B35]/20 overflow-hidden">
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
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#FD6036] tracking-wider mb-2">
              <span>&#10022;</span>
              <span>QUALITY ASSURANCE LIFECYCLE</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[#111311] tracking-tight">
              The 7-Stage QA Pipeline
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#111311]/80 max-w-md font-sans">
            A disciplined, end-to-end quality engineering workflow engineered to guarantee reliability from the first sprint story to live production maintenance.
          </p>
        </motion.div>

        {/* 7 Stages Stack */}
        <div className="space-y-4">
          {steps.map((st, i) => (
            <motion.div
              key={st.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: "easeOut" as const }}
              whileHover={{
                y: -4,
                boxShadow: "0 16px 30px -8px rgba(51, 75, 53, 0.12)",
                borderColor: "rgba(51, 75, 53, 0.35)",
              }}
              className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#334B35]/15 shadow-sm transition-all group duration-300"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Step Circle Badge */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-12 h-12 rounded-full bg-[#334B35] group-hover:bg-[#FD6036] text-[#FDAE16] group-hover:text-white flex items-center justify-center shrink-0 font-display font-black text-lg shadow-sm transition-colors duration-300 select-none cursor-default"
                >
                  {st.step}
                </motion.div>

                {/* Details */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display font-bold text-xl text-[#111311] group-hover:text-[#334B35] transition-colors">
                      {st.title}
                    </h3>
                    <span className="text-xs font-semibold text-[#111311]/60">
                      &bull; {st.subtitle}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#111311]/80 font-sans leading-relaxed max-w-2xl">
                    {st.details}
                  </p>
                </div>
              </div>

              {/* Deliverable Pill */}
              <div className="shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-gray-100">
                <span className="inline-flex items-center gap-2 bg-[#F6EFE1] group-hover:bg-[#FFF4E5] text-[#111311] text-xs font-mono font-bold px-4 py-2 rounded-full border border-[#334B35]/10 group-hover:border-[#FDAE16]/40 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#334B35] group-hover:text-[#FD6036] transition-colors" />
                  <span>{st.deliverable}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
