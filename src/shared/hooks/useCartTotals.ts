import { useAppStore } from '@/core/store/store';

interface CartTotals {
    totalPrice: number;
    totalSavings: number;
    totalQuantity: number;
}

export function useCartTotals(): CartTotals {
    const items = useAppStore((state) => state.shoppingCart.items);

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
