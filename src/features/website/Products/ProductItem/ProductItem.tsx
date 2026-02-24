import { Box } from '@mantine/core';

import ProductCard from '@/shared/components/ProductCard';
import type { Product } from '@/shared/types/productType';

interface Props {
    product: Product;
    customDirection?: 'row' | 'column';
}

export default function ProductItem({ product, customDirection }: Props) {
    return (
        <Box>
            <Box hiddenFrom="sm">
                <ProductCard cardDirection="column" product={product} />
            </Box>
            <Box visibleFrom="sm">
                <ProductCard
                    cardDirection={customDirection || 'row'}
                    product={product}
                />
            </Box>
        </Box>
    );
}
