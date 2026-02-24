'use client';

import { Box } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAppStore } from '@/core/store/store';
import { ClientOnly } from '@/shared/components/ClientOnly';
import { website } from '@/shared/constants/urls';
import { useCartTotals } from '@/shared/hooks/useCartTotals';

import CartCount from './CartCount';
import styles from '../Header/styles/HeaderDesktop.module.scss';

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
            }}
        >
            <Box
                component="span"
                fw={pathname === CART.href ? 600 : 400}
                c="var(--mantine-color-black)"
                tt="capitalize"
                className={styles.linkText}
            >
                {CART.label}
            </Box>

            <ClientOnly>
                {totalQuantity > 0 && (
                    <CartCount cartItemCount={totalQuantity} />
                )}
            </ClientOnly>
        </Link>
    );
}
