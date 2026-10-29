export default function EthicalBadgesSection() {
  return (
    <section className="w-full bg-surface-container py-space-xl mb-space-xl">
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-gutter mb-space-lg">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-semibold">
              Integrity in Every Leaf
            </span>
            <h2 className="font-headline-md text-5xl text-primary tracking-tight mt-1">
              Ethical Standards &amp; Origin Seals
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            We adhere to uncompromising sustainability and purity benchmarks,
            guaranteed under Sri Lanka Tea Board regulations and certified
            international eco-frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Badge 1: Ceylon Lion Logo */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex items-start gap-space-md hover:shadow-md transition-shadow">
            <div className="w-14 h-14 shrink-0 rounded-full bg-tertiary-fixed/40 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-[28px]">
                shield
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <h3 className="font-title-lg text-title-lg text-primary">
                  Ceylon Lion Logo
                </h3>
                <span className="material-symbols-outlined text-tertiary text-[18px]">
                  verified
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Official seal of the Sri Lanka Tea Board. Certifies 100% pure
                Ceylon tea grown, manufactured, and packed solely in Sri Lanka.
              </p>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold mt-space-sm">
                Guaranteed Origin
              </span>
            </div>
          </div>

          {/* Badge 2: Rainforest Alliance */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex items-start gap-space-md hover:shadow-md transition-shadow">
            <div className="w-14 h-14 shrink-0 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[28px]">eco</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <h3 className="font-title-lg text-title-lg text-primary">
                  Rainforest Alliance
                </h3>
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  verified
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Rigorous ecological management safeguarding mountain
                rainforests, biodiverse cloud canopy species, and natural
                waterway health.
              </p>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold mt-space-sm">
                Ecological Protection
              </span>
            </div>
          </div>

          {/* Badge 3: Fair Trade */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex items-start gap-space-md hover:shadow-md transition-shadow">
            <div className="w-14 h-14 shrink-0 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[28px]">
                handshake
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <h3 className="font-title-lg text-title-lg text-primary">
                  Fair Community Trade
                </h3>
                <span className="material-symbols-outlined text-tertiary text-[18px]">
                  verified
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Fair living wages, housing support, healthcare access, and
                scholarship opportunities across all partnering highland estate
                villages.
              </p>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold mt-space-sm">
                Ethical Livelihood
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
