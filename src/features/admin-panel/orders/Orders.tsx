import Table from '@/shared/components/Table';
import { convertDateToString } from '@/shared/lib/convertDateToString';
import {
    calculateOrderRevenue,
    displayOrderItems,
    summarizeOrderItemsQuantity,
} from '@/shared/lib/ordersTableData';
import type { OrdersColumns } from '@/shared/types/ordersTableTypes';
import type { OrderEntity } from '@/shared/types/orderType';

import { getServices } from '../bikeServices/services/bikeServices.service';
import { getProducts } from '../products';
import { getOrders } from './services/orders.service';

export default async function Orders() {
    const products = await getProducts();
    const services = await getServices();
    const orders = await getOrders();

    const ordersTableColumns: OrdersColumns = {
        orderNumber: {
            title: 'Order number',
        },
        items: {
            title: 'Products/Services',
            render: displayOrderItems,
        },
        completedAt: {
            title: 'Date',
            render: (row: OrderEntity) => convertDateToString(row.completedAt),
        },
        userId: {
            title: 'Customer ID',
        },
        status: {
            title: 'Status',
        },
        quantity: {
            title: 'QTY',
            render: summarizeOrderItemsQuantity,
        },
        total: {
            title: 'Revenue',
            render: (row: OrderEntity) =>
                calculateOrderRevenue(row, products, services),
        },
    };

    return <Table columns={ordersTableColumns} data={orders} />;
}

// add styling
// add drawer on each table row click
