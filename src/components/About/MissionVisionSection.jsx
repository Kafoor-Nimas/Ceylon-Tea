export default function MissionVisionSection() {
  return (
    <section className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop py-space-xl">
      <div className="text-center max-w-2xl mx-auto mb-space-lg">
        <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-semibold">
          Purpose &amp; Horizon
        </span>
        <h2 className="font-headline-lg text-5xl text-primary tracking-tight mt-space-xs">
          Guided by Principle &amp; Terroir
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-desktop">
        {/* Mission Card */}
        <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
          <div>
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-space-md shadow-sm">
              <span className="material-symbols-outlined text-tertiary text-[32px]">
                track_changes
              </span>
            </div>
            <div className="inline-block px-space-xs py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-semibold mb-space-xs">
              Core Mission
            </div>
            <h3 className="font-headline-sm text-2xl text-primary mb-space-sm">
              Honoring Nature &amp; Community
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              To deliver exceptional Ceylon tea while supporting tea-growing
              communities, protecting nature, and preserving the traditions that
              make Sri Lankan tea unique.
            </p>
          </div>
          <div className="mt-space-lg pt-space-md bg-surface-container-low rounded-lg p-space-sm flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[22px]">
              diversity_1
            </span>
            <p className="font-body-sm text-body-sm text-secondary font-medium">
              Over 1,200 estate families supported through education &amp;
              wellness programs.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
          <div>
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-space-md shadow-sm">
              <span className="material-symbols-outlined text-tertiary text-[32px]">
                visibility
              </span>
            </div>
            <div className="inline-block px-space-xs py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-semibold mb-space-xs">
              Global Vision
            </div>
            <h3 className="font-headline-sm text-2xl text-primary mb-space-sm">
              The Pinnacle of Origin Tea
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              To become a trusted global ambassador for authentic Ceylon tea and
              share the natural beauty and heritage of Sri Lanka through every
              cup.
            </p>
          </div>
          <div className="mt-space-lg pt-space-md bg-surface-container-low rounded-lg p-space-sm flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[22px]">
              spa
            </span>
            <p className="font-body-sm text-body-sm text-secondary font-medium">
              Dedicated to zero-carbon processing and 100% biodegradable leaf
              packaging by 2028.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
