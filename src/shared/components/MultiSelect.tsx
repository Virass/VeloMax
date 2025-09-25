import { Box, Group, Stack, Text, Transition } from '@mantine/core';

import CheckboxField from './CheckboxInput';
import DropdownArrow from '../ui/icons/DropdownArrow';

interface Props {
    label: string;
    options: string[] | number[];
    isMultiSelectOpened: boolean;
    toggleMultiSelect: () => void;
}

export default function MultiSelect({
    label,
    options,
    isMultiSelectOpened,
    toggleMultiSelect,
}: Props) {
    return (
        <Stack>
            <Group justify="space-between" onClick={toggleMultiSelect}>
                <Text fw="700">{label}</Text>

                <Box
                    style={{
                        transition: 'transform 0.3s ease',
                        transform: isMultiSelectOpened
                            ? 'rotate(90deg)'
                            : 'rotate(0deg)',
                    }}
                >
                    <DropdownArrow
                        color="gray.9"
                        viewBox="4 3 8 10"
                        width={13}
                        height={13}
                    />
                </Box>
            </Group>

            <Transition
                mounted={isMultiSelectOpened}
                transition="fade"
                duration={300}
                exitDuration={0}
                timingFunction="ease"
            >
                {(styles) => (
                    <Stack style={styles}>
                        {options.map((option) => (
                            <CheckboxField key={option} label={option} />
                        ))}
                    </Stack>
                )}
            </Transition>
        </Stack>
    );
}
