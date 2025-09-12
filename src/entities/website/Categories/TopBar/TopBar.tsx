'use client';

import { rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function TopBar() {
    const isMobile = useMediaQuery(`(max-width: ${rem(750)})`);

    return isMobile ? <div>Mobile Action Bar</div> : <div>Breadcrumbs</div>;
}
