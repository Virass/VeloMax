import { simulateCrud } from '@/core/config/api';
import { ordersExample } from '@/shared/constants/mockData';
import { createLookupMap } from '@/shared/lib/createLookupMap';
import type { OrderEntity } from '@/shared/types/orderType';

import { getServices } from '../../bikeServices/services/bikeServices.service';
import { getProducts } from '../../products';

export async function getOrders(): Promise<OrderEntity[]> {
    const orders = await simulateCrud(ordersExample, 1500);

    return orders;
}

export async function getOrdersWithRevenue(): Promise<
    (OrderEntity & { total: number })[]
> {
    // This solution is only suitable for local data manipulation. Once we have a real data, this function will be rewritten.

    const [orders, products, services] = await Promise.all([
        getOrders(),
        getProducts(),
        getServices(),
    ]);

    const productsMap = createLookupMap(products, 'id');
    const servicesMap = createLookupMap(services, 'id');

    return orders.map((order) => {
        const totalRevenue = order.items.reduce((sum, item) => {
            const currentItem =
                item.type === 'product'
                    ? productsMap[item.itemId]
                    : servicesMap[item.itemId];

            return currentItem ? sum + currentItem.price : sum;
        }, 0);

        return { ...order, total: totalRevenue };
    });
}
