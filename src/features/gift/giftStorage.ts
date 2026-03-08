// src/features/gift/giftStorage.ts
export type GiftCard = {
  id: string;
  image?: string;
  code: string;
  amount: number;
  balance: number;
  toName: string;
  toContact: string; // email or phone
  fromName: string;
  message?: string;
  designId: string;
  createdAt: string;
  status: "active" | "redeemed" | "disabled";
};

const KEY = "bala_gift_cards_v1";

export function loadGiftCards(): GiftCard[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as GiftCard[]) : [];
  } catch {
    return [];
  }
}

export function saveGiftCards(cards: GiftCard[]) {
  localStorage.setItem(KEY, JSON.stringify(cards));
}

export function createGiftCode() {
  const part = () => Math.random().toString(36).slice(2, 6).toUpperCase();
  return `BALA-${part()}-${part()}`;
}

export function createGiftId() {
  return `GC_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export function addGiftCard(card: GiftCard) {
  const all = loadGiftCards();
  saveGiftCards([card, ...all]);
}

export function findGiftByCode(code: string) {
  return loadGiftCards().find((c) => c.code === code);
}

export function updateGift(card: GiftCard) {
  const all = loadGiftCards().map((c) => (c.id === card.id ? card : c));
  saveGiftCards(all);
}