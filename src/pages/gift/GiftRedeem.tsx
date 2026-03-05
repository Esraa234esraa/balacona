// src/pages/gift/GiftRedeem.tsx
import { useMemo, useState } from "react";
import { findGiftByCode, updateGift } from "../../features/gift/giftStorage";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function GiftRedeem() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const initial = params.get("code") || "";

  const [code, setCode] = useState(initial);
  const [useAmount, setUseAmount] = useState<string>("");

  const gift = useMemo(
    () => (code ? findGiftByCode(code.trim()) : undefined),
    [code],
  );

  const redeem = () => {
    if (!gift || gift.status !== "active") return;
    const n = Number(useAmount);
    if (!Number.isFinite(n) || n <= 0) return;

    const nextBalance = Math.max(0, gift.balance - n);
    const next = {
      ...gift,
      balance: nextBalance,
      status: nextBalance === 0 ? "redeemed" : "active",
    } as const;

    updateGift(next);

    sessionStorage.setItem(
      "bala_redeem_result",
      JSON.stringify({
        code: gift.code,
        usedAmount: n,
        remainingBalance: nextBalance,
        toName: gift.toName,
      }),
    );

    navigate("/gift/redeemed");
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white text-bala-brown">
      <div className="mx-auto max-w-bala px-4 py-8 sm:py-10">
        <p className="text-xs font-extrabold tracking-widest text-bala-brown/60">
          الاسترداد
        </p>

        <h1 className="mt-2 font-display text-3xl sm:text-5xl leading-[1.1]">
          استرداد الهدية
        </h1>

        <p className="mt-3 max-w-2xl text-sm sm:text-base opacity-80">
          اكتبي كود الهدية علشان تشوفي الرصيد وتستخدميه.
        </p>

        <div className="mt-6 sm:mt-8 rounded-bala border border-black/10 bg-white p-4 sm:p-6">
          <label className="text-sm opacity-80">كود الهدية</label>

          {/* input */}
          <div className="mt-2">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full rounded-bala border border-black/10 px-4 py-3 outline-none focus:border-bala-forest"
              placeholder="BALA-XXXX-XXXX"
            />
          </div>

          {!code.trim() ? (
            <p className="mt-4 text-sm opacity-70">
              اكتبي الكود ثم اضغطي استخدام.
            </p>
          ) : !gift ? (
            <p className="mt-4 text-sm text-red-600">الكود غير موجود.</p>
          ) : (
            <div className="mt-6 rounded-bala bg-black/[0.04] p-4 sm:p-5">
              {/* ✅ على الموبايل عمود - على الديسكتوب صف */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                {/* Left */}
                <div>
                  <p className="text-xs uppercase opacity-60">الرصيد</p>
                  <p className="mt-1 font-display text-3xl sm:text-4xl">
                    {gift.balance} ج.م
                  </p>
                  <p className="mt-2 text-sm opacity-75">
                    الحالة: <span className="font-semibold">{gift.status}</span>
                  </p>
                </div>

                {/* Right */}
                <div className="w-full lg:w-[360px]">
                  <label className="text-sm opacity-80">مبلغ الاستخدام</label>

                  {/* ✅ على الموبايل input فوق الزر */}
                  <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                    <input
                      value={useAmount}
                      onChange={(e) => setUseAmount(e.target.value)}
                      className="w-full rounded-bala border border-black/10 bg-white px-4 py-3 outline-none focus:border-bala-forest"
                      placeholder="مثال: 120"
                      disabled={gift.status !== "active"}
                      inputMode="decimal"
                    />

                    <button
                      onClick={redeem}
                      disabled={gift.status !== "active"}
                      className={[
                        "rounded-bala px-4 py-3 text-sm font-semibold text-white transition",
                        "w-full sm:w-auto", // ✅ الزر ياخد عرض كامل على الموبايل
                        gift.status === "active"
                          ? "bg-bala-forest hover:shadow-bala-hover"
                          : "bg-black/20",
                      ].join(" ")}
                    >
                      استخدام
                    </button>
                  </div>

                  <p className="mt-2 text-xs opacity-60">
                    * خصم تجريبي من الرصيد داخل localStorage
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ✅ زر الرجوع ياخد عرض كامل على الموبايل */}
          <button
            onClick={() => navigate("/gift")}
            className="mt-6 w-full sm:w-auto rounded-bala border border-black/10 px-5 py-3 text-sm font-semibold hover:border-bala-gold"
          >
            رجوع لبطاقات الهدايا
          </button>
        </div>
      </div>
    </div>
  );
}