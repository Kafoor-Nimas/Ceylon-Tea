export default function ProductCard({ product, onQuickView, onAddToCart }) {
  return (
    <div className="tea-card group flex flex-col bg-surface-container-lowest rounded-xl p-3 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl">
      <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-surface-container relative mb-4">
        <img
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={product.image}
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        <button
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-9 h-9 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary"
          type="button"
          onClick={() => onQuickView(product)}
        >
          <span className="material-symbols-outlined text-[20px]">visibility</span>
        </button>
      </div>

      <div className="flex flex-col flex-grow px-1">
        <div className="flex items-center justify-between mb-1.5 gap-3">
          <div className="flex items-center gap-1 text-tertiary-container">
            <span
              className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="font-label-sm text-label-sm font-semibold text-on-surface">
              {product.rating}
            </span>
            <span className="text-secondary font-label-sm text-label-sm">
              ({product.reviews})
            </span>
          </div>
          <span className="text-label-sm font-label-sm uppercase tracking-wider text-secondary line-clamp-1">
            {product.subCategory}
          </span>
        </div>

        <h3 className="font-title-lg text-title-lg text-primary group-hover:text-primary-container transition-colors mb-1 line-clamp-1">
          {product.title}
        </h3>
        <p className="font-body-sm text-body-sm text-secondary line-clamp-2 mb-4">
          {product.shortDesc}
        </p>

        <div className="mt-auto pt-3 border-t border-outline-variant/20 flex items-center justify-between">
          <span className="font-headline-sm text-xl text-primary">
            {product.price}
          </span>
          <button
            className="px-4 py-2 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary transition-all font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1.5"
            type="button"
            onClick={() => onAddToCart(product.title)}
          >
            <span>Add</span>
            <span className="material-symbols-outlined text-[16px]">local_mall</span>
          </button>
        </div>
      </div>
    </div>
  );
}