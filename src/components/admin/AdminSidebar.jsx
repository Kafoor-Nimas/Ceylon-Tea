import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-primary text-on-primary z-50 flex flex-col justify-between shadow-[0_12px_32px_-6px_rgba(36,49,39,0.08)]">
      <div className="flex flex-col">
        {/* Brand Header */}
        <div className="h-16 flex items-center gap-space-sm px-gutter border-b border-primary-container/40">
          <img
            alt="Ceylon Tea Admin Brand Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1X-2Gfg009E24t3CPpyd9GliIEUa2ed9fU6C0nDxjA_rUndCWI_fFgLpfUSn8d-wFQ1wgl6fljF6uTtSXZdUPBO0CJ8k9jyqK80LNprEFEVc8n8Xn8XeNWJn6qM4Nn_1T00cOICaQCLe6C2b_G3o97mwRomdyOjz8FgCG4gZE2KZsxi5kBmqvyupUIkzalHAHZVeyvNXKcOc-L7YF_HwY6bFLSduL6TZds2xmX_MP24tUx0u0ziDUYG19WE"
          />
          <div className="flex flex-col">
            <span className="font-title-lg text-title-lg text-on-primary leading-none">
              Ceylon
            </span>
            <span className="font-label-sm text-label-sm tracking-widest uppercase text-tertiary-fixed-dim">
              Admin
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-space-xs px-space-sm mt-space-md">
          <Link
            className={`flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-colors ${
              isActive("/admin")
                ? "bg-primary-container text-on-primary font-medium"
                : "text-surface-variant hover:bg-primary-container/60 hover:text-on-primary"
            }`}
            to="/admin"
          >
            <span className="material-symbols-outlined text-[20px]">
              dashboard
            </span>
            <span>Dashboard</span>
          </Link>

          <Link
            className={`flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-colors ${
              isActive("/admin/products")
                ? "bg-primary-container text-on-primary font-medium"
                : "text-surface-variant hover:bg-primary-container/60 hover:text-on-primary"
            }`}
            to="/admin/products"
          >
            <span className="material-symbols-outlined text-[20px]">
              inventory_2
            </span>
            <span>Products</span>
          </Link>

          <Link
            className={`flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-colors ${
              isActive("/admin/orders")
                ? "bg-primary-container text-on-primary font-medium"
                : "text-surface-variant hover:bg-primary-container/60 hover:text-on-primary"
            }`}
            to="/admin/orders"
          >
            <span className="material-symbols-outlined text-[20px]">
              shopping_bag
            </span>
            <span>Orders</span>
          </Link>
        </nav>
      </div>

      {/* Footer / Exit Links */}
      <div className="p-space-sm border-t border-primary-container/40 flex flex-col gap-space-xs">
        <Link
          className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-surface-variant hover:bg-primary-container/60 hover:text-on-primary transition-colors"
          to="/"
        >
          <span className="material-symbols-outlined text-[20px]">
            open_in_new
          </span>
          <span>View Website</span>
        </Link>
        <Link
          className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-surface-variant hover:bg-primary-container/60 hover:text-on-primary transition-colors"
          to="/admin/login"
        >
          <span className="material-symbols-outlined text-[20px]">logout</span>
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}
