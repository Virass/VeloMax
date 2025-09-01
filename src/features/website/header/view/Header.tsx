import React from 'react';
import { HeaderDesktop } from '@/features/website/header/view/HeaderDesktop';
import { HeaderMobile } from '@/features/website/header/view/HeaderMobile';
import { HeaderRoot } from '@/features/website/header/view/HeaderRoot';

export const Header = () => (
    <HeaderRoot>
        <HeaderDesktop visibleFrom="md" />
        <HeaderMobile hiddenFrom="md" />
    </HeaderRoot>
);
