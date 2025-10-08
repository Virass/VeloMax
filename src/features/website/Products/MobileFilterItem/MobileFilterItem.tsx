import { Box, Group, Stack, Text } from '@mantine/core';

import { PriceRange } from '@/features/website/PriceRange';
import type { Filter } from '@/features/website/Products/types/filters';
import MultiSelect from '@/shared/components/MultiSelect';

interface Props {
    filter: Filter;
    openedFilter: string | null;
    setOpenedFilter: (openedFilter: string | null) => void;
}

export default function MobileFilterItem({
    filter,
    openedFilter,
    setOpenedFilter,
}: Props) {
    const { name, type, options } = filter;
    const isMultiSelectOpened = openedFilter === name;

    const toggleMultiSelect = () => {
        setOpenedFilter(isMultiSelectOpened ? null : name);
    };

    return (
        <Box p="14px 16px" bg="white" bdrs="32px">
            {type === 'range' && (
                <Stack gap="42px">
                    <Text fw="700">{name}</Text>

                    <Group justify="center">
                        <PriceRange
                            defaultValue={[20, 80]}
                            range={{ min: 100, max: 10000 }}
                        />
                    </Group>
                </Stack>
            )}

            {type === 'checkbox' && (
                <MultiSelect
                    options={options}
                    label={name}
                    isMultiSelectOpened={isMultiSelectOpened}
                    toggleMultiSelect={toggleMultiSelect}
                />
            )}
        </Box>
    );
}
