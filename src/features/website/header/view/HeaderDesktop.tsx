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
import { BREAKPOINTS } from '@/shared/constants/breakpoints';
import { NAV_LINKS } from '@/shared/constants/urls';

interface HeaderDesktopProps extends BoxProps {
    visibleFrom?: MantineBreakpoint;
}

export const HeaderDesktop = ({ visibleFrom }: HeaderDesktopProps) => {
    const pathname = usePathname();
    const isXl = useMediaQuery(`(min-width: ${BREAKPOINTS.xl})`);
    const cartItemCount = 1;

    return (
        <Box visibleFrom={visibleFrom} w="100%" h="6vh" display="flex">
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
                    {NAV_LINKS.map((link) => {
                        const isCartLink =
                            link.href === '/cart' && cartItemCount > 0;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    textDecoration: 'none',
                                }}
                            >
                                <Group gap={4}>
                                    <Text
                                        fw={pathname === link.href ? 600 : 400}
                                        size={isXl ? 'xl' : 'md'}
                                        c="#212529"
                                        style={{
                                            textAlign: 'center',
                                            textTransform: 'capitalize',
                                        }}
                                    >
                                        {link.label}
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
