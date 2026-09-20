import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    rating: "",
    description: "",
  });

  // UI States
  const [showAlert, setShowAlert] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Image Preview State (Default preserves the original image URL)
  const defaultImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDJw29D8Zkc1Oe0nwRdU9DajZn9QpPogoaYv_Rsd17YS6l_Rc4uUQ9fC_HXwKm8sRpttacCdaQtWgtBHQkeHvYRcon7dq19J-wmFSyUmdpUL-ctodkcpbfTid5BT6HJMZJlQFyb1SkGXABctkpbLhoBpVQdDEBZmvQYfITnqDXS374pIvdrVUa6lJlamdWHsqcL5_ujXmrN50g0wuzfFYjqje0jhCQN3gKmCUQ2IL_ZsTmATlB3kAyb7w";

  const [previewImage, setPreviewImage] = useState(defaultImage);
  const [fileName, setFileName] = useState("ceylon-reserve-canister.webp");
  const [previewTag, setPreviewTag] = useState("Default Master");

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle File Upload/Preview
  const handleFileChange = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
        setFileName(file.name);
        setPreviewTag("Uploaded Leaf Media");
      };
      reader.readAsDataURL(file);
    }
  };

  // Reset Image Preview to Default
  const handleResetPreview = () => {
    setPreviewImage(defaultImage);
    setFileName("ceylon-reserve-canister.webp");
    setPreviewTag("Default Master");
  };

  // Drag and Drop Events
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="flex flex-col w-full bg-background">
      <div className="pl-60 max-w-[1500px] mx-auto w-full flex flex-col gap-space-lg pb-16">
        {/* Top Back Bar */}
        <div className="flex items-center justify-between">
          <Link
            className="inline-flex items-center gap-space-xs text-primary hover:text-secondary font-label-md text-label-md transition-colors group"
            to="/admin/products"
          >
            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-1">
              arrow_back
            </span>
            <span>Back to Products</span>
          </Link>
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            <span>Catalog Inventory • Single-Origin Master</span>
          </div>
        </div>

        {/* Dismissable Draft Alert Banner */}
        {showAlert && (
          <div className="flex items-center justify-between bg-secondary-container/60 text-on-secondary-container px-space-md py-space-sm rounded-lg shadow-sm transition-all">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary text-[20px]">
                verified
              </span>
              <span className="font-body-sm text-body-sm font-medium">
                Product ready to be saved to database. Fill all required
                attributes below.
              </span>
            </div>
            <button
              aria-label="Dismiss banner"
              className="text-on-secondary-container hover:text-primary transition-colors flex items-center p-1"
              type="button"
              onClick={() => setShowAlert(false)}
            >
              <span className="material-symbols-outlined text-[18px]">
                close
              </span>
            </button>
          </div>
        )}

        {/* Page Title & Auto-Generated SKU Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary font-medium mb-1">
              Estate Harvest Record
            </span>
            <h1 className="font-headline-lg text-5xl text-primary tracking-tight">
              Add Product
            </h1>
            <p className="font-body-md text-lg text-on-surface-variant mt-1">
              Add a new Ceylon Tea product to the global reserve inventory.
            </p>
          </div>
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm self-start md:self-auto bg-surface-container-low px-space-sm py-1 rounded-full">
            <span className="material-symbols-outlined text-[16px] text-tertiary">
              inventory
            </span>
            <span>SKU: AUTOGEN-CYL-2025</span>
          </div>
        </div>

        {/* Main Product Input Form */}
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_8px_24px_-4px_rgba(36,49,39,0.04)] p-space-md md:p-space-lg">
          <form className="flex flex-col gap-space-lg" onSubmit={handleSubmit}>
            {/* Row 1: Product Name & Category */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
              <div className="md:col-span-8 flex flex-col gap-1.5">
                <label
                  className="font-label-md text-label-md uppercase tracking-wider text-on-surface flex items-center justify-between"
                  htmlFor="productName"
                >
                  <span>
                    Product Name <span className="text-error">*</span>
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant normal-case">
                    e.g. Dimbula Estate Reserve
                  </span>
                </label>
                <input
                  className="w-full bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md px-space-md py-3 rounded-lg outline-none transition-all focus:shadow-[0_0_0_3px_rgba(47,93,58,0.18)]"
                  id="productName"
                  name="name"
                  placeholder="Enter product name"
                  required
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="md:col-span-4 flex flex-col gap-1.5">
                <label
                  className="font-label-md text-label-md uppercase tracking-wider text-on-surface"
                  htmlFor="category"
                >
                  Category <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-surface-container-low focus:bg-surface-container-lowest text-on-surface font-body-md text-body-md px-space-md py-3 pr-10 rounded-lg outline-none transition-all focus:shadow-[0_0_0_3px_rgba(47,93,58,0.18)] cursor-pointer"
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option disabled value="">
                      Select a category
                    </option>
                    <option value="Black Tea">Black Tea (Single-Origin)</option>
                    <option value="Green Tea">Green Tea (Ceylon Pure)</option>
                    <option value="Herbal Tea">Herbal Tea (Botanicals)</option>
                    <option value="Gift Sets">
                      Gift Sets &amp; Wooden Chests
                    </option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            {/* Row 2: Price, Stock & Rating */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-md text-label-md uppercase tracking-wider text-on-surface"
                  htmlFor="price"
                >
                  Price (USD) <span className="text-error">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 font-body-md text-body-md font-medium text-on-surface-variant select-none">
                    $
                  </span>
                  <input
                    className="w-full bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md pl-8 pr-space-md py-3 rounded-lg outline-none transition-all focus:shadow-[0_0_0_3px_rgba(47,93,58,0.18)]"
                    id="price"
                    min="0.01"
                    name="price"
                    placeholder="24.00"
                    required
                    step="0.01"
                    type="number"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Export baseline per 100g tin
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-md text-label-md uppercase tracking-wider text-on-surface"
                  htmlFor="stockQuantity"
                >
                  Stock Quantity <span className="text-error">*</span>
                </label>
                <div className="relative flex items-center">
                  <input
                    className="w-full bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md px-space-md py-3 rounded-lg outline-none transition-all focus:shadow-[0_0_0_3px_rgba(47,93,58,0.18)]"
                    id="stockQuantity"
                    min="0"
                    name="stock"
                    placeholder="50"
                    required
                    step="1"
                    type="number"
                    value={formData.stock}
                    onChange={handleInputChange}
                  />
                  <span className="absolute right-4 font-label-sm text-label-sm text-on-surface-variant select-none">
                    Units
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Available packaging units
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-md text-label-md uppercase tracking-wider text-on-surface flex items-center justify-between"
                  htmlFor="rating"
                >
                  <span>Cupping Score / Rating</span>
                  <span className="text-tertiary font-medium">★ 0–5</span>
                </label>
                <div className="relative flex items-center">
                  <input
                    className="w-full bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md px-space-md py-3 rounded-lg outline-none transition-all focus:shadow-[0_0_0_3px_rgba(47,93,58,0.18)]"
                    id="rating"
                    max="5"
                    min="0"
                    name="rating"
                    placeholder="4.8"
                    step="0.1"
                    type="number"
                    value={formData.rating}
                    onChange={handleInputChange}
                  />
                  <span
                    className="material-symbols-outlined absolute right-3 text-tertiary-container text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Sommelier taster baseline
                </span>
              </div>
            </div>

            {/* Row 3: Product Description */}
            <div className="flex flex-col gap-1.5">
              <label
                className="font-label-md text-label-md uppercase tracking-wider text-on-surface flex items-center justify-between"
                htmlFor="description"
              >
                <span>
                  Product Description <span className="text-error">*</span>
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant normal-case">
                  Tasting notes, elevation, leaf grade
                </span>
              </label>
              <textarea
                className="w-full bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md px-space-md py-3 rounded-lg outline-none transition-all focus:shadow-[0_0_0_3px_rgba(47,93,58,0.18)] resize-y min-h-[110px]"
                id="description"
                name="description"
                placeholder="Describe the terroir profile, briskness, color infusion, elevation of harvest, and aroma..."
                required
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
            </div>

            {/* Row 4: Product Imagery & Preview */}
            <div className="flex flex-col gap-space-sm">
              <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface">
                Product Imagery <span className="text-error">*</span>
              </label>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
                {/* Drag and Drop Zone */}
                <div
                  className={`lg:col-span-8 group relative flex flex-col items-center justify-center p-space-lg rounded-xl transition-all cursor-pointer text-center ${
                    isDragging
                      ? "bg-surface-container-high"
                      : "bg-surface-container-low hover:bg-surface-container"
                  }`}
                  onClick={() => document.getElementById("fileInput")?.click()}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <input
                    accept="image/*"
                    className="hidden"
                    id="fileInput"
                    type="file"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileChange(e.target.files[0]);
                      }
                    }}
                  />
                  <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm mb-space-sm group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[26px]">
                      cloud_upload
                    </span>
                  </div>
                  <span className="font-title-lg text-3xl text-primary">
                    Drag and drop product image
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    or{" "}
                    <span className="text-primary font-semibold underline underline-offset-2">
                      Browse files
                    </span>{" "}
                    from your computer
                  </p>
                  <p className="font-label-sm text-label-sm text-outline mt-space-sm">
                    Recommended: WEBP or PNG • Minimum 1200 × 1200px • Max 5MB
                  </p>
                </div>

                {/* Live Preview Card */}
                <div className="lg:col-span-4 bg-surface-container-low p-space-sm rounded-xl flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between px-1">
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase tracking-wider">
                      Preview Card
                    </span>
                    <span className="text-label-sm text-tertiary font-medium">
                      {previewTag}
                    </span>
                  </div>

                  <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container flex items-center justify-center">
                    <img
                      alt="Product Leaf Preview"
                      className="w-full h-full object-cover transition-opacity duration-300"
                      src={previewImage}
                    />
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
                      <button
                        className="p-1 hover:text-primary text-on-surface-variant transition-colors"
                        title="Replace Image"
                        type="button"
                        onClick={() =>
                          document.getElementById("fileInput")?.click()
                        }
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          cached
                        </span>
                      </button>
                      <button
                        className="p-1 hover:text-error text-on-surface-variant transition-colors"
                        title="Clear Image"
                        type="button"
                        onClick={handleResetPreview}
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="px-1 pt-1 flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant truncate">
                      {fileName}
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">
                      1200 × 1200 • WebP ready
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-space-md mt-space-sm flex flex-col sm:flex-row items-center justify-end gap-space-md">
              <Link
                className="w-full sm:w-auto text-center px-6 py-2.5 rounded-lg font-label-md text-label-md uppercase tracking-wider text-on-surface hover:bg-surface-container transition-colors"
                to="/admin/products"
              >
                Cancel
              </Link>
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-primary hover:bg-primary-container text-on-primary px-8 py-3 rounded-lg font-label-md text-label-md uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
                type="submit"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add_circle
                </span>
                <span>Add Product</span>
              </button>
            </div>
          </form>
        </div>

        {/* Informational Micro Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          <div className="bg-surface-container-low p-space-md rounded-xl flex items-start gap-space-sm">
            <span className="material-symbols-outlined text-primary text-[24px]">
              verified
            </span>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-semibold text-primary">
                Single Origin Guarantee
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Records are logged with authentic Sri Lanka Tea Board Lion seal
                credentials.
              </p>
            </div>
          </div>

          <div className="bg-surface-container-low p-space-md rounded-xl flex items-start gap-space-sm">
            <span className="material-symbols-outlined text-tertiary-container text-[24px]">
              database
            </span>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-semibold text-tertiary-container">
                MongoDB Schema Synced
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Fields map immediately to the product collection schema with
                timestamping.
              </p>
            </div>
          </div>

          <div className="bg-surface-container-low p-space-md rounded-xl flex items-start gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[24px]">
              speed
            </span>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-semibold text-secondary">
                Instant Storefront Deployment
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Instant indexing to the public tea collection and tasting
                selector.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Save Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm p-space-md">
          <div className="bg-surface-container-lowest max-w-md w-full rounded-xl p-space-lg shadow-2xl flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center text-primary mb-space-sm">
              <span className="material-symbols-outlined text-[32px]">
                task_alt
              </span>
            </div>
            <span className="font-title-lg text-title-lg text-primary">
              Product Created
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 mb-space-lg">
              The Ceylon tea item has been validated and persisted to the
              catalog repository.
            </p>
            <div className="flex items-center gap-space-sm w-full">
              <button
                className="flex-1 px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md uppercase tracking-wider transition-colors"
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setFormData({
                    name: "",
                    category: "",
                    price: "",
                    stock: "",
                    rating: "",
                    description: "",
                  });
                  handleResetPreview();
                }}
              >
                Add Another
              </button>
              <button
                className="flex-1 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider text-center transition-colors shadow-sm"
                type="button"
                onClick={() => navigate("/admin/products")}
              >
                Go to List
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
