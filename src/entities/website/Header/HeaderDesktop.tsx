'use client';

import {
    type BoxProps,
    type MantineBreakpoint,
    Box,
    Group,
    Badge,
    NavLink,
} from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Phones } from '@/shared/components/Phones';
import { HEADER_NAV_LINKS, website } from '@/shared/constants/urls';
import styles from './HeaderDesktop.module.css';

interface HeaderDesktopProps extends BoxProps {
    visibleFrom?: MantineBreakpoint;
}

export const HeaderDesktop = ({ visibleFrom }: HeaderDesktopProps) => {
    const pathname = usePathname();
    const CART = { href: website.cart, label: 'кошик' };
    const PROFILE = { href: website.profile, label: 'особистий кабінет' };

    //TODO мок даних поки немає функціональності кошика
    const cartItemCount = 1;

    return (
        <Box
            visibleFrom={visibleFrom}
            w="100%"
            className={styles.container}
            py="6px"
            px="lg"
            display="flex"
            mx="auto"
            bd="2px solid var(--mantine-color-white)"
            bdrs={40}
            bg={'white'}
        >
            <Group
                w="100%"
                className={styles.group}
                display="flex"
                justify="center"
            >
                <Box className={styles.phonesWrapper}>
                    <Phones
                        align="center"
                        iconSize={24}
                        fontSize="var(--phone-font-size)"
                        fontWeight={600}
                    />
                </Box>

                <Box component="nav" display="flex" className={styles.nav}>
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
                                        fontWeight: isActive ? 600 : 400,
                                        textTransform: 'capitalize',
                                    },
                                }}
                                className={styles.navLabel}
                            />
                        );
                    })}
                </Box>

                <Group className={styles.linksGroup}>
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
                            c="var(--mantine-color-black)"
                            tt="capitalize"
                            className={styles.linkText}
                        >
                            {CART.label}
                        </Box>
                        {cartItemCount && (
                            <Badge
                                color="var(--mantine-color-black)"
                                variant="filled"
                                circle
                                ml={4}
                                className={styles.badge}
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
                            c="var(--mantine-color-black)"
                            tt="capitalize"
                            className={styles.linkText}
                        >
                            {PROFILE.label}
                        </Box>
                    </Link>
                </Group>
            </Group>
        </Box>
    );
};
