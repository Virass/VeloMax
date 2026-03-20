import { useEffect, useState } from 'react';

import type { CartItem } from '@/core/store/shoppingCartSlice';
import { useAppStore } from '@/core/store/store';

export function useCart(item: CartItem) {
    const { quantity, price, discountPrice, id } = item;
    const correctedPrice = discountPrice ?? price;

    const [localQuantity, setLocalQuantity] = useState<number>(quantity);

    const { updateQuantity: updateStoreQuantity } = useAppStore(
        (state) => state.shoppingCart
    );

    const safeQuantity =
        Number.isFinite(localQuantity) && localQuantity > 0 ? localQuantity : 1;

    const totalUnitPrice = correctedPrice * safeQuantity;

    useEffect(() => {
        updateStoreQuantity(id, safeQuantity);
    }, [id, safeQuantity, updateStoreQuantity]);

    return {
        localQuantity,
        setLocalQuantity,
        totalUnitPrice,
    };
}
