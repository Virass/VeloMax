'use client';

import {
    Box,
    Group,
    Burger,
    type BoxProps,
    MantineBreakpoint,
} from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { DrawerMenu } from '@/features/website/header/view/DrawerMenu';
import { Actions } from '@/features/website/header/view/Actions';
import { Brand } from '@/shared/ui/Brand';
import { useMediaQuery } from '@mantine/hooks';
import { BREAKPOINTS } from '@/shared/config/breakpoints';

interface HeaderMobileProps extends BoxProps {
    hiddenFrom: MantineBreakpoint;
}

export const HeaderMobile = ({ hiddenFrom }: HeaderMobileProps) => {
    const [open, setOpen] = useState(false);
    const handleBurgerClick = useCallback(() => setOpen((v) => !v), []);
    const closeDrawer = useCallback(() => setOpen(false), []);
    const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.md})`);

    useEffect(() => {
        if (isDesktop && open) {
            closeDrawer();
        }
    }, [isDesktop, open, closeDrawer]);

    return (
        <>
            <Box
                hiddenFrom={hiddenFrom}
                w="100%"
                h="5vh"
                display="flex"
                direction="column"
                align="center"
                justify="space-between"
                ff="inherit"
            >
                <Group h="100%" w="100%" px={16} justify="space-between">
                    <Burger
                        opened={open}
                        onClick={handleBurgerClick}
                        aria-label="Меню"
                        size={24}
                        lineSize={2}
                    />
                    <Brand />
                    <Actions />
                </Group>
            </Box>
            <DrawerMenu opened={open} onClose={closeDrawer} />
        </>
    );
};
