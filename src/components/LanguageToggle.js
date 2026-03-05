import { jsx as _jsx } from "react/jsx-runtime";
import { useLanguage } from "../hooks/useLanguage";
const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();
    const next = language === "ar" ? "EN" : "AR";
    return (_jsx("button", { onClick: () => setLanguage(language === "ar" ? "en" : "ar"), className: "\n        inline-flex items-center justify-center\n        h-9 w-9 sm:h-10 sm:w-auto\n        sm:px-3\n        text-xs sm:text-sm font-extrabold font-body\n        text-bala-forest dark:text-bala-cream\n        bg-bala-gold/20 dark:bg-bala-gold/10\n        hover:bg-bala-gold/30 dark:hover:bg-bala-gold/20\n        rounded-xl transition-colors\n        shrink-0\n      ", "aria-label": "Toggle language", title: "Toggle language", style: { direction: "ltr" }, children: next }));
};
export default LanguageToggle;
