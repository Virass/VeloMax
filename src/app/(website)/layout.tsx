import React from 'react';

import { Stack } from '@mantine/core';

import { Header } from '@/entities/website/components/Header';
import Footer from '@/entities/website/Footer/Footer';

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Stack
                mih="100dvh"
                px={{ base: 16, sm: 20, md: 24 }}
                py={{ base: 8, sm: 12, md: 16 }}
            >
                <Header />
                <main style={{ flex: 1 }}>{children}</main>
                <Footer />
            </Stack>
        </div>
    );
}
