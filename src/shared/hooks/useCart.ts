import { useEffect, useState } from 'react';

import { useCartStore, type CartItem } from '@/core/store/shoppingCartStore';

export function useCart(item: CartItem) {
    const { quantity, price, discountPrice, id } = item;
    const correctedPrice = discountPrice ?? price;

    const [localQuantity, setLocalQuantity] = useState<number>(quantity);
    const { updateQuantity: updateStoreQuantity } = useCartStore();

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
