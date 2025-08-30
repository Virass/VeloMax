import { simulateCrud } from '@/core/config/api';
import { ordersExample } from '@/shared/constants/mockData';
import type { OrderEntity } from '@/shared/types/orderType';

export async function getOrders(): Promise<OrderEntity[]> {
    const orders = await simulateCrud(ordersExample, 1500);

    return orders;
}
