// src/pages/gift/GiftSuccess.tsx
import { useMemo } from "react";
import { GiftCard } from "../../features/gift/giftStorage";
import { GiftQRCode } from "../../features/gift/GiftQRCode";
import { useNavigate } from "react-router-dom";

export default function GiftSuccess() {
  const nav = useNavigate();
  const last = useMemo(() => {
    const raw = sessionStorage.getItem("bala_gift_last");
    return raw ? (JSON.parse(raw) as GiftCard) : null;
  }, []);

  if (!last) {
    return (
      <div dir="rtl" className="min-h-screen bg-white text-bala-brown">
        <div className="mx-auto max-w-bala px-4 py-10">
          <div className="rounded-bala border border-black/10 bg-white p-6">
            <p className="text-sm opacity-80">مفيش بيانات للعرض.</p>
            <button
              onClick={() => nav("/gifts")}
              className="mt-4 rounded-bala bg-bala-forest px-4 py-2 text-white"
            >
              إنشاء هدية جديدة
            </button>
          </div>
        </div>
      </div>
    );
  }

  const redeemUrl = `${window.location.origin}/gift/redeem?code=${encodeURIComponent(
    last.code,
  )}`;

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {}
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white text-bala-brown">
      <div className="mx-auto max-w-bala px-4 py-10">
        <p className="text-xs font-extrabold tracking-widest text-bala-brown/60">
          تم الإنشاء
        </p>
        <h1 className="mt-2 font-display text-5xl leading-[1.05]">
          الهدية جاهزة 🎁
        </h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base opacity-80">
          انسخي الكود أو الرابط وابعتيه للمستلم.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          {/* Code Card */}
          <div className="rounded-bala border border-black/10 bg-white p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase opacity-60">كود الهدية</p>
                <p className="mt-1 font-display text-3xl">{last.code}</p>
              </div>
              <button
                onClick={() => copy(last.code)}
                className="rounded-bala border border-black/10 px-4 py-2 text-sm font-semibold hover:border-bala-gold"
              >
                نسخ
              </button>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase opacity-60">رابط الاسترداد</p>
              <div className="mt-2 flex gap-2">
                <input
                  value={redeemUrl}
                  readOnly
                  className="w-full rounded-bala border border-black/10 px-4 py-3 text-sm"
                />
                <button
                  onClick={() => copy(redeemUrl)}
                  className="rounded-bala bg-bala-forest px-4 py-3 text-sm font-semibold text-white hover:shadow-bala-hover"
                >
                  نسخ
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => nav("/gifts")}
                className="rounded-bala border border-black/10 px-5 py-3 text-sm font-semibold hover:border-bala-gold"
              >
                إنشاء هدية أخرى
              </button>
              <button
                onClick={() => nav(`/gift/redeem?code=${encodeURIComponent(last.code)}`)}
                className="rounded-bala bg-bala-forest px-5 py-3 text-sm font-semibold text-white hover:shadow-bala-hover"
              >
                فتح صفحة الاسترداد
              </button>
            </div>

            <p className="mt-4 text-xs opacity-60">
              القيمة: {last.amount} ج.م • إلى: {last.toName}
            </p>
          </div>

          {/* QR Card */}
          <div className="rounded-bala bg-black/[0.04] p-6">
            <h2 className="font-display text-2xl">QR</h2>
            <p className="mt-2 text-sm opacity-85">
              اعمل/ي مسح علشان تفتح صفحة الاسترداد.
            </p>
            <div className="mt-4">
              <GiftQRCode value={redeemUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}