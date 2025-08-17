'use client';

import type { PropsWithChildren } from 'react';

import { Stack } from '@mantine/core';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function CatalogLayout({ children }: PropsWithChildren) {
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
