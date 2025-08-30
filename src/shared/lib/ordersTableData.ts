import { convertDateToString } from './convertDateToString';
import type { OrdersColumns } from '../types/ordersTableTypes';
import type { OrderEntity } from '../types/orderType';

function displayOrderItems(row: OrderEntity) {
    const itemIds = row.items.map((item) => item.itemId);
    const maxToShow = 2;

    if (itemIds.length <= maxToShow) {
        return itemIds.join(', ');
    }

    const displayedIds = itemIds.slice(0, maxToShow);
    const remainingCount = itemIds.length - maxToShow;

    return `${displayedIds.join(', ')} and ${remainingCount} more`;
}

function summarizeOrderItemsQuantity(row: OrderEntity) {
    return row.items.reduce((sum, item) => sum + item.quantity, 0).toString();
}

export const ordersTableColumns: OrdersColumns = {
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
    },
};

export function getOrderTableColumnTitles() {
    return Object.values(ordersTableColumns).map((column) => column.title);
}
