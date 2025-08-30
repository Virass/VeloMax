'use client';

import { AppShell, NavLink, ScrollArea } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { URLs } from '@/shared/constants/urls';

const navItems = [
    { label: 'Аналітика', link: URLs.admin.dashboard },
    { label: 'Замовлення', link: URLs.admin.orders },
    { label: 'Категорії', link: URLs.admin.categories },
    { label: 'Продукти', link: URLs.admin.products },
    { label: 'Послуги', link: URLs.admin.services },
    { label: 'Клієнти', link: URLs.admin.customers },
    { label: 'Налаштування', link: URLs.admin.settings },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <AppShell.Navbar>
            <AppShell.Section grow my="md" component={ScrollArea} px="md">
                {navItems.map(({ label, link }) => {
                    const isActive = link === pathname;

                    return (
                        <NavLink
                            href={link}
                            key={link}
                            component={Link}
                            label={label}
                            active={isActive}
                            disabled={isActive}
                            style={{ textTransform: 'capitalize' }}
                        />
                    );
                })}
            </AppShell.Section>
        </AppShell.Navbar>
    );
}
