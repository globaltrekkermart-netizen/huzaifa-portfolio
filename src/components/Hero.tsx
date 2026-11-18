"use client";

import Image from "next/image";
import { Search, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="bg-[#F6EFE1] pt-8 sm:pt-14 pb-24 sm:pb-32 px-4 sm:px-8 relative overflow-hidden">
      {/* Subtle Ambient Decorative Sparkles */}
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-10 text-[#FDAE16] text-2xl font-bold select-none pointer-events-none hidden md:block"
      >
        &#10022;
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-1/3 text-[#FD6036] text-xl font-bold select-none pointer-events-none hidden md:block"
      >
        &#10022;
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Bio & Coral Search Pill */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            <motion.div variants={itemVariants} className="overflow-hidden">
              <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#111311]">
                <span>Hello,</span>
                <br />
                <span>I&apos;m Huzaifa !</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#111311]/80 leading-relaxed font-sans max-w-xl"
            >
              I am a Software Quality Assurance (SQA) Engineer currently working at{" "}
              <strong className="text-[#111311]">Liquid Technologies</strong> (previously{" "}
              <strong className="text-[#111311]">CodeLabs Software House</strong>). I specialize in manual testing, test case design, functional &amp; regression testing, Postman REST API validation, and Python Selenium test automation.
            </motion.p>

            {/* Coral Search-bar Pill from Behance design */}
            <motion.div variants={itemVariants} className="pt-2">
              <motion.a
                href="https://linkedin.com/in/huzaifa-uddinkhan-connect"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="inline-flex items-center gap-3 bg-[#FD6036] hover:bg-[#E6481E] text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full shadow-[0_4px_14px_0_rgba(253,96,54,0.3)] hover:shadow-[0_8px_20px_0_rgba(253,96,54,0.4)] transition-all group"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <Search className="w-4 h-4 text-white stroke-[2.5] group-hover:scale-110 transition-transform" />
                </div>
                <span className="tracking-wide">linkedin.com/in/huzaifa-uddinkhan-connect</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Exact Behance Han Nguyen Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" as const }}
              className="relative w-[320px] sm:w-[380px] pt-4 pb-20"
            >
              
              {/* Forest Green Background Box */}
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
                className="w-full h-[430px] sm:h-[480px] bg-[#334B35] rounded-sm relative flex items-center justify-center overflow-hidden shadow-lg"
              >
                
                {/* Cream Circle Cutout Behind Head */}
                <motion.div
                  initial={{ scale: 0.75, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" as const }}
                  className="w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] rounded-full bg-[#F6EFE1] absolute top-8 left-1/2 -translate-x-1/2 shadow-inner"
                />

                {/* Subject Photograph with Smooth Slide-Up Reveal */}
                <motion.div
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" as const }}
                  className="relative w-full h-full z-10 flex items-end justify-center"
                >
                  <Image
                    src="/images/huzaifa-portrait.png"
                    alt="Huzaifa Uddin Khan - Software QA Engineer"
                    width={360}
                    height={540}
                    priority
                    className="object-contain object-bottom max-h-[96%] drop-shadow-md select-none transition-transform duration-500 hover:scale-[1.02]"
                  />
                </motion.div>
              </motion.div>

              {/* Floating Marigold Pill 1 (Top Left): SQA & Automation */}
              <motion.div
                initial={{ scale: 0, x: -20, rotate: -6 }}
                animate={{ scale: 1, x: 0, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.65 }}
                className="absolute -left-6 sm:-left-8 top-16 z-20"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.08 }}
                  className="bg-[#FDAE16] text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md select-none tracking-wide cursor-default transition-shadow hover:shadow-lg"
                >
                  SQA &amp; Automation
                </motion.div>
              </motion.div>

              {/* Floating Marigold Pill 2 (Bottom Right): Karachi, Pakistan */}
              <motion.div
                initial={{ scale: 0, x: 20, rotate: 6 }}
                animate={{ scale: 1, x: 0, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.8 }}
                className="absolute -right-4 sm:-right-6 bottom-32 sm:bottom-36 z-20"
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  whileHover={{ scale: 1.08 }}
                  className="bg-[#FDAE16] text-white font-bold text-xs sm:text-sm px-5 py-2 sm:py-2.5 rounded-full shadow-md select-none tracking-wide cursor-default transition-shadow hover:shadow-lg"
                >
                  Karachi, Pakistan
                </motion.div>
              </motion.div>

              {/* Overlapping Black Contact Card at Bottom of Portrait */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.85, ease: "easeOut" as const }}
                whileHover={{ y: -3 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[350px] bg-[#111311] text-white rounded-sm p-6 shadow-2xl z-30 transition-all hover:shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
              >
                <h3 className="font-display italic text-2xl font-bold tracking-wide text-white mb-3">
                  Contact
                </h3>
                <div className="space-y-2 text-xs font-sans text-gray-200">
                  <div className="flex items-center gap-2.5 group">
                    <MapPin className="w-3.5 h-3.5 text-[#FDAE16] shrink-0 group-hover:scale-110 transition-transform" />
                    <span>Karachi, Pakistan (Open to Relocation &amp; Remote)</span>
                  </div>
                  <div className="flex items-center gap-2.5 group">
                    <Mail className="w-3.5 h-3.5 text-[#FDAE16] shrink-0 group-hover:scale-110 transition-transform" />
                    <a href="mailto:huzaiffauddin@gmail.com" className="hover:text-[#FDAE16] transition-colors">
                      huzaiffauddin@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 group">
                    <Phone className="w-3.5 h-3.5 text-[#FDAE16] shrink-0 group-hover:scale-110 transition-transform" />
                    <span>+92 336 1110057</span>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
