import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Product } from '@/shared/types/productType';

export type CartItem = Product & {
    quantity: number;
    color?: string;
    size?: string;
    // other custom props depending on the product
};

export interface CartState {
    items: CartItem[];
    addItem: (cartItem: CartItem) => void;
    removeItem: (id: string) => void;
    updateItem: (id: string, updatedItem: CartItem) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (cartItem) => {
                const items = get().items;
                const existingItem = items.find((i) => i.id === cartItem.id);

                if (existingItem) {
                    set({
                        items: items.map((i) =>
                            i.id === cartItem.id
                                ? {
                                      ...i,
                                      quantity: i.quantity + cartItem.quantity,
                                  }
                                : i
                        ),
                    });
                } else {
                    set({ items: [...items, cartItem] });
                }
            },

            removeItem: (id) => {
                set({ items: get().items.filter((i) => i.id !== id) });
            },

            updateItem: (id, updatedItem) => {
                const items = get().items;

                set({
                    items: items.map((i) => {
                        if (i.id === id) {
                            return updatedItem;
                        }

                        return i;
                    }),
                });
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
        }),
        {
            name: 'cart-storage',
        }
    )
);
