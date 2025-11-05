'use client';

import { Box } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useCartStore } from '@/core/store/shoppingCartStore';
import { website } from '@/shared/constants/urls';

import CartCount from './CartCount';
import styles from '../Header/styles/HeaderDesktop.module.scss';

interface Props {
    openDrawer: () => void;
}

export default function GoToCart({ openDrawer }: Props) {
    const items = useCartStore((s) => s.items);
    const cartItemCount = items.reduce((acc, i) => acc + i.quantity, 0);

    const pathname = usePathname();
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

            {!!items.length && <CartCount cartItemCount={cartItemCount} />}
        </Link>
    );
}
