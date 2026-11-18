export default function Experience() {
  const experiences = [
    {
      index: "01 / Present",
      role: "Junior QA Engineer",
      company: "Liquid Technologies",
      period: "May 2026 — Now",
      location: "Karachi",
      type: "Full-Time",
      description:
        "Leading Quality Assurance activities across enterprise web applications, automating regression checks using Python and Selenium WebDriver, validating REST APIs in Postman, and managing defect lifecycles in JIRA.",
      responsibilities: [
        "Plan, design, and execute comprehensive test cases covering functional, regression, and end-to-end scenarios.",
        "Develop and maintain Selenium WebDriver (Python) automation scripts to speed up release verification cycles.",
        "Validate REST APIs in Postman: verify payload structures, status codes, response times, and edge-case errors.",
        "Log and track detailed defects in JIRA with deterministic steps to reproduce, console logs, and network captures.",
        "Collaborate closely with cross-functional software developers to triage, retest, and sign off on hotfixes.",
      ],
    },
    {
      index: "02 / Previous save",
      role: "Junior QA Engineer / QA Intern",
      company: "CodeLabs Software House",
      period: "Feb 2025 — May 2026 (1.4 Yrs)",
      location: "Karachi",
      type: "Full-Time · Promoted on Merit",
      description:
        "Promoted from QA Intern (Feb 2025 – Jul 2025) to Junior QA Engineer (Aug 2025 – May 2026) after consistently delivering manual and automation testing for client web applications across multiple industry domains.",
      responsibilities: [
        "Authored and executed exhaustive manual test cases and automated test scripts using Selenium WebDriver & Python.",
        "Tested complex multi-tier client web applications including logistics, HRMS, and multi-channel messaging platforms.",
        "Reported and tracked defects in JIRA, partnering directly with software engineers to resolve blockers before sprint deadlines.",
        "Executed REST API validation in Postman and contributed to reusable automation framework repositories.",
        "Maintained thorough test documentation, traceability matrices (RTM), and client-facing execution reports.",
      ],
    },
    {
      index: "03 / Foundations",
      role: "Digital Marketing Intern",
      company: "Prime Digital Ventures",
      period: "Sep 2024 — Dec 2024",
      location: "Karachi",
      type: "Internship",
      description:
        "Gained practical foundations in web performance, technical SEO, page load optimization, and responsive design validation.",
      responsibilities: [
        "Handled on-page and off-page SEO optimization, keyword research, and backlink validation.",
        "Analyzed website loading speeds, asset compression, and mobile responsive design compatibility.",
        "Built a strong technical foundation in web architectures, DOM structure, and browser performance metrics.",
      ],
    },
  ];

  return (
    <section id="work">
      <header className="section-head">
        <h2>Work</h2>
        <p>
          Production software verification, measurable test coverage, fewer unverified releases. The part where quality engineering has direct consequences.
        </p>
      </header>

      {experiences.map((exp, idx) => (
        <article key={idx} className="work-item" tabIndex={0}>
          <div className="work-meta">
            <span className="work-bracket" aria-hidden="true" />
            <div className="eyebrow">{exp.index}</div>
            <h3>{exp.role}</h3>
            <p>
              {exp.company} &bull; {exp.location} &bull; {exp.period}
            </p>
            <div className="mt-4 text-xs font-mono font-bold uppercase tracking-wider text-black border border-black inline-block px-2 py-1 bg-white">
              {exp.type}
            </div>
          </div>

          <div className="work-copy">
            <p className="font-semibold text-sm mb-4 text-[#333]">
              {exp.description}
            </p>
            <ul>
              {exp.responsibilities.map((r, i) => (
                <li key={i} className="text-sm sm:text-base">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}
