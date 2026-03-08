import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { useCart } from "../hooks/useCart";
import { menuItems } from "../data/menuData";
import ProductCard from "../components/ProductCard";
import { ChevronLeft, Plus, Minus } from "lucide-react";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const isRTL = language === "ar";

  const product = menuItems.find((item) => item.id === id);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bala-cream dark:bg-bala-dark-bg">
        <div className={`text-center md:${isRTL ? "text-right" : "text-left"}`}>
          {" "}
          <p className="font-body text-lg text-bala-brown dark:text-bala-cream/70 mb-6">
            {language === "ar" ? "المنتج غير موجود" : "Product not found"}
          </p>
          <button
            onClick={() => navigate("/menu")}
            className="px-6 py-3 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold"
          >
            {language === "ar" ? "العودة للمنيو" : "Back to Menu"}
          </button>
        </div>
      </div>
    );
  }

  const relatedItems = menuItems
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);

  const handleAddToCart = () => {
    const name = language === "ar" ? product.nameAr : product.nameEn;

    addToCart({
      id: product.id,
      name,
      price: product.price,
      quantity,
      image: product.image,
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const name = language === "ar" ? product.nameAr : product.nameEn;
  const description =
    language === "ar" ? product.descriptionAr : product.descriptionEn;
  const ingredients =
    language === "ar" ? product.ingredientsAr : product.ingredientsEn;

  return (
    <div
      className={`${isRTL ? "rtl" : "ltr"} min-h-screen bg-bala-cream dark:bg-bala-dark-bg`}
    >
      {/* Back Button */}
      <div className="pt-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-bala mx-auto">
          <button
            onClick={() => navigate(-1)}
            className={`flex items-center gap-2 text-bala-forest dark:text-bala-cream hover:text-bala-gold transition-colors font-body font-bold ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <ChevronLeft size={20} className={isRTL ? "rotate-180" : ""} />
            {language === "ar" ? "العودة" : "Back"}
          </button>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-[24px] overflow-hidden bg-white dark:bg-bala-dark-surface shadow-xl border border-bala-brown/10 dark:border-bala-dark-green/20">
                <img
                  src={product.image}
                  alt={name}
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Details */}
            <div
              className={`text-center md:${isRTL ? "text-right" : "text-left"}`}
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-bala-forest dark:text-bala-cream mb-4 leading-tight">
                {name}
              </h1>

              <p className="text-4xl sm:text-5xl font-display font-bold text-bala-gold mb-6">
                {product.price} {language === "ar" ? "ج" : "EGP"}
              </p>

              <p className="font-body text-lg sm:text-xl leading-8 text-bala-brown dark:text-bala-cream/70 max-w-xl mx-auto mb-10">
                {description}
              </p>

              {/* Quantity */}
              <div className="mb-8 flex flex-col items-center">
                <p className="text-bala-brown dark:text-bala-cream/70 font-body text-sm uppercase tracking-widest mb-4">
                  {language === "ar" ? "الكمية" : "Quantity"}
                </p>

                <div
                  className={`flex items-center gap-4 bg-white dark:bg-bala-dark-surface rounded-bala p-2 shadow-md border border-bala-brown/10 dark:border-bala-dark-green/20 w-fit ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 rounded-full transition-colors"
                  >
                    <Minus
                      size={20}
                      className="text-bala-forest dark:text-bala-cream"
                    />
                  </button>

                  <span className="font-display text-2xl font-bold text-bala-forest dark:text-bala-cream w-12 text-center">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 rounded-full transition-colors"
                  >
                    <Plus
                      size={20}
                      className="text-bala-forest dark:text-bala-cream"
                    />
                  </button>
                </div>
              </div>

              {/* Ingredients */}
              {ingredients && (
                <div className="mb-10">
                  <p className="text-bala-brown dark:text-bala-cream/70 font-body text-sm uppercase tracking-widest mb-4">
                    {language === "ar" ? "المكونات" : "Ingredients"}
                  </p>

                  <ul className="space-y-3 font-body text-bala-brown dark:text-bala-cream/70 max-w-md mx-auto">
                    {ingredients.map((ing, idx) => (
                      <li
                        key={idx}
                        className={`flex items-center gap-3 justify-center ${isRTL ? "flex-row-reverse" : ""}`}
                      >
                        <span className="w-2 h-2 bg-bala-gold rounded-full shrink-0"></span>
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className={`w-full sm:w-auto min-w-[240px] px-10 py-4 rounded-bala font-body font-bold transition-all duration-300 text-lg shadow-lg hover:scale-[1.02] ${
                  addedToCart
                    ? "bg-bala-forest dark:bg-bala-dark-green text-white"
                    : "bg-bala-gold text-bala-forest hover:bg-bala-gold/90"
                }`}
              >
                {addedToCart
                  ? language === "ar"
                    ? "✓ تم الإضافة"
                    : "✓ Added"
                  : language === "ar"
                    ? "أضف للسلة"
                    : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Items */}
      {relatedItems.length > 0 && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-bala-brown/10 dark:border-bala-dark-green/20">
          <div className="max-w-bala mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-bala-forest dark:text-bala-cream mb-12 text-center">
              {language === "ar" ? "منتجات ذات صلة" : "Related Items"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {relatedItems.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
