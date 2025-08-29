export type OrderStatus =
    | 'pending'
    | 'confirmed'
    | 'shipped'
    | 'delivered'
    | 'canceled';

export type OrderItem = {
    type: 'product' | 'service';
    itemId: string;
    quantity: number;
};

export type OrderEntity = BasicEntity & {
    orderNumber: number;
    userId: string;
    status: OrderStatus;
    items: OrderItem[];
    promoCodeId?: string;
    note?: string;
    shippingAddress?: string;
    phoneNumber?: string;
    completedAt?: Date;
};
