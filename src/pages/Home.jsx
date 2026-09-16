import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import TeaRegionsSection from "../components/TeaRegionsSection";
import WelcomeSection from "../components/WelcomSection";

export default function Home() {
  return (
    <div className="bg-background font-body-md text-body-md text-on-background min-h-screen">
      <main className="w-full pt-[76px] bg-background">
        <div className="flex flex-col w-full">
          <Hero />
          <WelcomeSection />
          <ServicesSection />
          <TeaRegionsSection />
        </div>
      </main>
    </div>
  );
}
