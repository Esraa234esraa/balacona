import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useCart } from '../hooks/useCart';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { cart, totalPrice, clearCart } = useCart();
  const isRTL = language === 'ar';

  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('pickup');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
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
    return (
      <div className={`${isRTL ? 'rtl' : 'ltr'} min-h-screen bg-bala-cream dark:bg-bala-dark-bg flex items-center justify-center px-4`}>
        <div className="text-center max-w-lg mx-auto">
          <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
          <h1 className="font-display text-4xl font-bold text-bala-forest dark:text-bala-cream mb-4">
            {language === 'ar' ? 'تم الطلب بنجاح!' : 'Order Placed Successfully!'}
          </h1>
          <p className="font-body text-lg text-bala-brown dark:text-bala-cream/70 mb-8">
            {language === 'ar'
              ? 'شكراً لك! سيتم إعداد طلبك قريباً'
              : 'Thank you! Your order will be ready soon'}
          </p>

          <div className="bg-white dark:bg-bala-dark-surface rounded-bala p-8 mb-8">
            <p className="font-body text-bala-brown dark:text-bala-cream/70 mb-2">
              {language === 'ar' ? 'رقم الطلب' : 'Order Number'}
            </p>
            <p className="font-display text-3xl font-bold text-bala-gold mb-4">{orderNumber}</p>
            <p className="font-body text-sm text-bala-brown dark:text-bala-cream/70">
              {language === 'ar' ? 'الوقت المتوقع' : 'Estimated Time'}
            </p>
            <p className="font-display text-2xl font-bold text-bala-forest dark:text-bala-cream">
              15 {language === 'ar' ? 'دقيقة' : 'minutes'}
            </p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="w-full py-4 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold hover:shadow-bala-hover transition-all"
          >
            {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isRTL ? 'rtl' : 'ltr'} min-h-screen bg-bala-cream dark:bg-bala-dark-bg py-12 sm:py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-2xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-12 text-center">
          {language === 'ar' ? 'إتمام الشراء' : 'Complete Checkout'}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Delivery Type */}
              <div className="bg-white dark:bg-bala-dark-surface rounded-bala p-8 shadow-bala-light dark:shadow-bala-dark">
                <h2 className="font-display text-2xl font-bold text-bala-forest dark:text-bala-cream mb-6">
                  {language === 'ar' ? 'نوع التوصيل' : 'Delivery Type'}
                </h2>
                <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {[
                    { id: 'pickup', arLabel: 'الاستلام من الفرع', enLabel: 'Pickup' },
                    { id: 'delivery', arLabel: 'التوصيل', enLabel: 'Delivery' },
                  ].map(option => (
                    <label
                      key={option.id}
                      className={`flex-1 p-4 border-2 rounded-bala cursor-pointer transition-all ${
                        deliveryType === option.id
                          ? 'border-bala-gold bg-bala-gold/5'
                          : 'border-bala-brown/10 dark:border-bala-dark-green/20'
                      }`}
                    >
                      <input
                        type="radio"
                        name="deliveryType"
                        value={option.id}
                        checked={deliveryType === option.id}
                        onChange={e => setDeliveryType(e.target.value as any)}
                        className="mb-2"
                      />
                      <p className="font-body font-bold text-bala-forest dark:text-bala-cream">
                        {language === 'ar' ? option.arLabel : option.enLabel}
                      </p>
                    </label>
                  ))}
                </div>
              </div>

              {/* Customer Info */}
              <div className="bg-white dark:bg-bala-dark-surface rounded-bala p-8 shadow-bala-light dark:shadow-bala-dark space-y-6">
                <h2 className="font-display text-2xl font-bold text-bala-forest dark:text-bala-cream">
                  {language === 'ar' ? 'بيانات العميل' : 'Customer Information'}
                </h2>

                <input
                  type="text"
                  placeholder={language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className={`w-full px-4 py-3 rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold dark:bg-bala-dark-bg ${isRTL ? 'text-right' : ''}`}
                />

                <input
                  type="tel"
                  placeholder={language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className={`w-full px-4 py-3 rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold dark:bg-bala-dark-bg ${isRTL ? 'text-right' : ''}`}
                />

                {deliveryType === 'delivery' && (
                  <input
                    type="text"
                    placeholder={language === 'ar' ? 'العنوان' : 'Address'}
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    required
                    className={`w-full px-4 py-3 rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold dark:bg-bala-dark-bg ${isRTL ? 'text-right' : ''}`}
                  />
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold hover:shadow-bala-hover transition-all flex items-center justify-center gap-2"
              >
                {language === 'ar' ? 'تأكيد الطلب' : 'Confirm Order'}
                <ArrowRight size={20} className={isRTL ? 'rotate-180' : ''} />
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-bala-dark-surface rounded-bala p-8 shadow-bala-light dark:shadow-bala-dark sticky top-24">
              <h2 className="font-display text-2xl font-bold text-bala-forest dark:text-bala-cream mb-6">
                {language === 'ar' ? 'الملخص' : 'Order Summary'}
              </h2>

              <div className="space-y-4 mb-8 border-b border-bala-brown/10 dark:border-bala-dark-green/20 pb-8">
                {cart.map(item => (
                  <div key={item.id} className={`flex justify-between font-body text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-bala-brown dark:text-bala-cream/70">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-bold text-bala-forest dark:text-bala-cream">
                      {item.price * item.quantity} {language === 'ar' ? 'ج' : 'SAR'}
                    </span>
                  </div>
                ))}
              </div>

              <div className={`flex justify-between font-display text-2xl font-bold text-bala-gold ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span>{language === 'ar' ? 'الإجمالي' : 'Total'}</span>
                <span>{totalPrice} {language === 'ar' ? 'ج' : 'SAR'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;