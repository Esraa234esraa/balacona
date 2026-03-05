import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";
const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (_jsx("button", { onClick: toggleTheme, className: "p-2 shrink-0 hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 rounded-bala transition-colors", "aria-label": "Toggle theme", children: theme === "light" ? (_jsx(Moon, { size: 20, className: "text-bala-forest" })) : (_jsx(Sun, { size: 20, className: "text-bala-cream" })) }));
};
export default ThemeToggle;
