import React, { useEffect } from 'react';
import { Check, AlertCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in">
      <div className={`px-6 py-4 rounded-bala font-body font-bold flex items-center gap-3 shadow-bala-hover ${
        type === 'success'
          ? 'bg-green-500 text-white'
          : 'bg-red-500 text-white'
      }`}>
        {type === 'success' ? <Check size={20} /> : <AlertCircle size={20} />}
        {message}
      </div>
    </div>
  );
};

export default Toast;