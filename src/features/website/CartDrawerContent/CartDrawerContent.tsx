'use client';

import { Stack, Text, Title } from '@mantine/core';

import { useCartStore } from '@/core/store/useShoppingCartStore';
import ShoppingCartCheckoutBlock from '@/features/website/CartDrawerContent/CartDrawerCheckout';
import DrawerCartItem from '@/shared/components/DrawerCartItem';
import { useCartTotals } from '@/shared/hooks/useCartTotals';
import { useStore } from '@/shared/hooks/useStore';
import { pluralize } from '@/shared/lib/pluralize';

interface Props {
    closeDrawer: () => void;
}

export default function CartDrawerContent({ closeDrawer }: Props) {
    const items = useStore(useCartStore, (state) => state.items);
    const { totalPrice, totalQuantity } = useCartTotals();
    const productsCount = pluralize(totalQuantity, 'Товар');

    return (
        <Stack justify="space-between" h="100%">
            <Stack gap="50px">
                <Stack gap="5px">
                    <Title>Кошик</Title>

                    <Text>{productsCount}</Text>
                </Stack>

                <Stack gap="50px" mah="500px" style={{ overflow: 'auto' }}>
                    {items.map((item) => (
                        <DrawerCartItem item={item} key={item.id} />
                    ))}
                </Stack>
            </Stack>

            <ShoppingCartCheckoutBlock
                totalPrice={totalPrice}
                closeDrawer={closeDrawer}
            />
        </Stack>
    );
}
