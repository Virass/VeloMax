import { type PropsWithChildren } from 'react';

import {
    ColorSchemeScript,
    MantineProvider,
    mantineHtmlProps,
} from '@mantine/core';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

// import "@/shared/styles/globals.css";
import '@mantine/core/styles.css';
import '@/shared/styles/reset.css';

export const metadata: Metadata = {
    title: 'VeloMax',
    description: 'Вело майстерня VeloMax',
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
            </head>
            <body>{children}</body>
        </html>
    );
}
