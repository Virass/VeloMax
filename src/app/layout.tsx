import { type PropsWithChildren } from 'react';

import {
    ColorSchemeScript,
    MantineProvider,
    mantineHtmlProps,
} from '@mantine/core';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';

// import "@/shared/styles/globals.css";
import '@mantine/core/styles.css';
import '@/shared/styles/reset.css';

export const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin', 'cyrillic'],
});

export const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
    title: 'VeloMax',
    description: 'Вело майстерня VeloMax',
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html
            lang="en"
            {...mantineHtmlProps}
            className={`${roboto.className} ${inter.variable}`}
        >
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider>{children}</MantineProvider>
            </body>
        </html>
    );
}
