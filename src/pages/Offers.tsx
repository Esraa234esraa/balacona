import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { offersData } from "../data/offersData";
import { useLanguage } from "../hooks/useLanguage";

export const Offers: React.FC = () => {
  const bestOffer = offersData.reduce((best, current) => {
    const currentValue = current.type === "percentage" ? current.value : 0;
    const bestValue = best.type === "percentage" ? best.value : 0;
    return currentValue > bestValue ? current : best;
  }, offersData[0]);
  const { language } = useLanguage();
  const isRTL = language === "ar";
  return (
    <div className="min-h-screen  dark:bg-bala-dark-bg">
      {/* HERO */}
      <section className="relative h-[380px] flex items-center justify-center overflow-hidden">
        <img
          src="/offers.png"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-bala-forest/30"></div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl sm:text-6xl font-display font-bold mb-4">
            عروض Balacona
          </h1>
          <p className="text-lg opacity-90 font-body">مزاج أحلى… بسعر أحلى</p>
        </div>
      </section>

      <div className="max-w-bala mx-auto px-4 py-16">
        {/* BEST OFFER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="bg-white dark:bg-bala-dark-surface rounded-bala shadow-bala-light dark:shadow-bala-dark p-6 sm:p-10 relative border border-bala-gold/40 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Gold Ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-bala-gold text-bala-forest px-6 py-1 rounded-full text-sm font-bold shadow-md">
              عرض اليوم
            </div>
            <div className="hidden md:block">
              <img
                src={bestOffer.image}
                alt={bestOffer.title}
                className="w-full h-52 object-cover rounded-bala"
              />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-3xl font-display text-bala-forest dark:text-white mb-4">
                {bestOffer.title}
              </h2>

              <div className="text-4xl sm:text-5xl font-bold text-bala-gold mb-6">
                {bestOffer.type === "percentage" && `${bestOffer.value}%`}
                {bestOffer.type === "fixed" && `${bestOffer.value} ج`}
                {bestOffer.type === "buy_get" && `+ ${bestOffer.value} مجانًا`}
              </div>

              <Link
                to={`/offers/${bestOffer.id}`}
                className="inline-block bg-bala-forest hover:bg-bala-dark-green text-white px-8 py-3 rounded-bala font-body font-bold transition-all"
              >
                {language === "ar" ? "شوف العرض" : "View offer"}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ALL OFFERS */}
        <h2 className="text-3xl font-display font-bold text-bala-forest dark:text-white mb-10 text-center">
          باقي العروض
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offersData.map((offer) => (
            <motion.div
              key={offer.id}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-bala-dark-surface rounded-bala shadow-bala-light dark:shadow-bala-dark overflow-hidden group cursor-pointer border border-bala-brown/10"
            >
              {/* ✅ Image Wrapper */}
              <div className="relative h-44 sm:h-52 lg:h-64 xl:h-72 2xl:h-80 bg-bala-cream dark:bg-bala-dark-bg overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="
            absolute inset-0 w-full h-full object-cover
            group-hover:scale-[1.08] transition-transform duration-500
          "
                />

                {/* ✅ Gradient overlay (شكل أفخم) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                {/* ✅ Badge */}
                <span
                  className={`absolute top-4 ${
                    isRTL ? "left-4" : "right-4"
                  } bg-bala-gold text-bala-forest px-3 py-1 rounded-full text-xs font-bold shadow-sm`}
                >
                  {isRTL ? "عرض خاص" : "Special offer"}
                </span>

                {/* ✅ Title on image for large screens */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg lg:text-xl font-display font-extrabold text-white drop-shadow">
                    {offer.title}
                  </h3>
                  <div className="mt-1 text-2xl lg:text-3xl font-display font-extrabold text-bala-gold drop-shadow">
                    {offer.type === "percentage" && `${offer.value}%`}
                    {offer.type === "fixed" && `${offer.value} ج`}
                    {offer.type === "buy_get" && `+ ${offer.value} مجانًا`}
                  </div>
                </div>
              </div>

              {/* ✅ Content */}
              <div className="p-5 text-center space-y-3">
                {/* نخفي العنوان هنا على الشاشات الكبيرة لأنه بقى فوق الصورة */}
                <h3 className="lg:hidden text-lg font-display font-bold text-bala-forest dark:text-white">
                  {offer.title}
                </h3>

                <div className="lg:hidden text-2xl font-display font-bold text-bala-gold">
                  {offer.type === "percentage" && `${offer.value}%`}
                  {offer.type === "fixed" && `${offer.value} ج`}
                  {offer.type === "buy_get" && `+ ${offer.value} مجانًا`}
                </div>

                <Link
                  to={`/offers/${offer.id}`}
                  className="block w-full bg-bala-forest hover:bg-bala-dark-green text-white py-2.5 rounded-bala font-body font-bold transition-all"
                >
                  {language === "ar" ? "شوف العرض" : "View offer"}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
