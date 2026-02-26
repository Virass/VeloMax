import React from 'react';

import { HeaderDesktop } from '@/widgets/website/Header/HeaderDesktop';
import { HeaderMobile } from '@/widgets/website/Header/HeaderMobile';
import { Box } from '@mantine/core';

export const Header = () => (
    <Box
        component="header"
        display="flex"
        style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
        }}
    >
        <HeaderDesktop visibleFrom="md" />
        <HeaderMobile hiddenFrom="md" />
    </Box>
);
