'use client';

import { Group } from '@mantine/core';

import { useCartStore } from '@/core/store/shoppingCartStore';
import EmptyCart from '@/shared/components/EmptyCart';

export default function ShoppingCart() {
    const items = useCartStore((s) => s.items);

    return (
        <Group justify="center" align="center">
            {!items.length ? <EmptyCart /> : <div>ITEMS</div>}
        </Group>
    );
}

// Fix badge component.EmptyCart
