// src/pages/rewards/RewardsPage.tsx
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type Tier = {
  cocoa: number;
  title: string;
  desc: string;
  bullets: string[];
  images?: string[];
};

type FAQ = { q: string; a: string };

export default function RewardsPage() {
  const nav = useNavigate();

  const tiers: Tier[] = useMemo(
    () => [
      {
        cocoa: 25,
        title: "إضافة أو تخصيص",
        desc: "حلوّي الطلب بتخصيص بسيط.",
        bullets: ["إضافة صوص/نكهة", "ترقية حجم (حسب المتاح)", "إضافة توبينج"],
      },
      {
        cocoa: 50,
        title: "حلو صغير",
        desc: "قطعة حلا صغيرة أو إضافة جانبية.",
        bullets: ["كوكي/براونيز صغير", "قطعة شوكولاتة", "إضافة جانبية"],
        images: ["/images/croissant2.svg"],
      },
      {
        cocoa: 150,
        title: "مشروب مُحضّر",
        desc: "اختاري مشروبك المفضل.",
        bullets: ["لاتيه/موكا/هوت شوكليت", "آيس (حسب المتاح)", "تخصيصات أساسية"],
        images: ["/images/r50.svg"],
      },
      {
        cocoa: 200,
        title: "حلا مميز",
        desc: "حلا أكبر أو بوكس صغير.",
        bullets: ["كيك/تشيزكيك", "بوكس شوكولاتة صغير", "حلا موسمي"],
      },
      {
        cocoa: 400,
        title: "تجربة كاملة",
        desc: "أفضل قيمة للاستبدال.",
        bullets: ["بوكس شوكولاتة/قهوة بيت", "خصم كبير على طلب", "هدية خاصة (حسب المتاح)"],
      },
    ],
    [],
  );

  const [activeTier, setActiveTier] = useState(tiers[2].cocoa);

  const active = useMemo(
    () => tiers.find((t) => t.cocoa === activeTier) || tiers[0],
    [activeTier, tiers],
  );

  const faqs: FAQ[] = useMemo(
    () => [
      {
        q: "إزاي أجمع حبّات الكاكاو؟",
        a: "بكل عملية شراء بتكسب/ي حبّات كاكاو حسب طريقة الدفع والعروض المتاحة.",
      },
      {
        q: "هل حبّات الكاكاو ليها تاريخ انتهاء؟",
        a: "ممكن يكون ليها مدة صلاحية حسب سياسة البرنامج. تقدري تعدّليها في سيستمك.",
      },
      {
        q: "أقدر أستبدل في أي فرع؟",
        a: "نعم، الاستبدال متاح في الفروع المشاركة (أو حسب ما تختاريه في النظام).",
      },
      {
        q: "هل ينفع أجمع وأستبدل من غير تطبيق؟",
        a: "ينفع عن طريق رقم الموبايل/الحساب (محاكاة Frontend حاليًا).",
      },
    ],
    [],
  );

  return (
    <div dir="rtl" className="min-h-screen bg-white text-bala-brown">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-bala px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-bala-forest/10 grid place-items-center text-bala-forest font-bold">
              B
            </div>
            <div className="leading-tight">
              <p className="text-xs font-extrabold tracking-widest text-bala-brown/60">
                BALACONBAR
              </p>
              <p className="text-sm font-semibold">Rewards</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => nav("/gifts")}
              className="rounded-bala border border-black/10 px-4 py-2 text-sm font-semibold hover:border-bala-gold"
            >
              بطاقات الهدايا
            </button>
            <button
              onClick={() => nav("/register")}
              className="rounded-bala bg-bala-forest px-4 py-2 text-sm font-semibold text-white hover:shadow-bala-hover"
            >
              انضمي الآن
            </button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="border-b border-black/10">
        <div className="bg-bala-forest text-white">
          <div className="mx-auto max-w-bala px-4 py-4">
            <p className="text-center text-sm font-extrabold tracking-widest">
              مكافآت Balacona
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2">
          <div className="bg-bala-cream">
            <div className="mx-auto max-w-bala px-6 py-10 sm:py-12 md:py-16 lg:py-20">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-bala-forest">
                يومك أحلى <br />
                مع هدية منّا
              </h1>

              <p className="mt-6 max-w-xl text-sm sm:text-base md:text-lg text-bala-brown/80">
                انضمي وابدئي تستمتعي بمزايا برنامج مكافآت بالكونا. اجمعي{" "}
                <span className="font-semibold">حبّات الكاكاو</span> واستبدليها بحلا
                وقهوة.
              </p>

              <button
                onClick={() => nav("/auth/register")}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-bala-forest px-7 py-3 text-sm font-semibold text-white hover:shadow-bala-hover"
              >
                انضمي الآن
              </button>

              <p className="mt-4 text-sm text-bala-brown/70">
                التجربة أحلى مع التطبيق.
                <button
                  onClick={() => nav("/app")}
                  className="mx-2 font-semibold text-bala-forest underline underline-offset-4 hover:text-bala-gold"
                >
                  افتحي التطبيق
                </button>
              </p>
            </div>
          </div>

          <div className="relative min-h-[280px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[520px]">
            <img
              src="/images/rewards-hero.jpg"
              alt="Balaconbar drink"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-bala px-4 py-10 sm:py-12">
          <h2 className="font-display text-3xl sm:text-4xl">ابدئي في 3 خطوات</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "اعملي حساب", d: "سجّلي بسهولة وابدئي تجمعي حبّات الكاكاو." },
              { n: "02", t: "اطلبي وادفعي", d: "اطلبي من الفرع أو أونلاين (حسب ما هتفعّلي)." },
              { n: "03", t: "اجمعي واستبدلي", d: "استبدلي حبّات الكاكاو بحلا وقهوة." },
            ].map((s) => (
              <div key={s.n} className="rounded-bala border border-black/10 bg-white p-6">
                <p className="text-xs font-extrabold tracking-widest text-bala-brown/60">
                  {s.n}
                </p>
                <p className="mt-2 font-display text-2xl">{s.t}</p>
                <p className="mt-2 text-sm opacity-80">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS (Starbucks-like) */}
      <section className="border-b border-black/10 mt-20 ">
        {/* Title + Tabs */}
        <div className="bg-bala-forest/10 py-10 ">
          <div className="mx-auto max-w-bala px-4 py-10 sm:py-12">
            <h2 className="text-center font-display text-3xl sm:text-4xl md:text-5xl font-extrabold">
              استبدلي مفضلاتك
            </h2>

            <div className="mt-8 flex justify-center">
              <div className="w-full max-w-3xl">
                <div className="flex items-end justify-between gap-2 border-b border-black/10">
                  {tiers.map((t) => (
                    <button
                      key={t.cocoa}
                      onClick={() => setActiveTier(t.cocoa)}
                      className={[
                        "relative flex-1 pb-4 pt-2 text-center transition",
                        "text-base sm:text-lg md:text-2xl font-semibold",
                        activeTier === t.cocoa ? "text-bala-brown" : "text-bala-brown/60",
                      ].join(" ")}
                    >
                      <span className="inline-flex items-center gap-1">
                        {t.cocoa}
                        <span className="text-bala-gold text-sm md:text-lg">★</span>
                      </span>

                      {activeTier === t.cocoa ? (
                        <span className="absolute bottom-[-1px] left-1/2 h-[3px] w-16 sm:w-24 -translate-x-1/2 bg-bala-forest" />
                      ) : null}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content panel */}
        <div className="bg-bala-forest/30">
          <div className="mx-auto max-w-bala px-4 py-8 sm:py-10 md:py-12">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-4">
              {/* Images */}
              <div className="order-1 lg:order-1">
                <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4">
                  {active.images?.length ? (
                    active.images.map((src, idx) => (
                      <img
                        key={src}
                        src={src}
                        alt=""
                        loading="lazy"
                        className={[
                          "object-contain drop-shadow-sm",
                          idx === 0 ? "h-[170px] sm:h-[190px]" : "h-[150px] sm:h-[170px]",
                        ].join(" ")}
                      />
                    ))
                  ) : (
                    <>
                      <div className="h-32 w-24 rounded-bala bg-white/50 border border-black/10" />
                      <div className="h-32 w-24 rounded-bala bg-white/50 border border-black/10" />
                      <div className="h-24 w-28 rounded-bala bg-white/50 border border-black/10" />
                    </>
                  )}
                </div>
              </div>

              {/* Text */}
              <div className="order-2 font-bold  lg:order-2 text-right">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-ellipsis md:text-bold  leading-snug">
                  {active.title}
                </h3>

                <p className="mt-3 sm:mt-4  text-sm sm:text-base   text-bala-brown/80 max-w-xl">
                  {active.desc}
                </p>

                <ul className="mt-4 sm:mt-5 space-y-2 text-sm sm:text-base text-bala-brown/80">
                  {active.bullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>

                <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row gap-3 sm:justify-start">
                  <button
                    onClick={() => nav("/auth/register")}
                    className="rounded-full bg-bala-forest px-7 py-3 text-sm font-semibold text-white hover:shadow-bala-hover"
                  >
                    انضمي الآن
                  </button>
                  <button
                    onClick={() => nav("/menu")}
                    className="rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-semibold hover:border-bala-gold"
                  >
                    تصفّحي المنيو
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXTRAS */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-bala px-4 py-10 sm:py-12">
          <h2 className="font-display text-3xl sm:text-4xl">مزايا لا تنتهي</h2>
          <p className="mt-2 text-sm sm:text-base opacity-80">
            مكافآت أكثر… كل ما تستخدم/ي البرنامج أكتر.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "هدية عيد ميلاد", d: "خلي يومك أحلى بمكافأة خاصة." },
              { t: "عروض وتحديات", d: "اجمعي حبّات أكتر من خلال عروض موسمية." },
              { t: "استبدال أسهل", d: "امسحي QR أو اكتبي الكود واستبدلي في ثواني." },
            ].map((x) => (
              <div key={x.t} className="rounded-bala border border-black/10 bg-white p-6">
                <div className="h-12 w-12 rounded-full bg-bala-forest/10" />
                <p className="mt-4 font-display text-2xl">{x.t}</p>
                <p className="mt-2 text-sm opacity-80">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EARNING */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-bala px-4 py-10 sm:py-12">
          <h2 className="font-display text-3xl sm:text-4xl">ازاي تجمع/ي حبّات كاكاو</h2>
          <p className="mt-2 text-sm sm:text-base opacity-80">
            سواء دفع كاش أو كارت… كل شراء يزود رصيدك.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-bala border border-black/10 bg-white p-6">
              <p className="text-xs uppercase opacity-60">دفع عادي</p>
              <p className="mt-2 font-display text-3xl">1 حبّة</p>
              <p className="mt-1 text-sm opacity-75">لكل 1 ج.م (مثال قابل للتعديل)</p>
              <p className="mt-4 text-sm opacity-80">
                مناسب لو بتشتري بشكل سريع في الفرع.
              </p>
            </div>

            <div className="rounded-bala border border-black/10 bg-white p-6">
              <p className="text-xs uppercase opacity-60">دفع عبر التطبيق</p>
              <p className="mt-2 font-display text-3xl">2 حبّة</p>
              <p className="mt-1 text-sm opacity-75">لكل 1 ج.م (مثال قابل للتعديل)</p>
              <p className="mt-4 text-sm opacity-80">
                أسرع + بيجمع حبّات أكتر (ممكن تربطيه بعروض).
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs opacity-60">
            * الأرقام دي مجرد placeholders — عدّليها حسب برنامجك الحقيقي.
          </p>
        </div>
      </section>

      {/* CODE ENTRY */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-bala px-4 py-10 sm:py-12">
          <h2 className="font-display text-3xl sm:text-4xl">عندك كود؟</h2>
          <p className="mt-2 text-sm sm:text-base opacity-80">
            ادخلي كود (مثال: من إيصال/حملة) علشان يضيف حبّات كاكاو لحسابك.
          </p>

          <div className="mt-6 rounded-bala border border-black/10 bg-white p-6">
            <label className="text-sm opacity-80">كود حبّات الكاكاو</label>
            <div className="mt-2 flex flex-col sm:flex-row gap-2">
              <input
                className="w-full rounded-bala border border-black/10 px-4 py-3 outline-none focus:border-bala-forest"
                placeholder="COCOA-XXXX-XXXX"
              />
              <button
                className="rounded-bala bg-bala-forest px-6 py-3 text-sm font-semibold text-white hover:shadow-bala-hover"
                onClick={() => nav("/auth/register")}
              >
                تفعيل
              </button>
            </div>

            <button
              onClick={() => nav("/support")}
              className="mt-3 text-sm font-semibold text-bala-forest hover:text-bala-gold"
            >
              عندك إيصال؟ تواصل معنا
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-bala px-4 py-10 sm:py-12">
          <h2 className="font-display text-3xl sm:text-4xl">أسئلة شائعة</h2>

          <div className="mt-6 grid gap-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="rounded-bala border border-black/10 bg-white p-5"
              >
                <summary className="cursor-pointer text-sm font-semibold">{f.q}</summary>
                <p className="mt-3 text-sm opacity-80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="h-10" />
    </div>
  );
}