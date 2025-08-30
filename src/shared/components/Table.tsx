import type { ReactNode } from 'react';

import {
    Table as MantineTable,
    TableTbody,
    TableTd,
    TableTh,
    TableThead,
    TableTr,
} from '@mantine/core';

import type { TableColumn, TableProps } from '../types/tableTypes';

export default function Table<T>({ columns, data, ...rest }: TableProps<T>) {
    const columnsEntries = Object.entries(columns) as [
        keyof T,
        TableColumn<T>,
    ][];

    return (
        <MantineTable
            striped
            highlightOnHover
            withColumnBorders
            verticalSpacing="md"
            horizontalSpacing="lg"
            withTableBorder
            withRowBorders
            {...rest}
        >
            <TableThead>
                <TableTr>
                    {columnsEntries.map(([columnName, columnValue]) => (
                        <TableTh key={columnName.toString()}>
                            {columnValue.title}
                        </TableTh>
                    ))}
                </TableTr>
            </TableThead>
            <TableTbody>
                {data.map((row, rowIndex) => (
                    <TableTr key={rowIndex}>
                        {columnsEntries.map(([columnName, columnValue]) => (
                            <TableTd key={columnName.toString()}>
                                {columnValue.render
                                    ? columnValue.render(row)
                                    : (row[columnName] as ReactNode)}
                            </TableTd>
                        ))}
                    </TableTr>
                ))}
            </TableTbody>
        </MantineTable>
    );
}
