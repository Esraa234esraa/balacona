import { jsx as _jsx } from "react/jsx-runtime";
// src/features/gift/GiftQRCode.tsx
import { QRCodeCanvas } from "qrcode.react";
export function GiftQRCode({ value }) {
    return (_jsx("div", { className: "rounded-bala bg-white p-4 shadow-bala-light", children: _jsx(QRCodeCanvas, { value: value, size: 160, includeMargin: true }) }));
}
