// src/components/home/HomePromoGrid.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Gift, MapPin, User2 } from "lucide-react";

type Props = {
  // لو عايزة تغيّري النصوص بسهولة
  userName?: string;
};

const HomePromoGrid: React.FC<Props> = ({ userName = "ضيف" }) => {
  return (
    <section className="py-10 bg-bala-cream dark:bg-bala-dark-bg">
      <div className="max-w-bala mx-auto px-4 sm:px-6 lg:px-8">
        {/* نفس توزيع Dunkin */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT TOP (Big) */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl bg-bala-forest text-bala-cream shadow-[0_18px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
              {/* soft pattern */}
              <div className="pointer-events-none absolute inset-0 opacity-25">
                <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-bala-gold/40 blur-2xl" />
                <div className="absolute right-24 top-10 h-40 w-40 rounded-full bg-white/15 blur-xl" />
              </div>

              {/* "Donut-ish" shape */}
              <div className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2">
                <div className="relative h-56 w-56 rounded-full bg-bala-gold/25">
                  <div className="absolute inset-16 rounded-full bg-bala-forest/80" />
                  <div className="absolute left-8 top-10 h-4 w-10 rotate-12 rounded-full bg-bala-gold/35" />
                  <div className="absolute left-20 top-20 h-4 w-10 -rotate-12 rounded-full bg-bala-gold/35" />
                  <div className="absolute left-10 top-28 h-4 w-10 rotate-6 rounded-full bg-bala-gold/35" />
                  <div className="absolute left-28 top-36 h-4 w-10 -rotate-6 rounded-full bg-bala-gold/35" />
                </div>
              </div>

              <div className="relative p-8 sm:p-10 min-h-[220px] flex flex-col justify-between">
                <div className="space-y-3 max-w-xl">
                  <p className="font-body text-sm sm:text-base text-bala-cream/90">
                    اعرف أقرب فرع ليك
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                    زورنا في أقرب مكان 👋
                  </h3>
                </div>

                <div className="mt-6">
                  <Link
                    to="/branches"
                    className="
                      inline-flex items-center gap-2
                      rounded-2xl px-6 py-3
                      bg-bala-cream text-bala-forest
                      font-extrabold
                      shadow-sm hover:opacity-95 transition
                      dark:bg-bala-cream dark:text-bala-forest
                    "
                  >
                    <MapPin size={18} />
                    عرض الفروع
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT TOP */}
          <div className="lg:col-span-1">
            <div className="relative overflow-hidden rounded-3xl bg-bala-forest text-bala-cream shadow-[0_18px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.35)] min-h-[220px]">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-bala-gold/50 blur-2xl" />
              </div>

              <div className="relative p-8 sm:p-10 h-full flex flex-col items-center justify-center text-center gap-4">
                <div className="grid place-items-center h-20 w-20 rounded-3xl bg-white/10 border border-white/15">
                  <Gift size={42} className="text-bala-cream" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold">
                  انضم لبرنامج المكافآت
                </h3>

                <p className="font-body text-sm text-bala-cream/90 max-w-xs">
                  اجمع نقاط وخد عروض حصرية كل مرة تزورنا.
                </p>

                <Link
                  to="/register"
                  className="
                    mt-2 inline-flex items-center justify-center
                    rounded-2xl px-6 py-3
                    bg-bala-gold text-bala-brown
                    font-extrabold
                    hover:opacity-90 transition
                  "
                >
                  سجل الآن
                </Link>
              </div>
            </div>
          </div>

          {/* LEFT BOTTOM (Big) */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl bg-bala-forest text-bala-cream shadow-[0_18px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.35)] min-h-[240px]">
              {/* steam + cup-ish */}
              <div className="pointer-events-none absolute left-6 top-6 opacity-30">
                <div className="h-8 w-8 rounded-full bg-bala-gold/40 blur-md" />
                <div className="mt-2 h-8 w-10 rounded-full bg-bala-gold/25 blur-md" />
                <div className="mt-2 h-8 w-7 rounded-full bg-bala-gold/30 blur-md" />
              </div>

              <div className="pointer-events-none absolute -left-6 bottom-0">
                <div className="relative h-56 w-44 rounded-[40px] bg-bala-gold/20">
                  <div className="absolute inset-4 rounded-[32px] bg-white/10" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-12 h-24 w-4 rounded-full bg-bala-gold/30" />
                </div>
              </div>

              <div className="relative p-8 sm:p-10 min-h-[240px] flex flex-col justify-between">
                <div className="space-y-3 max-w-xl">
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                    لاتيه على أصوله
                  </h3>
                  <p className="font-body text-sm sm:text-base text-bala-cream/90">
                    اطلب بسرعة وخلي يومك أحلى بطعم القهوة والشوكولاتة.
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    to="/menu"
                    className="
                      inline-flex items-center gap-2
                      rounded-2xl px-6 py-3
                      bg-bala-cream text-bala-forest
                      font-extrabold
                      shadow-sm hover:opacity-95 transition
                    "
                  >
                    اطلب الآن
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT BOTTOM (Light card) */}
          <div className="lg:col-span-1">
            <div className="rounded-3xl bg-white dark:bg-bala-dark-surface border border-bala-brown/10 dark:border-bala-dark-green/20 shadow-[0_18px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.28)] min-h-[240px]">
              <div className="p-8 sm:p-10 h-full flex flex-col items-center justify-center text-center gap-4">
                <div className="grid place-items-center h-16 w-16 rounded-3xl bg-bala-forest/10 dark:bg-white/10">
                  <User2
                    size={28}
                    className="text-bala-forest dark:text-bala-cream"
                  />
                </div>

                <h3 className="font-display text-2xl font-extrabold text-bala-brown dark:text-bala-cream">
                  أهلاً {userName}
                </h3>

                <p className="font-body text-sm text-bala-brown/70 dark:text-bala-cream/70 max-w-xs">
                  سجّل دخولك علشان تجمع نقاط وتستمتع بعروضنا.
                </p>

                <Link
                  to="/login"
                  className="
                    mt-2 inline-flex items-center justify-center
                    rounded-2xl px-6 py-3
                    bg-bala-gold text-bala-brown
                    font-extrabold
                    hover:opacity-90 transition
                    w-full
                  "
                >
                  تسجيل دخول / إنشاء حساب
                </Link>

              
              </div>
            </div>
          </div>
        </div>

        {/* spacing after section */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HomePromoGrid;