import {
    Skeleton,
    Table as MantineTable,
    TableTbody,
    TableTd,
    TableTh,
    TableThead,
    TableTr,
} from '@mantine/core';

interface TableSkeletonProps {
    columns: string[];
    rowsCount?: number;
}

export default function TableSkeleton({
    columns,
    rowsCount = 5,
}: TableSkeletonProps) {
    const rows = Array.from({ length: rowsCount });

    function randomWidth(min = 10, max = 100) {
        return `${Math.floor(Math.random() * (max - min + 1) + min)}%`;
    }

    return (
        <MantineTable
            striped
            highlightOnHover
            withColumnBorders
            verticalSpacing="md"
            horizontalSpacing="lg"
            withTableBorder
            withRowBorders
        >
            <TableThead>
                <TableTr>
                    {columns.map((column) => (
                        <TableTh key={column}>{column}</TableTh>
                    ))}
                </TableTr>
            </TableThead>
            <TableTbody>
                {rows.map((_row, rowIndex) => (
                    <TableTr key={rowIndex}>
                        {columns.map((_col, colIndex) => (
                            <TableTd key={colIndex}>
                                <Skeleton height={14} width={randomWidth()} />
                            </TableTd>
                        ))}
                    </TableTr>
                ))}
            </TableTbody>
        </MantineTable>
    );
}
