import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/gift/GiftCardsPage.tsx
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
export const designs = [
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
const categories = ["الكل", "مميز", "عيد ميلاد", "شكرًا", "تهنئة", "رمضان"];
function clsx(...arr) {
    return arr.filter(Boolean).join(" ");
}
function GiftCardTile({ d, onClick }) {
    return (_jsx("button", { onClick: onClick, className: clsx("group w-full overflow-hidden rounded-bala bg-white shadow-bala-light transition", "hover:-translate-y-0.5 hover:shadow-bala-hover focus:outline-none"), children: _jsxs("div", { className: "relative aspect-[5/3] w-full overflow-hidden", children: [d.image ? (_jsx("img", { src: d.image, alt: d.title, className: "h-full w-full object-cover transition group-hover:scale-[1.02]", loading: "lazy" })) : (_jsx("div", { className: "h-full w-full bg-gradient-to-br from-bala-forest/15 via-bala-gold/10 to-black/5" })), _jsx("div", { className: "absolute left-2 top-2 rounded-full bg-white/85 px-2 py-1 text-[10px] font-semibold text-bala-brown backdrop-blur", children: "Balaconbar" })] }) }));
}
export default function GiftCardsPage() {
    const nav = useNavigate();
    const [activeCat, setActiveCat] = useState("الكل");
    const filtered = useMemo(() => {
        if (activeCat === "الكل")
            return designs;
        return designs.filter((d) => d.category === activeCat);
    }, [activeCat]);
    return (_jsx("div", { dir: "rtl", className: "min-h-screen bg-white text-bala-brown", children: _jsxs("div", { className: "mx-auto max-w-bala px-4 py-10", children: [_jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-end md:justify-between", children: [_jsx("div", { children: _jsx("h1", { className: "font-display text-5xl md:text-6xl leading-[1.05]", children: "\u0628\u0637\u0627\u0642\u0627\u062A \u0627\u0644\u0647\u062F\u0627\u064A\u0627" }) }), _jsx("button", { onClick: () => nav("/gift/redeem"), className: "self-start rounded-bala border border-black/10 px-4 py-2 text-sm font-semibold text-bala-forest hover:border-bala-gold", children: "\u0627\u0633\u062A\u0631\u062F\u0627\u062F \u0643\u0648\u062F \u0647\u062F\u064A\u0629" })] }), _jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: categories.map((c) => (_jsx("button", { onClick: () => setActiveCat(c), className: clsx("rounded-full border px-4 py-2 text-sm transition", activeCat === c
                            ? "border-bala-forest bg-bala-forest text-white"
                            : "border-black/10 hover:border-bala-gold"), children: c }, c))) }), _jsx("div", { className: "mt-8 grid gap-5 grid-cols-2 lg:grid-cols-4", children: filtered.map((d) => (_jsx(GiftCardTile, { d: d, onClick: () => nav(`/gift/create/${d.id}`) }, d.id))) }), _jsx("div", { className: "mt-10 rounded-bala bg-black/[0.06] px-6 py-5", children: _jsxs("p", { className: "text-sm md:text-base", children: ["\u0645\u0644\u0627\u062D\u0638\u0629: \u062A\u0642\u062F\u0631\u0650\u064A \u062A\u0628\u0639\u062A\u064A \u062D\u062A\u0649 ", _jsx("span", { className: "font-semibold", children: "10 \u0647\u062F\u0627\u064A\u0627" }), " \u0641\u064A \u0639\u0645\u0644\u064A\u0629 \u0634\u0631\u0627\u0621 \u0648\u0627\u062D\u062F\u0629 (\u0644\u0648 \u062D\u0627\u0628\u0629 \u0646\u0636\u064A\u0641\u0647\u0627 \u0643\u0645\u064A\u0632\u0629 \u0628\u0639\u062F\u064A\u0646)."] }) })] }) }));
}
