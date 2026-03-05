// src/pages/gift/GiftCardsPage.tsx
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type Design = {
  id: string;
  title: string;
  category: "مميز" | "عيد ميلاد" | "شكرًا" | "تهنئة" | "رمضان";
  image?: string; // لو عندك صور حقيقية
};

export const designs: Design[] = [
  { id: "featured_01", title: "يا سلام!", category: "مميز", image: "/Hello.svg" },
  { id: "featured_02", title: "تستاهلي قهوة", category: "مميز", image: "/coffee.png" },
  { id: "featured_03", title: "شكراً", category: "مميز", image: "/Thank.svg" },

  { id: "birthday_01", title: "عيد ميلاد سعيد", category: "عيد ميلاد", image: "/BD.png" },
  { id: "birthday_02", title: "احتفلي بيومك", category: "عيد ميلاد", image: "/BD.png" },
  { id: "birthday_03", title: "هابي بيرثداي", category: "عيد ميلاد", image: "/BD.png" },

  { id: "thankyou_01", title: "شكرًا", category: "شكرًا", image: "/thanks.png" },
  { id: "thankyou_02", title: "من قلبي", category: "شكرًا", image: "/day.png" },
  { id: "thankyou_03", title: "تستاهلي", category: "شكرًا" },

  { id: "congrats_01", title: "مبروك!", category: "تهنئة" },
  { id: "congrats_02", title: "نجاحك فرحنا", category: "تهنئة" },

  { id: "ramadan_01", title: "رمضان كريم", category: "رمضان" },
  { id: "ramadan_02", title: "إفطار سعيد", category: "رمضان" },
];

const categories: Array<Design["category"] | "الكل"> = ["الكل", "مميز", "عيد ميلاد", "شكرًا", "تهنئة", "رمضان"];

function clsx(...arr: Array<string | boolean | undefined | null>) {
  return arr.filter(Boolean).join(" ");
}

function GiftCardTile({ d, onClick }: { d: Design; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "group w-full overflow-hidden rounded-bala bg-white shadow-bala-light transition",
        "hover:-translate-y-0.5 hover:shadow-bala-hover focus:outline-none",
      )}
    >
      {/* أصغر من قبل */}
      <div className="relative aspect-[5/3] w-full overflow-hidden">
        {d.image ? (
          <img
            src={d.image}
            alt={d.title}
            className="h-full w-full object-cover transition group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-bala-forest/15 via-bala-gold/10 to-black/5" />
        )}

        <div className="absolute left-2 top-2 rounded-full bg-white/85 px-2 py-1 text-[10px] font-semibold text-bala-brown backdrop-blur">
          Balaconbar
        </div>
      </div>

      {/* <div className="px-3 py-2 text-right">
        <p className="text-[13px] font-semibold text-bala-brown">{d.title}</p>
        <p className="mt-0.5 text-[11px] opacity-60">{d.category}</p>
      </div> */}
    </button>
  );
}

export default function GiftCardsPage() {
  const nav = useNavigate();
  const [activeCat, setActiveCat] = useState<(typeof categories)[number]>("الكل");

  const filtered = useMemo(() => {
    if (activeCat === "الكل") return designs;
    return designs.filter((d) => d.category === activeCat);
  }, [activeCat]);

  return (
    <div dir="rtl" className="min-h-screen bg-white text-bala-brown">
      <div className="mx-auto max-w-bala px-4 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05]">بطاقات الهدايا</h1>
           
          </div>

          <button
            onClick={() => nav("/gift/redeem")}
            className="self-start rounded-bala border border-black/10 px-4 py-2 text-sm font-semibold text-bala-forest hover:border-bala-gold"
          >
            استرداد كود هدية
          </button>
        </div>

        {/* Filters (ستايل ستاربكس بسيط) */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={clsx(
                "rounded-full border px-4 py-2 text-sm transition",
                activeCat === c
                  ? "border-bala-forest bg-bala-forest text-white"
                  : "border-black/10 hover:border-bala-gold",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid: 4 في الديسكتوب / 2 في الموبايل */}
        <div className="mt-8 grid gap-5 grid-cols-2 lg:grid-cols-4">
          {filtered.map((d) => (
            <GiftCardTile
              key={d.id}
              d={d}
              onClick={() => nav(`/gift/create/${d.id}`)}
            />
          ))}
        </div>

        <div className="mt-10 rounded-bala bg-black/[0.06] px-6 py-5">
          <p className="text-sm md:text-base">
            ملاحظة: تقدرِي تبعتي حتى <span className="font-semibold">10 هدايا</span> في عملية شراء واحدة (لو حابة نضيفها كميزة بعدين).
          </p>
        </div>
      </div>
    </div>
  );
}