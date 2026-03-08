import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

const CATEGORY_LABELS: Record<string, { ar: string; en: string }> = {
  espresso: { ar: "مشروبات الإسبريسو", en: "Espresso Drinks" },
  coldCoffee: { ar: "القهوة الباردة", en: "Cold Coffee" },
  chocolate: { ar: "الشوكولاتة", en: "Chocolate" },
  desserts: { ar: "الحلويات", en: "Desserts" },
  bakery: { ar: "المخبوزات", en: "Bakery" },
};

const CATEGORY_IMAGES: Record<string, string> = {
  espresso: "/images/categories/espresso.png",
  coldCoffee: "/images/categories/cold-coffee.png",
  chocolate: "/images/categories/chocolate.png",
  desserts: "/images/categories/desserts.png",
  bakery: "/images/categories/bakery.png",
};

const Menu: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const categories = Object.keys(CATEGORY_LABELS);

  return (
    <div
      className={`${
        isRTL ? "rtl" : "ltr"
      } min-h-screen bg-bala-cream dark:bg-bala-dark-bg`}
    >
      {/* Hero / Title */}
      <section className="pt-16 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-bala mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-bala-forest dark:text-bala-cream mb-4">
            {language === "ar" ? "المنيو" : "Our Menu"}
          </h1>

          <p className="font-body text-bala-brown dark:text-bala-cream/70 text-base sm:text-lg max-w-2xl mx-auto leading-8">
            {language === "ar"
              ? "اختاري الكاتيجوري المفضلة عندك واستمتعي بتصفح المنتجات."
              : "Choose your favorite category and explore the products."}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 sm:gap-x-8 lg:gap-x-10">
            {categories.map((categoryId) => {
              const label =
                language === "ar"
                  ? CATEGORY_LABELS[categoryId].ar
                  : CATEGORY_LABELS[categoryId].en;

              return (
                <Link
                  key={categoryId}
                  to={`/menu/${categoryId}`}
                  className="group flex flex-col items-center justify-start text-center"
                >
                  <div className="flex items-center justify-center min-h-[140px] sm:min-h-[170px] lg:min-h-[190px]">
                    <img
                      src={CATEGORY_IMAGES[categoryId]}
                      alt={label}
                      className="w-30 sm:w-36 lg:w-44 object-contain transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-2"
                      loading="lazy"
                    />
                  </div>

                  <h2 className="mt-3 font-body font-bold text-sm sm:text-base lg:text-lg text-bala-forest dark:text-bala-cream transition-colors duration-300 group-hover:text-bala-gold">
                    {label}
                  </h2>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;