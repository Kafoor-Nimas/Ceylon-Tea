import ContactHero from "../components/Contact/ContactHero";
import ContactMapSection from "../components/Contact/ContactMapSection";
import ContactSection from "../components/Contact/ContactSection";
import EthicalAssuranceBanner from "../components/Contact/EthicalAssuranceBanner";


export default function Contact() {
  return (
    <div className="bg-background font-body-md text-body-md text-on-background min-h-screen">
      <main className="w-full pt-[76px] bg-background">
        <div className="flex flex-col w-full">
          <ContactHero />
          <ContactSection />
          <ContactMapSection />
          <EthicalAssuranceBanner />
        </div>
      </main>
    </div>
  );
}