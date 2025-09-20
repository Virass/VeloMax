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
import { BREAKPOINTS } from '@/shared/constants/breakpoints';
import { HEADER_NAV_LINKS, website } from '@/shared/constants/urls';

interface HeaderDesktopProps extends BoxProps {
    visibleFrom?: MantineBreakpoint;
}

export const HeaderDesktop = ({ visibleFrom }: HeaderDesktopProps) => {
    const pathname = usePathname();
    const isXl = useMediaQuery(`(min-width: ${BREAKPOINTS.xl})`);
    const CART = { href: website.cart, label: 'кошик' };
    const PROFILE = { href: website.profile, label: 'особистий кабінет' };

    //TODO мок даних поки немає функціональності кошика
    const cartItemCount = 1;

    return (
        <Box
            visibleFrom={visibleFrom}
            w="100%"
            maw={isXl ? '1380' : '940'} //TODO Перенести ці magic number в об'єкт з розмірами
            py="6px"
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
                gap={isXl ? '50px' : '24px'}
                display="flex"
                justify="center"
            >
                <Phones
                    align="center"
                    iconSize={isXl ? 32 : 24}
                    fontSize={isXl ? '20px' : '16px'}
                    fontWeight={600}
                />

                <Box
                    component="nav"
                    display="flex"
                    style={{
                        gap: isXl ? '48px' : '20px',
                    }}
                >
                    {Object.values(HEADER_NAV_LINKS).map(({ href, label }) => {
                        if (href === website.cart || href === website.profile) {
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
                                        fontSize: isXl ? '20px' : '16px',
                                        fontWeight: isActive ? 600 : 400,
                                        textTransform: 'capitalize',
                                    },
                                }}
                            />
                        );
                    })}
                </Box>

                <Group gap={isXl ? '24px' : '16px'}>
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
                        href={PROFILE?.href || '/profile'}
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
