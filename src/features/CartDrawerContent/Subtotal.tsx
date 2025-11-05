import { Group, Text } from '@mantine/core';

interface Props {
    total: number;
}

export default function Subtotal({ total }: Props) {
    return (
        <Group
            justify="space-between"
            p="lg"
            bg="gray.3"
            style={{ borderTop: '1px solid black' }}
        >
            <Text>Cart Subtotal</Text>

            <Text>{`$${total}`}</Text>
        </Group>
    );
}
