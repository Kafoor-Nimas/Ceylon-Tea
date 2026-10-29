import img from "../../assets/woman.jfif"

export default function BrewingRitualSection() {
  return (
    <section className="w-full bg-surface-container-low py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-label-sm font-label-sm uppercase tracking-widest text-secondary mb-3">
              Mindful Brewing Ritual
            </span>
            <h2 className="font-headline-lg text-4xl lg:text-5xl text-primary mb-6">
              The Art of the Highland Steep
            </h2>
            <p className="font-body-md text-body-md text-secondary mb-8 leading-relaxed">
              Every elevation in Sri Lanka imprints its distinct terroir onto
              the leaves. To honor the months of cultivation and hand-plucking,
              we recommend three golden metrics for pure infusion.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="font-headline-md text-2xl text-tertiary-fixed-dim font-serif italic">
                  01
                </span>
                <div>
                  <h4 className="font-title-lg text-xl text-primary mb-1">
                    Water Temperature
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Spring water at 95°C (203°F) for Black tea; 80°C (176°F) for
                    Green tea preserving delicate polyphenols.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-headline-md text-2xl text-tertiary-fixed-dim font-serif italic">
                  02
                </span>
                <div>
                  <h4 className="font-title-lg text-xl text-primary mb-1">
                    Leaf Ratio
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary">
                    2.5 grams (one heaped brass spoon) per 200ml cup to yield
                    optimal clarity and aromatic release.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-headline-md text-2xl text-tertiary-fixed-dim font-serif italic">
                  03
                </span>
                <div>
                  <h4 className="font-title-lg text-xl text-primary mb-1">
                    Infusion Timing
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Black teas develop rich complexity at 3 to 4 minutes;
                    delicate greens require 2 gentle minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-surface-container relative">
              <img
                alt="Sri Lankan woman plucking fresh tea leaves in lush plantation"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                loading="lazy"
                src={img}
              />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-surface-container relative sm:translate-y-8">
              <img
                alt="Steaming cup of golden tea infusion with loose leaf tea"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                loading="lazy"
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}