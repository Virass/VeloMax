'use client';

import { Text, type ButtonProps } from '@mantine/core';

import type { CartItem } from '@/core/store/ShoppingCartSlice';
import { useAppStore } from '@/core/store/store';

import { Button } from './Button';
import { ClientOnly } from './ClientOnly';
import type { Product } from '../types/productType';

interface Props extends ButtonProps {
    availability: boolean;
    product: Product;
    cartItem?: CartItem;
}

export default function AddToCartButton({
    availability,
    cartItem,
    product,
    ...rest
}: Props) {
    const {
        addItem,
        removeItem,
        items: shoppingCartItems,
    } = useAppStore((state) => state.shoppingCart);

    const isInCart = cartItem
        ? shoppingCartItems.some((item) => item.id === cartItem.id)
        : false;

    const toggle = () => {
        if (!cartItem) {
            const newItem = { ...product, quantity: 1 };

            console.log(newItem, 'This item was added!');

            addItem(newItem);

            return;
        }

        if (isInCart) {
            removeItem(cartItem.id);
        } else {
            addItem(cartItem);
        }
    };

    return (
        <ClientOnly>
            <Button
                bdrs="32px"
                bg={`gray.${availability ? '9' : '2'}`}
                disabled={!availability}
                c={availability ? 'white' : 'gray.5'}
                w="100%"
                size="lg"
                onClick={toggle}
                {...rest}
            >
                <Text size="18px">
                    {isInCart ? 'Видалити з кошика' : 'Додати до кошика'}
                </Text>
            </Button>
        </ClientOnly>
    );
}
