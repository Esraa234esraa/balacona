import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useCart } from '../hooks/useCart';
import { ArrowRight, CheckCircle } from 'lucide-react';
const Checkout = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const { cart, totalPrice, clearCart } = useCart();
    const isRTL = language === 'ar';
    const [deliveryType, setDeliveryType] = useState('pickup');
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        address: '',
    });
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            orderNumber: 'BAL' + Math.random().toString(36).substr(2, 9).toUpperCase(),
            date: new Date().toLocaleString(),
            items: cart,
            total: totalPrice,
            deliveryType,
            customer: formData,
        };
        // Save to localStorage
        const existingOrders = JSON.parse(localStorage.getItem('bala-orders') || '[]');
        existingOrders.push(order);
        localStorage.setItem('bala-orders', JSON.stringify(existingOrders));
        setOrderNumber(order.orderNumber);
        setOrderPlaced(true);
        clearCart();
    };
    if (orderPlaced) {
        return (_jsx("div", { className: `${isRTL ? 'rtl' : 'ltr'} min-h-screen bg-bala-cream dark:bg-bala-dark-bg flex items-center justify-center px-4`, children: _jsxs("div", { className: "text-center max-w-lg mx-auto", children: [_jsx(CheckCircle, { size: 80, className: "text-green-500 mx-auto mb-6" }), _jsx("h1", { className: "font-display text-4xl font-bold text-bala-forest dark:text-bala-cream mb-4", children: language === 'ar' ? 'تم الطلب بنجاح!' : 'Order Placed Successfully!' }), _jsx("p", { className: "font-body text-lg text-bala-brown dark:text-bala-cream/70 mb-8", children: language === 'ar'
                            ? 'شكراً لك! سيتم إعداد طلبك قريباً'
                            : 'Thank you! Your order will be ready soon' }), _jsxs("div", { className: "bg-white dark:bg-bala-dark-surface rounded-bala p-8 mb-8", children: [_jsx("p", { className: "font-body text-bala-brown dark:text-bala-cream/70 mb-2", children: language === 'ar' ? 'رقم الطلب' : 'Order Number' }), _jsx("p", { className: "font-display text-3xl font-bold text-bala-gold mb-4", children: orderNumber }), _jsx("p", { className: "font-body text-sm text-bala-brown dark:text-bala-cream/70", children: language === 'ar' ? 'الوقت المتوقع' : 'Estimated Time' }), _jsxs("p", { className: "font-display text-2xl font-bold text-bala-forest dark:text-bala-cream", children: ["15 ", language === 'ar' ? 'دقيقة' : 'minutes'] })] }), _jsx("button", { onClick: () => navigate('/'), className: "w-full py-4 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold hover:shadow-bala-hover transition-all", children: language === 'ar' ? 'العودة للرئيسية' : 'Back to Home' })] }) }));
    }
    return (_jsx("div", { className: `${isRTL ? 'rtl' : 'ltr'} min-h-screen bg-bala-cream dark:bg-bala-dark-bg py-12 sm:py-20 px-4 sm:px-6 lg:px-8`, children: _jsxs("div", { className: "max-w-2xl mx-auto", children: [_jsx("h1", { className: "font-display text-4xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-12 text-center", children: language === 'ar' ? 'إتمام الشراء' : 'Complete Checkout' }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-2", children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [_jsxs("div", { className: "bg-white dark:bg-bala-dark-surface rounded-bala p-8 shadow-bala-light dark:shadow-bala-dark", children: [_jsx("h2", { className: "font-display text-2xl font-bold text-bala-forest dark:text-bala-cream mb-6", children: language === 'ar' ? 'نوع التوصيل' : 'Delivery Type' }), _jsx("div", { className: `flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: [
                                                    { id: 'pickup', arLabel: 'الاستلام من الفرع', enLabel: 'Pickup' },
                                                    { id: 'delivery', arLabel: 'التوصيل', enLabel: 'Delivery' },
                                                ].map(option => (_jsxs("label", { className: `flex-1 p-4 border-2 rounded-bala cursor-pointer transition-all ${deliveryType === option.id
                                                        ? 'border-bala-gold bg-bala-gold/5'
                                                        : 'border-bala-brown/10 dark:border-bala-dark-green/20'}`, children: [_jsx("input", { type: "radio", name: "deliveryType", value: option.id, checked: deliveryType === option.id, onChange: e => setDeliveryType(e.target.value), className: "mb-2" }), _jsx("p", { className: "font-body font-bold text-bala-forest dark:text-bala-cream", children: language === 'ar' ? option.arLabel : option.enLabel })] }, option.id))) })] }), _jsxs("div", { className: "bg-white dark:bg-bala-dark-surface rounded-bala p-8 shadow-bala-light dark:shadow-bala-dark space-y-6", children: [_jsx("h2", { className: "font-display text-2xl font-bold text-bala-forest dark:text-bala-cream", children: language === 'ar' ? 'بيانات العميل' : 'Customer Information' }), _jsx("input", { type: "text", placeholder: language === 'ar' ? 'الاسم الكامل' : 'Full Name', value: formData.fullName, onChange: e => setFormData({ ...formData, fullName: e.target.value }), required: true, className: `w-full px-4 py-3 rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold dark:bg-bala-dark-bg ${isRTL ? 'text-right' : ''}` }), _jsx("input", { type: "tel", placeholder: language === 'ar' ? 'رقم الهاتف' : 'Phone Number', value: formData.phone, onChange: e => setFormData({ ...formData, phone: e.target.value }), required: true, className: `w-full px-4 py-3 rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold dark:bg-bala-dark-bg ${isRTL ? 'text-right' : ''}` }), deliveryType === 'delivery' && (_jsx("input", { type: "text", placeholder: language === 'ar' ? 'العنوان' : 'Address', value: formData.address, onChange: e => setFormData({ ...formData, address: e.target.value }), required: true, className: `w-full px-4 py-3 rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold dark:bg-bala-dark-bg ${isRTL ? 'text-right' : ''}` }))] }), _jsxs("button", { type: "submit", className: "w-full py-4 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold hover:shadow-bala-hover transition-all flex items-center justify-center gap-2", children: [language === 'ar' ? 'تأكيد الطلب' : 'Confirm Order', _jsx(ArrowRight, { size: 20, className: isRTL ? 'rotate-180' : '' })] })] }) }), _jsx("div", { className: "lg:col-span-1", children: _jsxs("div", { className: "bg-white dark:bg-bala-dark-surface rounded-bala p-8 shadow-bala-light dark:shadow-bala-dark sticky top-24", children: [_jsx("h2", { className: "font-display text-2xl font-bold text-bala-forest dark:text-bala-cream mb-6", children: language === 'ar' ? 'الملخص' : 'Order Summary' }), _jsx("div", { className: "space-y-4 mb-8 border-b border-bala-brown/10 dark:border-bala-dark-green/20 pb-8", children: cart.map(item => (_jsxs("div", { className: `flex justify-between font-body text-sm ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsxs("span", { className: "text-bala-brown dark:text-bala-cream/70", children: [item.name, " \u00D7 ", item.quantity] }), _jsxs("span", { className: "font-bold text-bala-forest dark:text-bala-cream", children: [item.price * item.quantity, " ", language === 'ar' ? 'ج' : 'SAR'] })] }, item.id))) }), _jsxs("div", { className: `flex justify-between font-display text-2xl font-bold text-bala-gold ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("span", { children: language === 'ar' ? 'الإجمالي' : 'Total' }), _jsxs("span", { children: [totalPrice, " ", language === 'ar' ? 'ج' : 'SAR'] })] })] }) })] })] }) }));
};
export default Checkout;
