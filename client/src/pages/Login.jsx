import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/login.jfif";

export default function Login() {
  const navigate = useNavigate();

  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // UI Interactive States
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsSubmitting(true);

    // Simulate Auth API Request
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/admin"); // Redirect to Admin Dashboard upon login
    }, 900);
  };

  const handleGoogleSignIn = () => {
    console.info(
      "Initiating secure OAuth2 handshake with Google Identity Service...",
    );
  };

  return (
    <div className="bg-background font-body-md text-body-md text-on-surface min-h-screen flex flex-col justify-between selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Brand Header */}
      <header className="w-full pt-8 pb-4 flex justify-center items-center">
        <Link
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
          to="/"
        >
          <span className="font-headline-sm text-4xl text-primary tracking-tight">
            Login
          </span>
        </Link>
      </header>

      {/* Main Login Card */}
      <main className="flex-1 flex flex-col items-center justify-center px-margin md:px-margin-desktop py-space-md w-full">
        <div className="flex flex-col w-full items-center justify-center py-4 md:py-10">
          <div className="w-full max-w-[1200px] bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative">
            {/* Left Column: Terroir Storytelling */}
            <div className="lg:col-span-6 xl:col-span-5 bg-primary text-on-primary p-8 md:p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden">
              {/* Ambient Decorative Backdrop Rings */}
              <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
              <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-tertiary-fixed-dim/10 blur-2xl pointer-events-none"></div>

              {/* Top Emblem & Prestige Badge */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-headline-sm text-2xl text-white tracking-tight ">
                    Ceylon Tea
                  </span>
                  <span className="inline-block h-6 w-[1px] bg-secondary-fixed-dim/30"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed-dim">
                    Estate Cellar Portal
                  </span>
                </div>

                {/* Terroir Imagery Showcase */}
                <div className="relative mt-6 overflow-hidden rounded-xl shadow-lg group">
                  <img
                    alt="Hand-plucked high-grown Ceylon tea leaves"
                    className="w-full h-56 md:h-64 object-cover transform duration-700 group-hover:scale-105"
                    src={loginImg}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-4 font-label-sm text-label-sm text-secondary-fixed-dim tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>{" "}
                    Nuwara Eliya • 6,200 FT
                  </span>
                </div>

                {/* Narrative Section */}
                <div className="space-y-3 pt-2">
                  <h1 className="font-headline-md text-4xl text-surface-container-lowest font-medium tracking-tight leading-tight">
                    A Tradition Brewed in Every Leaf
                  </h1>
                  <p className="font-body-sm text-body-sm text-surface-container-high/90 leading-relaxed">
                    Sign in to access your private tea cellar reserve, schedule
                    rare single-estate flushes, oversee refrigerated air express
                    consignments, and consult with our resident tea sommelier.
                  </p>
                </div>
              </div>

              {/* Cellar Privileges */}
              <div className="relative z-10 pt-8 mt-6 space-y-4">
                <div className="h-[1px] w-full bg-secondary-container/15 mb-4"></div>
                <div className="flex items-start gap-3.5">
                  <div className="p-1.5 rounded-lg bg-surface-container-lowest/10 text-tertiary-fixed-dim flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">
                      spa
                    </span>
                  </div>
                  <div>
                    <h2 className="font-label-md text-label-md text-surface-container-lowest tracking-wide">
                      Exclusive Single-Estate Reserves
                    </h2>
                    <p className="font-label-sm text-label-sm text-surface-container-high/70">
                      Unblended micro-lot harvests bottled at source.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-1.5 rounded-lg bg-surface-container-lowest/10 text-tertiary-fixed-dim flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">
                      flight_takeoff
                    </span>
                  </div>
                  <div>
                    <h2 className="font-label-md text-label-md text-surface-container-lowest tracking-wide">
                      Complimentary Air Freight
                    </h2>
                    <p className="font-label-sm text-label-sm text-surface-container-high/70">
                      Climate-sealed express delivery within 96 hours of
                      batching.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-1.5 rounded-lg bg-surface-container-lowest/10 text-tertiary-fixed-dim flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">
                      local_cafe
                    </span>
                  </div>
                  <div>
                    <h2 className="font-label-md text-label-md text-surface-container-lowest tracking-wide">
                      Bespoke Sommelier Concierge
                    </h2>
                    <p className="font-label-sm text-label-sm text-surface-container-high/70">
                      Water profile consultation &amp; tailored infusion notes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Sign-in Form */}
            <div className="lg:col-span-6 xl:col-span-7 bg-surface-container-lowest p-8 md:p-12 lg:p-16 flex flex-col justify-between">
              <div className="w-full max-w-lg mx-auto my-auto space-y-8">
                {/* Heading Block */}
                <div className="space-y-2">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                    Terroir Account
                  </span>
                  <h2 className="font-headline-sm text-4xl md:font-headline-md md:text-headline-md text-on-surface">
                    Welcome Back
                  </h2>
                  <p className="font-body-md text-md text-on-surface-variant">
                    Sign in to your Ceylon Tea account to continue your journey.
                  </p>
                </div>

                {/* Login Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label
                      className="block font-label-md text-label-md text-on-surface"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-outline text-[20px] pointer-events-none">
                        mail
                      </span>
                      <input
                        autoComplete="email"
                        className="w-full pl-11 pr-4 py-3 bg-surface-container-low rounded-xl text-on-surface font-body-md text-body-md placeholder:text-outline/70 focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all"
                        id="email"
                        name="email"
                        placeholder="connoisseur@estate.com"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        className="block font-label-md text-label-md text-on-surface"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <Link
                        className="font-label-sm text-label-sm text-primary hover:text-primary-container font-medium transition-colors"
                        to="/forgot-password"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-outline text-[20px] pointer-events-none">
                        lock
                      </span>
                      <input
                        autoComplete="current-password"
                        className="w-full pl-11 pr-12 py-3 bg-surface-container-low rounded-xl text-on-surface font-body-md text-body-md placeholder:text-outline/70 focus:outline-none focus:bg-surface-container-lowest shadow-sm transition-all"
                        id="password"
                        name="password"
                        placeholder="Enter your estate password"
                        required
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        aria-label="Toggle password view"
                        className="absolute right-3.5 text-outline hover:text-on-surface transition-colors p-1 flex items-center justify-center focus:outline-none"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {showPassword ? "visibility_off" : "visibility"}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Options Row */}
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        checked={rememberMe}
                        className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer"
                        id="rememberMe"
                        name="rememberMe"
                        type="checkbox"
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Remember me for 30 days
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 space-y-3">
                    <button
                      className="w-full py-3.5 px-6 rounded-xl bg-primary-container text-on-primary font-body-md text-body-md font-medium flex items-center justify-center gap-2 hover:bg-primary transition-all duration-300 shadow-md group disabled:opacity-70"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Authenticating...</span>
                        </>
                      ) : (
                        <>
                          <span>Sign In to Cellar</span>
                          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Divider */}
                <div className="relative flex items-center justify-center">
                  <div className="w-full h-[1px] bg-surface-container-highest"></div>
                  <span className="absolute px-3 bg-surface-container-lowest font-label-sm text-label-sm uppercase tracking-widest text-outline">
                    OR
                  </span>
                </div>

                {/* Google SSO */}
                <div>
                  <button
                    className="w-full py-3 px-5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-body-md text-body-md flex items-center justify-center gap-3 transition-colors shadow-sm"
                    type="button"
                    onClick={handleGoogleSignIn}
                  >
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                      <path
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        fill="#EA4335"
                      ></path>
                    </svg>
                    <span className="font-medium text-body-sm">
                      Continue with Google
                    </span>
                  </button>
                </div>

                {/* Footer Switch Links */}
                <div className="pt-2 text-center space-y-4">
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Don't have an estate account?
                    <Link
                      className="font-medium text-primary hover:text-primary-container transition-colors ml-1 underline decoration-secondary-container underline-offset-4"
                      to="/register"
                    >
                      Create an account
                    </Link>
                  </p>
                  <Link
                    className="inline-flex items-center gap-1.5 font-label-md text-label-md text-outline hover:text-primary transition-colors"
                    to="/"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      west
                    </span>
                    <span>Return to Storefront</span>
                  </Link>
                </div>
              </div>

              {/* Trust Badge Footer */}
              <div className="w-full pt-8 mt-6 border-t border-transparent text-center lg:text-left flex flex-col sm:flex-row items-center justify-between text-outline text-label-sm font-label-sm gap-2">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    verified_user
                  </span>
                  Ceylon Tea Board Guaranteed Origin
                </span>
                <span className="text-outline/60">
                  256-Bit SSL Encrypted Ritual
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Links */}
      <footer className="w-full py-6 text-center">
        <div className="flex items-center justify-center gap-6 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
          <Link className="hover:text-primary transition-colors" to="/privacy">
            Privacy
          </Link>
          <span>•</span>
          <Link className="hover:text-primary transition-colors" to="/terms">
            Terms
          </Link>
          <span>•</span>
          <Link className="hover:text-primary transition-colors" to="/heritage">
            Terroir &amp; Heritage
          </Link>
        </div>
      </footer>
    </div>
  );
}
