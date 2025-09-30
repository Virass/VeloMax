'use client';

import { useState } from 'react';

import { Box, Group, Stack, Text } from '@mantine/core';

import type { Filter } from '@/features/website/Products/types/filters';
import { Button } from '@/shared/components/Button';
import MobileDragger from '@/shared/components/MobileDragger';
import { getMobileFiltersOrder } from '@/shared/lib/getMobileFiltersOrder';

import { MobileFilterItem } from '../MobileFilterItem';

interface Props {
    filters: Filter[];
}

export default function MobileFilters({ filters }: Props) {
    const mobileFilters = getMobileFiltersOrder(filters);
    const [openedFilter, setOpenedFilter] = useState<string | null>(null);

    return (
        <Stack gap="12px">
            <MobileDragger />

            <Stack gap="16px">
                <Group justify="space-between">
                    <Box flex={1} />
                    <Text fw="500" fz="xl" flex={1}>
                        Фільтрувати
                    </Text>
                    <Button variant="invisible" flex={1}>
                        Скинути
                    </Button>
                </Group>

                <Stack gap="8px">
                    {mobileFilters.map((filter) => (
                        <MobileFilterItem
                            key={filter.name}
                            filter={filter}
                            openedFilter={openedFilter}
                            setOpenedFilter={setOpenedFilter}
                        />
                    ))}
                </Stack>

                <Button radius="lg" bg="gray.9" c="white" size="lg" fw="400">
                    Застосувати
                </Button>
            </Stack>
        </Stack>
    );
}
