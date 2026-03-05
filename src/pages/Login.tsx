import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = {
      email: formData.email,
      name: language === "ar" ? "مستخدم" : "User",
      joinDate: new Date().toLocaleDateString(),
    };
    localStorage.setItem("bala-user", JSON.stringify(user));
    navigate("/profile");
  };

  return (
    <div
      className={`${
        isRTL ? "rtl" : "ltr"
      } min-h-screen bg-bala-cream dark:bg-bala-dark-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-md w-full bg-white dark:bg-bala-dark-surface rounded-bala p-8 sm:p-12 shadow-bala-light dark:shadow-bala-dark animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl font-bold text-bala-forest dark:text-bala-cream">
            Balacona
          </h1>
          <p className="font-body text-bala-brown dark:text-bala-cream/70 mt-2">
            {language === "ar" ? "تسجيل الدخول" : "Sign in"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-body text-sm font-bold text-bala-forest dark:text-bala-cream mb-2">
              {language === "ar" ? "البريد الإلكتروني" : "Email"}
            </label>
            <div className="relative">
              <Mail
                size={20}
                className={`absolute top-1/2 -translate-y-1/2 text-bala-brown dark:text-bala-cream/50 ${
                  isRTL ? "right-3" : "left-3"
                }`}
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className={`w-full px-4 py-3 rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold dark:bg-bala-dark-bg ${
                  isRTL ? "text-right pr-10" : "pl-10"
                }`}
                placeholder={
                  language === "ar" ? "بريدك@مثال.com" : "you@example.com"
                }
              />
            </div>
          </div>

          <div>
            <label className="block font-body text-sm font-bold text-bala-forest dark:text-bala-cream mb-2">
              {language === "ar" ? "كلمة المرور" : "Password"}
            </label>
            <div className="relative">
              <Lock
                size={20}
                className={`absolute top-1/2 -translate-y-1/2 text-bala-brown dark:text-bala-cream/50 ${
                  isRTL ? "right-3" : "left-3"
                }`}
              />
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                className={`w-full px-4 py-3 rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold dark:bg-bala-dark-bg ${
                  isRTL ? "text-right pr-10" : "pl-10"
                }`}
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold hover:shadow-bala-hover transition-all"
          >
            {language === "ar" ? "دخول" : "Login"}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-bala-brown/10 dark:border-bala-dark-green/20 text-center">
          <p className="font-body text-bala-brown dark:text-bala-cream/70 mb-4">
            {language === "ar" ? "ليس لديك حساب؟" : "Don't have an account?"}
          </p>
          <Link
            to="/register"
            className="text-bala-gold hover:text-bala-brown dark:hover:text-bala-gold transition-colors font-body font-bold"
          >
            {language === "ar" ? "إنشاء حساب" : "Create account"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;