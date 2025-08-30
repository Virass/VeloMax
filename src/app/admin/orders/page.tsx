import { Suspense } from 'react';

import { Orders } from '@/features/admin-panel/orders';
import TableSkeleton from '@/shared/components/TableSkeleton';
import { getOrderTableColumnTitles } from '@/shared/lib/ordersTableData';

export default function OrdersPage() {
    const ordersTableColumnsTitles = getOrderTableColumnTitles();

    return (
        <Suspense
            fallback={
                <TableSkeleton
                    columns={ordersTableColumnsTitles}
                    rowsCount={5}
                />
            }
        >
            <Orders />
        </Suspense>
    );
}
