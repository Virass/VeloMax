'use client';

import { Text, type ButtonProps } from '@mantine/core';

import { type CartItem, useCartStore } from '@/core/store/useShoppingCartStore';

import { Button } from './Button';
import { useStore } from '../hooks/useStore';

interface Props extends ButtonProps {
    availability: boolean;
    cartItem: CartItem;
}

export default function AddToCartButton({
    availability,
    cartItem,
    ...rest
}: Props) {
    const addItem = useStore(useCartStore, (state) => state.addItem);
    const removeItem = useStore(useCartStore, (state) => state.removeItem);
    const shoppingCartItems = useStore(useCartStore, (state) => state.items);

    // console.log(cartItem);

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
