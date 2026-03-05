import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { LogOut, Heart, Clock } from 'lucide-react';

const Profile: React.FC = () => {
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
    return (
      <div className={`${isRTL ? 'rtl' : 'ltr'} min-h-screen bg-bala-cream dark:bg-bala-dark-bg flex items-center justify-center`}>
        <div className="text-center px-4">
          <p className="font-body text-lg text-bala-brown dark:text-bala-cream/70 mb-6">
            {language === 'ar' ? 'يرجى تسجيل الدخول أولاً' : 'Please login first'}
          </p>
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-4 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold"
          >
            {language === 'ar' ? 'دخول' : 'Login'}
          </button>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem('bala-user');
    setUser(null);
    navigate('/');
  };

  return (
    <div className={`${isRTL ? 'rtl' : 'ltr'} min-h-screen bg-bala-cream dark:bg-bala-dark-bg py-12 sm:py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-bala mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-12 text-center">
          {language === 'ar' ? 'الملف الشخصي' : 'My Profile'}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Info */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-bala-dark-surface rounded-bala p-8 shadow-bala-light dark:shadow-bala-dark text-center">
              <div className="w-24 h-24 bg-bala-gold/20 dark:bg-bala-gold/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-5xl">☕</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-bala-forest dark:text-bala-cream mb-2">
                {user.name}
              </h2>
              <p className="font-body text-bala-brown dark:text-bala-cream/70 mb-6">
                {user.email}
              </p>
              <p className="font-body text-sm text-bala-brown dark:text-bala-cream/50 mb-8">
                {language === 'ar' ? 'عضو منذ' : 'Member since'}: {user.joinDate}
              </p>
              <button
                onClick={handleLogout}
                className="w-full py-3 bg-red-500/20 text-red-600 dark:text-red-400 rounded-bala font-body font-bold hover:bg-red-500/30 transition-colors flex items-center justify-center gap-2"
              >
                <LogOut size={20} />
                {language === 'ar' ? 'خروج' : 'Logout'}
              </button>
            </div>
          </div>

          {/* Orders */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-bala-forest dark:text-bala-cream mb-6 flex items-center gap-2">
              <Clock size={24} />
              {language === 'ar' ? 'طلباتي السابقة' : 'My Orders'}
            </h2>

            {orders.length > 0 ? (
              <div className="space-y-6">
                {orders.map((order: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-bala-dark-surface rounded-bala p-6 shadow-bala-light dark:shadow-bala-dark hover:shadow-bala-hover transition-all"
                  >
                    <div className={`flex justify-between items-start mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div>
                        <h3 className="font-display text-lg font-bold text-bala-forest dark:text-bala-cream">
                          {language === 'ar' ? 'رقم الطلب' : 'Order #'}: {order.orderNumber}
                        </h3>
                        <p className="font-body text-sm text-bala-brown dark:text-bala-cream/70">
                          {order.date}
                        </p>
                      </div>
                      <span className="text-bala-gold font-display font-bold">
                        {order.total} {language === 'ar' ? 'ج' : 'SAR'}
                      </span>
                    </div>

                    <div className={`space-y-2 mb-4 pb-4 border-b border-bala-brown/10 dark:border-bala-dark-green/20 ${isRTL ? 'text-right' : ''}`}>
                      {order.items.map((item: any, i: number) => (
                        <p key={i} className="font-body text-sm text-bala-brown dark:text-bala-cream/70">
                          • {item.name} × {item.quantity}
                        </p>
                      ))}
                    </div>

                    <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="font-body text-sm text-bala-brown dark:text-bala-cream/70">
                        {language === 'ar'
                          ? order.deliveryType === 'pickup'
                            ? 'استلام من الفرع'
                            : 'توصيل'
                          : order.deliveryType === 'pickup'
                          ? 'Pickup'
                          : 'Delivery'}
                      </span>
                      <span className="px-4 py-2 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full font-body text-xs font-bold">
                        {language === 'ar' ? 'مكتمل' : 'Completed'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-bala-dark-surface rounded-bala p-12 text-center shadow-bala-light dark:shadow-bala-dark">
                <Heart size={48} className="text-bala-gold/30 mx-auto mb-4" />
                <p className="font-body text-lg text-bala-brown dark:text-bala-cream/70">
                  {language === 'ar' ? 'لم تقم بأي طلبات بعد' : 'No orders yet'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;