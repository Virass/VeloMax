'use client';

import { useState } from 'react';

import { Group, rem, Stack, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import LoadMore from '@/features/website/loadMoreContainer/LoadMoreContainer';
import ProductCard from '@/shared/components/ProductCard';
import type { Product } from '@/shared/types/productType';

interface Props {
    initialProducts: Product[];
    total: number;
}

export default function FilteredProducts({ initialProducts, total }: Props) {
    const [products, setProducts] = useState(initialProducts);
    const [productsDisplayMode, setProductsDisplayMode] = useState<
        'flex' | 'grid'
    >('flex');
    const isMobile = useMediaQuery(`(max-width: ${rem(750)})`);

    const loadMore = () => {
        // implement this fucntion that will load more items and update products as well as total
    };

    return (
        <Stack>
            <Group justify="space-between">
                <Text>{`${products.length} з ${total} результатів`}</Text>

                {!isMobile && (
                    <Group>
                        <div onClick={() => setProductsDisplayMode('flex')}>
                            icon 1
                        </div>
                        <div onClick={() => setProductsDisplayMode('grid')}>
                            icon 2
                        </div>
                    </Group>
                )}
            </Group>

            <LoadMore hasMore={true} loadMore={() => {}}>
                {/* Here, based on productsDisplayMode render data either using flexbox or grid */}

                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        cardDirection={isMobile ? 'column' : 'row'}
                        title={product.name}
                        price={product.price}
                        availability={Number(product.amount) > 0}
                    />
                ))}
            </LoadMore>
        </Stack>
    );
}
