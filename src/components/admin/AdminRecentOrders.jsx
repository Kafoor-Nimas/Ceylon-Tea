import { Link } from "react-router-dom";

const RECENT_ORDERS = [
  {
    id: "#ORD-1048",
    initials: "EV",
    initialsBg: "bg-secondary-container text-on-secondary-container",
    customer: "Lady Eleanor Vance",
    item: "Silver Tips Tin (x2)",
    date: "Today",
    total: "$101.00",
    status: "Shipped",
    statusStyle: "bg-primary-container text-on-primary",
    statusDot: "bg-primary-fixed",
  },
  {
    id: "#ORD-1047",
    initials: "HT",
    initialsBg: "bg-tertiary-fixed text-tertiary",
    customer: "Chef Hiroshi Tanaka",
    item: "Nuwara Eliya OP (500g)",
    date: "Today",
    total: "$216.00",
    status: "Pending",
    statusStyle: "bg-tertiary-fixed text-tertiary",
    statusDot: "bg-tertiary",
  },
  {
    id: "#ORD-1046",
    initials: "MA",
    initialsBg: "bg-secondary-fixed text-on-secondary-fixed",
    customer: "Marcus Aurelius",
    item: "Dimbula Reserve Gift Set",
    date: "Yesterday",
    total: "$240.00",
    status: "Delivered",
    statusStyle: "bg-secondary-container text-on-secondary-container",
    statusDot: "bg-secondary",
  },
  {
    id: "#ORD-1045",
    initials: "SL",
    initialsBg: "bg-surface-container-high text-on-surface-variant",
    customer: "Sophia Laurent",
    item: "Kandy Highlands Broken Pekoe",
    date: "Yesterday",
    total: "$90.00",
    status: "Processing",
    statusStyle: "bg-surface-container-high text-on-surface",
    statusDot: "bg-outline",
  },
  {
    id: "#ORD-1044",
    initials: "DS",
    initialsBg: "bg-secondary-fixed text-on-secondary-fixed",
    customer: "David Sterling",
    item: "Ruhuna Low-Grown Sampler",
    date: "Oct 12",
    total: "$32.00",
    status: "Delivered",
    statusStyle: "bg-secondary-container text-on-secondary-container",
    statusDot: "bg-secondary",
  },
];

export default function AdminRecentOrders() {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col mb-space-lg">
      {/* Table Header */}
      <div className="px-space-md py-space-md flex items-center justify-between bg-surface-container-lowest">
        <div>
          <h2 className="font-title-lg text-title-lg text-on-surface">
            Recent Orders
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Latest commercial transactions &amp; tea connoisseur shipments
          </p>
        </div>
        <Link
          className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-primary-container transition-colors py-1.5 px-3 rounded-lg hover:bg-surface-container"
          to="/admin/orders"
        >
          <span>View All</span>
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </Link>
      </div>

      {/* Table Content */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
              <th className="py-space-sm px-space-md font-semibold">Order ID</th>
              <th className="py-space-sm px-space-md font-semibold">Customer</th>
              <th className="py-space-sm px-space-md font-semibold">Date</th>
              <th className="py-space-sm px-space-md font-semibold">Total</th>
              <th className="py-space-sm px-space-md font-semibold">Status</th>
              <th className="py-space-sm px-space-md font-semibold text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-0 font-body-md text-body-md text-on-surface">
            {RECENT_ORDERS.map((order, idx) => (
              <tr
                key={idx}
                className="hover:bg-surface-container-low/60 transition-colors group"
              >
                <td className="py-space-md px-space-md font-label-md text-label-md font-semibold text-primary">
                  {order.id}
                </td>
                <td className="py-space-md px-space-md">
                  <div className="flex items-center gap-space-sm">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-label-sm text-label-sm font-semibold ${order.initialsBg}`}
                    >
                      {order.initials}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-on-surface">
                        {order.customer}
                      </span>
                      <span className="font-body-sm text-body-sm text-outline">
                        {order.item}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-space-md px-space-md text-on-surface-variant font-body-sm text-body-sm">
                  {order.date}
                </td>
                <td className="py-space-md px-space-md font-medium text-on-surface">
                  {order.total}
                </td>
                <td className="py-space-md px-space-md">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${order.statusStyle}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${order.statusDot}`}
                    ></span>
                    {order.status}
                  </span>
                </td>
                <td className="py-space-md px-space-md text-right">
                  <button
                    className="inline-flex items-center gap-1 font-label-md text-label-md bg-primary text-on-primary px-3 py-1.5 rounded-lg hover:bg-primary-container transition-all shadow-sm active:scale-95"
                    type="button"
                  >
                    <span>View</span>
                    <span className="material-symbols-outlined text-[14px]">
                      visibility
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-space-md bg-surface-container-low/30 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          Showing <span className="font-medium text-on-surface">5</span> of{" "}
          <span className="font-medium text-on-surface">48</span> transactions
        </span>
        <div className="flex items-center gap-1">
          <button
            className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container flex items-center justify-center transition-colors shadow-sm disabled:opacity-50"
            disabled
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">
              chevron_left
            </span>
          </button>
          <span className="font-label-sm text-label-sm px-2 text-on-surface font-semibold">
            Page 1 of 10
          </span>
          <button
            className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container flex items-center justify-center transition-colors shadow-sm"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}