import { useState } from "react";
import ProductsHero from "../components/Products/ProductsHero";
import ProductCard from "../components/Products/ProductCard";
import BrewingRitualSection from "../components/Products/BrewingRitualSection";
import QuickViewModal from "../components/Products/QuickViewModal";

const PRODUCTS_DATA = [
  {
    id: 1,
    title: "Ceylon Premium Black Tea",
    price: "$18.00",
    category: "Black Tea",
    subCategory: "Dimbula Valley",
    rating: "4.9",
    reviews: 142,
    shortDesc:
      "Bold brisk character with delicate citrus notes, harvested at early sunrise.",
    desc: "Single origin rich, full-bodied orthodox black tea with lingering amber notes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCooP09PUc4RFewCsb6aKmSdiJ6346vvPJRLIxx5FmmfxfXa2KdY0y4C-u5soitgXaR6vedBv3-t_bgcchvyoqz5BygiD2rRkxBOjCdYeFItHri9s9bx_Qln83skefDPehOJjj5udY0j8TTuJKH6SGgphq_jtvS4MTkRNl5TxiiYEw-4B57NrYSZpzkf8QrfqNwJUmLkLaYKdB8BmafjU9FpbO37bcJGds-KJdi9JwU4dZoDRnoHsVVWg",
  },
  {
    id: 2,
    title: "Nuwara Eliya Highland Tea",
    price: "$22.00",
    category: "Black Tea",
    subCategory: "Botanicals",
    rating: "4.8",
    reviews: 98,
    shortDesc:
      "Floral, ethereal, and subtle champagne liquor from the highest elevation slopes.",
    desc: "The champagne of Ceylon teas, known for its pale golden liquor and subtle floral bouquet.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1W6Fj7gIMz58RQLlPQMfsUnIoKDi3-rgCQ1xf286hapFFQyKqswFfT0YYJRZ16i2hLIkBdmKuFTMAZDWqvAP5djOWn_5NM5HZpqvS-LBgMTWIJ4sMX4uf1mNYpDtW__hreUqO6pGP62epVYbBa6P75WqmxwVLLneIXFWJjpUKQPylJX8fM5nOFSUixTDl_NU3XrfZQVo3-xY3Oi_Qrv7P79Dn6A0zA_CShqTSlxETEvmZx7T9IVCPPw",
  },
  {
    id: 3,
    title: "Kandy Royal Tea",
    price: "$19.00",
    category: "Black Tea",
    subCategory: "Kandy Hills",
    rating: "4.7",
    reviews: 84,
    shortDesc:
      "Deep copper hue with a luscious malty finish, traditionally paired with milk.",
    desc: "Mid-grown historical cultivar providing exceptional strength, malty depth, and vibrant copper color.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfcxV3aNkkZy8iC_7RkOhgS-nwjs3I17DkoMeLJoOYPtcMlTg7mvZZdpqrGIcI41tqzRzZkj966ekljlEkYsSxVQ-xMMI26Qh-6oSrHFmJdJ4bFcJPvma3PAz4OwMARzQQDvrbCZGjqKr_mCqjcdiHwrmZIry4IPEJH-Y5kYugBiiGMtd3uoV6e2fTBEZhhCjcH7okOH9ef33UTydkk28E4WhE5vw6nvVKm3SObhsqwY4O8exJKEYTSw",
  },
  {
    id: 4,
    title: "Uva Highland Tea",
    price: "$21.00",
    category: "Black Tea",
    subCategory: "Uva Slopes",
    rating: "4.8",
    reviews: 115,
    shortDesc:
      "Pungent and crisp with signature mentholated notes crafted by ocean winds.",
    desc: "Renowned for its unique winter monsoon flavor characterized by sweet menthol and wintergreen nuance.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBr9c9X-NJIKmehJ1FqFq26yX9uP3ww8YSH6xJkLmBD5UdK80C4wxAmslz1lwWOpfNvKtdZnuWAVN2QZq9e56XUoA6ujtVJK490upjM0k0bIhej3Rw1yaZpi_6kscqK4dUSWPliwz1_DQjRAKiilLs8-BZvIP2vYG5cX3Jp-FR3bqfG8CwlyqkAAIJIhDwvQ2GKD5CeXKZzURybpx-fE8DX3M_GICKG4ydinNmlishMeP9ioaAOZEPP9w",
  },
  {
    id: 5,
    title: "Ceylon Green Tea",
    price: "$17.00",
    category: "Green Tea",
    subCategory: "Idalgashinna",
    rating: "4.6",
    reviews: 72,
    shortDesc:
      "Smooth vegetative body, subtly toasted nutty aroma with grassy sweetness.",
    desc: "Pan-steamed tender two leaves and a bud, featuring pure vegetative sweetness and low astringency.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcHgVb6nGn4X3IbqVOuIdTclBfgQQEGr6DJEPFTNf52nWDCcggmaKujVcStwkYil93Bp7d6qZDs-HIsTQeQk8btblQocWI8EwkjTH6zdM4bTWoS7ps99rLbgYYvWr6IDSdIPUGinK7zwOy1om6mDLDaeFt1IBnSS6T2ggwWHaqrbEwN-N_6oWle8dg4zuMYcxRcCr9KVUVnQZhdo-ve-Po86wPMVJiZwAWSZ4wavqPh6dCG4Cs22joMA",
  },
  {
    id: 6,
    title: "Jasmine Green Tea",
    price: "$20.00",
    category: "Green Tea",
    subCategory: "Botanical Blend",
    rating: "4.8",
    reviews: 91,
    shortDesc:
      "Scented with midnight jasmine petals for a soothing, fragrant ritual.",
    desc: "Night-blooming wild jasmine flowers layered continuously over gentle Ceylon green tea leaves.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-4m2zZnvkn0UoFR-Mc6zCZMPAGsQQUjBtXMpzZMLxmtJRl7DfT4A9TLrcgb8EqYZbkzGMZlWSOFmvERGVlCi4GQQUBDKXr8-5owuV0s2_NQah5MyMDKk2udX-9ZciXMDcy878R4PKe06C9iXfFLx-dzY3pNRqP6HcIeTOhQAYDDA6H0q9etsqeQAuvgW5w-e__Ww3h0D2tT0-AxdSnhP1WHjUHQGJQ4bbcRoOSBd-yi1wjGn7Ivej9Q",
  },
  {
    id: 7,
    title: "Ceylon Earl Grey",
    price: "$19.00",
    category: "Black Tea",
    subCategory: "Citrus Infused",
    rating: "4.7",
    reviews: 108,
    shortDesc:
      "Cold-pressed Mediterranean bergamot balanced over robust Ceylon black tea.",
    desc: "Bold Sri Lankan orange pekoe delicately infused with cold-pressed natural bergamot oil.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAk449p7PIKVnN1CVuVieTwhiYRA-O1D-lYvLGeTwI6SJWMphmdOFxMwxtmWqkcqjikqksAXRD5ILPgwAdzkYT4LD7T5fMOE4cjPFfVv99kr8-eo8VplsmiemUKT36F9Vs9NLFCuaMl_iUpW6EamL4f8XpIQl1q4cihCCnVD-nvZRF3UPW_x0Srz_KFL0CcWmhMBaYmoGc6PQbSY8jfEeB2tNi8SK4BPsjHRCvi7oZpYlj5Jt6txMU9Zw",
  },
  {
    id: 8,
    title: "Cinnamon Black Tea",
    price: "$18.00",
    category: "Black Tea",
    subCategory: "Alba Spice",
    rating: "4.9",
    reviews: 130,
    shortDesc:
      "Crafted with authentic Ceylon alba cinnamon quills for natural warming spice.",
    desc: "Harvested directly alongside organic Ceylon alba cinnamon gardens for a naturally sweet, spicy kick.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJvCvANrlNSAzhra7NKpX63IzAA_ZLh_RSkY6rYiEdHi6f1lAGPrLkYUnx1aXmwp6lUG5_0buFoTqgBucEapsPatsel4ROp6-IK7eFv1DKPZ_5n48pNrtPZQEP2Z3lik1ESW9Jas8i9aLUocPCLXQ_-j3VfMczqN9BqpSL9GrnRWuLj8eXY-l9wtps6wBag3H3z2vtysykdoMVMa-XuVa_Wm3mWMe9q6OeJ6evNhw6-fPGBIZDaHydRA",
  },
  {
    id: 9,
    title: "Ginger Herbal Tea",
    price: "$16.00",
    category: "Herbal Tea",
    subCategory: "Caffeine Free",
    rating: "4.6",
    reviews: 67,
    shortDesc:
      "Zesty dried ginger root pieces providing a lively, restorative natural brew.",
    desc: "Caffeine-free soothing ginger root infusion that enlivens digestion and provides holistic comfort.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVxbaHk4XehyNe0CjyGxmWiHtznOFoc7FKVR5gCBBkRDYGfwgySvtcyn3nTWSDAuCNrfeI63LwsOp5iCMFQ6IoU4DgGS570PEHYoLiTs3gYUfw803uRz2IIbVpOQT57zd9x8ymLSqrCE9X4XSClCpqOO9a_yuqvnBw5189YjW962Hi7BeTad4Klg3yegbKNA4tvzbaRXsi5XkaHf6wf5V79TCsfPwk4XFLcGY91HOum0Llyz_4v1Bl9Q",
  },
  {
    id: 10,
    title: "Lemongrass Herbal Tea",
    price: "$16.00",
    category: "Herbal Tea",
    subCategory: "Herbal Botanicals",
    rating: "4.7",
    reviews: 59,
    shortDesc:
      "Refreshing crisp citrus tones with mild cooling undertones for afternoon calm.",
    desc: "Clean, refreshing Sri Lankan wild lemongrass stalks creating a light citrus beverage ideal hot or iced.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6mHsH_mcu11Op4vnzemVzdXgpaTsRTF5zMq3qP9XVqq79RfGBTBtRTHL_jnwhvP0qrGEBGzSY40howhiZKDH6mzjoYBFvfiYiucD85pBwe_xlYcqNwdAmCqWzytVyqvnW2hPRpP0-b3PLd9KHoMWfXVq5Djq50_1XGITi0UQnh4GnHplb2FHk4pRPQRBt5WTixJ1D8dyIlwLP56LGykclDE4weefgt5NE9koSMEBmXl4332ZEmxeUFQ",
  },
  {
    id: 11,
    title: "Ceylon Tea Gift Box",
    price: "$35.00",
    category: "Gift Sets",
    subCategory: "Terroir Flight",
    rating: "4.9",
    reviews: 88,
    shortDesc:
      "Four signature single-origin estate varieties housed in an engraved timber box.",
    desc: "Handmade presentation box featuring our four top highland terroirs with wooden infuser accessories.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMFzVsmhUdtUtPb3-pz9oGfn7uENaoNIdH78lUgDrVyiWB4PWWbDYMntq5o-WAWuGNRiKEJwtWZh-fQhA5ERVK6ycPRpRkpI8vFOzq-mEotJ3j3wBhnqeArXNQjTBmVBtILlwIFH2d9Ts1bCQiYVT2v7IKVuTNdFYZLaSxdRrn6LaGwZoX440q8KQ_6Ch8Eb4wY6cFgoG4yjF4PkOQkHES3fq_LhOeGg2XehN83OtIH5yHQ7e4JR_SMg",
  },
  {
    id: 12,
    title: "Royal Ceylon Collection",
    price: "$45.00",
    category: "Gift Sets",
    subCategory: "Reserve Batch",
    rating: "5.0",
    reviews: 46,
    shortDesc:
      "Our rarest hand-picked silver tips accompanied by single-harvest orthodox tins.",
    desc: "The ultimate connoisseur package including rare handpicked silver tips, single flush golden pekoe, and artisanal tea strainer.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAd5ikiP_LY7kp246yG6BWgXRvMd2bbaXXFXOl4Nh3i78alOlD-9Pq_Kf-MJKR3rHAIhkJQecQRwloNvrDcSVpgKYXbSbJkuTY75rmK1GcvbTTiZ8JEJM1cv1wnUgegUXwhkFu_kZjQfbnu32K46w-w6bDR3hWpe2SYdcSYmX1LfE5gZzW9i5YE-tgCfuFFouGZXM90dQuDLvOON3QNPJ8SqZSMX_ET2OQqoZsa3ZLXoqiRKLxJqF6Ehg",
  },
];

const CATEGORIES = ["All", "Black Tea", "Green Tea", "Herbal Tea", "Gift Sets"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const filteredProducts = PRODUCTS_DATA.filter(
    (product) =>
      activeCategory === "All" || product.category === activeCategory,
  );

  const handleAddToCart = (productTitle) => {
    setToastMessage(`"${productTitle}" added to cart`);
    setTimeout(() => {
      setToastMessage("");
    }, 2600);
  };

  return (
    <div className="bg-background font-body-md text-body-md text-on-background min-h-screen">
      <main className="w-full pt-[76px] bg-background">
        <div className="flex flex-col w-full">
          <ProductsHero />

          {/* Filter Pills Bar & Sorting Navigation */}
          <section className=" z-30 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30 py-4 shadow-sm">
            <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`whitespace-nowrap px-5 py-2 rounded-full font-label-md text-label-md uppercase tracking-wider transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-primary-container text-on-primary shadow-sm"
                        : "bg-surface-container text-secondary hover:bg-surface-container-high"
                    }`}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                <span className="text-primary font-semibold">
                  {filteredProducts.length} Selected Offerings
                </span>
                <div className="h-4 w-px bg-outline-variant/40"></div>
                <div className="flex items-center gap-1.5 cursor-pointer hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    tune
                  </span>
                  <span>Sort By: Terroir</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4-Column Responsive Catalog Grid */}
          <section className="py-12 lg:py-16">
            <div className="max-w-[1600px] mx-auto px-margin lg:px-margin-desktop">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                      onQuickView={setSelectedProduct}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <span className="material-symbols-outlined text-outline text-5xl mb-2">
                    filter_vintage
                  </span>
                  <p className="font-title-lg text-title-lg text-secondary">
                    No teas found in this category.
                  </p>
                </div>
              )}
            </div>
          </section>

          <BrewingRitualSection />
        </div>
      </main>

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        onAddToCart={handleAddToCart}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Toast Notification */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-primary text-on-primary px-5 py-3 rounded-xl shadow-xl transform transition-all duration-300 pointer-events-none ${
          toastMessage
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        <span className="material-symbols-outlined text-[20px] text-primary-fixed">
          check_circle
        </span>
        <span className="font-body-sm text-body-sm">{toastMessage}</span>
      </div>
    </div>
  );
}
