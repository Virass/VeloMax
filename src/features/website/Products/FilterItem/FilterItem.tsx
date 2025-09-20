import { Stack, Text } from '@mantine/core';

import { PriceRange } from '@/features/website/PriceRange';
import CheckboxField from '@/shared/components/CheckboxInput';

import type { Filter } from '../types/filters';

interface Props {
    filter: Filter;
}

export default function FilterItem({ filter }: Props) {
    const { name, type, options } = filter;

    return (
        <Stack gap="24px">
            <Text fw="bold" size="24px">
                {name}
            </Text>

            {type === 'range' && (
                <PriceRange
                    defaultValue={[20, 80]}
                    range={{ min: 100, max: 10000 }}
                />
            )}

            {type === 'checkbox' && (
                <Stack gap="16px">
                    {options.map((option) => (
                        <CheckboxField
                            key={option}
                            label={option}
                            size="20px"
                        />
                    ))}
                </Stack>
            )}
        </Stack>
    );
}
