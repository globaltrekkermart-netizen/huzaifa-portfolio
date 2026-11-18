export default function Skills() {
  const categories = [
    {
      index: "01 / AUTOMATION",
      title: "Test Automation & Scripting",
      description: "Building resilient browser automation and reusable test architectures.",
      tags: ["Selenium WebDriver", "Python", "TestNG", "Regression Suites", "XPath & Locators", "PyTest"],
    },
    {
      index: "02 / APIS & EXPLORATION",
      title: "Manual & REST API Testing",
      description: "Comprehensive functional exploration, payload verification, and release gates.",
      tags: ["Postman API", "REST Payloads", "Boundary Value (BVA)", "Equivalence Partitioning", "Smoke / Sanity", "RTM"],
    },
    {
      index: "03 / DEFECT TRIAGE",
      title: "Defect Tracking & Lifecycle",
      description: "Deterministic bug reporting, reproducible traces, and sprint ownership.",
      tags: ["JIRA Tracking", "ClickUp", "Git & GitHub", "Console Logs", "Bug Triage", "Reproduction Videos"],
    },
    {
      index: "04 / METHODOLOGY",
      title: "Quality Governance & Web",
      description: "Deep understanding of the software development and test lifecycles.",
      tags: ["SDLC & STLC", "Requirements Analysis", "Traceability Matrices", "HTML/CSS DOM", "Cross-Browser", "SEO Auditing"],
    },
  ];

  return (
    <section id="skills" className="border-b-2 border-black">
      <header className="section-head">
        <h2>Arsenal</h2>
        <p>
          Tools, frameworks, and testing methodologies I deploy to ensure what ships to users is resilient, performant, and defect-free.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-black">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 flex flex-col justify-between hover:bg-black hover:text-white transition-colors group relative"
          >
            <span className="corner-bracket" aria-hidden="true" />
            <div>
              <span className="eyebrow text-xs text-gray-500 group-hover:text-gray-300 block mb-2">
                {cat.index}
              </span>
              <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                {cat.title}
              </h3>
              <p className="text-xs sm:text-sm opacity-80 leading-relaxed mb-6">
                {cat.description}
              </p>
            </div>

            <div className="tags">
              {cat.tags.map((t) => (
                <span key={t} className="tag group-hover:border-white group-hover:bg-black group-hover:text-white">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
