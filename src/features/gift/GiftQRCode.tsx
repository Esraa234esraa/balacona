// src/features/gift/GiftQRCode.tsx
import { QRCodeCanvas } from "qrcode.react";

export function GiftQRCode({ value }: { value: string }) {
  return (
    <div className="rounded-bala bg-white p-4 shadow-bala-light">
      <QRCodeCanvas value={value} size={160} includeMargin />
    </div>
  );
}