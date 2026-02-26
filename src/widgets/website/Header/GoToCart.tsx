'use client';

import { Box } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAppStore } from '@/core/store/store';
import { ClientOnly } from '@/shared/components/ClientOnly';
import { website } from '@/shared/constants/urls';
import { useCartTotals } from '@/shared/hooks/useCartTotals';
import { ShoppingBagIcon } from '@/shared/ui/icons/ShoppingBagIcon';

import CartCount from './CartCount';

interface Props {
    openDrawer: () => void;
}

export default function GoToCart({ openDrawer }: Props) {
    const pathname = usePathname();

    const { items } = useAppStore((state) => state.shoppingCart);
    const { totalQuantity } = useCartTotals();
    const CART = { href: website.cart, label: 'кошик' };

    return (
        <Link
            href={CART.href}
            onClick={(e) => {
                if (!!items.length) {
                    e.preventDefault();
                }

                openDrawer();
            }}
            style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
            }}
            aria-label={CART.label}
        >
            <ShoppingBagIcon
                width={32}
                height={32}
                color="var(--mantine-color-black)"
            />

            <ClientOnly>
                {totalQuantity > 0 && (
                    <Box style={{ position: 'absolute', top: -8, right: -12 }}>
                        <CartCount cartItemCount={totalQuantity} />
                    </Box>
                )}
            </ClientOnly>
        </Link>
    );
}
