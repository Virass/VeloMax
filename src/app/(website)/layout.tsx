import React from 'react';

import { Stack } from '@mantine/core';
import { Roboto } from 'next/font/google';

import { Footer } from '@/entities/website/components/Footer';
import { Header } from '@/entities/website/components/Header';

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin', 'cyrillic'],
});

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={roboto.className}>
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
