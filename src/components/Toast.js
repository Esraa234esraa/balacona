import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Check, AlertCircle } from 'lucide-react';
const Toast = ({ message, type, onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);
    return (_jsx("div", { className: "fixed bottom-6 right-6 z-50 animate-slide-in", children: _jsxs("div", { className: `px-6 py-4 rounded-bala font-body font-bold flex items-center gap-3 shadow-bala-hover ${type === 'success'
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'}`, children: [type === 'success' ? _jsx(Check, { size: 20 }) : _jsx(AlertCircle, { size: 20 }), message] }) }));
};
export default Toast;
