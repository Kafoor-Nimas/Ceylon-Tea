
export default function TeaRegionsSection() {
  const regions = [
    {
      name: "Nuwara Eliya",
      region: "Central",
      elevation: "High Grown • 6,000+ ft",
      description:
        "Renowned as the champagne of teas. Delicate, golden-liquored, with refined floral notes and an exquisite lingering aroma.",
      character: "Delicate • Floral • Pale Amber",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD7LE9NQO3CIdkv6mCGpP3BcBsbnLEt6Xg7bAhLPrx5g6qePsE2MuvCBskFZoX6mbVROunYQpeK7M_3Zz2-K007skDl-sOpRotnsBeno0Z83zPaS3eQljQVp-6GttvbrtvLez2x--ZRZRCZtwTZGdbyLCO1w1o5liuRq0UfXAvy7Ov88FBT0RjJ5c--a9KvncQybr1mczhWYpMylFiX8kW64Bde_-RrYLCvUQlsREtDQZAq7Q0cspn5sg",
    },
    {
      name: "Kandy",
      region: "Cultural Capital",
      elevation: "Mid Grown • 2,000–4,000 ft",
      description:
        "The historic cradle of Ceylon tea. Full-bodied, rich, classic depth with hearty reddish tones that pair beautifully with milk.",
      character: "Full-Bodied • Robust • Malty",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBi8uP-WQzgIXgXxD0L0Pr6ipdOTNMnjFjgVfogmnTDi-InZG2MCsvJbwS8z6MiDG97HrGf5j8XtNjX3xkp5MTv6qpo4LQOQc87DfXvw8dhumXaMTQeteeCg4aX5lMXv6aZXIiZELFuPr0Pfmv0B3XFV4saGMzvH9V_BJHwgHn_dM-DmYZmPh6Zn8gZlVTys1MzLVf-NqR50yJdSkvW5x_GD8sVj8eXfVigHiq3o2mHz3mgn8GHKuFw0Q",
    },
    {
      name: "Uva",
      region: "Eastern Slopes",
      elevation: "High Grown • 3,000–5,000 ft",
      description:
        "Shaped by dry Cachan winds. Known globally for its unique exotic aroma, seasonal menthol pungency, and smooth aftertaste.",
      character: "Exotic • Fragrant • Menthol Touch",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDZI5stMwcRK77fxMBm_FacNdtus7cQQ20-DU2wXcXo2A3Zij5Sf5kIrBoRoZbQ6Cy-ohqwLiwf2TneKFmRskSChlVT1B9Gz7p_0Ps5G0-TvFX5AvAPfxbSj8N40wMipu4cZ0r0eJtg6b-w5NxpSiNPdhCP9vRmv1m-pU3yfJ79gnCC1o07c8mOKan4Of5vCQOCWmROJJ44yn0J7v_d5WdVf_irkw9q-KQhCDbABEEwyTqDwS3QzPS6mA",
    },
    {
      name: "Dimbula",
      region: "Western Slopes",
      elevation: "High Grown • 3,500–5,000 ft",
      description:
        "Refreshed by southwest monsoons. Produces a bright golden-orange cup with crisp, jasmine-like floral notes and clean astringency.",
      character: "Golden Amber • Crisp • Aromatic",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAIFh3JachB_O5w1pjkFfpJAEhHiAkTQ3IOfH00EAGURvFUIByJruBS0e4o43EcbODZOgFB6mLhyuNCitfbqnf1jLzaojXl29hmthCVKzp1vPL8ND58fTFcvqMSAPD0_vMKRw3TyYhCk0vmWdmUjiZgTSLPOlQHGb9l5iAiIpb-PmLtcFMDbQOfapZAbB9WkuU6ga8EV_ijKcZvgQpg6C9YElsKNq6QKYpjdxCGeyV6JzyiPYGOP5NYKA",
    },
  ];

  return (
    <section className="w-full py-space-xl lg:py-28 bg-surface-container-low">
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-md text-label-md text-tertiary uppercase tracking-widest font-semibold block mb-space-xs">
            Sri Lanka's Terroir
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mb-space-xs">
            From Sri Lanka's Finest Tea Regions
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Explore the unique character of tea grown across the island's most
            celebrated microclimates and altitudes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2   xl:grid-cols-4  gap-gutter">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden bg-surface-container">
                <img
                  alt={`${region.name} tea landscape`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={region.image}
                />
                <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-label-sm font-label-sm font-semibold text-primary uppercase tracking-wider shadow-sm">
                  {region.elevation}
                </div>
              </div>
              <div className="p-space-lg flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {region.name}
                    </h3>
                    <span className="font-label-sm text-label-sm text-tertiary-container font-semibold uppercase tracking-wider">
                      {region.region}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                    {region.description}
                  </p>
                </div>
                <div className="pt-space-sm bg-surface-container-low/50 rounded-lg p-space-sm">
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider block">
                    Character:
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary font-medium">
                    {region.character}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
