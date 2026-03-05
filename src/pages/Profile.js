import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { LogOut, Heart, Clock } from 'lucide-react';
const Profile = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem('bala-user');
        return stored ? JSON.parse(stored) : null;
    });
    const [orders, setOrders] = useState(() => {
        const stored = localStorage.getItem('bala-orders');
        return stored ? JSON.parse(stored) : [];
    });
    if (!user) {
        return (_jsx("div", { className: `${isRTL ? 'rtl' : 'ltr'} min-h-screen bg-bala-cream dark:bg-bala-dark-bg flex items-center justify-center`, children: _jsxs("div", { className: "text-center px-4", children: [_jsx("p", { className: "font-body text-lg text-bala-brown dark:text-bala-cream/70 mb-6", children: language === 'ar' ? 'يرجى تسجيل الدخول أولاً' : 'Please login first' }), _jsx("button", { onClick: () => navigate('/login'), className: "px-8 py-4 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold", children: language === 'ar' ? 'دخول' : 'Login' })] }) }));
    }
    const handleLogout = () => {
        localStorage.removeItem('bala-user');
        setUser(null);
        navigate('/');
    };
    return (_jsx("div", { className: `${isRTL ? 'rtl' : 'ltr'} min-h-screen bg-bala-cream dark:bg-bala-dark-bg py-12 sm:py-20 px-4 sm:px-6 lg:px-8`, children: _jsxs("div", { className: "max-w-bala mx-auto", children: [_jsx("h1", { className: "font-display text-4xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-12 text-center", children: language === 'ar' ? 'الملف الشخصي' : 'My Profile' }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-1", children: _jsxs("div", { className: "bg-white dark:bg-bala-dark-surface rounded-bala p-8 shadow-bala-light dark:shadow-bala-dark text-center", children: [_jsx("div", { className: "w-24 h-24 bg-bala-gold/20 dark:bg-bala-gold/10 rounded-full mx-auto mb-6 flex items-center justify-center", children: _jsx("span", { className: "text-5xl", children: "\u2615" }) }), _jsx("h2", { className: "font-display text-2xl font-bold text-bala-forest dark:text-bala-cream mb-2", children: user.name }), _jsx("p", { className: "font-body text-bala-brown dark:text-bala-cream/70 mb-6", children: user.email }), _jsxs("p", { className: "font-body text-sm text-bala-brown dark:text-bala-cream/50 mb-8", children: [language === 'ar' ? 'عضو منذ' : 'Member since', ": ", user.joinDate] }), _jsxs("button", { onClick: handleLogout, className: "w-full py-3 bg-red-500/20 text-red-600 dark:text-red-400 rounded-bala font-body font-bold hover:bg-red-500/30 transition-colors flex items-center justify-center gap-2", children: [_jsx(LogOut, { size: 20 }), language === 'ar' ? 'خروج' : 'Logout'] })] }) }), _jsxs("div", { className: "lg:col-span-2", children: [_jsxs("h2", { className: "font-display text-2xl font-bold text-bala-forest dark:text-bala-cream mb-6 flex items-center gap-2", children: [_jsx(Clock, { size: 24 }), language === 'ar' ? 'طلباتي السابقة' : 'My Orders'] }), orders.length > 0 ? (_jsx("div", { className: "space-y-6", children: orders.map((order, idx) => (_jsxs("div", { className: "bg-white dark:bg-bala-dark-surface rounded-bala p-6 shadow-bala-light dark:shadow-bala-dark hover:shadow-bala-hover transition-all", children: [_jsxs("div", { className: `flex justify-between items-start mb-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsxs("div", { children: [_jsxs("h3", { className: "font-display text-lg font-bold text-bala-forest dark:text-bala-cream", children: [language === 'ar' ? 'رقم الطلب' : 'Order #', ": ", order.orderNumber] }), _jsx("p", { className: "font-body text-sm text-bala-brown dark:text-bala-cream/70", children: order.date })] }), _jsxs("span", { className: "text-bala-gold font-display font-bold", children: [order.total, " ", language === 'ar' ? 'ج' : 'SAR'] })] }), _jsx("div", { className: `space-y-2 mb-4 pb-4 border-b border-bala-brown/10 dark:border-bala-dark-green/20 ${isRTL ? 'text-right' : ''}`, children: order.items.map((item, i) => (_jsxs("p", { className: "font-body text-sm text-bala-brown dark:text-bala-cream/70", children: ["\u2022 ", item.name, " \u00D7 ", item.quantity] }, i))) }), _jsxs("div", { className: `flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("span", { className: "font-body text-sm text-bala-brown dark:text-bala-cream/70", children: language === 'ar'
                                                            ? order.deliveryType === 'pickup'
                                                                ? 'استلام من الفرع'
                                                                : 'توصيل'
                                                            : order.deliveryType === 'pickup'
                                                                ? 'Pickup'
                                                                : 'Delivery' }), _jsx("span", { className: "px-4 py-2 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full font-body text-xs font-bold", children: language === 'ar' ? 'مكتمل' : 'Completed' })] })] }, idx))) })) : (_jsxs("div", { className: "bg-white dark:bg-bala-dark-surface rounded-bala p-12 text-center shadow-bala-light dark:shadow-bala-dark", children: [_jsx(Heart, { size: 48, className: "text-bala-gold/30 mx-auto mb-4" }), _jsx("p", { className: "font-body text-lg text-bala-brown dark:text-bala-cream/70", children: language === 'ar' ? 'لم تقم بأي طلبات بعد' : 'No orders yet' })] }))] })] })] }) }));
};
export default Profile;
