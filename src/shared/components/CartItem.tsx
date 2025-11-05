import { Group, Stack, Text } from '@mantine/core';
import Image from 'next/image';

import type { CartItem } from '@/core/store/shoppingCartStore';

import { Button } from './Button';
import NumberInputField from './NumberInputField';
import DeleteIcon from '../ui/icons/DeleteIcon';

interface Props {
    item: CartItem;
}

export default function CartItem({ item }: Props) {
    const { name, description, quantity, price } = item;

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

                    <Text maw="200px">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero, eligendi.
                    </Text>
                </Stack>

                <Group justify="space-between">
                    <NumberInputField value={quantity} w="60px" />

                    <Text>{`$${price}`}</Text>
                </Group>
            </Stack>
            {/* DeleteButton */}
            <Button variant="invisible">
                <DeleteIcon color="gray.6" />
            </Button>
        </Group>
    );
}
