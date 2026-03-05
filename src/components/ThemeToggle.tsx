import React from "react";
import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 shrink-0 hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 rounded-bala transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size={20} className="text-bala-forest" />
      ) : (
        <Sun size={20} className="text-bala-cream" />
      )}
    </button>
  );
};

export default ThemeToggle;
