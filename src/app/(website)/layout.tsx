'use client';

import React from 'react';
import { Header } from '@/entities/website/Header';
import { Footer } from '@/entities/website/Footer';
import { Phones } from '@/features/website/contacts/Phones';
import { Flex, MantineProvider } from '@mantine/core';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    variable: '--font-roboto',
    className: 'font-roboto',
    subsets: ['latin', 'cyrillic'],
});

const phones = ['+380637476963', '+380679954177'];

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={roboto.className}>
            <MantineProvider
                theme={{
                    fontFamily: 'var(--font-roboto), system-ui, sans-serif',
                    headings: { fontFamily: 'var(--font-roboto)' },
                }}
            >
                <Flex
                    direction="column"
                    mih="100vh"
                    mx={{ base: 16, sm: 20, md: 24 }}
                    my={{ base: 8, sm: 12, md: 16 }}
                >
                    <Header
                        left={
                            <Phones
                                phones={phones}
                                color="#000000"
                                fontSize="lg"
                                fontWeight={400}
                                iconSize={32}
                                align="center"
                            />
                        }
                    />
                    <main style={{ flex: 1 }}>{children}</main>
                    <Footer />
                </Flex>
            </MantineProvider>
        </div>
    );
}
