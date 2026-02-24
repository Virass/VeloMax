import type { Product } from '@/shared/types/productType';

import type { StoreStateType } from './store';

export type CartItem = Product & {
    quantity: number;
    color?: string;
    size?: string;
};

type ShoppingCartSliceState = {
    items: CartItem[];
};

type ShoppingCartSliceActions = {
    addItem: (cartItem: CartItem) => void;
    removeItem: (id: string) => void;
    updateItem: (id: string, updatedItem: CartItem) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
};

export type ShoppingCartSlice = ShoppingCartSliceState &
    ShoppingCartSliceActions;

export const createShoppingCartSlice: StoreStateType<ShoppingCartSlice> = (
    set
) => ({
    items: [],

    addItem: (cartItem) => {
        set((state) => {
            const existingItem = state.shoppingCart.items.find(
                (item) => item.id === cartItem.id
            );

            if (existingItem) {
                existingItem.quantity += cartItem.quantity;
            } else {
                state.shoppingCart.items.push(cartItem);
            }
        });
    },

    removeItem: (id) => {
        set((state) => {
            state.shoppingCart.items = state.shoppingCart.items.filter(
                (item) => item.id !== id
            );
        });
    },

    updateItem: (id, updatedItem) => {
        set((state) => {
            state.shoppingCart.items = state.shoppingCart.items.map((item) =>
                item.id === id ? updatedItem : item
            );
        });
    },

    updateQuantity: (id, quantity) => {
        set((state) => {
            if (quantity <= 0) {
                state.shoppingCart.items = state.shoppingCart.items.filter(
                    (item) => item.id !== id
                );
            } else {
                const existingItem = state.shoppingCart.items.find(
                    (item) => item.id === id
                );
                if (existingItem) {
                    existingItem.quantity = quantity;
                }
            }
        });
    },

    clearCart: () => {
        set((state) => {
            state.shoppingCart.items = [];
        });
    },
});
