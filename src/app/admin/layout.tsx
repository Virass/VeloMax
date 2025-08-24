'use client';

import type { PropsWithChildren } from 'react';

import { AppShell, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { usePathname } from 'next/navigation';

import { getSegment } from '@/shared/lib/getSegment';

import Header from '../../entities/admin/admin-main-layout/components/Header';
import Navbar from '../../entities/admin/admin-main-layout/components/Navbar';

export default function AdminPanelLayout({ children }: PropsWithChildren) {
    const [isNavbarOpen, { toggle }] = useDisclosure();
    const pathname = usePathname();
    const currentPage = getSegment(pathname, { ignoreRoot: true, limit: 2 });

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

            <AppShell.Main>
                <Stack>
                    {currentPage && (
                        <Title order={1} tt="capitalize">
                            {currentPage}
                        </Title>
                    )}

                    {children}
                </Stack>
            </AppShell.Main>
        </AppShell>
    );
}
