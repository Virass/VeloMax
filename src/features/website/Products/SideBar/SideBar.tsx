import { Stack, Text } from '@mantine/core';

import { inter } from '@/app/layout';

import { FilterItem } from '../FilterItem';
import { getFilters } from './services/sidebar.service';

export default async function SideBar() {
    const filters = await getFilters();

    return (
        <Stack
            visibleFrom="lg"
            bg="gray.1"
            bdrs="48px"
            p="48px 12px 48px 100px"
            gap="32px"
        >
            <Text size="34px" className={inter.className}>
                Категорії
            </Text>

            <Stack gap="48px">
                {filters.map((filter) => (
                    <FilterItem key={filter.name} filter={filter} />
                ))}
            </Stack>
        </Stack>
    );
}
