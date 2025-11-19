import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Product } from '@/shared/types/productType';

export type CartItem = Product & {
    quantity: number;
    color?: string;
    size?: string;
    // other custom props depending on the product
};

interface CartState {
    items: CartItem[];
    addItem: (cartItem: CartItem) => void;
    removeItem: (id: string) => void;
    updateItem: (id: string, updatedItem: CartItem) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [
                {
                    id: 'prod_001',
                    name: 'Roadster 2000',
                    rating: 4,
                    description:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                    categoryId: 'Road Bike',
                    colors: ['white', 'black', 'gray.7', 'green.5', 'yellow.7'],
                    article: 'road-2000',
                    brand: 'SpeedX',
                    price: 499,
                    imagesUrls: [
                        'https://customwheelbuilder.com/cdn/shop/products/Screenshot2021-08-139.36.38AM_4337d2e9-b2d8-40f3-9d1d-1e06813ae497_540x.png?v=1628878170',
                        'https://customwheelbuilder.com/cdn/shop/products/470563_540x.jpg?v=1586286914',
                        'https://customwheelbuilder.com/cdn/shop/products/Screenshot2022-09-144.41.56PM_540x.png?v=1663195342',
                    ],
                    isActive: true,
                    amount: 10,
                    createdAt: new Date(2024, 11, 8),
                    updatedAt: new Date(2024, 11, 8),
                    quantity: 2,
                },
                {
                    id: 'prod_09',
                    name: 'Roadster 2000',
                    rating: 4,
                    description:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                    categoryId: 'Road Bike',
                    colors: ['white', 'black', 'gray.7', 'green.5', 'yellow.7'],
                    article: 'road-2000',
                    brand: 'SpeedX',
                    price: 99,
                    discountPrice: 50,
                    imagesUrls: [
                        'https://customwheelbuilder.com/cdn/shop/products/Screenshot2021-08-139.36.38AM_4337d2e9-b2d8-40f3-9d1d-1e06813ae497_540x.png?v=1628878170',
                        'https://customwheelbuilder.com/cdn/shop/products/470563_540x.jpg?v=1586286914',
                        'https://customwheelbuilder.com/cdn/shop/products/Screenshot2022-09-144.41.56PM_540x.png?v=1663195342',
                    ],
                    isActive: true,
                    amount: 10,
                    createdAt: new Date(2024, 11, 8),
                    updatedAt: new Date(2024, 11, 8),
                    quantity: 1,
                },
                {
                    id: 'prod_08',
                    name: 'Roadster 2000',
                    rating: 4,
                    description:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                    categoryId: 'Road Bike',
                    colors: ['white', 'black', 'gray.7', 'green.5', 'yellow.7'],
                    article: 'road-2000',
                    brand: 'SpeedX',
                    price: 1500,
                    discountPrice: 1200,
                    imagesUrls: [
                        'https://customwheelbuilder.com/cdn/shop/products/Screenshot2021-08-139.36.38AM_4337d2e9-b2d8-40f3-9d1d-1e06813ae497_540x.png?v=1628878170',
                        'https://customwheelbuilder.com/cdn/shop/products/470563_540x.jpg?v=1586286914',
                        'https://customwheelbuilder.com/cdn/shop/products/Screenshot2022-09-144.41.56PM_540x.png?v=1663195342',
                    ],
                    isActive: true,
                    amount: 10,
                    createdAt: new Date(2024, 11, 8),
                    updatedAt: new Date(2024, 11, 8),
                    quantity: 1,
                },
                {
                    id: 'prod_07',
                    name: 'Roadster 2000',
                    rating: 4,
                    description:
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                    categoryId: 'Road Bike',
                    colors: ['white', 'black', 'gray.7', 'green.5', 'yellow.7'],
                    article: 'road-2000',
                    brand: 'SpeedX',
                    price: 499,
                    imagesUrls: [
                        'https://customwheelbuilder.com/cdn/shop/products/Screenshot2021-08-139.36.38AM_4337d2e9-b2d8-40f3-9d1d-1e06813ae497_540x.png?v=1628878170',
                        'https://customwheelbuilder.com/cdn/shop/products/470563_540x.jpg?v=1586286914',
                        'https://customwheelbuilder.com/cdn/shop/products/Screenshot2022-09-144.41.56PM_540x.png?v=1663195342',
                    ],
                    isActive: true,
                    amount: 10,
                    createdAt: new Date(2024, 11, 8),
                    updatedAt: new Date(2024, 11, 8),
                    quantity: 1,
                },
            ],

            addItem: (cartItem) => {
                const items = get().items;
                const existingItem = items.find((i) => i.id === cartItem.id);

                if (existingItem) {
                    set({
                        items: items.map((i) =>
                            i.id === cartItem.id
                                ? {
                                      ...i,
                                      quantity: i.quantity + cartItem.quantity,
                                  }
                                : i
                        ),
                    });
                } else {
                    set({ items: [...items, cartItem] });
                }
            },

            removeItem: (id) => {
                set({ items: get().items.filter((i) => i.id !== id) });
            },

            updateItem: (id, updatedItem) => {
                const items = get().items;

                set({
                    items: items.map((i) => {
                        if (i.id === id) {
                            return updatedItem;
                        }

                        return i;
                    }),
                });
            },

            updateQuantity: (id, quantity) => {
                if (quantity <= 0) {
                    set({ items: get().items.filter((i) => i.id !== id) });
                    return;
                }
                set({
                    items: get().items.map((i) =>
                        i.id === id ? { ...i, quantity } : i
                    ),
                });
            },

            clearCart: () => set({ items: [] }),

            get totalItems() {
                return get().items.reduce(
                    (acc, item) => acc + item.quantity,
                    0
                );
            },

            get totalPrice() {
                return get().items.reduce((acc, item) => {
                    const price = item.discountPrice ?? item.price;
                    return acc + price * item.quantity;
                }, 0);
            },
        }),
        {
            name: 'cart-storage',
        }
    )
);
