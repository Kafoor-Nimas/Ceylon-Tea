export default function Footer() {
  return (
    <footer className="w-full bg-primary text-on-primary border-t border-outline-variant/20">
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-[28px]">
                eco
              </span>
              <span className="font-headline-sm text-headline-sm text-surface-container-lowest font-medium tracking-tight">
                Ceylon Tea
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-outline-variant leading-relaxed max-w-sm">
              Sharing the authentic taste and tradition of Sri Lankan
              single-origin terroir with connoisseurs worldwide.
            </p>
            <div className="flex items-center gap-space-md mt-space-xs">
              <a
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-primary-container/60 hover:bg-primary-container text-surface-container-lowest flex items-center justify-center transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">
                  public
                </span>
              </a>
              <a
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-primary-container/60 hover:bg-primary-container text-surface-container-lowest flex items-center justify-center transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">
                  photo_camera
                </span>
              </a>
              <a
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-primary-container/60 hover:bg-primary-container text-surface-container-lowest flex items-center justify-center transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">
                  work
                </span>
              </a>
              <a
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-primary-container/60 hover:bg-primary-container text-surface-container-lowest flex items-center justify-center transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">
                  tag
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-lg text-title-lg text-tertiary-fixed-dim">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-outline-variant">
              <li>
                <a
                  className="hover:text-surface-container-lowest transition-colors"
                  data-path="home"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-surface-container-lowest transition-colors"
                  data-path="about"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-surface-container-lowest transition-colors"
                  data-path="services"
                  href="#"
                >
                  Tasting &amp; Services
                </a>
              </li>
              <li>
                <a
                  className="hover:text-surface-container-lowest transition-colors"
                  data-path="products"
                  href="#"
                >
                  Tea Estates &amp; Products
                </a>
              </li>
              <li>
                <a
                  className="hover:text-surface-container-lowest transition-colors"
                  data-path="contact"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-lg text-title-lg text-tertiary-fixed-dim">
              Tea Collection
            </h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-outline-variant">
              <li>
                <a
                  className="hover:text-surface-container-lowest transition-colors"
                  data-path="products"
                  href="#"
                >
                  Pure Ceylon Black Tea
                </a>
              </li>
              <li>
                <a
                  className="hover:text-surface-container-lowest transition-colors"
                  data-path="products"
                  href="#"
                >
                  Highland Green Tea
                </a>
              </li>
              <li>
                <a
                  className="hover:text-surface-container-lowest transition-colors"
                  data-path="products"
                  href="#"
                >
                  Artisanal Herbal Infusions
                </a>
              </li>
              <li>
                <a
                  className="hover:text-surface-container-lowest transition-colors"
                  data-path="products"
                  href="#"
                >
                  Heritage Gift Sets &amp; Crates
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-lg text-title-lg text-tertiary-fixed-dim">
              Estate &amp; Contact
            </h4>
            <div className="flex flex-col  font-body-sm text-body-sm text-outline-variant gap-3">
              <div className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim mt-0.5">
                  location_on
                </span>
                <span>Galle Face, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">
                  call
                </span>
                <span>+94 11 234 5678</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">
                  mail
                </span>
                <span>hello@ceylontea.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-space-xl pt-space-md border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-outline-variant">
          <div>© 2026 Ceylon Tea Company Ltd. All rights reserved.</div>
          <div className="flex items-center gap-space-md">
            <a
              className="hover:text-surface-container-lowest transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="hover:text-surface-container-lowest transition-colors"
              href="#"
            >
              Terms &amp; Conditions
            </a>
            <a
              className="hover:text-surface-container-lowest transition-colors"
              href="#"
            >
              Ethical Sourcing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
