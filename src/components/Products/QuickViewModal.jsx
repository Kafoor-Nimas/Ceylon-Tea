export default function QuickViewModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-2xl transition-transform duration-300 scale-100">
        <button
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-secondary hover:text-primary"
          type="button"
          onClick={onClose}
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="inline-block px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-wider mb-2">
          {product.category}
        </div>

        <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
          {product.title}
        </h3>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1">
            <span
              className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="font-body-md text-body-md font-semibold text-on-surface">
              {product.rating}
            </span>
          </div>
          <span className="text-outline-variant">•</span>
          <span className="font-headline-sm text-headline-sm text-primary font-bold">
            {product.price}
          </span>
        </div>

        <p className="font-body-md text-body-md text-secondary mb-6 leading-relaxed">
          {product.desc}
        </p>

        <div className="space-y-3 pt-4 border-t border-outline-variant/30">
          <div className="flex items-center justify-between text-body-sm font-body-sm text-secondary">
            <span>Net Weight</span>
            <span className="font-medium text-on-surface">100g Loose Leaf</span>
          </div>
          <div className="flex items-center justify-between text-body-sm font-body-sm text-secondary">
            <span>Packaging</span>
            <span className="font-medium text-on-surface">Hermetically Sealed Tin</span>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            className="flex-1 py-3 px-6 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow-md transition-all"
            type="button"
            onClick={() => {
              onAddToCart(product.title);
              onClose();
            }}
          >
            Add To Order
          </button>
          <button
            className="py-3 px-5 rounded-xl bg-surface-container text-secondary hover:text-primary font-label-md text-label-md uppercase tracking-wider transition-colors"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}