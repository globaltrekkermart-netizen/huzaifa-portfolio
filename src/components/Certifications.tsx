"use client";

import { useState } from "react";
import Image from "next/image";

export default function Certifications() {
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <section id="education">
      <header className="section-head">
        <h2>Education</h2>
        <p>
          Formal software engineering degree and verified test automation credentials backing my engineering practice.
        </p>
      </header>

      <div className="education-grid">
        {/* Card 1: Degree */}
        <article className="education-card">
          <div className="eyebrow">2021—2025 &bull; Graduated Aug 2025</div>
          <h3>BS Software Engineering</h3>
          <p className="meta">Sir Syed University of Engineering &amp; Technology (SSUET)</p>
          <p className="mt-4">
            Completed an intensive four-year Software Engineering curriculum with dedicated focus on Software Quality Assurance (SQA), software testing lifecycles (STLC), system analysis, automated test architectures, and database design.
          </p>
          <div className="mt-6 pt-4 border-t border-current text-xs font-mono space-y-1">
            <p>&bull; Capstone: Cricket Eye (Lead QA &amp; Dev)</p>
            <p>&bull; 2nd Place — Laptop Price Predictor ML Competition</p>
          </div>
        </article>

        {/* Card 2: 10Pearls University */}
        <article className="education-card">
          <div className="eyebrow">Verified Credential &bull; Jan 2025</div>
          <h3>Selenium with Python</h3>
          <p className="meta">10Pearls University &bull; NASTP Karachi</p>
          <p className="mt-4">
            Awarded for notable performance and successful completion of practical Python Selenium test automation coursework at National Aerospace Science and Technology Park (NASTP).
          </p>
          <div className="mt-6">
            <button
              onClick={() => setCertModalOpen(true)}
              className="button text-xs py-1.5 px-3 uppercase"
            >
              View Official Certificate &nearr;
            </button>
          </div>
        </article>

        {/* Card 3: Additional Credentials & Languages */}
        <article className="education-card">
          <div className="eyebrow">Credentials &amp; Languages</div>
          <h3>Industry Certifications</h3>
          <p className="meta">MindLuster, IBAC 6.0 &bull; Multilingual</p>
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <strong>Selenium WebDriver in Python:</strong>
              <p className="text-xs opacity-80 mt-0.5">MindLuster &bull; Verified skills in Page Object Models, test execution, and UI assertions.</p>
            </div>
            <div>
              <strong>IBAC 6.0 Participation:</strong>
              <p className="text-xs opacity-80 mt-0.5">Recognized for technical competition, software problem solving, and engineering collaboration.</p>
            </div>
            <div className="pt-2 border-t border-current text-xs font-mono">
              <span className="font-bold">Languages:</span> English (Fluent / Professional) &bull; Urdu (Native)
            </div>
          </div>
        </article>
      </div>

      {/* Certificate Modal */}
      {certModalOpen && (
        <dialog open className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-white border-2 border-black">
            <div className="modal-head">
              <strong className="font-mono text-xs uppercase">
                Official Certificate &bull; 10Pearls University (NASTP)
              </strong>
              <button onClick={() => setCertModalOpen(false)} className="close" aria-label="Close dialog">
                &times;
              </button>
            </div>
            <div className="p-4 bg-[#F9F9F9]">
              <div className="relative aspect-[16/10] w-full border-2 border-black bg-white">
                <Image
                  src="/images/certificate-10pearls.png"
                  alt="Selenium with Python Certificate - 10Pearls University"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
