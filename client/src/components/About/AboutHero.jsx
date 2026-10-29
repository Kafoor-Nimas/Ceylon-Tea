export default function AboutHero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Top Decorative Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <section className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop pt-space-xl pb-space-lg text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container text-on-secondary-container shadow-sm mb-space-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            ESTABLISHED 1985
          </span>
        </div>

        <h1 className="font-display-lg text-5xl text-primary tracking-tight max-w-2xl mt-space-xs mb-space-sm">
          Our Story
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          Discover the journey behind authentic Ceylon Tea, crafted amid misty
          ridges, hand-plucked at dawn, and shared across continents.
        </p>

        {/* Sensory stats horizontal strip */}
        <div className="mt-space-lg grid grid-cols-2 md:grid-cols-4 gap-gutter w-full max-w-5xl pt-space-md pb-space-xs">
          <div className="flex flex-col items-center">
            <span className="font-headline-md text-2xl text-primary font-medium">
              6,000
              <span className="text-tertiary font-serif text-title-lg">ft</span>
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">
              Highland Elevation
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-headline-md text-2xl text-primary font-medium">
              100
              <span className="text-tertiary font-serif text-title-lg">%</span>
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">
              Pure Ceylon
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-headline-md text-2xl text-primary font-medium">
              38
              <span className="text-tertiary font-serif text-title-lg">+</span>
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">
              Years of Craft
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-headline-md text-2xl text-primary font-medium">
              Single
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">
              Origin Terroir
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
