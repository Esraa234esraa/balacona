import React from "react";
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

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <footer
      className={`bg-bala-forest dark:bg-bala-dark-bg text-white mt-32 ${
        isRTL ? "rtl" : "ltr"
      }`}
    >
      <div className="max-w-bala mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Balacona</h3>

            <p className="text-white/70 text-sm font-body leading-relaxed">
              {language === "ar"
                ? "مقهى فاخر متخصص في القهوة الحرفية والشوكولاتة الفاخرة والحلويات المميزة."
                : "A premium café specializing in artisan coffee, luxury chocolate, and distinctive pastries."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">
              {language === "ar" ? "الروابط السريعة" : "Quick Links"}
            </h4>

            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-bala-gold transition-colors"
                  >
                    {language === "ar" ? item.labelAr : item.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-bold mb-4 flex items-center gap-2">
              <Clock size={18} />
              {language === "ar" ? "ساعات العمل" : "Hours"}
            </h4>

            <p className="text-white/70 text-sm font-body">
              {language === "ar" ? "الأحد - الخميس" : "Sun - Thu"}: 9am - 10pm
            </p>

            <p className="text-white/70 text-sm font-body">
              {language === "ar" ? "الجمعة - السبت" : "Fri - Sat"}: 10am - 12am
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4 flex items-center gap-2">
              <Mail size={18} />
              {language === "ar" ? "تواصل معنا" : "Contact"}
            </h4>

            <p className="text-white/70 text-sm font-body">
              hello@balaconbar.com
            </p>

            <p className="text-white/70 text-sm font-body">
              +966 50 123 4567
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mb-8"></div>

        {/* Social + Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter].map((Icon) => (
              <a
                key={Icon.name}
                href="#"
                className="p-2 bg-white/10 hover:bg-bala-gold hover:text-bala-forest rounded-bala transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <p className="text-white/60 text-sm font-body text-center">
            © 2026 Balacona.{" "}
            {language === "ar"
              ? "جميع الحقوق محفوظة"
              : "All rights reserved"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;