import type { ComponentPropsWithoutRef } from 'react';

import type { Table as MantineTable } from '@mantine/core';

export type TableColumn<T> = {
    title: string;
    render?: (row: T) => string;
};

type MantineTableBaseProps = Omit<
    ComponentPropsWithoutRef<typeof MantineTable>,
    'data' | 'columns'
>;

export interface TableProps<T> extends MantineTableBaseProps {
    columns: Record<string, TableColumn<T>>;
    data: T[];
}
