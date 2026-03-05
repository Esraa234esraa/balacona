import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/gift/GiftCheckout.tsx
import { useMemo, useState } from "react";
import { addGiftCard } from "../../features/gift/giftStorage";
import { useNavigate } from "react-router-dom";
export default function GiftCheckout() {
    const nav = useNavigate();
    const pending = useMemo(() => {
        const raw = sessionStorage.getItem("bala_gift_pending");
        return raw ? JSON.parse(raw) : null;
    }, []);
    const [loading, setLoading] = useState(false);
    if (!pending) {
        return (_jsx("div", { dir: "rtl", className: "min-h-screen bg-white text-bala-brown", children: _jsx("div", { className: "mx-auto max-w-bala px-4 py-10", children: _jsxs("div", { className: "rounded-bala border border-black/10 bg-white p-6", children: [_jsx("p", { className: "text-sm opacity-80", children: "\u0645\u0641\u064A\u0634 \u0647\u062F\u064A\u0629 \u0645\u0639\u0644\u0651\u0642\u0629 \u0644\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062F\u0641\u0639." }), _jsx("button", { onClick: () => nav("/gifts"), className: "mt-4 rounded-bala bg-bala-forest px-4 py-2 text-white", children: "\u0631\u062C\u0648\u0639 \u0644\u0628\u0637\u0627\u0642\u0627\u062A \u0627\u0644\u0647\u062F\u0627\u064A\u0627" })] }) }) }));
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
    return (_jsx("div", { dir: "rtl", className: "min-h-screen bg-white text-bala-brown", children: _jsxs("div", { className: "mx-auto max-w-bala px-4 py-10", children: [_jsx("p", { className: "text-xs font-extrabold tracking-widest text-bala-brown/60", children: "\u0627\u0644\u062F\u0641\u0639" }), _jsx("h1", { className: "mt-2 font-display text-5xl leading-[1.05]", children: "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628" }), _jsx("p", { className: "mt-3 max-w-2xl text-sm md:text-base opacity-80", children: "\u0631\u0627\u062C\u0639\u064A \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0642\u0628\u0644 \u0625\u0646\u0634\u0627\u0621 \u0643\u0648\u062F \u0627\u0644\u0647\u062F\u064A\u0629." }), _jsxs("div", { className: "mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]", children: [_jsxs("div", { className: "rounded-bala border border-black/10 bg-white p-6", children: [_jsx("h2", { className: "font-display text-2xl", children: "\u0645\u0644\u062E\u0635 \u0627\u0644\u0637\u0644\u0628" }), _jsxs("div", { className: "mt-5 space-y-3 text-sm", children: [_jsxs("div", { className: "flex justify-between gap-4", children: [_jsx("span", { className: "opacity-70", children: "\u0625\u0644\u0649" }), _jsx("span", { className: "font-medium", children: pending.toName })] }), _jsxs("div", { className: "flex justify-between gap-4", children: [_jsx("span", { className: "opacity-70", children: "\u0648\u0633\u064A\u0644\u0629 \u0627\u0644\u062A\u0648\u0627\u0635\u0644" }), _jsx("span", { className: "font-medium", children: pending.toContact })] }), _jsxs("div", { className: "flex justify-between gap-4", children: [_jsx("span", { className: "opacity-70", children: "\u0645\u0646" }), _jsx("span", { className: "font-medium", children: pending.fromName })] }), _jsxs("div", { className: "flex justify-between gap-4", children: [_jsx("span", { className: "opacity-70", children: "\u0627\u0644\u062A\u0635\u0645\u064A\u0645" }), _jsx("span", { className: "font-medium", children: pending.designId })] }), _jsxs("div", { className: "mt-4 border-t border-black/10 pt-4 flex justify-between", children: [_jsx("span", { className: "opacity-70", children: "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A" }), _jsxs("span", { className: "font-semibold", children: [pending.amount, " \u062C.\u0645"] })] })] }), _jsx("button", { onClick: payNow, disabled: loading, className: [
                                        "mt-6 w-full rounded-bala px-5 py-3 text-sm font-semibold text-white transition",
                                        loading
                                            ? "bg-bala-forest/60"
                                            : "bg-bala-forest hover:shadow-bala-hover",
                                    ].join(" "), children: loading ? "جاري إنشاء الكود…" : "ادفع (تجريبي) وأنشئ كود الهدية" }), _jsx("p", { className: "mt-3 text-xs opacity-60", children: "* \u062F\u0641\u0639 \u062A\u062C\u0631\u064A\u0628\u064A (\u0645\u0641\u064A\u0634 \u062F\u0641\u0639 \u062D\u0642\u064A\u0642\u064A)." }), _jsx("button", { onClick: () => nav("/gifts"), className: "mt-4 w-full rounded-bala border border-black/10 px-5 py-3 text-sm font-semibold hover:border-bala-gold", children: "\u062A\u0639\u062F\u064A\u0644 / \u0627\u062E\u062A\u064A\u0627\u0631 \u0643\u0627\u0631\u062A \u0622\u062E\u0631" })] }), _jsxs("div", { className: "rounded-bala bg-black/[0.04] p-6", children: [_jsx("h3", { className: "font-display text-2xl", children: "\u0628\u0639\u062F \u0627\u0644\u062F\u0641\u0639" }), _jsxs("ul", { className: "mt-4 space-y-2 text-sm opacity-85", children: [_jsx("li", { children: "\u2022 \u0647\u064A\u062A\u0648\u0644\u062F \u0643\u0648\u062F \u0647\u062F\u064A\u0629 + \u0631\u0627\u0628\u0637 \u0627\u0633\u062A\u0631\u062F\u0627\u062F." }), _jsx("li", { children: "\u2022 \u062A\u0642\u062F\u0631\u064A \u062A\u0646\u0633\u062E\u064A\u0647\u0645 \u0623\u0648 \u062A\u0628\u0639\u062A\u064A\u0647\u0645 \u0644\u0644\u0645\u0633\u062A\u0644\u0645." }), _jsx("li", { children: "\u2022 \u0627\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F \u0647\u064A\u062E\u0635\u0645 \u0645\u0646 \u0627\u0644\u0631\u0635\u064A\u062F \u062F\u0627\u062E\u0644 localStorage." })] })] })] })] }) }));
}
