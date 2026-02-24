import React from 'react';

import { Stack } from '@mantine/core';

import Footer from '@/widgets/website/Footer/Footer';
import { Header } from '@/widgets/website/Header/Header';
import Breadcrumbs from '@/shared/components/Breadcrumbs';

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Stack
            mih="100dvh"
            px={{ base: 16, sm: 20, md: 24 }}
            py={{ base: 8, sm: 12, md: 16 }}
            style={{
                background: 'gray.10',
            }}
        >
            <Header />

            <Breadcrumbs />

            <main style={{ flex: 1 }}>{children}</main>

            <Footer />
        </Stack>
    );
}
