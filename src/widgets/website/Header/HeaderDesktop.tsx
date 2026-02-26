'use client';

import {
    type BoxProps,
    type MantineBreakpoint,
    Box,
    Group,
    NavLink,
} from '@mantine/core';
import Image from 'next/image';

import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAppStore } from '@/core/store/store';
import { CartDrawerContent } from '@/features/website/CartDrawerContent';
import Drawer from '@/shared/components/Drawer';
import { Phones } from '@/shared/components/Phones';
import { HEADER_NAV_LINKS, website } from '@/shared/constants/urls';

import GoToCart from './GoToCart';
import styles from './styles/HeaderDesktop.module.scss';
import { ShoppingBagIcon } from '@/shared/ui/icons/ShoppingBagIcon';
import { UserIcon } from '@/shared/ui/icons/UserIcon';

interface HeaderDesktopProps extends BoxProps {
    visibleFrom?: MantineBreakpoint;
}

export const HeaderDesktop = ({ visibleFrom }: HeaderDesktopProps) => {
    const [opened, { open, close }] = useDisclosure(false);
    const pathname = usePathname();

    const { items } = useAppStore((state) => state.shoppingCart);

    const PROFILE = {
        href: website.profile,
        label: 'Кабінет',
        icon: <UserIcon width={32} height={32} />,
    };

    return (
        <Box
            visibleFrom={visibleFrom}
            w="100%"
            py="12px"
            px="lg"
            display="flex"
            mx="auto"
            bd="2px solid var(--mantine-color-white)"
            bdrs={40}
            bg="white"
            style={{
                boxShadow: '-1px 5px 29px -18px rgba(0, 0, 0, 1)',
                flexDirection: 'column',
            }}
        >
            <Group
                w="100%"
                className={styles.container}
                display="flex"
                justify="space-between"
            >
                <div>
                    <Image
                        src="/DarkLogo.svg"
                        alt="Company Logo"
                        width={96}
                        height={96}
                        priority
                        style={{
                            transform: 'rotate(-15deg)',
                        }}
                    />
                </div>
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
                <Group>
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
                                {PROFILE.icon}
                            </Box>
                        </Link>
                    </Group>
                </Group>
            </Group>
        </Box>
    );
};
