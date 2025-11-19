'use client';

import { Text, type ButtonProps } from '@mantine/core';

import { type CartItem, useCartStore } from '@/core/store/shoppingCartStore';

import { Button } from './Button';

interface Props extends ButtonProps {
    availability: boolean;
    cartItem: CartItem;
}

export default function AddToCartButton({
    availability,
    cartItem,
    ...rest
}: Props) {
    const addItem = useCartStore((s) => s.addItem);
    const removeItem = useCartStore((s) => s.removeItem);
    const shoppingCartItems = useCartStore((s) => s.items);

    const isInCart = cartItem
        ? shoppingCartItems.some((item) => item.id === cartItem.id)
        : false;

    const toggle = () => {
        if (!cartItem) {
            return;
        }

        if (isInCart) {
            removeItem(cartItem.id);
        } else {
            addItem(cartItem);
        }
    };

    return (
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
    );
}
