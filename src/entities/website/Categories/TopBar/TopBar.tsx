import { Box, Group } from '@mantine/core';

import Breadcrumbs from '@/shared/components/Breadcrumbs';
import { Button } from '@/shared/components/Button';
import FilterIcon from '@/shared/ui/icons/FilterIcon';
import LeftArrowIcon from '@/shared/ui/icons/LeftArrowIcon';

const buttons = [
    {
        label: 'Назад',
        icon: <LeftArrowIcon color="gray.9" height={10} width={16} />,
    },
    {
        label: 'Фільтрувати',
        icon: <FilterIcon color="gray.9" height={16} width={16} />,
    },
];

export default function TopBar() {
    return (
        <>
            <Group hiddenFrom="sm" justify="space-between">
                {buttons.map(({ label, icon }) => (
                    <Button key={label} leftIcon={icon} variant="invisible">
                        {label}
                    </Button>
                ))}
            </Group>

            <Box visibleFrom="sm" bg="gray.1" p="48px 64px" bdrs="48px">
                <Breadcrumbs />
            </Box>
        </>
    );
}
