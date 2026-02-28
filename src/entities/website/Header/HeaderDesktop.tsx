'use client';

import {
    type BoxProps,
    type MantineBreakpoint,
    Box,
    Group,
    NavLink,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAppStore } from '@/core/store/store';
import { CartDrawerContent } from '@/features/website/CartDrawerContent';
import Drawer from '@/shared/components/Drawer';
import { Phones } from '@/shared/components/Phones';
import { HEADER_NAV_LINKS, website } from '@/shared/constants/urls';
import GoToCart from '@/widgets/website/Header/GoToCart';

import styles from '../../../widgets/website/Header/styles/HeaderDesktop.module.scss';

interface HeaderDesktopProps extends BoxProps {
    visibleFrom?: MantineBreakpoint;
}

export const HeaderDesktop = ({ visibleFrom }: HeaderDesktopProps) => {
    const [opened, { open, close }] = useDisclosure(false);
    const pathname = usePathname();

    const { items } = useAppStore((state) => state.shoppingCart);

    const PROFILE = { href: website.profile, label: 'особистий кабінет' };

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
            bg="white"
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
                    {!!items.length && (
                        <Drawer
                            isOpened={opened}
                            close={close}
                            position="right"
                            padding="20px"
                            styles={{
                                content: {
                                    overflow: 'hidden',
                                },
                                body: {
                                    height: '90%',
                                },
                            }}
                        >
                            <CartDrawerContent closeDrawer={close} />
                        </Drawer>
                    )}

                    <GoToCart openDrawer={open} />

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
                            fw={pathname === PROFILE.href ? 600 : 400}
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
