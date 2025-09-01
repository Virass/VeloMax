'use client';

import {
    type BoxProps,
    type MantineBreakpoint,
    Box,
    Group,
    Text,
    Badge,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Phones } from '@/shared/components/Phones';
import { BREAKPOINTS } from '@/shared/config/breakpoints';
import { NAV_LINKS } from '@/shared/constants/urls';

interface HeaderDesktopProps extends BoxProps {
    visibleFrom?: MantineBreakpoint;
}

export const HeaderDesktop = ({ visibleFrom }: HeaderDesktopProps) => {
    const pathname = usePathname();
    const isXl = useMediaQuery(`(min-width: ${BREAKPOINTS.xl})`);
    const cartItemCount = 1;

    return (
        <Box
            visibleFrom={visibleFrom}
            w="100%"
            h="6vh"
            display="flex"
            align="center"
            justify="center"
        >
            <Group
                h="100%"
                w="100%"
                px={{ md: 20, lg: 93 }}
                py="0.5vh"
                justify="space-between"
                align="center"
            >
                <Phones
                    align="center"
                    iconSize={isXl ? 32 : 24}
                    fontSize={isXl ? 'lg' : 'md'}
                />

                <Group gap={isXl ? 'xl' : 'lg'}>
                    {Object.values(NAV_LINKS).map((l) => {
                        const isCartLink =
                            l.href === '/cart' && cartItemCount > 0;

                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                style={{
                                    textDecoration: 'none',
                                }}
                            >
                                <Group gap={4}>
                                    <Text
                                        fw={pathname === l.href ? 600 : 400}
                                        size={isXl ? 'xl' : 'md'}
                                        c="#212529"
                                        style={{
                                            textAlign: 'center',
                                            textTransform: 'capitalize',
                                        }}
                                    >
                                        {l.label}
                                    </Text>
                                    {isCartLink && (
                                        <Badge
                                            size={isXl ? 'lg' : 'md'}
                                            color="#000000"
                                            variant="filled"
                                            circle
                                        >
                                            {cartItemCount}
                                        </Badge>
                                    )}
                                </Group>
                            </Link>
                        );
                    })}
                </Group>
            </Group>
        </Box>
    );
};
