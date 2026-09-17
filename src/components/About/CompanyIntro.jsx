import img from "../../assets/company.jfif";

export default function CompanyIntro() {
  return (
    <section className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop py-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
        {/* Left Column: Editorial Framed Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative bg-surface-container-lowest p-space-sm rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-1">
            <div className="overflow-hidden rounded-lg aspect-[4/3] bg-surface-container">
              <img
                alt="Misty tea gardens of Nuwara Eliya Sri Lanka at sunrise"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                src={img}
              />
            </div>
            <div className="pt-space-sm px-space-xs flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-tertiary text-[18px]">
                  location_on
                </span>
                <span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-semibold">
                  Central Highlands, Sri Lanka
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-outline">
                LAT 6.9708° N
              </span>
            </div>
          </div>

          {/* Archival Floating Pill */}
          <div className="absolute -bottom-6 -right-3 hidden sm:flex items-center gap-space-sm bg-primary text-on-primary py-space-sm px-space-md rounded-xl shadow-xl">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-[22px]">
              verified
            </span>
            <div>
              <p className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary-fixed-dim">
                Terroir Certified
              </p>
              <p className="font-body-sm text-body-sm font-semibold">
                Nuwara Eliya &amp; Dimbula
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Story Copy & Master Quote */}
        <div className="lg:col-span-6 flex flex-col gap-space-md lg:pl-space-md">
          <div className="inline-flex items-center gap-space-xs">
            <span className="w-8 h-[1.5px] bg-tertiary-fixed-dim"></span>
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
              Our Heritage
            </span>
          </div>

          <h2 className="font-headline-lg text-5xl text-primary leading-tight tracking-tight">
            Rooted in the Heart of Sri Lanka
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Our journey began with a simple passion: sharing the authentic taste
            of Sri Lankan tea with the world. Inspired by the island’s fertile
            mountains and generations of tea-making traditions, we work with
            carefully selected tea growers to preserve the character of Ceylon
            Tea.
          </p>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Each morning, as cool mist sweeps over emerald mountain crests,
            master pluckers select only the tenderest two leaves and a bud. It
            is an unhurried, delicate discipline handed down through families,
            honoring the rhythm of the monsoons and mineral-rich highland soil.
          </p>

          {/* Quote Block */}
          <div className="relative mt-space-xs p-space-md rounded-xl bg-surface-container-low shadow-sm">
            <span className="material-symbols-outlined text-tertiary text-[36px] opacity-70 mb-1">
              format_quote
            </span>
            <blockquote className="font-headline-sm text-2xl italic text-primary leading-snug">
              “True Ceylon tea is not merely cultivated; it is listened to. The
              wind, the rain, and the morning sun compose a flavor that cannot
              be rushed.”
            </blockquote>
            <div className="mt-space-sm flex items-center justify-between">
              <div>
                <p className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
                  K. Senanayake
                </p>
                <p className="font-body-sm text-body-sm text-outline">
                  Master Tea Taster &amp; Blender
                </p>
              </div>
              <span className="material-symbols-outlined text-secondary text-[24px]">
                local_florist
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
