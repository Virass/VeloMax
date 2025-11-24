import { useEffect, useState } from 'react';

import { useCartStore, type CartItem } from '@/core/store/useShoppingCartStore';

import { useStore } from './useStore';

export function useCart(item: CartItem) {
    const { quantity, price, discountPrice, id } = item;
    const correctedPrice = discountPrice ?? price;

    const [localQuantity, setLocalQuantity] = useState<number>(quantity);
    const updateStoreQuantity = useStore(
        useCartStore,
        (state) => state.updateQuantity
    );

    const safeQuantity =
        Number.isFinite(localQuantity) && localQuantity > 0 ? localQuantity : 1;

    const totalPrice = correctedPrice * safeQuantity;

    useEffect(() => {
        updateStoreQuantity(id, safeQuantity);
    }, [id, safeQuantity, updateStoreQuantity]);

    return {
        localQuantity,
        setLocalQuantity,
        totalPrice,
    };
}
