const MILESTONES = [
  {
    shortYear: "'85",
    fullYear: "1985",
    tag: "Inception",
    tagStyle: "bg-surface-container text-secondary",
    title: "Our Beginning",
    description:
      "Pioneered as an artisanal tea garden in the cool Nuwara Eliya slopes, cultivating heirloom Camellia sinensis varieties guided by biodynamic highland lore.",
    icon: "yard",
    badgeText: "Highland Roots",
    pinBorder: "border-tertiary-fixed-dim",
    pinDot: "bg-primary",
    isCurrent: false,
  },
  {
    shortYear: "'95",
    fullYear: "1995",
    tag: "Global Reach",
    tagStyle: "bg-secondary-container text-on-secondary-container",
    title: "Growing Beyond",
    description:
      "Introduced single-estate orthodox teas to Parisian gourmet salons and European connoisseurs, earning international recognition for unblended Ceylon purity.",
    icon: "flight_takeoff",
    badgeText: "Export Pioneer",
    secondaryIcon: "public",
    pinBorder: "border-secondary-fixed",
    pinDot: "bg-secondary",
    isCurrent: false,
  },
  {
    shortYear: "'10",
    fullYear: "2010",
    tag: "Reserve Craft",
    tagStyle: "bg-tertiary-fixed/40 text-tertiary",
    title: "Premium Collection",
    description:
      "Curated a master private reserve line showcasing single-flush silver tips, rare hand-rolled oolongs, and floral high-grown seasonal harvests.",
    icon: "award_star",
    badgeText: "Gold Reserve",
    secondaryIcon: "workspace_premium",
    pinBorder: "border-tertiary-fixed-dim",
    pinDot: "bg-tertiary-container",
    isCurrent: false,
  },
  {
    shortYear: "Now",
    fullYear: "Today",
    tag: "Global Ambassador",
    tagStyle: "bg-primary-container text-on-primary-container",
    title: "Sharing Ceylon",
    description:
      "Continuing our dedication to sustainable mountain ecology, direct fair-wage estate partnerships, and distributing fresh unblended tea to 40+ countries.",
    icon: "verified_user",
    badgeText: "Ethical Ambassador",
    secondaryIcon: "local_cafe",
    isCurrent: true,
  },
];

export default function AboutTimeline() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl my-space-md relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-space-xl flex flex-col items-center">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container text-secondary shadow-sm mb-space-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">
              Milestones
            </span>
          </div>
          <h2 className="font-headline-lg text-5xl text-primary tracking-tight mt-space-xs">
            Our Journey
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            From a humble mountain family estate to tea salons across Paris,
            Tokyo, and London.
          </p>
        </div>

        {/* Horizontal Connected Roadmap */}
        <div className="relative pt-space-md">
          {/* Continuous Timeline Rail */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-tertiary-fixed-dim/40 via-primary-container/40 to-tertiary-fixed-dim/60 -z-0 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative z-10">
            {MILESTONES.map((item, idx) => {
              if (item.isCurrent) {
                return (
                  <div
                    key={idx}
                    className="group relative flex flex-col justify-between bg-primary text-on-primary p-space-lg rounded-2xl shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-primary-container"
                  >
                    {/* Timeline Top Node Pin */}
                    <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-tertiary-fixed-dim border-2 border-surface-container-lowest items-center justify-center shadow-md group-hover:scale-110 transition-all">
                      <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-fixed"></span>
                    </div>

                    <div>
                      {/* Header / Year Badge */}
                      <div className="flex items-center justify-between gap-space-sm mb-space-md">
                        <div className="flex items-baseline gap-1">
                          <span className="font-display-lg text-[32px] leading-tight text-tertiary-fixed-dim font-serif font-bold">
                            {item.shortYear}
                          </span>
                          <span className="font-label-sm text-label-sm text-outline-variant uppercase font-medium">
                            {item.fullYear}
                          </span>
                        </div>
                        <span
                          className={`font-label-sm text-label-sm uppercase tracking-wider px-3 py-0.5 rounded-full  text-center font-semibold ${item.tagStyle}`}
                        >
                          {item.tag}
                        </span>
                      </div>

                      {/* Narrative */}
                      <h3 className="font-title-lg text-2xl text-surface-container-lowest mb-space-xs">
                        {item.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-outline-variant leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Card Footer Info */}
                    <div className="mt-space-md pt-space-sm border-t border-outline-variant/20 flex items-center justify-between text-tertiary-fixed-dim">
                      <div className="flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-wider font-medium">
                        <span className="material-symbols-outlined text-[18px]">
                          {item.icon}
                        </span>
                        <span>{item.badgeText}</span>
                      </div>
                      <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                        {item.secondaryIcon}
                      </span>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-2xl border border-outline-variant/40 shadow-[0_4px_20px_-4px_rgba(36,49,39,0.05)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                >
                  {/* Timeline Top Node Pin */}
                  <div
                    className={`hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface-container-lowest border-2 ${item.pinBorder} items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-primary transition-all`}
                  >
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${item.pinDot}`}
                    ></span>
                  </div>

                  <div>
                    {/* Header / Year Badge */}
                    <div className="flex items-center justify-between gap-space-sm mb-space-md">
                      <div className="flex items-baseline gap-1">
                        <span className="font-display-lg text-[32px] leading-tight text-primary font-serif font-bold">
                          {item.shortYear}
                        </span>
                        <span className="font-label-sm text-label-sm text-outline uppercase font-medium">
                          {item.fullYear}
                        </span>
                      </div>
                      <span
                        className={`font-label-sm text-label-sm uppercase tracking-wider px-space-xs py-0.5 rounded-full font-semibold ${item.tagStyle}`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Narrative */}
                    <h3 className="font-title-lg text-2xl text-primary mb-space-xs group-hover:text-primary-container transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Footer Info */}
                  <div className="mt-space-md pt-space-sm border-t border-outline-variant/20 flex items-center justify-between text-secondary">
                    <div className="flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-wider font-medium">
                      <span className="material-symbols-outlined text-[18px] text-tertiary">
                        {item.icon}
                      </span>
                      <span>{item.badgeText}</span>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-outline opacity-60 group-hover:text-primary group-hover:opacity-100 transition-opacity">
                      {item.secondaryIcon || "spa"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
