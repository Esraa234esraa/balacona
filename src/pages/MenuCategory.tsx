import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Filter, Search } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import ProductCard from "../components/ProductCard";
import { menuItems } from "../data/menuData";

type SortBy = "popular" | "new" | "price";

const CATEGORY_LABELS: Record<string, { ar: string; en: string }> = {
  espresso: { ar: "مشروبات الإسبريسو", en: "Espresso Drinks" },
  coldCoffee: { ar: "القهوة الباردة", en: "Cold Coffee" },
  chocolate: { ar: "الشوكولاتة", en: "Chocolate" },
  desserts: { ar: "الحلويات", en: "Desserts" },
  bakery: { ar: "المخبوزات", en: "Bakery" },
};

const MenuCategory: React.FC = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams<{ categoryId: string }>();
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortBy>("popular");

  const categoryLabel =
    categoryId && CATEGORY_LABELS[categoryId]
      ? language === "ar"
        ? CATEGORY_LABELS[categoryId].ar
        : CATEGORY_LABELS[categoryId].en
      : language === "ar"
      ? "كاتيجوري"
      : "Category";

  const filteredItems = useMemo(() => {
    const cat = categoryId;
    if (!cat || !CATEGORY_LABELS[cat]) return [];

    let filtered = menuItems.filter((item) => item.category === cat);

    if (searchTerm.trim()) {
      const q = searchTerm.trim().toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.nameAr.includes(searchTerm.trim()) ||
          item.nameEn.toLowerCase().includes(q)
      );
    }

    const sorted = [...filtered];
    if (sortBy === "popular") {
      sorted.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    } else if (sortBy === "new") {
      sorted.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
    } else if (sortBy === "price") {
      sorted.sort((a, b) => a.price - b.price);
    }

    return sorted;
  }, [categoryId, searchTerm, sortBy]);

  if (!categoryId || !CATEGORY_LABELS[categoryId]) {
    return (
      <div
        className={`${
          isRTL ? "rtl" : "ltr"
        } min-h-screen bg-bala-cream dark:bg-bala-dark-bg flex items-center justify-center px-4`}
      >
        <div className="max-w-md w-full bg-white dark:bg-bala-dark-surface rounded-bala p-8 shadow-bala-light dark:shadow-bala-dark text-center">
          <p className="font-body text-bala-brown dark:text-bala-cream/70 mb-6">
            {language === "ar" ? "الكاتيجوري غير موجودة" : "Category not found"}
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center justify-center px-6 py-3 rounded-bala bg-bala-gold text-bala-forest font-extrabold hover:opacity-90 transition"
          >
            {language === "ar" ? "الرجوع للمنيو" : "Back to menu"}
          </Link>
        </div>
      </div>
    );
  }

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

      <section className="pt-8 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-bala mx-auto">
          <div
            className={`text-sm font-body text-bala-brown/70 dark:text-bala-cream/60 mb-3 ${
              isRTL ? "text-right" : ""
            }`}
          >
            <Link to="/menu" className="hover:text-bala-gold transition-colors">
              {language === "ar" ? "المنيو" : "Menu"}
            </Link>{" "}
            <span className="opacity-60">/</span> {categoryLabel}
          </div>

          <div className="text-center">
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-bala-forest dark:text-bala-cream">
              {categoryLabel}
            </h1>
            <p className="font-body text-bala-brown dark:text-bala-cream/70 mt-2">
              {language === "ar"
                ? `عدد العناصر: ${filteredItems.length}`
                : `Items: ${filteredItems.length}`}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-bala mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${isRTL ? "text-right" : ""}`}>
            <div className="md:col-span-2 relative">
              <Search
                size={20}
                className={`absolute top-1/2 -translate-y-1/2 text-bala-brown dark:text-bala-cream/50 ${
                  isRTL ? "right-4" : "left-4"
                }`}
              />
              <input
                type="text"
                placeholder={language === "ar" ? "ابحث داخل الكاتيجوري" : "Search in category"}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full py-3 px-12 bg-white dark:bg-bala-dark-surface rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold focus:ring-2 focus:ring-bala-gold/20 ${
                  isRTL ? "pr-12" : "pl-12"
                }`}
              />
            </div>

            <div
              className={`flex items-center gap-3 bg-white dark:bg-bala-dark-surface rounded-bala px-4 border-2 border-bala-brown/10 dark:border-bala-dark-green/20 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <Filter size={18} className="text-bala-brown dark:text-bala-cream/70" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
                className="w-full bg-transparent py-3 font-body focus:outline-none text-bala-forest dark:text-bala-cream"
              >
                <option value="popular">{language === "ar" ? "الأكثر شهرة" : "Most popular"}</option>
                <option value="new">{language === "ar" ? "الأحدث" : "Newest"}</option>
                <option value="price">{language === "ar" ? "حسب السعر" : "Price"}</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-bala mx-auto">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${(idx % 4) * 80}ms` }}
                >
                  <ProductCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-body text-lg text-bala-brown dark:text-bala-cream/70">
                {language === "ar" ? "لم نجد نتائج" : "No items found"}
              </p>
              <Link
                to="/menu"
                className="inline-flex mt-6 px-6 py-3 rounded-bala bg-bala-gold text-bala-forest font-extrabold hover:opacity-90 transition"
              >
                {language === "ar" ? "اختيار كاتيجوري أخرى" : "Pick another category"}
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MenuCategory;

