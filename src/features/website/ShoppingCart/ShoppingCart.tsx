'use client';

import { Flex, Stack, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { useAppStore } from '@/core/store/store';
import CartItem from '@/features/website/ShoppingCart/CartItem';
import { ClientOnly } from '@/shared/components/ClientOnly';
import EmptyCart from '@/shared/components/EmptyCart';
import { BREAKPOINTS } from '@/shared/constants/breakpoints';
import { useCartTotals } from '@/shared/hooks/useCartTotals';

import EditCartItemModal from './EditCartItemModal';
import ShoppingCartCheckout from './ShoppingCartCheckout';
import styles from './styles/shoppingCart.module.scss';

export default function ShoppingCart() {
    const items = useAppStore((state) => state.shoppingCart.items);
    const isDesktop = useMediaQuery(`(min-width: 1024px)`);

    const { totalPrice, totalSavings } = useCartTotals();

    const { openModal, closeModal, content, isModalOpen } = useAppStore(
        (state) => state.modalWindow
    );

    return (
        <Flex gap="lg" pb="100px">
            <Stack w="100%" maw={BREAKPOINTS.xxl} m="auto">
                <Title>Кошик</Title>

                <Flex justify="center" align="center">
                    <ClientOnly>
                        {!items.length ? (
                            <EmptyCart />
                        ) : (
                            <Flex
                                className={styles.shoppingCart}
                                justify="center"
                            >
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
                    </ClientOnly>
                </Flex>
            </Stack>
        </Flex>
    );
}
