import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { menuItems } from "../data/menuData";

const Menu: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const categories = useMemo(
    () => [
      { id: "espresso", arLabel: "مشروبات الإسبريسو", enLabel: "Espresso Drinks" },
      { id: "coldCoffee", arLabel: "القهوة الباردة", enLabel: "Cold Coffee" },
      { id: "chocolate", arLabel: "الشوكولاتة", enLabel: "Chocolate" },
      { id: "desserts", arLabel: "الحلويات", enLabel: "Desserts" },
      { id: "bakery", arLabel: "المخبوزات", enLabel: "Bakery" },
    ],
    [],
  );

  const categoryMeta = useMemo(() => {
    const byCategory = new Map<string, { image?: string; count: number }>();
    for (const cat of categories) byCategory.set(cat.id, { image: undefined, count: 0 });

    for (const item of menuItems) {
      const current = byCategory.get(item.category);
      if (!current) continue;
      current.count += 1;
      if (!current.image) current.image = item.image;
      byCategory.set(item.category, current);
    }

    return byCategory;
  }, [categories]);

  return (
    <div className={`${isRTL ? "rtl" : "ltr"} min-h-screen bg-bala-cream dark:bg-bala-dark-bg`}>
      <section className="pt-16 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-bala mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-4 text-center">
            {language === "ar" ? "المنيو" : "Menu"}
          </h1>
          <p className="font-body text-base sm:text-lg text-bala-brown dark:text-bala-cream/70 text-center max-w-2xl mx-auto">
            {language === "ar" ? "اختاري الكاتيجوري علشان تشوفي المنتجات" : "Pick a category to explore items"}
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-bala mx-auto">
          {/* ✅  فون: 2  | تابلت: 3  | لاب: 4 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((cat) => {
              const meta = categoryMeta.get(cat.id);
              const title = language === "ar" ? cat.arLabel : cat.enLabel;
              const countLabel = language === "ar" ? `${meta?.count ?? 0} عنصر` : `${meta?.count ?? 0} items`;

              return (
                <Link
                  key={cat.id}
                  to={`/menu/${cat.id}`}
                  className="
                    group block
                    rounded-3xl
                    bg-white dark:bg-bala-dark-surface
                    border border-bala-brown/10 dark:border-bala-dark-green/20
                    shadow-bala-light dark:shadow-bala-dark
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-bala-hover
                    active:scale-[0.99]
                  "
                >
                  <div className="p-3 sm:p-4">
                    <div className="relative h-36 sm:h-44 lg:h-52 rounded-2xl overflow-hidden bg-bala-cream dark:bg-bala-dark-bg">
                      {meta?.image ? (
                        <img
                          src={meta.image}
                          alt={title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-bala-gold/25 to-bala-forest/10" />
                      )}

                      {/* overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                      {/* badge count */}
                      <span
                        className={`
                          absolute top-2 ${isRTL ? "left-2" : "right-2"}
                          px-2.5 py-1 rounded-full
                          bg-bala-gold text-bala-brown
                          text-[11px] font-extrabold
                        `}
                        style={{ direction: "ltr" }}
                      >
                        {countLabel}
                      </span>

                      {/* title on image (covers top section text) */}
                      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                        <h3 className="font-display text-sm sm:text-base lg:text-lg font-extrabold text-center text-white drop-shadow">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </div>
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