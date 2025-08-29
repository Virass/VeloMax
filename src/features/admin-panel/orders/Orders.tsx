import {
    Table,
    TableTbody,
    TableTd,
    TableTh,
    TableThead,
    TableTr,
} from '@mantine/core';

import {
    ordersExample,
    productsExample,
    servicesExample,
} from '@/shared/constants/mockData';
import type { OrderEntity, OrderItem } from '@/shared/types/orderType';
import type { Product } from '@/shared/types/productType';
import type { Service } from '@/shared/types/serviceType';

type AdditionalHeadings = 'quantity' | 'total';

type HeadingType = keyof OrderEntity | AdditionalHeadings;

const ordersTableHeadings: Partial<Record<HeadingType, string>> = {
    orderNumber: 'Order Number',
    items: 'Products/Services',
    completedAt: 'Date',
    userId: 'Customer ID',
    status: 'Status',
    quantity: 'QTY',
    total: 'Revenue',
};

export default function Orders() {
    const productsMap = Object.fromEntries(
        productsExample.map((p) => [p.id, p])
    );
    const servicesMap = Object.fromEntries(
        servicesExample.map((s) => [s.id, s])
    );

    return (
        <Table>
            <TableThead>
                <TableTr>
                    {Object.entries(ordersTableHeadings).map(([key, value]) => (
                        <TableTh key={key}>{value}</TableTh>
                    ))}
                </TableTr>
            </TableThead>
            <TableTbody>
                {ordersExample.map((order, rowIndex) => {
                    let quantity: number = 0;
                    let total: number = 0;

                    return (
                        <TableTr key={rowIndex}>
                            {(
                                Object.keys(
                                    ordersTableHeadings
                                ) as HeadingType[]
                            ).map((heading) => {
                                let value: string | number | Date | undefined =
                                    undefined;

                                if (heading in order) {
                                    value = order[heading as keyof OrderEntity];
                                }

                                if (heading === 'items') {
                                    const { items } = order;

                                    value = items
                                        .map((item) => {
                                            quantity += item.quantity;
                                            let currentItem:
                                                | Product
                                                | Service
                                                | undefined;

                                            if (item.type === 'product') {
                                                currentItem =
                                                    productsMap[item.itemId];
                                            } else if (
                                                item.type === 'service'
                                            ) {
                                                currentItem =
                                                    servicesMap[item.itemId];
                                            }

                                            if (currentItem) {
                                                total += currentItem.price;
                                            }

                                            return item.itemId;
                                        })
                                        .join(', ');
                                }

                                if (value instanceof Date) {
                                    value = value.toString();
                                }

                                if (heading === 'quantity') {
                                    value = quantity;
                                }

                                if (heading === 'total') {
                                    value = total;
                                }

                                return <TableTd key={heading}>{value}</TableTd>;
                            })}
                        </TableTr>
                    );
                })}
            </TableTbody>
        </Table>
    );
}
