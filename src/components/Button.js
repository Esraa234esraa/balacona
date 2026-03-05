import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const Button = ({ variant = "primary", size = "md", isLoading = false, children, icon, className = "", ...props }) => {
    const baseClasses = "font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
    const variantClasses = {
        primary: "bg-bala-gold text-bala-forest hover:shadow-lg hover:scale-105",
        secondary: "bg-bala-forest text-white hover:shadow-lg dark:bg-bala-dark-green",
        danger: "bg-red-500 text-white hover:bg-red-600",
        outline: "border-2 border-bala-gold text-bala-gold hover:bg-bala-gold/10",
    };
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };
    // ✅ التعديل هنا: شيل onDrag (بتاعة HTML) علشان متتعارضش مع framer-motion
    const { onDrag, disabled, ...safeProps } = props;
    return (_jsx(motion.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`, disabled: disabled || isLoading, ...safeProps, children: isLoading ? (_jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-current" })) : (_jsxs(_Fragment, { children: [icon, children] })) }));
};
