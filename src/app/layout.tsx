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
import type { BaseLayoutProps } from '@/shared/types/core';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'VeloMax',
    description: 'Вело майстерня VeloMax',
};

export default function RootLayout({ children }: BaseLayoutProps) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <MantineProvider>{children}</MantineProvider>
            </body>
        </html>
    );
}
