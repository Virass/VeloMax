import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Product } from '@/shared/types/productType';

export type CartItem = Product & {
    quantity: number;
};

interface CartState {
    items: CartItem[];
    addItem: (product: Product, quantity?: number) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (product, quantity = 1) => {
                const items = get().items;
                const existingItem = items.find((i) => i.id === product.id);

                if (existingItem) {
                    set({
                        items: items.map((i) =>
                            i.id === product.id
                                ? { ...i, quantity: i.quantity + quantity }
                                : i
                        ),
                    });
                } else {
                    set({ items: [...items, { ...product, quantity }] });
                }
            },

            removeItem: (id) => {
                set({ items: get().items.filter((i) => i.id !== id) });
            },

            updateQuantity: (id, quantity) => {
                if (quantity <= 0) {
                    set({ items: get().items.filter((i) => i.id !== id) });
                    return;
                }
                set({
                    items: get().items.map((i) =>
                        i.id === id ? { ...i, quantity } : i
                    ),
                });
            },

            clearCart: () => set({ items: [] }),

            get totalItems() {
                return get().items.reduce(
                    (acc, item) => acc + item.quantity,
                    0
                );
            },

            get totalPrice() {
                return get().items.reduce((acc, item) => {
                    const price = item.discountPrice ?? item.price;
                    return acc + price * item.quantity;
                }, 0);
            },
        }),
        {
            name: 'cart-storage',
        }
    )
);
