import { useCartStore } from '@/core/store/useShoppingCartStore';
import { useStore } from '@/shared/hooks/useStore';

interface CartTotals {
    totalPrice: number;
    totalSavings: number;
    totalQuantity: number;
}

export function useCartTotals(): CartTotals {
    const items = useStore(useCartStore, (state) => state.items);

    const totals = items.reduce(
        (acc, item) => {
            const price = item.discountPrice ?? item.price;
            acc.totalPrice += price * item.quantity;
            acc.totalQuantity += item.quantity;

            if (item.discountPrice && item.discountPrice < item.price) {
                acc.totalSavings +=
                    (item.price - item.discountPrice) * item.quantity;
            }

            return acc;
        },
        { totalPrice: 0, totalSavings: 0, totalQuantity: 0 }
    );

    return totals;
}
