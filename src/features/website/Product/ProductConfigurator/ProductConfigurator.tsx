'use client';

import { useState } from 'react';

import { Box, Group, Stack } from '@mantine/core';

import type { CartItem } from '@/core/store/shoppingCartSlice';
import AddToCartButton from '@/shared/components/AddToCartButton';
import QuantitySelection from '@/shared/components/QuantitySelection/QuantitySelection';
import type { Product } from '@/shared/types/productType';

import { AvailableColors } from '../AvailableColors';
import styles from '../styles/product.module.scss';

interface Props {
    colors?: string[];
    availability?: boolean;
    product: Product;
    cartItem: CartItem;
}

export default function ProductConfigurator({
    colors,
    availability,
    product,
    cartItem,
}: Props) {
    const [localQuantity, setLocalQuantity] = useState(cartItem.quantity);

    if (!cartItem) {
        return;
    }

    return (
        <Stack className={styles.productContentContainer__productConfiguration}>
            {colors && (
                <AvailableColors
                    preselectedColor={cartItem.color}
                    colors={colors}
                    itemId={cartItem.id}
                />
            )}

            {availability && (
                <Group gap="16px" align="end">
                    <QuantitySelection
                        instantSelection
                        item={cartItem}
                        quantity={localQuantity}
                        setQuantity={setLocalQuantity}
                    />

                    <Box visibleFrom="sm">
                        <AddToCartButton
                            product={product}
                            availability={availability}
                            cartItem={cartItem}
                            w="306px"
                        />
                    </Box>
                </Group>
            )}
        </Stack>
    );
}
