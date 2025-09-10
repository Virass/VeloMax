import { Group, Stack, Text } from '@mantine/core';

import { getFilteredProducts } from '@/features/admin-panel/products/services/products.service';

import { FilteredProducts } from './FilteredProducts';

interface Props {
    filters?: Record<string, string>;
}

export default async function Categories({ filters }: Props) {
    const { filteredProducts, total } = await getFilteredProducts(filters, {
        limit: 8,
        offset: 0,
    });

    return (
        <Group>
            <Stack visibleFrom="lg">
                <Text>Категорії</Text>

                <div>filters...</div>
            </Stack>

            <Stack>
                <div>top component</div>

                <FilteredProducts
                    initialProducts={filteredProducts}
                    total={total}
                />
            </Stack>
        </Group>
    );
}
