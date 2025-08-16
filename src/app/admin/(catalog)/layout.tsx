'use client';

import { Stack } from '@mantine/core';
import { useSelectedLayoutSegment } from 'next/navigation';

import { PropsWithChildren } from 'react';

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
