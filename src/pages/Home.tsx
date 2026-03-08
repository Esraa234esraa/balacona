import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import ProductCard from "../components/ProductCard";
import { menuItems } from "../data/menuData";
import { ChevronRight, MapPin, Clock } from "lucide-react";
import { FeatureSplitCard } from "../components/FeatureSplitCard";
import HomePromoGrid from "./HomePromoGrid";
import HeroCarousel from "../components/HeroCarousel";

const Home: React.FC = () => {
  const { language } = useLanguage();
  const [revealedSections, setRevealedSections] = useState<Set<string>>(
    new Set(),
  );
  const isRTL = language === "ar";

  const signatureDrinks = menuItems
    .filter((item) => item.popular && item.category === "espresso")
    .slice(0, 4);

  const chocolates = menuItems
    .filter(
      (item) => item.category === "chocolate" || item.category === "desserts",
    )
    .slice(0, 4);

  const bakeryItems = menuItems
    .filter((item) => item.category === "bakery")
    .slice(0, 4);

  const featuredOffers = [
    {
      title: "عروض البلكونة المميزة",
      description:
        "خصومات حصرية على القهوة والحلويات لفترة محدودة. اختاري العرض المناسب واطلبي بسهولة.",
      ctaText: "شوف العروض",
      ctaTo: "/offers",
      imageSrc: "/images/img1.jpg",
      badge: "عرض مميز",
    },
    {
      title: "بوكس قهوة + حلويات",
      description: "تجربة كاملة بطابع البلكونة — طعم فاخر وإحساس رايق.",
      ctaText: "اطلب من المنيو",
      ctaTo: "/menu",
      imageSrc: "/images/img2.jpg",
      badge: "Limited",
    },
  ];

  const bestSellers = [
    {
      title: "آيس لاتيه كراميل",
      description: "مزيج ناعم بطعم كراميل متوازن… اختيار العملاء رقم 1.",
      ctaText: "اطلبي الآن",
      ctaTo: "/menu",
      imageSrc: "/images/img1.jpg",
      badge: "الأكثر مبيعاً",
    },
    {
      title: "تشوكليت هوت",
      description: "شوكولاتة غنية ودافية… المزاج الحقيقي.",
      ctaText: "اطلبي الآن",
      ctaTo: "/menu",
      imageSrc: "/images/img2.jpg",
      badge: "الأكثر مبيعاً",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealedSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${isRTL ? "rtl" : "ltr"}`}>
      <HeroCarousel language={language} />

      <section
        data-reveal
        id="about"
        className={`py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${
          revealedSections.has("about") ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="max-w-bala mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-12 text-center">
            {language === "ar" ? "عن التجربة" : "About the Experience"}
          </h2>

          <p className="font-body text-lg text-bala-brown dark:text-bala-cream/70 max-w-3xl mx-auto text-center leading-relaxed mb-16">
            {language === "ar"
              ? "في Balacona، نعتقد أن القهوة والشوكولاتة ليست مجرد مشروبات، بل لحظات من الفرح والهدوء."
              : "At Balacona, we believe coffee and chocolate are more than beverages—they're moments of joy and calm."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-bala-dark-surface rounded-bala p-8 shadow-bala-light dark:shadow-bala-dark hover:shadow-bala-hover transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-display text-2xl font-bold text-bala-forest dark:text-bala-cream mb-4">
                  {language === "ar" ? item.arTitle : item.enTitle}
                </h3>
                <p className="font-body text-bala-brown dark:text-bala-cream/70">
                  {language === "ar" ? item.arDesc : item.enDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomePromoGrid />

      <section
        data-reveal
        id="signature"
        className={`py-20 sm:py-32 px-4 sm:px-6 lg:px-8 dark:bg-bala-dark-bg ${
          revealedSections.has("signature") ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="max-w-bala mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream">
              {language === "ar" ? "مشروباتنا الأساسية" : "Signature Drinks"}
            </h2>
            <Link
              to="/menu"
              className={`flex items-center gap-2 text-bala-gold hover:text-bala-brown dark:hover:text-bala-gold transition-colors font-body font-bold ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              {language === "ar" ? "عرض الكل" : "View All"}
              <ChevronRight size={20} className={isRTL ? "rotate-180" : ""} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {signatureDrinks.map((item, idx) => (
              <div
                key={item.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {bakeryItems.length > 0 && (
        <section
          data-reveal
          id="bakery"
          className={`py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${
            revealedSections.has("bakery") ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="max-w-bala mx-auto">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-6 text-center">
              {language === "ar" ? "المخبوزات" : "Bakery"}
            </h2>
            <p className="font-body text-lg text-bala-brown dark:text-bala-cream/70 text-center mb-12 max-w-2xl mx-auto">
              {language === "ar"
                ? "مخبوزات طازجة تطلع من الفرن على الطاولة"
                : "Freshly baked goods served warm from our oven."}
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {bakeryItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <ProductCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        data-reveal
        id="chocolate"
        className={`py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${
          revealedSections.has("chocolate")
            ? "animate-fade-in-up"
            : "opacity-0"
        }`}
      >
        <div className="max-w-bala mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-6 text-center">
            {language === "ar"
              ? "الشوكولاتة والحلويات"
              : "Chocolate & Desserts"}
          </h2>

          <p className="font-body text-lg text-bala-brown dark:text-bala-cream/70 text-center mb-12 max-w-2xl mx-auto">
            {language === "ar"
              ? "تجربة حسية لا تُنسى مع تشكيلتنا المميزة من الشوكولاتة الفاخرة"
              : "An unforgettable experience with our curated selection of premium chocolate"}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {chocolates.map((item, idx) => (
              <div
                key={item.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="featured-offers"
        className="py-16 sm:py-20 bg-bala-cream dark:bg-bala-dark-bg"
      >
        <div className="max-w-bala mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-bala-forest dark:text-white">
                العروض المميزة
              </h2>
              <p className="font-body text-bala-brown/70 dark:text-white/60 mt-2">
                اختياراتنا الخاصة اللي هتحبيها
              </p>
            </div>

            <Link
              to="/offers"
              className="font-body font-bold text-bala-gold hover:text-bala-brown dark:hover:text-bala-gold transition-colors"
            >
              عرض الكل
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredOffers.map((c, idx) => (
              <FeatureSplitCard
                key={idx}
                title={c.title}
                description={c.description}
                ctaText={c.ctaText}
                ctaTo={c.ctaTo}
                imageSrc={c.imageSrc}
                reverse={idx % 2 === 1}
                badge={c.badge}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="best-sellers"
        className="py-16 sm:py-20 bg-white dark:bg-bala-dark-surface"
      >
        <div className="max-w-bala mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-bala-forest dark:text-white">
                الأكثر مبيعاً
              </h2>
              <p className="font-body text-bala-brown/70 dark:text-white/60 mt-2">
                اختيارات العملاء اللي بتتكرر كل يوم
              </p>
            </div>

            <Link
              to="/menu"
              className="font-body font-bold text-bala-gold hover:text-bala-brown dark:hover:text-bala-gold transition-colors"
            >
              روحي للمنيو
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestSellers.map((c, idx) => (
              <FeatureSplitCard
                key={idx}
                title={c.title}
                description={c.description}
                ctaText={c.ctaText}
                ctaTo={c.ctaTo}
                imageSrc={c.imageSrc}
                reverse={idx % 2 === 1}
                badge={c.badge}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        data-reveal
        id="locations"
        className={`py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-bala-cream dark:bg-bala-dark-bg ${
          revealedSections.has("locations")
            ? "animate-fade-in-up"
            : "opacity-0"
        }`}
      >
        <div className="max-w-bala mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-12 text-center">
            {language === "ar" ? "زورنا" : "Visit Us"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
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
            ].map((loc, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-bala-dark-surface rounded-bala p-8 shadow-bala-light dark:shadow-bala-dark hover:shadow-bala-hover transition-all duration-300"
              >
                <h3 className="font-display text-2xl font-bold text-bala-forest dark:text-bala-cream mb-4 flex items-center gap-2">
                  <MapPin size={24} className="text-bala-gold" />
                  {language === "ar" ? loc.arName : loc.enName}
                </h3>
                <p className="font-body text-bala-brown dark:text-bala-cream/70 mb-4">
                  {language === "ar" ? loc.arAddr : loc.enAddr}
                </p>
                <p className="font-body text-bala-gold font-bold flex items-center gap-2">
                  <Clock size={16} />
                  {loc.hours}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-reveal
        id="newsletter"
        className={`py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${
          revealedSections.has("newsletter")
            ? "animate-fade-in-up"
            : "opacity-0"
        }`}
      >
        <div className="max-w-bala mx-auto">
          <div className="bg-bala-forest dark:bg-bala-dark-green rounded-bala p-12 text-center">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-6">
              {language === "ar" ? "اشترك في نشرتنا" : "Join Our Newsletter"}
            </h2>
            <p className="font-body text-white/80 mb-8 max-w-2xl mx-auto">
              {language === "ar"
                ? "احصل على أحدث العروض والمشروبات الجديدة مباشرة إلى بريدك الإلكتروني"
                : "Get the latest offers and new drinks delivered straight to your inbox"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={
                  language === "ar" ? "بريدك الإلكتروني" : "Your email"
                }
                className="flex-1 px-4 py-4 rounded-bala font-body placeholder-bala-brown/50 focus:outline-none focus:ring-2 focus:ring-bala-gold"
              />
              <button className="px-8 py-4 bg-bala-gold text-bala-forest rounded-bala font-body font-bold hover:bg-bala-gold/90 transition-colors">
                {language === "ar" ? "اشترك" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;