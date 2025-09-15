'use client';

import {
    type BoxProps,
    type MantineBreakpoint,
    Box,
    Group,
    Badge,
    NavLink,
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
    const CART = NAV_LINKS.cart;
    const PROFILE = NAV_LINKS.profile;

    //TODO мок даних поки немає функціональності кошика
    const cartItemCount = 1;

    return (
        <Box
            visibleFrom={visibleFrom}
            w="100%"
            maw={isXl ? '1380' : '940'}
            py="0.375rem"
            px="lg"
            display="flex"
            mx="auto"
            bd="2px solid var(--mantine-color-white)"
            bdrs={40}
            style={{
                backdropFilter: 'blur(16px)',
            }}
        >
            <Group
                w="100%"
                gap={isXl ? '3.125rem' : '1.5rem'}
                display="flex"
                justify="center"
            >
                <Phones
                    align="center"
                    iconSize={isXl ? 32 : 24}
                    fontSize={isXl ? '1.25rem' : '1rem'}
                    fontWeight={600}
                />

                <Box
                    component="nav"
                    display="flex"
                    style={{
                        gap: isXl ? '3rem' : '1.25rem',
                    }}
                >
                    {Object.values(NAV_LINKS).map(({ href, label }) => {
                        if (href === '/cart' || href === '/profile') {
                            return;
                        }

                        const isActive = pathname === href;

                        return (
                            <NavLink
                                key={href}
                                label={label}
                                href={href}
                                active={isActive}
                                styles={{
                                    root: {
                                        padding: 0,
                                        width: 'fit-content',
                                        backgroundColor: 'transparent',
                                    },
                                    label: {
                                        color: 'var(--mantine-color-black)',
                                        fontSize: isXl ? '1.25rem' : '1rem',
                                        fontWeight: isActive ? 600 : 400,
                                        textTransform: 'capitalize',
                                    },
                                }}
                            />
                        );
                    })}
                </Box>

                <Group gap={isXl ? '1.5rem' : '1rem'}>
                    <Link
                        href={CART.href}
                        style={{
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            component="span"
                            fw={pathname === CART.href ? 600 : 400}
                            fz={isXl ? 'xl' : 'md'}
                            c="var(--mantine-color-black)"
                            tt="capitalize"
                        >
                            {CART.label}
                        </Box>
                        {cartItemCount && (
                            <Badge
                                color="var(--mantine-color-black)"
                                variant="filled"
                                circle
                                ml={4}
                                size={isXl ? 'xl' : 'md'}
                            >
                                {cartItemCount}
                            </Badge>
                        )}
                    </Link>

                    <Link
                        href={PROFILE.href}
                        style={{
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            component="span"
                            fw={pathname === CART.href ? 600 : 400}
                            fz={isXl ? 'xl' : 'md'}
                            c="var(--mantine-color-black)"
                            tt="capitalize"
                        >
                            {PROFILE.label}
                        </Box>
                    </Link>
                </Group>
            </Group>
        </Box>
    );
};
