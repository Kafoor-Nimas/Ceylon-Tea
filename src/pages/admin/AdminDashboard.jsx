import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminHeader from "../../components/Admin/AdminHeader";
import AdminStatsCards from "../../components/Admin/AdminStatsCards";
import AdminQuickActions from "../../components/Admin/AdminQuickActions";
import AdminRecentOrders from "../../components/Admin/AdminRecentOrders";

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
                <h1 className="font-headline-md text-5xl text-on-surface tracking-tight">
                  Dashboard
                </h1>
                <p className="font-body-md text-lg text-on-surface-variant">
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
          </div>
        </main>
      </div>
    </div>
  );
}
