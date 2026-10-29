const SERVICES_DATA = [
  {
    icon: "eco",
    tag: "Harvest Selection",
    title: "Premium Tea Selection",
    description:
      "We source carefully selected Ceylon tea leaves from Sri Lanka's finest tea-growing regions, from high-grown Dimbula to mist-veiled Nuwara Eliya and rich southern Ruhuna.",
    footerText: "Single Estate & Seasonal",
  },
  {
    icon: "tune",
    tag: "Master Sommelier",
    title: "Custom Tea Blending",
    description:
      "Create distinctive tea blends tailored to your preferred flavor, aroma, and strength. Our licensed tea masters develop bespoke sensory profiles with rare spices and native botanicals.",
    footerText: "Cupping & Flavor Crafting",
  },
  {
    icon: "inventory_2",
    tag: "OEM & Packaging",
    title: "Private Label Tea",
    description:
      "We provide customized tea packaging solutions for businesses and emerging tea brands. Offering biodegradable pyramid silken infusers, tin canisters, foil caddies, and bespoke cartons.",
    footerText: "Bespoke Finished Goods",
  },
  {
    icon: "public",
    tag: "Global Distribution",
    title: "Tea Export",
    description:
      "Reliable international tea export services connecting authentic Ceylon tea with global markets. Comprehensive Phytosanitary, ISO, Fair Trade, and Rainforest Alliance documentation included.",
    footerText: "FCL, LCL & Air Cargo",
  },
  {
    icon: "featured_seasonal_and_gifts",
    tag: "Curated Luxury",
    title: "Corporate Tea Gifts",
    description:
      "Premium tea gift collections designed for corporate events, celebrations, and special occasions. Handcrafted timber chests, silver-plated infusers, and personalized embossed client notes.",
    footerText: "Executive Presentation",
  },
  {
    icon: "local_shipping",
    tag: "Direct Dispatch",
    title: "Tea Delivery",
    description:
      "Convenient and secure delivery of your favorite Ceylon teas directly to your doorstep. Insulated, climate-safe packing ensures unbroken whole-leaf condition and aromatic preservation.",
    footerText: "Tracked Global Courier",
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="w-full py-space-xl lg:py-24 bg-surface"
      id="services-grid"
    >
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-4">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-wider text-tertiary font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
              End-to-End Tea Atelier
            </span>
            <h2 className="font-headline-lg text-3xl lg:text-5xl text-primary tracking-tight mt-2">
              Tailored Tea Solutions
            </h2>
          </div>
          <p className="font-body-md text-body-md text-secondary max-w-md">
            Supporting global retail partners, luxury hoteliers, and culinary
            masters with artisanal precision and batch integrity.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl bg-surface-container-lowest p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-tertiary-fixed-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div>
                <div className="w-14 h-14 rounded-xl bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-[28px]">
                    {service.icon}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
                    {service.tag}
                  </span>
                </div>
                <h3 className="font-headline-sm text-3xl text-primary mb-3">
                  {service.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between text-primary font-semibold text-label-md uppercase tracking-wider">
                <span>{service.footerText}</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
