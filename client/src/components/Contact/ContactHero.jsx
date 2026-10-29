export default function ContactHero() {
  return (
    <section className="relative w-full -mt-[76px] pt-[140px] pb-24 overflow-hidden bg-primary text-on-primary">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
        id="hero-bg"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSeCf8THtTMYcHEDoTn7daHEq3Sy5M34x0AF5uKqWZrRmv0-ERae9N96uwBQ4nYdVqvB2QYfzpvxB03fn-1BUDQuBKzE4Lrb2chMGshHKr6y0Pf2cosPt6rW_Vi2DTI-3_1geJQd-Ri4p4tlCc-TS_bDL4r3t-gbxf-GSHJ6Dg4AUtMdP_ePTO_6vrZHRDgRLoK5UgUcQ6f4hEWRrlebYLjcaeKFdlIF6vrC6Mrqp8P70wR0AaAyUL8Q')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/75 to-background"></div>

      <div className="relative max-w-[1600px] mx-auto px-margin lg:px-margin-desktop">
        <div className="max-w-3xl flex flex-col items-start gap-space-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-tertiary-fixed font-label-sm text-label-sm uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
            Direct Terroir Inquiries
          </div>

          <h1 className="font-display-lg text-display-lg-mobile md:text-5xl text-surface-container-lowest tracking-tight leading-tight">
            Get in Touch
          </h1>

          <p className="font-body-lg text-body-lg text-surface-variant max-w-xl leading-relaxed">
            Have a question about our single-origin harvests, sommelier
            tastings, or bespoke private reserves? We would love to hear from
            you.
          </p>

          {/* Micro stats counter strip */}
          <div className="grid grid-cols-3 gap-6 pt-4 mt-2">
            <div className="flex flex-col">
              <span className="font-headline-sm text-2xl text-tertiary-fixed-dim italic">
                24h
              </span>
              <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider">
                Response Window
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-2xl text-tertiary-fixed-dim italic">
                100%
              </span>
              <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider">
                Single Origin
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-2xl text-tertiary-fixed-dim italic">
                07
              </span>
              <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider">
                Agro-Climates
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
