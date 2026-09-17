import img from "../../assets/company.jfif";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface py-space-xl lg:py-24">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary-container/40 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] rounded-full bg-tertiary-fixed/20 blur-3xl pointer-events-none"></div>
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop items-center">
          {/* Hero Copy (Col 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest mb-space-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim inline-block"></span>
              <span>Pure Ceylon Tea</span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile lg:text-5xl text-on-surface tracking-tight mb-space-md leading-[1.15] max-w-2xl">
              From the Misty Hills of Sri Lanka to Your Cup
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-xl leading-relaxed">
              Discover the rich aroma, distinctive character, and timeless
              tradition of authentic Ceylon tea. Handcrafted from misty highland
              summits, nurtured by monsoon rains, and steeped in centuries of
              heritage.
            </p>
            <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center gap-space-xs px-8 py-3.5 rounded-xl bg-primary-container text-surface-container-lowest font-label-md text-label-md uppercase tracking-wider hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg group"
                data-path="products"
                href="#"
              >
                <span>Explore Our Teas</span>
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
              <a
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-surface-container-lowest text-primary font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container transition-all duration-300 shadow-sm"
                data-path="about"
                href="#"
              >
                <span>Our Story</span>
              </a>
            </div>

            {/* Quick Highland Metrics Bar */}
            <div className="grid grid-cols-3 gap-space-md pt-space-xl mt-space-xl w-full max-w-lg bg-surface-container-low/70 p-space-md rounded-xl backdrop-blur-sm">
              <div>
                <div className="font-headline-sm text-headline-sm text-primary font-semibold">
                  6,000
                  <span className="text-tertiary-container text-body-sm font-normal">
                    ft
                  </span>
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Peak Elevation
                </div>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-primary font-semibold">
                  100
                  <span className="text-tertiary-container text-body-sm font-normal">
                    %
                  </span>
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Single Origin
                </div>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-primary font-semibold">
                  1867
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Heritage Year
                </div>
              </div>
            </div>
          </div>

          {/* Hero Panoramic Media (Col 8-12) */}
          <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container-low p-2">
              <img
                alt="Panoramic vista of misty Sri Lankan highland tea estate"
                className="w-full h-[460px] lg:h-[540px] object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                src={img}
              />
              {/* Single Origin Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-surface-container-lowest/95 backdrop-blur-md p-space-md rounded-xl shadow-lg flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-primary text-[26px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    eco
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="font-label-sm text-label-sm text-tertiary font-bold tracking-widest uppercase">
                    Single Origin
                  </div>
                  <div className="font-title-lg text-title-lg text-on-surface truncate">
                    100% Pure Ceylon
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Certified Lion Logo Guarantee
                  </div>
                </div>
              </div>
              {/* Artisan Floating Tag */}
              <div className="absolute top-6 right-6 bg-primary-container/90 text-on-primary text-label-sm font-label-sm uppercase tracking-widest px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-md flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">
                  verified
                </span>
                <span>Hand-Plucked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
