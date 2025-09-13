import { Container, Group, Stack } from '@mantine/core';

import { getFilteredProducts } from '@/features/admin-panel/products/services/products.service';

import { FilteredProducts } from './FilteredProducts';
import { SideBar } from './SideBar';
import { TopBar } from './TopBar';

interface Props {
    filters?: Record<string, string>;
}

export default async function Categories({ filters }: Props) {
    const { filteredProducts, total } = await getFilteredProducts(filters, {
        limit: 8,
        offset: 0,
    });

    return (
        <Group align="start">
            <SideBar />

            <Stack flex={1} maw="1000px">
                <TopBar />

                <FilteredProducts
                    initialProducts={filteredProducts}
                    total={total}
                />
            </Stack>
        </Group>
    );
}
