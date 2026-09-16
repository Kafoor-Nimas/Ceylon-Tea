export default function ConsultationCta({ onOpenModal }) {
  return (
    <section
      className="w-full py-space-xl lg:py-24 bg-surface"
      id="consultation-inquiry"
    >
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-on-primary p-8 sm:p-12 lg:p-16 shadow-xl">
          {/* Ambient Shapes */}
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-container/10 blur-2xl pointer-events-none"></div>
          <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-tertiary-fixed/10 blur-xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-tertiary-fixed-dim font-label-sm text-label-sm uppercase tracking-wider mb-4">
                <span className="material-symbols-outlined text-[16px]">
                  verified
                </span>
                B2B Partnerships &amp; Private Reserve
              </div>
              <h2 className="font-headline-lg text-3xl lg:text-5xl text-surface-container-lowest tracking-tight mb-4">
                Ready to Craft Your Signature Tea Experience?
              </h2>
              <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl leading-relaxed mb-6">
                Connect directly with our master tasters in Colombo. We offer
                complimentary sample flight kits, private label consultation,
                and volume pricing structures for international distributors and
                fine dining groups.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-md text-label-md uppercase tracking-wider font-semibold shadow-lg hover:bg-tertiary-fixed transition-all"
                  type="button"
                  onClick={onOpenModal}
                >
                  <span>Request Wholesale Catalog</span>
                  <span className="material-symbols-outlined text-[20px]">
                    menu_book
                  </span>
                </button>
                <a
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary-container/80 text-surface-container-lowest font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-colors"
                  data-path="contact"
                  href="#"
                >
                  <span>Book Tasting Session</span>
                  <span className="material-symbols-outlined text-[18px]">
                    calendar_today
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4 bg-primary-container/40 p-6 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center text-tertiary-fixed-dim">
                  <span className="material-symbols-outlined">
                    mark_email_read
                  </span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant">
                    Response Window
                  </p>
                  <p className="font-title-lg text-title-lg text-surface-container-lowest">
                    Within 24 Hours
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center text-tertiary-fixed-dim">
                  <span className="material-symbols-outlined">inventory</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant">
                    Sample Tins Dispatch
                  </p>
                  <p className="font-title-lg text-title-lg text-surface-container-lowest">
                    Worldwide DHL Express
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center text-tertiary-fixed-dim">
                  <span className="material-symbols-outlined">contract</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-surface-variant">
                    Flexible Minimums
                  </p>
                  <p className="font-title-lg text-title-lg text-surface-container-lowest">
                    From 25kg to Full Container
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
