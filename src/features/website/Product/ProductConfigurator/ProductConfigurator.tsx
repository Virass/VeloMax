'use client';

import { Box, Group, Stack } from '@mantine/core';

import type { CartItem } from '@/core/store/shoppingCartStore';
import AddToCartButton from '@/shared/components/AddToCartButton';
import QuantitySelection from '@/shared/components/QuantitySelection/QuantitySelection';
import { useCart } from '@/shared/hooks/useCart';
import type { Product } from '@/shared/types/productType';

import { AvailableColors } from '../AvailableColors';
import styles from '../styles/product.module.scss';

interface Props {
    colors?: string[];
    availability?: boolean;
    product: Product;
}

export default function ProductConfigurator({
    colors,
    product,
    availability,
}: Props) {
    const item: CartItem = { ...product, quantity: 1 };
    const { localQuantity, setLocalQuantity } = useCart(item);

    return (
        <Stack className={styles.productContentContainer__productConfiguration}>
            {colors && <AvailableColors colors={colors} />}

            {availability && (
                <Group gap="16px" align="end">
                    <QuantitySelection
                        item={item}
                        quantity={localQuantity}
                        setQuantity={setLocalQuantity}
                    />

                    <Box visibleFrom="sm">
                        <AddToCartButton
                            availability={availability}
                            product={product}
                            w="306px"
                        />
                    </Box>
                </Group>
            )}
        </Stack>
    );
}
