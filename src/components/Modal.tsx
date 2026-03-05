import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white dark:bg-bala-dark-surface rounded-bala p-8 max-w-lg w-full mx-4 shadow-bala-hover animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-bold text-bala-forest dark:text-bala-cream">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 rounded-bala transition-colors"
          >
            <X size={24} className="text-bala-forest dark:text-bala-cream" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;