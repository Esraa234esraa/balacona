import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
const Login = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const isRTL = language === "ar";
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: formData.email,
            name: language === "ar" ? "مستخدم" : "User",
            joinDate: new Date().toLocaleDateString(),
        };
        localStorage.setItem("bala-user", JSON.stringify(user));
        navigate("/profile");
    };
    return (_jsx("div", { className: `${isRTL ? "rtl" : "ltr"} min-h-screen bg-bala-cream dark:bg-bala-dark-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`, children: _jsxs("div", { className: "max-w-md w-full bg-white dark:bg-bala-dark-surface rounded-bala p-8 sm:p-12 shadow-bala-light dark:shadow-bala-dark animate-fade-in", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h1", { className: "font-display text-3xl font-bold text-bala-forest dark:text-bala-cream", children: "Balacona" }), _jsx("p", { className: "font-body text-bala-brown dark:text-bala-cream/70 mt-2", children: language === "ar" ? "تسجيل الدخول" : "Sign in" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block font-body text-sm font-bold text-bala-forest dark:text-bala-cream mb-2", children: language === "ar" ? "البريد الإلكتروني" : "Email" }), _jsxs("div", { className: "relative", children: [_jsx(Mail, { size: 20, className: `absolute top-1/2 -translate-y-1/2 text-bala-brown dark:text-bala-cream/50 ${isRTL ? "right-3" : "left-3"}` }), _jsx("input", { type: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), required: true, className: `w-full px-4 py-3 rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold dark:bg-bala-dark-bg ${isRTL ? "text-right pr-10" : "pl-10"}`, placeholder: language === "ar" ? "بريدك@مثال.com" : "you@example.com" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block font-body text-sm font-bold text-bala-forest dark:text-bala-cream mb-2", children: language === "ar" ? "كلمة المرور" : "Password" }), _jsxs("div", { className: "relative", children: [_jsx(Lock, { size: 20, className: `absolute top-1/2 -translate-y-1/2 text-bala-brown dark:text-bala-cream/50 ${isRTL ? "right-3" : "left-3"}` }), _jsx("input", { type: "password", value: formData.password, onChange: (e) => setFormData({ ...formData, password: e.target.value }), required: true, className: `w-full px-4 py-3 rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold dark:bg-bala-dark-bg ${isRTL ? "text-right pr-10" : "pl-10"}`, placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" })] })] }), _jsx("button", { type: "submit", className: "w-full py-4 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold hover:shadow-bala-hover transition-all", children: language === "ar" ? "دخول" : "Login" })] }), _jsxs("div", { className: "mt-8 pt-8 border-t border-bala-brown/10 dark:border-bala-dark-green/20 text-center", children: [_jsx("p", { className: "font-body text-bala-brown dark:text-bala-cream/70 mb-4", children: language === "ar" ? "ليس لديك حساب؟" : "Don't have an account?" }), _jsx(Link, { to: "/register", className: "text-bala-gold hover:text-bala-brown dark:hover:text-bala-gold transition-colors font-body font-bold", children: language === "ar" ? "إنشاء حساب" : "Create account" })] })] }) }));
};
export default Login;
