'use client';

import { Box, Group, Stack } from '@mantine/core';

import type { CartItem } from '@/core/store/ShoppingCartSlice';
import AddToCartButton from '@/shared/components/AddToCartButton';
import QuantitySelection from '@/shared/components/QuantitySelection/QuantitySelection';
import { useCart } from '@/shared/hooks/useCart';
import type { UpdateCartItem } from '@/shared/hooks/useCartItem';
import type { Product } from '@/shared/types/productType';

import { AvailableColors } from '../AvailableColors';
import styles from '../styles/product.module.scss';

interface Props {
    colors?: string[];
    availability?: boolean;
    product: Product;
    cartItem: CartItem;
    updateCartItem: UpdateCartItem;
}

export default function ProductConfigurator({
    colors,
    product,
    availability,
    updateCartItem,
    cartItem,
}: Props) {
    const item: CartItem = { ...product, quantity: 1 };
    const { localQuantity, setLocalQuantity } = useCart(item);

    return (
        <Stack className={styles.productContentContainer__productConfiguration}>
            {colors && (
                <AvailableColors
                    preselectedColor={item.color}
                    colors={colors}
                    updateCartItem={updateCartItem}
                />
            )}

            {availability && (
                <Group gap="16px" align="end">
                    <QuantitySelection
                        item={item}
                        quantity={localQuantity}
                        setQuantity={setLocalQuantity}
                        updateCartItem={updateCartItem}
                    />

                    <Box visibleFrom="sm">
                        <AddToCartButton
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
