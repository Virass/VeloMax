'use client';

import { type PropsWithChildren } from 'react';

import { Group, Stack } from '@mantine/core';
import { useSelectedLayoutSegment } from 'next/navigation';

import { EntityCreateForm } from '@/features/admin-panel/entityCreateForm';
import Drawer from '@/shared/components/Drawer';
import SearchBar from '@/shared/components/SearchBar';
import { AdminCatalogNameMap } from '@/shared/constants/urls';
import { type AdminKey, SINGULAR_CATALOG_NAME } from '@/shared/types/urls';

export default function CatalogLayout({ children }: PropsWithChildren) {
    const catalog = useSelectedLayoutSegment() as AdminKey | null;

    const catalogInSingular = catalog
        ? (AdminCatalogNameMap[catalog] as SINGULAR_CATALOG_NAME)
        : SINGULAR_CATALOG_NAME.CATEGORIES;

    return (
        <Stack>
            <Group justify="space-between">
                <SearchBar
                    placeholder={`Look for a specific ${catalogInSingular}`}
                    width={300}
                />

                <Drawer
                    title={`New ${catalogInSingular}`}
                    targetButtonTitle={`Create new ${catalogInSingular}`}
                    position="right"
                >
                    <EntityCreateForm catalog={catalogInSingular} />
                </Drawer>
            </Group>

            <div>{catalog}</div>

            {children}
        </Stack>
    );
}
