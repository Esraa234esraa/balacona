// src/pages/gift/GiftCreatePage.tsx
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createGiftCode, createGiftId, GiftCard } from "../../features/gift/giftStorage";
import { designs } from "./GiftPage";

type Design = {
  id: string;
  title: string;
  category: string;
  image?: string;
};

const presets = [250, 500, 1000, 1500];



function clsx(...arr: Array<string | boolean | undefined | null>) {
  return arr.filter(Boolean).join(" ");
}

export default function GiftCreatePage() {
  const nav = useNavigate();
  const { designId = "" } = useParams();

  const design = useMemo(() => designs.find((d) => d.id === designId), [designId]);
  const [amount, setAmount] = useState<number>(presets[1]);
  const [customAmount, setCustomAmount] = useState<string>("");

  const [toName, setToName] = useState("");
  const [toContact, setToContact] = useState("");
  const [fromName, setFromName] = useState("");
  const [message, setMessage] = useState("");

  const finalAmount = useMemo(() => {
    const n = Number(customAmount);
    return customAmount.trim() ? (Number.isFinite(n) ? n : amount) : amount;
  }, [customAmount, amount]);

  const canContinue =
    !!design &&
    finalAmount >= 50 &&
    toName.trim().length >= 2 &&
    toContact.trim().length >= 5 &&
    fromName.trim().length >= 2;

  const onContinue = () => {
    if (!design) return;

    const card: GiftCard = {
      id: createGiftId(),
      code: createGiftCode(),
      amount: finalAmount,
      balance: finalAmount,
      toName: toName.trim(),
      toContact: toContact.trim(),
      fromName: fromName.trim(),
      message: message.trim() || undefined,
      designId: design.id,
      createdAt: new Date().toISOString(),
      status: "active",
    };

    sessionStorage.setItem("bala_gift_pending", JSON.stringify(card));
    nav("/gift/checkout");
  };

  if (!design) {
    return (
      <div dir="rtl" className="min-h-screen bg-white text-bala-brown">
        <div className="mx-auto max-w-bala px-4 py-10">
          <div className="rounded-bala border border-black/10 bg-white p-6 shadow-bala-light">
            <p className="text-sm opacity-80">الكارت غير موجود.</p>
            <button
              onClick={() => nav("/gifts")}
              className="mt-4 rounded-bala bg-bala-forest px-4 py-2 text-white"
            >
              رجوع لصفحة الكروت
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-white text-bala-brown">
      <div className="mx-auto max-w-bala px-4 py-10">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => nav("/gifts")}
            className="rounded-bala border border-black/10 px-4 py-2 text-sm font-semibold text-bala-forest hover:border-bala-gold"
          >
            ← رجوع للكروت
          </button>

          <div className="text-sm opacity-70">
            التصميم: <span className="font-semibold opacity-100">{design.title}</span>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <div className="rounded-bala border border-black/10 bg-white p-6 shadow-bala-light">
            <h1 className="font-display text-3xl">تفاصيل الهدية</h1>
            <p className="mt-2 text-sm opacity-75">
              كمّلي البيانات، وبعدها نطلع كود الاسترداد.
            </p>

            {/* Amount */}
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">اختاري المبلغ</p>
              <div className="flex flex-wrap gap-2">
                {presets.map((p) => (
                  <button
                    key={p}
                    onClick={() => {
                      setAmount(p);
                      setCustomAmount("");
                    }}
                    className={clsx(
                      "rounded-full border px-4 py-2 text-sm transition",
                      customAmount.trim()
                        ? "border-black/10"
                        : amount === p
                          ? "border-bala-forest bg-bala-forest text-white"
                          : "border-black/10 hover:border-bala-gold",
                    )}
                  >
                    {p} ج.م
                  </button>
                ))}
              </div>

              <div className="mt-3">
                <label className="text-sm opacity-80">مبلغ مخصص</label>
                <input
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="مثال: 750"
                  className="mt-2 w-full rounded-bala border border-black/10 bg-white px-4 py-3 outline-none focus:border-bala-forest"
                />
                <p className="mt-1 text-xs opacity-60">الحد الأدنى 50 ج.م</p>
              </div>
            </div>

            {/* To/From */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm opacity-80">إلى (الاسم)</label>
                <input
                  value={toName}
                  onChange={(e) => setToName(e.target.value)}
                  className="mt-2 w-full rounded-bala border border-black/10 px-4 py-3 outline-none focus:border-bala-forest"
                  placeholder="اسم المستلم"
                />
              </div>
              <div>
                <label className="text-sm opacity-80">إلى (إيميل أو رقم)</label>
                <input
                  value={toContact}
                  onChange={(e) => setToContact(e.target.value)}
                  className="mt-2 w-full rounded-bala border border-black/10 px-4 py-3 outline-none focus:border-bala-forest"
                  placeholder="example@mail.com أو 01xxxxxxxxx"
                />
              </div>
              <div>
                <label className="text-sm opacity-80">من (الاسم)</label>
                <input
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                  className="mt-2 w-full rounded-bala border border-black/10 px-4 py-3 outline-none focus:border-bala-forest"
                  placeholder="اسمك"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm opacity-80">رسالة (اختياري)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 min-h-[110px] w-full rounded-bala border border-black/10 px-4 py-3 outline-none focus:border-bala-forest"
                  placeholder="اكتبي رسالة لطيفة…"
                />
              </div>
            </div>

            {/* Continue */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm opacity-70">
                الإجمالي:{" "}
                <span className="font-semibold opacity-100">{finalAmount} ج.م</span>
              </div>
              <button
                disabled={!canContinue}
                onClick={onContinue}
                className={clsx(
                  "rounded-bala px-6 py-3 font-medium transition",
                  canContinue
                    ? "bg-bala-forest text-white hover:shadow-bala-hover"
                    : "cursor-not-allowed bg-black/10 text-black/40",
                )}
              >
                متابعة للدفع
              </button>
            </div>
          </div>

          {/* Preview */}
          <div className="rounded-bala bg-bala-forest p-6 text-white shadow-bala-light">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl">معاينة الكارت</h3>
              <span className="rounded-full bg-bala-gold px-3 py-1 text-xs font-semibold text-bala-brown">
                Balaconbar
              </span>
            </div>

            <div className="mt-6 overflow-hidden rounded-bala bg-white/10">
              <div className="relative aspect-[4/3]">
                {design.image ? (
                  <img src={design.image} alt={design.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-bala-gold/15 via-white/5 to-black/10" />
                )}
              </div>

              <div className="p-5">
                <p className="text-sm opacity-90">
                  إلى: <span className="font-semibold">{toName || "—"}</span>
                </p>
                <p className="text-sm opacity-90">
                  من: <span className="font-semibold">{fromName || "—"}</span>
                </p>

                <div className="mt-4">
                  <p className="text-xs uppercase opacity-70">قيمة الهدية</p>
                  <p className="mt-1 font-display text-4xl">{finalAmount} ج.م</p>
                </div>

                <p className="mt-4 text-sm opacity-90">
                  {message || "حلّي يومه بهدية من بالكون بار."}
                </p>

                <p className="mt-4 text-xs opacity-70">
                  {design.category} • {design.title}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-bala bg-black/20 p-4 text-sm opacity-90">
              بعد الدفع هيتولد كود + QR للاسترداد.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}