import img from "../../assets/tea.jfif";

export default function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl lg:py-24">
      {/* Subtle Ambient Glow */}
      <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[480px] h-[480px] rounded-full bg-tertiary-fixed/30 blur-3xl pointer-events-none"></div>
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Text & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-space-xs px-3.5 py-1 rounded-full bg-surface-container-lowest shadow-sm mb-space-md">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                Artisanal Ceylon Provenance
              </span>
            </div>
            <h1 className="font-display-lg text-3xl lg:text-5xl text-primary tracking-tight mb-space-md">
              Our Services
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-xl mb-space-lg leading-relaxed">
              From tea selection to global delivery, we provide quality-focused
              tea solutions crafted with single-origin mindfulness and certified
              highland excellence.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <a
                className="inline-flex items-center gap-2 px-space-lg py-space-sm rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-primary-container transition-all"
                href="#services-grid"
              >
                <span>Explore Offerings</span>
                <span className="material-symbols-outlined text-[18px]">
                  south
                </span>
              </a>
              <a
                className="inline-flex items-center gap-2 px-space-lg py-space-sm rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm hover:bg-surface-container transition-colors"
                href="#consultation-inquiry"
              >
                <span>Wholesale Inquiries</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_outward
                </span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-10 mt-6 border-t border-outline-variant/30 w-full max-w-3xl">
              <div>
                <div className="font-headline-md text-2xl text-primary font-medium">
                  6,000
                  <span className="text-tertiary-container text-2xl font-normal">
                    ft
                  </span>
                </div>
                <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">
                  Nuwara Eliya Peaks
                </p>
              </div>
              <div>
                <div className="font-headline-md text-2xl text-primary font-medium">
                  48
                  <span className="text-tertiary-container text-2xl font-normal">
                    hr
                  </span>
                </div>
                <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">
                  Flush to Vacuum Seal
                </p>
              </div>
              <div>
                <div className="font-headline-md text-2xl text-primary font-medium">
                  35+
                </div>
                <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">
                  Export Destinations
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Hero Still Life Imagery */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-lowest p-3">
              <div className="overflow-hidden rounded-xl aspect-[4/3] lg:aspect-[5/4]">
                <img
                  alt="Artisanal table set with Ceylon tea leaves and steaming cup"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  src={img}
                />
              </div>
              {/* Floating Origin Badge */}
              <div className="absolute -bottom-4 -left-4 bg-surface-container-lowest p-4 rounded-xl shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">
                    verified
                  </span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm uppercase text-secondary font-semibold">
                    Lion Logo Certified
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium">
                    100% Pure Ceylon Guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
