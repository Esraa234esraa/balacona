import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useCart } from "../hooks/useCart";
import { offersData } from "../data/offersData";
import { menuItems } from "../data/menuData";
import ProductCard from "../components/ProductCard";

const OfferDetails: React.FC = () => {
  const { offerId } = useParams<{ offerId: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const isRTL = language === "ar";

  const [added, setAdded] = useState(false);

  const offer = offersData.find((o) => o.id === Number(offerId));

  const includedProducts = useMemo(
    () =>
      offer
        ? offer.items
            .map((item) => {
              const product = menuItems.find((p) => p.id === item.productId);
              if (!product) return null;
              return { product, quantity: item.quantity };
            })
            .filter(Boolean) as { product: (typeof menuItems)[number]; quantity: number }[]
        : [],
    [offer]
  );

  if (!offer) {
    return (
      <div
        className={`${
          isRTL ? "rtl" : "ltr"
        } min-h-screen bg-bala-cream dark:bg-bala-dark-bg flex items-center justify-center px-4`}
      >
        <div className="text-center">
          <p className="font-body text-lg text-bala-brown dark:text-bala-cream/70 mb-6">
            {language === "ar" ? "العرض غير موجود" : "Offer not found"}
          </p>
          <Link
            to="/offers"
            className="px-6 py-3 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold"
          >
            {language === "ar" ? "العودة للعروض" : "Back to offers"}
          </Link>
        </div>
      </div>
    );
  }

  const handleAddOfferToCart = () => {
    includedProducts.forEach(({ product, quantity }) => {
      const name = language === "ar" ? product.nameAr : product.nameEn;
      addToCart({
        id: `${product.id}-offer-${offer.id}`,
        name,
        price: product.price,
        quantity,
        size: "M",
        image: product.image,
      });
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const offerLabel =
    offer.type === "percentage"
      ? language === "ar"
        ? `خصم ${offer.value}%`
        : `${offer.value}% off`
      : offer.type === "fixed"
      ? language === "ar"
        ? `خصم ${offer.value} ج`
        : `${offer.value} SAR off`
      : language === "ar"
      ? `اشتري واحصل على ${offer.value} مجانًا`
      : `Buy & get ${offer.value} free`;

  return (
    <div
      className={`${
        isRTL ? "rtl" : "ltr"
      } min-h-screen bg-bala-cream dark:bg-bala-dark-bg`}
    >
      <div className="pt-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-bala mx-auto">
          <button
            onClick={() => navigate(-1)}
            className={`flex items-center gap-2 text-bala-forest dark:text-bala-cream hover:text-bala-gold transition-colors font-body font-bold ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <ChevronLeft size={20} className={isRTL ? "rotate-180" : ""} />
            {language === "ar" ? "العودة" : "Back"}
          </button>
        </div>
      </div>

      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-bala mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <div className="rounded-bala overflow-hidden shadow-bala-hover bg-bala-cream dark:bg-bala-dark-surface">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-bala-forest dark:text-bala-cream mb-4">
                {offer.title}
              </h1>
              <p className="font-body text-bala-brown dark:text-bala-cream/70 mb-4 text-lg">
                {offerLabel}
              </p>
              <p className="font-body text-sm text-bala-brown/80 dark:text-bala-cream/70 mb-8">
                {language === "ar"
                  ? "هذا العرض يشمل المنتجات التالية. سيتم إضافة كل العناصر للسلة معًا."
                  : "This offer includes the items below. All products will be added to your cart together."}
              </p>

              <button
                onClick={handleAddOfferToCart}
                className={`w-full py-4 rounded-bala font-body font-bold text-lg transition-all ${
                  added
                    ? "bg-bala-forest dark:bg-bala-dark-green text-white"
                    : "bg-bala-gold text-bala-forest hover:bg-bala-gold/90"
                }`}
              >
                {added
                  ? language === "ar"
                    ? "✓ تمت إضافة العرض"
                    : "✓ Offer added"
                  : language === "ar"
                  ? "أضف العرض للسلة"
                  : "Add offer to cart"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-bala mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-bala-forest dark:text-bala-cream mb-8 text-center">
            {language === "ar"
              ? "المنتجات داخل العرض"
              : "Products included in this offer"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {includedProducts.map(({ product, quantity }) => (
              <div key={product.id}>
                <ProductCard item={product} />
                <p className="mt-2 text-center font-body text-sm text-bala-brown dark:text-bala-cream/70">
                  {language === "ar"
                    ? `الكمية في العرض: ${quantity}`
                    : `Quantity in offer: ${quantity}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferDetails;

