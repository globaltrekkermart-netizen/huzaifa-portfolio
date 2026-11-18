import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EducationAndSkills from "@/components/EducationAndSkills";
import ExperienceAndLanguages from "@/components/ExperienceAndLanguages";
import Projects from "@/components/Projects";
import QaDashboard from "@/components/QaDashboard";
import TestingWorkflow from "@/components/TestingWorkflow";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6EFE1] text-[#111311] selection:bg-[#FDAE16] selection:text-[#111311]">
      <Header />
      <main>
        <Hero />
        <EducationAndSkills />
        <ExperienceAndLanguages />
        <Projects />
        <QaDashboard />
        <TestingWorkflow />
        <Contact />
      </main>
    </div>
  );
}
