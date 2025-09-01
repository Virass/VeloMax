import { Box, Container } from '@mantine/core';
import { type PropsWithChildren } from 'react';

export function HeaderRoot({ children }: PropsWithChildren) {
    return (
        <Box
            component="header"
            mx="4vw"
            mt={16}
            display="flex"
            align="center"
            justify="space-between"
            bg="var(--whiteblur40, rgba(255, 255, 255, 0.4))"
            bd="2px solid var(--mantine-color-white)"
            style={{
                borderRadius: 24,
                backdropFilter: 'blur(16px)',
                position: 'sticky',
                top: 0,
                zIndex: 100,
            }}
        >
            {children}
        </Box>
    );
}
