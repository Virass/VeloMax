import { type PropsWithChildren } from 'react';

import {
    ColorSchemeScript,
    MantineProvider,
    mantineHtmlProps,
} from '@mantine/core';
import type { Metadata } from 'next';
// import "@/shared/styles/globals.css";
import '@mantine/core/styles.css';
import '@/shared/styles/reset.css';
import { Roboto } from 'next/font/google';

import { BREAKPOINTS } from '@/shared/constants/breakpoints';

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
                <MantineProvider
                    theme={{
                        fontFamily: 'var(--font-roboto), system-ui, sans-serif',
                        headings: { fontFamily: 'var(--font-roboto)' },
                        breakpoints: BREAKPOINTS,
                    }}
                >
                    {children}
                </MantineProvider>
            </body>
        </html>
    );
}
