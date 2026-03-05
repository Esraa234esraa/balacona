import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { Home } from 'lucide-react';
const NotFound = () => {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    return (_jsx("div", { className: `${isRTL ? 'rtl' : 'ltr'} min-h-screen bg-bala-cream dark:bg-bala-dark-bg flex items-center justify-center px-4`, children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "font-display text-8xl font-bold text-bala-gold mb-6", children: "404" }), _jsx("p", { className: "font-display text-3xl font-bold text-bala-forest dark:text-bala-cream mb-4", children: language === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found' }), _jsx("p", { className: "font-body text-lg text-bala-brown dark:text-bala-cream/70 mb-12 max-w-md", children: language === 'ar'
                        ? 'يبدو أن الصفحة التي تبحث عنها غير موجودة'
                        : 'The page you are looking for does not exist' }), _jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 px-8 py-4 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold hover:shadow-bala-hover transition-all", children: [_jsx(Home, { size: 20 }), language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'] })] }) }));
};
export default NotFound;
