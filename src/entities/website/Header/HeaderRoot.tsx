import { type PropsWithChildren } from 'react';

import { Box } from '@mantine/core';

export function HeaderRoot({ children }: PropsWithChildren) {
    return (
        <Box
            component="header"
            display="flex"
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 100,
            }}
        >
            {children}
        </Box>
    );
}
