import Hero from "@/components/Hero";
import ExperienceNarrative from "@/components/ExperienceNarrative";
import SkillsMatrix from "@/components/SkillsMatrix";
import SkillsList from "@/components/SkillsList";
import BentoGrid from "@/components/BentoGrid";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 max-w-7xl mx-auto space-y-32">
      <Hero />
      <ExperienceNarrative />
      <SkillsMatrix />
      <SkillsList />
      <BentoGrid />
      <Education />
    </main>
  );
}
