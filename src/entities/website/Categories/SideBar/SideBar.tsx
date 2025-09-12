import { Stack, Text } from '@mantine/core';

import CheckboxField from '@/shared/components/CheckboxInput';
import RangeInput from '@/shared/components/RangeInput';

import { getFilters } from './services/sidebar.service';

export default async function SideBar() {
    const filters = await getFilters();

    return (
        <Stack visibleFrom="lg" w="500px">
            <Text size="lg">Категорії</Text>

            <Stack>
                {filters.map(({ name, type, options }) => (
                    <Stack key={name}>
                        <Text fw="bold">{name}</Text>

                        {type === 'range' && (
                            <RangeInput
                                marks={options.map((option) => ({
                                    value:
                                        (((option as number) - 0) /
                                            ((options[
                                                options.length - 1
                                            ] as number) -
                                                0)) *
                                        100,
                                    label: `${option} UAH`,
                                }))}
                            />
                        )}

                        {type === 'checkbox' && (
                            <Stack gap="16px">
                                {options.map((option) => (
                                    <CheckboxField
                                        key={option}
                                        label={option}
                                    />
                                ))}
                            </Stack>
                        )}
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
}
