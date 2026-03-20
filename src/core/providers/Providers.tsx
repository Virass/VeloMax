import { MantineProvider } from '@mantine/core';

import { BREAKPOINTS } from '@/shared/constants/breakpoints';

import { CustomProgressProvider } from './ClientProgressProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => (
    <CustomProgressProvider>
        <MantineProvider
            theme={{
                fontFamily: 'var(--font-roboto), system-ui, sans-serif',
                headings: { fontFamily: 'var(--font-roboto)' },
                breakpoints: BREAKPOINTS,
            }}
        >
            {children}
        </MantineProvider>
    </CustomProgressProvider>
);
