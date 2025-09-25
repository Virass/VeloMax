import { Container, Group, Stack } from '@mantine/core';

import { getFilteredProducts } from '@/features/admin-panel/products/services/products.service';

import { maxVisibleProductsOnDesktop } from './constants';
import { FilteredProducts } from './FilteredProducts';
import { SideBar } from './SideBar';
import { TopBar } from './TopBar';

interface Props {
    filters?: Record<string, string>;
}

export default async function Products({ filters }: Props) {
    const { filteredProducts, total } = await getFilteredProducts(filters, {
        // TODO dynamically pass in the limit
        limit: maxVisibleProductsOnDesktop,
        offset: 0,
    });

    return (
        // TODO replace this hardcoded value.
        <Container size="2000px">
            <Group align="start" gap="30px">
                <SideBar />

                <Stack flex={1}>
                    <TopBar />

                    <FilteredProducts
                        initialProducts={filteredProducts}
                        total={total}
                    />
                </Stack>
            </Group>
        </Container>
    );
}
