// src/components/Navbar.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  X,
  User,
  Search,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { useCart } from "../hooks/useCart";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

type NavItem = { labelAr: string; labelEn: string; path: string };

const drawerWidth = 320;

const Navbar: React.FC = () => {
  const { language } = useLanguage();
  const { totalItems } = useCart();
  const isRTL = language === "ar";
  const location = useLocation();

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const user = useMemo(() => {
    const stored = localStorage.getItem("bala-user");
    return stored ? JSON.parse(stored) : null;
  }, [location.pathname]);

  const navItems: NavItem[] = [
    { labelAr: "الرئيسية", labelEn: "Home", path: "/" },
    { labelAr: "المنيو", labelEn: "Menu", path: "/menu" },
    { labelAr: "العروض", labelEn: "Offers", path: "/offers" },
    { labelAr: "الهدايا", labelEn: "Gifts", path: "/gifts" },
    { labelAr: "المكافآت", labelEn: "Rewards", path: "/rewards" },
    { labelAr: "الفروع", labelEn: "Locations", path: "/branches" },
    { labelAr: "عننا", labelEn: "About", path: "/about" },
  ];

  const label = (item: NavItem) => (isRTL ? item.labelAr : item.labelEn);

  // close drawer when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // ESC to close + lock scroll
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    const prev = document.body.style.overflow;
    if (isMobileOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* =========================
          TOP BAR (Desktop only) — زي Dunkin (بدون البلد)
         ========================= */}
      <div className="hidden lg:block bg-bala-gold">
        <div className="max-w-bala mx-auto px-4 sm:px-6 lg:px-8">
          <div
            dir={isRTL ? "rtl" : "ltr"}
            className="h-10 flex items-center justify-end gap-4"
          >
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>

            <Link
              to="/cart"
              className="relative p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart size={20} className="text-bala-cream" />
              {totalItems > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-bala-cream text-bala-forest text-[11px] font-extrabold rounded-full min-w-5 h-5 px-1 flex items-center justify-center"
                  style={{ direction: "ltr" }}
                >
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* =========================
          MAIN BAR
         ========================= */}
      <nav className="bg-white/90 dark:bg-bala-dark-bg/80 backdrop-blur-md border-b border-bala-brown/10 dark:border-bala-dark-green/20">
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="max-w-bala mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="relative py-2 sm:h-20 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileOpen(true)}
                className="p-2 rounded-xl hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 transition-colors"
                aria-label="Menu"
              >
                <Menu
                  size={22}
                  className="text-bala-forest dark:text-bala-cream"
                />
              </button>

              <Link
                to="/"
                className="hidden md:flex items-center gap-3 shrink-0"
              >
                <img
                  src="/balacona_logo.png"
                  alt="Balacona"
                  className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
                />
                <div className="hidden sm:block leading-tight">
                  <div className="font-display text-xl sm:text-2xl md:text-4xl font-extrabold text-bala-forest dark:text-bala-cream">
                    Balacona
                  </div>
                </div>
              </Link>
            </div>

            {/* RIGHT: Desktop actions like Dunkin */}
            <div className="hidden lg:flex items-center gap-6">
              <button
                className="p-2 rounded-xl hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 transition-colors"
                aria-label="Search"
              >
                <Search
                  className="text-bala-forest dark:text-bala-cream"
                  size={20}
                />
              </button>

              <NavLink
                to="/track-order"
                className="font-display font-extrabold text-sm md:text-xl tracking-wide text-bala-forest dark:text-bala-cream hover:opacity-80 transition"
              >
                {isRTL ? "تتبع الطلب" : "TRACK ORDER"}
              </NavLink>

              <NavLink
                to="/register"
                className="px-4 md:px-6 py-2 rounded-xl bg-bala-gold text-bala-forest font-extrabold text-sm md:text-xl hover:opacity-90 transition"
              >
                {isRTL ? "سجل الآن" : "JOIN NOW"}
              </NavLink>
            </div>

            {/* RIGHT (mobile): Cart + Profile */}
            <div className="flex lg:hidden items-center gap-1 shrink-0">
              <Link
                to="/cart"
                className="relative p-2 rounded-xl hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 transition-colors"
                aria-label="Cart"
              >
                <ShoppingCart
                  size={20}
                  className="text-bala-forest dark:text-bala-cream"
                />
                {totalItems > 0 && (
                  <span
                    className="absolute -top-1 -right-1 bg-bala-gold text-bala-forest text-[11px] font-extrabold rounded-full min-w-5 h-5 px-1 flex items-center justify-center"
                    style={{ direction: "ltr" }}
                  >
                    {totalItems}
                  </span>
                )}
              </Link>

              <Link
                to={user ? "/profile" : "/login"}
                className="p-2 rounded-xl hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 transition-colors"
                aria-label="Profile"
              >
                <User
                  size={20}
                  className="text-bala-forest dark:text-bala-cream"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ MOBILE DRAWER (Left) */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.aside
              className="fixed top-0 left-0 z-[70] h-full"
              style={{ width: drawerWidth }}
              initial={{ x: -drawerWidth }}
              animate={{ x: 0 }}
              exit={{ x: -drawerWidth }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* ✅ layout: header (fixed) + body (scroll) + footer (sticky) */}
              <div className="h-full w-full bg-white/85 dark:bg-bala-dark-surface/80 backdrop-blur-xl border-r border-bala-brown/10 dark:border-bala-dark-green/20 shadow-[0_20px_60px_rgba(0,0,0,0.25)] flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-bala-brown/10 dark:border-bala-dark-green/20 shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="/balacona_logo.png"
                        alt="Balacona"
                        className="w-10 h-10 object-contain"
                      />
                      <div className="leading-tight">
                        <div className="font-display font-extrabold text-bala-forest dark:text-bala-cream">
                          Balacona
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsMobileOpen(false)}
                      className="p-2 rounded-xl hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 transition-colors"
                      aria-label="Close"
                    >
                      <X className="text-bala-forest dark:text-bala-cream" />
                    </button>
                  </div>

                  {/* Profile card */}
                  <div className="mt-4 rounded-2xl border border-bala-brown/10 dark:border-bala-dark-green/20 bg-white/70 dark:bg-white/5 p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-bala-forest/10 dark:bg-bala-dark-green/30 grid place-items-center">
                        <User
                          className="text-bala-forest dark:text-bala-cream"
                          size={18}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-sm text-bala-forest dark:text-bala-cream truncate">
                          {user?.name ? user.name : isRTL ? "ضيف" : "Guest"}
                        </div>
                        <div className="text-xs text-bala-brown/70 dark:text-bala-cream/60 truncate">
                          {user?.email ??
                            (isRTL
                              ? "سجّل عشان تجرب كل المميزات"
                              : "Login to access all features")}
                        </div>
                      </div>

                      <Link
                        to={user ? "/profile" : "/login"}
                        className="shrink-0 px-3 py-2 rounded-xl bg-bala-gold text-bala-forest font-extrabold text-xs hover:opacity-90 transition"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {user
                          ? isRTL
                            ? "حسابي"
                            : "Profile"
                          : isRTL
                            ? "تسجيل"
                            : "Login"}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ✅ Body scroll */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-3">
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === "/"}
                        className={({ isActive }) =>
                          [
                            "group relative flex items-center justify-between rounded-2xl px-4 py-3 font-extrabold text-lg transition-all",
                            "text-bala-gold",
                            isActive
                              ? "bg-bala-gold/15"
                              : "hover:bg-bala-gold/10",
                          ].join(" ")
                        }
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {({ isActive }) => (
                          <>
                            <span
                              className={[
                                "absolute left-2 top-1/2 -translate-y-1/2 h-8 w-1.5 rounded-full transition-opacity",
                                "bg-bala-gold",
                                isActive ? "opacity-100" : "opacity-0",
                              ].join(" ")}
                            />
                            <span className="pl-3">{label(item)}</span>
                            <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                              <ChevronRight
                                className="text-bala-gold"
                                size={18}
                              />
                            </span>
                          </>
                        )}
                      </NavLink>
                    ))}
                  </div>

                  {/* ✅ buttons (wrap instead of getting hidden) */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      to="/track-order"
                      className="rounded-2xl px-4 py-3 bg-bala-forest text-white font-bold text-sm flex-1 min-w-[140px] items-center justify-center hover:opacity-95 transition flex"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {isRTL ? "تتبع الطلب" : "Track"}
                    </Link>

                    <Link
                      to="/register"
                      className="rounded-2xl px-4 py-3 bg-bala-gold text-bala-forest font-extrabold text-sm flex-1 min-w-[140px] items-center justify-center hover:opacity-90 transition flex"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {isRTL ? "سجل الآن" : "Join"}
                    </Link>
                  </div>

                  {/* spacing to feel better */}
                  <div className="h-4" />
                </div>

                {/* ✅ Footer sticky */}
                <div className="sticky bottom-0 left-0 right-0 p-4 border-t border-bala-brown/10 dark:border-bala-dark-green/20 bg-white/70 dark:bg-bala-dark-surface/60 backdrop-blur-xl shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ThemeToggle />
                      <LanguageToggle />
                    </div>

                    <button
                      onClick={() => setIsMobileOpen(false)}
                      className="px-3 py-2 rounded-xl bg-bala-gold text-bala-forest font-extrabold text-xs hover:opacity-90 transition"
                    >
                      {isRTL ? "إغلاق" : "Close"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
