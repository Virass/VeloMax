'use client';

import { Stack } from '@mantine/core';
import { useSelectedLayoutSegment } from 'next/navigation';

import type { BaseLayoutProps } from '@/shared/types/core';

export default function CatalogLayout({ children }: BaseLayoutProps) {
    const catalog = useSelectedLayoutSegment();

    return (
        <Stack>
            <div>Search bar</div>

            <div>{catalog}</div>

            {children}

            <button>Drawer</button>
        </Stack>
    );
}
