// src/pages/gift/GiftCheckout.tsx
import { useMemo, useState } from "react";
import { addGiftCard, GiftCard } from "../../features/gift/giftStorage";
import { useNavigate } from "react-router-dom";

export default function GiftCheckout() {
  const nav = useNavigate();
  const pending = useMemo(() => {
    const raw = sessionStorage.getItem("bala_gift_pending");
    return raw ? (JSON.parse(raw) as GiftCard) : null;
  }, []);

  const [loading, setLoading] = useState(false);

  if (!pending) {
    return (
      <div dir="rtl" className="min-h-screen bg-white text-bala-brown">
        <div className="mx-auto max-w-bala px-4 py-10">
          <div className="rounded-bala border border-black/10 bg-white p-6">
            <p className="text-sm opacity-80">مفيش هدية معلّقة لإكمال الدفع.</p>
            <button
              onClick={() => nav("/gifts")}
              className="mt-4 rounded-bala bg-bala-forest px-4 py-2 text-white"
            >
              رجوع لبطاقات الهدايا
            </button>
          </div>
        </div>
      </div>
    );
  }

  const payNow = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));

    addGiftCard(pending);
    sessionStorage.removeItem("bala_gift_pending");
    sessionStorage.setItem("bala_gift_last", JSON.stringify(pending));

    setLoading(false);
    nav("/gift/success");
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white text-bala-brown">
      <div className="mx-auto max-w-bala px-4 py-10">
        <p className="text-xs font-extrabold tracking-widest text-bala-brown/60">
          الدفع
        </p>
        <h1 className="mt-2 font-display text-5xl leading-[1.05]">تأكيد الطلب</h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base opacity-80">
          راجعي البيانات قبل إنشاء كود الهدية.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          {/* Summary */}
          <div className="rounded-bala border border-black/10 bg-white p-6">
            <h2 className="font-display text-2xl">ملخص الطلب</h2>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <span className="opacity-70">إلى</span>
                <span className="font-medium">{pending.toName}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="opacity-70">وسيلة التواصل</span>
                <span className="font-medium">{pending.toContact}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="opacity-70">من</span>
                <span className="font-medium">{pending.fromName}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="opacity-70">التصميم</span>
                <span className="font-medium">{pending.designId}</span>
              </div>

              <div className="mt-4 border-t border-black/10 pt-4 flex justify-between">
                <span className="opacity-70">الإجمالي</span>
                <span className="font-semibold">{pending.amount} ج.م</span>
              </div>
            </div>

            <button
              onClick={payNow}
              disabled={loading}
              className={[
                "mt-6 w-full rounded-bala px-5 py-3 text-sm font-semibold text-white transition",
                loading
                  ? "bg-bala-forest/60"
                  : "bg-bala-forest hover:shadow-bala-hover",
              ].join(" ")}
            >
              {loading ? "جاري إنشاء الكود…" : "ادفع (تجريبي) وأنشئ كود الهدية"}
            </button>

            <p className="mt-3 text-xs opacity-60">
              * دفع تجريبي (مفيش دفع حقيقي).
            </p>

            <button
              onClick={() => nav("/gifts")}
              className="mt-4 w-full rounded-bala border border-black/10 px-5 py-3 text-sm font-semibold hover:border-bala-gold"
            >
              تعديل / اختيار كارت آخر
            </button>
          </div>

          {/* Next */}
          <div className="rounded-bala bg-black/[0.04] p-6">
            <h3 className="font-display text-2xl">بعد الدفع</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-85">
              <li>• هيتولد كود هدية + رابط استرداد.</li>
              <li>• تقدري تنسخيهم أو تبعتيهم للمستلم.</li>
              <li>• الاسترداد هيخصم من الرصيد داخل localStorage.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}