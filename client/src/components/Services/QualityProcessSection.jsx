export default function QualityProcessSection() {
  const steps = [
    {
      num: "01",
      icon: "nature_people",
      title: "Estate Selection",
      desc: "Hand-selection from bio-diverse estates above 4,000 feet. We inspect slope drainage, seasonal monsoonal cycles, and plucking standards (two leaves and a bud).",
      check: "Elevation & Terroir Verified",
    },
    {
      num: "02",
      icon: "coffee",
      title: "Sensory Cupping",
      desc: "Standardized ISO professional cupping sessions evaluate liquor tint, briskness, astringency, aroma volatiles, and infused leaf color uniformity.",
      check: "Master Sommelier Scorecard",
    },
    {
      num: "03",
      icon: "shield",
      title: "Nitrogen Sealed",
      desc: "Teas undergo nitrogen-flushed, moisture-barrier encapsulation at source, halting oxidation and sealing pristine aromatic essential oils.",
      check: "Zero Humidity Intrusion",
    },
    {
      num: "04",
      icon: "flight_takeoff",
      title: "Global Freight",
      desc: "Temperature-monitored air and ocean logistics with live tracking right to fulfillment hubs across Europe, the Americas, and Asia-Pacific.",
      check: "Cold-Chain & Doorstep Tracking",
    },
  ];

  return (
    <section className="w-full py-space-xl lg:py-28 bg-surface-container-low relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-md text-label-md uppercase tracking-wider text-tertiary-container font-semibold">
            Traceable Protocol
          </span>
          <h2 className="font-headline-lg text-3xl lg:text-5xl text-primary tracking-tight mt-2 mb-3">
            Partnership &amp; Quality Assurance Process
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            Our meticulous 4-step chain of custody ensures that every tea leaf
            mirrors the pure mist and mineral soil of its origin estate.
          </p>
        </div>

        {/* 4-Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-headline-md text-2xl text-tertiary-fixed-dim font-normal italic">
                    {step.num}
                  </span>
                  <span className="material-symbols-outlined text-primary text-[24px]">
                    {step.icon}
                  </span>
                </div>
                <h4 className="font-title-lg text-2xl text-primary mb-2">
                  {step.title}
                </h4>
                <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  check_circle
                </span>
                <span>{step.check}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Visual Breakdown */}
        <div className="mt-14 rounded-2xl bg-surface-container-lowest p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary-container font-semibold">
                Laboratory Tested
              </span>
              <h3 className="font-headline-sm text-3xl text-primary mt-1 mb-3">
                Botanical Purity &amp; Terroir Grade
              </h3>
              <p className="font-body-sm text-body-sm text-secondary">
                Every production lot undergoes rigorous pesticide residue
                testing, ISO 3720 compliance verification, and physical density
                analysis before release.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-surface-container-low rounded-xl p-4 text-center">
                <p className="font-headline-sm text-2xl text-primary">
                  0.0%
                </p>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                  Artificial Flavors
                </p>
              </div>
              <div className="bg-surface-container-low rounded-xl p-4 text-center">
                <p className="font-headline-sm text-2xl text-primary">
                  &lt; 3%
                </p>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                  Moisture Content
                </p>
              </div>
              <div className="bg-surface-container-low rounded-xl p-4 text-center">
                <p className="font-headline-sm text-2xl text-primary">
                  100%
                </p>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                  Single Origin
                </p>
              </div>
              <div className="bg-surface-container-low rounded-xl p-4 text-center">
                <p className="font-headline-sm text-2xl text-primary">
                  OP / BOP
                </p>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                  Leaf Grading
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
