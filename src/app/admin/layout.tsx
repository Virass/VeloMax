'use client';

import type { PropsWithChildren } from 'react';

import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Header from '../../entities/admin/admin-main-layout/components/Header';
import Navbar from '../../entities/admin/admin-main-layout/components/Navbar';

export default function AdminPanelLayout({ children }: PropsWithChildren) {
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
