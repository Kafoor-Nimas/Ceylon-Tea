import { Outlet } from "react-router-dom";
import AdminSidebar from "../admin/components/AdminSidebar";
import AdminHeader from "../components/Admin/AdminHeader";

function AdminLayout() {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen">
      {/* Fixed Sidebar */}
      <AdminSidebar />

      <div className="pl-64 min-h-screen flex flex-col">
        {/* Fixed Header */}
        <AdminHeader />

        <main className="w-full pt-16 flex-1 px-gutter py-space-lg bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
