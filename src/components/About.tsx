import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <header className="section-head">
        <h2>About</h2>
        <p>Human-readable context before the inevitable list of testing frameworks and tools.</p>
      </header>

      <div className="about-grid">
        {/* Left: Narrative Copy & Operating Principles */}
        <div className="about-copy">
          <p className="lede">
            I build rock-solid software verification pipelines and eliminate defects before release.
          </p>

          <p className="mb-4">
            I am a <strong>Software QA Engineer</strong> holding a Bachelor of Science in Software Engineering from{" "}
            <strong>Sir Syed University of Engineering and Technology (SSUET)</strong>. Over the past 1.5+ years, I have worked with fast-paced engineering teams at{" "}
            <strong>Liquid Technologies</strong> and <strong>CodeLabs Software House</strong>, rigorously validating enterprise platforms across logistics, multi-channel marketing, HRMS, and energy inventory systems.
          </p>

          <p className="mb-6">
            My technical toolbox centers around <strong>Selenium WebDriver (Python)</strong>, <strong>Postman REST API testing</strong>, <strong>JIRA defect management</strong>, and structured manual verification. Beyond client projects, I co-developed and launched <strong>Lead Generation SaaS</strong>, an active commercial product serving paying users. This builder perspective empowers me to look at QA not just as an auditor, but as a product partner.
          </p>

          <div className="pt-6 border-t-2 border-black">
            <div className="eyebrow mb-2">Operating Principles</div>
            <p className="font-black text-xl sm:text-2xl uppercase tracking-tight">
              Defect prevention over bug finding. Deterministic evidence over assumptions. Shipped stability over demo passes.
            </p>
          </div>
        </div>

        {/* Right: Sketch Photo of Huzaifa */}
        <div className="about-image border-l-2 border-black max-lg:border-l-0 max-lg:border-t-2 relative min-h-[480px]">
          <span className="stamp top-4 right-4">CASUAL &bull; ON-FIELD</span>
          <div className="relative w-full h-full min-h-[460px] flex items-end justify-center p-6">
            <Image
              src="/images/huzaifa-sketch-casual.png"
              alt="Hand-drawn ink sketch portrait of Huzaifa Uddin Khan"
              fill
              className="object-contain object-bottom filter contrast-125"
            />
          </div>
        </div>
      </div>

      {/* Expandable Lore Section */}
      <details className="lore">
        <summary>View the lore</summary>
        <div className="lore-content">
          <div className="lore-block">
            <h3>Technical Arsenal</h3>
            <p>
              Python, Selenium WebDriver, Postman, JIRA, SQL, Git, GitHub, REST APIs, Next.js, TypeScript, Tailwind CSS, PyTest, Linux.
            </p>
          </div>

          <div className="lore-block">
            <h3>QA &amp; Testing Inventory</h3>
            <p>
              Manual Testing, Automated Regression, Functional Testing, Boundary Value Analysis (BVA), Equivalence Partitioning, Test Case Authoring, RTM, Defect Lifecycle Triaging.
            </p>
          </div>

          <div className="lore-block">
            <h3>Education + Certifications</h3>
            <ul>
              <li>BS Software Engineering, Sir Syed University (SSUET) &bull; 2021—2025</li>
              <li>Selenium with Python &bull; 10Pearls University (NASTP)</li>
              <li>Selenium WebDriver Testing in Python &bull; MindLuster</li>
              <li>Certificate of Participation &bull; IBAC 6.0</li>
            </ul>
          </div>
        </div>
      </details>
    </section>
  );
}
