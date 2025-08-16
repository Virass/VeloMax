'use client';

import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import type { BaseLayoutProps } from '@/shared/types/core';

import Header from './components/Header';
import Navbar from './components/Navbar';

export default function AdminPanelLayout({ children }: BaseLayoutProps) {
    const [isNavbarOpen, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !isNavbarOpen },
            }}
            padding="md"
        >
            <Header isNavbarOpen={isNavbarOpen} toggle={toggle} />

            <Navbar />

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}
