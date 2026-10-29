import { Outlet } from "react-router-dom";

import AdminHeader from "../components/Admin/AdminHeader";
import AdminSidebar from "../components/Admin/AdminSidebar";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Fixed Sidebar */}
      <AdminSidebar />

      <div className="flex-1">
        {/* Fixed Header */}
        <AdminHeader />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
