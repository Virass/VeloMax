import { useState } from 'react';

import { type CartItem } from '@/core/store/shoppingCartStore';

export type UpdateCartItem = <K extends keyof CartItem>(
    key: K,
    value: CartItem[K]
) => void;

export function useCartItem<T extends CartItem>(initialItem: T) {
    const [cartItem, setCartItem] = useState<T>(initialItem);

    const updateCartItem: UpdateCartItem = (key, value) => {
        setCartItem((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return { cartItem, updateCartItem, setCartItem };
}
