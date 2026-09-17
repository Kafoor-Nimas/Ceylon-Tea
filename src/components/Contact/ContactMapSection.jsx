import { useState } from "react";
import img from "../../assets/map.jfif";

export default function ContactMapSection() {
  const [activeTab, setActiveTab] = useState("colombo");

  const mapData = {
    colombo: {
      bgUrl: img,
      chip: "Flagship Tasting Room",
      title: "Tea Avenue Tasting Pavilion",
      desc: "Located along the historic coastal stretch of Galle Face, Colombo. Houses our temperature-monitored harvest vaults, sommelier sensory table, and heritage library.",
      coords: "6.9271° N, 79.8612° E",
      directionsLink: "https://maps.google.com/?q=Galle+Face+Colombo+Sri+Lanka",
    },
    highlands: {
      bgUrl: img,
      chip: "Heritage High-Elevation Estate",
      title: "Highland Terroir Plantation",
      desc: "Perched at 6,200 ft amid mountain mist. Home to our clonal nursery, artisan copper drying rollers, and sunrise tea plucking reserve.",
      coords: "6.9497° N, 80.7891° E",
      directionsLink:
        "https://maps.google.com/?q=Pedro+Tea+Estate+Nuwara+Eliya",
    },
  };

  const currentMap = mapData[activeTab];

  return (
    <section className="w-full py-16 bg-surface-container-low/60 hidden md:block">
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
              Cartography &amp; Terroir
            </span>
            <h2 className="font-headline-md text-4xl text-primary tracking-tight mt-1">
              Our Colombo Pavilion &amp; Highland Roots
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              className={`px-4 py-2 rounded-full font-label-sm text-label-sm uppercase tracking-wider transition-all shadow-sm ${
                activeTab === "colombo"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
              }`}
              type="button"
              onClick={() => setActiveTab("colombo")}
            >
              Pavilion • Colombo 03
            </button>
            <button
              className={`px-4 py-2 rounded-full font-label-sm text-label-sm uppercase tracking-wider transition-all ${
                activeTab === "highlands"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
              }`}
              type="button"
              onClick={() => setActiveTab("highlands")}
            >
              Highland Estates • Nuwara Eliya
            </button>
          </div>
        </div>

        {/* Map Canvas */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-surface-container-high h-[440px] md:h-[500px]">
          <div
            className="w-full h-full bg-cover bg-center transition-all duration-700 filter saturate-[0.85] contrast-[1.05]"
            style={{ backgroundImage: `url('${currentMap.bgUrl}')` }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/20 pointer-events-none"></div>

          {/* Floating Info Box */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-[440px] p-6 rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-2xl text-on-surface hidden xl:block">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                {currentMap.chip}
              </span>
            </div>

            <h4 className="font-headline-sm text-2xl text-primary mb-1">
              {currentMap.title}
            </h4>

            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
              {currentMap.desc}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-outline-variant/30 text-label-sm font-label-sm">
              <div className="flex items-center gap-1.5 text-outline">
                <span className="material-symbols-outlined text-[16px]">
                  navigation
                </span>
                <span>{currentMap.coords}</span>
              </div>
              <a
                className="inline-flex items-center gap-1 text-primary-container font-semibold hover:text-primary transition-colors"
                href={currentMap.directionsLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Get Directions</span>
                <span className="material-symbols-outlined text-[14px]">
                  open_in_new
                </span>
              </a>
            </div>
          </div>

          {/* Map Pin Marker */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 animate-ping absolute"></div>
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg relative z-10 border-2 border-surface-container-lowest">
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  eco
                </span>
              </div>
            </div>
            <span className="mt-2 px-3 py-1 rounded-full bg-primary/90 text-surface-container-lowest font-label-sm text-label-sm uppercase tracking-wider backdrop-blur-sm shadow-md">
              Ceylon Tea Co.
            </span>
          </div>
        </div>

        {/* Terroir Navigator Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-surface-container-lowest text-on-surface flex flex-col gap-1">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
              High Elevation
            </span>
            <span className="font-title-lg text-2xl text-primary">
              Nuwara Eliya
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              6,200 ft • Floral &amp; Light Liquor
            </span>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-lowest text-on-surface flex flex-col gap-1">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
              Western Slopes
            </span>
            <span className="font-title-lg text-2xl text-primary">
              Dimbula Valley
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              4,500 ft • Golden Red &amp; Jasmine Notes
            </span>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-lowest text-on-surface flex flex-col gap-1">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
              Mist Shrouded
            </span>
            <span className="font-title-lg text-2xl text-primary">
              Uva Province
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              3,800 ft • Pungent Exotic Character
            </span>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-lowest text-on-surface flex flex-col gap-1">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
              Rainforest Fringe
            </span>
            <span className="font-title-lg text-2xl text-primary">
              Ruhuna Low-Grown
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              1,800 ft • Malty, Caramel &amp; Bold
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
