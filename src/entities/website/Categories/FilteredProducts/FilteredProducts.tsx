'use client';

import { useState } from 'react';

import { Box, Group, Stack, Text } from '@mantine/core';

import LoadMore from '@/features/website/loadMoreContainer/LoadMoreContainer';
import type { Product } from '@/shared/types/productType';
import GridDisplayDataIcon from '@/shared/ui/icons/GridDisplayDataIcon';
import RowDisplayDataIcon from '@/shared/ui/icons/RowDisplayDataIcon';

import { ProductItem } from '../ProductItem';
import styles from '../styles/filteredProducts.module.scss';

interface Props {
    initialProducts: Product[];
    total: number;
}

export default function FilteredProducts({ initialProducts, total }: Props) {
    const [products, setProducts] = useState(initialProducts);
    const [productsDisplayMode, setProductsDisplayMode] = useState<
        'flex' | 'grid'
    >('flex');

    const loadMore = () => {
        // implement this fucntion that will load more items and update products as well as total
    };

    const icons = [
        {
            mode: 'flex',
            icon: (
                <RowDisplayDataIcon
                    color={productsDisplayMode === 'flex' ? 'black' : 'gray.6'}
                />
            ),
        },
        {
            mode: 'grid',
            icon: (
                <GridDisplayDataIcon
                    color={productsDisplayMode === 'grid' ? 'black' : 'gray.6'}
                />
            ),
        },
    ];

    return (
        <Stack className={styles.filteredProductsContainer}>
            <Group justify="space-between">
                <Text
                    className={styles.remainingItemsText}
                >{`${products.length} з ${total} результатів`}</Text>

                <Group gap="64px" className={styles.positioningModeIcons}>
                    {icons.map(({ mode, icon }) => (
                        <Box
                            key={mode}
                            onClick={() =>
                                setProductsDisplayMode(mode as 'flex' | 'grid')
                            }
                        >
                            {icon}
                        </Box>
                    ))}
                </Group>
            </Group>

            <LoadMore hasMore={true} loadMore={() => {}}>
                <Box
                    className={
                        productsDisplayMode === 'flex'
                            ? styles.flexContainer
                            : styles.gridContainer
                    }
                >
                    {products.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            customDirection={
                                productsDisplayMode === 'grid'
                                    ? 'column'
                                    : 'row'
                            }
                        />
                    ))}
                </Box>
            </LoadMore>
        </Stack>
    );
}
