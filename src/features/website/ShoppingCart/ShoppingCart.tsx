'use client';

import { Flex, Stack, Title } from '@mantine/core';

import { useCartStore } from '@/core/store/shoppingCartStore';
import { useAppStore } from '@/core/store/store';
import CartItem from '@/features/website/ShoppingCart/CartItem';
import EmptyCart from '@/shared/components/EmptyCart';
import { BREAKPOINTS } from '@/shared/constants/breakpoints';

import EditCartItemModal from './EditCartItemModal';
import ShoppingCartCheckout from './ShoppingCartCheckout';
import styles from './styles/shoppingCart.module.scss';

// Fix problem with zustand shopping cart state, make sure it stays on page refresh

export default function ShoppingCart() {
    const items = useCartStore((s) => s.items);
    // Figure out the better way to organize these constants.
    const totalPrice = items.reduce((acc, item) => {
        const price = item.discountPrice ?? item.price;

        return acc + price * item.quantity;
    }, 0);
    const totalSavings = items.reduce((acc, item) => {
        if (!item.discountPrice) {
            return acc;
        }

        const savings = item.price - item.discountPrice;

        return acc + savings;
    }, 0);
    const { openModal, closeModal, content, isModalOpen } = useAppStore(
        (state) => state.modalWindow
    );

    return (
        <Flex gap="lg" pb="100px">
            <Stack w="100%">
                <Title>Кошик</Title>

                <Flex justify="center" align="ctenter">
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

                            <EditCartItemModal
                                closeModal={closeModal}
                                content={content}
                                isModalOpen={isModalOpen}
                            />
                        </Flex>
                    )}
                </Flex>
            </Stack>
        </Flex>
    );
}
