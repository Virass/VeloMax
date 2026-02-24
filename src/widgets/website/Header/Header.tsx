import React from 'react';

import { HeaderDesktop } from '@/widgets/website/Header/HeaderDesktop';
import { HeaderMobile } from '@/widgets/website/Header/HeaderMobile';
import { HeaderRoot } from '@/widgets/website/Header/HeaderRoot';

export const Header = () => (
    <HeaderRoot>
        <HeaderDesktop visibleFrom="md" />
        <HeaderMobile hiddenFrom="md" />
    </HeaderRoot>
);
