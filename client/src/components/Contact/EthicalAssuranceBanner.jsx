export default function EthicalAssuranceBanner() {
  return (
    <section className="w-full py-12 bg-surface-container-highest/50">
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">
              verified
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-title-lg text-3xl text-primary">
              Pure Ceylon Lion Logo Certified
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Packed directly at the source of harvest for peak aromatic
              preservation.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">
            Estate Inquiries:
          </span>
          <span className="font-body-md text-body-md font-semibold text-primary">
            +94 11 234 5678
          </span>
        </div>
      </div>
    </section>
  );
}
