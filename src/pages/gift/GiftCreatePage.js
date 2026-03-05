import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/gift/GiftCreatePage.tsx
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createGiftCode, createGiftId } from "../../features/gift/giftStorage";
import { designs } from "./GiftPage";
const presets = [250, 500, 1000, 1500];
function clsx(...arr) {
    return arr.filter(Boolean).join(" ");
}
export default function GiftCreatePage() {
    const nav = useNavigate();
    const { designId = "" } = useParams();
    const design = useMemo(() => designs.find((d) => d.id === designId), [designId]);
    const [amount, setAmount] = useState(presets[1]);
    const [customAmount, setCustomAmount] = useState("");
    const [toName, setToName] = useState("");
    const [toContact, setToContact] = useState("");
    const [fromName, setFromName] = useState("");
    const [message, setMessage] = useState("");
    const finalAmount = useMemo(() => {
        const n = Number(customAmount);
        return customAmount.trim() ? (Number.isFinite(n) ? n : amount) : amount;
    }, [customAmount, amount]);
    const canContinue = !!design &&
        finalAmount >= 50 &&
        toName.trim().length >= 2 &&
        toContact.trim().length >= 5 &&
        fromName.trim().length >= 2;
    const onContinue = () => {
        if (!design)
            return;
        const card = {
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
        return (_jsx("div", { dir: "rtl", className: "min-h-screen bg-white text-bala-brown", children: _jsx("div", { className: "mx-auto max-w-bala px-4 py-10", children: _jsxs("div", { className: "rounded-bala border border-black/10 bg-white p-6 shadow-bala-light", children: [_jsx("p", { className: "text-sm opacity-80", children: "\u0627\u0644\u0643\u0627\u0631\u062A \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F." }), _jsx("button", { onClick: () => nav("/gifts"), className: "mt-4 rounded-bala bg-bala-forest px-4 py-2 text-white", children: "\u0631\u062C\u0648\u0639 \u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0643\u0631\u0648\u062A" })] }) }) }));
    }
    return (_jsx("div", { dir: "rtl", className: "min-h-screen bg-white text-bala-brown", children: _jsxs("div", { className: "mx-auto max-w-bala px-4 py-10", children: [_jsxs("div", { className: "flex items-center justify-between gap-3", children: [_jsx("button", { onClick: () => nav("/gifts"), className: "rounded-bala border border-black/10 px-4 py-2 text-sm font-semibold text-bala-forest hover:border-bala-gold", children: "\u2190 \u0631\u062C\u0648\u0639 \u0644\u0644\u0643\u0631\u0648\u062A" }), _jsxs("div", { className: "text-sm opacity-70", children: ["\u0627\u0644\u062A\u0635\u0645\u064A\u0645: ", _jsx("span", { className: "font-semibold opacity-100", children: design.title })] })] }), _jsxs("div", { className: "mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]", children: [_jsxs("div", { className: "rounded-bala border border-black/10 bg-white p-6 shadow-bala-light", children: [_jsx("h1", { className: "font-display text-3xl", children: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0647\u062F\u064A\u0629" }), _jsx("p", { className: "mt-2 text-sm opacity-75", children: "\u0643\u0645\u0651\u0644\u064A \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A\u060C \u0648\u0628\u0639\u062F\u0647\u0627 \u0646\u0637\u0644\u0639 \u0643\u0648\u062F \u0627\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F." }), _jsxs("div", { className: "mt-6", children: [_jsx("p", { className: "mb-2 text-sm font-medium", children: "\u0627\u062E\u062A\u0627\u0631\u064A \u0627\u0644\u0645\u0628\u0644\u063A" }), _jsx("div", { className: "flex flex-wrap gap-2", children: presets.map((p) => (_jsxs("button", { onClick: () => {
                                                    setAmount(p);
                                                    setCustomAmount("");
                                                }, className: clsx("rounded-full border px-4 py-2 text-sm transition", customAmount.trim()
                                                    ? "border-black/10"
                                                    : amount === p
                                                        ? "border-bala-forest bg-bala-forest text-white"
                                                        : "border-black/10 hover:border-bala-gold"), children: [p, " \u062C.\u0645"] }, p))) }), _jsxs("div", { className: "mt-3", children: [_jsx("label", { className: "text-sm opacity-80", children: "\u0645\u0628\u0644\u063A \u0645\u062E\u0635\u0635" }), _jsx("input", { value: customAmount, onChange: (e) => setCustomAmount(e.target.value), placeholder: "\u0645\u062B\u0627\u0644: 750", className: "mt-2 w-full rounded-bala border border-black/10 bg-white px-4 py-3 outline-none focus:border-bala-forest" }), _jsx("p", { className: "mt-1 text-xs opacity-60", children: "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 50 \u062C.\u0645" })] })] }), _jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: [_jsxs("div", { children: [_jsx("label", { className: "text-sm opacity-80", children: "\u0625\u0644\u0649 (\u0627\u0644\u0627\u0633\u0645)" }), _jsx("input", { value: toName, onChange: (e) => setToName(e.target.value), className: "mt-2 w-full rounded-bala border border-black/10 px-4 py-3 outline-none focus:border-bala-forest", placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0644\u0645" })] }), _jsxs("div", { children: [_jsx("label", { className: "text-sm opacity-80", children: "\u0625\u0644\u0649 (\u0625\u064A\u0645\u064A\u0644 \u0623\u0648 \u0631\u0642\u0645)" }), _jsx("input", { value: toContact, onChange: (e) => setToContact(e.target.value), className: "mt-2 w-full rounded-bala border border-black/10 px-4 py-3 outline-none focus:border-bala-forest", placeholder: "example@mail.com \u0623\u0648 01xxxxxxxxx" })] }), _jsxs("div", { children: [_jsx("label", { className: "text-sm opacity-80", children: "\u0645\u0646 (\u0627\u0644\u0627\u0633\u0645)" }), _jsx("input", { value: fromName, onChange: (e) => setFromName(e.target.value), className: "mt-2 w-full rounded-bala border border-black/10 px-4 py-3 outline-none focus:border-bala-forest", placeholder: "\u0627\u0633\u0645\u0643" })] }), _jsxs("div", { className: "sm:col-span-2", children: [_jsx("label", { className: "text-sm opacity-80", children: "\u0631\u0633\u0627\u0644\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)" }), _jsx("textarea", { value: message, onChange: (e) => setMessage(e.target.value), className: "mt-2 min-h-[110px] w-full rounded-bala border border-black/10 px-4 py-3 outline-none focus:border-bala-forest", placeholder: "\u0627\u0643\u062A\u0628\u064A \u0631\u0633\u0627\u0644\u0629 \u0644\u0637\u064A\u0641\u0629\u2026" })] })] }), _jsxs("div", { className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [_jsxs("div", { className: "text-sm opacity-70", children: ["\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A:", " ", _jsxs("span", { className: "font-semibold opacity-100", children: [finalAmount, " \u062C.\u0645"] })] }), _jsx("button", { disabled: !canContinue, onClick: onContinue, className: clsx("rounded-bala px-6 py-3 font-medium transition", canContinue
                                                ? "bg-bala-forest text-white hover:shadow-bala-hover"
                                                : "cursor-not-allowed bg-black/10 text-black/40"), children: "\u0645\u062A\u0627\u0628\u0639\u0629 \u0644\u0644\u062F\u0641\u0639" })] })] }), _jsxs("div", { className: "rounded-bala bg-bala-forest p-6 text-white shadow-bala-light", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "font-display text-2xl", children: "\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0643\u0627\u0631\u062A" }), _jsx("span", { className: "rounded-full bg-bala-gold px-3 py-1 text-xs font-semibold text-bala-brown", children: "Balaconbar" })] }), _jsxs("div", { className: "mt-6 overflow-hidden rounded-bala bg-white/10", children: [_jsx("div", { className: "relative aspect-[4/3]", children: design.image ? (_jsx("img", { src: design.image, alt: design.title, className: "h-full w-full object-cover" })) : (_jsx("div", { className: "h-full w-full bg-gradient-to-br from-bala-gold/15 via-white/5 to-black/10" })) }), _jsxs("div", { className: "p-5", children: [_jsxs("p", { className: "text-sm opacity-90", children: ["\u0625\u0644\u0649: ", _jsx("span", { className: "font-semibold", children: toName || "—" })] }), _jsxs("p", { className: "text-sm opacity-90", children: ["\u0645\u0646: ", _jsx("span", { className: "font-semibold", children: fromName || "—" })] }), _jsxs("div", { className: "mt-4", children: [_jsx("p", { className: "text-xs uppercase opacity-70", children: "\u0642\u064A\u0645\u0629 \u0627\u0644\u0647\u062F\u064A\u0629" }), _jsxs("p", { className: "mt-1 font-display text-4xl", children: [finalAmount, " \u062C.\u0645"] })] }), _jsx("p", { className: "mt-4 text-sm opacity-90", children: message || "حلّي يومه بهدية من بالكون بار." }), _jsxs("p", { className: "mt-4 text-xs opacity-70", children: [design.category, " \u2022 ", design.title] })] })] }), _jsx("div", { className: "mt-6 rounded-bala bg-black/20 p-4 text-sm opacity-90", children: "\u0628\u0639\u062F \u0627\u0644\u062F\u0641\u0639 \u0647\u064A\u062A\u0648\u0644\u062F \u0643\u0648\u062F + QR \u0644\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F." })] })] })] }) }));
}
