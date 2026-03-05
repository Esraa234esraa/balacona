import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { Facebook, Instagram, Twitter, Clock, Mail } from "lucide-react";
const navItems = [
    { labelAr: "الرئيسية", labelEn: "Home", path: "/" },
    { labelAr: "المنيو", labelEn: "Menu", path: "/menu" },
    { labelAr: "العروض", labelEn: "Offers", path: "/offers" },
    { labelAr: "الهدايا", labelEn: "Gifts", path: "/gifts" },
    { labelAr: "المكافآت", labelEn: "Rewards", path: "/rewards" },
    { labelAr: "الفروع", labelEn: "Locations", path: "/branches" },
    { labelAr: "عننا", labelEn: "About", path: "/about" },
];
const Footer = () => {
    const { language } = useLanguage();
    const isRTL = language === "ar";
    return (_jsx("footer", { className: `bg-bala-forest dark:bg-bala-dark-bg text-white mt-32 ${isRTL ? "rtl" : "ltr"}`, children: _jsxs("div", { className: "max-w-bala mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-10 mb-12", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-display font-bold mb-4", children: "Balacona" }), _jsx("p", { className: "text-white/70 text-sm font-body leading-relaxed", children: language === "ar"
                                        ? "مقهى فاخر متخصص في القهوة الحرفية والشوكولاتة الفاخرة والحلويات المميزة."
                                        : "A premium café specializing in artisan coffee, luxury chocolate, and distinctive pastries." })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-display font-bold mb-4", children: language === "ar" ? "الروابط السريعة" : "Quick Links" }), _jsx("ul", { className: "space-y-2 text-sm", children: navItems.map((item) => (_jsx("li", { children: _jsx(Link, { to: item.path, className: "text-white/70 hover:text-bala-gold transition-colors", children: language === "ar" ? item.labelAr : item.labelEn }) }, item.path))) })] }), _jsxs("div", { children: [_jsxs("h4", { className: "font-display font-bold mb-4 flex items-center gap-2", children: [_jsx(Clock, { size: 18 }), language === "ar" ? "ساعات العمل" : "Hours"] }), _jsxs("p", { className: "text-white/70 text-sm font-body", children: [language === "ar" ? "الأحد - الخميس" : "Sun - Thu", ": 9am - 10pm"] }), _jsxs("p", { className: "text-white/70 text-sm font-body", children: [language === "ar" ? "الجمعة - السبت" : "Fri - Sat", ": 10am - 12am"] })] }), _jsxs("div", { children: [_jsxs("h4", { className: "font-display font-bold mb-4 flex items-center gap-2", children: [_jsx(Mail, { size: 18 }), language === "ar" ? "تواصل معنا" : "Contact"] }), _jsx("p", { className: "text-white/70 text-sm font-body", children: "hello@balaconbar.com" }), _jsx("p", { className: "text-white/70 text-sm font-body", children: "+966 50 123 4567" })] })] }), _jsx("div", { className: "border-t border-white/10 pt-8 mb-8" }), _jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [_jsx("div", { className: "flex gap-4", children: [Facebook, Instagram, Twitter].map((Icon) => (_jsx("a", { href: "#", className: "p-2 bg-white/10 hover:bg-bala-gold hover:text-bala-forest rounded-bala transition-colors", children: _jsx(Icon, { size: 20 }) }, Icon.name))) }), _jsxs("p", { className: "text-white/60 text-sm font-body text-center", children: ["\u00A9 2026 Balacona.", " ", language === "ar"
                                    ? "جميع الحقوق محفوظة"
                                    : "All rights reserved"] })] })] }) }));
};
export default Footer;
