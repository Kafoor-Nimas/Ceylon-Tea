export default function WelcomeSection() {
  return (
    <section className="relative w-full py-space-xl lg:py-28 bg-surface-container-lowest">
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
          <div className="flex items-center gap-3 mb-space-md">
            <span className="h-[1px] w-12 bg-tertiary-fixed-dim"></span>
            <span
              className="material-symbols-outlined text-tertiary-container text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              spa
            </span>
            <span className="h-[1px] w-12 bg-tertiary-fixed-dim"></span>
          </div>
          <span className="font-label-md text-label-md text-tertiary uppercase tracking-widest mb-space-xs font-semibold">
            Welcome to Ceylon Tea
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mb-space-md">
            A Tradition Brewed in Every Leaf
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Born in the lush highlands of Sri Lanka, Ceylon Tea represents
            generations of craftsmanship, passion, and dedication. We carefully
            select and prepare premium tea leaves to bring the authentic taste
            of Sri Lanka to tea lovers around the world.
          </p>
          <a
            className="mt-space-lg inline-flex items-center gap-space-xs px-8 py-3.5 rounded-xl bg-surface-container text-primary font-label-md text-label-md uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-sm"
            data-path="about"
            href="#"
          >
            <span>Discover Our Story</span>
            <span className="material-symbols-outlined text-[18px]">
              menu_book
            </span>
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop items-stretch">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-lg bg-surface-container p-2">
            <img
              alt="Handcrafted loose leaf tea preparation and traditional Ceylon tea bowl with fresh green shoots"
              className="w-full h-full min-h-[380px] object-cover rounded-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuxmzZXhZIF6kuzo7yXau5tVtiDcUMABN-VOc9jtysuZEF3rJQAorY6z4bBcISsCRDcVyH8jrcACMpnamSS7J-lOqrKLZuz-DMhi0oMPqgLECyBMimDswY_Hd0-29d9nrq05HtcXo6xrh5Met9dxyKZdp76mkcNrg4nMelWcx-_hHL3au8sNiS9El22HUqS7sPY8VqFhGdLRjks46Z8yd5WwZsqJImtBFh2bYE9hpS2pDb1K8GpLYjiQ"
            />
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between p-space-lg lg:p-space-xl bg-surface-container-low rounded-2xl shadow-sm">
            <div>
              <div className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary font-bold mb-space-xs">
                The Sensory Ritual
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-md">
                The Art of High Elevation Infusion
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                Each estate produces an unmistakable profile influenced by
                ambient microclimates, equatorial sunshine, and mineral-rich
                mountain soil. Take time to witness the slow unfurling of
                orthodox whole leaves.
              </p>
            </div>
            <div className="space-y-space-md pt-space-md">
              <div className="flex items-start gap-space-md p-space-sm rounded-lg bg-surface-container-lowest shadow-sm">
                <span className="font-headline-sm text-tertiary font-bold italic w-8">
                  01
                </span>
                <div>
                  <div className="font-title-lg text-body-md text-on-surface font-semibold">
                    Fresh Spring Water &amp; 95°C
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Soft, aerated water preserves delicate polyphenols.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-space-md p-space-sm rounded-lg bg-surface-container-lowest shadow-sm">
                <span className="font-headline-sm text-tertiary font-bold italic w-8">
                  02
                </span>
                <div>
                  <div className="font-title-lg text-body-md text-on-surface font-semibold">
                    Orthodox Two Leaves &amp; a Bud
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Gentle hand plucking maintains unbroken leaf structural
                    purity.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-space-md p-space-sm rounded-lg bg-surface-container-lowest shadow-sm">
                <span className="font-headline-sm text-tertiary font-bold italic w-8">
                  03
                </span>
                <div>
                  <div className="font-title-lg text-body-md text-on-surface font-semibold">
                    3 to 5 Minutes Infusion
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Releases radiant golden liquor with nuanced floral
                    overtones.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
