'use client';

import { type PropsWithChildren } from 'react';

import { Stack } from '@mantine/core';
import { useSelectedLayoutSegment } from 'next/navigation';

import SearchBar from '@/shared/components/SearchBar';

export default function CatalogLayout({ children }: PropsWithChildren) {
    const catalog = useSelectedLayoutSegment();

    const catalogInSingular = catalog === 'categories' ? 'category' : 'product';

    return (
        <Stack>
            <SearchBar
                placeholder={`Look for a specific ${catalogInSingular}`}
                width={300}
            />

            <div>{catalog}</div>

            {children}

            <button>Drawer</button>
        </Stack>
    );
}
