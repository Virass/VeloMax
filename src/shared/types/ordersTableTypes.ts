import type { OrderEntity } from './orderType';
import type { TableColumn } from './tableTypes';

type AdditionalHeadings = 'quantity' | 'total';

type ColumnType = keyof OrderEntity | AdditionalHeadings;

export type OrdersColumns = Partial<
    Record<ColumnType, TableColumn<OrderEntity>>
>;
