'use client';

import { ActionIcon, Box } from '@mantine/core';
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
                position: 'relative',
            }}
        >
            <ActionIcon size={24} variant="transparent">
                <ShoppingBagIcon width={20} height={20} />
            </ActionIcon>

            <ClientOnly>
                <CartCount
                    cartItemCount={totalQuantity}
                    topRightCornerPlacement
                />
            </ClientOnly>
        </Link>
    );
}
