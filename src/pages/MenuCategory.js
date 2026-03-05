import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Filter, Search } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import ProductCard from "../components/ProductCard";
import { menuItems } from "../data/menuData";
const CATEGORY_LABELS = {
    espresso: { ar: "مشروبات الإسبريسو", en: "Espresso Drinks" },
    coldCoffee: { ar: "القهوة الباردة", en: "Cold Coffee" },
    chocolate: { ar: "الشوكولاتة", en: "Chocolate" },
    desserts: { ar: "الحلويات", en: "Desserts" },
    bakery: { ar: "المخبوزات", en: "Bakery" },
};
const MenuCategory = () => {
    const navigate = useNavigate();
    const { categoryId } = useParams();
    const { language } = useLanguage();
    const isRTL = language === "ar";
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("popular");
    const categoryLabel = categoryId && CATEGORY_LABELS[categoryId]
        ? language === "ar"
            ? CATEGORY_LABELS[categoryId].ar
            : CATEGORY_LABELS[categoryId].en
        : language === "ar"
            ? "كاتيجوري"
            : "Category";
    const filteredItems = useMemo(() => {
        const cat = categoryId;
        if (!cat || !CATEGORY_LABELS[cat])
            return [];
        let filtered = menuItems.filter((item) => item.category === cat);
        if (searchTerm.trim()) {
            const q = searchTerm.trim().toLowerCase();
            filtered = filtered.filter((item) => item.nameAr.includes(searchTerm.trim()) ||
                item.nameEn.toLowerCase().includes(q));
        }
        const sorted = [...filtered];
        if (sortBy === "popular") {
            sorted.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        }
        else if (sortBy === "new") {
            sorted.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        }
        else if (sortBy === "price") {
            sorted.sort((a, b) => a.price - b.price);
        }
        return sorted;
    }, [categoryId, searchTerm, sortBy]);
    if (!categoryId || !CATEGORY_LABELS[categoryId]) {
        return (_jsx("div", { className: `${isRTL ? "rtl" : "ltr"} min-h-screen bg-bala-cream dark:bg-bala-dark-bg flex items-center justify-center px-4`, children: _jsxs("div", { className: "max-w-md w-full bg-white dark:bg-bala-dark-surface rounded-bala p-8 shadow-bala-light dark:shadow-bala-dark text-center", children: [_jsx("p", { className: "font-body text-bala-brown dark:text-bala-cream/70 mb-6", children: language === "ar" ? "الكاتيجوري غير موجودة" : "Category not found" }), _jsx(Link, { to: "/menu", className: "inline-flex items-center justify-center px-6 py-3 rounded-bala bg-bala-gold text-bala-forest font-extrabold hover:opacity-90 transition", children: language === "ar" ? "الرجوع للمنيو" : "Back to menu" })] }) }));
    }
    return (_jsxs("div", { className: `${isRTL ? "rtl" : "ltr"} min-h-screen bg-bala-cream dark:bg-bala-dark-bg`, children: [_jsx("div", { className: "pt-6 px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "max-w-bala mx-auto", children: _jsxs("button", { onClick: () => navigate(-1), className: `flex items-center gap-2 text-bala-forest dark:text-bala-cream hover:text-bala-gold transition-colors font-body font-bold ${isRTL ? "flex-row-reverse" : ""}`, children: [_jsx(ChevronLeft, { size: 20, className: isRTL ? "rotate-180" : "" }), language === "ar" ? "العودة" : "Back"] }) }) }), _jsx("section", { className: "pt-8 pb-10 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-bala mx-auto", children: [_jsxs("div", { className: `text-sm font-body text-bala-brown/70 dark:text-bala-cream/60 mb-3 ${isRTL ? "text-right" : ""}`, children: [_jsx(Link, { to: "/menu", className: "hover:text-bala-gold transition-colors", children: language === "ar" ? "المنيو" : "Menu" }), " ", _jsx("span", { className: "opacity-60", children: "/" }), " ", categoryLabel] }), _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "font-display text-3xl sm:text-4xl font-extrabold text-bala-forest dark:text-bala-cream", children: categoryLabel }), _jsx("p", { className: "font-body text-bala-brown dark:text-bala-cream/70 mt-2", children: language === "ar"
                                        ? `عدد العناصر: ${filteredItems.length}`
                                        : `Items: ${filteredItems.length}` })] })] }) }), _jsx("section", { className: "px-4 sm:px-6 lg:px-8 pb-6", children: _jsx("div", { className: "max-w-bala mx-auto", children: _jsxs("div", { className: `grid grid-cols-1 md:grid-cols-3 gap-4 ${isRTL ? "text-right" : ""}`, children: [_jsxs("div", { className: "md:col-span-2 relative", children: [_jsx(Search, { size: 20, className: `absolute top-1/2 -translate-y-1/2 text-bala-brown dark:text-bala-cream/50 ${isRTL ? "right-4" : "left-4"}` }), _jsx("input", { type: "text", placeholder: language === "ar" ? "ابحث داخل الكاتيجوري" : "Search in category", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: `w-full py-3 px-12 bg-white dark:bg-bala-dark-surface rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold focus:ring-2 focus:ring-bala-gold/20 ${isRTL ? "pr-12" : "pl-12"}` })] }), _jsxs("div", { className: `flex items-center gap-3 bg-white dark:bg-bala-dark-surface rounded-bala px-4 border-2 border-bala-brown/10 dark:border-bala-dark-green/20 ${isRTL ? "flex-row-reverse" : ""}`, children: [_jsx(Filter, { size: 18, className: "text-bala-brown dark:text-bala-cream/70" }), _jsxs("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: "w-full bg-transparent py-3 font-body focus:outline-none text-bala-forest dark:text-bala-cream", children: [_jsx("option", { value: "popular", children: language === "ar" ? "الأكثر شهرة" : "Most popular" }), _jsx("option", { value: "new", children: language === "ar" ? "الأحدث" : "Newest" }), _jsx("option", { value: "price", children: language === "ar" ? "حسب السعر" : "Price" })] })] })] }) }) }), _jsx("section", { className: "pb-20 px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "max-w-bala mx-auto", children: filteredItems.length > 0 ? (_jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6", children: filteredItems.map((item, idx) => (_jsx("div", { className: "animate-fade-in-up", style: { animationDelay: `${(idx % 4) * 80}ms` }, children: _jsx(ProductCard, { item: item }) }, item.id))) })) : (_jsxs("div", { className: "text-center py-20", children: [_jsx("p", { className: "font-body text-lg text-bala-brown dark:text-bala-cream/70", children: language === "ar" ? "لم نجد نتائج" : "No items found" }), _jsx(Link, { to: "/menu", className: "inline-flex mt-6 px-6 py-3 rounded-bala bg-bala-gold text-bala-forest font-extrabold hover:opacity-90 transition", children: language === "ar" ? "اختيار كاتيجوري أخرى" : "Pick another category" })] })) }) })] }));
};
export default MenuCategory;
