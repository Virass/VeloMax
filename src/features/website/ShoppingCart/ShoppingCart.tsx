'use client';

import { useEffect, useState } from 'react';

import { Flex, Stack, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { useAppStore } from '@/core/store/store';
import { useCartStore } from '@/core/store/useShoppingCartStore';
import CartItem from '@/features/website/ShoppingCart/CartItem';
import EmptyCart from '@/shared/components/EmptyCart';
import { BREAKPOINTS } from '@/shared/constants/breakpoints';
import { useCartTotals } from '@/shared/hooks/useCartTotals';
import { useStore } from '@/shared/hooks/useStore';

import EditCartItemModal from './EditCartItemModal';
import ShoppingCartCheckout from './ShoppingCartCheckout';
import styles from './styles/shoppingCart.module.scss';

export default function ShoppingCart() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const items = useStore(useCartStore, (state) => state.items);
    const isDesktop = useMediaQuery(`(min-width: 1024px)`);

    const { totalPrice, totalSavings } = useCartTotals();

    const { openModal, closeModal, content, isModalOpen } = useAppStore(
        (state) => state.modalWindow
    );

    if (!mounted) {
        return (
            <Flex gap="lg" pb="100px">
                <Stack w="100%">
                    <Title>Кошик</Title>
                    <Flex justify="center" align="center">
                        <EmptyCart />
                    </Flex>
                </Stack>
            </Flex>
        );
    }

    return (
        <Flex gap="lg" pb="100px">
            <Stack w="100%">
                <Title>Кошик</Title>

                <Flex justify="center" align="center">
                    {!items.length ? (
                        <EmptyCart />
                    ) : (
                        <Flex className={styles.shoppingCart} justify="center">
                            <Stack flex={1} maw={BREAKPOINTS.lg}>
                                {items.map((item) => (
                                    <CartItem
                                        item={item}
                                        key={item.id}
                                        openModal={openModal}
                                        closeModal={closeModal}
                                    />
                                ))}
                            </Stack>

                            <ShoppingCartCheckout
                                inShoppingCart
                                totalPrice={totalPrice}
                                totalSavings={totalSavings}
                            />

                            {isDesktop ? (
                                <EditCartItemModal
                                    closeModal={closeModal}
                                    content={content}
                                    isModalOpen={isModalOpen}
                                />
                            ) : (
                                content
                            )}
                        </Flex>
                    )}
                </Flex>
            </Stack>
        </Flex>
    );
}
