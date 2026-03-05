export const offersData = [
    {
        id: 1,
        title: "خصم على جميع القهوة الساخنة",
        type: "percentage",
        value: 25,
        image: "https://images.unsplash.com/photo-1528475477914-3d5d65a76eee?w=800&h=600&fit=crop",
        items: [
            { productId: "espresso-2", quantity: 1 },
            { productId: "espresso-3", quantity: 1 },
        ],
    },
    {
        id: 2,
        title: "اشتري وافل واحصل على آيس كوفي",
        type: "buy_get",
        value: 1,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
        items: [
            { productId: "dessert-2", quantity: 1 },
            { productId: "cold-1", quantity: 1 },
        ],
    },
    {
        id: 3,
        title: "خصم ثابت على الحلويات",
        type: "fixed",
        value: 20,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
        items: [
            { productId: "dessert-1", quantity: 1 },
            { productId: "dessert-3", quantity: 1 },
        ],
    },
];
