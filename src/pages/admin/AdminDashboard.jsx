import { Link } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import AdminStatsCards from "../components/AdminStatsCards";
import AdminQuickActions from "../components/AdminQuickActions";
import AdminRecentOrders from "../components/AdminRecentOrders";

export default function AdminDashboard() {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen">
      <AdminSidebar />
      <div className="pl-64 min-h-screen flex flex-col">
        <AdminHeader />

        <main className="w-full pt-16 flex-1 px-gutter py-space-lg bg-background">
          <div className="flex flex-col w-full">
            {/* Header Title & Subtitle Banner */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
              <div>
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                    Estate Management Suite
                  </span>
                </div>
                <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                  Dashboard
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Manage your Ceylon Tea store.
                </p>
              </div>

              <div className="flex items-center gap-space-sm bg-surface-container-lowest px-space-md py-space-sm rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary-container text-[20px]">
                  calendar_today
                </span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Live Harvest Season
                </span>
                <span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-medium">
                  Active
                </span>
              </div>
            </div>

            {/* Dashboard Sections */}
            <AdminStatsCards />
            <AdminQuickActions />
            <AdminRecentOrders />

            {/* Bottom Log & Health Status Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
              <div className="lg:col-span-2 bg-primary text-on-primary p-space-lg rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-primary-container/40 pointer-events-none"></div>
                <div className="flex flex-col relative z-10">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed-dim mb-1">
                    Tea Estate Log
                  </span>
                  <h3 className="font-title-lg text-title-lg text-on-primary mb-1">
                    Harvest &amp; Dispatch Center
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-primary/80 max-w-md">
                    Batch #LK-2024-Nuwara is currently resting for packing.
                    Global express couriers depart daily at 16:00 IST.
                  </p>
                </div>
                <div className="relative z-10 shrink-0">
                  <Link
                    className="inline-flex items-center gap-2 bg-surface-container-lowest text-primary font-label-md text-label-md px-space-md py-space-sm rounded-xl font-semibold shadow-sm hover:bg-surface-variant transition-colors"
                    to="/admin/products"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      warehouse
                    </span>
                    <span>Review Inventory</span>
                  </Link>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold">
                    Live System Health
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
                </div>
                <div className="space-y-2 py-1">
                  <div className="flex justify-between text-body-sm font-body-sm">
                    <span className="text-on-surface-variant">
                      Payment Gateway
                    </span>
                    <span className="font-medium text-primary">
                      Connected (Stripe)
                    </span>
                  </div>
                  <div className="flex justify-between text-body-sm font-body-sm">
                    <span className="text-on-surface-variant">
                      Storefront Cache
                    </span>
                    <span className="font-medium text-on-surface">
                      Operational (99.9%)
                    </span>
                  </div>
                  <div className="flex justify-between text-body-sm font-body-sm">
                    <span className="text-on-surface-variant">
                      Air Express API
                    </span>
                    <span className="font-medium text-primary">Synced</span>
                  </div>
                </div>
                <div className="pt-2 border-t-0 flex items-center justify-between text-outline text-label-sm font-label-sm">
                  <span>Ceylon Tea Storefront v2.4</span>
                  <span className="text-secondary font-medium">Est. 1985</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
