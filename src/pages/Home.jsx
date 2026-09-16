import Hero from "../components/Home/Hero";
import ServicesSection from "../components/Home/ServicesSection";
import TeaRegionsSection from "../components/Home/TeaRegionsSection";
import WelcomeSection from "../components/Home/WelcomSection";

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
