export default function AdminStatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">
      {/* Stat 1: Total Products */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md group flex flex-col justify-between">
        <div className="flex items-center justify-between mb-space-sm">
          <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold">
            Total Products
          </span>
          <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
            <span className="material-symbols-outlined text-[22px]">
              inventory_2
            </span>
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-headline-lg text-5xl text-on-surface leading-none">
            12
          </span>
          <span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center">
            <span className="material-symbols-outlined text-[16px]">eco</span>
            Single Estate
          </span>
        </div>
        <div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant">
          <span className="font-body-sm text-body-sm text-outline">
            Active SKUs
          </span>
          <span className="font-label-sm text-label-sm font-medium text-primary">
            100% In Stock
          </span>
        </div>
      </div>

      {/* Stat 2: Total Orders */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md group flex flex-col justify-between">
        <div className="flex items-center justify-between mb-space-sm">
          <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold">
            Total Orders
          </span>
          <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
            <span className="material-symbols-outlined text-[22px]">
              shopping_bag
            </span>
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-headline-lg text-5xl text-on-surface leading-none">
            48
          </span>
          <span className="font-label-sm text-label-sm text-primary font-semibold flex items-center">
            <span className="material-symbols-outlined text-[16px]">
              trending_up
            </span>
            +14% mo.
          </span>
        </div>
        <div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant">
          <span className="font-body-sm text-body-sm text-outline">
            Fulfillment Rate
          </span>
          <span className="font-label-sm text-label-sm font-medium text-on-surface">
            94.2%
          </span>
        </div>
      </div>

      {/* Stat 3: Pending Orders */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md group flex flex-col justify-between">
        <div className="flex items-center justify-between mb-space-sm">
          <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold">
            Pending Orders
          </span>
          <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
            <span className="material-symbols-outlined text-[22px]">
              pending_actions
            </span>
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-headline-lg text-5xl text-on-surface leading-none">
            8
          </span>
          <span className="font-label-sm text-label-sm bg-tertiary-fixed text-tertiary px-2 py-0.5 rounded-full font-semibold">
            Requires Action
          </span>
        </div>
        <div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant">
          <span className="font-body-sm text-body-sm text-outline">
            Priority Dispatch
          </span>
          <span className="font-label-sm text-label-sm font-medium text-tertiary">
            3 Rush
          </span>
        </div>
      </div>

      {/* Stat 4: Total Revenue */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:shadow-md group flex flex-col justify-between">
        <div className="flex items-center justify-between mb-space-sm">
          <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold">
            Total Revenue
          </span>
          <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
            <span className="material-symbols-outlined text-[22px]">
              payments
            </span>
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-headline-lg text-5xl text-on-surface leading-none">
            $4,280
          </span>
          <span className="font-label-sm text-label-sm text-secondary font-semibold">
            USD
          </span>
        </div>
        <div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant">
          <span className="font-body-sm text-body-sm text-outline">
            Avg. Order Value
          </span>
          <span className="font-label-sm text-label-sm font-medium text-on-surface">
            $89.16
          </span>
        </div>
      </div>
    </div>
  );
}
