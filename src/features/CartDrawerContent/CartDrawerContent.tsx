'use client';

import { Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';

import { useCartStore } from '@/core/store/shoppingCartStore';
import { Button } from '@/shared/components/Button';
import CartItem from '@/shared/components/CartItem';
import { website } from '@/shared/constants/urls';
import { pluralize } from '@/shared/lib/pluralize';

import Subtotal from './Subtotal';

interface Props {
    closeDrawer: () => void;
}

export default function CartDrawerContent({ closeDrawer }: Props) {
    const items = useCartStore((s) => s.items);
    const productsCount = pluralize(items.length, 'Товар');

    return (
        <Stack justify="space-between" h="100%">
            <Stack gap="50px">
                <Stack gap="5px">
                    <Title>Кошик</Title>

                    <Text>{productsCount}</Text>
                </Stack>

                <Stack gap="50px" mah="450px" style={{ overflow: 'auto' }}>
                    {items.map((item) => (
                        <CartItem item={item} key={item.id} />
                    ))}
                </Stack>
            </Stack>

            <Stack>
                <Subtotal total={123} />

                <Stack>
                    <Button>Checkout</Button>
                    <Link
                        href={website.cart}
                        style={{
                            textDecoration: 'none',
                        }}
                    >
                        <Button w="100%" onClick={closeDrawer}>
                            View Cart
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Stack>
    );
}
