'use client';

import { Stack, Text, Title } from '@mantine/core';

import { useCartStore } from '@/core/store/shoppingCartStore';
import ShoppingCartCheckoutBlock from '@/features/website/CartDrawerContent/CartDrawerCheckout';
import DrawerCartItem from '@/shared/components/DrawerCartItem';
import { website } from '@/shared/constants/urls';
import { pluralize } from '@/shared/lib/pluralize';

interface Props {
    closeDrawer: () => void;
}

export default function CartDrawerContent({ closeDrawer }: Props) {
    const items = useCartStore((s) => s.items);

    const totalPrice = items.reduce((acc, item) => {
        const price = item.discountPrice ?? item.price;

        return acc + price * item.quantity;
    }, 0);
    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

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
