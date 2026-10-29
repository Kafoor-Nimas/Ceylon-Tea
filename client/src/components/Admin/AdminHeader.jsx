export default function AdminHeader() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-surface-container-lowest border-b border-outline-variant/30 z-40 px-gutter flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-space-md">
        <button
          aria-label="Toggle Navigation"
          className="material-symbols-outlined text-on-surface-variant hover:text-on-surface lg:hidden focus:outline-none"
          type="button"
        >
          menu
        </button>

        <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
          Portal Management
        </span>
      </div>

      <div className="flex items-center gap-space-md">
        <div className="flex items-center gap-space-sm">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
          <span className="font-label-md text-label-md font-semibold text-on-surface">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
}
