import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 900);
  };

  return (
    <section className="relative w-full py-16 -mt-8">
      <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 sm:p-12 shadow-[0_16px_40px_-12px_rgba(22,69,37,0.08)] relative">
            {/* Corner Marker */}
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-xl pointer-events-none opacity-40">
              <div className="w-32 h-32 bg-secondary-fixed rotate-45 transform translate-x-16 -translate-y-16"></div>
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                Inquiry Concierge
              </span>
              <h2 className="font-headline-md text-3xl text-primary tracking-tight">
                Send Us a Message
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Kindly share your requirements. For bespoke cellar allocations
                or high-altitude private lots, include your preferred terroir
                grade.
              </p>
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-md text-label-md text-on-surface uppercase tracking-wide flex items-center justify-between"
                    htmlFor="fullName"
                  >
                    <span>Full Name</span>
                    <span className="text-tertiary-fixed-variant text-[11px] lowercase italic font-normal">
                      *required
                    </span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-outline text-[18px]">
                      badge
                    </span>
                    <input
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all"
                      id="fullName"
                      placeholder="Enter your name"
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-md text-label-md text-on-surface uppercase tracking-wide flex items-center justify-between"
                    htmlFor="email"
                  >
                    <span>Email Address</span>
                    <span className="text-tertiary-fixed-variant text-[11px] lowercase italic font-normal">
                      *required
                    </span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-outline text-[18px]">
                      mail
                    </span>
                    <input
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all"
                      id="email"
                      placeholder="Enter your email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-md text-label-md text-on-surface uppercase tracking-wide"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-outline text-[18px]">
                      call
                    </span>
                    <input
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all"
                      id="phone"
                      placeholder="Enter your phone number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Subject Selection */}
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-md text-label-md text-on-surface uppercase tracking-wide"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-outline text-[18px]">
                      topic
                    </span>
                    <select
                      className="w-full pl-10 pr-8 py-3 rounded-lg bg-surface-container-low text-on-surface text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all appearance-none cursor-pointer"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    >
                      <option value="">How can we help?</option>
                      <option value="private-tasting">
                        Private Sommelier Tasting Reservation
                      </option>
                      <option value="single-origin">
                        Single-Estate Wholesale &amp; Export
                      </option>
                      <option value="corporate-gifting">
                        Bespoke Corporate Gift Chests
                      </option>
                      <option value="estate-visit">
                        Dimbula &amp; Nuwara Eliya Plantation Tours
                      </option>
                      <option value="other">General Inquiries</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-outline pointer-events-none text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>

              {/* Message Area */}
              <div className="flex flex-col gap-2">
                <label
                  className="font-label-md text-label-md text-on-surface uppercase tracking-wide flex items-center justify-between"
                  htmlFor="message"
                >
                  <span>Message</span>
                  <span className="text-tertiary-fixed-variant text-[11px] lowercase italic font-normal">
                    *required
                  </span>
                </label>
                <textarea
                  className="w-full p-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all resize-none"
                  id="message"
                  placeholder="Write your message here... Include preferred infusion grades, event guest counts, or delivery destinations."
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              {/* Submit Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-outline text-label-sm font-label-sm">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    verified_user
                  </span>
                  <span>Protected by Ceylon Tea Board Origin Guarantee</span>
                </div>

                <button
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-label-md text-label-md uppercase tracking-wider transition-all shadow-[0_6px_20px_rgba(47,93,58,0.25)] ${
                    isSubmitted
                      ? "bg-secondary text-on-secondary"
                      : "bg-primary-container text-on-primary hover:bg-primary"
                  }`}
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-[18px]">
                        progress_activity
                      </span>
                      <span>Dispatching...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <span>Sent Successfully</span>
                      <span className="material-symbols-outlined text-[18px]">
                        check
                      </span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="material-symbols-outlined text-[18px]">
                        send
                      </span>
                    </>
                  )}
                </button>
              </div>

              {isSubmitted && (
                <div className="rounded-lg p-4 bg-secondary-container text-on-secondary-container font-body-sm text-body-sm flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span>
                    Ayubowan! Your message has been received by our head
                    sommelier team in Colombo. We will respond within 24 hours.
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Direct Channels & Sommelier Teaser */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="px-2">
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                Direct Channels
              </span>
              <h3 className="font-title-lg text-3xl text-primary">
                Colombo Pavilion &amp; Estates
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Phone */}
              <a
                className="group flex items-start gap-4 p-5 rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-colors shadow-[0_8px_24px_-4px_rgba(36,49,39,0.04)]"
                href="tel:+94112345678"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container group-hover:bg-primary-container transition-colors flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-[22px] transition-colors">
                    call
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                    Direct Line
                  </span>
                  <span className="font-body-md text-body-md font-medium text-primary mt-0.5 group-hover:text-primary-container truncate">
                    +94 11 234 5678
                  </span>
                  <span className="font-label-sm text-label-sm text-outline-variant mt-0.5">
                    English &amp; Sinhala concierge
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                className="group flex items-start gap-4 p-5 rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-colors shadow-[0_8px_24px_-4px_rgba(36,49,39,0.04)]"
                href="mailto:hello@ceylontea.com"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container group-hover:bg-primary-container transition-colors flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-[22px] transition-colors">
                    mail
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                    Editorial &amp; Tasting Desk
                  </span>
                  <span className="font-body-md text-body-md font-medium text-primary mt-0.5 group-hover:text-primary-container truncate">
                    hello@ceylontea.com
                  </span>
                  <span className="font-label-sm text-label-sm text-outline-variant mt-0.5">
                    Encrypted private inquiries
                  </span>
                </div>
              </a>

              {/* Address */}
              <div className="group flex items-start gap-4 p-5 rounded-xl bg-surface-container-lowest shadow-[0_8px_24px_-4px_rgba(36,49,39,0.04)]">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    location_on
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                    Pavilion &amp; Cellar Headquarters
                  </span>
                  <span className="font-body-md text-body-md font-medium text-primary mt-0.5">
                    No. 25, Tea Avenue, Colombo, Sri Lanka
                  </span>
                  <span className="font-label-sm text-label-sm text-outline-variant mt-0.5">
                    Galle Face Promenade district
                  </span>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="group flex items-start gap-4 p-5 rounded-xl bg-surface-container-lowest shadow-[0_8px_24px_-4px_rgba(36,49,39,0.04)]">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    schedule
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                    Tasting Room Hours
                  </span>
                  <span className="font-body-md text-body-md font-medium text-primary mt-0.5">
                    Monday – Friday: 9:00 AM – 5:00 PM
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary-fixed-variant mt-0.5">
                    Saturday: By private sommelier reservation
                  </span>
                </div>
              </div>
            </div>

            {/* Sommelier Tasting Room Teaser Card */}
            <div className="relative overflow-hidden rounded-xl bg-primary text-on-primary p-7 shadow-lg mt-2">
              <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-primary-container/40 blur-2xl pointer-events-none"></div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed-dim/20 text-tertiary-fixed-dim font-label-sm text-label-sm uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[14px]">
                    stars
                  </span>
                  <span>Private Sommelier</span>
                </div>
                <span className="text-tertiary-fixed text-2xl font-headline-sm italic">
                  6000 ft
                </span>
              </div>
              <h4 className="font-headline-sm text-2xl text-surface-container-lowest mb-2 leading-snug">
                Bespoke Terroir Cupping Session
              </h4>
              <p className="font-body-sm text-body-sm text-surface-variant mb-6 leading-relaxed">
                Experience rare Silver Tips, seasonal flushed Pekoe, and
                single-estate flights brewed in authentic porcelain gaiwans
                under the guidance of our Master Taster.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-outline-variant uppercase">
                    Limited Seating
                  </span>
                  <span className="font-body-sm text-body-sm text-surface-container-lowest font-medium">
                    Max 6 guests per ceremony
                  </span>
                </div>
                <button
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-tertiary-fixed-dim hover:text-tertiary-fixed transition-colors underline underline-offset-4"
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      subject: "private-tasting",
                    }));
                    document.getElementById("message")?.focus();
                  }}
                >
                  Reserve Seat
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
