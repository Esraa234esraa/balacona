import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/gift/GiftRedeem.tsx
import { useMemo, useState } from "react";
import { findGiftByCode, updateGift } from "../../features/gift/giftStorage";
import { useNavigate, useSearchParams } from "react-router-dom";
export default function GiftRedeem() {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const initial = params.get("code") || "";
    const [code, setCode] = useState(initial);
    const [useAmount, setUseAmount] = useState("");
    const gift = useMemo(() => (code ? findGiftByCode(code.trim()) : undefined), [code]);
    const redeem = () => {
        if (!gift || gift.status !== "active")
            return;
        const n = Number(useAmount);
        if (!Number.isFinite(n) || n <= 0)
            return;
        const nextBalance = Math.max(0, gift.balance - n);
        const next = {
            ...gift,
            balance: nextBalance,
            status: nextBalance === 0 ? "redeemed" : "active",
        };
        updateGift(next);
        sessionStorage.setItem("bala_redeem_result", JSON.stringify({
            code: gift.code,
            usedAmount: n,
            remainingBalance: nextBalance,
            toName: gift.toName,
        }));
        navigate("/gift/redeemed");
    };
    return (_jsx("div", { dir: "rtl", className: "min-h-screen bg-white text-bala-brown", children: _jsxs("div", { className: "mx-auto max-w-bala px-4 py-8 sm:py-10", children: [_jsx("p", { className: "text-xs font-extrabold tracking-widest text-bala-brown/60", children: "\u0627\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F" }), _jsx("h1", { className: "mt-2 font-display text-3xl sm:text-5xl leading-[1.1]", children: "\u0627\u0633\u062A\u0631\u062F\u0627\u062F \u0627\u0644\u0647\u062F\u064A\u0629" }), _jsx("p", { className: "mt-3 max-w-2xl text-sm sm:text-base opacity-80", children: "\u0627\u0643\u062A\u0628\u064A \u0643\u0648\u062F \u0627\u0644\u0647\u062F\u064A\u0629 \u0639\u0644\u0634\u0627\u0646 \u062A\u0634\u0648\u0641\u064A \u0627\u0644\u0631\u0635\u064A\u062F \u0648\u062A\u0633\u062A\u062E\u062F\u0645\u064A\u0647." }), _jsxs("div", { className: "mt-6 sm:mt-8 rounded-bala border border-black/10 bg-white p-4 sm:p-6", children: [_jsx("label", { className: "text-sm opacity-80", children: "\u0643\u0648\u062F \u0627\u0644\u0647\u062F\u064A\u0629" }), _jsx("div", { className: "mt-2", children: _jsx("input", { value: code, onChange: (e) => setCode(e.target.value), className: "w-full rounded-bala border border-black/10 px-4 py-3 outline-none focus:border-bala-forest", placeholder: "BALA-XXXX-XXXX" }) }), !code.trim() ? (_jsx("p", { className: "mt-4 text-sm opacity-70", children: "\u0627\u0643\u062A\u0628\u064A \u0627\u0644\u0643\u0648\u062F \u062B\u0645 \u0627\u0636\u063A\u0637\u064A \u0627\u0633\u062A\u062E\u062F\u0627\u0645." })) : !gift ? (_jsx("p", { className: "mt-4 text-sm text-red-600", children: "\u0627\u0644\u0643\u0648\u062F \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F." })) : (_jsx("div", { className: "mt-6 rounded-bala bg-black/[0.04] p-4 sm:p-5", children: _jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-xs uppercase opacity-60", children: "\u0627\u0644\u0631\u0635\u064A\u062F" }), _jsxs("p", { className: "mt-1 font-display text-3xl sm:text-4xl", children: [gift.balance, " \u062C.\u0645"] }), _jsxs("p", { className: "mt-2 text-sm opacity-75", children: ["\u0627\u0644\u062D\u0627\u0644\u0629: ", _jsx("span", { className: "font-semibold", children: gift.status })] })] }), _jsxs("div", { className: "w-full lg:w-[360px]", children: [_jsx("label", { className: "text-sm opacity-80", children: "\u0645\u0628\u0644\u063A \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645" }), _jsxs("div", { className: "mt-2 flex flex-col gap-2 sm:flex-row", children: [_jsx("input", { value: useAmount, onChange: (e) => setUseAmount(e.target.value), className: "w-full rounded-bala border border-black/10 bg-white px-4 py-3 outline-none focus:border-bala-forest", placeholder: "\u0645\u062B\u0627\u0644: 120", disabled: gift.status !== "active", inputMode: "decimal" }), _jsx("button", { onClick: redeem, disabled: gift.status !== "active", className: [
                                                            "rounded-bala px-4 py-3 text-sm font-semibold text-white transition",
                                                            "w-full sm:w-auto", // ✅ الزر ياخد عرض كامل على الموبايل
                                                            gift.status === "active"
                                                                ? "bg-bala-forest hover:shadow-bala-hover"
                                                                : "bg-black/20",
                                                        ].join(" "), children: "\u0627\u0633\u062A\u062E\u062F\u0627\u0645" })] }), _jsx("p", { className: "mt-2 text-xs opacity-60", children: "* \u062E\u0635\u0645 \u062A\u062C\u0631\u064A\u0628\u064A \u0645\u0646 \u0627\u0644\u0631\u0635\u064A\u062F \u062F\u0627\u062E\u0644 localStorage" })] })] }) })), _jsx("button", { onClick: () => navigate("/gift"), className: "mt-6 w-full sm:w-auto rounded-bala border border-black/10 px-5 py-3 text-sm font-semibold hover:border-bala-gold", children: "\u0631\u062C\u0648\u0639 \u0644\u0628\u0637\u0627\u0642\u0627\u062A \u0627\u0644\u0647\u062F\u0627\u064A\u0627" })] })] }) }));
}
