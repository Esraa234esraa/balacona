import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp } from 'lucide-react';
export const OfferCard = ({ offer }) => {
    const [timeLeft, setTimeLeft] = useState('');
    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            const end = new Date(offer.endDate);
            const diff = end.getTime() - now.getTime();
            if (diff <= 0) {
                setTimeLeft('انتهت');
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            setTimeLeft(`${days}د ${hours}س ${minutes}د`);
        };
        updateTimer();
        const interval = setInterval(updateTimer, 60000);
        return () => clearInterval(interval);
    }, [offer.endDate]);
    const offerLabel = {
        percentage: `خصم ${offer.value}%`,
        fixed: `خصم ${offer.value} ريال`,
        buy_get: `اشتري واحصل على ${offer.value}`,
    };
    return (_jsxs(motion.div, { whileHover: { scale: 1.05 }, className: "relative bg-gradient-to-br from-bala-gold to-orange-500 text-white rounded-2xl overflow-hidden shadow-lg h-64 flex items-end cursor-pointer group", children: [_jsxs("div", { className: "absolute inset-0 opacity-20", children: [_jsx(TrendingUp, { className: "w-36 h-36 absolute -top-6 -right-6" }), "      "] }), _jsxs("div", { className: "relative w-full p-6 space-y-3", children: [_jsx("h3", { className: "text-2xl font-bold", children: offer.title }), _jsx("p", { className: "text-sm opacity-90", children: offer.description }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-xl font-bold", children: offerLabel[offer.type] }), _jsxs("div", { className: "flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full", children: [_jsx(Clock, { size: 14 }), _jsx("span", { className: "text-xs", children: timeLeft })] })] })] }), _jsx("div", { className: "absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center", children: _jsx("span", { className: "text-white font-bold", children: "\u0639\u0631\u0636 \u0627\u0644\u0622\u0646" }) })] }));
};
