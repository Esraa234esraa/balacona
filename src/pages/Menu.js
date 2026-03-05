import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { menuItems } from "../data/menuData";
const Menu = () => {
    const { language } = useLanguage();
    const isRTL = language === "ar";
    const categories = useMemo(() => [
        { id: "espresso", arLabel: "مشروبات الإسبريسو", enLabel: "Espresso Drinks" },
        { id: "coldCoffee", arLabel: "القهوة الباردة", enLabel: "Cold Coffee" },
        { id: "chocolate", arLabel: "الشوكولاتة", enLabel: "Chocolate" },
        { id: "desserts", arLabel: "الحلويات", enLabel: "Desserts" },
        { id: "bakery", arLabel: "المخبوزات", enLabel: "Bakery" },
    ], []);
    const categoryMeta = useMemo(() => {
        const byCategory = new Map();
        for (const cat of categories)
            byCategory.set(cat.id, { image: undefined, count: 0 });
        for (const item of menuItems) {
            const current = byCategory.get(item.category);
            if (!current)
                continue;
            current.count += 1;
            if (!current.image)
                current.image = item.image;
            byCategory.set(item.category, current);
        }
        return byCategory;
    }, [categories]);
    return (_jsxs("div", { className: `${isRTL ? "rtl" : "ltr"} min-h-screen bg-bala-cream dark:bg-bala-dark-bg`, children: [_jsx("section", { className: "pt-16 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-bala mx-auto", children: [_jsx("h1", { className: "font-display text-4xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-4 text-center", children: language === "ar" ? "المنيو" : "Menu" }), _jsx("p", { className: "font-body text-base sm:text-lg text-bala-brown dark:text-bala-cream/70 text-center max-w-2xl mx-auto", children: language === "ar" ? "اختاري الكاتيجوري علشان تشوفي المنتجات" : "Pick a category to explore items" })] }) }), _jsx("section", { className: "pb-20 px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "max-w-bala mx-auto", children: _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6", children: categories.map((cat) => {
                            const meta = categoryMeta.get(cat.id);
                            const title = language === "ar" ? cat.arLabel : cat.enLabel;
                            const countLabel = language === "ar" ? `${meta?.count ?? 0} عنصر` : `${meta?.count ?? 0} items`;
                            return (_jsx(Link, { to: `/menu/${cat.id}`, className: "\n                    group block\n                    rounded-3xl\n                    bg-white dark:bg-bala-dark-surface\n                    border border-bala-brown/10 dark:border-bala-dark-green/20\n                    shadow-bala-light dark:shadow-bala-dark\n                    transition-all duration-300\n                    hover:-translate-y-1 hover:shadow-bala-hover\n                    active:scale-[0.99]\n                  ", children: _jsx("div", { className: "p-3 sm:p-4", children: _jsxs("div", { className: "relative h-36 sm:h-44 lg:h-52 rounded-2xl overflow-hidden bg-bala-cream dark:bg-bala-dark-bg", children: [meta?.image ? (_jsx("img", { src: meta.image, alt: title, className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" })) : (_jsx("div", { className: "w-full h-full bg-gradient-to-br from-bala-gold/25 to-bala-forest/10" })), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" }), _jsx("span", { className: `
                          absolute top-2 ${isRTL ? "left-2" : "right-2"}
                          px-2.5 py-1 rounded-full
                          bg-bala-gold text-bala-brown
                          text-[11px] font-extrabold
                        `, style: { direction: "ltr" }, children: countLabel }), _jsx("div", { className: "absolute inset-x-0 bottom-0 p-3 sm:p-4", children: _jsx("h3", { className: "font-display text-sm sm:text-base lg:text-lg font-extrabold text-center text-white drop-shadow", children: title }) })] }) }) }, cat.id));
                        }) }) }) })] }));
};
export default Menu;
