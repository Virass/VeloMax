'use client';

import { AppShell, NavLink, ScrollArea } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems } from '../config/nav';

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
                        />
                    );
                })}
            </AppShell.Section>
        </AppShell.Navbar>
    );
}
