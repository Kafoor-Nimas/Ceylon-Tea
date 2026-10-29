import AboutHero from "../components/About/AboutHero";
import AboutTimeline from "../components/About/AboutTimeline";
import CompanyIntro from "../components/About/CompanyIntro";
import EthicalBadgesSection from "../components/About/EthicalBadgesSection";
import MissionVisionSection from "../components/About/MissionVisionSection";

export default function About() {
  return (
    <div className="bg-background font-body-md text-body-md text-on-background min-h-screen">
      <main className="w-full pt-[76px] bg-background">
        <div className="flex flex-col w-full">
          <AboutHero />
          <CompanyIntro />
          <AboutTimeline />
          <MissionVisionSection />
          <EthicalBadgesSection />
        </div>
      </main>
    </div>
  );
}
