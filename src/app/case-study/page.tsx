import Link from "next/link";
import { ArrowLeft, Camera, Bug, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Cricket Eye Case Study — Huzaifa Uddin Khan | SQA Engineer",
  description:
    "In-depth case study of Cricket Eye: an AI-powered Decision Review System (DRS) for grassroots cricket. Multi-angle computer vision, test strategy, and QA validation.",
};

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-[#F6EFE1] text-[#111311] selection:bg-[#FDAE16] selection:text-[#111311] pb-24 font-sans">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F6EFE1]/90 backdrop-blur-md border-b border-[#334B35]/15 px-4 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111311] hover:text-[#FD6036] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#FD6036]" />
            <span>Back to Portfolio</span>
          </Link>

          <span className="bg-[#FDAE16] text-[#111311] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Flagship Capstone Case Study
          </span>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-16 pb-12 px-4 sm:px-8 max-w-5xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#FD6036] tracking-wider">
          <span>&#10022;</span>
          <span>AI &bull; COMPUTER VISION &bull; SOFTWARE QUALITY ASSURANCE</span>
        </div>

        <h1 className="font-display font-black text-5xl sm:text-7xl text-[#111311] tracking-tight leading-[0.95]">
          Cricket Eye: Democratizing DRS for Grassroots Cricket
        </h1>

        <p className="text-lg sm:text-xl text-[#111311]/80 leading-relaxed font-sans max-w-3xl">
          An affordable, AI-powered Decision Review System engineered with computer vision and pose estimation to deliver high-precision no-ball, wide, and LBW decisions—backed by an exhaustive SQA verification strategy.
        </p>

        {/* 4-Item Metric Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          <div className="bg-white p-4 rounded-xl border border-[#334B35]/15 shadow-sm">
            <span className="text-[10px] font-mono uppercase text-gray-500 font-bold block">My Role</span>
            <strong className="font-display font-bold text-base text-[#111311] block mt-0.5">Lead Tester &amp; Dev</strong>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#334B35]/15 shadow-sm">
            <span className="text-[10px] font-mono uppercase text-gray-500 font-bold block">Timeline</span>
            <strong className="font-display font-bold text-base text-[#111311] block mt-0.5">2024—2025 (FYP)</strong>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#334B35]/15 shadow-sm">
            <span className="text-[10px] font-mono uppercase text-gray-500 font-bold block">Tech Stack</span>
            <strong className="font-display font-bold text-base text-[#111311] block mt-0.5">Python, CV, YOLO</strong>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#334B35]/15 shadow-sm">
            <span className="text-[10px] font-mono uppercase text-gray-500 font-bold block">Test Status</span>
            <strong className="font-display font-bold text-base text-[#FD6036] block mt-0.5">94.2% Accuracy</strong>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section 1: Problem Statement */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-[#334B35]/15 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#FD6036] tracking-wider">
            <span>&#10022;</span>
            <span>01 / THE GRASSROOTS DILEMMA</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111311] tracking-tight">
            Why High-Tech DRS Was Locked Away From Millions of Players
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#111311]/85 leading-relaxed font-sans">
            <p>
              In international cricket, the <strong>Decision Review System (DRS)</strong>—powered by proprietary suites like Hawk-Eye and UltraEdge—costs upwards of <strong>$100,000+ per match</strong>. It requires high-speed optical camera arrays (340+ FPS), calibrated acoustic sensors, and dedicated server trucks.
            </p>
            <p>
              However, over 95% of cricket worldwide happens on club pitches, school grounds, and street tournaments where human umpires struggle with rapid-fire decisions: a bowler overstepping by 2 centimeters, a ball shaving the leg-stump line, or a ball crossing the wide marker.
            </p>
            <div className="p-5 rounded-xl bg-[#F6EFE1] border border-[#334B35]/15 flex items-start gap-3 mt-4">
              <AlertCircle className="w-5 h-5 text-[#FD6036] shrink-0 mt-0.5" />
              <p className="text-sm text-[#111311] leading-relaxed">
                <strong>The Engineering Objective:</strong> Create a cost-effective, portable decision assistance pipeline using accessible 60–120 FPS cameras (smartphones and webcams) paired with lightweight computer vision models, validated under strict software testing standards.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Camera Setup */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-[#334B35]/15 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#FD6036] tracking-wider">
            <span>&#10022;</span>
            <span>02 / SPATIAL &amp; HARDWARE SETUP</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111311] tracking-tight">
            Multi-Camera Spatial Setup
          </h2>

          <p className="text-base text-[#111311]/80">
            Rather than relying on industrial cameras, we architected a 3-point vantage system optimized for real-time video capture and geometric homography:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-xl bg-[#F6EFE1] border border-[#334B35]/15">
              <div className="w-10 h-10 rounded-full bg-[#334B35] text-[#FDAE16] flex items-center justify-center mb-4">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#111311] mb-2">Camera A: Crease Popping</h3>
              <p className="text-xs text-[#111311]/75 leading-relaxed">
                Positioned perpendicular to the bowling crease (90&deg; side angle) to monitor bowler front-foot landing, heel contact, and overstepping violations.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F6EFE1] border border-[#334B35]/15">
              <div className="w-10 h-10 rounded-full bg-[#334B35] text-[#FDAE16] flex items-center justify-center mb-4">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#111311] mb-2">Camera B: Behind-Umpire</h3>
              <p className="text-xs text-[#111311]/75 leading-relaxed">
                Positioned directly behind the non-striker umpire. Tracks lateral deviation, wide-ball boundaries, and trajectory out of the hand.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F6EFE1] border border-[#334B35]/15">
              <div className="w-10 h-10 rounded-full bg-[#334B35] text-[#FDAE16] flex items-center justify-center mb-4">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#111311] mb-2">Camera C: Striker Side</h3>
              <p className="text-xs text-[#111311]/75 leading-relaxed">
                Captures bounce height, pad impact point, and trajectory angle toward the wickets for LBW review calculations.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Detection Logic */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-[#334B35]/15 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#FD6036] tracking-wider">
            <span>&#10022;</span>
            <span>03 / DETECTION PIPELINE &amp; LOGIC</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111311] tracking-tight">
            The Three Automated Decision Modules
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[#F6EFE1] border border-[#334B35]/15">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-display font-bold text-lg text-[#111311]">
                  1. Front-Foot No-Ball &amp; Overstepping Detection
                </h3>
                <span className="font-mono text-xs bg-[#334B35] text-white px-2.5 py-0.5 rounded-full font-bold">
                  NO_BALL
                </span>
              </div>
              <p className="text-sm text-[#111311]/80 mb-3 leading-relaxed">
                Combines Hough Line Transforms to detect the painted popping crease with pose estimation (ankle and toe keypoints). The algorithm identifies the exact frame of first foot strike.
              </p>
              <div className="p-3 bg-white rounded-lg border border-[#334B35]/15 font-mono text-xs text-[#111311]">
                <code>assert foot_landing_frame.heel_coordinate &lt; crease_line.x_boundary</code>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#F6EFE1] border border-[#334B35]/15">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-display font-bold text-lg text-[#111311]">
                  2. Wide-Ball Boundary Detection
                </h3>
                <span className="font-mono text-xs bg-[#334B35] text-white px-2.5 py-0.5 rounded-full font-bold">
                  WIDE_BALL
                </span>
              </div>
              <p className="text-sm text-[#111311]/80 mb-3 leading-relaxed">
                Uses the behind-the-umpire perspective to map pixel coordinates to real-world ground distances using four-point homography as the ball crosses the batsman&apos;s popping crease.
              </p>
              <div className="p-3 bg-white rounded-lg border border-[#334B35]/15 font-mono text-xs text-[#111311]">
                <code>verdict = &quot;WIDE&quot; if abs(ball_x - stump_center_x) &gt; wide_threshold else &quot;LEGAL&quot;</code>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#F6EFE1] border border-[#334B35]/15">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-display font-bold text-lg text-[#111311]">
                  3. LBW Trajectory &amp; Impact Projection
                </h3>
                <span className="font-mono text-xs bg-[#334B35] text-white px-2.5 py-0.5 rounded-full font-bold">
                  LBW_REVIEW
                </span>
              </div>
              <p className="text-sm text-[#111311]/80 mb-3 leading-relaxed">
                Applies polynomial trajectory regression across ball coordinates pre-bounce and post-bounce, evaluating pitch in line, impact in line, and projected wickets hit.
              </p>
              <div className="p-3 bg-white rounded-lg border border-[#334B35]/15 font-mono text-xs text-[#111311]">
                <code>all([pitch_in_line, impact_in_line, projected_wickets_hit]) =&gt; &quot;OUT&quot;</code>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: QA Edge Cases in Forest Green */}
        <section className="bg-[#334B35] text-white rounded-2xl p-6 sm:p-10 shadow-xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#FDAE16] tracking-wider">
            <span>&#10022;</span>
            <span>04 / QUALITY ASSURANCE &amp; EDGE CASES</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Validating the AI Under Extreme Playing Conditions
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans max-w-3xl">
            In AI-driven systems, standard unit tests are only the beginning. As <strong>Lead Tester</strong>, my primary responsibility was subjecting the detection models to chaotic grassroots playing conditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-xl bg-[#273A29] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#FDAE16] font-mono text-xs font-bold">
                <Bug className="w-4 h-4" />
                <span>CHALLENGE 1: Fast Motion Blur (100+ km/h)</span>
              </div>
              <h4 className="font-display font-bold text-base text-white">Ball Tracking Blur</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                On 60 FPS mobile sensors, a fast cricket ball appears as an elongated, blurry ellipse.
              </p>
              <div className="text-xs font-mono text-gray-200 bg-black/40 p-3 rounded-lg border border-white/5">
                <strong className="text-[#FDAE16]">QA Solution:</strong> Implemented Kalman Filter prediction across consecutive frames. Verified &lt;5% spatial variance even during 3-frame drops.
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#273A29] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#FDAE16] font-mono text-xs font-bold">
                <Bug className="w-4 h-4" />
                <span>CHALLENGE 2: Harsh Sunlight &amp; Shadows</span>
              </div>
              <h4 className="font-display font-bold text-base text-white">Crease False Positives</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Direct afternoon sun cast sharp player shadows across the popping crease, triggering false overstepping detections.
              </p>
              <div className="text-xs font-mono text-gray-200 bg-black/40 p-3 rounded-lg border border-white/5">
                <strong className="text-[#FDAE16]">QA Solution:</strong> Validated adaptive HSV color segmentation filters across 30 lighting-variation footage sets to separate chalk from shadow gradients.
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#273A29] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#FDAE16] font-mono text-xs font-bold">
                <Bug className="w-4 h-4" />
                <span>CHALLENGE 3: Occlusion by Batsman / Stumps</span>
              </div>
              <h4 className="font-display font-bold text-base text-white">Disappearing Ball on Impact</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                During LBW appeals, the cricket ball is frequently obscured by the batsman&apos;s front pad and bat.
              </p>
              <div className="text-xs font-mono text-gray-200 bg-black/40 p-3 rounded-lg border border-white/5">
                <strong className="text-[#FDAE16]">QA Solution:</strong> Built regression fixtures testing cases where the ball disappeared 100ms before pad contact, validating impact estimation from preceding velocity vectors.
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#273A29] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#FDAE16] font-mono text-xs font-bold">
                <Bug className="w-4 h-4" />
                <span>CHALLENGE 4: Non-Standard Smartphone Sensors</span>
              </div>
              <h4 className="font-display font-bold text-base text-white">Camera Angle Jitter</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Grassroots games lack calibrated tripods; phones are mounted on improvised stands with slight angle tilts.
              </p>
              <div className="text-xs font-mono text-gray-200 bg-black/40 p-3 rounded-lg border border-white/5">
                <strong className="text-[#FDAE16]">QA Solution:</strong> Implemented a 10-second calibration checklist and perspective warp sanity check, ensuring accuracy even with &plusmn;8&deg; tilt angles.
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: CTA Back */}
        <section className="bg-white rounded-2xl p-8 sm:p-12 text-center space-y-6 border border-[#334B35]/15 shadow-sm">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#111311] tracking-tight">
            Interested in discussing my test strategy or automation suites?
          </h2>
          <p className="text-base text-[#111311]/80 max-w-xl mx-auto font-sans">
            I am available for full-time SQA roles across Europe, Canada, and global remote teams.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#FDAE16] hover:bg-[#E69B0A] text-[#111311] text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-transform hover:scale-105"
            >
              <span>Get In Touch</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#F6EFE1] hover:bg-gray-200 text-[#111311] text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full border border-[#334B35]/20 transition-transform hover:scale-105"
            >
              <span>Back to Home Portfolio</span>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
