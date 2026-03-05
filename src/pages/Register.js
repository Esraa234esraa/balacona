import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User as UserIcon } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
const Register = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const isRTL = language === "ar";
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert(language === "ar" ? "كلمات المرور غير متطابقة" : "Passwords do not match");
            return;
        }
        const user = {
            email: formData.email,
            name: formData.name,
            joinDate: new Date().toLocaleDateString(),
        };
        localStorage.setItem("bala-user", JSON.stringify(user));
        navigate("/profile");
    };
    return (_jsx("div", { className: `${isRTL ? "rtl" : "ltr"} min-h-screen bg-bala-cream dark:bg-bala-dark-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`, children: _jsxs("div", { className: "max-w-md w-full bg-white dark:bg-bala-dark-surface rounded-bala p-8 sm:p-12 shadow-bala-light dark:shadow-bala-dark animate-fade-in", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h1", { className: "font-display text-3xl font-bold text-bala-forest dark:text-bala-cream", children: "Balacona" }), _jsx("p", { className: "font-body text-bala-brown dark:text-bala-cream/70 mt-2", children: language === "ar" ? "إنشاء حساب" : "Create account" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block font-body text-sm font-bold text-bala-forest dark:text-bala-cream mb-2", children: language === "ar" ? "الاسم" : "Name" }), _jsxs("div", { className: "relative", children: [_jsx(UserIcon, { size: 20, className: `absolute top-1/2 -translate-y-1/2 text-bala-brown dark:text-bala-cream/50 ${isRTL ? "right-3" : "left-3"}` }), _jsx("input", { type: "text", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), required: true, className: `w-full px-4 py-3 rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold dark:bg-bala-dark-bg ${isRTL ? "text-right pr-10" : "pl-10"}`, placeholder: language === "ar" ? "أحمد محمد" : "Ahmed Mohamed" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block font-body text-sm font-bold text-bala-forest dark:text-bala-cream mb-2", children: language === "ar" ? "البريد الإلكتروني" : "Email" }), _jsxs("div", { className: "relative", children: [_jsx(Mail, { size: 20, className: `absolute top-1/2 -translate-y-1/2 text-bala-brown dark:text-bala-cream/50 ${isRTL ? "right-3" : "left-3"}` }), _jsx("input", { type: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), required: true, className: `w-full px-4 py-3 rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold dark:bg-bala-dark-bg ${isRTL ? "text-right pr-10" : "pl-10"}`, placeholder: language === "ar" ? "بريدك@مثال.com" : "you@example.com" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block font-body text-sm font-bold text-bala-forest dark:text-bala-cream mb-2", children: language === "ar" ? "كلمة المرور" : "Password" }), _jsxs("div", { className: "relative", children: [_jsx(Lock, { size: 20, className: `absolute top-1/2 -translate-y-1/2 text-bala-brown dark:text-bala-cream/50 ${isRTL ? "right-3" : "left-3"}` }), _jsx("input", { type: "password", value: formData.password, onChange: (e) => setFormData({ ...formData, password: e.target.value }), required: true, className: `w-full px-4 py-3 rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold dark:bg-bala-dark-bg ${isRTL ? "text-right pr-10" : "pl-10"}`, placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block font-body text-sm font-bold text-bala-forest dark:text-bala-cream mb-2", children: language === "ar" ? "تأكيد كلمة المرور" : "Confirm password" }), _jsxs("div", { className: "relative", children: [_jsx(Lock, { size: 20, className: `absolute top-1/2 -translate-y-1/2 text-bala-brown dark:text-bala-cream/50 ${isRTL ? "right-3" : "left-3"}` }), _jsx("input", { type: "password", value: formData.confirmPassword, onChange: (e) => setFormData({ ...formData, confirmPassword: e.target.value }), required: true, className: `w-full px-4 py-3 rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold dark:bg-bala-dark-bg ${isRTL ? "text-right pr-10" : "pl-10"}`, placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" })] })] }), _jsx("button", { type: "submit", className: "w-full py-4 bg-bala-gold text-bala-forest rounded-bala font-body font-extrabold hover:opacity-90 transition-all", children: language === "ar" ? "إنشاء حساب" : "Register" })] }), _jsxs("div", { className: "mt-8 pt-8 border-t border-bala-brown/10 dark:border-bala-dark-green/20 text-center", children: [_jsx("p", { className: "font-body text-bala-brown dark:text-bala-cream/70 mb-4", children: language === "ar" ? "لديك حساب بالفعل؟" : "Already have an account?" }), _jsx(Link, { to: "/login", className: "text-bala-gold hover:text-bala-brown dark:hover:text-bala-gold transition-colors font-body font-bold", children: language === "ar" ? "تسجيل الدخول" : "Sign in" })] })] }) }));
};
export default Register;
