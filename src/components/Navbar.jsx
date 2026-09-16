import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const getDesktopLinkStyle = ({ isActive }) =>
    `relative py-space-xs font-label-md text-label-md uppercase tracking-wider transition-colors ${
      isActive
        ? "text-primary-container font-semibold after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-tertiary-fixed-dim"
        : "text-on-surface-variant hover:text-primary"
    }`;

  const getMobileLinkStyle = ({ isActive }) =>
    `transition-colors py-1 ${
      isActive
        ? "font-semibold text-primary-container"
        : "text-on-surface-variant hover:text-primary"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest border-b border-outline-variant/40 shadow-[0_4px_20px_-4px_rgba(36,49,39,0.05)]">
      <div className="h-[76px] max-w-[1600px] mx-auto px-margin lg:px-margin-desktop flex items-center justify-between gap-gutter">
        {/* Brand Logo - Uses Link */}
        <div className="flex items-center gap-space-md">
          <Link to="/" className="flex items-center gap-space-sm group">
            <span className="font-title-lg text-3xl text-primary tracking-tight group-hover:text-primary-container transition-colors">
              Ceylon Tea
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-space-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={getDesktopLinkStyle}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <Link
            to="/products"
            className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-[0_4px_12px_rgba(47,93,58,0.2)] hover:shadow-[0_6px_16px_rgba(22,69,37,0.3)]"
          >
            Shop Collection
          </Link>

          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>

          <button
            aria-label="Toggle Navigation Menu"
            className="md:hidden flex items-center justify-center p-space-xs rounded text-on-surface hover:text-primary focus:outline-none"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-b border-outline-variant/40 px-margin py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={getMobileLinkStyle}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
