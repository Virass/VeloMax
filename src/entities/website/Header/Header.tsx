import React from 'react';

import { HeaderDesktop } from '@/entities/website/Header/HeaderDesktop';
import { HeaderMobile } from '@/entities/website/Header/HeaderMobile';
import { HeaderRoot } from '@/entities/website/Header/HeaderRoot';

export const Header = () => (
    <HeaderRoot>
        <HeaderDesktop visibleFrom="md" />
        <HeaderMobile hiddenFrom="md" />
    </HeaderRoot>
);
