import { Box } from '@mantine/core';

import ProductCard from '@/shared/components/ProductCard';
import type { Product } from '@/shared/types/productType';

interface Props {
    product: Product;
    customDirection?: 'row' | 'column';
}

export default function ProductItem({ product, customDirection }: Props) {
    const sharedProps = {
        title: product.name,
        availability: product.isActive,
        price: product.price,
        productId: product.id,
    };

    return (
        <Box>
            <Box hiddenFrom="sm">
                <ProductCard cardDirection="column" {...sharedProps} />
            </Box>
            <Box visibleFrom="sm">
                <ProductCard
                    cardDirection={customDirection || 'row'}
                    {...sharedProps}
                />
            </Box>
        </Box>
    );
}
