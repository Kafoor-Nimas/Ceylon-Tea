import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="w-full min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col w-full items-center justify-center py-16 px-4 md:px-8 relative overflow-hidden select-none">
        {/* Subtle Botanical Ambient Background Shapes */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40">
          <svg
            className="w-[820px] h-[820px] text-surface-container-high transition-transform duration-1000 ease-out transform scale-105"
            fill="none"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M300 60C320 180 430 220 520 250C430 310 370 410 340 540C310 420 220 340 80 300C200 270 270 190 300 60Z"
              fill="currentColor"
              fillOpacity="0.35"
            ></path>
            <path
              d="M300 120C305 240 370 320 480 350C390 375 325 435 310 510C290 420 230 360 120 320C210 300 280 230 300 120Z"
              stroke="currentColor"
              strokeDasharray="6 6"
              strokeWidth="1.5"
            ></path>
            <path
              d="M180 180C260 220 290 280 300 360M420 180C340 220 310 280 300 360"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.2"
            ></path>
            <circle
              cx="300"
              cy="300"
              r="160"
              stroke="currentColor"
              strokeOpacity="0.6"
              strokeWidth="0.75"
            ></circle>
            <circle
              cx="300"
              cy="300"
              r="230"
              stroke="currentColor"
              strokeDasharray="4 8"
              strokeOpacity="0.4"
              strokeWidth="0.5"
            ></circle>
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl w-full flex flex-col items-center text-center">
          {/* Origin Terroir Watermark Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest shadow-sm mb-8 mt-20 transition-transform hover:-translate-y-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
            <span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary">
              Elevation 6,200 FT • Single Origin
            </span>
          </div>

          {/* 404 Display Treatment */}
          <div className="relative my-2">
            <span className="font-display-lg text-[110px] md:text-[148px] leading-none font-semibold text-tertiary tracking-tight select-none drop-shadow-sm">
              404
            </span>
            <div className="absolute -top-3 -right-4 md:-right-8 text-tertiary-container animate-pulse">
              <span
                className="material-symbols-outlined text-3xl md:text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                spa
              </span>
            </div>
          </div>

          {/* Headings */}
          <h1 className="font-headline-lg text-3xl text-primary tracking-tight mt-2 mb-4">
            Page Not Found
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed font-light">
            The page you are looking for may have been moved, steeped too long,
            or quietly dispersed like highland mist over the valley.
          </p>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
            <Link
              className="group flex items-center justify-center gap-3 bg-primary-container hover:bg-primary text-on-primary px-8 py-3.5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-center font-label-md"
              to="/"
            >
              <span
                className="material-symbols-outlined text-tertiary-fixed text-xl transition-transform group-hover:rotate-12"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                eco
              </span>
              <span className="tracking-wide">Return to Estate</span>
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>

            <button
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md transition-all duration-200"
              type="button"
              onClick={() => navigate(-1)}
            >
              <span className="material-symbols-outlined text-base">
                arrow_back
              </span>
              <span>Previous Step</span>
            </button>
          </div>

          {/* Steeping Divider */}
          <div className="w-full flex items-center justify-center gap-4 max-w-xs mb-8">
            <span className="h-[1px] flex-1 bg-outline-variant opacity-50"></span>
            <span className="font-headline-sm italic text-tertiary-container text-lg tracking-wider">
              infusions &amp; guidance
            </span>
            <span className="h-[1px] flex-1 bg-outline-variant opacity-50"></span>
          </div>

          {/* Concierge Directory Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl">
            <Link
              className="group flex flex-col items-center p-4 rounded-xl bg-surface-container-lowest/80 hover:bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              to="/products"
            >
              <span className="material-symbols-outlined text-secondary mb-1 text-2xl group-hover:text-primary transition-colors">
                local_cafe
              </span>
              <span className="font-title-lg text-[15px] leading-5 text-on-surface group-hover:text-primary mb-1">
                Tea Collection
              </span>
              <span className="font-body-sm text-[12px] text-outline">
                Browse rare reserves
              </span>
            </Link>

            <Link
              className="group flex flex-col items-center p-4 rounded-xl bg-surface-container-lowest/80 hover:bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              to="/about"
            >
              <span className="material-symbols-outlined text-secondary mb-1 text-2xl group-hover:text-primary transition-colors">
                menu_book
              </span>
              <span className="font-title-lg text-[15px] leading-5 text-on-surface group-hover:text-primary mb-1">
                Our Heritage
              </span>
              <span className="font-body-sm text-[12px] text-outline">
                Ceylon highland crafts
              </span>
            </Link>

            <Link
              className="group flex flex-col items-center p-4 rounded-xl bg-surface-container-lowest/80 hover:bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              to="/contact"
            >
              <span className="material-symbols-outlined text-secondary mb-1 text-2xl group-hover:text-primary transition-colors">
                support_agent
              </span>
              <span className="font-title-lg text-[15px] leading-5 text-on-surface group-hover:text-primary mb-1">
                Tea Concierge
              </span>
              <span className="font-body-sm text-[12px] text-outline">
                Curated sommelier aid
              </span>
            </Link>
          </div>

          {/* Coordinates Tagline */}
          <div className="mt-16 flex items-center gap-3 text-outline text-label-sm font-label-sm tracking-wider uppercase opacity-75">
            <span>7°17′28″ N</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span>80°46′24″ E</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span>Nuwara Eliya</span>
          </div>
        </div>
      </div>
    </main>
  );
}
