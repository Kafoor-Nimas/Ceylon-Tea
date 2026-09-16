import { useState } from "react";
import ServicesHero from "../components/Services/ServicesHero";
import ServicesGrid from "../components/Services/ServicesGrid";
import QualityProcessSection from "../components/Services/QualityProcessSection";
import ConsultationCta from "../components/Services/ConsultationCta";
import CatalogModal from "../components/Services/CatalogModal";

export default function Services() {
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);

  return (
    <div className="bg-background font-body-md text-body-md text-on-background min-h-screen">
      <main className="w-full pt-[76px] bg-background">
        <div className="flex flex-col w-full">
          <ServicesHero
            onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
          />
          <ServicesGrid />
          <QualityProcessSection />
          <ConsultationCta onOpenModal={() => setIsCatalogModalOpen(true)} />
        </div>
      </main>

      {/* Catalog Modal */}
      <CatalogModal
        isOpen={isCatalogModalOpen}
        onClose={() => setIsCatalogModalOpen(false)}
      />
    </div>
  );
}
