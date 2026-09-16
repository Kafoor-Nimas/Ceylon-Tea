import { useState } from "react";

export default function CatalogModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    interest: "Bulk Single-Origin Teas (FCL/LCL)",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Wholesale catalog dispatched to ${formData.email}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm">
      <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-8 shadow-2xl relative">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary-container font-semibold">
              Instant Download Access
            </span>
            <h3 className="font-headline-sm text-3xl text-primary mt-1">
              Wholesale Specification Catalog
            </h3>
          </div>
          <button
            className="p-1 rounded text-outline hover:text-on-surface"
            type="button"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <p className="font-body-sm text-body-sm text-secondary mb-6 leading-relaxed">
          Enter your commercial details to receive our 2026 estate harvest
          schedules, tasting notes, and export pricing sheets.
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-label-sm text-label-sm uppercase text-on-surface mb-1">
              Company / Organization
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface"
              placeholder="e.g. Royal Botanicals Ltd"
              required
              type="text"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm uppercase text-on-surface mb-1">
              Business Email
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface"
              placeholder="purchasing@company.com"
              required
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm uppercase text-on-surface mb-1">
              Primary Interest
            </label>
            <select
              className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface"
              value={formData.interest}
              onChange={(e) =>
                setFormData({ ...formData, interest: e.target.value })
              }
            >
              <option>Bulk Single-Origin Teas (FCL/LCL)</option>
              <option>Private Label &amp; Custom Blends</option>
              <option>Corporate Gift Crates</option>
              <option>Hospitality &amp; Foodservice Sourcing</option>
            </select>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <button
              className="w-full py-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-colors shadow-md"
              type="submit"
            >
              Download Catalog (PDF)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}