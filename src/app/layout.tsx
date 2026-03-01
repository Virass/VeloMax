import { type PropsWithChildren } from 'react';

import {
    ColorSchemeScript,
    MantineProvider,
    mantineHtmlProps,
} from '@mantine/core';
import type { Metadata } from 'next';
// import "@/shared/styles/globals.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@/shared/styles/reset.css';
import { Inter, Roboto } from 'next/font/google';

import { Providers } from '@/core/providers/Providers';

export const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
    title: 'VeloMax',
    description: 'Вело майстерня VeloMax',
};

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin', 'cyrillic'],
});

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en" {...mantineHtmlProps} className={roboto.className}>
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
