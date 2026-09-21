import { useState } from "react";

const INITIAL_ORDERS = [
  {
    id: "ORD-1048",
    customer: "Lady Eleanor Vance",
    email: "eleanor@vance.co.uk",
    initials: "EV",
    phone: "+44 20 7946 0912",
    address: "14 Belgrave Square, London SW1X 8PS, UK",
    date: "Oct 14, 2026",
    itemsCount: 3,
    subtotal: "95.00",
    shipping: "6.00",
    total: "101.00",
    payment: "Paid (Card)",
    isPaid: true,
    status: "shipped",
    items: [
      {
        id: 1,
        name: "Nuwara Eliya Highland",
        qty: 2,
        unitPrice: "35.00",
        price: "70.00",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMqwUNmTPUtRVv0VmCz5uhJ0HMz6ZBRt9bne-Q8C3wXUotEB93LbIHF8q5RLzw-0u7YLj828y6U4k81AiXO1HjfcB_o3pUHOjsMFQ1m-QGzlfVU3G6AZvfDRT_yOZNYnPxuaBBewckzZZO0UWAdphqq-dAFc_Imjlmr3LUH2_kzMAswZhpdsSLFg-Tm5El2TfrQp-yWEkUKhttPHDglO5fdGIoWd8yfWJjXv1e5E-vlXiIUk-VVJQ1mw",
      },
      {
        id: 2,
        name: "Ceylon Gift Box",
        qty: 1,
        unitPrice: "25.00",
        price: "25.00",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDxtxO4fJGH_dMEzutCX5qNJsB5AWyqr6FJZYLHBvpNKkXnEUJOXzdqUYTCrLNAtLsMrkLqFtzMWVibMSebhl2KhZuZDLAU05s5Zbv6vCe-FAs29T556IvP3BK9gC_3C79rcxSiGu7ZYW93p6Ugk1Dh8ROeIZ5UqWgySKdlvejLNcu2eeGQjzp6CV4BATJUaFwCT3OMrejq5yjOiLy8qUz9MT2CcvF2WvfbBIoTomC4CkzT3zk_f8jdgA",
      },
    ],
  },
  {
    id: "ORD-1047",
    customer: "Chef Hiroshi Tanaka",
    email: "hiroshi@tea.jp",
    initials: "HT",
    phone: "+81 3 5555 0192",
    address: "Ginza 4-Chome, Chuo-ku, Tokyo 104-0061, Japan",
    date: "Oct 14, 2026",
    itemsCount: 12,
    subtotal: "204.00",
    shipping: "12.00",
    total: "216.00",
    payment: "Unpaid (Wire)",
    isPaid: false,
    status: "pending",
    items: [
      {
        id: 1,
        name: "Nuwara Eliya OP (500g)",
        qty: 12,
        unitPrice: "17.00",
        price: "204.00",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMqwUNmTPUtRVv0VmCz5uhJ0HMz6ZBRt9bne-Q8C3wXUotEB93LbIHF8q5RLzw-0u7YLj828y6U4k81AiXO1HjfcB_o3pUHOjsMFQ1m-QGzlfVU3G6AZvfDRT_yOZNYnPxuaBBewckzZZO0UWAdphqq-dAFc_Imjlmr3LUH2_kzMAswZhpdsSLFg-Tm5El2TfrQp-yWEkUKhttPHDglO5fdGIoWd8yfWJjXv1e5E-vlXiIUk-VVJQ1mw",
      },
    ],
  },
  {
    id: "ORD-1046",
    customer: "Marcus Aurelius",
    email: "marcus@rome.it",
    initials: "MA",
    phone: "+39 06 6987 4123",
    address: "Via dei Condotti 88, 00187 Roma RM, Italy",
    date: "Oct 13, 2026",
    itemsCount: 6,
    subtotal: "228.00",
    shipping: "12.00",
    total: "240.00",
    payment: "Paid (Card)",
    isPaid: true,
    status: "delivered",
    items: [
      {
        id: 1,
        name: "Dimbula Reserve Gift Set",
        qty: 6,
        unitPrice: "38.00",
        price: "228.00",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDxtxO4fJGH_dMEzutCX5qNJsB5AWyqr6FJZYLHBvpNKkXnEUJOXzdqUYTCrLNAtLsMrkLqFtzMWVibMSebhl2KhZuZDLAU05s5Zbv6vCe-FAs29T556IvP3BK9gC_3C79rcxSiGu7ZYW93p6Ugk1Dh8ROeIZ5UqWgySKdlvejLNcu2eeGQjzp6CV4BATJUaFwCT3OMrejq5yjOiLy8qUz9MT2CcvF2WvfbBIoTomC4CkzT3zk_f8jdgA",
      },
    ],
  },
  {
    id: "ORD-1045",
    customer: "Sophia Laurent",
    email: "sophia@paris.fr",
    initials: "SL",
    phone: "+33 1 42 68 55 00",
    address: "28 Rue du Faubourg Saint-Honoré, 75008 Paris, France",
    date: "Oct 13, 2026",
    itemsCount: 2,
    subtotal: "84.00",
    shipping: "6.00",
    total: "90.00",
    payment: "Paid (Apple Pay)",
    isPaid: true,
    status: "processing",
    items: [
      {
        id: 1,
        name: "Kandy Highlands Broken Pekoe",
        qty: 2,
        unitPrice: "42.00",
        price: "84.00",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMqwUNmTPUtRVv0VmCz5uhJ0HMz6ZBRt9bne-Q8C3wXUotEB93LbIHF8q5RLzw-0u7YLj828y6U4k81AiXO1HjfcB_o3pUHOjsMFQ1m-QGzlfVU3G6AZvfDRT_yOZNYnPxuaBBewckzZZO0UWAdphqq-dAFc_Imjlmr3LUH2_kzMAswZhpdsSLFg-Tm5El2TfrQp-yWEkUKhttPHDglO5fdGIoWd8yfWJjXv1e5E-vlXiIUk-VVJQ1mw",
      },
    ],
  },
  {
    id: "ORD-1044",
    customer: "David Sterling",
    email: "david@sterling.com",
    initials: "DS",
    phone: "+1 212 555 8392",
    address: "740 Park Avenue, Apt 11B, New York, NY 10021, USA",
    date: "Oct 12, 2026",
    itemsCount: 1,
    subtotal: "26.00",
    shipping: "6.00",
    total: "32.00",
    payment: "Paid (Card)",
    isPaid: true,
    status: "delivered",
    items: [
      {
        id: 1,
        name: "Ruhuna Low-Grown Sampler",
        qty: 1,
        unitPrice: "26.00",
        price: "26.00",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMqwUNmTPUtRVv0VmCz5uhJ0HMz6ZBRt9bne-Q8C3wXUotEB93LbIHF8q5RLzw-0u7YLj828y6U4k81AiXO1HjfcB_o3pUHOjsMFQ1m-QGzlfVU3G6AZvfDRT_yOZNYnPxuaBBewckzZZO0UWAdphqq-dAFc_Imjlmr3LUH2_kzMAswZhpdsSLFg-Tm5El2TfrQp-yWEkUKhttPHDglO5fdGIoWd8yfWJjXv1e5E-vlXiIUk-VVJQ1mw",
      },
    ],
  },
];

export default function ManageOrders() {
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Slide-over Drawer State
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [statusSelectValue, setStatusSelectValue] = useState("");

  // Status Badge Helper Styling
  const getStatusBadgeStyle = (status) => {
    switch (status.toLowerCase()) {
      case "shipped":
        return "bg-secondary-fixed text-on-secondary-fixed-variant";
      case "pending":
        return "bg-tertiary-fixed text-on-tertiary-fixed-variant";
      case "processing":
        return "bg-secondary-container text-on-secondary-container";
      case "delivered":
        return "bg-primary-fixed text-on-primary-fixed-variant";
      case "cancelled":
        return "bg-error-container/60 text-on-error-container";
      default:
        return "bg-surface-container text-on-surface";
    }
  };

  // Status Filter Counts
  const filterCounts = {
    all: 48,
    pending: orders.filter((o) => o.status === "pending").length,
    processing: orders.filter((o) => o.status === "processing").length,
    shipped: orders.filter((o) => o.status === "shipped").length,
    delivered: orders.filter((o) => o.status === "delivered").length,
    cancelled: orders.filter((o) => o.status === "cancelled").length,
  };

  // Filtered Orders List
  const filteredOrders = orders.filter((order) => {
    const matchesFilter =
      activeFilter === "all" || order.status === activeFilter;
    const matchesSearch =
      searchQuery.trim() === "" ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Open Inspection Drawer
  const handleOpenDrawer = (order) => {
    setSelectedOrder(order);
    setStatusSelectValue(order.status);
  };

  // Close Inspection Drawer
  const handleCloseDrawer = () => {
    setSelectedOrder(null);
  };

  // Update Status Action inside Drawer
  const handleUpdateStatus = () => {
    if (!selectedOrder) return;
    setOrders((prevOrders) =>
      prevOrders.map((o) =>
        o.id === selectedOrder.id ? { ...o, status: statusSelectValue } : o
      )
    );
    setSelectedOrder((prev) =>
      prev ? { ...prev, status: statusSelectValue } : null
    );
  };

  return (
    <div className="flex flex-col w-full pl-76  pt-12 max-w-[1600px]">
      {/* Header & Global Dispatches Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
        <div>
          <div className="flex items-center gap-space-xs text-secondary mb-space-xs">
            <span className="material-symbols-outlined text-[18px]">
              local_shipping
            </span>
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
              Fulfillment &amp; Logistical Ledger
            </span>
          </div>
          <h1 className="font-headline-lg text-5xl text-on-surface tracking-tight">
            Manage Orders
          </h1>
          <p className="font-body-md text-lg text-on-surface-variant mt-1">
            View customer orders and update order status across all global tea dispatches.
          </p>
        </div>

        <div className="flex items-center gap-space-sm">
          <button
            className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-lowest text-secondary rounded-lg shadow-sm hover:bg-surface-container transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">
              file_download
            </span>
            <span className="font-label-md text-label-md">Export Ledger</span>
          </button>
          <button
            className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-primary text-on-primary rounded-lg shadow-md hover:bg-primary-container transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">sync</span>
            <span className="font-label-md text-label-md">Sync Channels</span>
          </button>
        </div>
      </div>

      {/* Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">
        {/* Card 1: All Orders */}
        <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-1">
                All Orders
              </span>
              <span className="font-headline-md text-3xl text-on-surface">
                48
              </span>
              <div className="flex items-center gap-1 mt-2 text-primary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">
                  trending_up
                </span>
                <span>+14% this month</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[22px]">
                inventory
              </span>
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-surface-container/40 rounded-full pointer-events-none"></div>
        </div>

        {/* Card 2: Pending */}
        <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-1">
                Pending
              </span>
              <span className="font-headline-md text-3xl text-tertiary">
                8
              </span>
              <div className="flex items-center gap-1 mt-2 text-tertiary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">
                  schedule
                </span>
                <span>Requires review</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-tertiary-fixed/40 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-[22px]">
                hourglass_top
              </span>
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-tertiary-fixed/20 rounded-full pointer-events-none"></div>
        </div>

        {/* Card 3: Processing */}
        <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-1">
                Processing
              </span>
              <span className="font-headline-md text-3xl text-secondary">
                12
              </span>
              <div className="flex items-center gap-1 mt-2 text-secondary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">
                  blender
                </span>
                <span>In blending &amp; packaging</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[22px]">
                auto_fix_high
              </span>
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-secondary-fixed/20 rounded-full pointer-events-none"></div>
        </div>

        {/* Card 4: Delivered */}
        <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-1">
                Delivered
              </span>
              <span className="font-headline-md text-3xl text-primary">
                25
              </span>
              <div className="flex items-center gap-1 mt-2 text-primary font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">
                  verified
                </span>
                <span>99.2% on-time</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[22px]">
                local_shipping
              </span>
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary-fixed/20 rounded-full pointer-events-none"></div>
        </div>
      </div>

      {/* Filter Tabs & Search Toolbar */}
      <div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm mb-space-md flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm">
        {/* Filter Pills */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 lg:pb-0">
          {[
            { key: "all", label: "All", count: filterCounts.all },
            { key: "pending", label: "Pending", count: filterCounts.pending },
            { key: "processing", label: "Processing", count: filterCounts.processing },
            { key: "shipped", label: "Shipped", count: filterCounts.shipped },
            { key: "delivered", label: "Delivered", count: filterCounts.delivered },
            { key: "cancelled", label: "Cancelled", count: filterCounts.cancelled },
          ].map((tab) => {
            const isSelected = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                className={`px-space-md py-2 rounded-lg font-label-md text-label-md transition-colors ${
                  isSelected
                    ? "bg-primary text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-container-low"
                }`}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
              >
                {tab.label}{" "}
                <span className="ml-1 opacity-80">({tab.count})</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="flex items-center gap-space-sm w-full lg:w-80">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
              search
            </span>
            <input
              className="w-full bg-surface-container-low text-on-surface rounded-lg pl-10 pr-space-md py-2 font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-inner transition-colors"
              placeholder="Search by order ID or customer..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            className="p-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            title="Filter options"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </button>
        </div>
      </div>

      {/* Orders Main Data Table */}
      <div className="relative bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/70 text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
                <th className="py-space-md px-space-md">Order ID</th>
                <th className="py-space-md px-space-md">Customer</th>
                <th className="py-space-md px-space-md">Date</th>
                <th className="py-space-md px-space-md">Items</th>
                <th className="py-space-md px-space-md">Total</th>
                <th className="py-space-md px-space-md">Payment</th>
                <th className="py-space-md px-space-md">Status</th>
                <th className="py-space-md px-space-md text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y-0 font-body-md text-body-md">
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="group hover:bg-surface-container-low/50 transition-colors cursor-pointer"
                  onClick={() => handleOpenDrawer(order)}
                >
                  <td className="py-space-md px-space-md font-label-md text-label-md text-primary font-semibold">
                    #{order.id}
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="font-body-md font-semibold text-on-surface">
                      {order.customer}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      {order.email}
                    </div>
                  </td>
                  <td className="py-space-md px-space-md text-on-surface-variant font-body-sm text-body-sm">
                    {order.date}
                  </td>
                  <td className="py-space-md px-space-md">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary">
                      {order.itemsCount} {order.itemsCount === 1 ? "item" : "items"}
                    </span>
                  </td>
                  <td className="py-space-md px-space-md font-semibold text-on-surface">
                    ${order.total}
                  </td>
                  <td className="py-space-md px-space-md">
                    <span
                      className={`inline-flex items-center gap-1 font-body-sm text-body-sm ${
                        order.isPaid ? "text-on-surface" : "text-tertiary"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          order.isPaid ? "bg-primary" : "bg-tertiary-fixed-dim"
                        }`}
                      ></span>
                      {order.payment}
                    </span>
                  </td>
                  <td className="py-space-md px-space-md">
                    <span
                      className={`inline-flex items-center gap-1 px-space-sm py-1 rounded-full font-label-sm text-label-sm font-semibold capitalize ${getStatusBadgeStyle(
                        order.status
                      )}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-space-md px-space-md text-right">
                    <button
                      className="inline-flex items-center gap-1 px-space-sm py-1 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-md text-label-md text-secondary transition-colors"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenDrawer(order);
                      }}
                    >
                      <span>View Details</span>
                      <span className="material-symbols-outlined text-[16px]">
                        chevron_right
                      </span>
                    </button>
                  </td>
                </tr>
              ))}

              {filteredOrders.length === 0 && (
                <tr>
                  <td className="py-8 text-center text-outline" colSpan={8}>
                    No orders matched your filter criteria or search query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="px-space-md py-space-sm bg-surface-container-low/40 flex flex-col sm:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
          <span>
            Displaying {filteredOrders.length} of {orders.length} total orders
          </span>
          <div className="flex items-center gap-space-xs">
            <button
              className="px-3 py-1 rounded bg-surface-container-lowest text-on-surface disabled:opacity-50 hover:bg-surface-container transition-colors"
              disabled
              type="button"
            >
              Previous
            </button>
            <span className="px-2 font-label-sm text-label-sm font-semibold text-primary">
              Page 1 of 10
            </span>
            <button
              className="px-3 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors"
              type="button"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Slide-over Inspection Drawer Backdrop & Panel */}
      {selectedOrder && (
        <div
          className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={handleCloseDrawer}
        >
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div
              className="w-screen max-w-lg bg-surface-container-lowest shadow-2xl flex flex-col overflow-y-auto transform transition-transform duration-300 animate-in slide-in-from-right"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="p-space-lg bg-surface-container-low/60 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-space-xs mb-1">
                    <span className="font-label-md text-label-md text-primary font-semibold">
                      #{selectedOrder.id}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm font-medium capitalize ${getStatusBadgeStyle(
                        selectedOrder.status
                      )}`}
                    >
                      {selectedOrder.status}
                    </span>
                  </div>
                  <h2 className="font-title-lg text-2xl text-on-surface">
                    Order Details
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Placed on {selectedOrder.date}
                  </p>
                </div>
                <button
                  aria-label="Close details"
                  className="p-1 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
                  type="button"
                  onClick={handleCloseDrawer}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    close
                  </span>
                </button>
              </div>

              <div className="p-space-lg flex-1 flex flex-col gap-space-lg">
                {/* Status Updater Box */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm shadow-sm">
                  <label
                    className="font-label-md text-label-md uppercase tracking-wider text-secondary flex items-center gap-1"
                    htmlFor="statusSelect"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      swap_horiz
                    </span>
                    Update Dispatch Status
                  </label>
                  <div className="flex items-center gap-space-sm">
                    <select
                      className="w-full bg-surface-container-lowest text-on-surface rounded-lg px-space-md py-2 font-body-sm text-body-sm shadow-inner focus:outline-none cursor-pointer"
                      id="statusSelect"
                      value={statusSelectValue}
                      onChange={(e) => setStatusSelectValue(e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                    <button
                      className="shrink-0 px-space-md py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
                      type="button"
                      onClick={handleUpdateStatus}
                    >
                      Update
                    </button>
                  </div>
                </div>

                {/* Customer Details */}
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs">
                    Customer Profile
                  </span>
                  <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-semibold">
                        {selectedOrder.initials}
                      </div>
                      <div>
                        <h3 className="font-body-md text-body-md font-semibold text-on-surface">
                          {selectedOrder.customer}
                        </h3>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {selectedOrder.email}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 pt-2 flex flex-col gap-1 text-on-surface-variant font-body-sm text-body-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                          call
                        </span>
                        <span>{selectedOrder.phone}</span>
                      </div>
                      <div className="flex items-start gap-2 mt-1">
                        <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">
                          pin_drop
                        </span>
                        <span>{selectedOrder.address}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Purchased Products List */}
                <div>
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                      Package Contents
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {selectedOrder.itemsCount}{" "}
                      {selectedOrder.itemsCount === 1 ? "Item" : "Items"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    {selectedOrder.items.map((item) => (
                      <div
                        key={item.id}
                        className="p-space-sm rounded-lg bg-surface-container-low/50 flex items-center justify-between gap-space-sm"
                      >
                        <div className="flex items-center gap-space-sm">
                          <img
                            alt={item.name}
                            className="w-12 h-12 rounded-lg object-cover bg-surface-container"
                            src={item.image}
                          />
                          <div>
                            <h4 className="font-body-md text-body-md font-medium text-on-surface">
                              {item.name}
                            </h4>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              Qty: {item.qty} × ${item.unitPrice}
                            </span>
                          </div>
                        </div>
                        <span className="font-body-md text-body-md font-semibold text-on-surface">
                          ${item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Financial Summary */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2 font-body-sm text-body-sm">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>${selectedOrder.subtotal}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Royal Mail Insured Shipping</span>
                    <span>${selectedOrder.shipping}</span>
                  </div>
                  <div className="flex justify-between font-title-lg text-2xl text-on-surface pt-2 mt-1">
                    <span>Total Paid</span>
                    <span className="text-primary font-semibold">
                      ${selectedOrder.total}
                    </span>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="mt-auto pt-space-md flex items-center gap-space-sm">
                  <button
                    className="flex-1 py-space-sm px-space-md rounded-lg bg-surface-container text-secondary font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      print
                    </span>
                    <span>Print Packing Slip</span>
                  </button>
                  <button
                    className="flex-1 py-space-sm px-space-md rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors flex items-center justify-center gap-1"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      mail
                    </span>
                    <span>Notify Customer</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}