import { useState } from "react";
import { Link } from "react-router-dom";

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Nuwara Eliya Highland Tea",
    terroir: "High-grown • 6,200ft • Delicate & Floral",
    category: "Black Tea",
    price: "$22.00",
    stock: 45,
    stockStatus: "In Stock",
    stockLow: false,
    rating: "4.8",
    reviewsCount: 84,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqeJbazJxMQkXEh_5O9SUPFeNcCv7lcBWLnkU5H8zAhUGzxOlPv4iAE5HoHOQXOTf2LNQU1RhX4Rh2eBv2ziZy9YtOvkldyoQ-4uZAp1pnbY5kfKMRBKH-alMPyTjNQdSk87JZZ7ADTps2WcgJUdU0DSZ6KCELQ6xfg-iELOS0mfTmsbU4HHjCnMbQOKrovFiAlHc0KdxGD1ZpCI16zJwLDpGClZfuW5YkYDiX6UJ1-WBVUe1ilNUUdw",
  },
  {
    id: 2,
    name: "Ceylon Premium Black Tea",
    terroir: "Dimbula Valley • Rich & Malty Character",
    category: "Black Tea",
    price: "$18.00",
    stock: 60,
    stockStatus: "In Stock",
    stockLow: false,
    rating: "4.9",
    reviewsCount: 142,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBij0Hvg4El8V7fF76m212A-qG0xRAr11IjEc74qu30eDdA47ZGOSISYkrinaMIG0Xsqb9AyngD7NhGjsp9BNW2Rdi5nKT4msZMe6ma_AYQw0LS1UWMxFcLiOYGOdKUaZ7Fcsos3RJ0zV1Jq0jAXQvHR6hepCgAaY95oAKNNHblbUKmHqm5pBzoRfgjss4y2g3BDsvlINYMqrkyb7pLNwlYgPzN7Lvf69wbUjzsKYSzVDdjsMf_I5J4PQ",
  },
  {
    id: 3,
    name: "Kandy Royal Tea",
    terroir: "Mid-grown • Full-Bodied, Bright Amber Brew",
    category: "Black Tea",
    price: "$19.00",
    stock: 30,
    stockStatus: "In Stock",
    stockLow: false,
    rating: "4.7",
    reviewsCount: 53,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKxx5Wb-8Vi7utiyxF1_wWeaiqFH-NeyMk0wPX9x-mlH3NvKSSCEhpMALZMhLAHT3uaIq8b7PSYP4Xoo3ILIahvXt-mwu_BqvAD9YK84Si78R8fPVmSSjr0KMAECKZQ-K01kpFd-cdUoZ_oEWhlzKw_0IyGSfFkVhK09NnNKPXQZZtvtXdtmkGqFpfFO0moft2Dv6HqoFzbjA7nTErAg7tmXOx5Ft_o-3nwW7jI5rcZmYd-eWPjfUZZw",
  },
  {
    id: 4,
    name: "Ceylon Green Tea",
    terroir: "Uva Valley • Pan-roasted & Grassy Freshness",
    category: "Green Tea",
    price: "$17.00",
    stock: 25,
    stockStatus: "In Stock",
    stockLow: false,
    rating: "4.6",
    reviewsCount: 68,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDldr_m0yr6c_3onX839Bcnpw1xUE6ITdUEyGLNEsvVvIfDJ7W3Z8nwLwH-BBKfzNbojG06zGcorZffauv4FVM_ilf43vMrwMist-Hig3wy5vpXyP5rq--kaA9TcGFzbOLB-QNQaFAcFN_gZZrOMQenVKLepsFFe5-dDXMwmfBPSru98GOkse1pwYZtx71C590aIHBMBTSzyiEI5KLs-7o7yvz-cDPPOYAhnAXghdDXiQTHrzwI7rNlng",
  },
  {
    id: 5,
    name: "Jasmine Green Tea",
    terroir: "Scented with Night-Blooming Jasmine Petals",
    category: "Green Tea",
    price: "$20.00",
    stock: 18,
    stockStatus: "In Stock",
    stockLow: false,
    rating: "4.8",
    reviewsCount: 91,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLwdhxuAzn_Qt6Q2NSUd0sp9iOKoxopQne7Me20qCi5MAPR7PgXX1cRp-CQ9IF0krbSRu-q27N1NlELK81yDEkmr854YX644iI1_VeWpy7OZbldctEe6eWPOuaSi741-Eab7zE-GV85OCp5x93newehPrVw_ekVCy0ky9snUqtQW5KxbQatMUn3tX8itiFZef9BkoXsKoxH0M6e8D7RsrpHUqwTy2Fu_g6bf4cY4HsiJwgyE4jKRR4YA",
  },
  {
    id: 6,
    name: "Ginger Herbal Tea",
    terroir: "Ruhuna Spices • Lemongrass & Native Wild Ginger",
    category: "Herbal Tea",
    price: "$16.00",
    stock: 35,
    stockStatus: "In Stock",
    stockLow: false,
    rating: "4.6",
    reviewsCount: 45,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_6T02N1Zf1zRb_sDwyJRtNj5dOFJMXmJU3TwYfr6UiBHGHqynDycH6_H-1DxrMwf-dAz6q0vqUtjsPbuntt9GtOZk6FiNfPA9ep-eGS8bxni74JjpgJsUL7KoUIIbNzCkcV94AFIrqre9CO2ELDQmWMCfj3fzdKp63lSETYoqiB8JRI4ppnXzarJAsK2AB20W7ImdcWgoZZmNIUk16sxmLqfQD5Mtip5bS1EnNnMPfpounlmHIl3JFg",
  },
  {
    id: 7,
    name: "Ceylon Tea Gift Box",
    terroir: "Quad Terroir Collection • Wood craft casket",
    category: "Gift Sets",
    price: "$35.00",
    stock: 12,
    stockStatus: "Low Reserve",
    stockLow: true,
    rating: "4.9",
    reviewsCount: 118,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2Bjnx7jHePZFu-rRrvWd4zBfLBrV1R0jh_Hm0-Yc-GOlaOF81nSdisKhWrnQ8_DDL3fBva0c0LhcbEiz3cVDzipr6izq7K2nwp9w-gSwKhvt6I-AknKs638gXVGNIlnxQnO8B_rFsSau-d8IW6Jo7Z0-UVRZnDra0GQZ2dRsuy2TCVGchvHska6Rkte-Sfv-_gEPw2BYt1bu_1cYM6U_JpzX3CUCFswDT8dTA2KXcvtYz7OwZspqDKQ",
  },
];

export default function ManageProducts() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Delete Modal State
  const [productToDelete, setProductToDelete] = useState(null);

  // Category counts
  const categoryCounts = {
    all: products.length,
    "Black Tea": products.filter((p) => p.category === "Black Tea").length,
    "Green Tea": products.filter((p) => p.category === "Green Tea").length,
    "Herbal Tea": products.filter((p) => p.category === "Herbal Tea").length,
    "Gift Sets": products.filter((p) => p.category === "Gift Sets").length,
  };

  // Filtered Products
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.terroir.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Handle Delete Confirmation
  const confirmDelete = () => {
    if (productToDelete) {
      setProducts((prev) => prev.filter((p) => p.id !== productToDelete.id));
      setProductToDelete(null);
    }
  };

  return (
    <div className="flex flex-col w-full pl-76  pt-12 max-w-[1600px]">
      {/* Top Action & Header Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest">
              Inventory &amp; Catalog
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
            <span className="font-label-sm text-label-sm text-secondary">
              Active Harvest
            </span>
          </div>
          <h1 className="font-headline-md text-5xl text-on-surface">
            Manage Products
          </h1>
          <p className="font-body-md text-lg text-on-surface-variant">
            View, edit, and curate Ceylon estate tea offerings and gift editions.
          </p>
        </div>

        <div className="flex items-center gap-space-sm self-start md:self-auto">
          <button
            className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-lowest text-on-surface rounded-lg shadow-sm hover:bg-surface-container-high transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px] text-secondary">
              tune
            </span>
            <span className="font-label-md text-label-md">Export CSV</span>
          </button>
          <Link
            className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-primary-container text-on-primary rounded-lg shadow-sm hover:bg-primary transition-all duration-200"
            to="/admin/products/add"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span className="font-label-md text-label-md tracking-wider">
            Add Product
            </span>
          </Link>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
              Total Varieties
            </span>
            <span className="font-headline-sm text-3xl text-on-surface mt-1">
              12
            </span>
            <span className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-0.5">
              <span className="material-symbols-outlined text-[15px]">eco</span>
              Single Estate &amp; Blends
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">inventory_2</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
              Total Stock Units
            </span>
            <span className="font-headline-sm text-3xl text-on-surface mt-1">
              227
            </span>
            <span className="font-body-sm text-body-sm text-primary flex items-center gap-1 mt-0.5">
              <span className="material-symbols-outlined text-[15px]">
                check_circle
              </span>
              Adequate Reserves
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined">warehouse</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
              Average Rating
            </span>
            <span className="font-headline-sm text-3xl text-on-surface mt-1">
              4.76
            </span>
            <span className="font-body-sm text-body-sm text-tertiary-container flex items-center gap-1 mt-0.5">
              <span
                className="material-symbols-outlined text-[15px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              High Satisfaction
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-tertiary-container">
            <span className="material-symbols-outlined">grade</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
              Low Stock Alert
            </span>
            <span className="font-headline-sm text-3xl text-on-surface mt-1">
              1
            </span>
            <span className="font-body-sm text-body-sm text-error flex items-center gap-1 mt-0.5">
              <span className="material-symbols-outlined text-[15px]">
                warning
              </span>
              Gift Set (&lt;15 units)
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-error-container/40 flex items-center justify-center text-error">
            <span className="material-symbols-outlined">
              notification_important
            </span>
          </div>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden mb-space-lg">
        {/* Category Filter Pills & Search Input */}
        <div className="p-space-md flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-low/40">
          <div className="flex flex-wrap items-center gap-space-xs">
            {[
              { key: "all", label: "All" },
              { key: "Black Tea", label: "Black Tea" },
              { key: "Green Tea", label: "Green Tea" },
              { key: "Herbal Tea", label: "Herbal Tea" },
              { key: "Gift Sets", label: "Gift Sets" },
            ].map((cat) => {
              const isSelected = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  className={`inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all ${
                    isSelected
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isSelected
                        ? "bg-surface-container-lowest/20"
                        : "bg-surface-variant text-on-surface"
                    }`}
                  >
                    {categoryCounts[cat.key] || 0}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-space-sm w-full lg:w-auto">
            <div className="relative w-full sm:w-72">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-outline">
                search
              </span>
              <input
                className="w-full bg-surface-container-lowest rounded-lg pl-9 pr-3 py-2 text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none shadow-sm focus:shadow-md transition-shadow"
                placeholder="Search products, origin..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              className="p-2 bg-surface-container-lowest rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors"
              title="Sort Table"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">sort</span>
            </button>
          </div>
        </div>

        {/* Products Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                <th className="py-space-sm pl-space-md pr-space-xs w-16" scope="col">
                  Item
                </th>
                <th className="py-space-sm px-space-sm" scope="col">
                  Product Name &amp; Terroir
                </th>
                <th className="py-space-sm px-space-sm" scope="col">
                  Category
                </th>
                <th className="py-space-sm px-space-sm" scope="col">
                  Price
                </th>
                <th className="py-space-sm px-space-sm" scope="col">
                  Stock
                </th>
                <th className="py-space-sm px-space-sm" scope="col">
                  Rating
                </th>
                <th
                  className="py-space-sm pr-space-md pl-space-sm text-right"
                  scope="col"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high/60 font-body-sm text-body-sm">
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-surface-container-low/60 transition-colors"
                >
                  <td className="py-space-sm pl-space-md pr-space-xs">
                    <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0 shadow-sm">
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover"
                        src={product.image}
                      />
                    </div>
                  </td>
                  <td className="py-space-sm px-space-sm">
                    <div className="flex flex-col">
                      <span className="font-title-lg text-[16px] text-on-surface font-semibold leading-tight">
                        {product.name}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
                        {product.terroir}
                      </span>
                    </div>
                  </td>
                  <td className="py-space-sm px-space-sm">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface font-medium">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          product.category === "Green Tea"
                            ? "bg-primary-container"
                            : product.category === "Herbal Tea"
                            ? "bg-tertiary-fixed-dim"
                            : "bg-tertiary"
                        }`}
                      ></span>
                      {product.category}
                    </span>
                  </td>
                  <td className="py-space-sm px-space-sm font-semibold text-on-surface">
                    {product.price}
                  </td>
                  <td className="py-space-sm px-space-sm">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-medium ${
                          product.stockLow ? "text-error" : "text-on-surface"
                        }`}
                      >
                        {product.stock}
                      </span>
                      <span
                        className={`text-[11px] px-1.5 py-0.5 rounded font-medium ${
                          product.stockLow
                            ? "bg-error-container/50 text-on-error-container"
                            : "bg-secondary-container/40 text-secondary"
                        }`}
                      >
                        {product.stockStatus}
                      </span>
                    </div>
                  </td>
                  <td className="py-space-sm px-space-sm">
                    <div className="flex items-center gap-1 text-tertiary-container font-semibold">
                      <span
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span>{product.rating}</span>
                      <span className="text-outline text-[11px] font-normal">
                        ({product.reviewsCount})
                      </span>
                    </div>
                  </td>
                  <td className="py-space-sm pr-space-md pl-space-sm text-right">
                    <div className="inline-flex items-center gap-1.5">
                      <button
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container hover:bg-surface-variant text-on-surface text-[12px] font-medium transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          edit
                        </span>
                        <span>Edit</span>
                      </button>
                      <button
                        className="p-1 rounded text-on-surface-variant hover:text-error hover:bg-error-container/40 transition-colors"
                        title="Delete Product"
                        type="button"
                        onClick={() => setProductToDelete(product)}
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredProducts.length === 0 && (
                <tr>
                  <td className="py-8 text-center text-outline" colSpan={7}>
                    No products matched your active filters or search terms.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm bg-surface-container-low/30">
          <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <span>Showing</span>
            <span className="font-semibold text-on-surface">1</span>
            <span>to</span>
            <span className="font-semibold text-on-surface">
              {filteredProducts.length}
            </span>
            <span>of</span>
            <span className="font-semibold text-on-surface">
              {products.length}
            </span>
            <span>products</span>
          </div>

          <div className="flex items-center gap-1 self-end sm:self-auto">
            <button
              className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high disabled:opacity-50 text-[13px] font-medium transition-colors flex items-center gap-1"
              disabled
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">
                chevron_left
              </span>
              <span>Previous</span>
            </button>
            <button
              className="w-8 h-8 rounded-lg bg-primary text-on-primary font-semibold text-[13px] flex items-center justify-center shadow-sm"
              type="button"
            >
              1
            </button>
            <button
              className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-[13px] flex items-center justify-center transition-colors"
              type="button"
            >
              2
            </button>
            <button
              className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-[13px] font-medium transition-colors flex items-center gap-1"
              type="button"
            >
              <span>Next</span>
              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Quality Standard Footer Banner */}
      <div className="p-space-lg rounded-xl bg-surface-container-low/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-primary flex-shrink-0">
            <span className="material-symbols-outlined text-[26px]">spa</span>
          </div>
          <div>
            <h2 className="font-title-lg text-3xl text-on-surface leading-tight">
              Artisanal Tea Quality Standard
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              All teas adhere to Sri Lanka Tea Board Lion Logo certification and sustainable pesticide-free cultivation practices.
            </p>
          </div>
        </div>
        <a
          className="font-label-md text-label-md text-primary font-semibold hover:text-secondary inline-flex items-center gap-1 flex-shrink-0"
          href="#"
        >
          <span>Audit Harvest Guidelines</span>
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </a>
      </div>

      {/* Delete Confirmation Modal */}
      {productToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-space-md bg-inverse-surface/40 backdrop-blur-sm">
          <div className="bg-surface-container-lowest rounded-xl max-w-md w-full p-space-lg shadow-xl flex flex-col gap-space-md transform transition-all animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start gap-space-md">
              <div className="w-10 h-10 rounded-full bg-error-container/40 flex items-center justify-center text-error flex-shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  delete_forever
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-title-lg text-title-lg text-on-surface">
                  Delete Product Record
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Are you sure you want to delete{" "}
                  <span className="font-semibold text-on-surface">
                    "{productToDelete.name}"
                  </span>
                  ? This action removes estate data and inventory availability from the public storefront.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-space-sm pt-space-xs">
              <button
                className="px-space-md py-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors"
                type="button"
                onClick={() => setProductToDelete(null)}
              >
                Cancel
              </button>
              <button
                className="px-space-md py-space-sm rounded-lg bg-error text-on-error font-label-md text-label-md hover:bg-error/90 shadow-sm transition-colors"
                type="button"
                onClick={confirmDelete}
              >
                Confirm Deletion
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}