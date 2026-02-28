'use client';

import { Group, Stack, Text } from '@mantine/core';
import Image from 'next/image';

import type { CartItem } from '@/core/store/ShoppingCartSlice';
import { useAppStore } from '@/core/store/store';

import { Button } from './Button';
import NumberInputField from './NumberInputField';
import { getTotalUnitPrice } from '../lib/getTotalItemPrice';
import DeleteIcon from '../ui/icons/DeleteIcon';

interface Props {
    item: CartItem;
}

export default function DrawerCartItem({ item }: Props) {
    const { name, description, id, quantity, discountPrice, price } = item;
    const removeItem = useAppStore((state) => state.shoppingCart.removeItem);
    const totalUnitPrice = getTotalUnitPrice(quantity, discountPrice, price);
    const updateQuantity = useAppStore(
        (state) => state.shoppingCart.updateQuantity
    );

    return (
        <Group align="start" justify="space-between">
            <Image
                src="https://customwheelbuilder.com/cdn/shop/products/Screenshot2021-08-139.36.38AM_4337d2e9-b2d8-40f3-9d1d-1e06813ae497_540x.png?v=1628878170"
                height={80}
                width={100}
                alt="image"
            />

            <Stack gap="15px">
                <Stack gap="5px">
                    <Text fw="600">{name}</Text>

                    <Text maw="200px">{`${description?.slice(0, 50)}...`}</Text>
                </Stack>

                <Group justify="space-between">
                    <NumberInputField
                        value={quantity}
                        min={1}
                        w="60px"
                        onChange={(value) => updateQuantity(id, Number(value))}
                    />

                    <Text>{`₴${totalUnitPrice}`}</Text>
                </Group>
            </Stack>
            <Button variant="invisible" onClick={() => removeItem(id)}>
                <DeleteIcon color="gray.6" />
            </Button>
        </Group>
    );
}
