const KEY = "bala_gift_cards_v1";
export function loadGiftCards() {
    try {
        const raw = localStorage.getItem(KEY);
        return raw ? JSON.parse(raw) : [];
    }
    catch {
        return [];
    }
}
export function saveGiftCards(cards) {
    localStorage.setItem(KEY, JSON.stringify(cards));
}
export function createGiftCode() {
    const part = () => Math.random().toString(36).slice(2, 6).toUpperCase();
    return `BALA-${part()}-${part()}`;
}
export function createGiftId() {
    return `GC_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}
export function addGiftCard(card) {
    const all = loadGiftCards();
    saveGiftCards([card, ...all]);
}
export function findGiftByCode(code) {
    return loadGiftCards().find((c) => c.code === code);
}
export function updateGift(card) {
    const all = loadGiftCards().map((c) => (c.id === card.id ? card : c));
    saveGiftCards(all);
}
