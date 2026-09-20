import { Link } from "react-router-dom";

export default function AdminQuickActions() {
  return (
    <div className="mb-space-lg">
      <div className="flex items-center justify-between mb-space-sm">
        <h2 className="font-title-lg text-2xl text-on-surface">
          Quick Actions
        </h2>
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
          Operations
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        {/* Action 1: Add Product */}
        <Link
          className="group bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex items-start justify-between"
          to="/admin/products/add"
        >
          <div className="flex gap-space-md items-center">
            <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[24px]">add</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-3xl text-on-surface leading-tight mb-0.5">
                Add Product
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Add a new tea product
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors mt-1">
            arrow_forward
          </span>
        </Link>

        {/* Action 2: Manage Products */}
        <Link
          className="group bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex items-start justify-between"
          to="/admin/products"
        >
          <div className="flex gap-space-md items-center">
            <div className="w-12 h-12 rounded-xl bg-surface-container text-primary-container flex items-center justify-center shadow-sm group-hover:bg-primary-container group-hover:text-on-primary transition-all group-hover:scale-105">
              <span className="material-symbols-outlined text-[24px]">
                inventory_2
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-3xl text-on-surface leading-tight mb-0.5">
                Manage Products
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                View and edit products
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors mt-1">
            arrow_forward
          </span>
        </Link>

        {/* Action 3: Manage Orders */}
        <Link
          className="group bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex items-start justify-between"
          to="/admin/orders"
        >
          <div className="flex gap-space-md items-center">
            <div className="w-12 h-12 rounded-xl bg-surface-container text-primary-container flex items-center justify-center shadow-sm group-hover:bg-primary-container group-hover:text-on-primary transition-all group-hover:scale-105">
              <span className="material-symbols-outlined text-[24px]">
                shopping_bag
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-3xl text-on-surface leading-tight mb-0.5">
                Manage Orders
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                View customer orders
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors mt-1">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
