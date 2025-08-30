import { createLookupMap } from './createLookupMap';
import type { OrderEntity } from '../types/orderType';
import type { Product } from '../types/productType';
import type { Service } from '../types/serviceType';

export function displayOrderItems(row: OrderEntity) {
    const itemIds = row.items.map((item) => item.itemId);
    const maxToShow = 2;

    if (itemIds.length <= maxToShow) {
        return itemIds.join(', ');
    }

    const displayedIds = itemIds.slice(0, maxToShow);
    const remainingCount = itemIds.length - maxToShow;

    return `${displayedIds.join(', ')} and ${remainingCount} more`;
}

export function summarizeOrderItemsQuantity(row: OrderEntity) {
    return row.items.reduce((sum, item) => sum + item.quantity, 0).toString();
}

export function calculateOrderRevenue(
    row: OrderEntity,
    products: Product[],
    services: Service[]
) {
    const productsMap = createLookupMap(products, 'id');
    const servicesMap = createLookupMap(services, 'id');

    return row.items
        .reduce((sum, item) => {
            const currentItem =
                item.type === 'product'
                    ? productsMap[item.itemId]
                    : servicesMap[item.itemId];
            return currentItem ? sum + currentItem.price : sum;
        }, 0)
        .toString();
}
