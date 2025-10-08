import { DEFAULT_THEME, Group } from '@mantine/core';

import { MobileFilters } from '@/features/website/Products/MobileFilters';
import { Button } from '@/shared/components/Button';
import Drawer from '@/shared/components/Drawer';
import LeftArrowIcon from '@/shared/ui/icons/LeftArrowIcon';

import { FilterDrawerButton } from './FilterDrawerButton';
import { getFilters } from '../SideBar/services/sidebar.service';

export default async function TopBar() {
    const productFilters = await getFilters();

    return (
        <Group hiddenFrom="lg" justify="space-between">
            <Button
                leftIcon={
                    <LeftArrowIcon color="gray.9" height={10} width={16} />
                }
                variant="invisible"
            >
                Назад
            </Button>

            <Drawer
                CustomButton={FilterDrawerButton}
                position="bottom"
                withCloseButton={false}
                padding="5px"
                styles={{
                    content: {
                        backgroundColor: DEFAULT_THEME.colors.gray[0],
                        borderTopLeftRadius: '32px',
                        borderTopRightRadius: '32px',
                        height: 'fit-content',
                    },
                }}
            >
                <MobileFilters filters={productFilters} />
            </Drawer>
        </Group>
    );
}
