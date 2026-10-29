import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  // Form Fields State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  // UI Interactive States
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Evaluate Password Strength Score (0 to 4)
  const evaluatePasswordStrength = (val) => {
    if (!val) return 0;
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    return score;
  };

  const strengthScore = evaluatePasswordStrength(formData.password);
  const strengthLabels = ["Weak", "Moderate", "Strong", "Exquisite"];
  const strengthColors = [
    "bg-error",
    "bg-tertiary-container",
    "bg-secondary-container",
    "bg-primary",
  ];

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords do not match. Please ensure both fields match.");
      return;
    }

    if (!formData.agreeToTerms) {
      setErrorMsg("You must agree to the Terms of Service & Privacy Policy.");
      return;
    }

    setIsSubmitting(true);

    // Simulate Registration API Request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/login"); // Redirect to Login page upon successful registration
      }, 1000);
    }, 1200);
  };

  const handleGoogleAuth = () => {
    console.info("Connecting securely to Google Single Sign-On...");
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
            Register
          </span>
        </Link>
      </header>

      {/* Main Registration Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-margin md:px-margin-desktop py-space-md w-full">
        <div className="flex flex-col w-full">
          <section className="w-full max-w-[1100px] mx-auto my-space-md md:my-space-xl">
            <div className="bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Terroir Atmosphere & Connoisseur Benefits */}
              <div className="lg:col-span-5 bg-primary text-on-primary p-space-lg md:p-space-xl flex flex-col justify-between relative overflow-hidden">
                {/* Ambient Highland Glow */}
                <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary-container opacity-40 blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-tertiary opacity-20 blur-2xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col gap-space-lg">
                  {/* Emblem / Heritage Tag */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-tertiary-fixed">
                      <span
                        className="material-symbols-outlined text-title-lg"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        eco
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md tracking-wider uppercase text-tertiary-fixed">
                        Ceylon Tea Estate
                      </span>
                      <span className="font-label-sm text-label-sm text-on-primary-container tracking-widest uppercase">
                        Est. Sri Lanka 1985
                      </span>
                    </div>
                  </div>

                  {/* Featured Scenic Vista */}
                  <div className="relative rounded-lg overflow-hidden group shadow-md mt-2">
                    <div
                      className="w-full h-48 md:h-56 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCz7t_5UjqhLzzkrZoUX_MKVie5XFkjGDb21la_5HOxiBBTE80OeJzFUbaetXejXKCSImSKHFfpxnJr0c8F8_4p_US5W-2yNVE--RmYhbSOQcMD5D3VeOee2nsBQmdr9pJpzhFRQBHC0JH0NqGm73LVz83-VUupBQov0upm5nA9EMBH1PRC7JmVwPSU-r8N5UoB7mjIw0NFMzv1WGB8Pa0RDVuuf9a65iBWuhk82Ssf5cG7RHkxOUphag')",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-on-primary font-label-sm text-label-sm">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>
                        Pedro Estate • 6,200 ft
                      </span>
                      <span className="text-tertiary-fixed tracking-wider">
                        Single Origin
                      </span>
                    </div>
                  </div>

                  {/* Editorial Narrative */}
                  <div>
                    <h2 className="font-headline-md text-3xl text-surface-bright leading-tight">
                      Join the Connoisseur Circle
                    </h2>
                    <p className="font-body-sm text-body-sm text-surface-container-high mt-space-xs leading-relaxed">
                      Create your sanctuary account to unlock rare cold-harvest
                      flushes, private cellar selections, and direct courier
                      dispatch straight from the misty highlands of Sri Lanka.
                    </p>
                  </div>

                  {/* Member Privileges Mosaic */}
                  <div className="flex flex-col gap-space-sm pt-2">
                    {/* Benefit 1 */}
                    <div className="p-space-sm rounded-lg bg-primary-container/40 flex items-start gap-space-sm">
                      <div className="p-2 rounded-full bg-primary-container text-tertiary-fixed flex-shrink-0 mt-0.5">
                        <span
                          className="material-symbols-outlined text-body-md"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          workspace_premium
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-title-lg text-body-md text-surface-bright font-semibold">
                          First Harvest Allocations
                        </span>
                        <span className="font-body-sm text-label-sm text-surface-container-high">
                          Priority access to strictly limited Nuwara Eliya &amp;
                          Dimbula seasonal flushes.
                        </span>
                      </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="p-space-sm rounded-lg bg-primary-container/40 flex items-start gap-space-sm">
                      <div className="p-2 rounded-full bg-primary-container text-tertiary-fixed flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-body-md">
                          local_shipping
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-title-lg text-body-md text-surface-bright font-semibold">
                          Connoisseur Dispatch
                        </span>
                        <span className="font-body-sm text-label-sm text-surface-container-high">
                          Climate-controlled tracking directly from Colombo
                          estates to your teaware.
                        </span>
                      </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="p-space-sm rounded-lg bg-primary-container/40 flex items-start gap-space-sm">
                      <div className="p-2 rounded-full bg-primary-container text-tertiary-fixed flex-shrink-0 mt-0.5">
                        <span
                          className="material-symbols-outlined text-body-md"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          verified
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-title-lg text-body-md text-surface-bright font-semibold">
                          Ethical &amp; Single-Origin
                        </span>
                        <span className="font-body-sm text-label-sm text-surface-container-high">
                          100% Sri Lanka Tea Board Lion logo certified authentic
                          provenance.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terroir Metadata Stamp */}
                <div className="relative z-10 pt-6 mt-6 flex items-center justify-between text-surface-container font-label-sm text-label-sm">
                  <span>HIGH ELEVATION HARVESTS</span>
                  <span className="flex items-center gap-1.5 text-tertiary-fixed">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-pulse"></span>
                    AUTUMN RESERVE READY
                  </span>
                </div>
              </div>

              {/* Right Column: Registration Form */}
              <div className="lg:col-span-7 p-space-lg md:p-space-xl flex flex-col justify-center bg-surface-container-lowest">
                <div className="max-w-xl mx-auto w-full">
                  {/* Header Area */}
                  <div className="flex flex-col mb-space-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="h-px w-6 bg-secondary"></span>
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                        Membership Enrollment
                      </span>
                    </div>
                    <h1 className="font-headline-md text-4xl text-primary font-bold">
                      Create Your Account
                    </h1>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Join Ceylon Tea and begin your journey into the world of
                      artisanal single-origin teas.
                    </p>
                  </div>

                  {/* Error Notification Banner */}
                  {errorMsg && (
                    <div className="mb-space-md p-space-sm bg-error-container/60 text-on-error-container rounded-lg font-body-sm text-body-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-error">
                        error
                      </span>
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Registration Form Element */}
                  <form
                    className="flex flex-col gap-space-sm"
                    onSubmit={handleSubmit}
                  >
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                        htmlFor="fullName"
                      >
                        <span>
                          Full Name <span className="text-error">*</span>
                        </span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3.5 text-outline text-body-lg pointer-events-none">
                          person
                        </span>
                        <input
                          className="w-full bg-surface-container-low text-on-surface pl-10 pr-4 py-3 rounded-lg font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                          id="fullName"
                          name="fullName"
                          placeholder="e.g. Kafoor Nimas"
                          required
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                          htmlFor="email"
                        >
                          <span>
                            Email Address <span className="text-error">*</span>
                          </span>
                        </label>
                        <div className="relative flex items-center">
                          <span className="material-symbols-outlined absolute left-3.5 text-outline text-body-lg pointer-events-none">
                            mail
                          </span>
                          <input
                            className="w-full bg-surface-container-low text-on-surface pl-10 pr-4 py-3 rounded-lg font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                            id="email"
                            name="email"
                            placeholder="e.g. nimaskafoor@gmail.com"
                            required
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                          htmlFor="phone"
                        >
                          <span>
                            Phone{" "}
                            <span className="font-normal text-on-surface-variant">
                              (Optional)
                            </span>
                          </span>
                        </label>
                        <div className="relative flex items-center">
                          <span className="material-symbols-outlined absolute left-3.5 text-outline text-body-lg pointer-events-none">
                            call
                          </span>
                          <input
                            className="w-full bg-surface-container-low text-on-surface pl-10 pr-4 py-3 rounded-lg font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                            id="phone"
                            name="phone"
                            placeholder="+94 778945679"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Passwords Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm mt-1">
                      {/* Password */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                          htmlFor="password"
                        >
                          <span>
                            Password <span className="text-error">*</span>
                          </span>
                        </label>
                        <div className="relative flex items-center">
                          <span className="material-symbols-outlined absolute left-3.5 text-outline text-body-lg pointer-events-none">
                            lock
                          </span>
                          <input
                            className="w-full bg-surface-container-low text-on-surface pl-10 pr-10 py-3 rounded-lg font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                            id="password"
                            minLength={8}
                            name="password"
                            placeholder="Min. 8 characters"
                            required
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
                          />
                          <button
                            aria-label="Toggle password view"
                            className="absolute right-3.5 text-outline hover:text-primary transition-colors focus:outline-none flex items-center"
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <span className="material-symbols-outlined text-body-md">
                              {showPassword ? "visibility_off" : "visibility"}
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Confirm Password */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-md text-label-md text-on-surface flex items-center justify-between"
                          htmlFor="confirmPassword"
                        >
                          <span>
                            Confirm Password{" "}
                            <span className="text-error">*</span>
                          </span>
                        </label>
                        <div className="relative flex items-center">
                          <span className="material-symbols-outlined absolute left-3.5 text-outline text-body-lg pointer-events-none">
                            lock_reset
                          </span>
                          <input
                            className="w-full bg-surface-container-low text-on-surface pl-10 pr-10 py-3 rounded-lg font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                            id="confirmPassword"
                            minLength={8}
                            name="confirmPassword"
                            placeholder="Re-enter password"
                            required
                            type={showConfirmPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />
                          <button
                            aria-label="Toggle confirm password view"
                            className="absolute right-3.5 text-outline hover:text-primary transition-colors focus:outline-none flex items-center"
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            <span className="material-symbols-outlined text-body-md">
                              {showConfirmPassword
                                ? "visibility_off"
                                : "visibility"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Password Strength Bar Micro-Indicator */}
                    <div className="flex flex-col gap-1.5 mt-0.5">
                      <div className="flex items-center gap-1.5 h-1.5 w-full">
                        {[0, 1, 2, 3].map((index) => {
                          const isActive = strengthScore > index;
                          const barColor = isActive
                            ? strengthColors[strengthScore - 1]
                            : "bg-surface-container-high";
                          return (
                            <div
                              key={index}
                              className={`h-full flex-1 rounded-full transition-colors duration-300 ${barColor}`}
                            ></div>
                          );
                        })}
                      </div>
                      <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                        <span>
                          Minimum 8 characters with letters &amp; numbers
                        </span>
                        <span className="font-semibold text-secondary">
                          {strengthScore > 0
                            ? strengthLabels[strengthScore - 1]
                            : ""}
                        </span>
                      </div>
                    </div>

                    {/* Terms & Conditions Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer group select-none">
                        <input
                          checked={formData.agreeToTerms}
                          className="mt-1 h-4 w-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer"
                          id="agreeToTerms"
                          name="agreeToTerms"
                          required
                          type="checkbox"
                          onChange={handleChange}
                        />
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          I agree to the{" "}
                          <Link
                            className="text-primary hover:text-secondary underline font-medium transition-colors"
                            to="/terms"
                          >
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link
                            className="text-primary hover:text-secondary underline font-medium transition-colors"
                            to="/privacy"
                          >
                            Privacy Policy
                          </Link>
                          . Receive seasonal cellar allocation alerts.
                        </span>
                      </label>
                    </div>

                    {/* Submit Registration Button */}
                    <button
                      className="w-full mt-3 py-3.5 px-6 rounded-xl bg-primary text-on-primary font-body-md text-body-md font-semibold hover:bg-primary-container shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-75"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="material-symbols-outlined animate-spin text-body-md">
                            progress_activity
                          </span>
                          <span>Preparing Your Reserve...</span>
                        </>
                      ) : isSuccess ? (
                        <>
                          <span className="material-symbols-outlined text-body-md">
                            check_circle
                          </span>
                          <span>Welcome to Ceylon Tea</span>
                        </>
                      ) : (
                        <>
                          <span>Create Account</span>
                          <span className="material-symbols-outlined text-body-md">
                            arrow_forward
                          </span>
                        </>
                      )}
                    </button>

                    {/* Divider */}
                    <div className="relative flex items-center justify-center my-3">
                      <div className="w-full h-px bg-surface-container-high"></div>
                      <span className="absolute bg-surface-container-lowest px-4 font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase">
                        OR
                      </span>
                    </div>

                    {/* Social Authentication (Google) */}
                    <button
                      className="w-full py-3 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-body-md text-body-md font-medium transition-colors flex items-center justify-center gap-3"
                      type="button"
                      onClick={handleGoogleAuth}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                          fill="#4285F4"
                        ></path>
                        <path
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                          fill="#EA4335"
                        ></path>
                      </svg>
                      <span>Continue with Google</span>
                    </button>

                    {/* Bottom Navigations & Links */}
                    <div className="mt-4 pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Already have an account?
                        <Link
                          className="text-primary hover:text-secondary font-semibold underline underline-offset-4 ml-1"
                          to="/login"
                        >
                          Sign in
                        </Link>
                      </span>
                      <Link
                        className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 group"
                        to="/"
                      >
                        <span className="material-symbols-outlined text-body-sm group-hover:-translate-x-1 transition-transform">
                          west
                        </span>
                        <span>Return to Storefront</span>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
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
