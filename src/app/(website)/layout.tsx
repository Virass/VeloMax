import React from 'react';

import { Stack } from '@mantine/core';

import { Header } from '@/features/website/header';
import Footer from '@/entities/website/Footer/Footer';

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
                background: 'var(--Gray-10, rgba(248, 249, 250, 1))',
            }}
        >
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
        </Stack>
    );
}
