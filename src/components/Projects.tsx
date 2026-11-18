"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "vibe-coding" | "qa">("all");

  const projects = [
    {
      year: "2026",
      category: "vibe-coding",
      badge: "Freelance & Vibe Coding",
      badgeColor: "bg-[#FD6036] text-white",
      title: "Nexora — Operational Workspace & Client Portal SaaS",
      role: "Freelance Full-Stack Developer & QA",
      summary:
        "A sleek, bilingual (English & Persian) B2B operations workspace and client portal engineered for digital agencies and creative studios. Replaces scattered spreadsheets and chat threads with visual project timelines, client branding, one-click deliverable approvals, and live delivery telemetry.",
      qaHighlights: [
        "Architected responsive Next.js App Router application with bilingual LTR/RTL layout switching.",
        "Engineered interactive operations dashboard with project velocity tracking, billable hours meters, and status pipelines.",
        "Conducted end-to-end functional validation across client portal permission tiers, modal workflows, and responsive breakpoints.",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Bilingual LTR/RTL", "Client Portal", "Vibe Coding", "E2E QA"],
      liveUrl: "https://nexora.webappfoundry.com/",
      linkText: "Visit Live Application",
    },
    {
      year: "2026",
      category: "vibe-coding",
      badge: "Freelance & Vibe Coding",
      badgeColor: "bg-[#FDAE16] text-[#111311]",
      title: "Voyara — Luxury Private Journeys & Bespoke Travel Planner",
      role: "Freelance Frontend Developer & QA",
      summary:
        "An editorial luxury travel web platform designed for private itineraries and curated small-group escapes. Features interactive 3D WebGL globe rendering for route discovery, a multi-destination inquiry builder, and full bilingual English & Persian (فارسی) localization with dynamic LTR/RTL support.",
      qaHighlights: [
        "Integrated interactive 3D WebGL/Canvas globe visualization with smooth spinning and destination hotspots.",
        "Implemented seamless bilingual localization (English / Persian) with automatic RTL/LTR direction switching and locale persistence.",
        "Validated client-side state machine, filter query engines (length, pricing, best months), and multi-step custom inquiry booking workflows.",
      ],
      tags: ["JavaScript (ES6+)", "3D WebGL Globe", "Canvas", "Bootstrap 5", "Bilingual RTL/LTR", "Vibe Coding", "UX/UI QA"],
      liveUrl: "https://voyara.webappfoundry.com/",
      linkText: "Visit Live Application",
    },
    {
      year: "2026",
      category: "vibe-coding",
      badge: "Freelance & Vibe Coding",
      badgeColor: "bg-[#334B35] text-white",
      title: "Global Trekker Mart — Curated Travel & Lifestyle Storefront",
      role: "Freelance Web Developer & QA",
      summary:
        "A high-conversion e-commerce discovery and affiliate storefront built for fashion, travel gear, press-on nails, and vegan leather bags. Features a dynamic SVG preloader, custom cursor tracking effects, curated top-picks carousels, responsive mobile navigation, and automated direct Amazon affiliate product routing.",
      qaHighlights: [
        "Engineered engaging brand aesthetics with custom smooth cursor trail and SVG brand animations.",
        "Implemented category-based browsing (Press-On Nails, Tote Bags, Crossbody Purses, Amazon Finds) and blog integrations.",
        "Validated outbound affiliate tracking links, responsive layout stability across mobile/desktop, and fast image asset delivery.",
      ],
      tags: ["HTML5", "Modern CSS3", "JavaScript (ES6+)", "SVG Animations", "Affiliate Integration", "Vibe Coding", "Performance QA"],
      liveUrl: "https://globaltrekkermart.vercel.app/",
      linkText: "Visit Live Application",
    },
    {
      year: "2026",
      category: "qa",
      badge: "Self-Developed & Launched SaaS",
      badgeColor: "bg-[#FD6036] text-white",
      title: "Lead Generation SaaS Platform",
      role: "Product Developer & Lead QA",
      summary:
        "A live commercial SaaS product co-developed and launched by me and a fellow engineer, currently serving active paying customers. Designed to discover, manage, and enrich potential B2B customer leads with automated scraping workflows, credit-based usage, and interactive dashboard analytics.",
      qaHighlights: [
        "Led product development & end-to-end Quality Assurance from ideation to live Vercel launch.",
        "Tested Google Maps scraping engine, pagination limits, and credit deduction logic.",
        "Executed extensive functional, edge-case, and negative test scenarios for CSV export pipelines.",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "API Integrations", "Functional QA", "Production Monitoring"],
      liveUrl: "https://lead-gen-saas-mu.vercel.app/",
      linkText: "Visit Live Application",
    },
    {
      year: "2025—2026",
      category: "qa",
      badge: "Full Lifecycle: Design to Maintenance",
      badgeColor: "bg-[#334B35] text-white",
      title: "ABDS – Parcel Delivery & Logistics",
      role: "QA Engineer",
      summary:
        "A UAE-based parcel delivery and express logistics enterprise platform. Personally dedicated across its complete software lifecycle: from initial wireframe and acceptance criteria review, through development sprints, to active production maintenance.",
      qaHighlights: [
        "Involved from Day 1: reviewed UI/UX designs, acceptance criteria, and system requirements.",
        "Executed functional, regression, and end-to-end testing across complex shipment booking flows.",
        "Identified, logged, and tracked critical delivery dispatch defects in JIRA with reproduction logs.",
      ],
      tags: ["Parcel Logistics", "Regression Testing", "JIRA", "API Testing", "Design Review", "Maintenance QA"],
      liveUrl: "https://dev.abds.channelhub.ai/login",
      linkText: "Visit Client Portal",
    },
    {
      year: "2024—2025",
      category: "qa",
      badge: "Capstone Deep Dive Case Study",
      badgeColor: "bg-[#FDAE16] text-[#111311]",
      title: "Cricket Eye — AI Decision Review System",
      role: "Lead Tester & Developer",
      summary:
        "An AI-powered Decision Review System (DRS) for grassroots cricket. Utilizes computer vision and deep learning on standard smartphone camera feeds to detect front-foot no-balls, wide-balls, and LBW decisions.",
      qaHighlights: [
        "Subjected CV models to motion blur at 100+ km/h and harsh afternoon turf shadows.",
        "Achieved 94.2% crease overstepping detection accuracy across 50+ video playback scenarios.",
      ],
      tags: ["Python", "Computer Vision", "YOLO", "Pose Estimation", "PyTest", "SQA Strategy"],
      caseStudyUrl: "/case-study",
      linkText: "Read Flagship Case Study",
    },
    {
      year: "2025",
      category: "qa",
      badge: "Enterprise Client Project",
      badgeColor: "bg-[#111311] text-white",
      title: "ChannelHub — Multi-Channel Marketing",
      role: "QA Engineer",
      summary:
        "A unified multi-channel communication platform integrating WhatsApp, Facebook Messenger, and Instagram to help businesses centralize customer marketing, message broadcasting, and agent engagement.",
      qaHighlights: [
        "Tested multi-channel message synchronization, social media webhook payloads, and real-time alerts.",
        "Validated user permissions, organization workspaces, and multi-agent chat workflows.",
      ],
      tags: ["Multi-Channel APIs", "Meta Webhooks", "Postman", "Functional QA", "JIRA"],
      liveUrl: "https://dev.channelhub.ai/login",
      linkText: "Visit Platform",
    },
    {
      year: "2025",
      category: "qa",
      badge: "Enterprise Client Project",
      badgeColor: "bg-[#111311] text-white",
      title: "MYHCM — Enterprise HRMS Platform",
      role: "QA Engineer",
      summary:
        "A comprehensive Human Resource Management System (HRMS) built to manage multi-tenant employee records, attendance logging, leave approvals, and organizational performance evaluations.",
      qaHighlights: [
        "Validated complex HR payroll rules, biometric attendance reconciliation, and leave deduction models.",
        "Conducted security and Role-Based Access Control (RBAC) testing across employee and admin tiers.",
      ],
      tags: ["HRMS Workflows", "RBAC Testing", "Functional QA", "Data Integrity", "Regression Suites"],
      liveUrl: "http://qat.myhcm.pk/",
      linkText: "Visit QAT Portal",
    },
    {
      year: "2025",
      category: "qa",
      badge: "Industrial IoT / Energy",
      badgeColor: "bg-[#111311] text-white",
      title: "Power2Go — Battery & Energy Inventory",
      role: "QA Engineer",
      summary:
        "A specialized industrial inventory management platform designed to track the assembly, batch testing, serial genealogy, and warehouse storage of modular battery energy packs.",
      qaHighlights: [
        "Executed functional verification on battery serial registration, barcode scanning, and status transitions.",
        "Verified mathematical accuracy for pack capacity calculations, defect rates, and stock alerts.",
      ],
      tags: ["Energy Inventory", "Hardware Serial QA", "Functional Testing", "JIRA", "Postman API"],
      liveUrl: "https://dev.power2go.energy/login",
      linkText: "Visit Portal",
    },
    {
      year: "2025",
      category: "qa",
      badge: "UAE Logistics Platform",
      badgeColor: "bg-[#111311] text-white",
      title: "OmniRoute — Fleet & Route Optimization",
      role: "QA Engineer",
      summary:
        "An intelligent logistics platform providing automated route optimization, driver assignment, vehicle dispatching, and live delivery telemetry across the United Arab Emirates.",
      qaHighlights: [
        "Tested map routing algorithms, multi-stop delivery sequences, and estimated time of arrival (ETA) logic.",
        "Validated fleet tracking state machines, driver shift allocations, and fuel consumption logs.",
      ],
      tags: ["Route Optimization", "Fleet Dispatching", "Map APIs", "Functional QA", "Regression"],
      liveUrl: "https://dev.omniroute.ae/login",
      linkText: "Visit Dispatch System",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "vibe-coding") return p.category === "vibe-coding";
    if (activeFilter === "qa") return p.category === "qa";
    return true;
  });

  return (
    <section id="projects" className="bg-[#F6EFE1] py-20 sm:py-28 px-4 sm:px-8 border-t border-[#334B35]/20 overflow-hidden">
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
              <span className="animate-spin-slow">&#10022;</span>
              <span>PORTFOLIO &bull; FEATURED WORK</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[#111311] tracking-tight">
              Selected Projects
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#111311]/80 max-w-md font-sans">
            Real-world software engineered, automated, and shipped — spanning enterprise SQA pipelines, commercial SaaS products, and freelance vibe coding web applications.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          <button
            onClick={() => setActiveFilter("all")}
            className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all cursor-pointer ${
              activeFilter === "all"
                ? "bg-[#111311] text-white shadow-md scale-[1.02]"
                : "bg-white text-[#111311] border border-[#334B35]/15 hover:bg-gray-100"
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>All Projects ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter("vibe-coding")}
            className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all cursor-pointer ${
              activeFilter === "vibe-coding"
                ? "bg-[#FD6036] text-white shadow-md scale-[1.02]"
                : "bg-white text-[#111311] border border-[#334B35]/15 hover:bg-gray-100"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vibe Coding &amp; Freelance (3)</span>
          </button>

          <button
            onClick={() => setActiveFilter("qa")}
            className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all cursor-pointer ${
              activeFilter === "qa"
                ? "bg-[#334B35] text-white shadow-md scale-[1.02]"
                : "bg-white text-[#111311] border border-[#334B35]/15 hover:bg-gray-100"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>QA &amp; Automation (7)</span>
          </button>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.title}
                layout
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: idx * 0.04, ease: "easeOut" as const }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 30px -10px rgba(51, 75, 53, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-[#334B35]/15 hover:border-[#334B35]/35 transition-all group duration-300"
              >
                {/* Top Meta Line */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-display font-bold text-xl text-[#334B35]">
                      {proj.year}
                    </span>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-transform duration-300 group-hover:scale-105 ${proj.badgeColor}`}>
                      {proj.badge}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-semibold text-[#111311]/70">
                    Role: <strong className="text-[#111311]">{proj.role}</strong>
                  </div>
                </div>

                {/* Title & Summary */}
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#111311] group-hover:text-[#334B35] transition-colors tracking-tight mb-3">
                  {proj.title}
                </h3>

                <p className="text-sm sm:text-base text-[#111311]/85 leading-relaxed font-sans mb-5">
                  {proj.summary}
                </p>

                {/* Scope & Highlights */}
                <div className="space-y-2 mb-6 pt-2 border-t border-gray-100">
                  <p className="text-xs font-mono font-bold uppercase text-[#FD6036] tracking-wider">
                    {proj.category === "vibe-coding" ? "Engineering & Implementation Highlights:" : "QA Scope & Responsibilities:"}
                  </p>
                  <div className="space-y-1.5">
                    {proj.qaHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-sans group-hover:text-gray-900 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-[#334B35] shrink-0 mt-0.5 group-hover:text-[#FD6036] transition-colors" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags & Action Link */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-[#F6EFE1] group-hover:bg-[#FFF6EA] text-[#111311] font-semibold transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div>
                    {proj.liveUrl && (
                      <motion.a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="inline-flex items-center gap-2 bg-[#FDAE16] hover:bg-[#E69B0A] text-[#111311] text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer group/btn"
                      >
                        <span>{proj.linkText}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </motion.a>
                    )}

                    {proj.caseStudyUrl && (
                      <Link
                        href={proj.caseStudyUrl}
                        className="inline-block"
                      >
                        <motion.span
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          className="inline-flex items-center gap-2 bg-[#334B35] hover:bg-[#273A29] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer group/btn"
                        >
                          <span>{proj.linkText}</span>
                          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </motion.span>
                      </Link>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
