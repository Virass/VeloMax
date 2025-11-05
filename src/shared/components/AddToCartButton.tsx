'use client';

import { Text, type ButtonProps } from '@mantine/core';

import { useCartStore } from '@/core/store/shoppingCartStore';

import { Button } from './Button';
import type { Product } from '../types/productType';

interface Props extends ButtonProps {
    availability: boolean;
    product?: Product;
}

export default function AddToCartButton({
    availability,
    product,
    ...rest
}: Props) {
    const addItem = useCartStore((s) => s.addItem);
    const removeItem = useCartStore((s) => s.removeItem);
    const shoppingCartItems = useCartStore((s) => s.items);

    const isInCart = product
        ? shoppingCartItems.some((item) => item.id === product.id)
        : false;

    const toggle = () => {
        if (!product) {
            return;
        }

        if (isInCart) {
            removeItem(product.id);
        } else {
            addItem(product, 1);
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
