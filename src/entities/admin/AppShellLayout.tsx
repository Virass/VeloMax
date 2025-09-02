'use client';

import type { PropsWithChildren } from 'react';

import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Header from './components/Header';
import Navbar from './components/Navbar';

export default function AdminShell({ children }: PropsWithChildren) {
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
