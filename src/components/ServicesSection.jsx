export default function ServicesSection() {
  return (
    <section className="w-full py-space-xl lg:py-28 bg-surface">
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-xl">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold block mb-space-xs">
              Our Expertise &amp; Offerings
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
              What We Offer
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              From carefully selected tea leaves to global delivery, we bring
              the complete Ceylon tea experience to you.
            </p>
          </div>
          <div>
            <a
              className="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-wider text-primary hover:text-primary-container transition-colors group"
              data-path="services"
              href="#"
            >
              <span>Explore All Services</span>
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter lg:gap-gutter-desktop">
          {/* Service 1 */}
          <div className="bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center mb-space-lg text-tertiary-container group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span
                  className="material-symbols-outlined text-[32px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  eco
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">
                Premium Tea Selection
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                Carefully selected premium Ceylon tea harvested strictly from
                renowned historical tea-growing regions across the central
                highlands.
              </p>
            </div>
            <ul className="space-y-space-xs pt-space-md font-body-sm text-body-sm text-secondary">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  check_circle
                </span>
                <span>Single estate unbroken grades</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  check_circle
                </span>
                <span>100% Lion Certified quality control</span>
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center mb-space-lg text-tertiary-container group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span
                  className="material-symbols-outlined text-[32px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  inventory_2
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">
                Custom Tea Blending
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                Unique tea blends crafted to match your preferred taste,
                seasonal body, and delicate floral aroma by our certified master
                tea sommeliers.
              </p>
            </div>
            <ul className="space-y-space-xs pt-space-md font-body-sm text-body-sm text-secondary">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  check_circle
                </span>
                <span>Botanical, spice &amp; citrus harmonizing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  check_circle
                </span>
                <span>Bespoke hospitality and corporate profiles</span>
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center mb-space-lg text-tertiary-container group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span
                  className="material-symbols-outlined text-[32px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  public
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">
                Global Export
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                Authentic Sri Lankan tea delivered in vacuum-sealed freshness
                containers to connoisseurs, boutiques, and private cellars
                worldwide.
              </p>
            </div>
            <ul className="space-y-space-xs pt-space-md font-body-sm text-body-sm text-secondary">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  check_circle
                </span>
                <span>Express climate-stable freight</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                  check_circle
                </span>
                <span>Direct estate-to-cup origin tracking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
