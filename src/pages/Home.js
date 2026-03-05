import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import ProductCard from "../components/ProductCard";
import { menuItems } from "../data/menuData";
import { ChevronRight, MapPin, Clock } from "lucide-react";
import { FeatureSplitCard } from "../components/FeatureSplitCard";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import HeroCarousel from "../components/HeroCarousel.jsx";
import HomePromoGrid from "./HomePromoGrid";
const Home = () => {
    const { language } = useLanguage();
    const [revealedSections, setRevealedSections] = useState(new Set());
    const isRTL = language === "ar";
    const signatureDrinks = menuItems
        .filter((item) => item.popular && item.category === "espresso")
        .slice(0, 4);
    const chocolates = menuItems
        .filter((item) => item.category === "chocolate" || item.category === "desserts")
        .slice(0, 4);
    const bakeryItems = menuItems
        .filter((item) => item.category === "bakery")
        .slice(0, 4);
    const featuredOffers = [
        {
            title: "عروض البلكونة المميزة",
            description: "خصومات حصرية على القهوة والحلويات لفترة محدودة. اختاري العرض المناسب واطلبي بسهولة.",
            ctaText: "شوف العروض",
            ctaTo: "/offers",
            imageSrc: img1,
            badge: "عرض مميز",
        },
        {
            title: "بوكس قهوة + حلويات",
            description: "تجربة كاملة بطابع البلكونة — طعم فاخر وإحساس رايق.",
            ctaText: "اطلب من المنيو",
            ctaTo: "/menu",
            imageSrc: img2,
            badge: "Limited",
        },
    ];
    const bestSellers = [
        {
            title: "آيس لاتيه كراميل",
            description: "مزيج ناعم بطعم كراميل متوازن… اختيار العملاء رقم 1.",
            ctaText: "اطلبي الآن",
            ctaTo: "/menu",
            imageSrc: img1,
            badge: "الأكثر مبيعاً",
        },
        {
            title: "تشوكليت هوت",
            description: "شوكولاتة غنية ودافية… المزاج الحقيقي.",
            ctaText: "اطلبي الآن",
            ctaTo: "/menu",
            imageSrc: img2,
            badge: "الأكثر مبيعاً",
        },
    ];
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setRevealedSections((prev) => new Set([...prev, entry.target.id]));
                }
            });
        }, { threshold: 0.1 });
        document
            .querySelectorAll("[data-reveal]")
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
    return (_jsxs("div", { className: `${isRTL ? "rtl" : "ltr"}`, children: [_jsx(HeroCarousel, { language: language }), _jsx("section", { "data-reveal": true, id: "about", className: `py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${revealedSections.has("about") ? "animate-fade-in-up" : "opacity-0"}`, children: _jsxs("div", { className: "max-w-bala mx-auto", children: [_jsx("h2", { className: "font-display text-3xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-12 text-center", children: language === "ar" ? "عن التجربة" : "About the Experience" }), _jsx("p", { className: "font-body text-lg text-bala-brown dark:text-bala-cream/70 max-w-3xl mx-auto text-center leading-relaxed mb-16", children: language === "ar"
                                ? "في Balacona، نعتقد أن القهوة والشوكولاتة ليست مجرد مشروبات، بل لحظات من الفرح والهدوء."
                                : "At Balacona, we believe coffee and chocolate are more than beverages—they're moments of joy and calm." }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
                                {
                                    arTitle: "المكونات الفاخرة",
                                    enTitle: "Premium Ingredients",
                                    arDesc: "نستخدم فقط أفضل المكونات المختارة من حول العالم",
                                    enDesc: "We use only the finest ingredients sourced globally",
                                },
                                {
                                    arTitle: "الحرفية",
                                    enTitle: "Craftsmanship",
                                    arDesc: "كل كوب يُحضّر بعناية فائقة وحب من فريقنا",
                                    enDesc: "Every cup prepared with care and passion",
                                },
                                {
                                    arTitle: "التجربة",
                                    enTitle: "Experience",
                                    arDesc: "جو دافئ ومريح يشبه نافذة الشرفة",
                                    enDesc: "A warm and comfortable cozy ambiance",
                                },
                            ].map((item, idx) => (_jsxs("div", { className: "bg-white dark:bg-bala-dark-surface rounded-bala p-8 shadow-bala-light dark:shadow-bala-dark hover:shadow-bala-hover transition-all duration-300 hover:-translate-y-1", children: [_jsx("h3", { className: "font-display text-2xl font-bold text-bala-forest dark:text-bala-cream mb-4", children: language === "ar" ? item.arTitle : item.enTitle }), _jsx("p", { className: "font-body text-bala-brown dark:text-bala-cream/70", children: language === "ar" ? item.arDesc : item.enDesc })] }, idx))) })] }) }), _jsx(HomePromoGrid, {}), _jsx("section", { "data-reveal": true, id: "signature", className: `py-20 sm:py-32 px-4 sm:px-6 lg:px dark:bg-bala-dark-bg ${revealedSections.has("signature") ? "animate-fade-in-up" : "opacity-0"}`, children: _jsxs("div", { className: "max-w-bala mx-auto", children: [_jsxs("div", { className: "flex items-center justify-between mb-12", children: [_jsx("h2", { className: "font-display text-3xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream", children: language === "ar" ? "مشروباتنا الأساسية" : "Signature Drinks" }), _jsxs(Link, { to: "/menu", className: `flex items-center gap-2 text-bala-gold hover:text-bala-brown dark:hover:text-bala-gold transition-colors font-body font-bold ${isRTL ? "flex-row-reverse" : ""}`, children: [language === "ar" ? "عرض الكل" : "View All", _jsx(ChevronRight, { size: 20, className: isRTL ? "rotate-180" : "" })] })] }), _jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6", children: signatureDrinks.map((item, idx) => (_jsx("div", { className: `animate-fade-in-up`, style: { animationDelay: `${idx * 100}ms` }, children: _jsx(ProductCard, { item: item }) }, item.id))) })] }) }), bakeryItems.length > 0 && (_jsx("section", { "data-reveal": true, id: "bakery", className: `py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${revealedSections.has("bakery") ? "animate-fade-in-up" : "opacity-0"}`, children: _jsxs("div", { className: "max-w-bala mx-auto", children: [_jsx("h2", { className: "font-display text-3xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-6 text-center", children: language === "ar" ? "المخبوزات" : "Bakery" }), _jsx("p", { className: "font-body text-lg text-bala-brown dark:text-bala-cream/70 text-center mb-12 max-w-2xl mx-auto", children: language === "ar"
                                ? "مخبوزات طازجة تطلع من الفرن على الطاولة"
                                : "Freshly baked goods served warm from our oven." }), _jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6", children: bakeryItems.map((item, idx) => (_jsx("div", { className: `animate-fade-in-up`, style: { animationDelay: `${idx * 100}ms` }, children: _jsx(ProductCard, { item: item }) }, item.id))) })] }) })), _jsx("section", { "data-reveal": true, id: "chocolate", className: `py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${revealedSections.has("chocolate") ? "animate-fade-in-up" : "opacity-0"}`, children: _jsxs("div", { className: "max-w-bala mx-auto", children: [_jsx("h2", { className: "font-display text-3xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-6 text-center", children: language === "ar"
                                ? "الشوكولاتة والحلويات"
                                : "Chocolate & Desserts" }), _jsx("p", { className: "font-body text-lg text-bala-brown dark:text-bala-cream/70 text-center mb-12 max-w-2xl mx-auto", children: language === "ar"
                                ? "تجربة حسية لا تُنسى مع تشكيلتنا المميزة من الشوكولاتة الفاخرة"
                                : "An unforgettable experience with our curated selection of premium chocolate" }), _jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6", children: chocolates.map((item, idx) => (_jsx("div", { className: `animate-fade-in-up`, style: { animationDelay: `${idx * 100}ms` }, children: _jsx(ProductCard, { item: item }) }, item.id))) })] }) }), _jsx("section", { id: "featured-offers", className: "py-16 sm:py-20 bg-bala-cream dark:bg-bala-dark-bg", children: _jsxs("div", { className: "max-w-bala mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex items-end justify-between gap-4 mb-8", children: [_jsxs("div", { children: [_jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-bala-forest dark:text-white", children: "\u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u0645\u0645\u064A\u0632\u0629" }), _jsx("p", { className: "font-body text-bala-brown/70 dark:text-white/60 mt-2", children: "\u0627\u062E\u062A\u064A\u0627\u0631\u0627\u062A\u0646\u0627 \u0627\u0644\u062E\u0627\u0635\u0629 \u0627\u0644\u0644\u064A \u0647\u062A\u062D\u0628\u064A\u0647\u0627" })] }), _jsx(Link, { to: "/offers", className: "font-body font-bold text-bala-gold hover:text-bala-brown dark:hover:text-bala-gold transition-colors", children: "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: featuredOffers.map((c, idx) => (_jsx(FeatureSplitCard, { title: c.title, description: c.description, ctaText: c.ctaText, ctaTo: c.ctaTo, imageSrc: c.imageSrc, reverse: idx % 2 === 1, badge: c.badge }, idx))) })] }) }), _jsx("section", { id: "best-sellers", className: "py-16 sm:py-20 bg-white dark:bg-bala-dark-surface", children: _jsxs("div", { className: "max-w-bala mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex items-end justify-between gap-4 mb-8", children: [_jsxs("div", { children: [_jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-bala-forest dark:text-white", children: "\u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0628\u064A\u0639\u0627\u064B" }), _jsx("p", { className: "font-body text-bala-brown/70 dark:text-white/60 mt-2", children: "\u0627\u062E\u062A\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0644\u064A \u0628\u062A\u062A\u0643\u0631\u0631 \u0643\u0644 \u064A\u0648\u0645" })] }), _jsx(Link, { to: "/menu", className: "font-body font-bold text-bala-gold hover:text-bala-brown dark:hover:text-bala-gold transition-colors", children: "\u0631\u0648\u062D\u064A \u0644\u0644\u0645\u0646\u064A\u0648" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: bestSellers.map((c, idx) => (_jsx(FeatureSplitCard, { title: c.title, description: c.description, ctaText: c.ctaText, ctaTo: c.ctaTo, imageSrc: c.imageSrc, reverse: idx % 2 === 1, badge: c.badge }, idx))) })] }) }), _jsx("section", { "data-reveal": true, id: "locations", className: `py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-bala-cream dark:bg-bala-dark-bg ${revealedSections.has("locations") ? "animate-fade-in-up" : "opacity-0"}`, children: _jsxs("div", { className: "max-w-bala mx-auto", children: [_jsx("h2", { className: "font-display text-3xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-12 text-center", children: language === "ar" ? "زورنا" : "Visit Us" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
                                {
                                    arName: "الفرع الرئيسي - الرياض",
                                    enName: "Main Branch - Riyadh",
                                    arAddr: "شارع التنين، حي الملز، الرياض",
                                    enAddr: "Dragon Street, Al-Malaz District, Riyadh",
                                    hours: "9am - 10pm",
                                },
                                {
                                    arName: "فرع جدة",
                                    enName: "Jeddah Branch",
                                    arAddr: "شارع الأمير محمد بن عبدالعزيز، جدة",
                                    enAddr: "Prince Muhammad St, Jeddah",
                                    hours: "10am - 11pm",
                                },
                            ].map((loc, idx) => (_jsxs("div", { className: "bg-white dark:bg-bala-dark-surface rounded-bala p-8 shadow-bala-light dark:shadow-bala-dark hover:shadow-bala-hover transition-all duration-300", children: [_jsxs("h3", { className: "font-display text-2xl font-bold text-bala-forest dark:text-bala-cream mb-4 flex items-center gap-2", children: [_jsx(MapPin, { size: 24, className: "text-bala-gold" }), language === "ar" ? loc.arName : loc.enName] }), _jsx("p", { className: "font-body text-bala-brown dark:text-bala-cream/70 mb-4", children: language === "ar" ? loc.arAddr : loc.enAddr }), _jsxs("p", { className: "font-body text-bala-gold font-bold flex items-center gap-2", children: [_jsx(Clock, { size: 16 }), loc.hours] })] }, idx))) })] }) }), _jsx("section", { "data-reveal": true, id: "newsletter", className: `py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${revealedSections.has("newsletter")
                    ? "animate-fade-in-up"
                    : "opacity-0"}`, children: _jsx("div", { className: "max-w-bala mx-auto", children: _jsxs("div", { className: "bg-bala-forest dark:bg-bala-dark-green rounded-bala p-12 text-center", children: [_jsx("h2", { className: "font-display text-3xl sm:text-5xl font-bold text-white mb-6", children: language === "ar" ? "اشترك في نشرتنا" : "Join Our Newsletter" }), _jsx("p", { className: "font-body text-white/80 mb-8 max-w-2xl mx-auto", children: language === "ar"
                                    ? "احصل على أحدث العروض والمشروبات الجديدة مباشرة إلى بريدك الإلكتروني"
                                    : "Get the latest offers and new drinks delivered straight to your inbox" }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 max-w-md mx-auto", children: [_jsx("input", { type: "email", placeholder: language === "ar" ? "بريدك الإلكتروني" : "Your email", className: "flex-1 px-4 py-4 rounded-bala font-body placeholder-bala-brown/50 focus:outline-none focus:ring-2 focus:ring-bala-gold" }), _jsx("button", { className: "px-8 py-4 bg-bala-gold text-bala-forest rounded-bala font-body font-bold hover:bg-bala-gold/90 transition-colors", children: language === "ar" ? "اشترك" : "Subscribe" })] })] }) }) })] }));
};
export default Home;
