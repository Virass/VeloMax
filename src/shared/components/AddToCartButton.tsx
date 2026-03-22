'use client';

import { Group, Text, type ButtonProps } from '@mantine/core';

import type { CartItem } from '@/core/store/shoppingCartSlice';
import { useAppStore } from '@/core/store/store';

import AddToFavoritesButton from './AddToFavoritesButton';
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
            <Group gap="lg">
                <Button
                    bdrs="32px"
                    bg={`gray.${availability ? '9' : '2'}`}
                    disabled={!availability}
                    c={availability ? 'white' : 'gray.5'}
                    style={{ flex: 1 }}
                    size="lg"
                    onClick={toggle}
                    {...rest}
                >
                    <Text size="16px">
                        {isInCart ? 'Видалити з кошика' : 'Додати до кошика'}
                    </Text>
                </Button>

                <AddToFavoritesButton product={product} />
            </Group>
        </ClientOnly>
    );
}
