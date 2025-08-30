import Table from '@/shared/components/Table';
import { ordersTableColumns } from '@/shared/lib/ordersTableData';

import { getOrdersWithRevenue } from './services/orders.service';

export default async function Orders() {
    const orders = await getOrdersWithRevenue();

    return <Table columns={ordersTableColumns} data={orders} />;
}
