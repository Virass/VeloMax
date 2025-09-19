'use client';

import { useEffect } from 'react';

import {
    type BoxProps,
    type MantineBreakpoint,
    Box,
    Group,
    Burger,
} from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';

import { Actions } from '@/features/website/header/view/Actions';
import { DrawerMenu } from '@/features/website/header/view/DrawerMenu';
import { BREAKPOINTS } from '@/shared/constants/breakpoints';
import { Brand } from '@/shared/ui/Brand';

interface HeaderMobileProps extends BoxProps {
    hiddenFrom: MantineBreakpoint;
}

export const HeaderMobile = ({ hiddenFrom }: HeaderMobileProps) => {
    const [opened, { toggle, close }] = useDisclosure(false);
    const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.md})`);

    useEffect(() => {
        if (isDesktop && opened) {
            close();
        }
    }, [isDesktop, opened, close]);

    return (
        <>
            <Box
                hiddenFrom={hiddenFrom}
                w="100%"
                display="flex"
                px={14}
                py={10}
                mx={16}
                bd="2px solid var(--mantine-color-white)"
                style={{
                    borderRadius: 40,
                    backdropFilter: 'blur(16px)',
                }}
            >
                <Group h="100%" w="100%" gap={0}>
                    <Box flex={1}>
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            aria-label="Меню"
                            size={15}
                            lineSize={2}
                            p={4.5}
                            h={24}
                        />
                    </Box>
                    <Brand />
                    <Actions />
                </Group>
            </Box>
            <DrawerMenu opened={opened} onClose={close} />
        </>
    );
};
