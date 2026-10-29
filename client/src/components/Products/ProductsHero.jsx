import img from "../../assets/product.jfif";

export default function ProductsHero() {
  return (
    <section className="relative w-full bg-surface-container-low overflow-hidden py-16 lg:py-24">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-surface-container-high/60 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-tertiary-fixed/20 blur-2xl pointer-events-none"></div>
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-primary text-label-sm font-label-sm tracking-widest uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
              Single-Origin Terroir
            </div>
            <h1 className="font-display-lg text-display-lg-mobile lg:text-5xl text-primary tracking-tight mb-4">
              Our Tea Collection
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-xl mb-8 leading-relaxed">
              Explore our carefully selected collection of authentic Ceylon
              teas, hand-harvested across mist-shrouded high elevation gardens
              and sun-warmed valleys.
            </p>
            {/* Stat Counters Minimal Row */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-outline-variant/30 w-full max-w-lg">
              <div>
                <div className="font-headline-sm text-headline-sm text-primary">
                  6,200
                  <span className="text-tertiary-fixed-dim font-serif text-sm">
                    ft
                  </span>
                </div>
                <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  Peak Elevation
                </div>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-primary">
                  100%
                </div>
                <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  Single Estate
                </div>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-primary">
                  7
                </div>
                <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  Agro Terroirs
                </div>
              </div>
            </div>
          </div>
          {/* Featured Botanical Vignette */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto rounded-xl p-3 bg-surface-container-lowest shadow-xl transition-transform hover:-translate-y-1 duration-500">
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden relative">
                <img
                  alt="Ceylon loose black tea leaves on rustic wooden table"
                  className="w-full h-full object-cover"
                  src={img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-on-primary">
                  <div>
                    <span className="text-label-sm font-label-sm uppercase tracking-widest text-tertiary-fixed">
                      Seasonal Harvest
                    </span>
                    <p className="font-title-lg text-title-lg font-medium text-white">
                      Nuwara Eliya Flush
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-surface-container-lowest/20 backdrop-blur-md flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[18px]">
                      eco
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
