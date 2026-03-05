// src/pages/gift/GiftRedeemed.tsx
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

type RedeemResult = {
  code: string;
  usedAmount: number;
  remainingBalance: number;
  toName?: string;
};

export default function GiftRedeemed() {
  const nav = useNavigate();

  const result = useMemo(() => {
    const raw = sessionStorage.getItem("bala_redeem_result");
    return raw ? (JSON.parse(raw) as RedeemResult) : null;
  }, []);

  if (!result) {
    return (
      <div dir="rtl" className="min-h-screen bg-white text-bala-brown">
        <div className="mx-auto max-w-bala px-4 py-10">
          <div className="rounded-bala border border-black/10 bg-white p-6">
            <p className="text-sm opacity-80">مفيش بيانات لعملية الاسترداد.</p>
            <button
              onClick={() => nav("/gift/redeem")}
              className="mt-4 rounded-bala bg-bala-forest px-4 py-2 text-white"
            >
              رجوع لصفحة الاسترداد
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-white text-bala-brown">
      <div className="mx-auto max-w-bala px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-extrabold tracking-widest text-bala-brown/60">
            تأكيد العملية
          </p>
          <h1 className="mt-2 font-display text-5xl leading-[1.05]">
            تم الاسترداد ✅
          </h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base opacity-80">
            تم خصم <span className="font-semibold">{result.usedAmount} ج.م</span>{" "}
            بنجاح من رصيد الهدية.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          {/* Left: Details */}
          <div className="rounded-bala border border-black/10 bg-white p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase opacity-60">كود الهدية</p>
                <p className="mt-1 font-display text-3xl">{result.code}</p>
              </div>

              <div className="rounded-full bg-black/[0.06] px-4 py-2 text-sm font-semibold">
                المتبقي: {result.remainingBalance} ج.م
              </div>
            </div>

            {result.toName ? (
              <p className="mt-4 text-sm opacity-80">
                إلى: <span className="font-semibold">{result.toName}</span>
              </p>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  nav(`/gift/redeem?code=${encodeURIComponent(result.code)}`)
                }
                className="rounded-bala border border-black/10 px-5 py-3 text-sm font-semibold hover:border-bala-gold"
              >
                استخدام مرة أخرى
              </button>

              <button
                onClick={() => nav("/gifts")}
                className="rounded-bala bg-bala-forest px-5 py-3 text-sm font-semibold text-white hover:shadow-bala-hover"
              >
                رجوع لبطاقات الهدايا
              </button>
            </div>
          </div>

          {/* Right: Simple “next steps” card */}
          <div className="rounded-bala bg-black/[0.04] p-6">
            <h2 className="font-display text-2xl">الخطوة الجاية</h2>
            <ul className="mt-4 space-y-2 text-sm opacity-85">
              <li>• تقدر/ي تستخدم/ي نفس الكود تاني طالما فيه رصيد.</li>
              <li>• لو الرصيد خلص، الحالة هتبقى “redeemed”.</li>
              <li>• ممكن تبعتي كود الهدية لحد تاني لو حابة.</li>
            </ul>

            <button
              onClick={() => nav("/gift/create/featured_01")}
              className="mt-6 w-full rounded-bala bg-bala-forest px-5 py-3 text-sm font-semibold text-white hover:shadow-bala-hover"
            >
              إنشاء هدية جديدة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}