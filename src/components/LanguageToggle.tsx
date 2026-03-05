import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const next = language === "ar" ? "EN" : "AR";

  return (
    <button
      onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
      className="
        inline-flex items-center justify-center
        h-9 w-9 sm:h-10 sm:w-auto
        sm:px-3
        text-xs sm:text-sm font-extrabold font-body
        text-bala-forest dark:text-bala-cream
        bg-bala-gold/20 dark:bg-bala-gold/10
        hover:bg-bala-gold/30 dark:hover:bg-bala-gold/20
        rounded-xl transition-colors
        shrink-0
      "
      aria-label="Toggle language"
      title="Toggle language"
      style={{ direction: "ltr" }}  // يخلي EN/AR ثابتين
    >
      {next}
    </button>
  );
};

export default LanguageToggle;